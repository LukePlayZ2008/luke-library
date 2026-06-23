export const translations = {
  en: {
    nav: {
      home: 'Home',
      textbooks: 'TextBooks',
      specialEdition: 'Special Edition',
    },
    hero: {
      title: 'Luke Library',
      subtitle: 'Read and Download Digital Books Easily',
    },
    library: {
      title: 'Library',
      openBook: 'Open Book',
      noBooks: 'No books found',
    },
    categories: {
      textbooks: 'TextBooks',
      textbooksDesc: 'Educational books and textbooks',
      specialEdition: 'Special Edition',
      specialEditionDesc: 'Premium resources, guides, and special collections',
    },
    bookPage: {
      back: 'Back',
      viewPdf: 'View PDF',
      downloadPdf: 'Download PDF',
      zoomIn: 'Zoom In',
      zoomOut: 'Zoom Out',
      fullscreen: 'Fullscreen',
      search: 'Search',
      page: 'Page',
      of: 'of',
      loading: 'Loading PDF...',
      error: 'Failed to load PDF',
    },
    theme: {
      light: 'Light',
      dark: 'Dark',
    },
    language: {
      en: 'English',
      my: 'Burmese',
    },
  },
  my: {
    nav: {
      home: 'ပင်မစာမျက်နှာ',
      textbooks: 'သင်ရိုးညွှန်းတမ်းများ',
      specialEdition: 'အထူးထုတ်ဝေမူ',
    },
    hero: {
      title: 'Luke စာကြည့်တိုက်',
      subtitle: 'ဒစ်ဂျစ်တယ်စာအုပ်များကို လွယ်ကူစွာ ဖတ်ရှုနှင့် ဒေါင်းလုဒ်လုပ်ပါ',
    },
    library: {
      title: 'စာကြည့်တိုက်',
      openBook: 'စာအုပ်ဖွင့်ပါ',
      noBooks: 'စာအုပ်မတွေ့ပါ',
    },
    categories: {
      textbooks: 'သင်ရိုးညွှန်းတမ်းများ',
      textbooksDesc: 'ပညာရေးစာအုပ်များနှင့် သင်ရိုးညွှန်းတမ်းများ',
      specialEdition: 'အထူးထုတ်ဝေမူ',
      specialEditionDesc: 'အထူးအရင်းအမြစ်များ၊ လမ်းညွှန်များနှင့် အထူးစုစည်းမှုများ',
    },
    bookPage: {
      back: 'နောက်သို့',
      viewPdf: 'PDF ကြည့်ရှုပါ',
      downloadPdf: 'PDF ဒေါင်းလုဒ်လုပ်ပါ',
      zoomIn: 'ချဲ့ထွင်ပါ',
      zoomOut: 'ချုံ့ပါ',
      fullscreen: 'မျက်နှာပြင်အပြည့်',
      search: 'ရှာဖွေပါ',
      page: 'စာမျက်နှာ',
      of: '၏',
      loading: 'PDF ဖိုင် တင်နေသည်...',
      error: 'PDF ဖိုင် ဖတ်ရှုမရပါ',
    },
    theme: {
      light: 'အလင်း',
      dark: 'အမှောင်',
    },
    language: {
      en: 'အင်္ဂလိပ်',
      my: 'မြန်မာ',
    },
  },
};

export type Language = 'en' | 'my';
export type TranslationKeys = typeof translations.en;
