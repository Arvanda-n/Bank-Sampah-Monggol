import { useState } from 'react';
import { ArrowRight, CheckSquare, RotateCcw, Square } from 'lucide-react';
import {
  IMAGES,
  householdExamples,
  preparationChecklist,
  sortingSteps,
  type PageRoute,
} from '../data/wasteData';
import { CategoryIndicator } from './CategoryIndicator';
import { ResilientImage } from './ResilientImage';

interface SortingGuidePageProps {
  onNavigate: (page: PageRoute) => void;
}

export function SortingGuidePage({ onNavigate }: SortingGuidePageProps) {
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const allChecked = checkedIds.length === preparationChecklist.length;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 space-y-14">
      {/* Page Header */}
      <header className="max-w-3xl space-y-3">
        <p className="text-xs font-medium tracking-wide text-stone-500">
          Langkah Praktis dari Rumah
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 [text-wrap:balance]">
          Panduan Pemilahan &amp; Persiapan Sampah Sebelum Disetorkan
        </h1>
        <p className="text-base text-stone-600 leading-relaxed">
          Memilah sampah tidak memerlukan tempat mahal. Yang terpenting adalah memisahkan sampah
          basah dari sampah kering sejak awal agar bahan anorganik tetap bersih dan siap diterima
          di Bank Sampah.
        </p>
      </header>

      {/* Visual Guide Split: Separating 4 Groups + Preparing Clean Recyclables */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <div className="p-5 sm:p-6 rounded-xl bg-white border border-stone-200 space-y-4">
          <ResilientImage
            src={IMAGES.sortingHousehold}
            alt="Contoh pemisahan empat kelompok sampah rumah tangga di teras rumah"
            className="w-full aspect-[4/3] object-cover rounded-lg border border-stone-200"
            caption="Gbr. 1 — Pisahkan organik dapur, plastik dan kaleng bersih, kardus kering, serta baterai bekas dalam wadah terpisah."
          />
          <div className="space-y-1.5">
            <h2 className="font-display text-lg font-semibold text-stone-900">
              Cara Memisahkan Organik, Anorganik, Residu, dan B3
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Kunci utamanya adalah jangan menyatukan sisa makanan basah dengan plastik atau kertas
              kering. Sekali kardus terkena kuah sayur atau minyak, seratnya rusak dan tidak dapat
              disetorkan ke Bank Sampah.
            </p>
          </div>
        </div>

        <div className="p-5 sm:p-6 rounded-xl bg-white border border-stone-200 space-y-4">
          <ResilientImage
            src={IMAGES.prepCleanBottles}
            alt="Botol plastik yang sudah dibilas dan dikeringkan dengan tutup terpisah serta kardus terikat rapi"
            className="w-full aspect-[4/3] object-cover rounded-lg border border-stone-200"
            caption="Gbr. 2 — Botol dibilas kering dengan tutup terpisah, kemasan dilipat rata, dan kardus diikat tali."
          />
          <div className="space-y-1.5">
            <h2 className="font-display text-lg font-semibold text-stone-900">
              Membersihkan &amp; Merapikan Sebelum Disetor
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Kosongkan isi botol, bilas ringan bila bekas minuman manis atau susu, lalu tiriskan
              terbalik. Pipihkan botol dan lipat kardus agar mudah dibawa serta menghemat ruang
              penyimpanan di rumah maupun di pos Bank Sampah.
            </p>
          </div>
        </div>
      </section>

      {/* 4-Step Workflow */}
      <section aria-labelledby="langkah-pemilahan-heading" className="space-y-6">
        <div className="space-y-1.5">
          <h2
            id="langkah-pemilahan-heading"
            className="font-display text-2xl font-bold text-stone-900"
          >
            Empat Langkah Pemilahan dan Penyimpanan
          </h2>
          <p className="text-sm text-stone-600">
            Ikuti urutan sederhana ini agar sampah terpilah tidak tercampur kembali sebelum hari
            penyetoran.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortingSteps.map((step) => (
            <article
              key={step.number}
              className="p-6 rounded-xl bg-white border border-stone-200 space-y-4"
            >
              <div className="flex items-baseline gap-3 pb-3 border-b border-stone-100">
                <span className="font-mono text-sm font-semibold text-emerald-800 tabular-nums">
                  {step.number}.
                </span>
                <h3 className="font-display text-lg font-bold text-stone-900">{step.title}</h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">{step.summary}</p>
              <ul className="space-y-2 text-sm text-stone-700 leading-relaxed list-disc pl-5">
                {step.actionItems.map((action, idx) => (
                  <li key={idx}>{action}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Interactive Pre-Deposit Readiness Checklist */}
      <section aria-labelledby="checklist-siap-setor" className="space-y-4">
        <div className="rounded-xl bg-white border border-stone-200 p-6 sm:p-8 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200">
            <div className="space-y-1">
              <h2
                id="checklist-siap-setor"
                className="font-display text-xl font-bold text-stone-900"
              >
                Cek Kesiapan Sampah Sebelum Berangkat Setor
              </h2>
              <p className="text-sm text-stone-600">
                Centang daftar di bawah untuk memastikan karung setoran Anda sudah memenuhi syarat
                kebersihan Bank Sampah.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="font-mono text-xs font-medium text-stone-600 tabular-nums">
                {checkedIds.length} / {preparationChecklist.length} selesai
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
            {preparationChecklist.map((item) => {
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
              Sampah Anda sudah siap disetorkan. Pastikan membawa wadah/karung terpisah menuju pos
              pelayanan Bank Sampah Kalurahan Monggol sesuai jadwal pengurus.
            </div>
          )}
        </div>
      </section>

      {/* Everyday Examples by Room */}
      <section aria-labelledby="contoh-harian-heading" className="space-y-6">
        <div className="space-y-1.5">
          <h2
            id="contoh-harian-heading"
            className="font-display text-2xl font-bold text-stone-900"
          >
            Contoh Pemilahan dalam Kehidupan Sehari-hari
          </h2>
          <p className="text-sm text-stone-600">
            Panduan cepat pembagian sampah yang paling sering muncul di setiap bagian rumah.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {householdExamples.map((group) => (
            <article
              key={group.room}
              className="p-6 rounded-xl bg-white border border-stone-200 space-y-4"
            >
              <h3 className="font-display text-lg font-bold text-stone-900 pb-3 border-b border-stone-200">
                {group.room}
              </h3>
              <div className="space-y-4">
                {group.items.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <CategoryIndicator categoryId={item.categoryId} label={item.categoryLabel} />
                    <p className="text-sm font-semibold text-stone-900">{item.name}</p>
                    <p className="text-xs text-stone-600 leading-relaxed">{item.action}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-xl bg-white border border-stone-200 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="font-display text-lg font-semibold text-stone-900">
              Bagaimana cara kerja penyetorannya di Bank Sampah?
            </p>
            <p className="text-sm text-stone-600">
              Pelajari alur penimbangan, pencatatan buku tabungan, dan cara menjadi nasabah.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('bank-sampah')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-emerald-800 text-white hover:bg-emerald-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Mengenal Bank Sampah</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
