import { useLanguage } from '../contexts/LanguageContext';
import { BookAlbumCard } from '../components/BookAlbumCard';
import { AboutCreator } from '../components/AboutCreator';
import booksData from '../data/books.json';

export function HomePage() {
  const { t } = useLanguage();
  const { albums } = booksData;

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-20 pb-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3">
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
              {t.hero.title}
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            {t.hero.subtitle}
          </p>

          {/* Decorative Line */}
          <div className="mt-6 flex justify-center">
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* Albums Section */}
      <section className="py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              {t.albums.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {albums.map((album, index) => (
              <div
                key={album.id}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <BookAlbumCard album={album} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Creator */}
      <AboutCreator />
    </main>
  );
}
