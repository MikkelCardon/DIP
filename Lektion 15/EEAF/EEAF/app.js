const express = require('express')
const app = express()

// 1. Templating
app.set('view engine', 'pug')

// 2. Middleware
app.use(express.static('assets'))
app.use('/biler', require('./routes/cars/cars'))

// 3. Routes
app.get('/', (req, res) => {
  let cats = [{ name: 'Ilse', image: 'Ilse.jpeg' },
  { name: 'Bente', image: 'Bente.jpeg' },
  { name: 'Garfield', image: 'Garfield.png' }]
  res.render('index', { title: 'Velkommen til PUG', name: 'Ole-Bengt', cats: cats })
})


function start() {
  console.log('Serveren er helt oppe at køre 😎');
}
app.listen(3000, start)