/* =====================================================================
   PRODUCTS.JS : daftar karya.

   Saat tool baru rilis, ubah di tool itu:
     status: "released"        (sebelumnya "soon")
     price:  { idr: "Rp ...", usd: "US$..." }
   Label kuning otomatis jadi hijau, tombolnya jadi "Beli", dan tool itu
   pindah ke barisan paling depan di Home.

   hidden: true = sembunyikan sementara dari Home dan daftar tool.
   id  = alamat halaman detail, misalnya tool.html?id=database
   no  = nomor punggung yang tampil di kartu.
   Tool baru: salin satu blok { ... } dan beri id baru. Halamannya otomatis ada.
   ===================================================================== */
window.PRODUCTS = [
  {
    id: "face",
    name: "PES Face Converter",
    short: "Face Converter",
    status: "released",
    version: "v1.5.1",
    price: { idr: "Rp 850.000", usd: "US$55" },
    no: "10",
    icon: "assets/icon/face_conv.svg",
    image: "assets/preview/pes_face_conv/pes_face_00.png",
    imageAlt: "Pratinjau 3D face Alejandro Balde hasil konversi di PES Face Converter",
    previews: [
      { image: "assets/preview/pes_face_conv/pes_face_00.png", caption: { id: "Pratinjau 3D real face di dalam Project Manager", en: "3D real face preview inside the Project Manager" } },
      { image: "assets/preview/pes_face_conv/pes_face_01.png", caption: { id: "Single face: konversi satu face lengkap dengan pratinjau 3D interaktif", en: "Single face: convert one face with an interactive 3D preview" } },
      { image: "assets/preview/pes_face_conv/pes_face_02.png", caption: { id: "Batch convert: proses seluruh folder face sekaligus ke satu patch", en: "Batch convert: process a whole folder of faces at once" } },
      { image: "assets/preview/pes_face_conv/pes_face_03.png", caption: { id: "Project: kelola ratusan real face satu database, filter tim, lalu Build CPK", en: "Project: manage real faces across a database, filter by team and Build CPK" } }
    ],
    tagline: {
      id: "Ubah face PES 2021, eFootball, dan FC 27 jadi face PES 2017 yang siap dipakai.",
      en: "Turn PES 2021, eFootball and FC 27 faces into PES 2017 faces, ready to play."
    },
    summary: {
      id: "Bukan sekadar salin dan ganti nama. Model face dibangun ulang ke kerangka PES 2017, lengkap dengan pratinjau 3D, Re-Convert, dan manajemen Project CPK.",
      en: "Not a copy-and-rename tool. Each face is rebuilt onto the PES 2017 skeleton, complete with a 3D preview, Re-Convert and Project CPK management."
    },
    sources: [
      "PES 2021",
      "eFootball",
      { id: "FC 27 (export FIFA Editor Tool)", en: "FC 27 (FIFA Editor Tool export)" },
      { id: "Face PES 2017 buatan tangan (Re-Convert)", en: "Hand-made PES 2017 faces (Re-Convert)" }
    ],
    modes: [
      { name: "Single Face", text: { id: "Convert satu face dengan pratinjau 3D interaktif", en: "Convert one face with an interactive 3D preview" } },
      { name: "Batch", text: { id: "Convert banyak folder face sekaligus", en: "Convert many face folders at once" } },
      { name: "Project", text: { id: "Kelola real face satu database per tim, salin ID/Nama cepat, lalu build jadi satu CPK", en: "Manage a whole database of real faces by team, quick copy ID/Name, then build one CPK" } }
    ],
    features: [
      { id: "Kepala, leher, mata, kelopak mata, dan gerakan mulut disesuaikan ke kerangka PES 2017", en: "Head, neck, eyes, eyelids and mouth movement fitted to the PES 2017 skeleton" },
      { id: "Rambut tetap tajam dan rapi saat replay, seperti face Konami", en: "Hair stays sharp and clean in replays, like Konami's own faces" },
      { id: "Warna rambut mengikuti face aslinya", en: "Hair colour follows the source face" },
      { id: "Janggut ikut bergerak bersama mulut", en: "Beards move with the mouth" },
      { id: "Kulit natural, normal map mengikuti face asli PES 2017", en: "Natural skin, with normal maps that follow Konami's PES 2017 faces" },
      { id: "Project Manager terintegrasi database: filter per tim, status Real face / No face, dan tombol salin ID & Nama", en: "Database-integrated Project Manager: filter by team, Real face / No face status and quick ID & Name copy" },
      { id: "Pasang otomatis ke download dan DpFileList, file lama dibackup", en: "Installs to download and DpFileList automatically, with backups" }
    ],
    requirements: [
      { id: "Windows 10 atau 11, 64-bit", en: "Windows 10 or 11, 64-bit" },
      { id: "PES 2017 sudah terpasang", en: "PES 2017 installed" },
      { id: "Internet saat login", en: "Internet connection when signing in" },
      { id: "Tidak perlu install .NET", en: "No .NET install needed" }
    ],
    versions: [
      { v: "1.5.1", text: { id: "Antarmuka Project & pratinjau 3D baru, filter tim terintegrasi database, tombol salin ID & Nama, serta peningkatan stabilitas konversi", en: "New Project interface & 3D preview modal, database team filter, quick ID & Name copy buttons and conversion stability improvements" } },
      { v: "1.4.1", text: { id: "Rambut tajam saat replay, warna rambut dari kamera gameplay, normal map mengikuti Konami", en: "Sharp hair in replays, hair colour from the gameplay camera, normal maps follow Konami" } },
      { v: "1.4.0", text: { id: "Kulit dan bulu mata FC 27 lebih natural, perbaikan mata PES 2021", en: "More natural FC 27 skin and eyelashes, PES 2021 eye fixes" } },
      { v: "1.3.0", text: { id: "Tampilan baru, Re-Convert, Convert Face di Project", en: "New interface, Re-Convert, Convert Face in Project" } },
      { v: "1.2.0", text: { id: "Dukungan FC 27, perbaikan warna rambut", en: "FC 27 support, hair colour fixes" } },
      { v: "1.0", text: { id: "Rilis pertama: PES 2021 dan eFootball ke PES 2017", en: "First release: PES 2021 and eFootball to PES 2017" } }
    ]
  },

  {
    id: "database",
    name: "PES Database Editor",
    short: "Database Editor",
    status: "soon",
    version: "v1.1.0 Winter",
    no: "6",
    icon: "assets/icon/pes_database.svg",
    image: "assets/preview/pes_database/pes_database_01.png",
    imageAlt: "Halaman Players di PES Database Editor",
    previews: [
      { image: "assets/preview/pes_database/pes_database_00.png", caption: { id: "Home: ringkasan kapasitas database (40.000 pemain / 2.500 tim), kesehatan database, dan status CPK", en: "Home: database capacity overview (40,000 players / 2,500 teams), database health and CPK status" } },
      { image: "assets/preview/pes_database/pes_database_01.png", caption: { id: "Players: editor profil, ability, skill, posisi, appearance, motion, Katakana otomatis, dan OVR", en: "Players: profile, abilities, skills, positions, appearance, motion, auto Katakana and OVR editor" } },
      { image: "assets/preview/pes_database/pes_database_02.png", caption: { id: "Teams: skuad, nomor punggung, kapten, miniface per tim, taktik, warna tim, dan logo/bendera", en: "Teams: squads, shirt numbers, captains, team minifaces, tactics, team colours and logos/flags" } },
      { image: "assets/preview/pes_database/pes_database_03.png", caption: { id: "Coaches: kelola pelatih, filter per kompetisi, foto pelatih 256 px (AI cut-out), dan nama Jepang", en: "Coaches: manage coaches, filter by competition, 256 px coach photos (AI cut-out) and Japanese names" } },
      { image: "assets/preview/pes_database/pes_database_04.png", caption: { id: "Competitions: daftar peserta, urutan slot, pot undian, dan tahap regulasi untuk 92 kompetisi", en: "Competitions: participant lists, slot order, draw pots and regulation stages across 92 competitions" } },
      { image: "assets/preview/pes_database/pes_database_05.png", caption: { id: "Stadiums: nama, kode, kapasitas, kandang klub, dan urutan stadion per konfederasi", en: "Stadiums: name, code, capacity, home teams and stadium order per confederation" } },
      { image: "assets/preview/pes_database/pes_database_06.png", caption: { id: "Import Center: 8 alur impor terpusat dari Transfermarkt, eFootball, FC 27, FM, dan PES Master", en: "Import Center: 8 unified import flows from Transfermarkt, eFootball, FC 27, FM and PES Master" } },
      { image: "assets/preview/pes_database/pes_database_07.png", caption: { id: "Bulk edit: ekspor dan impor tabel database apa pun dalam format CSV (Excel) atau JSON", en: "Bulk edit: export and import any database table in CSV (Excel) or JSON format" } },
      { image: "assets/preview/pes_database/pes_database_08.png", caption: { id: "Minifaces: konversi langsung eFootball & FC 27, Fill missing, ganti per tim/pemain, dan AI cut-out", en: "Minifaces: direct eFootball & FC 27 conversion, Fill missing, per-team/player replace and AI cut-out" } },
      { image: "assets/preview/pes_database/pes_database_09.png", caption: { id: "Logos: kelola seluruh logo tim dan kompetisi serta impor Logo Pack sekaligus", en: "Logos: manage every team and competition logo or import a whole Logo Pack at once" } },
      { image: "assets/preview/pes_database/pes_database_10.png", caption: { id: "Sleeve badges: atur badge lengan untuk seluruh 90 slot liga, piala, dan turnamen", en: "Sleeve badges: configure sleeve badges across all 90 league, cup and tournament slots" } },
      { image: "assets/preview/pes_database/pes_database_11.png", caption: { id: "Language: edit nama kompetisi dan seluruh teks menu game di 18 bahasa", en: "Language: edit competition names and all in-game menu texts across 18 languages" } },
      { image: "assets/preview/pes_database/pes_database_12.png", caption: { id: "Check: pemeriksaan integritas database (0 error, 0 warning) dengan tombol Auto-fix", en: "Check: database integrity verification (0 errors, 0 warnings) with an Auto-fix button" } },
      { image: "assets/preview/pes_database/pes_database_13.png", caption: { id: "Version: atur versi Data Pack (version_dp.bin) dan file Live Update", en: "Version: configure Data Pack version (version_dp.bin) and Live Update files" } },
      { image: "assets/preview/pes_database/pes_database_14.png", caption: { id: "Build & install: kemas CPK Database, Miniface, Logo, dan Bahasa lalu pasang otomatis ke game", en: "Build & install: pack Database, Miniface, Logo and Language CPKs and install straight to the game" } },
      { image: "assets/preview/pes_database/pes_database_15.png", caption: { id: "About: informasi rilis PES Database Editor v1.1.0 Winter", en: "About: PES Database Editor v1.1.0 Winter release information" } }
    ],
    tagline: {
      id: "Editor database dan pembuat patch lengkap untuk PES 2017.",
      en: "A complete database editor and patch builder for PES 2017."
    },
    summary: {
      id: "Pemain, tim, pelatih, kompetisi, stadion, miniface, logo, badge lengan, sampai teks menu 18 bahasa ada dalam satu aplikasi dengan tampilan modern (Home & Import Center), lalu di-build jadi CPK berformat Konami.",
      en: "Players, teams, coaches, competitions, stadiums, minifaces, logos, sleeve badges and menu text in 18 languages in one modern app (Home & Import Center), then built into Konami-format CPKs."
    },
    features: [
      { id: "Rombak UI modern: halaman Home, Import Center terpusat (8 alur impor, 15 sumber tanpa pop-up sempit), dan halaman rilis Build & install", en: "Modern UI overhaul: Home dashboard, unified Import Center (8 flows, 15 sources), and a single Build & install release page" },
      { id: "Editor pemain: profil, ability, skill, posisi, appearance, keterangan arti angka Motion, tombol Katakana otomatis, dan kolom OVR", en: "Player editor: profile, abilities, skills, positions, appearance, Motion value meanings, auto Katakana button and an OVR column" },
      { id: "Tim: skuad (timnas 23-26 pemain), nomor punggung, kapten, transfer, taktik, formasi, editor warna tim (TeamColor), serta 2 slot khusus timnas (logo federasi & bendera)", en: "Teams: squads (23-26 for national teams), shirt numbers, captains, transfers, tactics, formations, TeamColor editor and dual national slots (federation logo & flag)" },
      { id: "Pelatih lengkap: impor gabungan Transfermarkt + eFootball + FC 27, foto pelatih 256 px dengan AI cut-out (latar abu-abu/transparan), deteksi foto salah, dan nama Jepang otomatis", en: "Coaches: combined Transfermarkt + eFootball + FC 27 import, 256 px coach photos with AI cut-out (grey/transparent background), wrong-photo detection and auto Japanese names" },
      { id: "Miniface multi-sumber: konversi langsung eFootball & FC 27 dengan framing kepala Konami, Fill missing otomatis, ganti per tim/pemain (SoFIFA, FM, Transfermarkt), dan AI cut-out MODNet", en: "Multi-source minifaces: direct eFootball & FC 27 conversion with Konami head framing, auto Fill missing, per-team/player replace (SoFIFA, FM, Transfermarkt) and MODNet AI cut-out" },
      { id: "Halaman Badges & Logos: atur badge lengan semua kompetisi (liga & piala, DXT5 + mipmap) dan kelola logo tim/kompetisi serta Logo Pack dalam satu tempat", en: "Badges & Logos pages: manage sleeve badges for every competition (leagues & cups, DXT5 + mipmaps) and team/competition logos plus Logo Packs in one place" },
      { id: "Import Center: sinkron skuad, atribut, pelatih, dan peserta kompetisi dari eFootball, EA SPORTS FC 27, Transfermarkt, Football Manager (sortitoutsi & FM Blog), dan PES Master", en: "Import Center: sync squads, abilities, coaches and competition clubs from eFootball, EA SPORTS FC 27, Transfermarkt, Football Manager (sortitoutsi & FM Blog) and PES Master" },
      { id: "Ekstensi Chrome PES DB Collector 3.0: Open all squads, antrean Download all minifaces (Ctrl+Shift+K) berformat zip per klub/pelatih, dan Clear sekali tekan", en: "PES DB Collector 3.0 Chrome extension: Open all squads, Download all minifaces queue (Ctrl+Shift+K) as per-club/coach zips, and one-click Clear" },
      { id: "Tombol salin cepat & klik kanan Copy di setiap tabel/daftar untuk menyalin Nama, ID, atau seluruh baris", en: "Quick copy buttons & right-click Copy menu on every table/list to copy Name, ID or the whole row" },
      { id: "Siap untuk database besar: sampai 40.000 pemain, 2.500 tim, dan 3.000 pelatih, lengkap dengan Check integritas, deteksi pemain dummy, dan Auto-fix", en: "Ready for big databases: up to 40,000 players, 2,500 teams and 3,000 coaches, with integrity Check, dummy player detection and Auto-fix" },
      { id: "Generator pool pemain untuk riset server lokal myClub, serta import/export tabel apa pun ke CSV atau JSON", en: "Player pool generator for local myClub server research, plus import and export any table to CSV or JSON" }
    ]
  },

  {
    id: "audio",
    name: "PES Audio Editor",
    short: "Audio Editor",
    status: "soon",
    version: "v0.1.0",
    no: "9",
    icon: "assets/icon/audio_icon.svg",
    image: "assets/preview/pes_audio/pes_audio_00.png",
    imageAlt: "Pustaka Commentary di PES Audio Editor",
    previews: [
      { image: "assets/preview/pes_audio/pes_audio_00.png", caption: { id: "Commentary Library: jelajahi 42.000 cue suara komentator, putar gelombang audio, ganti, atau ekspor WAV", en: "Commentary Library: browse 42,000 commentary cues, preview waveforms, replace audio or export WAV" } },
      { image: "assets/preview/pes_audio/pes_audio_01.png", caption: { id: "eFootball Importer: konversi ribuan callname & kalimat komentator pemain langsung dari eFootball", en: "eFootball Importer: convert thousands of player callnames & commentary lines straight from eFootball" } },
      { image: "assets/preview/pes_audio/pes_audio_02.png", caption: { id: "Chants: konversi paket Chantbase PES 2021 ke format 4-channel PES 2017 tanpa mengubah exe", en: "Chants: convert PES 2021 Chantbase packs into PES 2017's 4-channel layout without touching the exe" } },
      { image: "assets/preview/pes_audio/pes_audio_03.png", caption: { id: "Club Walk-out Music: atur lagu walk-out khusus untuk setiap klub kandang dengan normalisasi volume otomatis", en: "Club Walk-out Music: assign custom walk-out anthems for every home club with automatic loudness matching" } },
      { image: "assets/preview/pes_audio/pes_audio_04.png", caption: { id: "Command Palette (Ctrl+K): cari cepat perintah maupun cue audio dari mana saja", en: "Command Palette (Ctrl+K): quickly search any command or audio cue from anywhere" } },
      { image: "assets/preview/pes_audio/pes_audio_05.png", caption: { id: "Settings: pilihan tema gelap/terang dan kepadatan tampilan otomatis untuk berbagai ukuran layar", en: "Settings: dark/light themes and automatic layout density for any screen size" } }
    ],
    tagline: {
      id: "Kelola commentary, callname eFootball, chant suporter, dan musik walk-out klub dalam satu aplikasi.",
      en: "Manage commentary, eFootball callnames, fan chants and club walk-out music in one app."
    },
    summary: {
      id: "Pengganti alur lama yang butuh banyak alat dan Atom Craft. Cari, dengar, ganti, atau konversi suara komentator, chant, dan anthem walk-out klub, lalu build jadi CPK dan pasang ke game.",
      en: "Replaces an old workflow of multiple tools and Atom Craft. Find, play, replace or convert commentary, chants and club walk-out anthems, then build a CPK and install it."
    },
    features: [
      { id: "Pustaka commentary (42.000 cue): cari lewat nama, ID, atau nama pemain, pratinjau gelombang suara, ganti audio, dan ekspor WAV", en: "Commentary library (42,000 cues): search by name, ID or player name, waveform preview, replace audio and export WAV" },
      { id: "Pembuat Callname dengan penjelasan dan contoh kalimat tiap slot, plus pembaruan daftar nama di menu Edit urut A-Z", en: "Callname Builder that explains each slot with example lines, plus A-Z Edit menu callname list updates" },
      { id: "Konversi callname dan kalimat komentator pemain maupun tim langsung dari eFootball ke PES 2017", en: "Convert player and team callnames and commentary lines straight from eFootball to PES 2017" },
      { id: "Konversi Chantbase PES 2021 ke format 4-channel PES 2017 serta dukungan Short Chants", en: "Convert PES 2021 Chantbase packs to PES 2017's 4-channel layout, plus Short Chants support" },
      { id: "Musik klub: lagu walk-out per klub kandang, musik full-time, dan lagu juara dengan penyesuaian kenyaringan otomatis", en: "Club music: custom walk-out songs per home club, full-time music and champions music with automatic loudness matching" },
      { id: "Encode sekali saja (audio asli tidak dikompres dua kali), pencarian cepat Ctrl+K, serta Build & install CPK otomatis", en: "Single-pass encoding (original audio is never compressed twice), Ctrl+K command palette, and automatic CPK Build & install" }
    ]
  },

  {
    id: "cpk",
    name: "CPK Manager",
    short: "CPK Manager",
    status: "soon",
    version: "v1.6",
    no: "1",
    icon: "assets/icon/cpk_icon.svg",
    image: "assets/preview/cpk_manager/cpk_manager_00.png",
    imageAlt: "CPK Explorer dengan pratinjau gambar dan deteksi proteksi di CPK Manager",
    previews: [
      { image: "assets/preview/cpk_manager/cpk_manager_00.png", caption: { id: "Explorer: jelajahi pohon folder di dalam CPK, pratinjau gambar langsung, properti TOC, dan deteksi proteksi", en: "Explorer: browse the folder tree inside a CPK, live image preview, TOC properties and protection detection" } },
      { image: "assets/preview/cpk_manager/cpk_manager_01.png", caption: { id: "Build: bangun atau edit CPK dengan pilihan preset game, kompresi CRILAYLA, dan pengaturan per file", en: "Build: generate or edit CPKs with game presets, CRILAYLA compression and per-file settings" } },
      { image: "assets/preview/cpk_manager/cpk_manager_02.png", caption: { id: "Game Presets: skema CPK resmi yang dikalibrasi dari 68 CPK bawaan PES 2017 serta fitur klon preset dari CPK game lain", en: "Game Presets: official CPK schema calibrated from 68 stock PES 2017 CPKs, plus preset cloning from other titles" } },
      { image: "assets/preview/cpk_manager/cpk_manager_03.png", caption: { id: "Activity Log & Compare: catatan lengkap operasi build, deteksi proteksi CRI XOR, dan perbandingan isi antar-CPK", en: "Activity Log & Compare: full log of builds, CRI XOR protection detection and side-by-side CPK comparison" } }
    ],
    tagline: {
      id: "Jelajahi, bandingkan, bongkar, dan bangun file CPK dengan skema resmi Konami.",
      en: "Explore, compare, extract and build CPK files with Konami's official schema."
    },
    summary: {
      id: "Bukan sekadar pembongkar CPK biasa. Dilengkapi CPK Explorer dengan pratinjau gambar langsung, pembuat CPK terkalibrasi dari 68 CPK resmi PES 2017, pembanding dua CPK, dan deteksi proteksi.",
      en: "More than a basic unpacker. Features a CPK Explorer with live image preview, a builder calibrated from 68 official PES 2017 CPKs, CPK comparison and protection detection."
    },
    features: [
      { id: "CPK Explorer: buka pohon folder CPK tanpa harus ekstrak semuanya, lengkap dengan filter pencarian, pratinjau gambar, dan info TOC", en: "CPK Explorer: browse the CPK folder tree without extracting everything, complete with search filters, image preview and TOC info" },
      { id: "Build & Edit CPK: tambah folder/file, ganti atau ubah nama path di dalam CPK, atur kompresi CRILAYLA, dan simpan sebagai project", en: "Build & Edit CPK: add folders/files, replace or rename internal paths, configure CRILAYLA compression and save projects" },
      { id: "Game Presets terkalibrasi: skema Universal PES & PES 2017 yang identik byte-demi-byte dengan header CPK resmi Konami, plus Clone preset", en: "Calibrated Game Presets: Universal PES & PES 2017 schemas byte-identical to official Konami headers, plus Preset Cloning" },
      { id: "Compare CPKs: bandingkan isi dua file CPK untuk melihat file yang ditambah, dihapus, diubah, atau sama", en: "Compare CPKs: diff two CPK archives to see added, removed, changed and identical files" },
      { id: "Deteksi proteksi otomatis (CRI XOR table masking), log aktivitas lengkap, tema gelap/terang, dan mode Always on Top", en: "Automatic protection detection (CRI XOR table masking), full activity log, dark/light themes and Always on Top mode" }
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
    id: "kit",
    hidden: true,
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
  }
];
