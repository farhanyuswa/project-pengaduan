// models/Laporan.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Laporan = sequelize.define('Laporan', {
  nama: { type: DataTypes.STRING, allowNull: false },
  kontak: { type: DataTypes.STRING },
  isi: { type: DataTypes.TEXT, allowNull: false },
  tanggal: { type: DataTypes.DATEONLY },
  status: {
    type: DataTypes.ENUM('diproses', 'diterima', 'ditolak', 'selesai'),
    defaultValue: 'diterima',
  }
});

module.exports = Laporan;
