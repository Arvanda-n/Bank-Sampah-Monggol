import { useMemo, useState } from 'react';
import { ArrowRight, ChevronDown, Search, X } from 'lucide-react';
import { faqItems, type FaqItem, type PageRoute } from '../data/bioporiData';

interface FaqPageProps {
  onNavigate: (page: PageRoute) => void;
}

const topics: ('Semua' | FaqItem['topic'])[] = [
  'Semua',
  'Konsep Biopori',
  'Galon Bekas',
  'Sampah Organik',
  'Perawatan & Panen',
];

export function FaqPage({ onNavigate }: FaqPageProps) {
  const [selectedTopic, setSelectedTopic] = useState<'Semua' | FaqItem['topic']>('Semua');
  const [query, setQuery] = useState('');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);

  const filteredFaqs = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqItems.filter((item) => {
      const matchTopic = selectedTopic === 'Semua' || item.topic === selectedTopic;
      const matchQuery =
        q === '' ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q);
      return matchTopic && matchQuery;
    });
  }, [selectedTopic, query]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 space-y-10">
      {/* Page Header */}
      <header className="space-y-3">
        <p className="text-xs font-medium tracking-wide text-stone-500">
          Pertanyaan yang Sering Diajukan
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 [text-wrap:balance]">
          FAQ — Pertanyaan Umum Pengelolaan Sampah Organik &amp; Biopori
        </h1>
        <p className="text-base text-stone-600 leading-relaxed">
          Temukan jawaban praktis seputar biopori, pemanfaatan galon bekas, jenis sampah yang boleh
          dimasukkan, serta cara merawat dan memanen kompos.
        </p>
      </header>

      {/* Search & Topic Filters */}
      <div className="rounded-xl bg-white border border-stone-200 p-5 space-y-4">
        <div className="relative">
          <Search
            className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari pertanyaan (mis. galon, lubang, dipotong, kompos, terurai)..."
            aria-label="Cari pertanyaan FAQ"
            className="w-full pl-10 pr-10 py-2.5 text-sm rounded-lg border border-stone-300 bg-[#FAF9F6] text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-emerald-800 focus:bg-white transition-colors"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Hapus pencarian FAQ"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-700 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div
          role="group"
          aria-label="Filter topik pertanyaan"
          className="flex flex-wrap items-center gap-1.5"
        >
          {topics.map((topic) => {
            const active = selectedTopic === topic;
            return (
              <button
                key={topic}
                type="button"
                onClick={() => setSelectedTopic(topic)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  active
                    ? 'bg-emerald-800 text-white border-emerald-800'
                    : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                {topic}
              </button>
            );
          })}
        </div>
      </div>

      {/* Accordion List */}
      <section aria-label="Daftar Pertanyaan Umum" className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="rounded-xl bg-white border border-stone-200 p-8 text-center space-y-3">
            <p className="font-display text-base font-semibold text-stone-900">
              Pertanyaan tidak ditemukan
            </p>
            <p className="text-sm text-stone-600">
              Coba kata kunci lain atau lihat semua topik pertanyaan.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setSelectedTopic('Semua');
              }}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-800 text-white hover:bg-emerald-900 cursor-pointer"
            >
              Tampilkan Semua FAQ
            </button>
          </div>
        ) : (
          filteredFaqs.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="rounded-xl bg-white border border-stone-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-5 sm:px-6 py-4 flex items-center justify-between gap-4 hover:bg-stone-50/80 transition-colors cursor-pointer"
                >
                  <div className="space-y-1">
                    <span className="text-xs font-medium text-emerald-800">{item.topic}</span>
                    <h2 className="font-display text-base sm:text-lg font-semibold text-stone-900 leading-snug">
                      {item.question}
                    </h2>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-500 shrink-0 transition-transform duration-150 ${
                      isOpen ? 'rotate-180 text-emerald-800' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-2 border-t border-stone-100">
                    <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </section>

      {/* CTA to Tentang Program & QR */}
      <div className="rounded-xl bg-white border border-stone-200 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <p className="font-display text-lg font-semibold text-stone-900">
            Ingin membagikan panduan ini lewat poster atau papan informasi?
          </p>
          <p className="text-sm text-stone-600">
            Lihat informasi program KKN serta unduh atau cetak QR Code website Monggol Resik.
          </p>
        </div>
        <button
          type="button"
          onClick={() => onNavigate('tentang')}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-emerald-800 text-white hover:bg-emerald-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          <span>Tentang Program &amp; QR</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
