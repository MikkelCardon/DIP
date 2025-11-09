import express from 'express'
import session from 'express-session'

const app = express()
const PORT = 8080

app.use(express.json())
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,

}))

app.get("/", (req, res) => {
    if(!req.session.viewCount){
        req.session.viewCount = 1
    } else {
        req.session.viewCount += 1
    }
    
    res.send(`View count: ${req.session.viewCount}`)
})

app.listen(PORT, () =>{
    console.log("SERVER IS RUNNING ON PORT ", PORT)
})