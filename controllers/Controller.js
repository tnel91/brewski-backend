const { User, Brewery, Review } = require('../models')
const middleware = require('../middleware')

//Breweries

const getBrewery = async (req, res) => {
  try {
    const brewerys = await Brewery.findAll()
    res.send(brewerys)
  } catch (error) {
    throw error
  }
}
const createBrewery = async (req, res) => {
  try {
    const brewery = await Brewery.create({ ...req.body })
    res.send(brewery)
  } catch (error) {
    throw error
  }
}
const updateBrewery = async (req, res) => {
  try {
    const brewery = await Brewery.update(
      { ...req.body },
      { where: { id: req.params.brewery_id }, returning: true }
    )
    res.send(brewery)
  } catch (error) {
    throw error
  }
}
const deleteBrewery = async (req, res) => {
  try {
    await Brewery.destroy({ where: { id: req.params.brewery_id } })
    res.send({
      msg: 'Brewery Deleted',
      payload: req.params.brewery_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

//Users

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}
const createUser = async (req, res) => {
  try {
    const users = await User.create({ ...req.body })
    res.send(users)
  } catch (error) {
    throw error
  }
}
const updateUser = async (req, res) => {
  try {
    const users = await User.update(
      { ...req.body },
      { where: { id: req.params.user_Id }, returning: true }
    )
    res.send(users)
  } catch (error) {
    throw error
  }
}
const deleteUser = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.user_id } })
    res.send({
      msg: 'User Deleted',
      payload: req.params.user_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

//Review

const getReview = async (req, res) => {
  try {
    const review = Review.findAll()
    res.send(review)
  } catch (error) {
    throw error
  }
}

const createReview = async (req, res) => {
  try {
    const review = await Review.create({ ...req.body })
    res.send(review)
  } catch (error) {
    throw error
  }
}

const updateReview = async (req, res) => {
  try {
    const review = await Review.update(
      { ...req.body },
      { where: { id: req.params.review_id }, returning: true }
    )
    res.send(review)
  } catch (error) {
    throw error
  }
}

const deleteReview = async (req, res) => {
  try {
    await Review.destory({ where: { id: req.params.review_id } })
    res.send({
      msg: 'Review Deleted',
      payload: req.params.review_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

//Login and Register 

const Login = async (req, res) => {
  try {
      const user = await User.findOne({
          where: { email: req.body.email },
          raw: true
      })
      console.log(user)
      console.log(req.body.password)
      if (
          user && 
          middleware.comparePassword(user.password, req.body.password)
      ) {
          let payload = {
              id: user.id,
              email: user.email
          }
          let token = middleware.createToken(payload)
          return res.send({ user: payload, token })
      }
      res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
      throw error
  }
}

const Register = async (req, res) => {
  try {
      const { firstName, lastName, userName, email, password, address } = req.body
      let passwordScramble = await middleware.hashPassword(password)
      const user = await User.create({ firstName, lastName, userName, email, password: passwordScramble, address })
      res.send(user)
  } catch (error) {
      throw error
  }
} 

module.exports = {
  getBrewery,
  createBrewery,
  updateBrewery,
  deleteBrewery,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getReview,
  createReview,
  updateReview,
  deleteReview,
  Login, 
  Register
}
