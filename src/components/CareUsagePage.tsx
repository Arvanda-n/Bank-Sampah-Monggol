import { useState } from 'react';
import { ArrowRight, CheckSquare, RotateCcw, Square } from 'lucide-react';
import {
  IMAGES,
  careChecklist,
  usageAndCareRules,
  type PageRoute,
} from '../data/bioporiData';
import { ResilientImage } from './ResilientImage';

interface CareUsagePageProps {
  onNavigate: (page: PageRoute) => void;
}

export function CareUsagePage({ onNavigate }: CareUsagePageProps) {
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const allChecked = checkedIds.length === careChecklist.length;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 space-y-14">
      {/* Header & Visual Split */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        <div className="lg:col-span-6 flex flex-col justify-center space-y-4">
          <p className="text-xs font-medium tracking-wide text-stone-500">
            Pengisian Harian hingga Panen Kompos
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 leading-[1.15] [text-wrap:balance]">
            Penggunaan dan Perawatan Biopori Rumah Tangga
          </h1>
          <p className="text-base text-stone-600 leading-relaxed">
            Agar lubang resapan biopori galon bekas tetap bekerja optimal tanpa menimbulkan bau,
            perlu perhatian sederhana pada cara pengisian sampah, keseimbangan bahan basah dan
            kering, serta pemanenan kompos secara berkala.
          </p>
        </div>

        <div className="lg:col-span-6">
          <ResilientImage
            src={IMAGES.hero}
            alt="Tabung biopori galon bekas terpasang rapi di pekarangan beserta bahan organik siap isi"
            className="w-full h-64 sm:h-80 lg:h-full min-h-[280px] object-cover rounded-xl border border-stone-200"
            caption="Pengisian bertahap dengan kombinasi sisa sayuran dapur dan daun kering menjaga kelembapan tetap seimbang."
          />
        </div>
      </section>

      {/* 4 Care & Usage Pillars */}
      <section aria-labelledby="panduan-perawatan-heading" className="space-y-6">
        <div className="space-y-1.5">
          <h2
            id="panduan-perawatan-heading"
            className="font-display text-2xl font-bold text-stone-900"
          >
            Panduan Pengisian, Pemantauan, dan Panen Kompos
          </h2>
          <p className="text-sm text-stone-600">
            Kebiasaan rutin yang membuat biopori berfungsi lancar dalam jangka panjang.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {usageAndCareRules.map((section, index) => (
            <article
              key={section.title}
              className="p-6 rounded-xl bg-white border border-stone-200 space-y-4"
            >
              <div className="flex items-baseline gap-3 pb-3 border-b border-stone-100">
                <span className="font-mono text-xs font-semibold text-emerald-800 tabular-nums">
                  0{index + 1}.
                </span>
                <h3 className="font-display text-lg font-bold text-stone-900">{section.title}</h3>
              </div>
              <ul className="space-y-2.5 text-sm text-stone-700 leading-relaxed list-disc pl-5">
                {section.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Interactive Maintenance Checklist */}
      <section aria-labelledby="checklist-perawatan-heading">
        <div className="rounded-xl bg-white border border-stone-200 p-6 sm:p-8 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200">
            <div className="space-y-1">
              <h2
                id="checklist-perawatan-heading"
                className="font-display text-xl font-bold text-stone-900"
              >
                Daftar Periksa Perawatan Mingguan
              </h2>
              <p className="text-sm text-stone-600">
                Gunakan daftar periksa mandiri ini untuk memastikan kondisi lubang biopori di rumah
                tetap sehat.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="font-mono text-xs font-medium text-stone-600 tabular-nums">
                {checkedIds.length} / {careChecklist.length} terpenuhi
              </span>
              {checkedIds.length > 0 && (
                <button
                  type="button"
                  onClick={() => setCheckedIds([])}
                  className="inline-flex items-center gap-1 text-xs font-medium text-stone-500 hover:text-stone-800 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Ulangi</span>
                </button>
              )}
            </div>
          </div>

          <div className="space-y-2.5">
            {careChecklist.map((item) => {
              const checked = checkedIds.includes(item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => toggleCheck(item.id)}
                  aria-pressed={checked}
                  className={`w-full text-left flex items-start gap-3 p-3.5 rounded-lg border transition-colors cursor-pointer ${
                    checked
                      ? 'bg-emerald-50/70 border-emerald-200 text-stone-900'
                      : 'bg-[#FAF9F6] border-stone-200 text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  {checked ? (
                    <CheckSquare
                      className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                  ) : (
                    <Square
                      className="w-5 h-5 text-stone-400 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                  )}
                  <span className="text-sm leading-relaxed">{item.label}</span>
                </button>
              );
            })}
          </div>

          {allChecked && (
            <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-sm text-emerald-950 font-medium">
              Kondisi biopori Anda sudah terawat dengan baik. Setelah 4–8 minggu, kompos matang
              dapat dipanen dan dimanfaatkan untuk menyuburkan tanaman di pekarangan.
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA to FAQ */}
      <section className="rounded-xl bg-white border border-stone-200 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <p className="font-display text-lg font-semibold text-stone-900">
            Masih ada hal yang ingin ditanyakan?
          </p>
          <p className="text-sm text-stone-600">
            Baca jawaban dari pertanyaan warga yang paling sering muncul pada halaman FAQ.
          </p>
        </div>
        <button
          type="button"
          onClick={() => onNavigate('faq')}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-emerald-800 text-white hover:bg-emerald-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          <span>Buka FAQ Umum</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
}
