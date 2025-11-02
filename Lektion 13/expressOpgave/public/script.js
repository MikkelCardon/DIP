// opgave12.1.js
const list = document.querySelector(".list")
const inputField = document.getElementById("minMagnitude")

async function loadEarthquakes(){
    let minMag = inputField.value

    console.log("fetching earthquakes with min magnitude = ", minMag);
    list.innerHTML = ""     

    let res = await fetch(`/earthquake/${minMag}`)
    let json = await res.json()
    
    json.forEach(earthquakeObject =>{  
        let newDiv = document.createElement("div")
        newDiv.classList.add("list-item")

        newDiv.textContent = `Magnitude: ${earthquakeObject.mag} - Place: ${earthquakeObject.place} - Time: ${earthquakeObject.time} `

        list.append(newDiv)

    })
}

inputField.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {  
        event.preventDefault();
        loadEarthquakes();
    }
});