import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { PDFViewer } from '../components/PDFViewer';
import { FloatingActionBar } from '../components/FloatingActionBar';
import booksData from '../data/books.json';

export function BookPage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();

  const book = booksData.books.find(b => b.id === id);

  if (!book) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="fixed top-16 left-0 right-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{t.bookPage.back}</span>
          </Link>
          <h1 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
            {book.title}
          </h1>
        </div>
      </header>

      {/* PDF Viewer */}
      <div className="pt-32 pb-24">
        <div className="max-w-5xl mx-auto">
          <PDFViewer url={book.pdf} />
        </div>
      </div>

      {/* Floating Action Bar */}
      <FloatingActionBar pdfUrl={book.pdf} bookTitle={book.title} />
    </main>
  );
}
