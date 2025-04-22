// controllers/laporanController.js
const Laporan = require('../models/Laporan');

// READ - semua laporan
exports.getAllLaporan = async (req, res) => {
  try {
    const laporan = await Laporan.findAll({ order: [['id', 'DESC']] });
    res.json(laporan);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ - satu laporan
exports.getLaporanById = async (req, res) => {
  try {
    const laporan = await Laporan.findByPk(req.params.id);
    if (!laporan) return res.status(404).json({ message: 'Laporan tidak ditemukan' });
    res.json(laporan);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CREATE
exports.createLaporan = async (req, res) => {
  try {
    const laporan = await Laporan.create(req.body);
    res.status(201).json(laporan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// UPDATE
exports.updateLaporan = async (req, res) => {
  try {
    const laporan = await Laporan.findByPk(req.params.id);
    if (!laporan) return res.status(404).json({ message: 'Laporan tidak ditemukan' });
    await laporan.update(req.body);
    res.json(laporan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
exports.deleteLaporan = async (req, res) => {
  try {
    const laporan = await Laporan.findByPk(req.params.id);
    if (!laporan) return res.status(404).json({ message: 'Laporan tidak ditemukan' });
    await laporan.destroy();
    res.json({ message: 'Laporan berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
