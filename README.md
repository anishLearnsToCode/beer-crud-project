# Beer Project

This is a simple project that will create a new sqlite database and load sample beers from a beers array. 
The project exposes simple CRUD endpoints to add and remove beers from the inventory.  

## Running it on your machine

Clone project locally
```
git clone https://github.com/anishLearnsToCode/beers-project.git
cd beers-project
```

Install all dependencies
````bash
npm i
````

Run the project
```bash
node server.ts
```

Open your browser on [http://localhost:8000](http://localhost:8000). to see success maessage

````json
{
"message": "Ok"
}
````


## API Endpoints

### GET /api/beers

Get a list of all beers

```json
{
    "message": "success",
    "data": [
        {
            "id": 5,
            "name": "Avery Brown Dredge",
            "image_url": "https://images.punkapi.com/v2/5.png",
            "description": "An Imperial Pilsner in collaboration with beer writers. Tradition. Homage. Revolution. We wanted to showcase the awesome backbone of the Czech brewing tradition, the noble Saaz hop, and also tip our hats to the modern beers that rock our world, and the people who make them."
        },
        {
            "id": 7,
            "name": "AB:12",
            "image_url": "https://images.punkapi.com/v2/7.png",
            "description": "An Imperial Black Belgian Ale aged in old Invergordon Scotch whisky barrels with mountains of raspberries, tayberries and blackberries in each cask. Decadent but light and dry, this beer would make a fantastic base for ageing on pretty much any dark fruit - we used raspberries, tayberries and blackberries beause they were local."
        },
        {
            "id": 9,
            "name": "AB:07",
            "image_url": "https://images.punkapi.com/v2/9.png",
            "description": "Whisky cask-aged imperial scotch ale. Beer perfect for when the rain is coming sideways. Liquorice, plum and raisin temper the warming alcohol, producing a beer capable of holding back the Scottish chill."
        },
        {
            "id": 10,
            "name": "Bramling X",
            "image_url": "https://images.punkapi.com/v2/10.png",
            "description": "Good old Bramling Cross is elegant, refined, assured, (boring) and understated. Understated that is unless you hop the living daylights out of a beer with it. This is Bramling Cross re-invented and re-imagined, and shows just what can be done with English hops if you use enough of them. Poor Bramling Cross normally gets lost in a woeful stream of conformist brown ales made by sleepy cask ale brewers. But not anymore. This beer shows that British hops do have some soul, and is a fruity riot of blackberries, pears, and plums. Reminds me of the bramble, apple and ginger jam my grandmother used to make."
        },
        {
            "id": 15,
            "name": "Mixtape 8",
            "image_url": "https://images.punkapi.com/v2/15.png",
            "description": "This recipe is for the Belgian Tripel base. A blend of two huge oak aged beers – half a hopped up Belgian Tripel, and half a Triple India Pale Ale. Both aged in single grain whisky barrels for two years and blended, each beer brings its own character to the mix. The Belgian Tripel comes loaded with complex spicy, fruity esters, and punchy citrus hop character."
        },
        {
            "id": 16,
            "name": "Libertine Porter",
            "image_url": "https://images.punkapi.com/v2/16.png",
            "description": "An avalanche of cross-continental hop varieties give this porter a complex spicy, resinous and citrusy aroma, with a huge malt bill providing a complex roasty counterpoint. Digging deeper into the flavour draws out cinder toffee, bitter chocolate and hints of woodsmoke."
        },
        {
            "id": 17,
            "name": "AB:06",
            "image_url": "https://images.punkapi.com/v2/17.png",
            "description": "Our sixth Abstrakt, this imperial black IPA combined dark malts with a monumental triple dry-hop, using an all-star team of some of our favourite American hops. Roasty and resinous."
        },
        {
            "id": 20,
            "name": "Rabiator",
            "image_url": "https://images.punkapi.com/v2/keg.png",
            "description": "Imperial Wheat beer / Weizenbock brewed by a homesick German in leather trousers. Think banana bread, bubble gum and David Hasselhoff."
        },
        {
            "id": 22,
            "name": "Devine Rebel (w/ Mikkeller)",
            "image_url": "https://images.punkapi.com/v2/22.png",
            "description": "Two of Europe's most experimental, boundary-pushing brewers, BrewDog and Mikkeller, combined forces to produce a rebellious beer that combined their respective talents and brewing skills. The 12.5% Barley Wine fermented well, and the champagne yeast drew it ever closer to 12.5%. The beer was brewed with a single hop variety and was going to be partially aged in oak casks."
        },
        {
            "id": 23,
            "name": "Storm",
            "image_url": "https://images.punkapi.com/v2/23.png",
            "description": "Dark and powerful Islay magic infuses this tropical sensation of an IPA. Using the original Punk IPA as a base, we boosted the ABV to 8% giving it some extra backbone to stand up to the peated smoke imported directly from Islay."
        },
        {
            "id": 24,
            "name": "The End Of History",
            "image_url": "https://images.punkapi.com/v2/24.png",
            "description": "The End of History: The name derives from the famous work of philosopher Francis Fukuyama, this is to beer what democracy is to history. Complexity defined. Floral, grapefruit, caramel and cloves are intensified by boozy heat."
        },
        {
            "id": 28,
            "name": "HBC 369",
            "image_url": "https://images.punkapi.com/v2/28.png",
            "description": "HBC 369 brings rich fruity flavours with the tiniest layer of candy coating on top. HBC 369 (the hop) can bring notes of blueberries, pear, and possibly even sweet potato. HBC 369 (the beer) was balanced, with just one hop providing a complex aroma, and a dry bitterness."
        },
        {
            "id": 32,
            "name": "AB:05",
            "image_url": "https://images.punkapi.com/v2/32.png",
            "description": "Belgian Imperial Stout aged on toasted coconut and cacao. The Belgian yeast strain introduces a whole new dimension to the Imperial Stout style resulting in a beer that resembles a marshmallow toasted on a smouldering barbeque then smothered in dark chocolate. Massively seductive and encapsulating this blacker than midnight beer pours with coffee brown head so thick you could almost stand on it, and with an epic lacing on your glass."
        },
        {
            "id": 33,
            "name": "Sorachi Ace",
            "image_url": "https://images.punkapi.com/v2/33.png",
            "description": "A hop that tastes of bubble gum? Seriously? No, we did not believe it either. But it does! This is one unique, son of a bitch of a hop. Lemony, deep, musty with a smoothness that belies its power. This hop is lemony like a lemon who was angry earlier but is now tired because of all the rage. This hop of Japanese origin is best enjoyed trying to make sushi from your gold fish, or trying to persuade your girlfriend (or boyfriend maybe) to dress up as a Geisha for Valentine’s Day."
        },
        {
            "id": 37,
            "name": "Zephyr",
            "image_url": "https://images.punkapi.com/v2/37.png",
            "description": "A 9.2% Double IPA aged for 21 months in a 1965 Invergordon cask with 30 kg of fresh highland strawberries. This beer is a riot of whisky, caramel and strawberry, all tempered by a toe curling bitterness enducing rapture in all who taste it. Who needs champagne?"
        },
        {
            "id": 42,
            "name": "Hardcore IPA",
            "image_url": "https://images.punkapi.com/v2/42.png",
            "description": "Pounding a triple payload of the biggest North American hops humanity has devised, braced by a backbone of caramel malt, this beer is deep, astringent and resinous, pushing to the extremes of lupulin thresholds. There’s nothing inscrutable going on; no mystery in the backstory. It doesn’t seek to be understood. A beer incapable of empathy; only hop overload."
        },
        {
            "id": 46,
            "name": "Anarchist Alchemist",
            "image_url": "https://images.punkapi.com/v2/46.png",
            "description": "About as far as you can push an IPA; Anarchist Alchemist packs in three times the malt and three of our favourite hops. Nelson Sauvin, Amarillo and Centennial bring a range of flavours, touching on tropical fruit, white grape, tangerine, grapefruit, pine, spiced orange... the list goes on!"
        },
        {
            "id": 50,
            "name": "Lost Dog (w/Lost Abbey)",
            "image_url": "https://images.punkapi.com/v2/50.png",
            "description": "Our first beer aged in rum casks, Lost Dog saw us brew a collaboration imperial porter with our friends at Lost Abbey. The base beer was packed with toffee, chocolate and roasty notes, balanced with a subtle spicy hop character. The rum casks add a warming, spiced vanilla edge."
        },
        {
            "id": 52,
            "name": "Paradox Islay",
            "image_url": "https://images.punkapi.com/v2/52.png",
            "description": "In 2006 James and Martin hijacked a beer dinner run by Michael Jackson, the acclaimed beer and whisky writer, and convinced him to taste one of their home brews. This was a defining moment in BrewDog prehistory, and that beer was the first incarnation of the ubiquitous Paradox. Aged in a variety of casks over the years, Paradox is dark, decadent and encapsulating. Can be enjoyed fresh; phenomenal when aged."
        },
        {
            "id": 57,
            "name": "Prototype 27",
            "image_url": "https://images.punkapi.com/v2/57.png",
            "description": "Hardcore IPA with raspberries aged in Caol Ila casks. Full-bodied and compelling, the robust malt base provides an initial layer of honey, cinnamon and biscuity malt sweetness. Soon the Scottish berries are in on the act, a dominating tug of war between sweet and tart with an overbearing zest. As the beer slips back across your tongue the hops demand and definitely get your attention. At 100 IBUs the bitterness smashes into the back of your throat as the resinous, spiced orange peel flavours add depth to the berry fruitiness."
        },
        {
            "id": 58,
            "name": "Coffee Imperial Stout",
            "image_url": "https://images.punkapi.com/v2/58.png",
            "description": "This beer was released as both as 'Danish Beerhouse Coffee Imperial Stout' and 'BrewDog Coffee Imperial Stout'. Deep, dark, roasted flavours make this a perfect Sunday brunch beer."
        },
        {
            "id": 62,
            "name": "AB:08",
            "image_url": "https://images.punkapi.com/v2/62.png",
            "description": "Flavours and aromas you'd expect from a Stout, but brewed without dark malts. The full mouthfeel comes courtesy of wheat and oats, while smoked malt and the twist additions add the complex flavours normally provided by highly kilned malts."
        },
        {
            "id": 63,
            "name": "Sunk Punk",
            "image_url": "https://images.punkapi.com/v2/63.png",
            "description": "It's rumoured just a drop can calm the fiercest of storms. A balance of sweet, salt and savoury, citrus, spruce and caramel. Fermented at the bottom of the North Sea, which just so happens to be the perfect temperature for lagers to ferment."
        },
        {
            "id": 66,
            "name": "Tokyo Rising Sun - Lowland",
            "image_url": "https://images.punkapi.com/v2/66.png",
            "description": "A forgotten gem in the deepest, darkest corner of the warehouse. Aged in a Lowland whisky cask resulting in decadent chocolate, toasted vanilla, indulgent spiced fruit, a mesmerizingly hypnotic mouthfeel and new layers that emerge on every sip."
        },
        {
            "id": 70,
            "name": "Sunmaid Stout",
            "image_url": "https://images.punkapi.com/v2/keg.png",
            "description": "Brewed by Chris Sartori from Stone Brewing Company in 2010. A dark chocolate stout with dried dark fruit finish. Simcoe provides bitterness with subtle fruity supporting notes, contrasting the chocolate and coffee-laden malt profile. The finish is warming with vanilla and rich dark fruit depth."
        },
        {
            "id": 100,
            "name": "test",
            "image_url": null,
            "description": "test@example.com"
        }
    ]
}
```

### GET /api/beer/{id}

Get beer information by beer id

```json
{
    "message": "success",
    "data": {
        "id": 5,
        "name": "Avery Brown Dredge",
        "image_url": "https://images.punkapi.com/v2/5.png",
        "description": "An Imperial Pilsner in collaboration with beer writers. Tradition. Homage. Revolution. We wanted to showcase the awesome backbone of the Czech brewing tradition, the noble Saaz hop, and also tip our hats to the modern beers that rock our world, and the people who make them."
    }
}
```

### POST /api/beer/

To create a new beer based on POST data (x-www-form-url-encoded)

* id: Unique Beer Id 
* name: Beer  name
* description: Beer description
* image_url: Beer Image URL

![Postman example](https://developerhowto.com/wp-content/uploads/2018/12/PostMan-POST-request.png)


### PATCH /api/beer/{id}

To update beer data by id, based on POST data (x-www-form-url-encoded)

* name: Beer  name
* description: Beer description
* image_url: Beer Image URL

You can send only one attribute to update, the rest of the info remains the same. 

### DELETE /api/beer/{id}

To remove a beer from the database by beer id. 

This example is using the `curl` command line

```bash
curl -X "DELETE" http://localhost:8000/api/beer/2
```

The result is:

`{"message":"deleted","rows":1}`
