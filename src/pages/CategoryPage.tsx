import { useParams, Navigate } from 'react-router-dom';
import { BookGrid } from '../components/BookGrid';

export function CategoryPage() {
  const { category } = useParams<{ category: string }>();

  if (category !== 'textbooks' && category !== 'special-edition') {
    return <Navigate to="/" replace />;
  }

  const categoryType = category === 'textbooks' ? 'TextBooks' : 'Special Edition';

  return (
    <main className="pt-20">
      <BookGrid category={categoryType} />
    </main>
  );
}
