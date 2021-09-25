const express = require("express");
const app = express();
const db = require("./database.js");
const md5 = require("md5");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const HTTP_PORT = 8000;

// Start server
app.listen(HTTP_PORT, () => {
    console.log(`Server running on port ${HTTP_PORT}`);
});


app.get("/api/beers", (req, res, next) => {
    const sql = "select * from beer";
    const params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
    });
});


app.get("/api/beer/:id", (req, res, next) => {
    const sql = "select * from beer where id = ?";
    const params = [req.params.id];
    db.get(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "message":"success",
            "data":row
        })
    });
});


app.post("/api/beer/", (req, res, next) => {
    const errors = [];
    if (!req.body.id){
        errors.push("No id specified");
    }
    if (!req.body.name){
        errors.push("No name specified");
    }
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }
    const data = {
        id: req.body.id,
        name: req.body.name,
        image_url: req.body.image_url,
        description: req.body.description
    };
    const sql = 'INSERT INTO beer (id, name, image_url, description) VALUES (?,?,?,?)';
    const params = [data.id, data.name, data.image_url, data.description];
    db.run(sql, params, function (err, result) {
        if (err) {
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id" : this.lastID
        })
    });
});


app.patch("/api/beer/:id", (req, res, next) => {
    const data = {
        name: req.body.name,
        image_url: req.body.image_url,
        description: req.body.description
    };
    db.run(
        `UPDATE beer set 
           name = coalesce(?,name), 
           description = COALESCE(?,description), 
           image_url = coalesce(?,image_url) 
           WHERE id = ?`,
        [data.name, data.description, data.image_url, req.params.id],
        (err, result) => {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({
                message: "success",
                data: data
            })
        });
})


app.delete("/api/beer/:id", (req, res, next) => {
    db.run(
        'DELETE FROM beer WHERE id = ?',
        req.params.id,
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({"message":"deleted", rows: this.changes})
        });
})


// Root path
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});
