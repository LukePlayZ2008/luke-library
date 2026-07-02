import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Download, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { PDFViewer } from '../components/PDFViewer';
import booksData from '../data/books.json';

export function BookPage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();

  // Find book across all albums
  let book: { id: string; title: string; cover: string; pdf: string; size: string } | null = null;
  let albumId: string | null = null;

  for (const album of booksData.albums) {
    const found = album.books.find(b => b.id === id);
    if (found) {
      book = found;
      albumId = album.id;
      break;
    }
  }

  if (!book) {
    return <Navigate to="/" replace />;
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = book!.pdf;
    link.download = `${book!.title}.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewPdf = () => {
    window.open(book!.pdf, '_blank');
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="fixed top-16 left-0 right-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link
            to={albumId ? `/album/${albumId}` : '/'}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">{t.bookPage.back}</span>
          </Link>
          <h1 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white truncate max-w-[200px] sm:max-w-md">
            {book.title}
          </h1>
        </div>
      </header>

      {/* PDF Viewer */}
      <div className="pt-28 pb-24">
        <div className="max-w-5xl mx-auto">
          <PDFViewer url={book.pdf} />
        </div>
      </div>

      {/* Floating Action Bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-3 p-3 px-5 rounded-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl shadow-black/10">
          <button
            onClick={handleViewPdf}
            className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            <span>{t.bookPage.viewPdf}</span>
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2.5 bg-gray-900 dark:bg-gray-100 hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-gray-900 font-medium rounded-xl transition-all duration-200 text-sm"
          >
            <Download className="w-4 h-4" />
            <span>{t.bookPage.downloadPdf}</span>
          </button>
        </div>
      </div>
    </main>
  );
}
