# Asadin Edu · asadinedu.com

Situs landing **Asadin Edu**, payung independen untuk pendidikan Indonesia yang dijalankan sendiri oleh Prasada Arif Nurudin. Asadin Edu bukan sekolah atau perusahaan; halaman ini memperkenalkan keempat ruang belajar di bawah payungnya dan menautkannya:

| Proyek | Bidang | Alamat | Repo |
|---|---|---|---|
| Biotaloka | Biologi | https://biotaloka.asadinedu.com | [asadin-edu-biotaloka](https://github.com/asaddin02/asadin-edu-biotaloka) |
| Kimialoka | Kimia | https://kimialoka.asadinedu.com | [asadin-edu-kimialoka](https://github.com/asaddin02/asadin-edu-kimialoka) |
| Fisikaloka | Fisika | https://fisikaloka.asadinedu.com | [asadin-edu-fisikaloka](https://github.com/asaddin02/asadin-edu-fisikaloka) |
| Mitoloka | Mitologi | https://mitoloka.asadinedu.com | [asadin-edu-mitoloka](https://github.com/asaddin02/asadin-edu-mitoloka) |

Situs pendiri: https://asadin-personal-info.pages.dev

## Isi

Situs statis tanpa framework dan tanpa build: `index.html`, `styles.css`, dan `app.js` (pilihan bahasa ID/EN, indeks ruang belajar yang mengikuti gulir, menu ponsel, dan animasi halus yang menghormati *reduced motion*). Huruf Fraunces dan Instrument Sans disimpan sendiri di `assets/fonts/` (SIL Open Font License), jadi halaman tidak memuat apa pun dari luar. `_headers` memasang CSP ketat dan cache aset.

Angka di setiap kartu proyek diambil dari README dan data proyek masing-masing (13 Oktober 2026). Perbarui di sini bila proyeknya berubah.

## Menjalankan

```bash
python3 -m http.server 8080   # lalu buka http://localhost:8080
```

## Terbit

Proyek Cloudflare Pages `asadinedu` dengan custom domain `asadinedu.com` (dan `www.asadinedu.com` yang dialihkan ke sana). Workflow `.github/workflows/deploy.yml` menerbitkan setiap push ke `main` begitu secret `CLOUDFLARE_API_TOKEN` dan `CLOUDFLARE_ACCOUNT_ID` diisi di repo ini.
