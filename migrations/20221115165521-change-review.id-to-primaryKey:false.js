'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('reviews', 'id', {
      allowNull: false,
      autoIncrement: true,
      primaryKey: false,
      type: Sequelize.INTEGER
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('reviews', 'id', {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    })
  }
}
