import { useMemo, useState } from 'react';
import { AlertTriangle, ArrowRight, RotateCcw, Search, X } from 'lucide-react';
import {
  IMAGES,
  notRecommendedList,
  organicWasteCategories,
  organicWasteItems,
  type BioporiSuitability,
  type PageRoute,
} from '../data/bioporiData';
import { ResilientImage } from './ResilientImage';
import { SuitabilityBadge } from './SuitabilityBadge';

interface OrganicWastePageProps {
  initialSearchQuery?: string;
  onNavigate: (page: PageRoute) => void;
}

export function OrganicWastePage({
  initialSearchQuery = '',
  onNavigate,
}: OrganicWastePageProps) {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [selectedSuitability, setSelectedSuitability] = useState<'semua' | BioporiSuitability>(
    'semua'
  );

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return organicWasteItems.filter((item) => {
      const matchStatus =
        selectedSuitability === 'semua' || item.suitability === selectedSuitability;
      const matchQuery =
        q === '' ||
        item.name.toLowerCase().includes(q) ||
        item.prepInstruction.toLowerCase().includes(q) ||
        item.aliases.some((alias) => alias.toLowerCase().includes(q));
      return matchStatus && matchQuery;
    });
  }, [searchQuery, selectedSuitability]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 space-y-14">
      {/* Page Header & Image Split */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        <div className="lg:col-span-6 flex flex-col justify-center space-y-4">
          <p className="text-xs font-medium tracking-wide text-stone-500">
            Bahan Pengisi Biopori
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 leading-[1.15] [text-wrap:balance]">
            Mengenal Sampah Organik Rumah Tangga
          </h1>
          <p className="text-base text-stone-600 leading-relaxed">
            Sampah organik adalah sampah yang berasal dari sisa makhluk hidup (tumbuhan maupun bahan
            nabati dapur) yang mudah membusuk dan terurai secara alami oleh mikroorganisme dan
            cacing tanah.
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            Agar proses penguraian di dalam tabung galon biopori berjalan cepat dan tidak berbau,
            penting memadukan sampah organik basah (hijau) dengan sampah organik kering (cokelat),
            serta menghindari bahan yang sulit terurai.
          </p>
        </div>

        <div className="lg:col-span-6">
          <ResilientImage
            src={IMAGES.organicMaterials}
            alt="Contoh bahan organik pengisi biopori berupa potongan sayur, kulit buah, cangkang telur, dan daun kering"
            className="w-full h-64 sm:h-80 lg:h-full min-h-[300px] object-cover rounded-xl border border-stone-200"
            caption="Kombinasi ideal pengisi biopori: potongan sayur, kulit buah, cangkang telur remuk, dan daun kering."
          />
        </div>
      </section>

      {/* Two Organic Waste Types */}
      <section aria-labelledby="jenis-organik-heading" className="space-y-6">
        <div className="space-y-1.5">
          <h2 id="jenis-organik-heading" className="font-display text-2xl font-bold text-stone-900">
            Dua Kelompok Sampah Organik untuk Biopori
          </h2>
          <p className="text-sm text-stone-600">
            Menyeimbangkan unsur basah dan kering mencegah biopori berbau serta mempercepat
            terbentuknya kompos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {organicWasteCategories.map((cat) => (
            <article
              key={cat.id}
              className="p-6 rounded-xl bg-white border border-stone-200 space-y-4"
            >
              <div className="space-y-1 pb-3 border-b border-stone-200">
                <h3 className="font-display text-xl font-bold text-stone-900">{cat.title}</h3>
                <p className="text-sm text-stone-600">{cat.subtitle}</p>
              </div>
              <ul className="space-y-2 text-sm text-stone-700 list-disc pl-5 leading-relaxed">
                {cat.examples.map((ex, idx) => (
                  <li key={idx}>{ex}</li>
                ))}
              </ul>
              <p className="text-xs text-stone-600 pt-3 border-t border-stone-100 leading-relaxed">
                <span className="font-semibold text-stone-800">Cara Persiapan: </span>
                {cat.note}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Searchable Checker Directory */}
      <section aria-labelledby="daftar-bahan-heading" className="space-y-6">
        <div className="rounded-xl bg-white border border-stone-200 p-5 sm:p-7 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2
                id="daftar-bahan-heading"
                className="font-display text-xl font-bold text-stone-900"
              >
                Panduan Contoh Bahan Masuk Biopori
              </h2>
              <p className="text-sm text-stone-600">
                Cari nama bahan untuk mengecek kesesuaian dan cara mempersiapkannya sebelum
                dimasukkan ke tabung galon.
              </p>
            </div>
            <p className="text-xs font-medium text-stone-500 tabular-nums">
              {filteredItems.length} dari {organicWasteItems.length} bahan
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            <div className="lg:col-span-6 relative">
              <Search
                className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari bahan (mis. sayur, daun, telur, nasi, tulang, plastik)..."
                aria-label="Cari bahan sampah organik"
                className="w-full pl-10 pr-10 py-2.5 text-sm rounded-lg border border-stone-300 bg-[#FAF9F6] text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-emerald-800 focus:bg-white transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Hapus pencarian"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-700 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="lg:col-span-6 flex flex-wrap items-center gap-1.5">
              {[
                { id: 'semua', label: 'Semua' },
                { id: 'dianjurkan', label: 'Dianjurkan' },
                { id: 'bersyarat', label: 'Terbatas' },
                { id: 'tidak_dianjurkan', label: 'Tidak Dianjurkan' },
              ].map((tab) => {
                const active = selectedSuitability === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() =>
                      setSelectedSuitability(tab.id as 'semua' | BioporiSuitability)
                    }
                    className={`px-3 py-2 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-emerald-800 text-white border-emerald-800'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}

              {(searchQuery || selectedSuitability !== 'semua') && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedSuitability('semua');
                  }}
                  className="inline-flex items-center gap-1 px-2.5 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {filteredItems.length === 0 ? (
          <div className="rounded-xl bg-white border border-stone-200 p-8 text-center space-y-3">
            <p className="font-display text-base font-semibold text-stone-900">
              Bahan tidak ditemukan
            </p>
            <p className="text-sm text-stone-600">
              Coba kata kunci lain atau tampilkan semua daftar bahan.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="p-5 rounded-xl bg-white border border-stone-200 flex flex-col justify-between gap-3"
              >
                <div className="space-y-2.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-medium text-stone-500">{item.wasteType}</span>
                    <SuitabilityBadge
                      suitability={item.suitability}
                      label={item.suitabilityLabel}
                    />
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-semibold text-stone-900">
                    {item.name}
                  </h3>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    <span className="font-semibold text-stone-900">Persiapan: </span>
                    {item.prepInstruction}
                  </p>
                </div>
                <p className="text-xs text-stone-500 pt-2.5 border-t border-stone-100 leading-relaxed">
                  {item.reason}
                </p>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Not Recommended & Preparation Summary */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 p-6 rounded-xl bg-white border border-stone-200 space-y-4">
          <div className="flex items-center gap-2 text-red-800">
            <AlertTriangle className="w-5 h-5 shrink-0" aria-hidden="true" />
            <h2 className="font-display text-xl font-bold text-stone-900">
              Jenis Sampah yang Tidak Dianjurkan Masuk Biopori
            </h2>
          </div>
          <div className="space-y-3">
            {notRecommendedList.map((entry, idx) => (
              <div key={idx} className="pb-3 border-b border-stone-100 last:border-b-0 last:pb-0">
                <p className="text-sm font-semibold text-stone-900">{entry.item}</p>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">{entry.reason}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 p-6 rounded-xl bg-white border border-stone-200 flex flex-col justify-between gap-6">
          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-stone-900">
              Cara Mempersiapkan Sampah Organik Sebelum Digunakan
            </h2>
            <ol className="space-y-2.5 text-sm text-stone-700 list-decimal pl-5 leading-relaxed">
              <li>
                Pisahkan sampah dapur dari plastik pembungkus, tali rafia, karet gelang, atau
                tusuk gigi.
              </li>
              <li>
                Tiriskan sisa kuah berlebih atau air cucian agar isi tabung tidak terlalu basah.
              </li>
              <li>
                Potong atau cacah sayuran, kulit buah, dan daun lebar menjadi potongan kecil (±2–4
                cm) supaya cepat terurai.
              </li>
              <li>
                Siapkan wadah kecil berisi daun kering di dekat lokasi biopori sebagai penutup
                lapisan sampah basah.
              </li>
            </ol>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('alat-bahan')}
            className="w-full inline-flex items-center justify-between px-5 py-3 text-sm font-semibold rounded-lg bg-emerald-800 text-white hover:bg-emerald-900 transition-colors cursor-pointer"
          >
            <span>Lanjut: Alat &amp; Bahan Pembuatan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
