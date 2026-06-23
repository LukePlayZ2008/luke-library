import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Book {
  id: string;
  title: string;
  category: string;
  cover: string;
  pdf: string;
}

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  const { t } = useLanguage();

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Cover Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
          {book.category === 'TextBooks' ? t.categories.textbooks : t.categories.specialEdition}
        </span>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 line-clamp-2 flex-grow">
          {book.title}
        </h3>
        <Link
          to={`/book/${book.id}`}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
        >
          <BookOpen className="w-4 h-4" />
          {t.library.openBook}
        </Link>
      </div>
    </div>
  );
}
