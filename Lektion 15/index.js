const express = require("express")
const app = express()

const pug = require("pug")
app.set("view engine", "pug")

app.get("/", (req, res) => {
    res.render('frontpage', {titel: "Hey", message: "Hello There"})
})

app.listen(8080, () => {console.log("Server running on port: 8080")})