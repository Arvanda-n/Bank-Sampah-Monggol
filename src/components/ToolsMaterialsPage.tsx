import { ArrowRight } from 'lucide-react';
import { IMAGES, toolsAndMaterials, type PageRoute } from '../data/bioporiData';
import { ResilientImage } from './ResilientImage';

interface ToolsMaterialsPageProps {
  onNavigate: (page: PageRoute) => void;
}

export function ToolsMaterialsPage({ onNavigate }: ToolsMaterialsPageProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 space-y-14">
      {/* Header & Galon Illustration Split */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        <div className="lg:col-span-6 flex flex-col justify-center space-y-4">
          <p className="text-xs font-medium tracking-wide text-stone-500">
            Perlengkapan Pembuatan Biopori
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 leading-[1.15] [text-wrap:balance]">
            Alat dan Bahan Biopori Galon Bekas
          </h1>
          <p className="text-base text-stone-600 leading-relaxed">
            Pembuatan lubang resapan biopori di rumah tidak membutuhkan peralatan mahal. Bahan
            utamanya memanfaatkan <strong className="text-stone-900">galon bekas 19 liter</strong>{' '}
            sebagai pengganti pipa paralon, dipadukan dengan peralatan rumah tangga dan berkebun yang
            umum tersedia di pekarangan warga.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => onNavigate('pembuatan')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-emerald-800 text-white hover:bg-emerald-900 transition-colors cursor-pointer"
            >
              <span>Lanjut ke Panduan Pembuatan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-6">
          <ResilientImage
            src={IMAGES.galonModifikasi}
            alt="Galon bekas 19 liter yang sudah dilubangi pada sisi dan bagian bawahnya bersama sarung tangan dan sekop kecil"
            className="w-full h-64 sm:h-80 lg:h-full min-h-[300px] object-cover rounded-xl border border-stone-200"
            caption="Contoh galon bekas yang telah dimodifikasi dengan lubang-lubang pada dinding samping dan bawah, beserta perlengkapan pendukung."
          />
        </div>
      </section>

      {/* Complete Tools & Materials Grid */}
      <section aria-labelledby="daftar-alat-bahan-heading" className="space-y-6">
        <div className="max-w-2xl space-y-1.5">
          <h2
            id="daftar-alat-bahan-heading"
            className="font-display text-2xl font-bold text-stone-900"
          >
            Daftar Alat, Bahan, dan Fungsinya
          </h2>
          <p className="text-sm text-stone-600">
            Kenali fungsi setiap komponen dan alat sebelum memulai proses pembuatan di pekarangan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {toolsAndMaterials.map((item) => (
            <article
              key={item.id}
              className="p-6 rounded-xl bg-white border border-stone-200 space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-stone-100">
                <span className="text-xs font-semibold text-emerald-800">{item.category}</span>
                <span className="text-xs text-stone-500">{item.specification}</span>
              </div>
              <h3 className="font-display text-lg font-bold text-stone-900">{item.name}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                <span className="font-semibold text-stone-800">Fungsi: </span>
                {item.functionDesc}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Next Step Banner */}
      <section className="rounded-xl bg-white border border-stone-200 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <p className="font-display text-lg font-semibold text-stone-900">
            Semua alat dan bahan sudah siap?
          </p>
          <p className="text-sm text-stone-600">
            Ikuti enam langkah pembuatan mulai dari menentukan lokasi hingga pemasangan tabung
            galon ke tanah.
          </p>
        </div>
        <button
          type="button"
          onClick={() => onNavigate('pembuatan')}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-emerald-800 text-white hover:bg-emerald-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          <span>Buka Panduan Pembuatan</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
}
