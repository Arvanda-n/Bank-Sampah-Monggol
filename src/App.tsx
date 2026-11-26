import { useEffect, useState } from 'react';
import { AboutProgramPage } from './components/AboutProgramPage';
import { BioporiInfoPage } from './components/BioporiInfoPage';
import { CareUsagePage } from './components/CareUsagePage';
import { CreationGuidePage } from './components/CreationGuidePage';
import { FaqPage } from './components/FaqPage';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { Navbar } from './components/Navbar';
import { OrganicWastePage } from './components/OrganicWastePage';
import { ToolsMaterialsPage } from './components/ToolsMaterialsPage';
import type { PageRoute } from './data/bioporiData';

const validRoutes: PageRoute[] = [
  'beranda',
  'mengenal-biopori',
  'sampah-organik',
  'alat-bahan',
  'pembuatan',
  'perawatan',
  'faq',
  'tentang',
];

function getRouteFromHash(): PageRoute {
  if (typeof window === 'undefined') return 'beranda';
  const hash = window.location.hash.replace('#', '') as PageRoute;
  return validRoutes.includes(hash) ? hash : 'beranda';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>(getRouteFromHash);
  const [organicSearchQuery, setOrganicSearchQuery] = useState('');

  useEffect(() => {
    const onHashChange = () => {
      setCurrentPage(getRouteFromHash());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (page: PageRoute) => {
    if (page !== 'sampah-organik') {
      setOrganicSearchQuery('');
    }
    setCurrentPage(page);
    if (typeof window !== 'undefined') {
      window.location.hash = page === 'beranda' ? '' : page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSearchOrganicWaste = (query: string) => {
    setOrganicSearchQuery(query);
    setCurrentPage('sampah-organik');
    if (typeof window !== 'undefined') {
      window.location.hash = 'sampah-organik';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-stone-900">
      <Navbar currentPage={currentPage} onNavigate={navigate} />

      <main className="flex-1">
        {currentPage === 'beranda' && (
          <HomePage onNavigate={navigate} onSearchOrganicWaste={handleSearchOrganicWaste} />
        )}
        {currentPage === 'mengenal-biopori' && <BioporiInfoPage onNavigate={navigate} />}
        {currentPage === 'sampah-organik' && (
          <OrganicWastePage initialSearchQuery={organicSearchQuery} onNavigate={navigate} />
        )}
        {currentPage === 'alat-bahan' && <ToolsMaterialsPage onNavigate={navigate} />}
        {currentPage === 'pembuatan' && <CreationGuidePage onNavigate={navigate} />}
        {currentPage === 'perawatan' && <CareUsagePage onNavigate={navigate} />}
        {currentPage === 'faq' && <FaqPage onNavigate={navigate} />}
        {currentPage === 'tentang' && <AboutProgramPage />}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
