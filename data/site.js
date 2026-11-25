/* =====================================================================
   SITE.JS : kontak, tulisan Home, dan semua label tombol/judul.
   Teks dua bahasa ditulis { id: "...", en: "..." }.
   Kalau cuma ditulis "teks biasa", teks itu dipakai di kedua bahasa.
   ===================================================================== */
window.SITE = {
  brand: "Dzerofour Project",
  author: "Prisko Jr Mod",

  // Kontak. Ganti nomor di sini saja, semua tombol ikut berubah.
  whatsapp: "62895609621497",
  facebook: "https://www.facebook.com/priskojrmod",

  home: {
    eyebrow: "PES 2017 · Patch",
    title: "Dzerofour Patch",
    ctaPatch: { id: "Lihat progres patch", en: "See patch progress" },
    ctaTools: { id: "Lihat tools", en: "See the tools" },
    boardLabel: "Team sheet",
    boardSub: { id: "Dzerofour Patch · musim 2026/27", en: "Dzerofour Patch · 2026/27 season" },
    boardCount: { id: "modul", en: "modules" },
    toolsKicker: "PES 2017 Modding Tools",
    toolsTitle: { id: "Daftar tools", en: "The tools" },
    toolsText: {
      id: "Buatan sendiri oleh Prisko Jr Mod. Klik salah satu untuk melihat detailnya.",
      en: "Made in-house by Prisko Jr Mod. Pick one to see the details."
    }
  },

  ui: {
    navHome: "Home",
    navPatch: "Dzerofour Patch",
    navDatabase: "Database ID",
    navTools: "Tools",
    navContact: { id: "Kontak", en: "Contact" },
    menu: "Menu",
    back: { id: "Kembali ke Home", en: "Back to Home" },
    notFound: { id: "Tool ini tidak ditemukan.", en: "This tool could not be found." },

    released: "Released",
    soon: "Coming Soon",
    done: { id: "Selesai", en: "Done" },
    progress: { id: "Dikerjakan", en: "In progress" },
    planned: { id: "Direncanakan", en: "Planned" },
    viewDetail: { id: "Lihat detail", en: "View details" },

    buy: { id: "Beli via WhatsApp", en: "Buy on WhatsApp" },
    priceNote: { id: "Lisensi pribadi · 1 akun, 1 PC dalam satu waktu", en: "Personal licence · one account, one PC at a time" },
    soonTitle: { id: "Belum rilis", en: "Not released yet" },
    soonText: {
      id: "Mau tanya fiturnya atau kapan rilis? Chat langsung saja.",
      en: "Want to ask about features or the release? Just send a message."
    },
    ask: { id: "Tanya via WhatsApp", en: "Ask on WhatsApp" },
    sources: { id: "Sumber face", en: "Face sources" },
    modes: { id: "Mode kerja", en: "Work modes" },
    features: { id: "Fitur", en: "Features" },
    requirements: { id: "Yang dibutuhkan", en: "What you need" },
    previews: { id: "Pratinjau aplikasi", en: "App previews" },
    previewsSub: { id: "Klik gambar untuk memperbesar dan melihat setiap halaman aplikasi.", en: "Click any screenshot to enlarge and explore each page of the app." },
    versions: { id: "Riwayat versi", en: "Version history" },
    otherTools: { id: "Tool lainnya", en: "Other tools" },

    patchKicker: { id: "Laporan pertandingan", en: "Match report" },
    patchTitle: { id: "Progres Dzerofour Patch", en: "Dzerofour Patch progress" },
    patchUpdated: { id: "Angka dihitung dari folder patch per", en: "Figures counted from the patch folder on" },
    modulesTitle: { id: "Isi patch per modul", en: "Patch contents by module" },
    compsTitle: { id: "Kompetisi baru", en: "New competitions" },
    jumpLabel: { id: "Langsung ke", en: "Jump to" },
    jumpModules: { id: "Modul", en: "Modules" },
    jumpFormats: { id: "Format baru", en: "New formats" },
    jumpGallery: { id: "Bukti di game", en: "In-game" },
    jumpDatabase: "Database",
    jumpLeagues: { id: "Isi liga", en: "Leagues" },
    jumpRoadmap: { id: "Berikutnya", en: "Next" },
    jumpUpdates: { id: "Update", en: "Updates" },
    close: { id: "Tutup", en: "Close" },
    prev: { id: "Sebelumnya", en: "Previous" },
    next: { id: "Berikutnya", en: "Next" },

    updatesKicker: { id: "Jalannya pertandingan", en: "Match timeline" },
    updatesTitle: { id: "Update terbaru", en: "Latest updates" },
    allUpdates: { id: "Lihat semua update", en: "See all updates" },

    contactTitle: { id: "Mau beli atau tanya dulu?", en: "Ready to buy, or got a question?" },
    contactText: {
      id: "Chat langsung ke Prisko Jr Mod. Kalau ada face yang kurang pas, kirim screenshot dan ID-nya.",
      en: "Message Prisko Jr Mod directly. If a face looks off, send a screenshot and its ID."
    },
    disclaimer: {
      id: "Dzerofour Project adalah karya penggemar dan tidak berafiliasi dengan atau didukung oleh Konami maupun Electronic Arts. PES, Pro Evolution Soccer, dan eFootball adalah merek dagang Konami Digital Entertainment. FC 27 adalah merek dagang Electronic Arts.",
      en: "Dzerofour Project is fan-made and is not affiliated with or endorsed by Konami or Electronic Arts. PES, Pro Evolution Soccer and eFootball are trademarks of Konami Digital Entertainment. FC 27 is a trademark of Electronic Arts."
    },
    waBuy: { id: "Halo Prisko, saya mau beli", en: "Hi Prisko, I would like to buy" },
    waAsk: { id: "Halo Prisko, saya mau tanya tentang", en: "Hi Prisko, I have a question about" },
    waHello: { id: "Halo Prisko, saya mau tanya.", en: "Hi Prisko, I have a question." },

    dbKicker: { id: "Katalog ID · Dzerofour Patch", en: "ID Catalog · Dzerofour Patch" },
    dbTitle: { id: "Database ID Tim & Pemain", en: "Team & Player ID Database" },
    dbIntro: {
      id: "Daftar lengkap Kompetisi, ID & Nama Tim, serta ID & Nama Pemain di Dzerofour Patch. Cari dengan Nama atau ID, lalu klik tombol salin atau teksnya untuk menyalin.",
      en: "Complete list of Competitions, Team IDs & Names, and Player IDs & Names in Dzerofour Patch. Search by Name or ID, then click any copy button or item to copy."
    },
    dbSearchPlaceholder: { id: "Cari nama atau ID tim / pemain (contoh: Arsenal, 101, Messi, 7511)...", en: "Search team or player name or ID (e.g. Arsenal, 101, Messi, 7511)..." },
    dbSearchBtn: { id: "Cari", en: "Search" },
    dbClearBtn: { id: "Reset", en: "Clear" },
    dbFilterAll: { id: "Semua", en: "All" },
    dbTeamsCount: { id: "tim", en: "teams" },
    dbPlayersCount: { id: "pemain", en: "players" },
    dbCompsCount: { id: "kompetisi", en: "competitions" },
    dbCopyId: { id: "Salin ID", en: "Copy ID" },
    dbCopyName: { id: "Salin Nama", en: "Copy Name" },
    dbCopied: { id: "Disalin", en: "Copied" },
    dbNoResult: { id: "Tidak ada tim atau pemain yang cocok dengan pencarian ini.", en: "No teams or players matched your search." },
    dbSearchSummary: { id: "Hasil pencarian", en: "Search results" },
    dbMatchingPlayers: { id: "pemain cocok", en: "matching players" },
    dbShowAllPlayers: { id: "Tampilkan semua pemain tim ini", en: "Show all players in this team" },
    dbCTA: { id: "Buka Katalog Database ID", en: "Open Database ID Catalog" }
  }
};
