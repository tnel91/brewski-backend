const Router = require('express').Router()
const controller = require('../controllers/Controller')
const express = require('express')
const cors = require('cors')
const router = express.Router()

const { Review } = require('./models')
const { Brewery } = require('./models')
const app = express()

//routes here
app.get('/breweries', async (req, res) => {
  const allBrewery = await Brewery.find({})
  res.json(allBrewery)
})
router.get('/', function (req, res) {
  res.send('Wiki home page')
})
// app.post('/breweries', async (req, res) => {
//   const
// })
//routes here

module.exports = Router
