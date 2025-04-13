const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

process.on('SIGINT', () => {
    pool.end(() => {
      console.log('Veritabanı bağlantısı kapatıldı.');
      process.exit(0);
    });
  });

module.exports = pool;