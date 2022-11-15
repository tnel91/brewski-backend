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
      { where: { id: req.params.breweryId }, returning: true }
    )
    res.send(brewery)
  } catch (error) {
    throw error
  }
}
module.exports = {
  getBrewery,
  createBrewery,
  updateBrewery
}
