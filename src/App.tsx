import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { BookPage } from './pages/BookPage';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router basename={import.meta.env.BASE_URL}>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Navigation />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/category/:category" element={<CategoryPage />} />
              <Route path="/book/:id" element={<BookPage />} />
            </Routes>
            <footer className="py-8 text-center text-gray-500 dark:text-gray-400 text-sm">
              <p>Luke Library &copy; {new Date().getFullYear()}</p>
            </footer>
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
