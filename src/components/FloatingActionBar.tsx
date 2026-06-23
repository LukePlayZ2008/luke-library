import { useState, useEffect } from 'react';
import { Eye, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FloatingActionBarProps {
  pdfUrl: string;
  bookTitle: string;
}

export function FloatingActionBar({ pdfUrl, bookTitle }: FloatingActionBarProps) {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    let scrollTimeout: ReturnType<typeof setTimeout>;
    const handleScrollWithDelay = () => {
      handleScroll();
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setVisible(true);
      }, 500);
    };

    window.addEventListener('scroll', handleScrollWithDelay, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScrollWithDelay);
      clearTimeout(scrollTimeout);
    };
  }, [lastScrollY]);

  const handleViewPdf = () => {
    window.open(pdfUrl, '_blank');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${bookTitle}.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
      }`}
    >
      <div className="flex items-center gap-3 p-3 px-6 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl shadow-black/10">
        <button
          onClick={handleViewPdf}
          className="flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
        >
          <Eye className="w-5 h-5" />
          <span>{t.bookPage.viewPdf}</span>
        </button>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-5 py-3 bg-gray-900 dark:bg-gray-100 hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-gray-900 font-medium rounded-xl transition-all duration-200"
        >
          <Download className="w-5 h-5" />
          <span>{t.bookPage.downloadPdf}</span>
        </button>
      </div>
    </div>
  );
}
