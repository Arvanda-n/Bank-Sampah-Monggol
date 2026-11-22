import { ArrowRight, CheckCircle2, Info } from 'lucide-react';
import {
  IMAGES,
  acceptedMaterialGroups,
  bankSampahProcessSteps,
  type PageRoute,
} from '../data/wasteData';
import { ResilientImage } from './ResilientImage';

interface BankSampahPageProps {
  onNavigate: (page: PageRoute) => void;
}

export function BankSampahPage({ onNavigate }: BankSampahPageProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 space-y-14">
      {/* Page Header + Photo Split */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        <div className="lg:col-span-6 flex flex-col justify-center space-y-4">
          <p className="text-xs font-medium tracking-wide text-stone-500">
            Edukasi Sistem Pengelolaan Warga
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 leading-[1.15] [text-wrap:balance]">
            Mengenal Bank Sampah Kalurahan Monggol
          </h1>
          <p className="text-base text-stone-600 leading-relaxed">
            Bank Sampah adalah wadah pengelolaan sampah terpilah berbasis masyarakat yang bekerja
            menyerupai sistem menabung. Warga menyetorkan sampah anorganik bersih dan kering untuk
            ditimbang, dicatat nilainya oleh pengurus, dan disalurkan ke jalur daur ulang.
          </p>
          <div className="pt-2 space-y-2 border-t border-stone-200">
            <h2 className="font-display text-base font-semibold text-stone-900">
              Fungsi Utama Bank Sampah
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Membantu rumah tangga mengurangi tumpukan sampah, mencegah pembakaran plastik di
              pekarangan, sekaligus mengubah barang bekas terpilah menjadi tabungan bermanfaat bagi
              nasabah maupun kas kegiatan warga.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6">
          <ResilientImage
            src={IMAGES.bankSampahActivity}
            alt="Pengurus Bank Sampah menimbang kardus terikat dan mencatat buku tabungan nasabah"
            className="w-full h-64 sm:h-80 lg:h-full min-h-[300px] object-cover rounded-xl border border-stone-200"
            caption="Ilustrasi penimbangan sampah terpilah dan pencatatan buku tabungan oleh pengelola Bank Sampah."
          />
        </div>
      </section>

      {/* How Bank Sampah Works (5 Steps) */}
      <section aria-labelledby="cara-kerja-heading" className="space-y-6">
        <div className="max-w-2xl space-y-1.5">
          <h2 id="cara-kerja-heading" className="font-display text-2xl font-bold text-stone-900">
            Cara Kerja Bank Sampah
          </h2>
          <p className="text-sm text-stone-600">
            Alur penyetoran dari rumah warga hingga dicatat oleh pengelola Bank Sampah setempat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {bankSampahProcessSteps.map((item) => (
            <article
              key={item.step}
              className="p-5 rounded-xl bg-white border border-stone-200 space-y-3"
            >
              <p className="font-mono text-xs font-semibold text-emerald-800 tabular-nums">
                {item.step}.
              </p>
              <h3 className="font-display text-base font-bold text-stone-900 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Benefits for Community & Environment */}
      <section aria-labelledby="manfaat-heading" className="space-y-6">
        <div className="space-y-1.5">
          <h2 id="manfaat-heading" className="font-display text-2xl font-bold text-stone-900">
            Manfaat bagi Masyarakat dan Lingkungan
          </h2>
          <p className="text-sm text-stone-600">
            Dampak nyata yang dirasakan warga Kalurahan Monggol ketika pemilahan dilakukan bersama.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="p-6 rounded-xl bg-white border border-stone-200 space-y-2.5">
            <h3 className="font-display text-lg font-semibold text-stone-900">
              Lingkungan Lebih Sehat
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Mengurangi sampah berserakan di selokan, kebun, maupun asap pembakaran plastik yang
              mengganggu kesehatan keluarga dan tetangga.
            </p>
          </article>

          <article className="p-6 rounded-xl bg-white border border-stone-200 space-y-2.5">
            <h3 className="font-display text-lg font-semibold text-stone-900">
              Nilai Tambah Ekonomi
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Botol plastik, kardus, dan logam yang biasanya terbuang tercatat sebagai tabungan
              nasabah yang dapat dimanfaatkan sesuai ketentuan pengelola.
            </p>
          </article>

          <article className="p-6 rounded-xl bg-white border border-stone-200 space-y-2.5">
            <h3 className="font-display text-lg font-semibold text-stone-900">
              Gotong Royong Padukuhan
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Menumbuhkan kebiasaan peduli kebersihan di tingkat keluarga sekaligus memperkuat
              kerja sama antarwarga dan pengurus Bank Sampah.
            </p>
          </article>
        </div>
      </section>

      {/* Accepted Waste Materials */}
      <section aria-labelledby="jenis-diterima-heading" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <h2
              id="jenis-diterima-heading"
              className="font-display text-2xl font-bold text-stone-900"
            >
              Jenis Sampah yang Umumnya Diterima
            </h2>
            <p className="text-sm text-stone-600">
              Daftar kelompok bahan anorganik yang biasa ditabung oleh nasabah di Bank Sampah.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('jenis-sampah')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:underline whitespace-nowrap cursor-pointer"
          >
            <span>Cari Barang Spesifik</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {acceptedMaterialGroups.map((group) => (
            <article
              key={group.title}
              className="p-6 rounded-xl bg-white border border-stone-200 space-y-3"
            >
              <h3 className="font-display text-lg font-bold text-stone-900">{group.title}</h3>
              <p className="text-sm text-stone-700 leading-relaxed">{group.examples}</p>
              <p className="text-xs text-stone-500 pt-2.5 border-t border-stone-100 leading-relaxed">
                <span className="font-semibold text-stone-700">Catatan: </span>
                {group.note}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Becoming a Member & Deposit Mechanism */}
      <section aria-labelledby="mekanisme-nasabah-heading" className="space-y-6">
        <div className="rounded-xl bg-white border border-stone-200 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-4">
            <h2
              id="mekanisme-nasabah-heading"
              className="font-display text-2xl font-bold text-stone-900"
            >
              Mekanisme Menjadi Nasabah &amp; Penyetoran
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Setiap warga Kalurahan Monggol dapat mendaftar menjadi nasabah Bank Sampah tanpa
              proses rumit. Pendaftaran dan pencatatan dilakukan langsung bersama pengurus saat
              pelayanan berlangsung.
            </p>

            <ul className="space-y-3 pt-1">
              {[
                'Datang langsung ke pos Bank Sampah Kalurahan Monggol pada jadwal penyetoran dengan membawa sampah anorganik terpilah dan bersih.',
                'Sampaikan keinginan mendaftar nasabah baru kepada pengurus yang bertugas dan berikan data nama serta alamat padukuhan.',
                'Petugas menerbitkan buku tabungan nasabah sebagai bukti pencatatan setiap penimbangan.',
                'Untuk setoran berikutnya, cukup bawa buku tabungan beserta karung sampah yang telah dipilah sesuai kategori.',
              ].map((line, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-stone-700">
                  <CheckCircle2
                    className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed">{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between gap-5 p-5 rounded-xl bg-[#FAF9F6] border border-stone-200">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-stone-900">
                <Info className="w-4 h-4 text-emerald-800 shrink-0" aria-hidden="true" />
                <h3 className="font-display text-base font-bold">
                  Informasi Jadwal &amp; Harga Sampah
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                Jadwal pelayanan penyetoran, daftar jenis sampah khusus yang sedang diterima, serta
                harga satuan sampah dapat berubah mengikuti kebijakan pengurus dan mitra daur ulang.
              </p>
              <p className="text-sm text-stone-600 leading-relaxed">
                Silakan hubungi pengelola Bank Sampah melalui halaman Kontak untuk memastikan
                jadwal dan informasi terbaru sebelum berkunjung.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('kontak')}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg bg-emerald-800 text-white hover:bg-emerald-900 transition-colors cursor-pointer"
            >
              <span>Hubungi Pengelola Bank Sampah</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
