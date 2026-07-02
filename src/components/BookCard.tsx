import { useState } from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Book {
  id: string;
  title: string;
  cover: string;
  pdf: string;
  size: string;
}

interface BookCardProps {
  book: Book;
  onViewPdf: (pdf: string) => void;
}

export function BookCard({ book, onViewPdf }: BookCardProps) {
  const { t } = useLanguage();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group relative flex bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fadeInSlide border border-gray-100 dark:border-gray-700">
      {/* Book Cover */}
      <div className="relative w-24 sm:w-28 flex-shrink-0 overflow-hidden bg-gray-100 dark:bg-gray-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 dark:to-gray-800/20 z-10" />
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-600" />
        )}
        <img
          src={book.cover}
          alt={book.title}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
        {imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
            <BookOpen className="w-8 h-8 text-gray-400" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center p-4 flex-1 min-w-0">
        <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-1 truncate">
          {book.title}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
          {t.book.size}: {book.size}
        </p>
        <button
          onClick={() => onViewPdf(book.pdf)}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 w-fit"
        >
          <ExternalLink className="w-4 h-4" />
          {t.book.viewPdf}
        </button>
      </div>
    </div>
  );
}
