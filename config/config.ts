require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME || "bf238d8d7b5790",
    password: process.env.DB_PASSWORD || "5a2a96a1",
    database: process.env.DB_DATABASE || "heroku_0d6b41204bf4706",
    host: process.env.DB_HOST || "us-cdbr-east-04.cleardb.com",
    dialect: "mysql",
  },
  test: {
    username: process.env.DB_USERNAME || "bf238d8d7b5790",
    password: process.env.DB_PASSWORD || "5a2a96a1",
    database: process.env.DB_DATABASE || "heroku_0d6b41204bf4706",
    host: process.env.DB_HOST || "us-cdbr-east-04.cleardb.com",
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USERNAME || "bf238d8d7b5790",
    password: process.env.DB_PASSWORD || "5a2a96a1",
    database: process.env.DB_DATABASE || "heroku_0d6b41204bf4706",
    host: process.env.DB_HOST || "us-cdbr-east-04.cleardb.com",
    dialect: "mysql",
  },
};
