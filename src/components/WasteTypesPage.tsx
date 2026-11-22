import { useMemo, useState } from 'react';
import { ArrowRight, RotateCcw, Search, X } from 'lucide-react';
import {
  wasteCategories,
  wasteItems,
  type AcceptanceStatus,
  type PageRoute,
  type WasteCategoryId,
} from '../data/wasteData';
import { AcceptanceIndicator, CategoryIndicator } from './CategoryIndicator';

interface WasteTypesPageProps {
  initialSearchQuery?: string;
  onNavigate: (page: PageRoute) => void;
}

export function WasteTypesPage({ initialSearchQuery = '', onNavigate }: WasteTypesPageProps) {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [selectedCategory, setSelectedCategory] = useState<'semua' | WasteCategoryId>('semua');
  const [selectedStatus, setSelectedStatus] = useState<'semua' | AcceptanceStatus>('semua');

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return wasteItems.filter((item) => {
      const matchesCategory =
        selectedCategory === 'semua' || item.categoryId === selectedCategory;
      const matchesStatus =
        selectedStatus === 'semua' || item.acceptedAtBankSampah === selectedStatus;
      const matchesQuery =
        query === '' ||
        item.name.toLowerCase().includes(query) ||
        item.prepInstruction.toLowerCase().includes(query) ||
        item.aliases.some((alias) => alias.toLowerCase().includes(query));

      return matchesCategory && matchesStatus && matchesQuery;
    });
  }, [searchQuery, selectedCategory, selectedStatus]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('semua');
    setSelectedStatus('semua');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 space-y-14">
      {/* Page Header */}
      <header className="max-w-3xl space-y-3">
        <p className="text-xs font-medium tracking-wide text-stone-500">
          Klasifikasi &amp; Kamus Sampah Rumah Tangga
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 [text-wrap:balance]">
          Mengenal Jenis Sampah dan Cara Penanganannya
        </h1>
        <p className="text-base text-stone-600 leading-relaxed">
          Tidak semua sampah dapat disetorkan ke Bank Sampah. Kenali empat kategori utama sampah
          rumah tangga dan gunakan kolom pencarian di bawah untuk mengecek penanganan barang
          tertentu.
        </p>
      </header>

      {/* Interactive Search & Filter Directory */}
      <section aria-labelledby="pencarian-sampah-heading" className="space-y-6">
        <div className="rounded-xl bg-white border border-stone-200 p-5 sm:p-7 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2
                id="pencarian-sampah-heading"
                className="font-display text-xl font-bold text-stone-900"
              >
                Pencarian Jenis Sampah
              </h2>
              <p className="text-sm text-stone-600">
                Cari nama benda untuk melihat kategori, status di Bank Sampah, dan cara
                menanganinya.
              </p>
            </div>
            <p className="text-xs font-medium text-stone-500 tabular-nums">
              Menampilkan {filteredItems.length} dari {wasteItems.length} item
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Search Input */}
            <div className="lg:col-span-5 relative">
              <Search
                className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ketik nama sampah (mis. botol, dus, baterai, jelantah)..."
                aria-label="Cari jenis sampah"
                className="w-full pl-10 pr-10 py-2.5 text-sm rounded-lg border border-stone-300 bg-[#FAF9F6] text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-emerald-800 focus:bg-white transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Bersihkan pencarian"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-700 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Tabs */}
            <div
              role="group"
              aria-label="Filter berdasarkan kategori sampah"
              className="lg:col-span-7 flex flex-wrap items-center gap-1.5"
            >
              {[
                { id: 'semua', label: 'Semua Kategori' },
                { id: 'organik', label: 'Organik' },
                { id: 'anorganik', label: 'Anorganik' },
                { id: 'residu', label: 'Residu' },
                { id: 'b3', label: 'B3' },
              ].map((tab) => {
                const active = selectedCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setSelectedCategory(tab.id as 'semua' | WasteCategoryId)}
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
            </div>
          </div>

          {/* Acceptance Status Filter */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-stone-100">
            <div
              role="group"
              aria-label="Filter status setoran Bank Sampah"
              className="flex flex-wrap items-center gap-2"
            >
              <span className="text-xs text-stone-500 mr-1">Status Setoran:</span>
              {[
                { id: 'semua', label: 'Semua' },
                { id: 'diterima', label: 'Diterima Bank Sampah' },
                { id: 'bersyarat', label: 'Konfirmasi Pengelola' },
                { id: 'tidak_diterima', label: 'Tidak Disetor' },
              ].map((st) => {
                const active = selectedStatus === st.id;
                return (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => setSelectedStatus(st.id as 'semua' | AcceptanceStatus)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-stone-900 text-white'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {st.label}
                  </button>
                );
              })}
            </div>

            {(searchQuery || selectedCategory !== 'semua' || selectedStatus !== 'semua') && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-600 hover:text-stone-900 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Reset Filter</span>
              </button>
            )}
          </div>
        </div>

        {/* Search Results Grid */}
        {filteredItems.length === 0 ? (
          <div className="rounded-xl bg-white border border-stone-200 p-10 text-center space-y-3">
            <p className="font-display text-lg font-semibold text-stone-900">
              Jenis sampah tidak ditemukan
            </p>
            <p className="text-sm text-stone-600 max-w-md mx-auto">
              Coba kata kunci yang lebih umum seperti &ldquo;plastik&rdquo;, &ldquo;kertas&rdquo;,
              &ldquo;baterai&rdquo;, atau atur ulang filter kategori.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-emerald-800 text-white hover:bg-emerald-900 cursor-pointer"
            >
              Tampilkan Semua Sampah
            </button>
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
                    <CategoryIndicator categoryId={item.categoryId} />
                    <AcceptanceIndicator
                      status={item.acceptedAtBankSampah}
                      label={item.acceptanceLabel}
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
                  {item.handlingTip}
                </p>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Detailed 4 Categories Section */}
      <section aria-labelledby="empat-kategori-heading" className="space-y-6">
        <div className="space-y-1.5">
          <h2
            id="empat-kategori-heading"
            className="font-display text-2xl font-bold text-stone-900"
          >
            Penjelasan Lengkap 4 Kategori Sampah
          </h2>
          <p className="text-sm text-stone-600">
            Pahami ciri, contoh nyata di rumah tangga, serta cara penanganan masing-masing kategori.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {wasteCategories.map((cat) => (
            <article
              key={cat.id}
              className="p-6 sm:p-7 rounded-xl bg-white border border-stone-200 space-y-5"
            >
              <div className="space-y-1.5 pb-4 border-b border-stone-200">
                <CategoryIndicator categoryId={cat.id} label={cat.name} />
                <h3 className="font-display text-xl font-bold text-stone-900 pt-1">{cat.name}</h3>
                <p className="text-sm font-medium text-stone-600">{cat.subtitle}</p>
              </div>

              <p className="text-sm text-stone-700 leading-relaxed">{cat.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold tracking-wide text-stone-500">
                    Ciri Utama
                  </h4>
                  <ul className="space-y-1.5 text-xs text-stone-700 leading-relaxed list-disc pl-4">
                    {cat.characteristics.map((c, idx) => (
                      <li key={idx}>{c}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-semibold tracking-wide text-stone-500">
                    Contoh Sehari-hari
                  </h4>
                  <ul className="space-y-1.5 text-xs text-stone-700 leading-relaxed list-disc pl-4">
                    {cat.examples.map((ex, idx) => (
                      <li key={idx}>{ex}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200 space-y-2 text-xs leading-relaxed">
                <p className="text-stone-800">
                  <span className="font-semibold">Penanganan di Rumah: </span>
                  {cat.handlingAtHome}
                </p>
                <p className="text-stone-600">
                  <span className="font-semibold text-stone-800">Ketentuan Bank Sampah: </span>
                  {cat.bankSampahRule}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-xl bg-white border border-stone-200 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="font-display text-lg font-semibold text-stone-900">
              Sudah mengenal jenis sampahnya?
            </p>
            <p className="text-sm text-stone-600">
              Lanjutkan membaca langkah praktis memisahkan, membersihkan, dan menyimpannya di
              rumah.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('panduan')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-emerald-800 text-white hover:bg-emerald-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Lihat Panduan Pemilahan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
