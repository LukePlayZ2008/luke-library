import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

export function Navigation() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false);
  const [ langDropdownOpen, setLangDropdownOpen ] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/category/textbooks', label: t.nav.textbooks },
    { to: '/category/special-edition', label: t.nav.specialEdition },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Luke Library
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.to)
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={theme === 'light' ? t.theme.dark : t.theme.light}
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            {/* Language Dropdown */}
            <div className="relative" ref={langDropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span className="hidden sm:inline text-sm font-medium">
                  {language === 'en' ? 'EN' : 'MY'}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden animate-fadeIn">
                  <button
                    onClick={() => { setLanguage('en'); setLangDropdownOpen(false); }}
                    className={`w-full px-4 py-2.5 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                      language === 'en' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {t.language.en}
                  </button>
                  <button
                    onClick={() => { setLanguage('my'); setLangDropdownOpen(false); }}
                    className={`w-full px-4 py-2.5 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                      language === 'my' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {t.language.my}
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800 animate-fadeIn">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
