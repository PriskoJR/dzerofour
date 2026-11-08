/* =====================================================================
   PRODUCTS.JS : daftar karya.

   Saat tool baru rilis, ubah di tool itu:
     status: "released"        (sebelumnya "soon")
     price:  { idr: "Rp ...", usd: "US$..." }
   Label kuning otomatis jadi hijau, tombolnya jadi "Beli", dan tool itu
   pindah ke barisan paling depan di Home.

   id  = alamat halaman detail, misalnya tool.html?id=kit
   no  = nomor punggung yang tampil di kartu.
   Tool baru: salin satu blok { ... } dan beri id baru. Halamannya otomatis ada.
   ===================================================================== */
window.PRODUCTS = [
  {
    id: "face",
    name: "PES Face Converter",
    short: "Face Converter",
    status: "released",
    version: "v1.4.1",
    price: { idr: "Rp 750.000", usd: "US$55" },
    no: "10",
    image: "assets/img/face-3d.jpg",
    imageAlt: "Pratinjau 3D face Kevin Diks hasil konversi di PES Face Converter",
    screenshot: "assets/img/face-project.jpg",
    screenshotAlt: "Halaman Project di PES Face Converter",
    tagline: {
      id: "Ubah face PES 2021, eFootball, dan FC 27 jadi face PES 2017 yang siap dipakai.",
      en: "Turn PES 2021, eFootball and FC 27 faces into PES 2017 faces, ready to play."
    },
    summary: {
      id: "Bukan sekadar salin dan ganti nama. Model face dibangun ulang ke kerangka PES 2017, lalu langsung terpasang ke folder download game.",
      en: "Not a copy-and-rename tool. Each face is rebuilt onto the PES 2017 skeleton, then installed straight into the game's download folder."
    },
    sources: [
      "PES 2021",
      "eFootball",
      { id: "FC 27 (export FIFA Editor Tool)", en: "FC 27 (FIFA Editor Tool export)" },
      { id: "Face PES 2017 buatan tangan (Re-Convert)", en: "Hand-made PES 2017 faces (Re-Convert)" }
    ],
    modes: [
      { name: "Single Face", text: { id: "Convert satu face dengan pratinjau 3D", en: "Convert one face with a 3D preview" } },
      { name: "Batch", text: { id: "Convert banyak face sekaligus", en: "Convert many faces at once" } },
      { name: "Project", text: { id: "Kelola face satu database, lalu build jadi satu CPK", en: "Manage a whole database of faces, then build one CPK" } }
    ],
    features: [
      { id: "Kepala, leher, mata, kelopak mata, dan gerakan mulut disesuaikan ke PES 2017", en: "Head, neck, eyes, eyelids and mouth movement fitted to PES 2017" },
      { id: "Rambut tetap tajam dan rapi saat replay, seperti face Konami", en: "Hair stays sharp and clean in replays, like Konami's own faces" },
      { id: "Warna rambut mengikuti face aslinya", en: "Hair colour follows the source face" },
      { id: "Janggut ikut bergerak bersama mulut", en: "Beards move with the mouth" },
      { id: "Kulit natural, normal map mengikuti face asli PES 2017", en: "Natural skin, with normal maps that follow Konami's PES 2017 faces" },
      { id: "Pasang otomatis ke download dan DpFileList, file lama dibackup", en: "Installs to download and DpFileList automatically, with backups" }
    ],
    requirements: [
      { id: "Windows 10 atau 11, 64-bit", en: "Windows 10 or 11, 64-bit" },
      { id: "PES 2017 sudah terpasang", en: "PES 2017 installed" },
      { id: "Internet saat login", en: "Internet connection when signing in" },
      { id: "Tidak perlu install .NET", en: "No .NET install needed" }
    ],
    versions: [
      { v: "1.4.1", text: { id: "Rambut tajam saat replay, warna rambut dari kamera gameplay, normal map mengikuti Konami", en: "Sharp hair in replays, hair colour from the gameplay camera, normal maps follow Konami" } },
      { v: "1.4.0", text: { id: "Kulit dan bulu mata FC 27 lebih natural, perbaikan mata PES 2021", en: "More natural FC 27 skin and eyelashes, PES 2021 eye fixes" } },
      { v: "1.3.0", text: { id: "Tampilan baru, Re-Convert, Convert Face di Project", en: "New interface, Re-Convert, Convert Face in Project" } },
      { v: "1.2.0", text: { id: "Dukungan FC 27, perbaikan warna rambut", en: "FC 27 support, hair colour fixes" } },
      { v: "1.0", text: { id: "Rilis pertama: PES 2021 dan eFootball ke PES 2017", en: "First release: PES 2021 and eFootball to PES 2017" } }
    ]
  },

  {
    id: "database",
    name: "PES Database Toolkit",
    short: "Database Toolkit",
    status: "soon",
    version: "v1.1.0 Winter",
    no: "6",
    image: "assets/img/database-toolkit.jpg",
    imageAlt: "Halaman Players di PES Database Toolkit",
    tagline: {
      id: "Editor database dan pembuat patch lengkap untuk PES 2017.",
      en: "A complete database editor and patch builder for PES 2017."
    },
    summary: {
      id: "Pemain, tim, pelatih, kompetisi, stadion, sampai teks menu ada dalam satu aplikasi, lalu di-build jadi CPK berformat Konami.",
      en: "Players, teams, coaches, competitions, stadiums and menu text in one app, then built into a Konami-format CPK."
    },
    features: [
      { id: "Editor pemain: profil, ability, skill, posisi, appearance, motion, dan kolom OVR", en: "Player editor: profile, abilities, skills, positions, appearance, motion and an OVR column" },
      { id: "Tim: skuad, nomor punggung, kapten, transfer, taktik, dan formasi di lapangan", en: "Teams: squads, shirt numbers, captains, transfers, tactics and formations on a pitch" },
      { id: "Peserta liga dan turnamen, plus Replace League", en: "League and tournament entrants, plus Replace League" },
      { id: "Stadion dan teks menu 18 bahasa", en: "Stadiums and menu text in 18 languages" },
      { id: "Import skuad dari Transfermarkt, Football Manager, PES Master, dan eFootball", en: "Import squads from Transfermarkt, Football Manager, PES Master and eFootball" },
      { id: "Logo tim dan kompetisi, satu per satu atau satu folder sekaligus", en: "Team and competition logos, one at a time or a whole folder" },
      { id: "Check integritas database dengan tombol Fix", en: "Database integrity Check with a Fix button" },
      { id: "Import dan export tabel apa pun ke CSV atau JSON", en: "Import and export any table to CSV or JSON" },
      { id: "Build patch CPK yang langsung terpasang dan bisa dicopot lagi", en: "Build patch CPKs that install directly and can be removed again" }
    ]
  },

  {
    id: "kit",
    name: "PES Kit Converter",
    short: "Kit Converter",
    status: "soon",
    version: "v0.4.0",
    no: "7",
    image: "assets/img/kit-converter.jpg",
    imageAlt: "Perbandingan 3D kit PES 2021 dan PES 2017 di PES Kit Converter",
    tagline: {
      id: "Ubah kit PES 2021 jadi kit PES 2017, dengan pratinjau 3D berdampingan.",
      en: "Convert PES 2021 kits to PES 2017, with a side-by-side 3D preview."
    },
    summary: {
      id: "Tarik satu folder tim, liga, atau kitpack. Lihat hasilnya dalam 3D, atur collar dan warna, lalu pasang sebagai satu CPK.",
      en: "Drop in a team, league or kitpack folder. Check it in 3D, adjust collars and colours, then install it as one CPK."
    },
    features: [
      { id: "Pratinjau 3D: PES 2021, PES 2017, atau Compare berdampingan", en: "3D preview: PES 2021, PES 2017 or side-by-side Compare" },
      { id: "Atur collar, warna, posisi nama dan nomor, model baju, dan font", en: "Adjust collars, colours, name and number positions, shirt models and fonts" },
      { id: "Simulasi nama dan nomor punggung di posisi yang sama dengan game", en: "Name and number simulation in the same position as in the game" },
      { id: "Project: kitpack yang bisa terus ditambah, lalu Build & Install", en: "Project: kitpacks you can keep adding to, then Build & Install" },
      { id: "Batch: banyak folder sekaligus jadi satu atau banyak CPK", en: "Batch: many folders at once, into one CPK or several" },
      { id: "Kit 3rd, 4th, dan 5th dibuka untuk semua tim lewat UniColor", en: "3rd, 4th and 5th kits opened for every team through UniColor" },
      { id: "Undo dan Redo untuk semua edit kit", en: "Undo and Redo for every kit edit" }
    ]
  },

  {
    id: "hud",
    name: "PES HUD Editor",
    short: "HUD Editor",
    status: "soon",
    version: "v0.1.0",
    no: "8",
    image: "assets/img/hud-editor.jpg",
    imageAlt: "PES HUD Editor dengan pratinjau uji warna pada menu utama",
    imageNote: { id: "Warna terang di pratinjau adalah pola uji, bukan desain akhir.", en: "The bright colours in the preview are a test pattern, not a final design." },
    tagline: {
      id: "Ubah tampilan menu PES 2017 secara visual, lalu ekspor jadi satu CPK.",
      en: "Redesign the PES 2017 menus visually, then export a single CPK."
    },
    summary: {
      id: "Pilih elemen di pratinjau, ubah gambar, warna, atau posisinya, lalu pasang tanpa mengubah file asli game.",
      en: "Pick an element in the preview, change its image, colour or position, then install without touching the game's original files."
    },
    features: [
      { id: "Pratinjau menu 1920 × 1080, klik untuk memilih objek", en: "1920 × 1080 menu preview, click to pick an object" },
      { id: "Ganti gambar tile, ikon, dan pita", en: "Replace tile images, icons and ribbons" },
      { id: "Geser, ubah ukuran, putar, atau sembunyikan elemen", en: "Move, resize, rotate or hide elements" },
      { id: "Ubah teks tab, judul, dan deskripsi", en: "Edit tab, title and description text" },
      { id: "Latar menu dari gambar atau video", en: "Menu backgrounds from an image or video" },
      { id: "Pasang dan lepas CPK dengan satu tombol", en: "Install and uninstall the CPK with one button" }
    ]
  },

  {
    id: "cpk",
    name: "CPK Manager",
    short: "CPK Manager",
    status: "soon",
    version: "v1.6",
    no: "1",
    icon: "assets/img/cpk-manager-icon.png",
    tagline: {
      id: "Bongkar dan bangun file CPK cukup dengan tarik dan lepas.",
      en: "Extract and build CPK files with simple drag and drop."
    },
    summary: {
      id: "Tarik file CPK untuk mengekstrak isinya, atau tarik folder untuk membangunnya jadi CPK.",
      en: "Drop a CPK to extract it, or drop a folder to build it into a CPK."
    },
    features: [
      { id: "Tarik CPK untuk ekstrak, tarik folder untuk build", en: "Drop a CPK to extract, drop a folder to build" },
      { id: "Bisa memproses banyak file sekaligus, dengan progres dan log", en: "Handles several files at once, with progress and a log" },
      { id: "Tema gelap dan terang, plus mode Always on Top", en: "Dark and light themes, plus Always on Top mode" },
      { id: "Hasil ekstrak dan build tidak menimpa file yang sudah ada", en: "Extract and build output never overwrites existing files" }
    ]
  }
];
