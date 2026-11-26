import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { PageRoute } from '../data/bioporiData';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

const primaryNavItems: { id: PageRoute; label: string }[] = [
  { id: 'mengenal-biopori', label: 'Biopori' },
  { id: 'sampah-organik', label: 'Sampah Organik' },
  { id: 'pembuatan', label: 'Pembuatan' },
  { id: 'perawatan', label: 'Perawatan' },
  { id: 'faq', label: 'FAQ' },
];

const mobileNavItems: { id: PageRoute; label: string }[] = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'mengenal-biopori', label: 'Mengenal Biopori' },
  { id: 'sampah-organik', label: 'Mengenal Sampah Organik' },
  { id: 'alat-bahan', label: 'Alat & Bahan' },
  { id: 'pembuatan', label: 'Panduan Pembuatan' },
  { id: 'perawatan', label: 'Penggunaan & Perawatan' },
  { id: 'faq', label: 'FAQ (Pertanyaan Umum)' },
];

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSelect = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-sm border-b border-stone-200 no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleSelect('beranda')}
          className="font-display text-lg sm:text-xl font-bold tracking-tight text-stone-900 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800 cursor-pointer"
        >
          Monggol Resik
        </button>

        {/* Zone 2: 5 concise single-line text nav links */}
        <nav
          aria-label="Navigasi Utama"
          className="hidden md:flex items-center gap-6 text-sm font-medium"
        >
          {primaryNavItems.map((item) => {
            const isActive =
              currentPage === item.id ||
              (item.id === 'pembuatan' && currentPage === 'alat-bahan');
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(item.id)}
                className={`py-1.5 border-b-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800 ${
                  isActive
                    ? 'border-emerald-800 text-stone-900 font-semibold'
                    : 'border-transparent text-stone-600 hover:text-stone-900 hover:border-stone-300'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleSelect('tentang')}
            className={`hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 ${
              currentPage === 'tentang'
                ? 'bg-emerald-950 text-white'
                : 'bg-emerald-800 text-white hover:bg-emerald-900'
            }`}
          >
            Program &amp; QR
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-stone-200 bg-white text-stone-800 hover:bg-stone-50 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 py-3 space-y-1">
          {mobileNavItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(item.id)}
                className={`w-full text-left px-3 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-900 font-semibold'
                    : 'text-stone-700 hover:bg-stone-50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-stone-100">
            <button
              type="button"
              onClick={() => handleSelect('tentang')}
              className="w-full text-center px-4 py-3 rounded-lg text-sm font-medium bg-emerald-800 text-white hover:bg-emerald-900 cursor-pointer"
            >
              Tentang Program &amp; QR Code
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
