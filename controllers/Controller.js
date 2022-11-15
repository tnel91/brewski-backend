const { User, Brewery } = require('../models')

const getAllBreweries = async (req, res) => {
  try {
    const breweries = await Brewery.findAll({})
    res.send(breweries)
  } catch (error) {
    throw error
  }
}

const getOneBrewery = async (req, res) => {
  try {
    let breweryId = parseInt(req.params.breweryId)
    const brewery = await Brewery.findOne({
      where: { id: breweryId }
    })
    res.send(brewery)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllBreweries,
  getOneBrewery
}
