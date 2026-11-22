import { useMemo, useState } from 'react';
import { ArrowRight, BookOpen, HelpCircle, Landmark, Layers, Search, X } from 'lucide-react';
import {
  IMAGES,
  wasteCategories,
  wasteItems,
  type PageRoute,
} from '../data/wasteData';
import { ResilientImage } from './ResilientImage';
import { AcceptanceIndicator, CategoryIndicator } from './CategoryIndicator';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
  onSearchToCatalog: (query: string) => void;
}

const quickSuggestions = ['Botol plastik', 'Kulit buah', 'Kardus', 'Baterai', 'Popok'];

export function HomePage({ onNavigate, onSearchToCatalog }: HomePageProps) {
  const [quickQuery, setQuickQuery] = useState('');

  const quickResults = useMemo(() => {
    const trimmed = quickQuery.trim().toLowerCase();
    if (!trimmed) return [];
    return wasteItems
      .filter(
        (item) =>
          item.name.toLowerCase().includes(trimmed) ||
          item.aliases.some((alias) => alias.toLowerCase().includes(trimmed))
      )
      .slice(0, 4);
  }, [quickQuery]);

  return (
    <div className="space-y-16 sm:space-y-20">
      {/* Hero Split Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-medium tracking-wide text-stone-500">
                Kalurahan Monggol · Bank Sampah &amp; Edukasi Warga
              </p>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-stone-900 leading-[1.15] [text-wrap:balance]">
                Pilah Sampah dari Rumah, Jaga Kalurahan Monggol Tetap Bersih
              </h1>
            </div>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
              Monggol Resik adalah panduan digital praktis bagi warga Kalurahan Monggol untuk
              mengenali jenis sampah rumah tangga, menyiapkan sampah bersih dari rumah, dan
              berpartisipasi aktif di Bank Sampah setempat.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => onNavigate('panduan')}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-lg bg-emerald-800 text-white hover:bg-emerald-900 transition-colors cursor-pointer"
              >
                <span>Mulai Panduan Memilah</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('bank-sampah')}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-lg border border-stone-300 bg-white text-stone-800 hover:bg-stone-50 transition-colors cursor-pointer"
              >
                <span>Mengenal Bank Sampah</span>
              </button>
            </div>

            <p className="text-xs text-stone-500 pt-2 border-t border-stone-200 max-w-lg leading-relaxed">
              Media informasi terbuka tanpa akun atau login. Jadwal pelayanan dan harga sampah
              dikonfirmasi langsung kepada pengelola Bank Sampah.
            </p>
          </div>

          <div className="lg:col-span-6">
            <ResilientImage
              src={IMAGES.hero}
              alt="Suasana pelayanan dan pemilahan sampah teratur di pos Bank Sampah Kalurahan Monggol"
              className="w-full h-64 sm:h-80 lg:h-full min-h-[320px] object-cover rounded-xl border border-stone-200"
              caption="Ilustrasi kegiatan pemilahan kardus dan botol plastik bersih di Bank Sampah Kalurahan Monggol."
            />
          </div>
        </div>

        {/* Full-Width 4-Column Quick Navigation Strip Below Hero Split */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 pt-10 border-t border-stone-200">
          <button
            type="button"
            onClick={() => onNavigate('jenis-sampah')}
            className="group text-left p-5 rounded-xl bg-white border border-stone-200 hover:border-emerald-700 transition-colors cursor-pointer flex flex-col justify-between gap-3"
          >
            <div className="flex items-center justify-between">
              <Layers className="w-5 h-5 text-emerald-800" aria-hidden="true" />
              <ArrowRight
                className="w-4 h-4 text-stone-400 group-hover:text-emerald-800 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </div>
            <div>
              <h2 className="font-display text-base font-semibold text-stone-900">
                Mengenal Jenis Sampah
              </h2>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Organik, anorganik, residu, hingga B3 rumah tangga beserta kolom pencariannya.
              </p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('panduan')}
            className="group text-left p-5 rounded-xl bg-white border border-stone-200 hover:border-emerald-700 transition-colors cursor-pointer flex flex-col justify-between gap-3"
          >
            <div className="flex items-center justify-between">
              <BookOpen className="w-5 h-5 text-emerald-800" aria-hidden="true" />
              <ArrowRight
                className="w-4 h-4 text-stone-400 group-hover:text-emerald-800 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </div>
            <div>
              <h2 className="font-display text-base font-semibold text-stone-900">
                Panduan Pemilahan
              </h2>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Langkah praktis memisahkan, membersihkan, dan menyimpan sampah agar tidak tercampur.
              </p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('bank-sampah')}
            className="group text-left p-5 rounded-xl bg-white border border-stone-200 hover:border-emerald-700 transition-colors cursor-pointer flex flex-col justify-between gap-3"
          >
            <div className="flex items-center justify-between">
              <Landmark className="w-5 h-5 text-emerald-800" aria-hidden="true" />
              <ArrowRight
                className="w-4 h-4 text-stone-400 group-hover:text-emerald-800 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </div>
            <div>
              <h2 className="font-display text-base font-semibold text-stone-900">
                Mengenal Bank Sampah
              </h2>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Cara kerja penyetoran, jenis barang yang diterima, dan syarat menjadi nasabah.
              </p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('faq')}
            className="group text-left p-5 rounded-xl bg-white border border-stone-200 hover:border-emerald-700 transition-colors cursor-pointer flex flex-col justify-between gap-3"
          >
            <div className="flex items-center justify-between">
              <HelpCircle className="w-5 h-5 text-emerald-800" aria-hidden="true" />
              <ArrowRight
                className="w-4 h-4 text-stone-400 group-hover:text-emerald-800 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </div>
            <div>
              <h2 className="font-display text-base font-semibold text-stone-900">
                FAQ &amp; Kontak
              </h2>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Jawaban pertanyaan warga sehari-hari serta akses QR Code dan kontak pengelola.
              </p>
            </div>
          </button>
        </div>
      </section>

      {/* Quick Waste Lookup Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-xl bg-white border border-stone-200 p-6 sm:p-8 space-y-6">
          <div className="max-w-2xl space-y-2">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 [text-wrap:balance]">
              Cek Cepat Jenis Sampah Rumah Tangga
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Bingung sampah di rumah masuk kategori apa atau boleh disetorkan ke Bank Sampah?
              Ketik nama benda di bawah ini untuk melihat cara penanganannya.
            </p>
          </div>

          <div className="space-y-3">
            <div className="relative max-w-xl">
              <Search
                className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="text"
                value={quickQuery}
                onChange={(e) => setQuickQuery(e.target.value)}
                placeholder="Contoh: botol plastik, kardus, kulit pisang, baterai, popok..."
                aria-label="Cari nama sampah rumah tangga"
                className="w-full pl-10 pr-10 py-3 text-sm rounded-lg border border-stone-300 bg-[#FAF9F6] text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-emerald-800 focus:bg-white transition-colors"
              />
              {quickQuery && (
                <button
                  type="button"
                  onClick={() => setQuickQuery('')}
                  aria-label="Hapus kata kunci"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 text-stone-400 hover:text-stone-700 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-stone-500 mr-1">Coba cari:</span>
              {quickSuggestions.map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => setQuickQuery(term)}
                  className="px-3 py-1.5 text-xs font-medium rounded-md border border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100 hover:border-stone-300 transition-colors cursor-pointer"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>

          {quickQuery.trim() !== '' && (
            <div className="pt-4 border-t border-stone-200 space-y-4">
              {quickResults.length === 0 ? (
                <div className="py-4 text-sm text-stone-600 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <p>
                    Barang &ldquo;{quickQuery}&rdquo; tidak ditemukan pada ringkasan cepat. Cek
                    daftar lengkap atau hubungi pengelola Bank Sampah.
                  </p>
                  <button
                    type="button"
                    onClick={() => onSearchToCatalog(quickQuery)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:underline whitespace-nowrap cursor-pointer"
                  >
                    <span>Buka Katalog Lengkap</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {quickResults.map((item) => (
                      <div
                        key={item.id}
                        className="p-4 rounded-lg border border-stone-200 bg-[#FAF9F6] space-y-2.5"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <CategoryIndicator categoryId={item.categoryId} />
                          <AcceptanceIndicator
                            status={item.acceptedAtBankSampah}
                            label={item.acceptanceLabel}
                          />
                        </div>
                        <h3 className="font-display text-base font-semibold text-stone-900">
                          {item.name}
                        </h3>
                        <p className="text-xs text-stone-700 leading-relaxed">
                          <span className="font-semibold">Persiapan: </span>
                          {item.prepInstruction}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => onSearchToCatalog(quickQuery)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:underline cursor-pointer"
                    >
                      <span>Lihat semua hasil di halaman Mengenal Jenis Sampah</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Why Sort Waste at Home Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <p className="text-xs font-medium tracking-wide text-stone-500">
              Mengapa Dimulai dari Rumah?
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 [text-wrap:balance]">
              Pentingnya Pengelolaan Sampah Rumah Tangga di Kalurahan Monggol
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="p-6 rounded-xl bg-white border border-stone-200 space-y-3">
              <p className="font-mono text-xs font-medium text-emerald-800 tabular-nums">01.</p>
              <h3 className="font-display text-lg font-semibold text-stone-900">
                Mengurangi Kebiasaan Membakar Sampah
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Membakar plastik dan residu menghasilkan asap berbahaya bagi pernapasan keluarga
                dan mencemari pekarangan. Pemilahan mengarahkan plastik bersih menuju daur ulang.
              </p>
            </article>

            <article className="p-6 rounded-xl bg-white border border-stone-200 space-y-3">
              <p className="font-mono text-xs font-medium text-emerald-800 tabular-nums">02.</p>
              <h3 className="font-display text-lg font-semibold text-stone-900">
                Menjaga Nilai Guna Sampah Anorganik
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Botol plastik, kardus, dan kaleng yang tercampur sisa makanan basah menjadi kotor
                dan berbau. Memilah sejak dari dapur menjaga bahan tetap bersih dan layak setor.
              </p>
            </article>

            <article className="p-6 rounded-xl bg-white border border-stone-200 space-y-3">
              <p className="font-mono text-xs font-medium text-emerald-800 tabular-nums">03.</p>
              <h3 className="font-display text-lg font-semibold text-stone-900">
                Sisa Organik Kembali Menyuburkan Tanah
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Sisa sayuran dan dedaunan pekarangan dapat diolah menjadi kompos atau pakan ternak,
                sehingga volume sampah yang keluar dari rumah berkurang jauh.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 4 Waste Categories Overview Strip */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-xl bg-white border border-stone-200 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-5">
            <div className="space-y-1.5">
              <h2 className="font-display text-2xl font-bold text-stone-900">
                Empat Kelompok Sampah Utama
              </h2>
              <p className="text-sm text-stone-600">
                Kenali perbedaannya agar tidak salah wadah saat memilah di rumah.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('jenis-sampah')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:underline whitespace-nowrap cursor-pointer"
            >
              <span>Pelajari Detail &amp; Cari Barang</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {wasteCategories.map((cat) => (
              <div key={cat.id} className="space-y-2.5">
                <CategoryIndicator categoryId={cat.id} label={cat.name} />
                <p className="text-xs font-medium text-stone-800">{cat.subtitle}</p>
                <p className="text-xs text-stone-600 leading-relaxed">{cat.examples[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
