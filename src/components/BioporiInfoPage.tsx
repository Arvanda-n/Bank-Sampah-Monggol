import { ArrowRight } from 'lucide-react';
import {
  IMAGES,
  bioporiBenefits,
  bioporiWorkingPrinciples,
  type PageRoute,
} from '../data/bioporiData';
import { ResilientImage } from './ResilientImage';

interface BioporiInfoPageProps {
  onNavigate: (page: PageRoute) => void;
}

export function BioporiInfoPage({ onNavigate }: BioporiInfoPageProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 space-y-14">
      {/* Header & Intro Split */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        <div className="lg:col-span-6 flex flex-col justify-center space-y-4">
          <p className="text-xs font-medium tracking-wide text-stone-500">
            Dasar Pengetahuan Biopori
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 leading-[1.15] [text-wrap:balance]">
            Mengenal Lubang Resapan Biopori
          </h1>
          <p className="text-base text-stone-600 leading-relaxed">
            Lubang resapan biopori adalah lubang berbentuk silinder yang dibuat secara tegak lurus
            (vertikal) ke dalam tanah untuk mengolah sampah organik rumah tangga sekaligus
            meningkatkan kemampuan tanah dalam menyerap air.
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            Di Kalurahan Monggol, metode ini diterapkan secara sederhana dengan memanfaatkan{' '}
            <strong className="text-stone-900">galon bekas air mineral</strong> yang diberi
            lubang-lubang kecil di bagian sisi dan bawahnya sebagai dinding penahan tanah.
          </p>
        </div>

        <div className="lg:col-span-6">
          <ResilientImage
            src={IMAGES.installationYard}
            alt="Pemasangan tabung galon bekas berlubang ke dalam tanah di pekarangan rumah"
            className="w-full h-64 sm:h-80 lg:h-full min-h-[300px] object-cover rounded-xl border border-stone-200"
            caption="Tabung galon bekas yang telah dilubangi ditanam ke tanah untuk menampung sampah organik dan mengundang pengurai alami."
          />
        </div>
      </section>

      {/* Fungsi dan Manfaat Biopori */}
      <section aria-labelledby="manfaat-biopori-heading" className="space-y-6">
        <div className="max-w-2xl space-y-1.5">
          <h2
            id="manfaat-biopori-heading"
            className="font-display text-2xl font-bold text-stone-900"
          >
            Fungsi dan Manfaat Biopori dalam Pengelolaan Sampah Organik
          </h2>
          <p className="text-sm text-stone-600">
            Empat manfaat utama yang diperoleh rumah tangga saat rutin mengisi lubang biopori.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {bioporiBenefits.map((item) => (
            <article
              key={item.number}
              className="p-6 rounded-xl bg-white border border-stone-200 space-y-2.5"
            >
              <p className="font-mono text-xs font-semibold text-emerald-800 tabular-nums">
                {item.number}.
              </p>
              <h3 className="font-display text-lg font-bold text-stone-900">{item.title}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Prinsip Kerja & Proses Penguraian */}
      <section aria-labelledby="prinsip-kerja-heading" className="space-y-6">
        <div className="max-w-2xl space-y-1.5">
          <h2 id="prinsip-kerja-heading" className="font-display text-2xl font-bold text-stone-900">
            Prinsip Kerja &amp; Proses Penguraian di Dalam Biopori
          </h2>
          <p className="text-sm text-stone-600">
            Bagaimana sisa dapur dan daun kering perlahan berubah menjadi kompos di dalam tanah.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {bioporiWorkingPrinciples.map((item) => (
            <article
              key={item.step}
              className="p-5 rounded-xl bg-white border border-stone-200 space-y-3"
            >
              <p className="font-mono text-xs font-semibold text-emerald-800 tabular-nums">
                Tahap {item.step}
              </p>
              <h3 className="font-display text-base font-bold text-stone-900 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Manfaat Hasil Penguraian sebagai Kompos */}
      <section className="rounded-xl bg-white border border-stone-200 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-3">
          <h2 className="font-display text-2xl font-bold text-stone-900">
            Manfaat Hasil Penguraian sebagai Kompos Pekarangan
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Setelah 4 hingga 8 minggu, sampah organik di dalam tabung galon akan menyusut dan
            berubah menjadi kompos matang berwarna cokelat gelap. Kompos ini kaya nutrisi alami
            untuk menyuburkan tanaman sayur, buah, maupun tanaman hias di pekarangan tanpa perlu
            membeli pupuk kimia tambahan.
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            Selain itu, rongga-rongga di sekitar galon tetap membantu menahan kelembapan tanah dan
            mencegah air hujan tergenang di halaman rumah.
          </p>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-3">
          <button
            type="button"
            onClick={() => onNavigate('sampah-organik')}
            className="w-full inline-flex items-center justify-between px-5 py-3 text-sm font-semibold rounded-lg bg-emerald-800 text-white hover:bg-emerald-900 transition-colors cursor-pointer"
          >
            <span>Lanjut: Mengenal Sampah Organik</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => onNavigate('pembuatan')}
            className="w-full inline-flex items-center justify-between px-5 py-3 text-sm font-semibold rounded-lg border border-stone-300 bg-stone-50 text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer"
          >
            <span>Lihat Panduan Pembuatan Galon Biopori</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
