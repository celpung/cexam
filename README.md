# cexam

### Aplikasi ini masih dalam tahap pengembangan!

![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)

Selamat datang di repositori cexam! Proyek ini dirancang untuk menyederhanakan proses pelaksanaan dan pengelolaan ujian. Proyek ini memiliki backend tangguh yang dibangun dengan Go (Golang) dan frontend dinamis yang didukung oleh Next.js.

## Daftar Isi

- [Pendahuluan](#pendahuluan)
- [Fitur](#fitur)
- [Teknologi](#teknologi)
- [Memulai](#memulai)
- [Berkontribusi](#berkontribusi)
- [Lisensi](#lisensi)

## Pendahuluan

Aplikasi cexam adalah solusi komprehensif untuk membuat, mengatur, dan menyelenggarakan ujian. Aplikasi ini menyediakan antarmuka yang intuitif dan user friendly baik untuk administrator maupun peserta, sehingga pengalaman ujian menjadi lebih efisien dan menyenangkan.

## Fitur

- **Antarmuka User-Friendly**: Frontend, yang dikembangkan menggunakan Next.js, memastikan pengalaman yang mulus dan menarik bagi semua pengguna, mulai dari administrator yang membuat ujian hingga peserta yang mengikutinya.

- **Backend Efisien**: Dibangun dengan Go (Golang), backend memastikan kinerja tinggi, keamanan, dan skalabilitas, sehingga menjadi pilihan yang dapat diandalkan untuk mengelola operasi terkait ujian.

- **Pembuatan Ujian**: Administrator dapat dengan mudah membuat ujian baru, menentukan pertanyaan, mengatur batas waktu, dan menetapkan kriteria penilaian.

- **Monitoring Real-Time**: Pemantauan real-time terhadap kemajuan ujian dan aktivitas peserta, memberikan wawasan kepada administrator mengenai dinamika ujian.

- **Profil Peserta**: Peserta dapat membuat dan mengakses profil mereka, meninjau riwayat ujian, dan menerima analitik kinerja.

- **Autentikasi dan Keamanan**: Mekanisme autentikasi dan otorisasi pengguna yang aman diimplementasikan untuk melindungi data ujian yang sensitif.

## Teknologi

- Backend: Go (Golang)
- Frontend: Next.js

## Memulai

Untuk memulai menggunakan cexam, ikuti langkah-langkah berikut:

1. Klon repositori ini: `git clone https://github.com/celpung/cexam.git`
2. Instal dependensi frontend: `cd web && npm install`
3. Instal dependensi backend: `cd ../backend && go get -d ./...`
4. Jalankan server backend: `go run main.go` (atau perintah yang sesuai untuk backend Anda)
5. Jalankan server pengembangan frontend: `cd web && npm run dev`
6. Buka browser web Anda dan kunjungi: `http://localhost:3000`

## Berkontribusi

Kontribusi sangat diterima! Untuk berkontribusi pada cexam, ikuti langkah-langkah berikut:

1. Fork repositori ini
2. Buat cabang baru: `git checkout -b fitur-baru`
3. Buat perubahan dan commit: `git commit -m 'Tambah fitur baru'`
4. Push ke repositori yang telah Anda fork: `git push origin fitur-baru`
5. Buat pull request yang menjelaskan perubahan Anda

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT - lihat berkas [LICENSE](https://opensource.org/licenses/MIT) untuk detail lebih lanjut.

---

Silakan jelajahi, berkontribusi, dan menggunakan cexam untuk menyederhanakan proses pengelolaan ujian. Jika Anda menghadapi masalah atau memiliki saran, silakan buka isu atau ajukan permintaan pull. Selamat mengelola ujian!
