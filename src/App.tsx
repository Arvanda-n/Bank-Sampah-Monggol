import { useEffect, useState } from 'react';
import { BankSampahPage } from './components/BankSampahPage';
import { ContactQrPage } from './components/ContactQrPage';
import { FaqPage } from './components/FaqPage';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { Navbar } from './components/Navbar';
import { SortingGuidePage } from './components/SortingGuidePage';
import { WasteTypesPage } from './components/WasteTypesPage';
import type { PageRoute } from './data/wasteData';

const validRoutes: PageRoute[] = [
  'beranda',
  'jenis-sampah',
  'panduan',
  'bank-sampah',
  'faq',
  'kontak',
];

function getRouteFromHash(): PageRoute {
  if (typeof window === 'undefined') return 'beranda';
  const hash = window.location.hash.replace('#', '') as PageRoute;
  return validRoutes.includes(hash) ? hash : 'beranda';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>(getRouteFromHash);
  const [catalogSearchQuery, setCatalogSearchQuery] = useState('');

  useEffect(() => {
    const onHashChange = () => {
      setCurrentPage(getRouteFromHash());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (page: PageRoute) => {
    if (page !== 'jenis-sampah') {
      setCatalogSearchQuery('');
    }
    setCurrentPage(page);
    if (typeof window !== 'undefined') {
      window.location.hash = page === 'beranda' ? '' : page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSearchToCatalog = (query: string) => {
    setCatalogSearchQuery(query);
    setCurrentPage('jenis-sampah');
    if (typeof window !== 'undefined') {
      window.location.hash = 'jenis-sampah';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-stone-900">
      <Navbar currentPage={currentPage} onNavigate={navigate} />

      <main className="flex-1">
        {currentPage === 'beranda' && (
          <HomePage onNavigate={navigate} onSearchToCatalog={handleSearchToCatalog} />
        )}
        {currentPage === 'jenis-sampah' && (
          <WasteTypesPage initialSearchQuery={catalogSearchQuery} onNavigate={navigate} />
        )}
        {currentPage === 'panduan' && <SortingGuidePage onNavigate={navigate} />}
        {currentPage === 'bank-sampah' && <BankSampahPage onNavigate={navigate} />}
        {currentPage === 'faq' && <FaqPage onNavigate={navigate} />}
        {currentPage === 'kontak' && <ContactQrPage />}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
