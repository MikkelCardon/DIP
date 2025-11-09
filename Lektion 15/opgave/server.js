import express from "express";
import pug from "pug";

import path from "path";
import { fileURLToPath } from "url";
import morgan from 'morgan'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

app.use(morgan('short')); 
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug")

app.get("/", (req, res) => {
    res.render('index', {titel: "Velkommen til min blog", users: users})
})

const users = []


app.get("/user", (req, res) => {
    res.json(users)
})

app.post("/user", (req, res) => {
    let body = req.body
    console.log(body);
    

    let newPerson = {
        "name": body.name,
        "age" : body.age
    }

    users.push(newPerson)

    //res.status(201).json(newPerson)
    res.redirect("/")
})

app.listen(8080, () => {console.log("Server running on port: 8080")})