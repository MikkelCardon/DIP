// opgave12.1.js
const list = document.querySelector(".list")
const inputField = document.getElementById("minMagnitude")

export async function loadEarthquakes(){
    console.log("fetching earthquakes with min magnitude = ", minMag);
    list.innerHTML = ""     

    let res = await fetch(earthquakeUrl)
    let json = await res.json()
    
    
    
    earthquakeArray.forEach(earthquakeObject =>{  
        let newDiv = document.createElement("div")
        newDiv.classList.add("list-item")

        newDiv.textContent = `Magnitude: ${earthquakeObject.mag} - Place: ${earthquakeObject.place} - Time: ${earthquakeObject.time} `

        list.append(newDiv)

    })
}
