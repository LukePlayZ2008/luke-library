import { Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import booksData from '../data/books.json';

export function AboutCreator() {
  const { t } = useLanguage();
  const { creator } = booksData;

  const socialLinks = [
    {
      name: 'Facebook',
      href: creator.socials.facebook,
      icon: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      bgColor: 'bg-blue-600',
      textColor: 'text-white',
      hoverBg: 'hover:bg-blue-700',
    },
    {
      name: 'TikTok',
      href: creator.socials.tiktok,
      icon: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.73 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.06A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
        </svg>
      ),
      bgColor: 'bg-black',
      textColor: 'text-white',
      hoverBg: 'hover:bg-gray-800',
    },
    {
      name: 'Telegram',
      href: creator.socials.telegram,
      icon: Send,
      bgColor: 'bg-sky-500',
      textColor: 'text-white',
      hoverBg: 'hover:bg-sky-600',
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          {t.creator.title}
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 sm:p-8 animate-fadeInSlide">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Anonymous Developer Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center ring-4 ring-blue-100 dark:ring-blue-900/50">
                <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-800" />
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <a
                href={creator.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                {creator.name}
              </a>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                {creator.title}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg">
                {t.creator.bio}
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl ${link.bgColor} ${link.textColor} ${link.hoverBg} transition-all duration-200 font-medium text-sm shadow-sm hover:shadow-md"}
              >
                <link.icon className="w-4 h-4" />
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
