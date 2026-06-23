import { useLanguage } from '../contexts/LanguageContext';
import { BookCard } from './BookCard';
import booksData from '../data/books.json';

interface BookGridProps {
  category?: 'TextBooks' | 'Special Edition';
}

export function BookGrid({ category }: BookGridProps) {
  const { t } = useLanguage();

  const filteredBooks = category
    ? booksData.books.filter(book => book.category === category)
    : booksData.books;

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {category && (
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {category === 'TextBooks' ? t.categories.textbooks : t.categories.specialEdition}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {category === 'TextBooks' ? t.categories.textbooksDesc : t.categories.specialEditionDesc}
            </p>
          </div>
        )}

        {!category && (
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 md:mb-12 text-center">
            {t.library.title}
          </h2>
        )}

        {filteredBooks.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">{t.library.noBooks}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
