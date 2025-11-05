const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
  res.render('biler')
})

router.get('/brands', (req,res)=>{
  res.send('Audi, Buick, Citroen, Dodge')
})

module.exports = router