import mysql from 'mysql2/promise';
require('dotenv').config();

//console.log("host", process.env.MYSQL_DB)
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test the database connection
pool.getConnection()
  .then(connection => {
    console.log('Database connected successfully!');
    connection.release(); // Release the connection back to the pool
  })
  .catch(error => {
    console.error('Error connecting to database:', error.message);
  });

export default pool;
