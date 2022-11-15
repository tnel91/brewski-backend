'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('reviews', 'breweryId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'breweries',
        key: 'id'
      },
      primaryKey: true
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('reviews', 'breweryId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'breweries',
        key: 'id'
      },
      primaryKey: false
    })
  }
}
