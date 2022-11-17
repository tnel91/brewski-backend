const router = require('express').Router()
const controller = require('../controllers/Controller')
const middleware = require('../middleware')

//routes here

//Breweries

router.get('/brewery', controller.getBrewery)

router.get('/brewery/:brewery_id', controller.getOneBrewery)

router.post('/create_router', controller.createBrewery)

router.put('/:brewery_id', controller.updateBrewery)

router.delete('/:brewery_id', controller.deleteBrewery)

//User

router.get('/user', controller.getUsers)

router.post('/users/new', controller.createUser)

router.put('/:user_id', controller.updateUser)

router.delete('/:user_id', controller.deleteUser)

//Reviews

router.get('/reviews', controller.getReview)

router.get('/reviews/:brewery_id', controller.getBreweryReviews)

router.get('/reviews/:brewery_id/:author_id', controller.getUserBreweryReview)

router.post('/reviews/new', controller.createReview)

router.put('/reviews/edit/:review_id', controller.updateReview)

router.delete('/:review_id', controller.deleteReview)

//Login Register Authentication

router.post('/signin', controller.Login)
router.post('/register', controller.Register)

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createUser
)

//routes here
module.exports = router
