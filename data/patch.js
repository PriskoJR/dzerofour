/* =====================================================================
   PATCH.JS : progres Dzerofour Patch. File ini yang paling sering diubah.

   status modul:  "done" (Selesai) | "progress" (Dikerjakan) | "planned" (Direncanakan)
   percent:       isi 0-100 untuk memunculkan bar. Hapus atau biarkan null
                  kalau tidak mau menampilkan persen.
   {nama} di dalam teks otomatis diganti angka dari patch-stats.js,
   jadi angkanya ikut berubah saat UPDATE-PATCH-STATS.bat dijalankan.
   Jumlah kompetisi juga dihitung otomatis dari Competition.bin.
   ===================================================================== */
window.PATCH = {
  status: "soon",
  version: "1.0",

  intro: {
    id: "Patch PES 2017 musim 2026/27 yang sedang digarap: format baru UEFA Champions League, {newCompetitions} kompetisi yang sebelumnya tidak ada di game, kapasitas database sampai 40.000 pemain, ribuan miniface, facepack, kitpack, dan logo.",
    en: "A 2026/27 PES 2017 patch in the making: the new UEFA Champions League format, {newCompetitions} competitions the game never had, room for up to 40,000 players, and thousands of minifaces, faces, kits and logos."
  },

  // Papan skor. key = nama angka di patch-stats.js.
  stats: [
    { key: "players", label: { id: "Pemain", en: "Players" } },
    { key: "teams", label: { id: "Tim", en: "Teams" } },
    { key: "competitions", label: { id: "Kompetisi", en: "Competitions" } },
    { key: "minifaces", label: { id: "Miniface", en: "Minifaces" } },
    { key: "kits", label: { id: "Kit", en: "Kits" } },
    { key: "teamLogos", label: { id: "Logo tim", en: "Team logos" } }
  ],

  modules: [
    {
      name: "Database",
      status: "done",
      percent: null,
      text: {
        id: "Musim 2026/27: {players} pemain, {teams} tim, dan {coaches} pelatih (bebas pemain dummy). Skuad dan atribut dari eFootball, EA SPORTS FC 27, Transfermarkt, dan Football Manager.",
        en: "Season 2026/27: {players} players, {teams} teams and {coaches} coaches (dummy-free). Squads and abilities from eFootball, EA SPORTS FC 27, Transfermarkt and Football Manager."
      }
    },
    {
      name: { id: "Kapasitas", en: "Capacity" },
      status: "done",
      percent: null,
      text: {
        id: "Batas bawaan 20.800 pemain dan 648 tim ditembus: kini 40.000 pemain, 2.500 tim, dan 3.000 pelatih. Sudah diuji di Exhibition, Edit, dan Master League.",
        en: "The stock limit of 20,800 players and 648 teams is gone: now 40,000 players, 2,500 teams and 3,000 coaches. Tested in Exhibition, Edit and Master League."
      }
    },
    {
      name: { id: "Kompetisi baru", en: "New competitions" },
      status: "done",
      percent: null,
      text: {
        id: "{competitions} kompetisi, {newCompetitions} di antaranya baru. Liga, piala, super cup baru, Carabao Cup, FIFA ASEAN Cup, dan Dzerofour Legends League sudah berjalan di game.",
        en: "{competitions} competitions, {newCompetitions} of them new. The new leagues, cups, super cups, Carabao Cup, FIFA ASEAN Cup and Dzerofour Legends League all run in the game."
      }
    },
    {
      name: { id: "Regulasi", en: "Regulations" },
      status: "done",
      percent: null,
      text: {
        id: "UCL & UEL 36 klub (MD7-8 Januari), Piala Dunia 48 tim (32 besar Annex C), Piala Asia & AFCON 24 tim, Copa América 16 tim (fase grup), FIFA ASEAN Cup 14 tim, ACL Elite/Two, dan CWC 32 klub.",
        en: "36-club UCL & UEL (Jan MD7-8), 48-team World Cup (Annex C round of 32), 24-team Asian Cup & AFCON, 16-team Copa América (group stage), 14-team FIFA ASEAN Cup, ACL Elite/Two and 32-club CWC."
      }
    },
    {
      name: "Miniface",
      status: "done",
      percent: null,
      text: {
        id: "{minifaces} miniface pemain dari eFootball, FC 27, dan Transfermarkt (framing kepala Konami & AI cut-out), ditambah 546 foto pelatih berlatar seragam.",
        en: "{minifaces} player minifaces from eFootball, FC 27 and Transfermarkt (Konami head framing & AI cut-out), plus 546 coach photos."
      }
    },
    {
      name: "Facepack",
      status: "progress",
      percent: null,
      text: {
        id: "Facepack klub dan timnas, dibuat dengan PES Face Toolkit dari FC 27 dan eFootball.",
        en: "Club and national team facepacks, made with PES Face Toolkit from FC 27 and eFootball."
      }
    },
    {
      name: "Kitpack",
      status: "progress",
      percent: null,
      text: {
        id: "Kitpack kompetisi Eropa: {kits} kit dari {kitTeams} tim.",
        en: "European competitions kitpack: {kits} kits across {kitTeams} teams."
      }
    },
    {
      name: { id: "Logo & Badge", en: "Logos & Badges" },
      status: "done",
      percent: null,
      text: {
        id: "Logo {teamLogos} tim (termasuk logo federasi & bendera timnas), {competitionLogos} kompetisi, dan 90 slot sleeve badge lengan untuk semua liga dan piala.",
        en: "Logos for {teamLogos} teams (including national federation logos & flags), {competitionLogos} competitions, and 90 sleeve badge slots across all leagues and cups."
      }
    },
    {
      name: { id: "Bahasa", en: "Language" },
      status: "done",
      percent: null,
      text: {
        id: "Nama resmi dan sponsor 2026/27 untuk semua kompetisi serta teks fase liga UCL/UEL baru di 18 bahasa game ({languages} paket bahasa dan region).",
        en: "Official 2026/27 names and sponsors for every competition plus new UCL/UEL league-phase texts across all 18 game languages ({languages} language and region packs)."
      }
    },
    {
      name: { id: "Menu & HUD", en: "Menu & HUD" },
      status: "progress",
      percent: null,
      text: {
        id: "Tampilan menu baru dengan PES HUD Editor (section .hudmf sudah terintegrasi di exe) dan warna header menu TeamColor untuk seluruh tim.",
        en: "New menu look with PES HUD Editor (.hudmf section integrated into the exe) and TeamColor menu header colours for every team."
      }
    },
    {
      name: { id: "Selebrasi", en: "Celebrations" },
      status: "progress",
      percent: null,
      text: {
        id: "Selebrasi gol pemain dari eFootball. 5 selebrasi baru (Haaland, Messi, Bellingham, Kane, Son) sedang diuji di atas 122 selebrasi bawaan.",
        en: "Player goal celebrations from eFootball. 5 new ones (Haaland, Messi, Bellingham, Kane, Son) are being tested on top of the 122 stock celebrations."
      }
    },
    {
      name: "One Kick-Off",
      status: "progress",
      percent: null,
      text: {
        id: "Kick-off satu pemain seperti game sepak bola modern, untuk mode offline. Versi uji sudah ada.",
        en: "One-player kick-offs like modern football games, for offline modes. A test build is ready."
      }
    },
    {
      name: { id: "Mode online & myClub", en: "Online & myClub" },
      status: "progress",
      percent: null,
      text: {
        id: "Server lokal myClub berjalan: tutorial penuh, GP/Coin 99.999.999, Top Agent 27 liga, 62 scout ★5, lelang scout spesial klub/negara, dan Club Extension.",
        en: "Local myClub server running: full tutorial, 99,999,999 GP/Coins, Top Agents for 27 leagues, 62 5★ scouts, special club/nation scout auctions and Club Extension."
      }
    },
    {
      name: "Executable & Launcher",
      status: "done",
      percent: null,
      text: {
        id: "Exe Dzerofour v60: kapasitas baru, regulasi klub & timnas, tahun mulai ML 2026/27, musik walk-out semua klub (.clubbgm), sleeve badge (.badges), dan sakelar PRIME On/Off di Launcher.",
        en: "Dzerofour exe v60: new capacity, club & national rules, ML start year 2026/27, club walk-out anthems (.clubbgm), sleeve badges (.badges) and a PRIME On/Off switch in the Launcher."
      }
    }
  ],

  // Daftar kompetisi baru di halaman patch, dikelompokkan per negara.
  // Satu kelompok: { group: "Nama negara", items: ["Kompetisi", ...] }
  competitionsList: {
    title: { id: "{newCompetitions} kompetisi baru", en: "{newCompetitions} new competitions" },
    text: {
      id: "Dulu dianggap mustahil. Kini liga, piala, dan super cup dari Asia, Eropa, dan ASEAN hadir lengkap dengan jadwal, klub, dan pialanya.",
      en: "It was once thought impossible. Now leagues, cups and super cups from Asia, Europe and ASEAN arrive with their own fixtures, clubs and trophies."
    },
    items: [
      { group: { id: "Jepang", en: "Japan" }, items: ["Meiji Yasuda J1 League", "Meiji Yasuda J2 League", "J.League YBC Levain Cup", "FUJIFILM Super Cup"] },
      { group: "Indonesia", items: ["BRI Super League", "Pegadaian Championship", "Piala Indonesia", "Piala Presiden"] },
      { group: { id: "Arab Saudi", en: "Saudi Arabia" }, items: ["ROSHN Saudi League", "King's Cup", "Saudi Super Cup"] },
      { group: { id: "Korea Selatan", en: "South Korea" }, items: ["Hana Bank K League 1", "Hana Bank Korea Cup", "K League Super Cup"] },
      { group: "Thailand", items: ["Thai League 1", "Chang FA Cup", "Thailand Champions Cup"] },
      { group: "Malaysia", items: ["unifi Liga Super", "Piala FA Malaysia", "Piala Sumbangsih"] },
      { group: { id: "Turki", en: "Türkiye" }, items: ["Trendyol Süper Lig", "Ziraat Türkiye Kupası", "Turkcell Süper Kupa"] },
      { group: { id: "Belgia", en: "Belgium" }, items: ["Jupiler Pro League", "Croky Cup"] },
      { group: { id: "Skotlandia", en: "Scotland" }, items: ["William Hill Premiership", "Scottish Cup"] },
      { group: { id: "Inggris", en: "England" }, items: ["Carabao Cup"] },
      { group: { id: "Asia & ASEAN", en: "Asia & ASEAN" }, items: ["AFC Champions League Two", "FIFA ASEAN Cup"] },
      { group: { id: "Legenda & Fantasi", en: "Legends & Fantasy" }, items: ["Dzerofour Legends League", "Dzerofour Legends Cup", "Dzerofour Legends Super Cup"] }
    ],
    note: {
      id: "Juga diperbarui: Piala Dunia 48 tim, Piala Asia & AFCON 24 tim, Copa América 16 tim, MLS, Liga Profesional Argentina, Bundesliga, dan Liga MX.",
      en: "Also updated: 48-team World Cup, 24-team Asian Cup & AFCON, 16-team Copa América, MLS, Argentina's Liga Profesional, the Bundesliga and Liga MX."
    }
  },

  /* ---------- Bagian "Format baru" ---------- */
  formats: {
    title: { id: "Format kompetisi baru", en: "New competition formats" },
    text: {
      id: "Regulasi kompetisi di PES 2017 sebagian tertanam di exe, jadi format baru butuh patch database dan patch exe sekaligus.",
      en: "Part of PES 2017's competition rules live inside the exe, so every new format needs both a database patch and an exe patch."
    },
    // Tabel perbandingan UCL.
    compare: {
      title: { id: "UEFA Champions League: lama vs baru", en: "UEFA Champions League: old vs new" },
      before: { id: "Format lama", en: "Old format" },
      after: { id: "Format Dzerofour", en: "Dzerofour format" },
      rows: [
        { label: { id: "Peserta", en: "Clubs" }, before: "32", after: "36" },
        { label: { id: "Tahap awal", en: "First stage" }, before: { id: "8 grup isi 4", en: "8 groups of 4" }, after: { id: "Satu tabel 36 klub", en: "One 36-club table" } },
        { label: { id: "Laga per klub", en: "Matches per club" }, before: "6", after: { id: "8, lawan berbeda", en: "8, all different opponents" } },
        { label: { id: "Lolos", en: "Through" }, before: { id: "Juara dan runner-up grup", en: "Group winners and runners-up" }, after: { id: "1-8 langsung, 9-24 lewat play-off", en: "1-8 direct, 9-24 via play-offs" } },
        { label: { id: "Tersingkir", en: "Out" }, before: { id: "Peringkat 3 dan 4 grup", en: "3rd and 4th in each group" }, after: { id: "Peringkat 25-36", en: "Places 25-36" } },
        { label: { id: "Laga tahap awal", en: "First-stage matches" }, before: "96", after: "144" }
      ],
      note: {
        id: "Jadwal fase liga dibuat ulang tiap turnamen: 1 lawan kandang dan 1 tandang dari tiap pot, tanpa lawan senegara, dan tidak 3 kali kandang atau tandang berturut-turut.",
        en: "League-phase fixtures are drawn fresh every tournament: one home and one away opponent from each pot, no clubs from the same country, and never three home or away games in a row."
      }
    },
    // Kartu per kompetisi. status: "done" | "progress" | "planned"
    items: [
      {
        name: "UEFA Champions League",
        status: "done",
        facts: [{ id: "36 klub", en: "36 clubs" }, { id: "8 laga (MD7-8 Jan)", en: "8 matches (Jan MD7-8)" }, { id: "Play-off 9-24", en: "Play-offs 9-24" }, { id: "18 bahasa", en: "18 languages" }],
        text: { id: "Dimainkan penuh dari undian sampai juara di mode UCL dan Master League, dengan kalender Januari resmi dan teks fase liga di 18 bahasa.", en: "Played in full from the draw to the final in UCL mode and Master League, with the official January matchdays and league-phase texts in 18 languages." }
      },
      {
        name: "UEFA Europa League",
        status: "done",
        facts: [{ id: "36 klub", en: "36 clubs" }, { id: "Satu tabel", en: "One table" }, { id: "Play-off 9-24", en: "Play-offs 9-24" }],
        text: { id: "Dari 48 slot dan 12 grup menjadi format baru 36 klub. Undian, jadwal, dan klasemen sudah terbukti di mode UEL, League Mode, dan Master League.", en: "From 48 slots and 12 groups to the new 36-club format. Draw, fixtures and table proven across UEL mode, League Mode and Master League." }
      },
      {
        name: "FIFA World Cup 2026",
        status: "done",
        facts: [{ id: "48 timnas", en: "48 national teams" }, { id: "12 grup tetap", en: "12 fixed groups" }, { id: "32 besar Annex C", en: "Annex C round of 32" }],
        text: { id: "48 timnas dengan skuad 23-26 pemain, 12 grup asli A-L, dan bagan 32 besar FIFA (495 kombinasi 8 peringkat ketiga terbaik). Lolos penuh sampai juara.", en: "48 national teams with 23-26 player squads, the 12 official groups A-L, and FIFA's round of 32 bracket (495 best-third combinations). Played in full to the trophy." }
      },
      {
        name: "AFC Asian Cup & AFCON",
        status: "done",
        facts: [{ id: "24 timnas", en: "24 national teams" }, { id: "6 grup × 4", en: "6 groups of 4" }, { id: "4 peringkat 3 terbaik", en: "4 best third-placed" }],
        text: { id: "Piala Asia dan Piala Afrika naik ke format resmi 24 timnas: 6 grup, juara + runner-up + 4 peringkat ketiga terbaik lolos ke 16 besar.", en: "The Asian Cup and Africa Cup of Nations upgraded to the official 24-team format: 6 groups, with winners, runners-up and 4 best thirds advancing to the round of 16." }
      },
      {
        name: "Copa América & FIFA ASEAN Cup",
        status: "done",
        facts: [{ id: "Copa 16 tim (4 grup)", en: "Copa 16 teams (4 groups)" }, { id: "ASEAN 14 tim (2×7)", en: "ASEAN 14 teams (2×7)" }],
        text: { id: "Copa América kini memakai fase 4 grup × 4 sebelum perempat final. FIFA ASEAN Cup hadir dengan 14 timnas dalam 2 grup isi 7, semifinal silang, sampai upacara trofi.", en: "Copa América now features a 4×4 group stage before the quarter-finals. The FIFA ASEAN Cup debuts with 14 national teams in two groups of 7, cross semi-finals and a trophy ceremony." }
      },
      {
        name: "AFC Champions League Elite & Two",
        status: "done",
        facts: [{ id: "ACLE 32 klub (West/East)", en: "ACLE 32 clubs (West/East)" }, { id: "ACL Two 8 grup", en: "ACL Two 8 groups" }],
        text: { id: "ACL Elite memakai fase liga per wilayah dengan pot resmi 2026/27. ACL Two hadir sebagai kompetisi baru 32 klub (Grup A-D West, E-H East) sampai babak gugur.", en: "ACL Elite uses a regional league phase with official 2026/27 pots. ACL Two arrives as a new 32-club competition (Groups A-D West, E-H East) through the knockouts." }
      },
      {
        name: "FIFA Club World Cup & Carabao Cup",
        status: "done",
        facts: [{ id: "CWC 32 klub (8 grup)", en: "CWC 32 clubs (8 groups)" }, { id: "Carabao 44 klub Inggris", en: "Carabao 44 English clubs" }],
        text: { id: "Club World Cup 32 klub dengan regulasi mandiri (Konami Cup dipulihkan). Carabao Cup hadir sebagai piala kedua Inggris untuk 44 klub Premier League & Championship.", en: "32-club Club World Cup on its own regulations (Konami Cup restored). The Carabao Cup joins as England's second domestic cup for all 44 Premier League & Championship clubs." }
      },
      {
        name: { id: "Liga 30 klub & PRIME Switch", en: "30-club leagues & PRIME Switch" },
        status: "done",
        facts: ["MLS", { id: "Liga Argentina", en: "Argentine league" }, { id: "Dzerofour Legends (22 Prime + 8 Fantasy)", en: "Dzerofour Legends (22 Prime + 8 Fantasy)" }],
        text: { id: "Liga 30 klub satu putaran (29 pekan). Dzerofour Legends League membawa 22 Prime Team bersejarah (1962-2020) dan 8 Fantasy Team, dengan sakelar On/Off di Launcher.", en: "Single-round 30-club leagues (29 matchdays). Dzerofour Legends League brings 22 historic Prime Teams (1962-2020) and 8 Fantasy Teams, with a Launcher On/Off switch." }
      }
    ]
  },

  /* ---------- Bagian "Bukti di game" ---------- */
  gallery: {
    title: { id: "Bukti di game", en: "Seen in the game" },
    text: {
      id: "Satu turnamen UEFA Champions League format baru dimainkan penuh di PES 2017, dari fase liga sampai juara.",
      en: "One full new-format UEFA Champions League tournament played in PES 2017, from the league phase to the trophy."
    },
    items: [
      { image: "assets/img/patch/ucl-standings.jpg", caption: { id: "Klasemen satu tabel 36 klub: peringkat 1-8 ke 16 besar, 9-24 ke play-off", en: "One 36-club table: places 1-8 go to the round of 16, 9-24 to the play-offs" } },
      { image: "assets/img/patch/ucl-matchday.jpg", caption: { id: "Matchday 8 fase liga, semua 36 klub main di hari yang sama", en: "League phase matchday 8, all 36 clubs play on the same day" } },
      { image: "assets/img/patch/ucl-playoff.jpg", caption: { id: "Play-off knockout dua leg", en: "Two-legged knockout play-offs" } },
      { image: "assets/img/patch/ucl-round16.jpg", caption: { id: "16 besar dengan bracket tetap sampai final", en: "Round of 16 on a fixed bracket to the final" } },
      { image: "assets/img/patch/ucl-winner.jpg", caption: { id: "Layar juara di akhir turnamen", en: "The winner screen at the end of the tournament" } }
    ]
  },

  /* ---------- Bagian "Database: asli vs Dzerofour" ---------- */
  // original = angka PES 2017 asli. key = angka dari patch-stats.js. limit = batas baru (boleh null).
  database: {
    title: { id: "Database: asli vs Dzerofour", en: "Database: stock vs Dzerofour" },
    text: {
      id: "Batas bawaan PES 2017 adalah 20.800 pemain dan 648 tim. Exe Dzerofour memindah tabel pemain di memori, sehingga database bisa jauh lebih besar.",
      en: "Stock PES 2017 stops at 20,800 players and 648 teams. The Dzerofour exe moves the player table in memory, so the database can grow far larger."
    },
    headers: { label: "", original: { id: "PES 2017 asli", en: "Stock PES 2017" }, now: { id: "Dzerofour sekarang", en: "Dzerofour now" }, limit: { id: "Batas baru", en: "New limit" } },
    rows: [
      { label: { id: "Pemain", en: "Players" }, original: 12333, key: "players", limit: 40000 },
      { label: { id: "Tim", en: "Teams" }, original: 501, key: "teams", limit: 2500 },
      { label: { id: "Pelatih", en: "Coaches" }, original: null, key: "coaches", limit: 3000 },
      { label: { id: "Kompetisi", en: "Competitions" }, original: 61, key: "competitions", limit: null },
      { label: { id: "Regulasi kompetisi", en: "Competition rules" }, original: 153, key: "regulations", limit: null },
      { label: { id: "Slot peserta kompetisi", en: "Competition entry slots" }, original: 803, key: "competitionEntries", limit: null }
    ]
  },

  /* ---------- Bagian "Isi liga" (daftar klub dari data/leagues.js) ---------- */
  leagues: {
    title: { id: "Isi liga", en: "League by league" },
    text: {
      id: "Daftar klub dibaca langsung dari database patch. Klik kompetisi untuk melihat klubnya.",
      en: "Club lists are read straight from the patch database. Tap a competition to see its clubs."
    },
    clubs: { id: "klub", en: "clubs" },
    isNew: { id: "Baru", en: "New" },
    also: { id: "Juga", en: "Also" }
  },

  /* ---------- Bagian "Berikutnya" ---------- */
  // status: "progress" (sedang dikerjakan) | "planned" (direncanakan)
  roadmap: {
    title: { id: "Berikutnya", en: "Coming next" },
    items: [
      { status: "progress", name: { id: "Uji penuh Master League oleh tim tester", en: "Full Master League testing by the tester team" }, text: { id: "Exe v60 sudah membawa tahun mulai 2026/27, perbaikan kategori klub Asia, dan sakelar PRIME. Tim tester sedang menguji lintas musim, promosi/degradasi, dan kalender timnas.", en: "Exe v60 brings the 2026/27 start year, Asian club category fixes and the PRIME switch. The tester team is verifying multi-season runs, promotion/relegation and national team calendars." } },
      { status: "progress", name: { id: "Server lokal myClub: Match & Loan Contract", en: "Local myClub server: Match & Loan Contract" }, text: { id: "Tutorial, GP/Coin unlimited, Top Agent 27 liga, 62 scout ★5, lelang scout spesial klub/negara, dan Club Extension sudah jalan. Berikutnya Loan Contract, Hire Manager, dan laga VS COM / Divisions.", en: "The tutorial, unlimited GP/Coins, 27-league Top Agents, 62 5★ scouts, special club/nation auctions and Club Extension work. Next up: Loan Contracts, Hire Manager and VS COM / Divisions matches." } },
      { status: "progress", name: { id: "Musik walk-out & chant per klub", en: "Club walk-out music & chants" }, text: { id: "Section .clubbgm di exe sudah membuka anthem walk-out untuk semua tim kandang. Pengisian lagu dan chant suporter dilanjutkan lewat PES Audio Editor.", en: "The .clubbgm exe section unlocks walk-out anthems for every home team. Adding club songs and fan chants continues through PES Audio Editor." } },
      { status: "progress", name: { id: "Selebrasi baru", en: "New celebrations" }, text: { id: "Target lebih dari 500 selebrasi dari eFootball tanpa menghapus 122 selebrasi bawaan.", en: "Aiming for 500+ celebrations from eFootball without removing the 122 stock ones." } },
      { status: "planned", name: { id: "2. Bundesliga & Liga Super China", en: "2. Bundesliga & Chinese Super League" }, text: { id: "Cita-cita ekspansi berikutnya setelah slot daftar tim tambahan dan data skuad siap.", en: "Future expansion goals once additional team-list slots and squad data are ready." } },
      { status: "planned", name: { id: "Trofi & cutscene per kompetisi", en: "Per-competition trophies & cutscenes" }, text: { id: "Pemetaan jenis laga dan slot HUD/cutscene agar semakin banyak turnamen memiliki upacara trofi khusus.", en: "Match-type and HUD/cutscene slot mapping so more tournaments get their own trophy ceremonies." } }
    ]
  }
};
