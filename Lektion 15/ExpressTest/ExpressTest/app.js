// når du vil installere denne app, så kør <npm install>

const express = require('express')
const fetch = require('node-fetch')
const app = express()
// persister jordskælv så alle funktioner kan få adgang til dem når de først er hentet
// når serveren (gen)startes nulstilles denne variabel
let earthquakes

//MIDDLEWARE
// alle filer i assets bliver serveret af 'static' når et request til en fil 
// modtages der ligger i mappen 'assets'
app.use(express.static('assets'))

// når en formular submittes skal dennes data encodes
app.use(express.urlencoded())
app.set('view engine', 'pug')

// ROUTES
app.get('/', (request, response)=>{
    const pageName = 'Welcome'
    const introduction = 'bla bla bla bla BLA'
    response.render('forside', {title: pageName, welcomeText: introduction})
})

app.get('/secret', (request, response)=>{
    const agents = ['George', 'Sean', 'Roger', 'Timothy', 'Pierce', 'Daniel']
    response.render('secret', {agents: agents})
})

//liste af alle jordskælv
app.get('/earthquakes', async (request, response)=>{
    earthquakes = await getEarthquakes()
    response.render('earthquakes', {earthquakes: earthquakes})
})

//oplysninger om det enkelte jordskælv
// vi har allerede en liste af ALLE jordskælv nu skal vi finde en specifik
app.get('/earthquakes/:id', (request, response)=>{
    const id = request.params.id
    let earthquake = earthquakes.filter(earthquake=>{return earthquake.id == id})
    response.render('earthquakeInfo', {earthquake: earthquake[0]})
})

// submit med POST kommandoen
// hvis navnet er korrekt så redirectervi til et andet 
// endpoint
app.post('/', (request, response)=>{
    const name = request.body.username
    if (name === 'abrakadrabra') {
        response.redirect('/secret')
    }
    response.status(200).send("Øv, det username kender jeg ikke: " + name)
})


app.listen(8000, ()=>{
    console.log("Server is listning!");
})


async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

const earthquakeUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson'

 async function getEarthquakes(){
    const data = await get(earthquakeUrl)
    return data.features
}