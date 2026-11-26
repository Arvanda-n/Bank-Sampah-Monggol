export type PageRoute =
  | 'beranda'
  | 'mengenal-biopori'
  | 'sampah-organik'
  | 'alat-bahan'
  | 'pembuatan'
  | 'perawatan'
  | 'faq'
  | 'tentang';

export type BioporiSuitability = 'dianjurkan' | 'bersyarat' | 'tidak_dianjurkan';

export interface BioporiWasteItem {
  id: string;
  name: string;
  aliases: string[];
  wasteType: 'Organik Hijau (Basah)' | 'Organik Cokelat (Kering)' | 'Non-Biopori / Terbatas';
  suitability: BioporiSuitability;
  suitabilityLabel: string;
  prepInstruction: string;
  reason: string;
}

export interface ToolMaterialItem {
  id: string;
  category: 'Komponen Utama' | 'Peralatan Pembuatan' | 'Bahan Pengisi' | 'Pendukung';
  name: string;
  specification: string;
  functionDesc: string;
}

export interface CreationStep {
  number: string;
  title: string;
  summary: string;
  details: string[];
  safetyNote?: string;
}

export interface FaqItem {
  id: string;
  topic: 'Konsep Biopori' | 'Galon Bekas' | 'Sampah Organik' | 'Perawatan & Panen';
  question: string;
  answer: string;
}

export const WEBSITE_PLANNED_URL = 'https://monggol-resik.vercel.app';

export const IMAGES = {
  hero: '/src/assets/images/hero_biopori_monggol_1795707134187.jpg',
  galonModifikasi: '/src/assets/images/biopori_galon_modifikasi_1795707133886.jpg',
  organicMaterials: '/src/assets/images/biopori_organic_materials_1795707134004.jpg',
  installationYard: '/src/assets/images/biopori_installation_yard_1795707135124.jpg',
} as const;

export const bioporiBenefits = [
  {
    number: '01',
    title: 'Mengolah Sampah Organik di Pekarangan',
    description:
      'Sisa sayuran, kulit buah, dan daun kering diolah langsung di rumah menjadi kompos tanpa menumpuk di tempat sampah atau dibakar.',
  },
  {
    number: '02',
    title: 'Meningkatkan Daya Resap Air Hujan',
    description:
      'Lubang biopori dan rongga alami buatan cacing tanah mempercepat peresapan air hujan ke dalam tanah sehingga mengurangi genangan di halaman.',
  },
  {
    number: '03',
    title: 'Menyuburkan Tanah Sekitar Tanaman',
    description:
      'Aktivitas organisme tanah menguraikan sampah organik menjadi humus kaya hara yang dapat langsung dimanfaatkan untuk tanaman pekarangan.',
  },
  {
    number: '04',
    title: 'Memanfaatkan Galon Bekas Lebih Ramah Biaya',
    description:
      'Menggunakan galon bekas air mineral sebagai selongsong atau tabung biopori menjadi solusi praktis dan terjangkau bagi setiap rumah tangga.',
  },
];

export const bioporiWorkingPrinciples = [
  {
    step: '01',
    title: 'Lubang Resapan Menampung Bahan Organik',
    description:
      'Tabung galon berlubang ditanam vertikal di tanah sebagai ruang penampung sampah organik rumah tangga sekaligus penahan dinding tanah agar tidak longsor.',
  },
  {
    step: '02',
    title: 'Lubang Sisi dan Bawah Mengundang Fauna Tanah',
    description:
      'Cacing tanah, serangga pengurai, dan mikroorganisme masuk melalui lubang-lubang pada dinding dan dasar galon karena tertarik pada kelembapan dan bahan organik.',
  },
  {
    step: '03',
    title: 'Terbentuk Pori Alami dan Penguraian Sampah',
    description:
      'Fauna tanah memakan serta menguraikan sampah organik sembari membentuk terowongan kecil (pori-pori alami) di sekitar tabung biopori yang memperlancar aliran air dan udara.',
  },
  {
    step: '04',
    title: 'Sampah Berubah Menjadi Kompos Alami',
    description:
      'Dalam beberapa minggu, volume sampah menyusut dan berubah menjadi remah tanah gelap berbau segar seperti tanah hutan yang siap dipanen sebagai kompos.',
  },
];

export const organicWasteCategories = [
  {
    id: 'hijau',
    title: 'Sampah Organik Basah (Hijau)',
    subtitle: 'Kaya nitrogen, tinggi kadar air, sumber nutrisi pengurai',
    examples: [
      'Potongan sayur dan sisa sayuran segar dapur',
      'Kulit buah-buahan (pisang, pepaya, jeruk, mangga)',
      'Ampas kopi, daun teh tanpa kantong sintetis, dan cangkang telur remuk',
      'Sisa rumput hijau hasil penyiangan kebun',
    ],
    note: 'Potong kecil dan tiriskan air berlebih sebelum dimasukkan agar proses penguraian cepat dan tidak memicu bau menyengat.',
  },
  {
    id: 'cokelat',
    title: 'Sampah Organik Kering (Cokelat)',
    subtitle: 'Kaya karbon, menjaga rongga udara dan menyeimbangkan kelembapan',
    examples: [
      'Daun-daun kering yang gugur di pekarangan',
      'Serutan kayu alami atau sekam padi bersih',
      'Ranting-ranting sangat kecil yang sudah rapuh',
      'Potongan kertas tisu polos/kardus cokelat tanpa tinta mengilap dalam jumlah sedikit',
    ],
    note: 'Tambahkan selapis daun kering setiap kali memasukkan sisa dapur basah agar biopori tidak becek dan tetap berbau tanah.',
  },
];

export const notRecommendedList = [
  {
    item: 'Plastik, karet, kaca, dan kaleng',
    reason: 'Tidak dapat terurai oleh mikroorganisme tanah dan menyumbat pori-pori resapan.',
  },
  {
    item: 'Sisa daging berlemak, tulang keras, dan minyak goreng berlebih',
    reason: 'Sulit terurai dalam skala biopori rumah tangga, memicu bau busuk, serta mengundang tikus atau belatung berlebih.',
  },
  {
    item: 'Kotoran hewan peliharaan (kucing/anjing) dan popok sekali pakai',
    reason: 'Berisiko membawa patogen penyakit atau mengandung bahan sintetis non-organik.',
  },
  {
    item: 'Daun/tanaman yang terserang hama berat atau kayu berbahan kimia/cat',
    reason: 'Dapat mencemari kualitas kompos yang nantinya dipakai untuk tanaman pekarangan.',
  },
];

export const organicWasteItems: BioporiWasteItem[] = [
  {
    id: 'potongan-sayur',
    name: 'Sisa Potongan Sayuran Dapur',
    aliases: ['kangkung', 'bayam', 'wortel', 'kol', 'sayur', 'batang'],
    wasteType: 'Organik Hijau (Basah)',
    suitability: 'dianjurkan',
    suitabilityLabel: 'Dianjurkan Masuk Biopori',
    prepInstruction: 'Cacah atau potong berukuran 2–4 cm, pastikan bebas karet gelang dan plastik.',
    reason: 'Mudah lunak dan cepat diurai oleh cacing serta mikroba tanah menjadi kompos.',
  },
  {
    id: 'kulit-buah',
    name: 'Kulit Buah (Pisang, Pepaya, Jeruk, Semangka)',
    aliases: ['pisang', 'pepaya', 'kulit buah', 'apel', 'mangga'],
    wasteType: 'Organik Hijau (Basah)',
    suitability: 'dianjurkan',
    suitabilityLabel: 'Dianjurkan Masuk Biopori',
    prepInstruction: 'Potong kecil-kecil agar lebih cepat membusuk dan mudah dipadatkan.',
    reason: 'Kaya unsur kalium dan mineral alami yang sangat baik bagi kualitas kompos.',
  },
  {
    id: 'daun-kering',
    name: 'Daun Kering Pekarangan',
    aliases: ['daun', 'dedaunan', 'daun mangga', 'daun pisang kering', 'serasah'],
    wasteType: 'Organik Cokelat (Kering)',
    suitability: 'dianjurkan',
    suitabilityLabel: 'Dianjurkan Masuk Biopori',
    prepInstruction: 'Remas atau gunting daun berukuran besar agar tidak menumpuk padat menutup udara.',
    reason: 'Menyeimbangkan kadar air dari sampah dapur basah sekaligus mencegah bau tidak sedap.',
  },
  {
    id: 'ampas-kopi-teh',
    name: 'Ampas Kopi & Daun Teh Tubruk',
    aliases: ['kopi', 'teh', 'ampas'],
    wasteType: 'Organik Hijau (Basah)',
    suitability: 'dianjurkan',
    suitabilityLabel: 'Dianjurkan Masuk Biopori',
    prepInstruction: 'Tiriskan airnya dan pastikan tidak ada kantong teh celup berbahan nilon/plastik.',
    reason: 'Disukai cacing tanah dan membantu menggemburkan kompos di dalam tabung.',
  },
  {
    id: 'cangkang-telur',
    name: 'Cangkang Telur Ayam/Bebek',
    aliases: ['kulit telur', 'cangkang telur', 'telur'],
    wasteType: 'Organik Cokelat (Kering)',
    suitability: 'dianjurkan',
    suitabilityLabel: 'Dianjurkan Masuk Biopori',
    prepInstruction: 'Bilas sisa putih telur bila perlu, lalu remukkan kecil-kecil sebelum dimasukkan.',
    reason: 'Menyumbang kalsium alami pada kompos tanpa menimbulkan bau bila diremukkan.',
  },
  {
    id: 'rumput-kebun',
    name: 'Potongan Rumput Segar & Gulma Kecil',
    aliases: ['rumput', 'alang-alang', 'gulma', 'tanaman'],
    wasteType: 'Organik Hijau (Basah)',
    suitability: 'dianjurkan',
    suitabilityLabel: 'Dianjurkan Masuk Biopori',
    prepInstruction: 'Diamkan setengah hari agar sedikit layu, jangan masukkan biji gulma yang siap tumbuh.',
    reason: 'Terurai cepat bila dicampur bersama daun kering.',
  },
  {
    id: 'nasi-sisa',
    name: 'Sisa Nasi / Makanan Nabati Tanpa Kuah Santan',
    aliases: ['nasi', 'nasi basi', 'roti', 'umbi'],
    wasteType: 'Organik Hijau (Basah)',
    suitability: 'bersyarat',
    suitabilityLabel: 'Boleh dalam Jumlah Sedikit',
    prepInstruction: 'Tiriskan kuah/minyak, masukkan secukupnya lalu langsung tutup dengan daun kering atau sedikit tanah.',
    reason: 'Terlalu banyak nasi berkuah dapat memicu bau asam dan mengundang semut/tikus.',
  },
  {
    id: 'kulit-kelapa-ranting',
    name: 'Ranting Keras & Sabut/Tempurung Kelapa',
    aliases: ['batok', 'sabut', 'ranting tebal', 'kayu'],
    wasteType: 'Organik Cokelat (Kering)',
    suitability: 'bersyarat',
    suitabilityLabel: 'Kurang Efektif untuk Galon',
    prepInstruction: 'Hanya gunakan ranting sangat kecil dan rapuh; kayu keras lebih baik dikomposkan terpisah.',
    reason: 'Bahan berkayu keras membutuhkan waktu berbulan-bulan untuk hancur dalam ruang galon.',
  },
  {
    id: 'daging-tulang',
    name: 'Sisa Daging, Ikan Berlemak & Tulang Besar',
    aliases: ['daging', 'tulang', 'ikan', 'lemak', 'jeroan'],
    wasteType: 'Non-Biopori / Terbatas',
    suitability: 'tidak_dianjurkan',
    suitabilityLabel: 'Tidak Dianjurkan',
    prepInstruction: 'Jangan dimasukkan ke biopori galon; kelola terpisah atau kubur dalam di lokasi jauh dari rumah.',
    reason: 'Menimbulkan bau menyengat, memperlambat penguraian alami, dan menarik hewan pengganggu.',
  },
  {
    id: 'minyak-jelantah',
    name: 'Minyak Goreng Bekas & Kuah Berminyak',
    aliases: ['minyak', 'jelantah', 'kuah gulai', 'santan kental'],
    wasteType: 'Non-Biopori / Terbatas',
    suitability: 'tidak_dianjurkan',
    suitabilityLabel: 'Tidak Dianjurkan',
    prepInstruction: 'Jangan dituang ke lubang biopori karena minyak melapisi pori tanah dan membunuh mikroba.',
    reason: 'Menyumbat resapan air dan membuat sampah di dalam tabung membusuk secara anaerob (bau busuk).',
  },
  {
    id: 'plastik-sachet',
    name: 'Plastik Pembungkus, Sachet & Karet Gelang',
    aliases: ['plastik', 'kresek', 'karet', 'sachet', 'bungkus'],
    wasteType: 'Non-Biopori / Terbatas',
    suitability: 'tidak_dianjurkan',
    suitabilityLabel: 'Dilarang Masuk Biopori',
    prepInstruction: 'Pisahkan selalu dari sisa sayur dapur sebelum dimasukkan ke dalam galon.',
    reason: 'Tidak terurai oleh tanah dan akan mencemari kompos yang dipanen.',
  },
  {
    id: 'baterai-kimia',
    name: 'Baterai Bekas, Abu Rokok & Cairan Pembersih',
    aliases: ['baterai', 'kimia', 'sabun', 'rokok', 'obat'],
    wasteType: 'Non-Biopori / Terbatas',
    suitability: 'tidak_dianjurkan',
    suitabilityLabel: 'Dilarang Masuk Biopori',
    prepInstruction: 'Simpan terpisah sebagai limbah berbahaya (B3) atau residu rumah tangga.',
    reason: 'Mengandung zat kimia beracun yang mematikan cacing tanah serta mencemari air tanah.',
  },
];

export const toolsAndMaterials: ToolMaterialItem[] = [
  {
    id: 'galon-bekas',
    category: 'Komponen Utama',
    name: 'Galon Bekas Air Mineral (Ukuran 19 Liter)',
    specification: '1 buah per titik biopori (kondisi bersih dan utuh dindingnya)',
    functionDesc:
      'Berfungsi sebagai tabung atau selongsong biopori pengganti pipa PVC untuk menahan dinding tanah agar tidak runtuh sekaligus menjadi wadah penguraian sampah organik.',
  },
  {
    id: 'penutup-galon',
    category: 'Komponen Utama',
    name: 'Penutup Atas / Potongan Tutup Galon Berlubang',
    specification: 'Bagian atas galon atau penutup berpori yang bisa dibuka-tutup',
    functionDesc:
      'Mencegah nyamuk bersarang, menjaga keselamatan agar kaki tidak terperosok, serta menahan air hujan berlebih dan hewan pengganggu masuk langsung ke lubang.',
  },
  {
    id: 'pelubang-galon',
    category: 'Peralatan Pembuatan',
    name: 'Solder Listrik / Besi Panas / Bor Tangan',
    specification: 'Mata bor atau ujung besi berdiameter sekitar 1–1,5 cm',
    functionDesc:
      'Digunakan untuk membuat deretan lubang pada dinding samping dan bagian bawah galon sebagai jalan keluar-masuk air serta cacing tanah.',
  },
  {
    id: 'pemotong-galon',
    category: 'Peralatan Pembuatan',
    name: 'Cutter / Pisau Kuat / Gergaji Besi Kecil',
    specification: 'Alat potong plastik yang tajam dan aman digenggam',
    functionDesc:
      'Digunakan untuk memotong bagian leher atas galon (atau membuka tutup atasnya) agar mulut tabung cukup lebar saat memasukkan sampah organik dan memanen kompos.',
  },
  {
    id: 'penggali-tanah',
    category: 'Peralatan Pembuatan',
    name: 'Linggis, Cangkul Kecil, atau Bor Tanah',
    specification: 'Disesuaikan dengan kondisi tanah pekarangan di Kalurahan Monggol',
    functionDesc:
      'Berfungsi untuk menggali lubang tanah dengan diameter sedikit lebih lebar dari galon dan kedalaman sesuai tinggi tabung galon.',
  },
  {
    id: 'sampah-pengisi',
    category: 'Bahan Pengisi',
    name: 'Sampah Organik Rumah Tangga (Basah & Kering)',
    specification: 'Campuran sisa sayuran/kulit buah yang dicacah dengan daun kering',
    functionDesc:
      'Menjadi bahan utama yang diuraikan oleh mikroorganisme dan cacing tanah menjadi kompos sekaligus menarik aktivitas pengurai ke dalam biopori.',
  },
  {
    id: 'sarung-tangan',
    category: 'Pendukung',
    name: 'Sarung Tangan Kerja & Sekop Kecil',
    specification: 'Sarung tangan kain/karet tebal dan cetok taman',
    functionDesc:
      'Melindungi tangan saat melubangi galon, menggali tanah, meratakan timbunan tanah di sekeliling galon, serta saat memanen kompos.',
  },
  {
    id: 'pisau-dapur',
    category: 'Pendukung',
    name: 'Gunting atau Pisau Dapur Khusus Sampah',
    specification: 'Alat pencacah sederhana di area dapur/kebun',
    functionDesc:
      'Memotong sisa sayuran, kulit buah, dan daun agar berukuran kecil sehingga lebih muat banyak dan cepat terurai di dalam galon.',
  },
];

export const creationSteps: CreationStep[] = [
  {
    number: '01',
    title: 'Persiapkan Alat, Bahan, dan Galon Bekas Bersih',
    summary:
      'Kumpulkan galon bekas 19 liter yang sudah tidak terpakai, peralatan pelubang, penggali tanah, sarung tangan, serta campuran sampah organik untuk pengisian awal.',
    details: [
      'Cuci bagian dalam galon apabila sebelumnya berdebu atau kotor.',
      'Siapkan minimal 1 ember campuran sisa sayur dapur yang telah dicacah dan daun kering.',
      'Pastikan peralatan seperti cutter, solder/bor, dan linggis dalam kondisi aman digunakan.',
    ],
  },
  {
    number: '02',
    title: 'Tentukan Lokasi Pemasangan yang Tepat',
    summary:
      'Pilih titik tanah terbuka di pekarangan yang tidak dilalui kendaraan berat dan cukup mudah dijangkau saat membuang sisa dapur.',
    details: [
      'Prioritaskan area yang sering tergenang saat hujan, dekat saluran talang air, atau di sekitar tanaman pekarangan.',
      'Jaga jarak aman minimal 1–2 meter dari sumur air bersih atau sumber air minum rumah tangga.',
      'Hindari area yang memiliki pipa air atau kabel tertanam di bawah tanah.',
    ],
  },
  {
    number: '03',
    title: 'Modifikasi Galon Bekas dengan Lubang Sisi dan Bawah',
    summary:
      'Buka bagian atas galon untuk pintu pengisian dan buat puluhan lubang di seluruh dinding samping serta dasar galon.',
    details: [
      'Potong bagian bahu/leher atas galon secara rapi melingkar (sisakan bagian atas agar masih bisa dijadikan penutup buka-tutup, atau siapkan tutup berpori tersendiri).',
      'Buat lubang berdiameter sekitar 1–1,5 cm di sekeliling sisi samping galon dengan jarak antar lubang kurang lebih 5–7 cm.',
      'Buat pula beberapa lubang di bagian dasar galon agar air hujan dapat meresap ke bawah dan cacing tanah leluasa masuk.',
    ],
    safetyNote:
      'Gunakan sarung tangan saat memotong plastik atau memakai solder/besi panas, serta lakukan di area terbuka agar tidak menghirup uap plastik.',
  },
  {
    number: '04',
    title: 'Buat Lubang pada Tanah Pekarangan',
    summary:
      'Gali lubang berbentuk silinder sesuai ukuran diameter dan tinggi galon yang telah dimodifikasi.',
    details: [
      'Ukur tinggi bagian galon yang akan tertanam (sisakan 3–5 cm bibir galon di atas permukaan tanah agar tanah permukaan dan air lumpur tidak langsung meluap masuk).',
      'Diameter lubang dibuat sekitar 2–3 cm lebih lebar dari diameter galon agar tabung mudah masuk dan dapat dipadatkan kembali dengan tanah galian.',
      'Jika tanah di pekarangan berbatu kapur khas Gunungkidul, gunakan linggis secara bertahap dan siram sedikit air bila tanah terlalu keras.',
    ],
  },
  {
    number: '05',
    title: 'Pasang Tabung Galon ke Dalam Tanah',
    summary:
      'Masukkan galon berlubang secara tegak lurus ke dalam lubang galian lalu padatkan celah di sekelilingnya.',
    details: [
      'Pastikan dasar galon duduk rata di dasar lubang dan dinding atasnya menonjol tipis (±3–5 cm) di atas permukaan tanah.',
      'Isi celah antara dinding galon dan tanah menggunakan tanah galian yang gembur sambil ditekan perlahan agar posisi galon kokoh.',
      'Jangan menutup lubang-lubang samping dengan plastik atau semen agar kontak antara sampah dan tanah tetap terjadi.',
    ],
  },
  {
    number: '06',
    title: 'Pengisian Awal Sampah Organik dan Penutupan',
    summary:
      'Isi bagian dalam tabung biopori dengan kombinasi sampah organik kering dan basah, lalu pasang penutup berporinya.',
    details: [
      'Masukkan selapis daun kering (±5 cm) terlebih dahulu di bagian dasar galon untuk menjaga sirkulasi udara dan mencegah becek.',
      'Tambahkan potongan sisa sayuran dan kulit buah, lalu tutup kembali permukaannya dengan sedikit daun kering.',
      'Pasang penutup berlubang di mulut galon supaya tetap aman bagi anggota keluarga dan terhindar dari nyamuk.',
    ],
  },
];

export const usageAndCareRules = [
  {
    title: 'Cara Memasukkan Sampah Harian',
    points: [
      'Potong kecil sampah dapur sebelum dimasukkan agar cepat terurai dan tabung muat lebih banyak.',
      'Selalu seimbangkan sampah dapur basah dengan segenggam daun kering di atasnya.',
      'Jangan menekan sampah terlalu padat dengan kayu keras hingga menutup celah udara; tekan ringan secukupnya.',
    ],
  },
  {
    title: 'Menjaga Kondisi Biopori Tetap Sehat',
    points: [
      'Pastikan tutup biopori selalu terpasang rapat setelah selesai mengisi sampah.',
      'Jika isi tabung terasa terlalu basah atau berbau, tambahkan daun kering atau sobekan kardus cokelat tanpa tinta.',
      'Sebaliknya, apabila musim kemarau panjang membuat sampah sangat kering dan lambat menyusut, percikkan sedikit air bersih secukupnya.',
    ],
  },
  {
    title: 'Pemantauan Proses Penguraian',
    points: [
      'Amati penyusutan tinggi tumpukan sampah setiap 1 minggu sekali; penyusutan menandakan cacing dan mikroba aktif bekerja.',
      'Bila permukaan penuh, hentikan pengisian pada lubang tersebut selama beberapa minggu agar proses pematangan kompos tuntas (dapat bergantian dengan titik biopori kedua jika memiliki lebih dari satu galon).',
      'Pastikan tidak ada plastik, karet, atau benda asing yang ikut masuk saat pengisian.',
    ],
  },
  {
    title: 'Waktu Pengambilan & Pemanfaatan Kompos',
    points: [
      'Sampah organik umumnya matang menjadi kompos dalam 4 hingga 8 minggu, tergantung ukuran potongan bahan dan kelembapan tanah.',
      'Ciri kompos matang: warna cokelat tua kehitaman, tekstur remah seperti tanah gembur, bentuk asli sayur sudah tidak terlihat, dan berbau tanah segar (tidak busuk).',
      'Ambil kompos matang menggunakan sekop kecil atau angkat hasil di bagian dasar, lalu gunakan sebagai pupuk tanaman hias, sayuran pekarangan, atau campuran media tanam.',
    ],
  },
];

export const careChecklist = [
  {
    id: 'potong-kecil',
    label: 'Sisa sayuran dan kulit buah sudah dipotong kecil dan bebas plastik/karet.',
  },
  {
    id: 'lapis-daun',
    label: 'Setiap mengisi sampah dapur basah selalu ditutup selapis daun kering.',
  },
  {
    id: 'cek-tutup',
    label: 'Penutup mulut galon terpasang rapi dan berlubang udara agar tidak menjadi sarang nyamuk.',
  },
  {
    id: 'cek-bau',
    label: 'Tidak tercium bau busuk menyengat; kelembapan isi tabung terjaga.',
  },
  {
    id: 'panen-kompos',
    label: 'Setelah 4–8 minggu dan berubah menjadi remah gelap berbau tanah, kompos siap dipanen.',
  },
];

export const faqItems: FaqItem[] = [
  {
    id: 'faq-1',
    topic: 'Konsep Biopori',
    question: 'Apa yang dimaksud dengan biopori?',
    answer:
      'Lubang resapan biopori adalah lubang silindris yang dibuat secara vertikal ke dalam tanah untuk menampung sampah organik sekaligus meningkatkan daya resap air hujan ke dalam tanah. Aktivitas cacing dan mikroorganisme pengurai di dalamnya membentuk pori-pori alami tanah sambil mengubah sampah menjadi kompos.',
  },
  {
    id: 'faq-2',
    topic: 'Sampah Organik',
    question: 'Mengapa sampah organik dapat dimasukkan ke dalam biopori?',
    answer:
      'Sampah organik berasal dari bahan alami (tumbuhan atau sisa nabati dapur) yang menjadi sumber makanan bagi cacing tanah dan mikroorganisme pengurai. Saat sampah organik masuk ke dalam biopori, organisme tanah datang untuk menguraikannya menjadi kompos sekaligus membuat tanah di sekitar lubang menjadi gembur dan berpori.',
  },
  {
    id: 'faq-3',
    topic: 'Galon Bekas',
    question: 'Mengapa menggunakan galon bekas?',
    answer:
      'Galon bekas air mineral 19 liter mudah ditemukan di masyarakat, berbahan plastik tebal yang tahan lama di dalam tanah, serta hemat biaya dibandingkan membeli pipa PVC besar. Selain berfungsi sebagai tabung biopori untuk menahan dinding tanah agar tidak longsor, pemanfaatan galon bekas juga mengurangi limbah plastik sekali pakai.',
  },
  {
    id: 'faq-4',
    topic: 'Galon Bekas',
    question: 'Mengapa galon perlu diberi lubang?',
    answer:
      'Lubang-lubang pada dinding samping dan dasar galon sangat penting sebagai jalan keluar-masuknya air hujan ke tanah serta jalur masuk cacing tanah dan mikroorganisme pengurai. Tanpa lubang, sampah hanya akan tergenang air di dalam wadah tertutup dan membusuk dengan bau tidak sedap.',
  },
  {
    id: 'faq-5',
    topic: 'Sampah Organik',
    question: 'Sampah apa saja yang boleh dimasukkan ke dalam biopori?',
    answer:
      'Sampah yang dianjurkan meliputi sisa sayuran dapur, kulit buah-buahan, daun kering, rumput kebun, ampas kopi dan teh tubruk, serta cangkang telur yang sudah diremukkan. Hindari memasukkan plastik, kaca, tulang besar, daging berlemak, minyak goreng bekas, popok, dan bahan kimia.',
  },
  {
    id: 'faq-6',
    topic: 'Sampah Organik',
    question: 'Apakah sampah perlu dipotong terlebih dahulu sebelum dimasukkan?',
    answer:
      'Ya, memotong atau mencacah sampah organik menjadi ukuran lebih kecil (sekitar 2–4 cm) sangat dianjurkan. Potongan kecil memperluas permukaan yang dijangkau mikroba pengurai sehingga proses pengomposan berlangsung lebih cepat dan kapasitas galon termanfaatkan lebih optimal.',
  },
  {
    id: 'faq-7',
    topic: 'Perawatan & Panen',
    question: 'Berapa lama sampah organik terurai di dalam biopori?',
    answer:
      'Umumnya sampah organik rumah tangga membutuhkan waktu sekitar 4 hingga 8 minggu untuk terurai menjadi kompos matang. Lama waktu ini dipengaruhi oleh ukuran potongan sampah, keseimbangan antara bahan basah dan daun kering, serta kelembapan tanah di lokasi pemasangan.',
  },
  {
    id: 'faq-8',
    topic: 'Perawatan & Panen',
    question: 'Bagaimana cara mengetahui kompos sudah matang?',
    answer:
      'Kompos yang sudah matang ditandai dengan perubahan warna menjadi cokelat tua atau kehitaman, teksturnya remah gembur seperti tanah subur, bentuk asli sayuran atau daun sudah hancur menyatu, dan tidak berbau busuk melainkan berbau seperti tanah lembap yang segar.',
  },
  {
    id: 'faq-9',
    topic: 'Perawatan & Panen',
    question: 'Bagaimana cara merawat biopori agar tetap berfungsi baik?',
    answer:
      'Lakukan pengisian sampah secara bertahap dengan menyeimbangkan sampah dapur basah dan daun kering, pastikan mulut galon selalu tertutup dengan penutup berpori agar nyamuk dan tikus tidak masuk, jangan membuang minyak atau plastik ke dalamnya, dan panen kompos secara berkala ketika sudah penuh serta matang.',
  },
];

export const programGoals = [
  'Menyediakan media edukasi digital mengenai pengelolaan sampah organik melalui biopori bagi masyarakat Kalurahan Monggol.',
  'Meningkatkan pemahaman masyarakat mengenai jenis dan karakteristik sampah organik rumah tangga.',
  'Memperkenalkan pemanfaatan galon bekas sebagai alternatif tabung biopori yang praktis dan hemat biaya.',
  'Memberikan panduan praktis mengenai proses pembuatan, pengisian, dan perawatan biopori secara mandiri.',
  'Mendorong masyarakat mengelola sampah organik lebih bijak serta mengurangi kebiasaan membuang atau membakar sampah.',
  'Menyediakan media edukasi statis berkelanjutan yang tetap mudah diakses masyarakat setelah kegiatan KKN selesai.',
];

export const programInfo = {
  title: 'Monggol Resik',
  subtitle: 'Website Edukasi Pengelolaan Sampah Organik melalui Biopori',
  location: 'Kalurahan Monggol, Kapanewon Saptosari, Kabupaten Gunungkidul',
  implementer: 'Program Kerja KKN Bidang Teknik Informatika bersama Masyarakat Kalurahan Monggol',
  plannedUrl: WEBSITE_PLANNED_URL,
};
