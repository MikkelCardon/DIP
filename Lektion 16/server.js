import express from 'express'
import session from 'express-session'
import morgan from 'morgan'
import path from "path"
import { fileURLToPath } from 'url'

const app = express()
const PORT = 8080

app.use(express.json())
app.use(morgan("tiny"))
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,

}))

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
    if(!req.session.viewCount){
        req.session.viewCount = 1
    } else {
        req.session.viewCount += 1
    }
    
    res.send(`View count: ${req.session.viewCount}`)
})

app.use(express.static('static'))

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "static", "index.html"))
})

app.post("/login", async (req, res) => {
    console.log(req.body);
    
    const {navn, password} = req.body
    if(password === 'kode123' && navn){
        req.session.navn = navn
        res.send({ok: true})
    }else {
        res.send({ok: false})
    }
})

app.get('/session', async (req, res) => {
    const navn = req.session.navn;
    if (navn) {
        res.sendFile(path.join(__dirname, "static", "main.html"))
    } else {
        res.send("INGEN ADGANG")
    }
});

app.listen(PORT, () =>{
    console.log("SERVER IS RUNNING ON PORT ", PORT)
})