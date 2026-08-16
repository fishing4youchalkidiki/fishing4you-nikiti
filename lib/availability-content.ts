import type { Locale } from "./content";

/**
 * Wording for the public availability calendar.
 *
 * Everything here is built to avoid plural agreement. "5 seats free" needs
 * three different forms in Russian (1, 2–4, 5+) and two in Romanian, and
 * getting one wrong is the kind of thing nobody reports and everybody
 * notices. The UI shows a bare "5 / 10" with a plural-free label instead, so
 * the arithmetic never has to agree with the grammar.
 */
export type AvailabilityContent = {
  eyebrow: string;
  title: string;
  intro: string;
  /**
   * Labels for the two states. Chosen in forms that do not agree with a
   * number — they label the figure the way a column header does, rather than
   * describing N things. Russian and German are invariant outright; the rest
   * are read as standing labels, so "1" and "8" take the same word. A bare
   * "5 / 10" was the original sin here: nobody could tell whether five were
   * free or five were gone.
   */
  freeLabel: string;
  bookedLabel: string;
  full: string;
  closed: string;
  /** Whole-boat cruise: it is free or it is taken, never a count. */
  boatFree: string;
  boatTaken: string;
  pick: string;
  /** Explains the pips once, above the strip, instead of on every card. */
  legend: string;
  /** Shown when the calendar cannot load — the form still works. */
  unavailable: string;
  /** Locale tag for Intl date formatting. */
  dateLocale: string;
};

export const availabilityContent: Record<Locale, AvailabilityContent> = {
  en: {
    eyebrow: "Availability",
    title: "See what is still free.",
    intro:
      "Updated by Dimitris as he confirms bookings. Pick a day to start your request — he confirms every booking personally.",
    freeLabel: "free",
    bookedLabel: "booked",
    full: "Full",
    closed: "Not sailing",
    boatFree: "Boat free",
    boatTaken: "Booked",
    pick: "Choose this day",
    legend: "Filled = booked, empty = free. Out of 10 seats.",
    unavailable:
      "Availability cannot be shown right now. You can still send a request below and Dimitris will confirm the date with you.",
    dateLocale: "en-GB",
  },
  el: {
    eyebrow: "Διαθεσιμότητα",
    title: "Δες τι είναι ακόμα ελεύθερο.",
    intro:
      "Ενημερώνεται από τον Δημήτρη καθώς κλείνει κρατήσεις. Διάλεξε μέρα για να στείλεις αίτημα — κάθε κράτηση την επιβεβαιώνει ο ίδιος.",
    freeLabel: "ελεύθερα",
    bookedLabel: "κλεισμένα",
    full: "Πλήρες",
    closed: "Δεν βγαίνει",
    // Kept to one short word: the card is 112px wide and these are the only
    // labels long enough to be clipped by it.
    boatFree: "Ελεύθερο",
    boatTaken: "Κλεισμένο",
    pick: "Διάλεξε αυτή τη μέρα",
    legend: "Γεμάτο = κλεισμένο, άδειο = ελεύθερο. Από 10 θέσεις.",
    unavailable:
      "Η διαθεσιμότητα δεν εμφανίζεται αυτή τη στιγμή. Μπορείς να στείλεις αίτημα παρακάτω και ο Δημήτρης θα επιβεβαιώσει την ημερομηνία.",
    dateLocale: "el-GR",
  },
  ro: {
    eyebrow: "Disponibilitate",
    title: "Vezi ce mai este liber.",
    intro:
      "Actualizat de Dimitris pe măsură ce confirmă rezervările. Alege o zi pentru a trimite cererea — fiecare rezervare o confirmă personal.",
    freeLabel: "libere",
    bookedLabel: "ocupate",
    full: "Ocupat",
    closed: "Nu iese",
    boatFree: "Barcă liberă",
    boatTaken: "Rezervată",
    pick: "Alege această zi",
    legend: "Plin = ocupat, gol = liber. Din 10 locuri.",
    unavailable:
      "Disponibilitatea nu poate fi afișată acum. Poți trimite oricum o cerere mai jos, iar Dimitris îți confirmă data.",
    dateLocale: "ro-RO",
  },
  ru: {
    eyebrow: "Доступность",
    title: "Посмотрите, что ещё свободно.",
    intro:
      "Обновляется Димитрисом по мере подтверждения броней. Выберите день, чтобы отправить запрос — каждую бронь он подтверждает лично.",
    // Adverbial forms — invariant, so 1 and 8 take the same word.
    freeLabel: "свободно",
    bookedLabel: "занято",
    full: "Занято",
    closed: "Не выходит",
    // "Забронировано" is 13 characters and was clipped mid-word on the card.
    // These agree with "лодка" and are half the length.
    boatFree: "Свободна",
    boatTaken: "Занята",
    pick: "Выбрать этот день",
    legend: "Закрашено — занято, пусто — свободно. Из 10 мест.",
    unavailable:
      "Доступность сейчас не отображается. Вы всё равно можете отправить запрос ниже, и Димитрис подтвердит дату.",
    dateLocale: "ru-RU",
  },
  de: {
    eyebrow: "Verfügbarkeit",
    title: "Sehen Sie, was noch frei ist.",
    intro:
      "Wird von Dimitris aktualisiert, sobald er Buchungen bestätigt. Wählen Sie einen Tag für Ihre Anfrage — jede Buchung bestätigt er persönlich.",
    freeLabel: "frei",
    bookedLabel: "belegt",
    // "Ausgebucht" was the one label long enough to hyphen-break inside the
    // card. Same meaning, and it matches the label already used on the pips.
    full: "Belegt",
    closed: "Keine Fahrt",
    boatFree: "Boot frei",
    boatTaken: "Gebucht",
    pick: "Diesen Tag wählen",
    legend: "Gefüllt = belegt, leer = frei. Von 10 Plätzen.",
    unavailable:
      "Die Verfügbarkeit kann gerade nicht angezeigt werden. Sie können unten trotzdem eine Anfrage senden, und Dimitris bestätigt Ihnen das Datum.",
    dateLocale: "de-DE",
  },
};
