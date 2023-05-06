const mysql = require("mysql2");
const mysqlConfig = require("./config.js");

const connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
  if (err) {
    console.error("not connected");
  } else {
    console.log("db conected !!");
  }
});
module.exports = connection;
