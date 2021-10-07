require('dotenv').config()

module.exports = {
  "development": {
    "username": "sql4442607",
    "password": "IKlAMYLnPt",
    "database": "sql4442607",
    "host": "sql4.freesqldatabase.com",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
