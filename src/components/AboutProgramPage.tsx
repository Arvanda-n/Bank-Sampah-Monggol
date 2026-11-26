import { useRef, useState } from 'react';
import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react';
import { CheckCircle2, Download, MapPin, Printer } from 'lucide-react';
import { IMAGES, WEBSITE_PLANNED_URL, programGoals, programInfo } from '../data/bioporiData';
import { ResilientImage } from './ResilientImage';

export function AboutProgramPage() {
  const [qrUrl, setQrUrl] = useState(WEBSITE_PLANNED_URL);
  const [copiedUrl, setCopiedUrl] = useState(false);
  const canvasWrapperRef = useRef<HTMLDivElement>(null);

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(qrUrl || WEBSITE_PLANNED_URL);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000);
    } catch {
      setCopiedUrl(false);
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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 space-y-14">
      {/* Header */}
      <header className="max-w-3xl space-y-3 no-print">
        <p className="text-xs font-medium tracking-wide text-stone-500">
          Profil Program &amp; Media Sosialisasi
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 [text-wrap:balance]">
          Tentang Program Monggol Resik &amp; QR Code Website
        </h1>
        <p className="text-base text-stone-600 leading-relaxed">
          Informasi latar belakang, tujuan pengembangan, pelaksana kegiatan KKN di Kalurahan
          Monggol, dokumentasi pembuatan biopori galon bekas, serta QR Code siap cetak untuk
          sosialisasi warga.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Background, Goals, Implementer */}
        <div className="lg:col-span-7 space-y-6 no-print">
          <section className="p-6 sm:p-7 rounded-xl bg-white border border-stone-200 space-y-4">
            <h2 className="font-display text-xl font-bold text-stone-900">
              Latar Belakang Program
            </h2>
            <p className="text-sm text-stone-700 leading-relaxed">
              <strong>Monggol Resik</strong> merupakan website edukasi dan informasi digital yang
              dikembangkan sebagai bagian dari program kerja KKN bidang Teknik Informatika di{' '}
              <strong>{programInfo.location}</strong>.
            </p>
            <p className="text-sm text-stone-600 leading-relaxed">
              Program ini berfokus pada pengelolaan sampah organik rumah tangga melalui lubang
              resapan biopori dengan memanfaatkan galon bekas sebagai tabung berlubang. Website
              dibangun dengan konsep statis tanpa login maupun basis data agar tetap ringan, mudah
              diakses lewat ponsel warga, dan bermanfaat jangka panjang setelah kegiatan KKN
              selesai.
            </p>
            <div className="pt-3 border-t border-stone-100 flex items-start gap-2.5 text-xs text-stone-600 leading-relaxed">
              <MapPin className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                <strong className="text-stone-800">Pelaksana: </strong>
                {programInfo.implementer} ({programInfo.location}).
              </span>
            </div>
          </section>

          <section className="p-6 sm:p-7 rounded-xl bg-white border border-stone-200 space-y-4">
            <h2 className="font-display text-xl font-bold text-stone-900">
              Tujuan Pengembangan Website
            </h2>
            <ul className="space-y-3">
              {programGoals.map((goal, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-stone-700">
                  <CheckCircle2
                    className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed">{goal}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right Column: QR Code Poster */}
        <aside className="lg:col-span-5">
          <div className="p-6 sm:p-8 rounded-xl bg-white border border-stone-200 text-center space-y-5 print-only-poster">
            <div className="space-y-1">
              <p className="text-xs font-medium tracking-wide text-emerald-800">
                Edukasi Biopori Galon Bekas · Kalurahan Monggol
              </p>
              <h2 className="font-display text-2xl font-bold text-stone-900">Monggol Resik</h2>
              <p className="text-xs text-stone-600">
                Pindai QR Code ini untuk membuka panduan pembuatan dan perawatan biopori sampah
                organik melalui ponsel Anda.
              </p>
            </div>

            <div className="inline-flex p-4 rounded-xl bg-white border border-stone-200 mx-auto">
              <QRCodeSVG
                value={qrUrl || WEBSITE_PLANNED_URL}
                size={200}
                bgColor="#FFFFFF"
                fgColor="#1C1917"
                level="M"
              />
            </div>

            <div ref={canvasWrapperRef} className="hidden" aria-hidden="true">
              <QRCodeCanvas
                value={qrUrl || WEBSITE_PLANNED_URL}
                size={512}
                bgColor="#FFFFFF"
                fgColor="#1C1917"
                level="M"
                includeMargin={true}
              />
            </div>

            <p className="font-mono text-xs text-stone-500 break-all px-2">
              {qrUrl || WEBSITE_PLANNED_URL}
            </p>

            {/* Controls hidden when printing */}
            <div className="pt-4 border-t border-stone-200 space-y-3 text-left no-print">
              <label htmlFor="qr-url-input" className="block text-xs font-medium text-stone-700">
                Tautan Website pada QR Code:
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
                  onClick={handleCopyUrl}
                  className="px-3 py-2 text-xs font-medium rounded-lg border border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100 shrink-0 cursor-pointer"
                >
                  {copiedUrl ? 'Tersalin' : 'Salin'}
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

      {/* Documentation Gallery */}
      <section aria-labelledby="dokumentasi-heading" className="space-y-6 no-print">
        <div className="space-y-1.5">
          <h2 id="dokumentasi-heading" className="font-display text-2xl font-bold text-stone-900">
            Dokumentasi Edukasi &amp; Tahapan Biopori
          </h2>
          <p className="text-sm text-stone-600">
            Rangkaian visualisasi metode pembuatan biopori galon bekas untuk sosialisasi kepada
            masyarakat Kalurahan Monggol.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-4 rounded-xl bg-white border border-stone-200">
            <ResilientImage
              src={IMAGES.galonModifikasi}
              alt="Modifikasi galon bekas berlubang pada sisi dan dasar"
              className="w-full aspect-[4/3] object-cover rounded-lg border border-stone-100"
              caption="1. Pelubangan sisi & dasar galon bekas 19 liter."
            />
          </div>
          <div className="p-4 rounded-xl bg-white border border-stone-200">
            <ResilientImage
              src={IMAGES.organicMaterials}
              alt="Persiapan bahan organik rumah tangga untuk pengisi biopori"
              className="w-full aspect-[4/3] object-cover rounded-lg border border-stone-100"
              caption="2. Pemilahan & pencacahan bahan organik dapur + daun kering."
            />
          </div>
          <div className="p-4 rounded-xl bg-white border border-stone-200">
            <ResilientImage
              src={IMAGES.installationYard}
              alt="Pemasangan tabung galon biopori di pekarangan warga"
              className="w-full aspect-[4/3] object-cover rounded-lg border border-stone-100"
              caption="3. Penanaman tabung galon ke lubang tanah pekarangan."
            />
          </div>
          <div className="p-4 rounded-xl bg-white border border-stone-200">
            <ResilientImage
              src={IMAGES.hero}
              alt="Lubang resapan biopori galon bekas yang telah terpasang rapi"
              className="w-full aspect-[4/3] object-cover rounded-lg border border-stone-100"
              caption="4. Biopori terpasang rapi siap diisi sampah organik harian."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
