const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000; // Backend'in çalışacağı port

// CORS ayarları
app.use(cors());
app.use(express.json());

// Uçuş bilgilerini almak için proxy endpoint
app.get('/api/flights', async (req, res) => {
  const queryString = req.query;

  // API adresini ve query parametrelerini oluşturma
  const url = `https://api.schiphol.nl/public-flights/flights`;
  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'app_id': '877338fd',
      'app_key': 'd2468f538f8468d276b2dbe6a3318fa2',
      'ResourceVersion': 'v4'
    },
    params: queryString // Sorgu parametrelerini API'ye ekleme
  };

  try {
    const response = await axios(url, options);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("API isteği sırasında hata:", error.message);
    res.status(500).send("API isteği sırasında bir hata oluştu.");
  }
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`Backend sunucusu çalışıyor: http://localhost:${PORT}`);
});
