const { User, Brewery } = require('../models')

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
      { where: { id: req.params.brewery_Id }, returning: true }
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

module.exports = {
  getBrewery,
  createBrewery,
  updateBrewery,
  deleteBrewery,
  getUsers,
  createUser,
  updateUser,
  deleteUser
}
