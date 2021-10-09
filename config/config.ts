require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME || "sql4442607",
    password: process.env.DB_PASSWORD || "IKlAMYLnPt",
    database: process.env.DB_DATABASE || "sql4442607",
    host: process.env.DB_HOST || "sql4.freesqldatabase.com",
    dialect: "mysql",
  },
  test: {
    username: process.env.DB_USERNAME || "sql4442607",
    password: process.env.DB_PASSWORD || "IKlAMYLnPt",
    database: process.env.DB_DATABASE || "sql4442607",
    host: process.env.DB_HOST || "sql4.freesqldatabase.com",
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USERNAME || "sql4442607",
    password: process.env.DB_PASSWORD || "IKlAMYLnPt",
    database: process.env.DB_DATABASE || "sql4442607",
    host: process.env.DB_HOST || "sql4.freesqldatabase.com",
    dialect: "mysql",
  },
};
