import express from 'express';       // The main Express framework
import path from 'path';             // Node.js utility for handling file paths
import { fileURLToPath } from 'url'; // Needed for ES Modules to use __dirname

import morgan from 'morgan'; // Logs HTTP requests in console (useful in dev)



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const PORT = 8080

app.use(morgan('short'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get("/earthquake/:minMag", async (req, res) => {
    let minMag = parseInt(req.params.minMag)

    if(!Number.isInteger(minMag)){
        return res.status(400).send()
    }

    const earthquakes = await processAPI(minMag);
    res.json(earthquakes);
})

async function processAPI(minMag){
    let res = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson')
    let json = await res.json()
    
    const earthquakeArray = json.features
        .map(f => f.properties)
        .filter(p => p.mag >= minMag)
        .map(p => ({
            mag: p.mag,
            place: p.place,
            time: new Date(p.time)
        }))
        .sort((a,b) => b.mag - a.mag)

    //console.log(earthquakeArray);
    return earthquakeArray
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});