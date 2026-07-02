import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Album {
  id: string;
  name: string;
  description: string;
  cover: string;
  books: { id: string; title: string; cover: string; pdf: string; size: string }[];
}

interface BookAlbumCardProps {
  album: Album;
}

export function BookAlbumCard({ album }: BookAlbumCardProps) {
  const { t } = useLanguage();
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleRipple = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const diameter = Math.max(rect.width, rect.height);
      const radius = diameter / 2;

      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position: absolute;
        width: ${diameter}px;
        height: ${diameter}px;
        left: ${x - radius}px;
        top: ${y - radius}px;
        background: rgba(59, 130, 246, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple-effect 0.6s ease-out forwards;
        pointer-events: none;
      `;

      card.style.position = 'relative';
      card.style.overflow = 'hidden';
      card.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    };

    card.addEventListener('click', handleRipple);
    return () => card.removeEventListener('click', handleRipple);
  }, []);

  return (
    <Link
      ref={cardRef}
      to={`/album/${album.id}`}
      className="group relative flex bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fadeInSlide border border-gray-100 dark:border-gray-700"
    >
      {/* Book Cover */}
      <div className="relative w-28 sm:w-32 flex-shrink-0 overflow-hidden bg-gray-100 dark:bg-gray-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 dark:to-gray-800/20 z-10" />
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-600" />
        )}
        <img
          src={album.cover}
          alt={album.name}
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
      <div className="flex flex-col justify-center p-4 sm:p-5 flex-1 min-w-0">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {album.name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
          {album.description}
        </p>
        <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-medium">
          <BookOpen className="w-4 h-4" />
          <span>{album.books.length} {t.albums.totalBooks}</span>
        </div>
      </div>

      {/* Arrow indicator */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
          <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
