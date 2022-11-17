const router = require('express').Router()
const controller = require('../controllers/Controller')
const middleware = require('../middleware')

//routes here

//Breweries

router.get('/brewery', controller.getBrewery)

router.get('/brewery/:brewery_id', controller.getOneBrewery)

router.post('/brewery/new', controller.createBrewery)

router.put('/brewery/:brewery_id', controller.updateBrewery)

router.delete('/brewery/:brewery_id', controller.deleteBrewery)

//User

router.get('/users', controller.getUsers)

router.post('/users/new', controller.createUser)

router.put('/users/:user_id', controller.updateUser)

router.delete('/users/:user_id', controller.deleteUser)

//Reviews

router.get('/reviews', controller.getReview)

router.get('/reviews/:brewery_id', controller.getBreweryReviews)

router.get('/reviews/:brewery_id/:author_id', controller.getUserBreweryReview)

router.post('/reviews/new', controller.createReview)

router.put('/reviews/edit/:review_id', controller.updateReview)

router.delete('/reviews/delete/:review_id', controller.deleteReview)

//Login Register Authentication

router.post('/signin', controller.Login)
router.post('/register', controller.Register)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createUser
)

//Session Routes

router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)

//routes here
module.exports = router
