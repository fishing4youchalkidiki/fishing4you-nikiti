import type { Locale } from "./content";

type NotFoundContent = {
  /** Short heading. Kept to two or three words so five of them stack well. */
  title: string;
  /** One sentence. Says the page is gone and points at the link below it. */
  text: string;
  /** Label on the link back to that language's home page. */
  link: string;
};

// The 404 page cannot know which language the visitor wanted: the URL matched
// no locale route, so there is nothing to read a locale from. Rather than guess
// and be wrong for four visitors in five, it shows all five at once and lets
// them pick. Old links to the previous fishing4you.gr site land here, and those
// visitors are overwhelmingly Greek — an English-only page would lose them.
export const notFoundContent: Record<Locale, NotFoundContent> = {
  en: {
    title: "This page does not exist",
    text: "The link may be old or mistyped. Choose your language to continue.",
    link: "English",
  },
  el: {
    title: "Η σελίδα δεν υπάρχει",
    text: "Ο σύνδεσμος μπορεί να είναι παλιός ή λάθος. Διαλέξτε γλώσσα για να συνεχίσετε.",
    link: "Ελληνικά",
  },
  ro: {
    title: "Pagina nu există",
    text: "Linkul poate fi vechi sau greșit. Alege limba ta pentru a continua.",
    link: "Română",
  },
  ru: {
    title: "Страница не найдена",
    text: "Ссылка может быть старой или неверной. Выберите язык, чтобы продолжить.",
    link: "Русский",
  },
  de: {
    title: "Diese Seite existiert nicht",
    text: "Der Link ist vielleicht alt oder falsch geschrieben. Wählen Sie Ihre Sprache, um fortzufahren.",
    link: "Deutsch",
  },
};
