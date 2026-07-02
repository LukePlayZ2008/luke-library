import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { BookCard } from '../components/BookCard';
import booksData from '../data/books.json';

interface BookAlbumPageProps {
  onViewPdf?: (pdf: string) => void;
}

export function BookAlbumPage({ onViewPdf }: BookAlbumPageProps) {
  const { albumId } = useParams<{ albumId: string }>();
  const { t } = useLanguage();

  const album = booksData.albums.find(a => a.id === albumId);

  if (!album) {
    return <Navigate to="/" replace />;
  }

  const handleViewPdf = (pdf: string) => {
    if (onViewPdf) {
      onViewPdf(pdf);
    } else {
      window.open(pdf, '_blank');
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Album Header */}
      <section className="relative pt-20 pb-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">{t.bookPage.back}</span>
          </Link>

          {/* Album Info Card */}
          <div className="flex flex-col sm:flex-row gap-6 p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 animate-fadeInSlide">
            {/* Album Cover */}
            <div className="relative w-full sm:w-40 flex-shrink-0">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={album.cover}
                  alt={album.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>

            {/* Album Details */}
            <div className="flex-1 flex flex-col justify-center">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {album.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm sm:text-base leading-relaxed">
                {album.description}
              </p>
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium">
                <BookOpen className="w-5 h-5" />
                <span>{album.books.length} {t.albums.totalBooks}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-6 pb-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-4">
            {album.books.map((book, index) => (
              <div
                key={book.id}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <BookCard book={book} onViewPdf={handleViewPdf} />
              </div>
            ))}
          </div>

          {album.books.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">{t.book.noBooks}</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
