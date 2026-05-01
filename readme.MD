# Pokemon Automation

Automation test buat website [pokemon.com](https://www.pokemon.com/us/) menggunakan Playwright.

---

## What This Test Does

Test ini mensimulasikan user yang lagi browsing di website Pokemon, mulai dari buka halaman utama, nyari Pikachu di Pokedex, baca detail-nya, sampai balik lagi buat lihat daftar Pokemon lainnya.

Flow-nya kurang lebih begini:

1. Buka `pokemon.com/us/`
2. Handle cookie popup kalau muncul
3. Klik menu Pokedex di navbar
4. Search "Pikachu" di search bar
5. Klik card Pikachu dan scroll through halamannya
6. Klik tombol Explore More Pokemon buat balik ke list
7. Verifikasi bahwa list Pokemon muncul dan jumlahnya lebih dari 0

---

## Tech Stack

- [Playwright](https://playwright.dev/) — framework untuk browser automation & testing
- Node.js

---

## Setup

Clone repo-nya dulu:

```bash
git clone https://github.com/lipprendy123/pokemon-automation.git
cd pokemon-automation
```

Install dependencies:

```bash
npm install
npx playwright install
```

---

## Run Test

```bash
npx playwright test
```

Kalau mau lihat browser-nya langsung (headed mode):

```bash
npx playwright test --headed
```

---

## Notes

- Test ini handle dua skenario cookie popup, satu di halaman utama dan satu lagi di halaman Pokedex, karena kadang muncul kadang nggak.
- Ada beberapa `waitForTimeout` yang disengaja buat nge-buat behavior user yang wajar, bukan bot.
- Lokator pakai `webdriver` override buat ngurangin kemungkinan ke-detect sebagai bot.
