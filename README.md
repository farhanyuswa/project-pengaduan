<<<<<<< HEAD

# 🇮🇩 Aplikasi Laporan Pengaduan PMI

Aplikasi ini digunakan oleh **Pekerja Migran Indonesia di Malaysia** untuk membuat pengaduan secara online. Admin dapat melihat, mengelola, dan merespons laporan tersebut.

---

## 🔧 Struktur Proyek

```
project-pengaduan/
│
├── backend/              ← API & server (Node.js, Express, MySQL)
│
├── frontend-admin/       ← Halaman admin (React + Bootstrap)
│
├── frontend-user/        ← Form user pelapor (React + Bootstrap)
```

---

## 🧱 Teknologi yang Digunakan

- Backend: **Node.js**, **Express**, **Sequelize**, **MySQL**
- Frontend: **ReactJS**, **Bootstrap**
- Tools: **Axios**, **nodemon**, **CORS**

---

## 🚀 Cara Menjalankan Aplikasi

### 🛠️ 1. Siapkan MySQL & Buat Database

Buka **MySQL Workbench** atau phpMyAdmin lalu jalankan query berikut:

```sql
CREATE DATABASE pengaduan_pmi;

USE pengaduan_pmi;

-- Tabel akan otomatis dibuat oleh Sequelize saat server dijalankan
```

---

### 📦 2. Setup Backend (API)

```bash
cd backend
npm install
```

#### 📁 File Konfigurasi Database

Edit file `backend/config/db.js` dan sesuaikan koneksi MySQL kamu:

```js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pengaduan_pmi', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
```

#### ▶ Jalankan Backend

```bash
npx nodemon app.js
```

Jika berhasil, akan muncul:
```
Server berjalan di port 5000
Database connected!
```

---

### 💻 3. Setup Frontend Admin

```bash
cd ../frontend-admin
npm install
npm start
```

Buka di browser:
```
http://localhost:3000
```

---

### 🧾 4. Setup Frontend User

```bash
cd ../frontend-user
npm install
npm start
```

Buka di browser:
```
http://localhost:3001
```

> Pastikan port tidak bentrok dengan admin, atau ubah port di `package.json` bagian script:
```json
"start": "PORT=3001 react-scripts start"
```

---

## 📌 API Endpoint Ringkasan

| Method | Endpoint                 | Fungsi                       |
|--------|--------------------------|------------------------------|
| GET    | `/api/laporan`           | Ambil semua laporan          |
| POST   | `/api/laporan`           | Tambah laporan               |
| PUT    | `/api/laporan/:id`       | Edit laporan                 |
| DELETE | `/api/laporan/:id`       | Hapus laporan                |

---

## 📝 Catatan

- Pastikan MySQL sudah berjalan.
- Jangan lupa install `nodemon` secara global jika belum:
```bash
npm install -g nodemon
```
- Ganti username/password MySQL jika perlu (`config/db.js`).
- Frontend terhubung ke backend di URL `http://localhost:5000`. Jika port berbeda, sesuaikan di kode `axios`.

---

## 👨‍💻 Author
Dibuat dengan ❤️ untuk membantu Pekerja Migran Indonesia di Malaysia.
=======
# project-pengaduan
>>>>>>> adf11c84e6c14c3458b3930771c557983648cee7
