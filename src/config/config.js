const dotenv = require("dotenv").config();
const { DB_USER, DB_PORT, DB_NAME, DB_PASSWORD, DB_DIALECT, DB_HOST } = process.env;

module.exports = {
    "username": DB_USER || "root",
    "password": DB_PASSWORD || "",
    "database": DB_NAME || "test",
    "host": DB_HOST || "localhost",
    "port": DB_PORT || 3306,
    "dialect": DB_DIALECT || "mysql",
    "operatorsAliases": "0"
};
