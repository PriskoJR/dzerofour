/* =====================================================================
   UPDATES.JS : riwayat update di halaman.
   Tambah update baru dengan menyalin satu blok { ... } ke paling ATAS.
   date ditulis TAHUN-BULAN-TANGGAL. Urutan di halaman otomatis terbaru dulu.
   Hanya 6 update terbaru yang tampil pertama, sisanya lewat tombol.
   ===================================================================== */
window.UPDATES = [
  {
    date: "2026-11-25",
    tag: "Catalog ID",
    text: {
      id: "Menu baru Database ID hadir di website: daftar lengkap Nama Kompetisi, ID & Nama Tim, serta ID & Nama Pemain langsung dari database patch, dengan fitur pencarian dan salin.",
      en: "New Database ID menu on the website: full list of Competition Names, Team IDs & Names, and Player IDs & Names straight from the patch database, with search and copy."
    }
  },
  {
    date: "2026-11-24",
    tag: { id: "Miniface & Pelatih", en: "Minifaces & Coaches" },
    text: {
      id: "18.978 miniface pemain dari eFootball, FC 27, dan Transfermarkt (framing kepala Konami & AI cut-out MODNet) ditambah 546 foto pelatih berlatar abu-abu dan nama Jepang otomatis. 67 pemain dummy dihapus.",
      en: "18,978 player minifaces from eFootball, FC 27 and Transfermarkt (Konami head framing & MODNet AI cut-out) plus 546 grey-background coach photos and auto Japanese names. 67 dummy players removed."
    }
  },
  {
    date: "2026-11-24",
    tag: "PES DB Collector 3.0",
    text: {
      id: "PES DB Collector 3.0.0 rilis: tombol Download minifaces (Ctrl+Shift+K) di panel pojok, unduh massal zip miniface per klub atau foto pelatih di background, nama zip selalu rapi, dan Clear sekali tekan.",
      en: "PES DB Collector 3.0.0 released: Download minifaces button (Ctrl+Shift+K) on the corner panel, background batch zip downloads per club or coach, clean zip filenames and one-click Clear."
    }
  },
  {
    date: "2026-11-24",
    tag: "myClub Server",
    text: {
      id: "Server lokal myClub: batas frame 1.024 byte terpecahkan (multi-frame 0x70-0x72), GP & Coin 99.999.999, Top Agent untuk 27 liga patch, 62 scout ★5, lelang scout spesial klub/negara, dan Club Extension.",
      en: "Local myClub server: 1,024-byte frame cap solved (0x70-0x72 multi-frame), 99,999,999 GP & Coins, Top Agents for all 27 patch leagues, 62 5★ scouts, special club/nation scout auctions and Club Extension."
    }
  },
  {
    date: "2026-11-23",
    tag: "Exe v60 & PRIME Switch",
    text: {
      id: "Exe v60 & Dzerofour Launcher: tahun mulai Master League 2026/27, sakelar On/Off kompetisi PRIME, teks mode UCL 18 bahasa, jadwal MD7-8 UCL di bulan Januari, dan perbaikan nomor punggung 194 klub.",
      en: "Exe v60 & Dzerofour Launcher: 2026/27 Master League start year, PRIME competitions On/Off switch, 18-language UCL mode texts, January UCL MD7-8 fixtures and shirt number fixes across 194 clubs."
    }
  },
  {
    date: "2026-11-23",
    tag: "Sleeve Badges",
    text: {
      id: "Halaman Badge Editor & section .badges di exe: semua 90 slot kompetisi (liga, piala, super cup, turnamen timnas) kini punya slot sleeve badge lengan sendiri.",
      en: "Badge Editor page & .badges exe section: all 90 competition slots (leagues, cups, super cups, national tournaments) now have their own dedicated sleeve badge slots."
    }
  },
  {
    date: "2026-11-23",
    tag: { id: "Database & FC 27", en: "Database & FC 27" },
    text: {
      id: "Integrasi database EA SPORTS FC 27 dan FM Blog: pembaruan skuad, atribut pemain, skuad 8 timnas Asia/ASEAN, serta impor 432 pelatih musim ini dari gabungan Transfermarkt + eFootball + FC 27.",
      en: "EA SPORTS FC 27 and FM Blog database integration: updated squads, player abilities, 8 Asian/ASEAN national squads, and 432 current-season coaches imported from Transfermarkt + eFootball + FC 27."
    }
  },
  {
    date: "2026-11-22",
    tag: "Database Editor UI",
    text: {
      id: "Rombak UI Fase 4-6 selesai: halaman Home, Import Center terpusat (8 alur impor, 15 sumber), halaman Logos, Build & install terpadu, editor warna TeamColor, serta 2 slot khusus timnas (logo federasi & bendera).",
      en: "UI Overhaul Phases 4-6 complete: Home dashboard, unified Import Center (8 flows, 15 sources), Logos page, unified Build & install, TeamColor editor, and dual national team slots (federation logo & flag)."
    }
  },
  {
    date: "2026-11-22",
    tag: { id: "Kompetisi Timnas", en: "National Cups" },
    text: {
      id: "Copa América (16 tim, 4 grup), AFC Asian Cup (24 tim, 6 grup + 4 peringkat ketiga terbaik), dan Africa Cup of Nations (24 tim) berjalan di mode Cup. Musik walk-out semua klub (.clubbgm) juga aktif di exe.",
      en: "Copa América (16 teams, 4 groups), AFC Asian Cup (24 teams, 6 groups + 4 best thirds) and Africa Cup of Nations (24 teams) run in Cup mode. Walk-out anthems for all clubs (.clubbgm) are also active in the exe."
    }
  },
  {
    date: "2026-11-21",
    tag: "Carabao Cup",
    text: {
      id: "Carabao Cup (44 klub Premier League & Championship) hadir dengan kalender Rabu tersendiri dan terbukti berjalan di Master League. Konami Cup juga berhasil dipulihkan.",
      en: "The Carabao Cup (44 Premier League & Championship clubs) joins with its own Wednesday calendar and is proven in Master League. The Konami Cup is restored too."
    }
  },
  {
    date: "2026-11-20",
    tag: "FIFA World Cup & ASEAN",
    text: {
      id: "Piala Dunia 48 tim (12 grup tetap A-L, bagan 32 besar Annex C) dan FIFA ASEAN Cup (14 timnas, 2 grup isi 7, upacara trofi) lulus uji penuh sampai layar juara. Batas skuad timnas dinaikkan ke 26 pemain.",
      en: "The 48-team FIFA World Cup (12 fixed groups A-L, Annex C round of 32) and FIFA ASEAN Cup (14 national teams, two groups of 7, trophy ceremony) pass full testing to the winner screen. National squads expanded to 26 players."
    }
  },
  {
    date: "2026-11-16",
    tag: "Dzerofour Legends",
    text: {
      id: "Dzerofour Legends League, Cup, dan Super Cup (30 tim): 22 Prime Team bersejarah (1962-2020) dan 8 Fantasy Team, ditambah bersih-bersih database Fase 1.",
      en: "Dzerofour Legends League, Cup and Super Cup (30 teams): 22 historic Prime Teams (1962-2020) and 8 Fantasy Teams, plus Phase 1 database clean-up."
    }
  },
  {
    date: "2026-11-15",
    tag: "Face Toolkit",
    text: {
      id: "PES Face Converter kini bernama PES Face Toolkit.",
      en: "PES Face Converter is now called PES Face Toolkit."
    }
  },
  {
    date: "2026-11-15",
    tag: "AFC",
    text: {
      id: "AFC Champions League Two (32 klub, 8 grup) berjalan di League Mode. AFC Champions League Elite memakai pot resmi 2026/27 dan fase liga per wilayah.",
      en: "AFC Champions League Two (32 clubs, 8 groups) runs in League Mode. AFC Champions League Elite uses the official 2026/27 pots and a league phase per region."
    }
  },
  {
    date: "2026-11-15",
    tag: "FIFA Club World Cup",
    text: {
      id: "FIFA Club World Cup format baru: 32 klub, 8 grup, lalu knockout. Undian dan jadwal grup sudah berjalan.",
      en: "The new FIFA Club World Cup: 32 clubs, 8 groups, then knockouts. The draw and group fixtures already work."
    }
  },
  {
    date: "2026-11-15",
    tag: { id: "Selebrasi", en: "Celebrations" },
    text: {
      id: "5 selebrasi gol baru dari eFootball sedang diuji: Haaland, Messi, Bellingham, Kane, dan Son.",
      en: "5 new goal celebrations from eFootball are being tested: Haaland, Messi, Bellingham, Kane and Son."
    }
  },
  {
    date: "2026-11-14",
    tag: { id: "Kompetisi baru", en: "New competitions" },
    text: {
      id: "Liga Arab Saudi, Korea Selatan, Thailand, dan Malaysia berjalan di League Mode, lengkap dengan piala dan super cup. Turki, Belgia, Skotlandia, dan Pegadaian Championship menyusul lolos.",
      en: "The Saudi, South Korean, Thai and Malaysian leagues run in League Mode, with their cups and super cups. Türkiye, Belgium, Scotland and the Pegadaian Championship followed."
    }
  },
  {
    date: "2026-11-14",
    tag: { id: "Bahasa", en: "Language" },
    text: {
      id: "Nama resmi dan sponsor musim 2026/27 untuk semua kompetisi, di 18 bahasa game.",
      en: "Official 2026/27 names and sponsors for every competition, in all 18 game languages."
    }
  },
  {
    date: "2026-11-12",
    tag: { id: "Kompetisi baru", en: "New competitions" },
    text: {
      id: "21 kompetisi baru masuk database: total kini {competitions} kompetisi, dari 61 di game asli.",
      en: "21 new competitions added to the database: {competitions} in total, up from the stock game's 61."
    }
  },
  {
    date: "2026-11-12",
    tag: { id: "Kapasitas", en: "Capacity" },
    text: {
      id: "Batas database ditembus: 40.000 pemain dan 2.500 tim, dari batas bawaan 20.800 pemain dan 648 tim.",
      en: "Database limits broken: 40,000 players and 2,500 teams, up from the stock 20,800 players and 648 teams."
    }
  },
  {
    date: "2026-11-12",
    tag: "Facepack",
    text: {
      id: "Facepack klub Eropa di-build: 1.466 face dari Premier League, Bundesliga, LaLiga, dan Serie A.",
      en: "European clubs facepack built: 1,466 faces from the Premier League, Bundesliga, LaLiga and Serie A."
    }
  },
  {
    date: "2026-11-10",
    tag: "UEFA Europa League",
    text: {
      id: "UEFA Europa League pindah ke format baru 36 klub dengan pot resmi 2026/27.",
      en: "The UEFA Europa League moves to the new 36-club format with the official 2026/27 pots."
    }
  },
  {
    date: "2026-11-09",
    tag: "UEFA Champions League",
    text: {
      id: "UEFA Champions League format baru 36 klub dimainkan penuh dari undian sampai juara: satu tabel, 8 laga per klub, dan play-off peringkat 9-24.",
      en: "The new 36-club UEFA Champions League played in full, from the draw to the final: one table, 8 matches per club and play-offs for places 9-24."
    }
  },
  {
    date: "2026-11-08",
    tag: "Kitpack",
    text: {
      id: "Kitpack kompetisi Eropa di-build ulang: 320 kit dari 81 tim.",
      en: "European competitions kitpack rebuilt: 320 kits across 81 teams."
    }
  },
  {
    date: "2026-11-07",
    tag: "Facepack",
    text: {
      id: "Facepack kompetisi Spanyol di-build: 43 face.",
      en: "Spanish competitions facepack built: 43 faces."
    }
  },
  {
    date: "2026-11-06",
    tag: "HUD Editor",
    text: {
      id: "CPK dari PES HUD Editor berhasil berjalan di dalam game.",
      en: "A CPK from PES HUD Editor is now running in the game."
    }
  },
  {
    date: "2026-11-05",
    tag: "Face Converter",
    text: {
      id: "PES Face Converter 1.4.1 rilis: rambut tetap tajam saat replay.",
      en: "PES Face Converter 1.4.1 released: hair stays sharp in replays."
    }
  },
  {
    date: "2026-11-05",
    tag: "Facepack",
    text: {
      id: "Facepack nasional di-build: 228 face, termasuk Timnas Indonesia.",
      en: "National teams facepack built: 228 faces, including Indonesia."
    }
  },
  {
    date: "2026-11-01",
    tag: { id: "Kompetisi baru", en: "New competitions" },
    text: {
      id: "4 slot kompetisi baru hadir di PES 2017: J1 League, J2 League, Levain Cup, dan Super Cup.",
      en: "4 new competition slots arrive in PES 2017: J1 League, J2 League, Levain Cup and Super Cup."
    }
  }
];
