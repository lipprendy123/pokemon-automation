Pokemon Automation
Automation test buat website pokemon.com menggunakan Playwright.
What This Test Does
Test ini mensimulasikan user yang lagi browsing di website Pokemon — mulai dari buka halaman utama, nyari Pikachu di Pokédex, baca detail-nya, sampai balik lagi buat lihat daftar Pokemon lainnya.
Flow-nya kurang lebih begini:

Buka pokemon.com/us/
Handle cookie popup kalau muncul
Klik menu Pokédex di navbar
Search "Pikachu" di search bar
Klik card Pikachu dan scroll through halamannya
Klik tombol Explore More Pokémon buat balik ke list
Verifikasi bahwa list Pokemon muncul dan jumlahnya lebih dari 0

Tech Stack

Playwright — framework untuk browser automation & testing
Node.js

Setup
Clone repo-nya dulu:
bashgit clone https://github.com/lipprendy123/pokemon-automation.git
cd pokemon-automation
Install dependencies:
npm install
npx playwright install
Run Test
npx playwright test
Kalau mau lihat browser-nya langsung (headed mode):
npx playwright test --headed

Notes

Test ini handle dua skenario cookie popup — satu di halaman utama, satu lagi di halaman Pokédex, karena kadang muncul kadang nggak.
Ada beberapa waitForTimeout yang disengaja buat nge-mimic behavior user yang wajar, bukan bot.
Lokator pakai webdriver override buat ngurangin kemungkinan ke-detect sebagai bot.