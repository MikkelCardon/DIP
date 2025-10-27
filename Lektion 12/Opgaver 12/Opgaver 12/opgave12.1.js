// opgave12.1.js
const earthquakeUrl = // https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php 
    'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';


const list = document.querySelector(".list")

async function loadEarthquakes(){
    console.log("clicked");

    let res = await fetch(earthquakeUrl)
    let json = await res.json()
    
    let features = json.features
    let earthquakeArray = []
    
    features.forEach(dataObject => {
        let properties = dataObject.properties
        if(properties.mag < 5){
            return
        }
        
        earthquakeArray.push(
            {
            mag: properties.mag, 
            place: properties.place, 
            time: properties.time
        })
        
    });
    earthquakeArray.sort((a,b) => b.mag - a.mag)
    console.log(earthquakeArray);
    
    earthquakeArray.forEach(earthquakeObject =>{  
        let newDiv = document.createElement("div")
        newDiv.classList.add("list-item")

        newDiv.textContent = `Magnitude: ${earthquakeObject.mag} - Place: ${earthquakeObject.place} - Time: ${earthquakeObject.time} `

        list.append(newDiv)

    })


}



//mag
//place
//time
