import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navigation } from './components/Navigation';
import { BackToTop } from './components/BackToTop';
import { HomePage } from './pages/HomePage';
import { BookAlbumPage } from './pages/BookAlbumPage';
import { BookPage } from './pages/BookPage';

function AppContent() {
  const handleViewPdf = (pdf: string) => {
    window.open(pdf, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/album/:albumId" element={<BookAlbumPage onViewPdf={handleViewPdf} />} />
        <Route path="/book/:id" element={<BookPage />} />
      </Routes>
      <footer className="py-8 text-center text-gray-500 dark:text-gray-400 text-sm bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
        <p>Luke Library &copy; {new Date().getFullYear()}</p>
      </footer>
      <BackToTop />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <AppContent />
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
