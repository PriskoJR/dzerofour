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
        id: "Facepack klub Eropa: {facesEurope} face dari Premier League, Bundesliga, LaLiga, dan Serie A, dibuat dengan PES Face Converter dari FC 27 dan eFootball.",
        en: "European clubs facepack: {facesEurope} faces from the Premier League, Bundesliga, LaLiga and Serie A, made with PES Face Converter from FC 27 and eFootball."
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
  }
};
