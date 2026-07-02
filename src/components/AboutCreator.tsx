import { Github, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import booksData from '../data/books.json';

export function AboutCreator() {
  const { t } = useLanguage();
  const { creator } = booksData;

  const socialLinks = [
    {
      name: 'GitHub',
      href: creator.github,
      icon: Github,
      bgColor: 'bg-gray-900 dark:bg-gray-100',
      textColor: 'text-white dark:text-gray-900',
      hoverBg: 'hover:bg-gray-800 dark:hover:bg-gray-200',
    },
    {
      name: 'Telegram',
      href: creator.telegram,
      icon: Send,
      bgColor: 'bg-blue-500',
      textColor: 'text-white',
      hoverBg: 'hover:bg-blue-600',
    },
    {
      name: 'Facebook',
      href: creator.facebook,
      icon: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      bgColor: 'bg-blue-600',
      textColor: 'text-white',
      hoverBg: 'hover:bg-blue-700',
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
            {/* Photo */}
            <div className="relative flex-shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-4 ring-blue-100 dark:ring-blue-900/50">
                <img
                  src={creator.photo}
                  alt={creator.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-800" />
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {creator.name}
              </h3>
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
