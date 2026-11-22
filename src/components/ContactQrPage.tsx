import { useRef, useState } from 'react';
import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react';
import {
  Check,
  Copy,
  Download,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Printer,
} from 'lucide-react';
import { contactInfo } from '../data/wasteData';

const whatsappTopics = [
  {
    id: 'jadwal',
    label: 'Tanya Jadwal Penyetoran',
    message:
      'Halo Pengurus Bank Sampah Kalurahan Monggol, saya ingin menanyakan jadwal penyetoran sampah terdekat.',
  },
  {
    id: 'daftar',
    label: 'Daftar Menjadi Nasabah',
    message:
      'Halo Pengurus Bank Sampah Kalurahan Monggol, saya ingin menanyakan cara mendaftar menjadi nasabah baru.',
  },
  {
    id: 'jenis',
    label: 'Konfirmasi Jenis & Harga Sampah',
    message:
      'Halo Pengurus Bank Sampah Kalurahan Monggol, saya ingin mengonfirmasi jenis sampah yang diterima serta harga terbarunya.',
  },
];

export function ContactQrPage() {
  const defaultUrl =
    typeof window !== 'undefined' ? window.location.origin : 'https://monggol-resik.kalurahan.id';
  const [qrUrl, setQrUrl] = useState(defaultUrl);
  const [copiedField, setCopiedField] = useState<'phone' | 'url' | null>(null);
  const [selectedTopicId, setSelectedTopicId] = useState(whatsappTopics[0].id);
  const canvasWrapperRef = useRef<HTMLDivElement>(null);

  const selectedTopic =
    whatsappTopics.find((t) => t.id === selectedTopicId) ?? whatsappTopics[0];
  const whatsappUrl = `https://wa.me/${contactInfo.phoneRaw}?text=${encodeURIComponent(
    selectedTopic.message
  )}`;

  const handleCopy = async (text: string, field: 'phone' | 'url') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      setCopiedField(null);
    }
  };

  const handleDownloadQrPng = () => {
    const canvas = canvasWrapperRef.current?.querySelector('canvas');
    if (!canvas) return;
    const pngUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = pngUrl;
    link.download = 'qr-code-monggol-resik.png';
    link.click();
  };

  const handlePrintPoster = () => {
    window.print();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 space-y-12">
      {/* Page Header */}
      <header className="max-w-3xl space-y-3 no-print">
        <p className="text-xs font-medium tracking-wide text-stone-500">
          Tentang Program, Narahubung &amp; Media Sosialisasi
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 [text-wrap:balance]">
          Tentang Monggol Resik, Kontak Pengelola &amp; QR Code Website
        </h1>
        <p className="text-base text-stone-600 leading-relaxed">
          Informasi mengenai program Bank Sampah Kalurahan Monggol, kontak narahubung pengelola,
          serta QR Code siap cetak untuk ditempel pada poster dan papan informasi padukuhan.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: About & Contact Pengelola */}
        <div className="lg:col-span-7 space-y-6 no-print">
          {/* Program Info */}
          <section className="p-6 sm:p-7 rounded-xl bg-white border border-stone-200 space-y-4">
            <h2 className="font-display text-xl font-bold text-stone-900">
              Tentang Program Monggol Resik
            </h2>
            <p className="text-sm text-stone-700 leading-relaxed">
              <strong>Monggol Resik</strong> merupakan media edukasi dan informasi digital yang
              dikembangkan melalui Program Kerja KKN Bidang Teknik Informatika untuk mendukung
              kegiatan Bank Sampah di Kalurahan Monggol.
            </p>
            <p className="text-sm text-stone-600 leading-relaxed">
              Website ini dirancang ringan sebagai situs statis tanpa login maupun basis data,
              sehingga mudah diakses lewat ponsel warga serta tetap dapat dimanfaatkan secara
              berkelanjutan oleh masyarakat dan pengelola setelah masa KKN berakhir.
            </p>
            <div className="pt-3 border-t border-stone-100 text-xs text-stone-500 leading-relaxed">
              Catatan batasan layanan: Website ini tidak mencatat transaksi penyetoran atau saldo
              tabungan nasabah. Seluruh pencatatan tabungan dikelola langsung melalui buku tabungan
              oleh pengurus Bank Sampah Kalurahan Monggol.
            </div>
          </section>

          {/* Location & Operational Note */}
          <section className="p-6 sm:p-7 rounded-xl bg-white border border-stone-200 space-y-4">
            <h2 className="font-display text-xl font-bold text-stone-900">
              Lokasi &amp; Informasi Penyetoran
            </h2>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" aria-hidden="true" />
              <div className="space-y-1">
                <p className="text-sm font-semibold text-stone-900">{contactInfo.address}</p>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {contactInfo.locationNote}
                </p>
              </div>
            </div>
            <p className="text-xs text-stone-600 bg-[#FAF9F6] border border-stone-200 rounded-lg p-3.5 leading-relaxed">
              {contactInfo.operationalNote}
            </p>
          </section>

          {/* Contact Pengelola */}
          <section className="p-6 sm:p-7 rounded-xl bg-white border border-stone-200 space-y-5">
            <div className="space-y-1">
              <h2 className="font-display text-xl font-bold text-stone-900">
                Kontak Pengelola Bank Sampah
              </h2>
              <p className="text-sm text-stone-600">
                Gunakan tombol di bawah untuk mengonfirmasi jadwal penyetoran, jenis barang yang
                diterima, atau pendaftaran nasabah baru.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-lg border border-stone-200 bg-[#FAF9F6] flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Phone className="w-4 h-4 text-emerald-800 shrink-0" aria-hidden="true" />
                  <span className="text-xs sm:text-sm font-mono text-stone-800 truncate tabular-nums">
                    +62 812-3456-7890
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('+6281234567890', 'phone')}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-md border border-stone-200 bg-white text-stone-700 hover:bg-stone-100 shrink-0 cursor-pointer"
                >
                  {copiedField === 'phone' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-800" />
                      <span>Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-3.5 rounded-lg border border-stone-200 bg-[#FAF9F6] flex items-center gap-2.5 min-w-0">
                <Mail className="w-4 h-4 text-emerald-800 shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-xs sm:text-sm text-stone-800 hover:underline truncate"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Quick WhatsApp Topic Selector */}
            <div className="space-y-3 pt-2 border-t border-stone-100">
              <p className="text-xs font-medium text-stone-600">
                Pilih keperluan pesan WhatsApp ke narahubung:
              </p>
              <div className="flex flex-wrap gap-2">
                {whatsappTopics.map((topic) => {
                  const active = selectedTopicId === topic.id;
                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => setSelectedTopicId(topic.id)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                        active
                          ? 'bg-stone-900 text-white border-stone-900'
                          : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      {topic.label}
                    </button>
                  );
                })}
              </div>

              <p className="text-xs text-stone-600 italic bg-stone-50 border border-stone-200 rounded-lg p-3 leading-relaxed">
                &ldquo;{selectedTopic.message}&rdquo;
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-emerald-800 text-white hover:bg-emerald-900 transition-colors"
              >
                <MessageSquare className="w-4 h-4" aria-hidden="true" />
                <span>Kirim Pesan via WhatsApp</span>
              </a>
            </div>
          </section>
        </div>

        {/* Right Column: QR Code Website & Printable Poster */}
        <aside className="lg:col-span-5 space-y-5">
          <div className="p-6 sm:p-8 rounded-xl bg-white border border-stone-200 text-center space-y-5 print-only-poster">
            <div className="space-y-1">
              <p className="text-xs font-medium tracking-wide text-emerald-800">
                Bank Sampah Kalurahan Monggol
              </p>
              <h2 className="font-display text-2xl font-bold text-stone-900">Monggol Resik</h2>
              <p className="text-xs text-stone-600">
                Pindai QR Code ini untuk membuka panduan pemilahan sampah &amp; informasi Bank
                Sampah di ponsel Anda.
              </p>
            </div>

            <div className="inline-flex p-4 rounded-xl bg-white border border-stone-200 mx-auto">
              <QRCodeSVG
                value={qrUrl || defaultUrl}
                size={200}
                bgColor="#FFFFFF"
                fgColor="#1C1917"
                level="M"
              />
            </div>

            {/* Hidden high-resolution canvas for PNG download */}
            <div ref={canvasWrapperRef} className="hidden" aria-hidden="true">
              <QRCodeCanvas
                value={qrUrl || defaultUrl}
                size={512}
                bgColor="#FFFFFF"
                fgColor="#1C1917"
                level="M"
                includeMargin={true}
              />
            </div>

            <p className="font-mono text-xs text-stone-500 break-all px-2">
              {qrUrl || defaultUrl}
            </p>

            {/* Controls for KKN / Pengelola (Hidden when printing) */}
            <div className="pt-4 border-t border-stone-200 space-y-3 text-left no-print">
              <label htmlFor="qr-url-input" className="block text-xs font-medium text-stone-700">
                Tautan Website pada QR Code (dapat disesuaikan bila dipindahkan ke domain desa):
              </label>
              <div className="flex gap-2">
                <input
                  id="qr-url-input"
                  type="url"
                  value={qrUrl}
                  onChange={(e) => setQrUrl(e.target.value)}
                  className="flex-1 min-w-0 px-3 py-2 text-xs font-mono rounded-lg border border-stone-300 bg-[#FAF9F6] text-stone-900 focus:outline-none focus:border-emerald-800 focus:bg-white"
                />
                <button
                  type="button"
                  onClick={() => handleCopy(qrUrl || defaultUrl, 'url')}
                  aria-label="Salin tautan website"
                  className="px-3 py-2 text-xs font-medium rounded-lg border border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100 shrink-0 cursor-pointer"
                >
                  {copiedField === 'url' ? 'Tersalin' : 'Salin'}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={handleDownloadQrPng}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold rounded-lg bg-emerald-800 text-white hover:bg-emerald-900 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Unduh QR (PNG)</span>
                </button>

                <button
                  type="button"
                  onClick={handlePrintPoster}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold rounded-lg border border-stone-300 bg-white text-stone-800 hover:bg-stone-50 transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Cetak Poster QR</span>
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
