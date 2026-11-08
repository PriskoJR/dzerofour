/* =====================================================================
   PATCH.JS : progres Dzerofour Patch. File ini yang paling sering diubah.

   status modul:  "done" (Selesai) | "progress" (Dikerjakan) | "planned" (Direncanakan)
   percent:       isi 0-100 untuk memunculkan bar. Hapus atau biarkan null
                  kalau tidak mau menampilkan persen.
   {nama} di dalam teks otomatis diganti angka dari patch-stats.js,
   jadi angkanya ikut berubah saat UPDATE-PATCH-STATS.bat dijalankan.
   ===================================================================== */
window.PATCH = {
  status: "soon",
  version: "",

  intro: {
    id: "Patch PES 2017 yang sedang digarap: database baru, ribuan miniface, facepack, kitpack, logo, dan kompetisi yang sebelumnya tidak ada di game.",
    en: "A PES 2017 patch in the making: a new database, thousands of minifaces, facepacks, kitpacks, logos and competitions the game never had."
  },

  // Dua angka ini tidak bisa dihitung otomatis. Lihat nilainya di
  // PES Face Converter > Project ("... with a real face", "... competitions").
  realFaces: 629,
  competitions: 51,

  // Papan skor. key = nama angka di patch-stats.js ATAU di atas.
  stats: [
    { key: "players", label: { id: "Pemain", en: "Players" } },
    { key: "minifaces", label: { id: "Miniface", en: "Minifaces" } },
    { key: "teams", label: { id: "Tim", en: "Teams" } },
    { key: "realFaces", label: { id: "Real face", en: "Real faces" } },
    { key: "competitions", label: { id: "Kompetisi", en: "Competitions" } },
    { key: "kits", label: { id: "Kit", en: "Kits" } }
  ],

  modules: [
    {
      name: "Database",
      status: "progress",
      percent: null,
      text: {
        id: "{players} pemain, {teams} tim, dan {coaches} pelatih.",
        en: "{players} players, {teams} teams and {coaches} coaches."
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
        id: "{realFaces} real face di database. Project: Nasional {facesNational}, Spanyol {facesSpain}.",
        en: "{realFaces} real faces in the database. Projects: National {facesNational}, Spain {facesSpain}."
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
      name: { id: "Kompetisi baru", en: "New competitions" },
      status: "progress",
      percent: null,
      text: {
        id: "4 slot kompetisi baru sudah bisa dimainkan, dimulai dari Jepang.",
        en: "4 new competition slots are playable, starting with Japan."
      }
    },
    {
      name: { id: "Bahasa", en: "Language" },
      status: "progress",
      percent: null,
      text: {
        id: "{languages} paket bahasa dan region.",
        en: "{languages} language and region packs."
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
      name: "Executable",
      status: "planned",
      percent: null,
      text: {
        id: "Executable patch akan dikemas menjelang rilis.",
        en: "The patch executable will be packaged closer to release."
      }
    }
  ],

  competitionsList: {
    title: { id: "Jepang jadi yang pertama", en: "Japan comes first" },
    text: {
      id: "Dulu dianggap mustahil. Kini 4 slot kompetisi baru bisa dimainkan, lengkap dengan jadwal, klub, dan pialanya.",
      en: "It was once thought impossible. Now 4 new competition slots are playable, complete with fixtures, clubs and cups."
    },
    items: ["Meiji Yasuda J1 League", "Meiji Yasuda J2 League", "J.League YBC Levain Cup", "FUJIFILM Super Cup"]
  }
};
