const router = require('express').Router()
const controller = require('../controllers/Controller')

const app = express()

//routes here
router.get('/brewery', controller.getBrewery)

router.post('/create_router', controller.createBrewery)

router.put('/:brewery_id', controller.updateBrewery)

router.delete('/:brewery_id', controller.deleteBrewery)

//routes here

module.exports = Router
