const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const laporanRoutes = require('./routes/laporanRoutes');
const sequelize = require('./config/db');
const Laporan = require('./models/Laporan'); // pastikan model diimport agar bisa sync

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Routing
app.use('/api/laporan', laporanRoutes);

// Sync database dan jalankan server
sequelize.sync({ alter: true }).then(() => {
  console.log('🛠️  Database berhasil disinkronkan');
  app.listen(PORT, () => {
    console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
  });
});
