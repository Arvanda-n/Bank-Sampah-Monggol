export type PageRoute =
  | 'beranda'
  | 'jenis-sampah'
  | 'panduan'
  | 'bank-sampah'
  | 'faq'
  | 'kontak';

export type WasteCategoryId = 'organik' | 'anorganik' | 'residu' | 'b3';

export type AcceptanceStatus = 'diterima' | 'bersyarat' | 'tidak_diterima';

export interface WasteCategory {
  id: WasteCategoryId;
  name: string;
  shortName: string;
  subtitle: string;
  description: string;
  characteristics: string[];
  examples: string[];
  handlingAtHome: string;
  bankSampahRule: string;
  accentTextClass: string;
  accentBgClass: string;
  accentBorderClass: string;
}

export interface WasteItem {
  id: string;
  name: string;
  aliases: string[];
  categoryId: WasteCategoryId;
  acceptedAtBankSampah: AcceptanceStatus;
  acceptanceLabel: string;
  prepInstruction: string;
  handlingTip: string;
}

export interface SortingStep {
  number: string;
  title: string;
  summary: string;
  actionItems: string[];
}

export interface HouseholdExample {
  room: string;
  items: {
    name: string;
    categoryId: WasteCategoryId;
    categoryLabel: string;
    action: string;
  }[];
}

export interface FaqItem {
  id: string;
  topic: 'Pemilahan' | 'Persiapan' | 'Bank Sampah' | 'Aturan Setor';
  question: string;
  answer: string;
}

export const IMAGES = {
  hero: '/src/assets/images/hero_monggol_resik_1795365277023.jpg',
  sortingHousehold: '/src/assets/images/guide_sorting_household_1795365277226.jpg',
  prepCleanBottles: '/src/assets/images/guide_prep_clean_bottles_1795365277089.jpg',
  bankSampahActivity: '/src/assets/images/bank_sampah_activity_1795365276756.jpg',
} as const;

export const wasteCategories: WasteCategory[] = [
  {
    id: 'organik',
    name: 'Sampah Organik',
    shortName: 'Organik',
    subtitle: 'Mudah terurai secara alami oleh alam',
    description:
      'Sampah yang berasal dari sisa makhluk hidup (tumbuhan maupun hewan) yang dapat membusuk dan terurai kembali menjadi tanah atau kompos tanpa bahan kimia tambahan.',
    characteristics: [
      'Cepat membusuk dan menimbulkan bau jika didiamkan bercampur air.',
      'Mengandung kadar air cukup tinggi atau berupa serat tumbuhan.',
      'Dapat diolah di pekarangan rumah menjadi kompos atau pakan ternak.',
    ],
    examples: [
      'Sisa sayuran dan kulit buah',
      'Sisa makanan dan nasi basi',
      'Daun kering, ranting kecil, dan rumput pekarangan',
      'Ampas kopi, ampas teh, dan cangkang telur',
    ],
    handlingAtHome:
      'Olah langsung di rumah menggunakan lubang biopori, ember komposter, atau dimanfaatkan untuk pakan ternak/unggas. Jangan dicampur ke plastik atau kertas kering agar tidak mengotori bahan daur ulang.',
    bankSampahRule:
      'Umumnya dikelola di tingkat rumah tangga sebagai kompos, bukan untuk setoran tabungan anorganik.',
    accentTextClass: 'text-emerald-800',
    accentBgClass: 'bg-emerald-50',
    accentBorderClass: 'border-emerald-200',
  },
  {
    id: 'anorganik',
    name: 'Sampah Anorganik',
    shortName: 'Anorganik',
    subtitle: 'Dapat didaur ulang dan bernilai guna di Bank Sampah',
    description:
      'Sampah buatan manusia yang sangat sulit atau tidak dapat membusuk secara alami, namun sebagian besar dapat didaur ulang menjadi bahan baku produk baru jika bersih dan terpilah.',
    characteristics: [
      'Tidak membusuk dan tidak berbau apabila dalam keadaan bersih serta kering.',
      'Memiliki nilai jual dan dapat ditabung di Bank Sampah Kalurahan Monggol.',
      'Perlu dipisahkan berdasarkan bahan (plastik, kertas, logam, kaca).',
    ],
    examples: [
      'Botol air mineral (PET), gelas plastik bersih, dan jerigen',
      'Kardus, kertas HVS, koran bekas, dan buku tulis lama',
      'Kaleng minuman aluminium, kaleng susu, dan besi bekas',
      'Botol kaca kecap/sirup yang masih utuh',
    ],
    handlingAtHome:
      'Kosongkan isinya, bilas bila terkena sisa minuman/makanan, keringkan, lalu pipihkan agar hemat tempat. Simpan di karung atau wadah kering khusus untuk disetorkan ke Bank Sampah.',
    bankSampahRule:
      'Diterima oleh Bank Sampah apabila bersih, kering, dan terpilah sesuai jenis bahannya.',
    accentTextClass: 'text-sky-800',
    accentBgClass: 'bg-sky-50',
    accentBorderClass: 'border-sky-200',
  },
  {
    id: 'residu',
    name: 'Sampah Residu',
    shortName: 'Residu',
    subtitle: 'Sulit didaur ulang dan tidak disetorkan ke Bank Sampah',
    description:
      'Sampah sisa aktivitas harian yang terbuat dari campuran bahan berlapis, kotor terkena cairan tubuh/minyak, atau belum memiliki jalur daur ulang di tingkat lokal.',
    characteristics: [
      'Sulit diuraikan alam dan tidak dapat didaur ulang oleh Bank Sampah setempat.',
      'Sering kali terdiri dari bahan campuran (misalnya plastik berlapis aluminium foil).',
      'Perlu dibungkus rapat agar tidak mencemari sampah anorganik yang bersih.',
    ],
    examples: [
      'Popok bayi sekali pakai dan pembalut',
      'Tisu bekas, kapas, dan masker sekali pakai',
      'Bungkus kopi sachet, mi instan, atau snack berlapis foil',
      'Puntung rokok, styrofoam kotor, dan pecahan keramik',
    ],
    handlingAtHome:
      'Pisahkan dalam wadah tertutup tersendiri. Untuk popok sekali pakai, buang kotorannya ke toilet terlebih dahulu sebelum membungkus popok. Salurkan melalui pembuangan sampah residu desa yang terjadwal.',
    bankSampahRule:
      'Tidak diterima di Bank Sampah. Wajib dipisahkan agar tidak merusak kualitas sampah anorganik.',
    accentTextClass: 'text-stone-700',
    accentBgClass: 'bg-stone-100',
    accentBorderClass: 'border-stone-300',
  },
  {
    id: 'b3',
    name: 'Sampah B3 Rumah Tangga',
    shortName: 'B3 Rumah Tangga',
    subtitle: 'Bahan Berbahaya & Beracun yang perlu penanganan khusus',
    description:
      'Limbah rumah tangga yang mengandung zat kimia berbahaya, beracun, mudah terbakar, korosif, atau tajam sehingga berisiko melukai warga dan mencemari air tanah jika dibuang sembarangan.',
    characteristics: [
      'Mengandung logam berat, gas bertekanan, atau bahan kimia aktif.',
      'Dilarang dibakar atau dibuang ke tanah/selokan karena mencemari lingkungan.',
      'Harus disimpan dalam wadah keras tertutup jauh dari jangkauan anak-anak.',
    ],
    examples: [
      'Baterai bekas (AA, AAA, baterai jam, baterai HP)',
      'Lampu neon, bohlam LED rusak, dan pecahan kaca tajam',
      'Kaleng aerosol (obat nyamuk semprot, pengharum ruangan bertekanan)',
      'Botol bekas pestisida, pembersih lantai keras, dan obat kedaluwarsa',
    ],
    handlingAtHome:
      'Jangan dibakar, jangan ditimbun di kebun, dan jangan dicampur dengan sampah dapur. Kumpulkan di toples/kotak tertutup berlabel khusus, lalu konsultasikan penanganannya dengan pengelola atau perangkat padukuhan.',
    bankSampahRule:
      'Tidak disetorkan sebagai tabungan sampah biasa. Simpan terpisah dan tanyakan mekanisme pengumpulan khusus kepada pengelola.',
    accentTextClass: 'text-red-800',
    accentBgClass: 'bg-red-50',
    accentBorderClass: 'border-red-200',
  },
];

export const wasteItems: WasteItem[] = [
  {
    id: 'botol-pet',
    name: 'Botol Plastik Air Mineral (PET)',
    aliases: ['aqua', 'botol minum', 'pet', 'botol teh', 'botol bening'],
    categoryId: 'anorganik',
    acceptedAtBankSampah: 'diterima',
    acceptanceLabel: 'Diterima Bank Sampah',
    prepInstruction: 'Kosongkan airnya, lepas atau pisahkan tutup/label jika diminta, lalu pipihkan.',
    handlingTip: 'Simpan dalam karung kering. Botol bening bersih memiliki kualitas daur ulang terbaik.',
  },
  {
    id: 'gelas-plastik',
    name: 'Gelas Plastik Minuman Kemasan',
    aliases: ['cup plastik', 'gelas aqua', 'gelas es', 'pp'],
    categoryId: 'anorganik',
    acceptedAtBankSampah: 'diterima',
    acceptanceLabel: 'Diterima Bank Sampah',
    prepInstruction: 'Buang sedotan dan penutup plastik tipis di atasnya, lalu bilas dan keringkan.',
    handlingTip: 'Tumpuk gelas plastik dengan rapi agar tidak memakan ruang penyimpanan di rumah.',
  },
  {
    id: 'kardus',
    name: 'Kardus Bekas & Karton Cokelat',
    aliases: ['dus', 'karton', 'kardus mie', 'paket', 'box'],
    categoryId: 'anorganik',
    acceptedAtBankSampah: 'diterima',
    acceptanceLabel: 'Diterima Bank Sampah',
    prepInstruction: 'Buka lipatan hingga pipih, pastikan tidak basah atau berminyak, lalu ikat rapi.',
    handlingTip: 'Jangan simpan kardus di tempat lembap karena jamur menurunkan kualitas kertas.',
  },
  {
    id: 'kertas-hvs',
    name: 'Kertas HVS, Buku Tulis & Koran',
    aliases: ['buku bekas', 'majalah', 'kertas sekolah', 'arsip', 'koran'],
    categoryId: 'anorganik',
    acceptedAtBankSampah: 'diterima',
    acceptanceLabel: 'Diterima Bank Sampah',
    prepInstruction: 'Pisahkan dari sampul plastik mengilap dan klip besi/staples besar, pastikan tetap kering.',
    handlingTip: 'Ikat per tumpukan atau masukkan ke dalam kardus kering.',
  },
  {
    id: 'kaleng-minuman',
    name: 'Kaleng Minuman & Kaleng Makanan Logam',
    aliases: ['aluminium', 'kaleng susu', 'kaleng sarden', 'kaleng soda', 'besi'],
    categoryId: 'anorganik',
    acceptedAtBankSampah: 'diterima',
    acceptanceLabel: 'Diterima Bank Sampah',
    prepInstruction: 'Bilas bagian dalam hingga bersih dari sisa makanan/susu manis dan tiriskan hingga kering.',
    handlingTip: 'Hati-hati dengan tepi kaleng yang tajam saat menekan atau menyimpannya.',
  },
  {
    id: 'botol-hdpe',
    name: 'Botol Sampo, Sabun Cair & Jerigen Bersih',
    aliases: ['hdpe', 'botol deterjen', 'jerigen', 'botol oli bersih'],
    categoryId: 'anorganik',
    acceptedAtBankSampah: 'diterima',
    acceptanceLabel: 'Diterima Bank Sampah',
    prepInstruction: 'Kosongkan sisa cairan, bilas dengan air secukupnya, lalu tiriskan terbalik sampai kering.',
    handlingTip: 'Botol berbahan tebal (HDPE) sangat baik untuk didaur ulang selama tidak bekas bahan beracun.',
  },
  {
    id: 'botol-kaca',
    name: 'Botol Kaca Utuh (Kecap, Sirup, Saus)',
    aliases: ['beling', 'botol beling', 'botol sirup', 'kaca'],
    categoryId: 'anorganik',
    acceptedAtBankSampah: 'diterima',
    acceptanceLabel: 'Diterima Bank Sampah',
    prepInstruction: 'Bilas bagian dalam, pastikan kondisi botol tidak retak atau pecah.',
    handlingTip: 'Simpan di kotak karton tebal agar tidak pecah selama penyimpanan di rumah.',
  },
  {
    id: 'tutup-botol',
    name: 'Tutup Botol & Tutup Galon Plastik',
    aliases: ['tutup aqua', 'tutup galon', 'plastik keras'],
    categoryId: 'anorganik',
    acceptedAtBankSampah: 'diterima',
    acceptanceLabel: 'Diterima Bank Sampah',
    prepInstruction: 'Kumpulkan terpisah dalam kantong atau toples bekas agar tidak tercecer.',
    handlingTip: 'Jenis plastiknya berbeda dengan badan botol, sehingga pemisahan tutup sangat membantu.',
  },
  {
    id: 'kresek-bersih',
    name: 'Kantong Kresek Bersih & Kering',
    aliases: ['kantong plastik', 'kresek', 'plastik belanja'],
    categoryId: 'anorganik',
    acceptedAtBankSampah: 'bersyarat',
    acceptanceLabel: 'Konfirmasi Pengelola',
    prepInstruction: 'Pastikan kresek benar-benar bersih, kering, dan tidak terkena minyak atau kuah makanan.',
    handlingTip: 'Sebagian Bank Sampah menerima kresek bersih; tanyakan terlebih dahulu atau gunakan ulang untuk belanja.',
  },
  {
    id: 'minyak-jelantah',
    name: 'Minyak Jelantah (Minyak Goreng Bekas)',
    aliases: ['jelantah', 'minyak bekas', 'minyak goreng'],
    categoryId: 'anorganik',
    acceptedAtBankSampah: 'bersyarat',
    acceptanceLabel: 'Konfirmasi Pengelola',
    prepInstruction: 'Dinginkan minyak, saring dari sisa tepung/remah gorengan, lalu simpan di botol atau jerigen tertutup.',
    handlingTip: 'Jangan membuang jelantah ke selokan atau tanah karena dapat menyumbat saluran dan mencemari air.',
  },
  {
    id: 'kemasan-karton-minuman',
    name: 'Kemasan Karton Susu / Minuman (Tetra Pak)',
    aliases: ['kotak susu', 'tetra pak', 'kotak teh'],
    categoryId: 'anorganik',
    acceptedAtBankSampah: 'bersyarat',
    acceptanceLabel: 'Konfirmasi Pengelola',
    prepInstruction: 'Gunting bagian ujung, bilas bersih dengan air, keringkan, lalu lipat rata.',
    handlingTip: 'Jika pengelola belum menerima kemasan berlapis foil ini, dapat disimpan sebagai bahan kerajinan atau masuk residu kering.',
  },
  {
    id: 'kulit-buah-sayur',
    name: 'Sisa Sayuran & Kulit Buah',
    aliases: ['sayur', 'kulit pisang', 'potongan sayur', 'sampah dapur'],
    categoryId: 'organik',
    acceptedAtBankSampah: 'tidak_diterima',
    acceptanceLabel: 'Olah di Rumah (Kompos)',
    prepInstruction: 'Pisahkan dari karet gelang, plastik pembungkus, atau tusuk sate sebelum dikomposkan.',
    handlingTip: 'Masukkan ke komposter rumah tangga, lubang biopori, atau cacah tipis untuk pakan ternak bila aman.',
  },
  {
    id: 'sisa-nasi-lauk',
    name: 'Sisa Nasi & Makanan Matang',
    aliases: ['nasi basi', 'sisa makanan', 'tulang', 'lauk'],
    categoryId: 'organik',
    acceptedAtBankSampah: 'tidak_diterima',
    acceptanceLabel: 'Olah di Rumah',
    prepInstruction: 'Tiriskan kuah berlebih dan pisahkan dari bungkus plastik atau kertas minyak.',
    handlingTip: 'Dapat dimanfaatkan untuk pakan ternak/maggot atau dikubur tipis bersama tanah dan daun kering.',
  },
  {
    id: 'daun-ranting',
    name: 'Daun Kering, Rumput & Ranting Kebun',
    aliases: ['daun', 'dedaunan', 'ranting', 'rumput', 'pekarangan'],
    categoryId: 'organik',
    acceptedAtBankSampah: 'tidak_diterima',
    acceptanceLabel: 'Olah di Rumah (Kompos)',
    prepInstruction: 'Kumpulkan di sudut pekarangan atau lubang kompos tanpa membakarnya.',
    handlingTip: 'Daun kering sangat baik sebagai bahan penyeimbang (unsur karbon) agar kompos dapur tidak berbau.',
  },
  {
    id: 'ampas-kopi-teh',
    name: 'Ampas Kopi, Daun Teh & Cangkang Telur',
    aliases: ['kopi', 'teh', 'kulit telur', 'cangkang telur'],
    categoryId: 'organik',
    acceptedAtBankSampah: 'tidak_diterima',
    acceptanceLabel: 'Olah di Rumah (Pupuk)',
    prepInstruction: 'Lepas kantong teh celup apabila menggunakan benang/staples logam, lalu campur ke kompos.',
    handlingTip: 'Cangkang telur yang diremukkan halus sangat baik untuk menambah kalsium tanaman pekarangan.',
  },
  {
    id: 'sachet-kopi',
    name: 'Bungkus Sachet Kopi, Mi Instan & Snack Foil',
    aliases: ['sachet', 'bungkus indomie', 'bungkus kopi', 'kemasan jajan', 'chiki'],
    categoryId: 'residu',
    acceptedAtBankSampah: 'tidak_diterima',
    acceptanceLabel: 'Sampah Residu',
    prepInstruction: 'Pastikan sisa bubuk atau minyak tidak tercecer, lalu masukkan ke tempat sampah residu.',
    handlingTip: 'Plastik berlapis aluminium foil sulit didaur ulang; kurangi pemakaian dengan memilih kemasan besar jika memungkinkan.',
  },
  {
    id: 'popok-pembalut',
    name: 'Popok Sekali Pakai & Pembalut',
    aliases: ['pampers', 'diapers', 'popok bayi', 'pembalut'],
    categoryId: 'residu',
    acceptedAtBankSampah: 'tidak_diterima',
    acceptanceLabel: 'Sampah Residu',
    prepInstruction: 'Buang kotoran padat ke kloset, gulung rapat, dan bungkus terpisah sebelum dibuang ke tempat residu.',
    handlingTip: 'Jangan pernah membakar atau membuang popok ke sungai karena gel penyerapnya mencemari air.',
  },
  {
    id: 'tisu-masker',
    name: 'Tisu Bekas, Kapas & Masker Sekali Pakai',
    aliases: ['tisu', 'masker', 'kapas', 'lap kertas'],
    categoryId: 'residu',
    acceptedAtBankSampah: 'tidak_diterima',
    acceptanceLabel: 'Sampah Residu',
    prepInstruction: 'Masukkan ke kantong sampah residu tertutup; untuk masker medis, gunting talinya terlebih dahulu.',
    handlingTip: 'Tisu bekas tidak dapat didaur ulang bersama kertas HVS atau kardus bersih.',
  },
  {
    id: 'styrofoam-kotor',
    name: 'Styrofoam / Gabus Kemasan Makanan',
    aliases: ['gabus', 'kotak makan putih', 'wadah bubur'],
    categoryId: 'residu',
    acceptedAtBankSampah: 'tidak_diterima',
    acceptanceLabel: 'Sampah Residu',
    prepInstruction: 'Bersihkan sisa makanan yang menempel agar tidak mengundang lalat di tempat sampah residu.',
    handlingTip: 'Sebaiknya bawa wadah makan sendiri dari rumah saat membeli makanan hangat.',
  },
  {
    id: 'kertas-minyak',
    name: 'Kertas Nasi Minyak & Kertas Struk Kasir',
    aliases: ['kertas bungkus nasi', 'kertas minyak', 'struk belanja'],
    categoryId: 'residu',
    acceptedAtBankSampah: 'tidak_diterima',
    acceptanceLabel: 'Sampah Residu',
    prepInstruction: 'Jangan dicampur dengan tumpukan kertas HVS atau koran bersih.',
    handlingTip: 'Lapisan plastik dan minyak pada kertas nasi membuat serat kertasnya tidak bisa didaur ulang.',
  },
  {
    id: 'baterai-bekas',
    name: 'Baterai Bekas (Remote, Jam, Mainan, HP)',
    aliases: ['batre', 'baterai', 'aki kecil'],
    categoryId: 'b3',
    acceptedAtBankSampah: 'tidak_diterima',
    acceptanceLabel: 'Limbah B3 (Pisahkan Khusus)',
    prepInstruction: 'Jangan dibongkar atau dibakar; bungkus ujung kutubnya dengan selotip dan simpan dalam toples kering.',
    handlingTip: 'Baterai mengandung logam berat yang dapat meracuni air sumur jika ditimbun di tanah.',
  },
  {
    id: 'lampu-rusak',
    name: 'Lampu Neon, Lampu Jari (CFL) & LED Rusak',
    aliases: ['bohlam', 'lampu', 'neon', 'lampu mati'],
    categoryId: 'b3',
    acceptedAtBankSampah: 'tidak_diterima',
    acceptanceLabel: 'Limbah B3 (Pisahkan Khusus)',
    prepInstruction: 'Bungkus dengan kardus bekas agar tidak pecah dan tidak melukai petugas kebersihan.',
    handlingTip: 'Lampu neon mengandung uap merkuri; hindari memecahkan tabung kaca secara sengaja.',
  },
  {
    id: 'kaleng-aerosol',
    name: 'Kaleng Semprot Nyamuk, Cat & Parfum Tekanan',
    aliases: ['baygon', 'aerosol', 'pilox', 'semprotan', 'kaleng gas'],
    categoryId: 'b3',
    acceptedAtBankSampah: 'tidak_diterima',
    acceptanceLabel: 'Limbah B3 (Pisahkan Khusus)',
    prepInstruction: 'Jangan melubangi atau membakar kaleng karena berisiko meledak. Simpan di tempat teduh terpisah.',
    handlingTip: 'Berbeda dengan kaleng minuman, kaleng bertekanan berisi bahan kimia berbahaya.',
  },
  {
    id: 'obat-kedaluwarsa',
    name: 'Obat Kedaluwarsa & Botol Pestisida/Pembersih Keras',
    aliases: ['obat habis', 'racun tikus', 'pestisida', 'pembersih porselen'],
    categoryId: 'b3',
    acceptedAtBankSampah: 'tidak_diterima',
    acceptanceLabel: 'Limbah B3 (Pisahkan Khusus)',
    prepInstruction: 'Simpan dalam wadah asli tertutup rapat dan beri tanda jelas agar tidak disalahgunakan.',
    handlingTip: 'Jangan membuang cairan pembersih keras atau pestisida ke saluran air pekarangan.',
  },
  {
    id: 'pecahan-kaca',
    name: 'Pecahan Kaca / Piring / Gelas Tajam',
    aliases: ['beling pecah', 'pecahan piring', 'kaca jendela'],
    categoryId: 'residu',
    acceptedAtBankSampah: 'tidak_diterima',
    acceptanceLabel: 'Residu Khusus (Bungkus Aman)',
    prepInstruction: 'Balut rapat dengan kertas koran berlapis dan masukkan ke dalam kardus bekas bertuliskan "Hati-Hati Kaca".',
    handlingTip: 'Pelabelan melindungi keluarga maupun pengelola sampah dari risiko terluka.',
  },
  {
    id: 'limbah-elektronik',
    name: 'Kabel Putus, Charger Rusak & Elektronik Kecil',
    aliases: ['charger', 'kabel', 'headset', 'e-waste', 'hp rusak'],
    categoryId: 'b3',
    acceptedAtBankSampah: 'bersyarat',
    acceptanceLabel: 'Pisahkan / Tanya Pengelola',
    prepInstruction: 'Gulung rapi dan simpan terpisah dari sampah rumah tangga basah.',
    handlingTip: 'Komponen elektronik mengandung tembaga sekaligus zat B3; tanyakan ke pengelola apakah ada mitra penampung e-waste.',
  },
];

export const sortingSteps: SortingStep[] = [
  {
    number: '01',
    title: 'Kenali dan Bedakan Jenis Sampahnya',
    summary:
      'Sebelum membuang ke tempat sampah, lihat asal bahan dan kondisinya apakah mudah membusuk, dapat didaur ulang, residu, atau berbahaya.',
    actionItems: [
      'Sisa makanan dan daun masuk kelompok Organik.',
      'Botol plastik, kardus, kertas, kaleng, dan kaca utuh masuk kelompok Anorganik.',
      'Popok, tisu, dan bungkus sachet kotor masuk kelompok Residu.',
      'Baterai, lampu rusak, dan kaleng semprot kimia dipisahkan sebagai B3.',
    ],
  },
  {
    number: '02',
    title: 'Sediakan Minimal 3 Wadah Terpisah di Rumah',
    summary:
      'Pemisahan sejak awal di dapur atau teras mencegah sampah kering terkotori sisa makanan basah yang membuat bau.',
    actionItems: [
      'Wadah 1 (Tertutup): Untuk sampah organik dapur agar mudah diangkut ke komposter atau biopori.',
      'Wadah 2 (Karung/Keranjang Kering): Untuk sampah anorganik bersih calon setoran Bank Sampah.',
      'Wadah 3 (Kantong Tertutup): Untuk sampah residu yang tidak bisa didaur ulang.',
      'Kotak/Toples Kecil Tambahan: Khusus menyimpan baterai atau lampu rusak (B3).',
    ],
  },
  {
    number: '03',
    title: 'Bersihkan, Keringkan, dan Ringkaskan Bentuknya',
    summary:
      'Sampah anorganik yang akan disetorkan ke Bank Sampah harus bebas sisa cairan dan kotoran agar tidak mengundang semut serta menjaga nilai guna.',
    actionItems: [
      'Kosongkan sisa air minum, susu, atau kuah makanan dari botol dan kaleng.',
      'Bilas ringan menggunakan air bekas cucian piring/beras agar tetap hemat air.',
      'Tiriskan hingga kering, lalu tekan/pipihkan botol dan lipat kardus.',
      'Pisahkan tutup botol dan buang sedotan plastik tipis bila ada.',
    ],
  },
  {
    number: '04',
    title: 'Simpan di Tempat Teduh agar Tidak Tercampur Kembali',
    summary:
      'Setelah bersih dan kering, kelompokkan sampah berdasarkan jenis bahannya supaya proses penimbangan di Bank Sampah berjalan cepat.',
    actionItems: [
      'Simpan karung plastik dan tumpukan kardus di tempat kering yang terlindung dari hujan.',
      'Ikat kardus dan kertas dengan tali rafia atau tali rami agar tidak berantakan.',
      'Jangan mencampurkan kembali plastik bersih dengan tisu atau bungkus kopi kotor.',
      'Bawa ke pos Bank Sampah sesuai jadwal penyetoran yang disepakati pengelola.',
    ],
  },
];

export const householdExamples: HouseholdExample[] = [
  {
    room: 'Dapur & Ruang Makan',
    items: [
      {
        name: 'Kulit buah, potongan sayur, cangkang telur',
        categoryId: 'organik',
        categoryLabel: 'Organik',
        action: 'Masukkan ember kompos atau lubang biopori pekarangan.',
      },
      {
        name: 'Botol kecap kaca, botol minyak plastik, kaleng susu',
        categoryId: 'anorganik',
        categoryLabel: 'Anorganik',
        action: 'Bilas bersih, keringkan, simpan di karung Bank Sampah.',
      },
      {
        name: 'Bungkus mi instan, sachet kopi, kertas nasi berminyak',
        categoryId: 'residu',
        categoryLabel: 'Residu',
        action: 'Masukkan wadah sampah residu tertutup.',
      },
    ],
  },
  {
    room: 'Ruang Keluarga & Belajar',
    items: [
      {
        name: 'Kardus paket belanja & buku tulis lama',
        categoryId: 'anorganik',
        categoryLabel: 'Anorganik',
        action: 'Lipat rata, ikat kering, siap disetorkan.',
      },
      {
        name: 'Baterai remote atau jam dinding yang habis',
        categoryId: 'b3',
        categoryLabel: 'B3 Rumah Tangga',
        action: 'Simpan di toples tertutup khusus B3, jangan dibuang ke kebun.',
      },
      {
        name: 'Tisu bekas dan kemasan snack berlapis foil',
        categoryId: 'residu',
        categoryLabel: 'Residu',
        action: 'Masukkan ke kantong residu rumah tangga.',
      },
    ],
  },
  {
    room: 'Kamar Mandi & Kebun',
    items: [
      {
        name: 'Botol sampo, sabun cair, dan botol pewangi pakaian',
        categoryId: 'anorganik',
        categoryLabel: 'Anorganik',
        action: 'Bilas bagian dalam, tiriskan kering, kumpulkan untuk Bank Sampah.',
      },
      {
        name: 'Popok sekali pakai, pembalut, dan sikat gigi patah',
        categoryId: 'residu',
        categoryLabel: 'Residu',
        action: 'Bungkus rapat di tempat sampah residu.',
      },
      {
        name: 'Daun kering gugur dan pangkasan rumput',
        categoryId: 'organik',
        categoryLabel: 'Organik',
        action: 'Jadikan mulsa tanaman atau campuran kompos.',
      },
    ],
  },
];

export const preparationChecklist = [
  {
    id: 'empty',
    label: 'Botol, gelas, dan kaleng sudah kosong dari sisa minuman/makanan.',
  },
  {
    id: 'rinsed',
    label: 'Wadah yang sempat lengket atau manis sudah dibilas dan dikeringkan.',
  },
  {
    id: 'grouped',
    label: 'Plastik, kardus/kertas, logam, dan kaca sudah dipisah dalam wadah masing-masing.',
  },
  {
    id: 'flattened',
    label: 'Botol sudah dipipihkan dan kardus sudah dilipat serta diikat rapi.',
  },
  {
    id: 'no-residu',
    label: 'Tidak ada tisu, popok, sachet kotor, atau baterai yang ikut tercampur.',
  },
];

export const bankSampahProcessSteps = [
  {
    step: '01',
    title: 'Pilah dan Bersihkan Sampah di Rumah',
    description:
      'Warga memisahkan sampah anorganik yang masih layak daur ulang (seperti botol plastik, kardus, kertas, kaleng, dan botol kaca) dari sampah organik serta residu.',
  },
  {
    step: '02',
    title: 'Datang ke Pos Bank Sampah Sesuai Jadwal',
    description:
      'Warga membawa sampah terpilah yang sudah bersih dan kering ke lokasi pos pelayanan Bank Sampah di Kalurahan Monggol sesuai jadwal buka pengelola.',
  },
  {
    step: '03',
    title: 'Pengecekan Jenis dan Penimbangan',
    description:
      'Petugas Bank Sampah memeriksa kebersihan serta kesesuaian kategori sampah, lalu menimbang setiap jenis sampah secara terbuka di hadapan nasabah.',
  },
  {
    step: '04',
    title: 'Pencatatan ke Buku Tabungan Nasabah',
    description:
      'Hasil berat timbangan dikonversi sesuai ketentuan yang berlaku di Bank Sampah setempat dan dicatat langsung oleh pengurus ke dalam buku tabungan nasabah.',
  },
  {
    step: '05',
    title: 'Penyaluran ke Mitra Daur Ulang',
    description:
      'Sampah terpilah yang terkumpul disalurkan oleh pengelola ke pengepul atau mitra industri daur ulang agar tidak berakhir menumpuk atau dibakar di lingkungan.',
  },
];

export const acceptedMaterialGroups = [
  {
    title: 'Kelompok Plastik Bersih',
    examples: 'Botol air mineral (PET), gelas plastik minuman, tutup botol, botol sampo/deterjen (HDPE), ember pecah bersih.',
    note: 'Wajib bebas sisa cairan/minyak dan dipisahkan dari plastik sachet kotor.',
  },
  {
    title: 'Kelompok Kertas & Kardus',
    examples: 'Kardus cokelat kering, kertas HVS/arsip, buku tulis bekas, koran, dan majalah.',
    note: 'Harus benar-benar kering, tidak berjamur, dan dilipat atau diikat rapi.',
  },
  {
    title: 'Kelompok Logam & Kaleng',
    examples: 'Kaleng minuman aluminium, kaleng susu/makanan bersih, potongan besi atau tembaga ringan.',
    note: 'Bilas sisa susu atau saus agar tidak berbau dan mengundang serangga.',
  },
  {
    title: 'Kelompok Kaca Utuh & Khusus',
    examples: 'Botol kaca sirup/kecap/saus utuh. Untuk minyak jelantah, konfirmasikan ketersediaan penampungan kepada pengelola.',
    note: 'Pastikan botol kaca tidak retak atau pecah demi keselamatan bersama.',
  },
];

export const faqItems: FaqItem[] = [
  {
    id: 'faq-1',
    topic: 'Pemilahan',
    question: 'Apa perbedaan sampah organik dan anorganik?',
    answer:
      'Sampah organik berasal dari makhluk hidup sehingga cepat membusuk secara alami, misalnya sisa sayuran, kulit buah, sisa nasi, dan daun kering. Sementara itu, sampah anorganik berasal dari bahan buatan seperti botol plastik, kardus, kaleng, dan kaca yang tidak membusuk serta dapat disetorkan ke Bank Sampah untuk didaur ulang.',
  },
  {
    id: 'faq-2',
    topic: 'Aturan Setor',
    question: 'Apakah semua jenis plastik dapat disetorkan ke Bank Sampah?',
    answer:
      'Tidak semua jenis plastik dapat disetorkan. Plastik keras dan bening seperti botol air mineral, gelas plastik bersih, dan botol sampo umumnya diterima. Namun plastik berlapis aluminium foil (bungkus kopi sachet, mi instan) atau plastik yang kotor terkena kuah makanan masuk kategori residu dan tidak diterima Bank Sampah. Untuk kantong kresek bersih, silakan konfirmasi kebijakan pengelola setempat.',
  },
  {
    id: 'faq-3',
    topic: 'Persiapan',
    question: 'Apakah sampah harus dibersihkan terlebih dahulu sebelum disetorkan?',
    answer:
      'Ya, sampah wajib dikosongkan dan dibersihkan seperlunya terlebih dahulu. Jika masih ada sisa minuman manis, susu, atau minyak, sampah akan berbau, berjamur, mengundang semut, dan bisa merusak sampah kering milik nasabah lain. Cukup bilas ringan dengan air bersih atau air bekas cucian, lalu tiriskan hingga kering.',
  },
  {
    id: 'faq-4',
    topic: 'Bank Sampah',
    question: 'Bagaimana cara menjadi nasabah dan menyetorkan sampah?',
    answer:
      'Caranya cukup mudah: pilah dan bersihkan sampah anorganik Anda di rumah, lalu bawa ke pos pelayanan Bank Sampah Kalurahan Monggol pada jadwal penyetoran. Sampaikan kepada pengurus bahwa Anda ingin mendaftar sebagai nasabah baru. Petugas akan mendata identitas singkat Anda, menimbang sampah yang dibawa, dan mencatatnya di buku tabungan nasabah.',
  },
  {
    id: 'faq-5',
    topic: 'Bank Sampah',
    question: 'Apa manfaat menjadi nasabah Bank Sampah?',
    answer:
      'Selain membantu lingkungan Kalurahan Monggol menjadi lebih bersih, sehat, dan bebas dari kebiasaan membakar sampah plastik, warga juga memperoleh manfaat ekonomi berupa tabungan dari sampah terpilah yang disetorkan serta mempererat gotong royong antarwarga.',
  },
  {
    id: 'faq-6',
    topic: 'Pemilahan',
    question: 'Bagaimana cara menyimpan sampah di rumah agar tidak bau dan tidak tercampur lagi?',
    answer:
      'Pisahkan wadah sejak awal: simpan sampah basah dapur di wadah tertutup dan segera olah menjadi kompos atau pakan ternak. Sementara sampah anorganik yang sudah dibilas dan dikeringkan disimpan dalam karung atau kotak kardus di tempat yang teduh serta bebas hujan.',
  },
  {
    id: 'faq-7',
    topic: 'Aturan Setor',
    question: 'Apakah sampah popok, tisu bekas, dan baterai boleh disetorkan?',
    answer:
      'Tidak boleh. Popok dan tisu bekas merupakan sampah residu yang tidak bisa didaur ulang, sedangkan baterai bekas atau lampu rusak termasuk limbah B3 rumah tangga yang mengandung zat berbahaya. Keduanya harus dipisahkan dari karung setoran Bank Sampah.',
  },
  {
    id: 'faq-8',
    topic: 'Bank Sampah',
    question: 'Di mana saya bisa melihat harga sampah terbaru dan jadwal penyetoran?',
    answer:
      'Karena harga satuan sampah dan jadwal pelayanan mengikuti ketentuan pengelola Bank Sampah setempat dan harga mitra pengepul, website Monggol Resik tidak menampilkan daftar harga dinamis. Anda dapat langsung menghubungi narahubung pengelola melalui menu Kontak & QR untuk informasi jadwal dan ketentuan terbaru.',
  },
  {
    id: 'faq-9',
    topic: 'Persiapan',
    question: 'Apakah botol plastik harus dilepas label dan tutupnya?',
    answer:
      'Melepas tutup botol dan memipihkan badan botol sangat dianjurkan karena tutup dan badan botol memiliki jenis plastik berbeda, sekaligus menghemat ruang karung saat penyimpanan dan pengangkutan. Untuk ketentuan detail pemisahan label merek, Anda dapat menyesuaikan arahan pengurus saat penimbangan.',
  },
];

export const contactInfo = {
  programName: 'Monggol Resik — Bank Sampah Kalurahan Monggol',
  kknCredit: 'Program Kerja KKN Bidang Teknik Informatika bersama Pengelola Bank Sampah Kalurahan Monggol',
  address: 'Kalurahan Monggol, Kapanewon Saptosari, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta',
  locationNote:
    'Penyetoran dilakukan di pos pelayanan Bank Sampah padukuhan / Balai Kalurahan Monggol sesuai jadwal yang ditetapkan pengurus.',
  phoneDisplay: '+62 812-3456-7890 (Narahubung Pengelola)',
  phoneRaw: '6281234567890',
  email: 'banksampah.monggol@gmail.com',
  operationalNote:
    'Jadwal buka pelayanan, daftar jenis sampah yang sedang diterima, serta harga satuan terbaru mengikuti kebijakan pengelola Bank Sampah Kalurahan Monggol.',
};
