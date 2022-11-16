'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.changeColumn('users', 'firstName', {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn('users', 'lastName', {
        type: Sequelize.STRING
      }),
      queryInterface.removeColumn('users', 'userName'),
      queryInterface.changeColumn('users', 'address', {
        type: Sequelize.STRING
      })
    ])
  },

  async down(queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.changeColumn('users', 'firstName', {
        type: Sequelize.STRING,
        allowNull: false
      }),
      queryInterface.changeColumn('users', 'lastName', {
        type: Sequelize.STRING,
        allowNull: false
      }),
      queryInterface.addColumn('users', 'userName', {
        type: Sequelize.STRING,
        unique: true
      }),
      queryInterface.changeColumn('users', 'address', {
        type: Sequelize.STRING,
        allowNull: false
      })
    ])
  }
}
