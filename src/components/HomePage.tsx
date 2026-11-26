import { useMemo, useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  Droplets,
  HelpCircle,
  Leaf,
  Search,
  Sprout,
  Wrench,
  X,
} from 'lucide-react';
import {
  IMAGES,
  organicWasteItems,
  type PageRoute,
} from '../data/bioporiData';
import { ResilientImage } from './ResilientImage';
import { SuitabilityBadge } from './SuitabilityBadge';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
  onSearchOrganicWaste: (query: string) => void;
}

const quickSuggestions = ['Kulit pisang', 'Sayuran', 'Daun kering', 'Nasi', 'Minyak', 'Plastik'];

export function HomePage({ onNavigate, onSearchOrganicWaste }: HomePageProps) {
  const [quickQuery, setQuickQuery] = useState('');

  const quickResults = useMemo(() => {
    const trimmed = quickQuery.trim().toLowerCase();
    if (!trimmed) return [];
    return organicWasteItems
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
                Kalurahan Monggol · Kapanewon Saptosari · Gunungkidul
              </p>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-stone-900 leading-[1.15] [text-wrap:balance]">
                Olah Sampah Organik dari Rumah dengan Biopori Galon Bekas
              </h1>
            </div>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
              Monggol Resik adalah panduan digital praktis bagi masyarakat Kalurahan Monggol untuk
              memanfaatkan lubang resapan biopori dari galon bekas, sehingga sisa dapur dan daun
              pekarangan berubah menjadi kompos penyubur tanah.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => onNavigate('pembuatan')}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-lg bg-emerald-800 text-white hover:bg-emerald-900 transition-colors cursor-pointer"
              >
                <span>Panduan Pembuatan Biopori</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('mengenal-biopori')}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-lg border border-stone-300 bg-white text-stone-800 hover:bg-stone-50 transition-colors cursor-pointer"
              >
                <span>Mengenal Biopori</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <ResilientImage
              src={IMAGES.hero}
              alt="Lubang resapan biopori memanfaatkan galon bekas yang ditanam di pekarangan rumah Kalurahan Monggol"
              className="w-full h-64 sm:h-80 lg:h-full min-h-[320px] object-cover rounded-xl border border-stone-200"
              caption="Pemanfaatan galon bekas berlubang sebagai tabung biopori di pekarangan rumah warga."
            />
          </div>
        </div>

        {/* Full-Width Educational Navigation Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 pt-10 border-t border-stone-200">
          <button
            type="button"
            onClick={() => onNavigate('mengenal-biopori')}
            className="group text-left p-5 rounded-xl bg-white border border-stone-200 hover:border-emerald-700 transition-colors cursor-pointer flex flex-col justify-between gap-3"
          >
            <div className="flex items-center justify-between">
              <Droplets className="w-5 h-5 text-emerald-800" aria-hidden="true" />
              <ArrowRight
                className="w-4 h-4 text-stone-400 group-hover:text-emerald-800 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </div>
            <div>
              <h2 className="font-display text-base font-semibold text-stone-900">
                Mengenal Biopori
              </h2>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Pengertian lubang resapan biopori, prinsip kerja, proses penguraian, dan manfaat kompos.
              </p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('sampah-organik')}
            className="group text-left p-5 rounded-xl bg-white border border-stone-200 hover:border-emerald-700 transition-colors cursor-pointer flex flex-col justify-between gap-3"
          >
            <div className="flex items-center justify-between">
              <Leaf className="w-5 h-5 text-emerald-800" aria-hidden="true" />
              <ArrowRight
                className="w-4 h-4 text-stone-400 group-hover:text-emerald-800 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </div>
            <div>
              <h2 className="font-display text-base font-semibold text-stone-900">
                Mengenal Sampah Organik
              </h2>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Jenis sampah yang boleh dan tidak dianjurkan masuk biopori serta cara mempersiapkannya.
              </p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('alat-bahan')}
            className="group text-left p-5 rounded-xl bg-white border border-stone-200 hover:border-emerald-700 transition-colors cursor-pointer flex flex-col justify-between gap-3"
          >
            <div className="flex items-center justify-between">
              <Wrench className="w-5 h-5 text-emerald-800" aria-hidden="true" />
              <ArrowRight
                className="w-4 h-4 text-stone-400 group-hover:text-emerald-800 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </div>
            <div>
              <h2 className="font-display text-base font-semibold text-stone-900">
                Alat &amp; Bahan
              </h2>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Daftar perlengkapan sederhana seperti galon bekas, pelubang galon, penggali tanah, dan pengisi.
              </p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('pembuatan')}
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
                Panduan Pembuatan Biopori
              </h2>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Enam tahapan pembuatan mulai dari memilih lokasi, melubangi galon, hingga pengisian awal.
              </p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('perawatan')}
            className="group text-left p-5 rounded-xl bg-white border border-stone-200 hover:border-emerald-700 transition-colors cursor-pointer flex flex-col justify-between gap-3"
          >
            <div className="flex items-center justify-between">
              <Sprout className="w-5 h-5 text-emerald-800" aria-hidden="true" />
              <ArrowRight
                className="w-4 h-4 text-stone-400 group-hover:text-emerald-800 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </div>
            <div>
              <h2 className="font-display text-base font-semibold text-stone-900">
                Penggunaan &amp; Perawatan
              </h2>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Cara mengisi harian, menjaga kelembapan, memantau penguraian, dan memanen kompos.
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
                FAQ &amp; Tentang Program
              </h2>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Tanya jawab seputar biopori galon bekas serta dokumentasi dan QR Code program KKN.
              </p>
            </div>
          </button>
        </div>
      </section>

      {/* Quick Waste Suitability Checker */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-xl bg-white border border-stone-200 p-6 sm:p-8 space-y-6">
          <div className="max-w-2xl space-y-2">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 [text-wrap:balance]">
              Cek Cepat: Bolehkah Masuk ke Biopori?
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Ketik nama sisa dapur atau sampah pekarangan untuk mengetahui apakah bahan tersebut
              aman dimasukkan ke tabung biopori galon bekas dan bagaimana cara mempersiapkannya.
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
                placeholder="Contoh: kulit pisang, sisa sayur, daun kering, nasi, minyak, plastik..."
                aria-label="Cek bahan yang boleh dimasukkan ke biopori"
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
              <span className="text-xs text-stone-500 mr-1">Contoh cepat:</span>
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
                    Bahan &ldquo;{quickQuery}&rdquo; belum ditemukan pada ringkasan cepat. Buka
                    panduan lengkap Mengenal Sampah Organik untuk melihat kriterianya.
                  </p>
                  <button
                    type="button"
                    onClick={() => onSearchOrganicWaste(quickQuery)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:underline whitespace-nowrap cursor-pointer"
                  >
                    <span>Buka Daftar Lengkap</span>
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
                          <span className="text-xs font-medium text-stone-600">
                            {item.wasteType}
                          </span>
                          <SuitabilityBadge
                            suitability={item.suitability}
                            label={item.suitabilityLabel}
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
                      onClick={() => onSearchOrganicWaste(quickQuery)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:underline cursor-pointer"
                    >
                      <span>Lihat semua panduan di halaman Mengenal Sampah Organik</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Household Organic Waste Problem & Biopori Solution */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <p className="text-xs font-medium tracking-wide text-stone-500">
              Mengapa Dimulai dari Pekarangan Rumah?
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 [text-wrap:balance]">
              Mengatasi Masalah Sampah Organik Rumah Tangga dengan Cara Sederhana
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="p-6 rounded-xl bg-white border border-stone-200 space-y-3">
              <p className="font-mono text-xs font-medium text-emerald-800 tabular-nums">01.</p>
              <h3 className="font-display text-lg font-semibold text-stone-900">
                Mengurangi Bau &amp; Pembakaran Sampah
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Sisa sayuran, kulit buah, dan guguran daun sering menumpuk, membusuk di tempat
                sampah terbuka, atau dibakar di halaman. Biopori menampungnya secara rapi di dalam
                tanah.
              </p>
            </article>

            <article className="p-6 rounded-xl bg-white border border-stone-200 space-y-3">
              <p className="font-mono text-xs font-medium text-emerald-800 tabular-nums">02.</p>
              <h3 className="font-display text-lg font-semibold text-stone-900">
                Memanfaatkan Galon Bekas Rumah Tangga
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Alih-alih membeli pipa besar, galon bekas 19 liter yang diberi lubang di sisi dan
                bawah dapat menjadi tabung biopori yang kuat, hemat biaya, dan mudah dibuat warga.
              </p>
            </article>

            <article className="p-6 rounded-xl bg-white border border-stone-200 space-y-3">
              <p className="font-mono text-xs font-medium text-emerald-800 tabular-nums">03.</p>
              <h3 className="font-display text-lg font-semibold text-stone-900">
                Menghasilkan Kompos &amp; Resapan Air
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Cacing dan mikroorganisme tanah mengubah sisa dapur menjadi kompos penyubur tanaman
                sekaligus menciptakan pori-pori alami yang membantu tanah menyerap air hujan.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
