import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent dark:from-blue-900/20" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
            {t.hero.title}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {t.hero.subtitle}
        </p>

        {/* Decorative Line */}
        <div className="mt-8 flex justify-center">
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
