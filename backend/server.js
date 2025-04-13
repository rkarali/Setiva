// server.js
const express = require('express');
const pool = require('./db');
var cors = require('cors')
const app = express();
const port = 3001;
app.use(cors())

var corsOptions = {
  origin: 'http://localhost:3000/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Örnek bir API endpoint
app.get('/api/getAll' ,async (req, res) => {
  try {
    // Veritabanı sorgusu
    const result = await pool.query('SELECT * FROM public."Tenant"');
    res.json(result.rows); // Sorgu sonucunu JSON olarak döndür
  } catch (err) {
    console.error('Sorgu hatası:', err);
    res.status(500).json({ error: 'Veritabanı hatası' });
  }
});

// Sunucu başlat
app.listen(port, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${port}`);
});

//test