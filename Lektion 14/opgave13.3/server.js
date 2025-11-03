import express from "express";
import path from "path";
import { fileURLToPath } from "url";

//import routes from './routes.js';  
//import { Message, Room} from './models.js';

import morgan from "morgan"


const app = express();
const PORT = 8080;

app.use(morgan("short"))
app.use(express.json());

//id - message array
let rooms = new Map()

app.post("/message/:id", (req, res) => {
    let roomId = req.params.id
    let data = req.body
    console.log("body: ", data);
    

    if(!rooms.has(roomId)){
        rooms.set(roomId, [])
        console.log("Created new room: ", roomId);
        
    }

    let messageArray = rooms.get(roomId)
    messageArray.push({
        "name": data.name,
        "room": roomId,
        "message": data.message
    })

    console.log(rooms)
    
    res.status(201).json(messageArray)
})

app.get("/message", (req, res) => {
    let messages = Array.from(rooms.values()).flat()
    res.json(messages)
})

app.get("/message/:id", (req, res) => {
    let id = req.params.id
    let messages = rooms.get(id)
    res.json(messages)
})

app.get("/rooms", (req, res) => {
    let allRooms = Array.from(rooms.keys())
    res.json(allRooms)
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

