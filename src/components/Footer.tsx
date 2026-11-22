import type { PageRoute } from '../data/wasteData';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-stone-200 bg-white mt-20 no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-stone-200">
          <div className="md:col-span-5 space-y-3">
            <p className="font-display text-lg font-bold text-stone-900">Monggol Resik</p>
            <p className="text-sm text-stone-600 leading-relaxed max-w-md">
              Media edukasi dan informasi digital pengelolaan sampah rumah tangga untuk mendukung
              kegiatan Bank Sampah Kalurahan Monggol, Kapanewon Saptosari, Kabupaten Gunungkidul.
            </p>
            <p className="text-xs text-stone-500">
              Dikembangkan melalui Program Kerja KKN Bidang Teknik Informatika · Website Edukasi Statis
            </p>
          </div>

          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-semibold tracking-wide text-stone-500">
              Halaman Informasi
            </p>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('beranda')}
                  className="text-stone-700 hover:text-emerald-800 hover:underline cursor-pointer"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('jenis-sampah')}
                  className="text-stone-700 hover:text-emerald-800 hover:underline cursor-pointer"
                >
                  Jenis Sampah
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('panduan')}
                  className="text-stone-700 hover:text-emerald-800 hover:underline cursor-pointer"
                >
                  Panduan Pemilahan
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('bank-sampah')}
                  className="text-stone-700 hover:text-emerald-800 hover:underline cursor-pointer"
                >
                  Mengenal Bank Sampah
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('faq')}
                  className="text-stone-700 hover:text-emerald-800 hover:underline cursor-pointer"
                >
                  FAQ Umum
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('kontak')}
                  className="text-stone-700 hover:text-emerald-800 hover:underline cursor-pointer"
                >
                  Kontak &amp; QR Code
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold tracking-wide text-stone-500">
              Akses Cepat Poster
            </p>
            <p className="text-sm text-stone-600 leading-relaxed">
              Unduh atau cetak QR Code website untuk dipasang pada papan informasi padukuhan.
            </p>
            <button
              type="button"
              onClick={() => onNavigate('kontak')}
              className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg border border-stone-300 bg-stone-50 text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer"
            >
              Buka QR Code Website
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-stone-500">
          <p>Monggol Resik · Kalurahan Monggol, Gunungkidul</p>
          <p>
            Jadwal layanan dan harga satuan sampah dikonfirmasi langsung kepada pengelola Bank Sampah.
          </p>
        </div>
      </div>
    </footer>
  );
}
