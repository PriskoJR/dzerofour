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
    { key: "faces", label: { id: "Face", en: "Faces" } },
    { key: "teamLogos", label: { id: "Logo tim", en: "Team logos" } }
  ],

  modules: [
    {
      name: "Database",
      status: "progress",
      percent: null,
      text: {
        id: "Musim 2026/27: {players} pemain, {teams} tim, dan {coaches} pelatih. Skuad dari eFootball, Transfermarkt, dan Football Manager.",
        en: "Season 2026/27: {players} players, {teams} teams and {coaches} coaches. Squads from eFootball, Transfermarkt and Football Manager."
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
      status: "progress",
      percent: null,
      text: {
        id: "{competitions} kompetisi, {newCompetitions} di antaranya baru. Liga, piala, dan super cup baru sudah berjalan di League Mode. Master League sedang dikerjakan.",
        en: "{competitions} competitions, {newCompetitions} of them new. The new leagues, cups and super cups already run in League Mode. Master League is next."
      }
    },
    {
      name: { id: "Regulasi", en: "Regulations" },
      status: "progress",
      percent: null,
      text: {
        id: "UEFA Champions League format 36 klub sudah dimainkan dari undian sampai juara, dan Europa League ikut format 36 klub. AFC Champions League Elite, ACL Two, dan FIFA Club World Cup 32 klub berjalan di League Mode.",
        en: "The 36-club UEFA Champions League has been played from the draw to the final, and the Europa League follows the same 36-club format. AFC Champions League Elite, ACL Two and the 32-club FIFA Club World Cup run in League Mode."
      }
    },
    {
      name: "Miniface",
      status: "progress",
      percent: null,
      text: {
        id: "{minifaces} miniface pemain sudah masuk.",
        en: "{minifaces} player minifaces added so far."
      }
    },
    {
      name: "Facepack",
      status: "progress",
      percent: null,
      text: {
        id: "Facepack klub Eropa: {facesEurope} face dari Premier League, Bundesliga, LaLiga, dan Serie A, dibuat dengan PES Face Toolkit dari FC 27 dan eFootball.",
        en: "European clubs facepack: {facesEurope} faces from the Premier League, Bundesliga, LaLiga and Serie A, made with PES Face Toolkit from FC 27 and eFootball."
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
      name: "Logo",
      status: "progress",
      percent: null,
      text: {
        id: "Logo {teamLogos} tim dan {competitionLogos} kompetisi.",
        en: "Logos for {teamLogos} teams and {competitionLogos} competitions."
      }
    },
    {
      name: { id: "Bahasa", en: "Language" },
      status: "progress",
      percent: null,
      text: {
        id: "Nama resmi dan sponsor 2026/27 untuk semua kompetisi, di 18 bahasa game. {languages} paket bahasa dan region.",
        en: "Official 2026/27 names and sponsors for every competition, in all 18 game languages. {languages} language and region packs."
      }
    },
    {
      name: { id: "Menu & HUD", en: "Menu & HUD" },
      status: "progress",
      percent: null,
      text: {
        id: "Tampilan menu baru sedang disiapkan dengan PES HUD Editor.",
        en: "A new menu look is being prepared with PES HUD Editor."
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
      name: { id: "Mode online", en: "Online mode" },
      status: "planned",
      percent: null,
      text: {
        id: "Team Lobby dan myClub lewat server sendiri. Login dan pembuatan tim myClub sudah berhasil di tahap riset.",
        en: "Team Lobby and myClub on our own server. Signing in and creating a myClub team already work in research."
      }
    },
    {
      name: "Executable",
      status: "progress",
      percent: null,
      text: {
        id: "Exe Dzerofour membawa kapasitas baru, kompetisi baru, dan regulasi baru. Dikemas final menjelang rilis.",
        en: "The Dzerofour exe carries the new capacity, competitions and regulations. Final packaging comes closer to release."
      }
    }
  ],

  // Daftar kompetisi baru di halaman patch, dikelompokkan per negara.
  // Satu kelompok: { group: "Nama negara", items: ["Kompetisi", ...] }
  competitionsList: {
    title: { id: "{newCompetitions} kompetisi baru", en: "{newCompetitions} new competitions" },
    text: {
      id: "Dulu dianggap mustahil. Kini liga, piala, dan super cup dari Asia dan Eropa hadir lengkap dengan jadwal, klub, dan pialanya.",
      en: "It was once thought impossible. Now leagues, cups and super cups from Asia and Europe arrive with their own fixtures, clubs and trophies."
    },
    items: [
      { group: { id: "Jepang", en: "Japan" }, items: ["Meiji Yasuda J1 League", "Meiji Yasuda J2 League", "J.League YBC Levain Cup", "FUJIFILM Super Cup"] },
      { group: "Indonesia", items: ["BRI Super League", "Pegadaian Championship"] },
      { group: { id: "Arab Saudi", en: "Saudi Arabia" }, items: ["ROSHN Saudi League", "King's Cup", "Saudi Super Cup"] },
      { group: { id: "Korea Selatan", en: "South Korea" }, items: ["Hana Bank K League 1", "Hana Bank Korea Cup", "K League Super Cup"] },
      { group: "Thailand", items: ["Thai League 1", "Chang FA Cup", "Thailand Champions Cup"] },
      { group: "Malaysia", items: ["unifi Liga Super", "Piala FA Malaysia", "Piala Sumbangsih"] },
      { group: { id: "Turki", en: "Türkiye" }, items: ["Trendyol Süper Lig", "Ziraat Türkiye Kupası", "Turkcell Süper Kupa"] },
      { group: { id: "Belgia", en: "Belgium" }, items: ["Jupiler Pro League", "Croky Cup"] },
      { group: { id: "Skotlandia", en: "Scotland" }, items: ["William Hill Premiership", "Scottish Cup"] },
      { group: { id: "Asia (antarklub)", en: "Asia (club)" }, items: ["AFC Champions League Two"] }
    ],
    note: {
      id: "Juga diperbarui: MLS, Liga Profesional Argentina, Bundesliga, dan Liga MX di slot lama.",
      en: "Also updated: MLS, Argentina's Liga Profesional, the Bundesliga and Liga MX in existing slots."
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
        facts: [{ id: "36 klub", en: "36 clubs" }, { id: "8 laga", en: "8 matches" }, { id: "Play-off 9-24", en: "Play-offs 9-24" }, { id: "Pot resmi 2026/27", en: "Official 2026/27 pots" }],
        text: { id: "Dimainkan penuh dari undian sampai juara di mode UCL, tanpa crash. Master League juga sudah memakai format ini.", en: "Played in full from the draw to the final in UCL mode, with no crashes. Master League uses the format too." }
      },
      {
        name: "UEFA Europa League",
        status: "done",
        facts: [{ id: "36 klub", en: "36 clubs" }, { id: "Satu tabel", en: "One table" }, { id: "Play-off 9-24", en: "Play-offs 9-24" }],
        text: { id: "Dari 48 slot dan 12 grup menjadi format baru 36 klub. Undian, jadwal, dan klasemen sudah terbukti di game.", en: "From 48 slots and 12 groups to the new 36-club format. The draw, fixtures and table work in the game." }
      },
      {
        name: "AFC Champions League Elite",
        status: "progress",
        facts: [{ id: "32 klub", en: "32 clubs" }, { id: "West 16 + East 16", en: "West 16 + East 16" }, { id: "8 laga", en: "8 matches" }],
        text: { id: "Fase liga per wilayah dengan pot resmi 2026/27, tanpa lawan senegara. Berjalan di League Mode.", en: "A league phase per region with the official 2026/27 pots and no same-country ties. Runs in League Mode." }
      },
      {
        name: "AFC Champions League Two",
        status: "progress",
        facts: [{ id: "Kompetisi baru", en: "New competition" }, { id: "32 klub", en: "32 clubs" }, { id: "8 grup + knockout", en: "8 groups + knockouts" }],
        text: { id: "Tidak ada di PES 2017 asli. Grup A-D untuk West dan E-H untuk East, berjalan di League Mode.", en: "Not in the original PES 2017. Groups A-D for the West and E-H for the East, running in League Mode." }
      },
      {
        name: "FIFA Club World Cup",
        status: "progress",
        facts: [{ id: "32 klub", en: "32 clubs" }, { id: "8 grup isi 4", en: "8 groups of 4" }, { id: "Juni-Juli", en: "June-July" }],
        text: { id: "Dari 4 klub sistem gugur menjadi 32 klub seperti format 2025. Undian dan laga grup sudah berjalan.", en: "From a 4-club knockout to 32 clubs like the 2025 format. The draw and group games already run." }
      },
      {
        name: { id: "Liga 30 klub", en: "30-club leagues" },
        status: "done",
        facts: ["MLS", { id: "Liga Argentina", en: "Argentine league" }, { id: "29 matchday", en: "29 matchdays" }],
        text: { id: "Liga berisi 30 klub yang saling bertemu sekali. Mesinnya sudah terbukti di League Mode dan Master League.", en: "Leagues of 30 clubs that meet once each. Proven in League Mode and Master League." }
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
      { status: "progress", name: { id: "Master League untuk liga baru", en: "Master League for the new leagues" }, text: { id: "Liga Asia, Eropa, dan Pegadaian Championship sudah lolos League Mode. Berikutnya Exhibition, Master League, dan musim kedua.", en: "The Asian and European leagues and the Pegadaian Championship pass League Mode. Exhibition, Master League and the second season are next." } },
      { status: "progress", name: { id: "Knockout ACL Elite & Club World Cup", en: "ACL Elite & Club World Cup knockouts" }, text: { id: "Fase grup dan fase liga sudah berjalan. Babak gugur sedang diuji.", en: "The group and league phases run. The knockout rounds are being tested." } },
      { status: "progress", name: { id: "Selebrasi baru", en: "New celebrations" }, text: { id: "Target lebih dari 500 selebrasi tanpa menghapus 122 selebrasi bawaan.", en: "Aiming for 500+ celebrations without removing the 122 stock ones." } },
      { status: "planned", name: "Copa Sudamericana & Recopa", text: { id: "Kompetisi tersembunyi Konami yang paling siap dipulihkan berikutnya.", en: "The next of Konami's hidden competitions ready to be restored." } },
      { status: "planned", name: { id: "Fase grup Levain Cup & J3 League", en: "Levain Cup group stage & J3 League" }, text: { id: "Melengkapi keluarga J-League.", en: "Completing the J-League family." } },
      { status: "planned", name: { id: "Piala Dunia 48 tim", en: "48-team World Cup" }, text: { id: "Data 48 tim dan 12 grup sudah ada. Masih menunggu patch exe untuk grup I-L.", en: "The 48-team, 12-group data is ready. Groups I-L still need an exe patch." } },
      { status: "planned", name: { id: "Musik dan chant per tim", en: "Team music and chants" }, text: { id: "Lagu walk-out dan chant suporter per klub lewat PES Audio Editor.", en: "Walk-out music and fan chants per club through PES Audio Editor." } },
      { status: "planned", name: { id: "Mode online & launcher", en: "Online mode & launcher" }, text: { id: "Team Lobby dan myClub lewat server sendiri, nanti dimuat dari launcher Dzerofour.", en: "Team Lobby and myClub on our own server, later loaded from a Dzerofour launcher." } }
    ]
  }
};
