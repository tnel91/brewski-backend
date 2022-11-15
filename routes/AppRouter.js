const router = require('express').Router()
const controller = require('../controllers/Controller')

//routes here
router.get('/brewery', controller.getBrewery)

router.post('/create_router', controller.createBrewery)

router.put('/:brewery_id', controller.updateBrewery)

router.delete('/:brewery_id', controller.deleteBrewery)

router.get('/user', controller.getUsers)

router.post('/users/new', controller.createUser)

router.put('/:user_id', controller.updateUser)

router.delete('/:user_id', controller.deleteUser)

//routes here
module.exports = router
