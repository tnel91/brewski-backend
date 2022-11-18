'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Brewery, {
        as: 'favorite_breweries',
        through: models.User_Brewery,
        foreignKey: 'userId'
      })
      User.belongsToMany(models.Review, {
        as: 'favorite_reviews',
        through: models.User_Review,
        foreignKey: 'userId'
      })
      User.belongsToMany(models.Brewery, {
        as: 'reviewed',
        through: models.Review,
        foreignKey: 'authorId'
      })
    }
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING
      },
      lastName: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date()
      }
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}
