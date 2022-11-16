'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'reviews',
      [
        {
          authorId: 3,
          breweryId: 1,
          body: "This is User 3's review of brewery 1"
        },
        {
          authorId: 1,
          breweryId: 3,
          body: "This is User 1's review of brewery 3"
        },
        {
          authorId: 2,
          breweryId: 3,
          body: "This is User 2's review of brewery 3"
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reviews', null, {})
  }
}
