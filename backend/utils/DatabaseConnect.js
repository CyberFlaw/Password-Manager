const mysql = require("mysql2/promise");

const config = require("../utils/config.json");

const pool = mysql.createPool({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
  waitForConnections: true,
  connectionLimit: 2,
  queueLimit: 0,
});

module.exports = pool;
