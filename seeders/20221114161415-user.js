'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          firstName: 'John',
          lastName: 'Deer',
          email: 'john@email.com',
          password: 'asdf',
          address: '123 1st st, Decatur, GA'
        },
        {
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'jane@gmail.com',
          password: 'password',
          address: '12 Road Lane, Seward, AK'
        },
        {
          firstName: 'Timmy',
          lastName: 'Timmerson',
          email: 'timmy@internet.com',
          password: 'GOODpassword1435fasd13',
          address: '225 Baker St, Atlanta, GA'
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
}
