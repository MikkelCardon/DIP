import express from 'express';       // The main Express framework
import path from 'path';             // Node.js utility for handling file paths
import { fileURLToPath } from 'url'; // Needed for ES Modules to use __dirname

import morgan from 'morgan'; // Logs HTTP requests in console (useful in dev)



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const PORT = 8080

app.use(morgan('short')); 
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get("/earthquake/:minMag", (req, res) => {
    let minMag = parseInt(req.params.minMag)

    if(!Number.isInteger(minMag)){
        res.status(400).send()
    }

    processAPI(minMag).json() 
})

function processAPI(minMag){

    let features = json.features
    let earthquakeArray = []
    
    features.forEach(dataObject => {
        let properties = dataObject.properties
        if(properties.mag < minMag){
            return
        }
        
        earthquakeArray.push({
            "mag": properties.mag, 
            "place": properties.place, 
            "time": new Date(properties.time)
        })
        
    });
    
    earthquakeArray.sort((a,b) => b.mag - a.mag)
    console.log(earthquakeArray);
}

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});