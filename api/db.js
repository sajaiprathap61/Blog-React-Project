import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "qwerty123",
  database: "blog",
});

export default db;
