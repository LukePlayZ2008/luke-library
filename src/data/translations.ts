export const translations = {
  en: {
    nav: {
      home: 'Home',
      albums: 'Albums',
    },
    hero: {
      title: 'Luke Library',
      subtitle: 'Read and Download Digital Books Easily',
    },
    albums: {
      title: 'Book Albums',
      totalBooks: 'books',
      viewAlbum: 'View Album',
    },
    book: {
      viewPdf: 'View PDF',
      downloadPdf: 'Download PDF',
      size: 'Size',
      noBooks: 'No books found',
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
    creator: {
      title: 'About Creator',
      bio: 'Passionate web developer creating beautiful and functional digital experiences. Love building tools that help people learn and grow.',
    },
    theme: {
      light: 'Light',
      dark: 'Dark',
    },
    language: {
      en: 'English',
      my: 'Burmese',
    },
    backToTop: 'Back to Top',
  },
  my: {
    nav: {
      home: 'ပင်မစာမျက်နှာ',
      albums: 'အယ်လဘမ်များ',
    },
    hero: {
      title: 'Luke စာကြည့်တိုက်',
      subtitle: 'ဒစ်ဂျစ်တယ်စာအုပ်များကို လွယ်ကူစွာ ဖတ်ရှုနှင့် ဒေါင်းလုဒ်လုပ်ပါ',
    },
    albums: {
      title: 'စာအုပ်အယ်လဘမ်များ',
      totalBooks: 'စာအုပ်များ',
      viewAlbum: 'အယ်လဘမ်ကြည့်ရှုပါ',
    },
    book: {
      viewPdf: 'PDF ကြည့်ရှုပါ',
      downloadPdf: 'PDF ဒေါင်းလုဒ်လုပ်ပါ',
      size: 'အရွယ်အစား',
      noBooks: 'စာအုပ်မတွေ့ပါ',
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
    creator: {
      title: 'ဖန်တီးသူအကြောင်း',
      bio: 'လှပသော အသုံးချဆော့ဝဲများ ဖန်တီးသူ ဝဘ်ဒေVELOPER။ လူများ သင်ယုနှင့် ကြီးထွားရန် ကူညီသော ကိရိယာများ တည်ဆောက်ခြင်းကို နှစ်သက်ပါသည်။',
    },
    theme: {
      light: 'အလင်း',
      dark: 'အမှောင်',
    },
    language: {
      en: 'အင်္ဂလိပ်',
      my: 'မြန်မာ',
    },
    backToTop: 'အပေါ်သို့',
  },
};

export type Language = 'en' | 'my';
export type TranslationKeys = typeof translations.en;
