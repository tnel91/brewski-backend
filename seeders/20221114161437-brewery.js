'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'breweries',
      [
        {
          name: 'Three Taverns',
          address: '121 New St, Decatur, GA',
          beers: ['A Night on Ponce', 'Ukiyo', 'Prince of Pilsen', 'Lord Grey']
        },
        {
          name: 'Monday Night',
          address: '670 Trabert Ave NW, Atlanta, GA',
          beers: ['Han Brolo', 'Blind Pirate', 'Slap Fight', 'Dr. Robot']
        },
        {
          name: 'Variant Brewing',
          address: '66 Norcross St, Roswell, GA',
          beers: ['Lumen', 'Cashmere', 'Lethargy', 'Broken Mind']
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('breweries', null, {})
  }
}
