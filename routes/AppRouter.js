const Router = require('express').Router()
const controller = require('../controllers/Controller')
//routes here

Router.get('/breweries', controller.getAllBreweries)

Router.get('/breweries/:breweryId', controller.getOneBrewery)

//routes here

module.exports = Router
