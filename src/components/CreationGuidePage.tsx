import { AlertTriangle, ArrowRight } from 'lucide-react';
import { IMAGES, creationSteps, type PageRoute } from '../data/bioporiData';
import { ResilientImage } from './ResilientImage';

interface CreationGuidePageProps {
  onNavigate: (page: PageRoute) => void;
}

export function CreationGuidePage({ onNavigate }: CreationGuidePageProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 space-y-14">
      {/* Header */}
      <header className="max-w-3xl space-y-3">
        <p className="text-xs font-medium tracking-wide text-stone-500">
          Tahapan Praktis Pembuatan
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 [text-wrap:balance]">
          Panduan Pembuatan Biopori Menggunakan Galon Bekas
        </h1>
        <p className="text-base text-stone-600 leading-relaxed">
          Ikuti enam tahapan terstruktur berikut ini untuk membuat dan memasang tabung biopori dari
          galon bekas secara aman di pekarangan rumah. Pastikan perlengkapan sudah disiapkan
          terlebih dahulu.
        </p>
        <div className="pt-1">
          <button
            type="button"
            onClick={() => onNavigate('alat-bahan')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:underline cursor-pointer"
          >
            <span>Lihat Daftar Lengkap Alat &amp; Bahan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Two-Image Instructional Comparison */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <div className="p-5 sm:p-6 rounded-xl bg-white border border-stone-200 space-y-4">
          <ResilientImage
            src={IMAGES.galonModifikasi}
            alt="Modifikasi galon bekas dengan lubang-lubang kecil merata di sisi samping dan bawah"
            className="w-full aspect-[4/3] object-cover rounded-lg border border-stone-200"
            caption="Tahap Modifikasi Galon — Bagian leher atas dibuka untuk mulut pengisian, sedangkan dinding samping dan dasar galon dilubangi berjarak 5–7 cm."
          />
        </div>

        <div className="p-5 sm:p-6 rounded-xl bg-white border border-stone-200 space-y-4">
          <ResilientImage
            src={IMAGES.installationYard}
            alt="Proses memasukkan galon bekas berlubang ke dalam lubang galian tanah di pekarangan rumah"
            className="w-full aspect-[4/3] object-cover rounded-lg border border-stone-200"
            caption="Tahap Pemasangan di Pekarangan — Galon ditanam vertikal di lubang galian, celah tanah dipadatkan, lalu diisi lapisan daun kering dan sisa sayur."
          />
        </div>
      </section>

      {/* 6 Creation Steps */}
      <section aria-labelledby="enam-tahap-heading" className="space-y-6">
        <div className="space-y-1.5">
          <h2 id="enam-tahap-heading" className="font-display text-2xl font-bold text-stone-900">
            Enam Tahapan Pembuatan Biopori Galon Bekas
          </h2>
          <p className="text-sm text-stone-600">
            Urutan kerja dari persiapan hingga pengisian sampah organik pertama kali.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {creationSteps.map((step) => (
            <article
              key={step.number}
              className="p-6 rounded-xl bg-white border border-stone-200 flex flex-col justify-between gap-4"
            >
              <div className="space-y-3">
                <div className="flex items-baseline gap-3 pb-3 border-b border-stone-100">
                  <span className="font-mono text-sm font-semibold text-emerald-800 tabular-nums">
                    {step.number}.
                  </span>
                  <h3 className="font-display text-lg font-bold text-stone-900">{step.title}</h3>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed">{step.summary}</p>

                <ul className="space-y-2 text-sm text-stone-700 leading-relaxed list-disc pl-5">
                  {step.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>

              {step.safetyNote && (
                <div className="flex items-start gap-2.5 p-3.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-950 leading-relaxed">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-amber-800 mt-0.5" aria-hidden="true" />
                  <p>
                    <span className="font-semibold">Perhatian Keselamatan: </span>
                    {step.safetyNote}
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Next Step Banner */}
      <section className="rounded-xl bg-white border border-stone-200 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <p className="font-display text-lg font-semibold text-stone-900">
            Tabung biopori sudah terpasang?
          </p>
          <p className="text-sm text-stone-600">
            Pelajari cara memasukkan sampah harian, memantau penguraian, dan memanen kompos matang.
          </p>
        </div>
        <button
          type="button"
          onClick={() => onNavigate('perawatan')}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-emerald-800 text-white hover:bg-emerald-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          <span>Penggunaan &amp; Perawatan</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
}
