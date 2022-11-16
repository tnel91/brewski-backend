require('dotenv').config()
module.exports = {
  development: {
    database: 'brewski_development',
    dialect: 'postgres'
  },
  test: {
    database: 'brewski_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
