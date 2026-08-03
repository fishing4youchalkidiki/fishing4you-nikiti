import type { Locale } from "./content";

export const techniqueMedia = [
  { key: "rig", number: "A", src: "/real-trip/rig-hands-closeup.webp" },
  { key: "helm", number: "B", src: "/real-trip/helm-from-behind.webp" },
  { key: "meal", number: "C", src: "/real-trip/food-aboard-closeup.webp" },
] as const;

export const approvedGalleryMedia = [
  { key: "veronika", number: "06", src: "/real-trip/group-veronika-clear.webp" },
  { key: "groupSea", number: "08", src: "/real-trip/group-trip-dimitris-visible.webp" },
  { key: "guestCatch", number: "10", src: "/real-trip/guest-catch-private.webp" },
  { key: "underway", number: "13", src: "/real-trip/boat-at-sea-private.webp" },
  { key: "youngAngler", number: "14", src: "/real-trip/young-angler-private.webp" },
  { key: "rigTogether", number: "15", src: "/real-trip/rig-preparation-private.webp" },
  { key: "barbecue", number: "17", src: "/real-trip/barbecue-meal-private.webp" },
  { key: "groupCatch", number: "18", src: "/real-trip/group-catch-private.webp" },
  { key: "largeCatch", number: "19", src: "/real-trip/young-guest-large-catch-private.webp" },
  { key: "dimitrisFish", number: "20", src: "/real-trip/dimitris-large-fish.webp" },
  { key: "mealAboard", number: "21", src: "/real-trip/meal-on-board-private.webp" },
  { key: "trophy", number: "23", src: "/real-trip/dimitris-trophy-catch.webp" },
  { key: "soup", number: "24", src: "/real-trip/fresh-fish-soup.webp" },
] as const;

type TechniqueKey = (typeof techniqueMedia)[number]["key"];
type GalleryKey = (typeof approvedGalleryMedia)[number]["key"];
type MediaText = { alt: string; caption: string };

type GalleryContent = {
  techniqueTitle: string;
  techniqueItems: Record<TechniqueKey, MediaText>;
  eyebrow: string;
  title: string;
  intro: string;
  privacyNote: string;
  items: Record<GalleryKey, MediaText>;
};

export const approvedGalleryContent: Record<Locale, GalleryContent> = {
  en: {
    techniqueTitle: "See the setup, the helm and the meal",
    techniqueItems: {
      rig: { alt: "Hands preparing the simple single-hook bottom fishing rig", caption: "The simple rig prepared on board" },
      helm: { alt: "A guest learning at the boat helm, photographed from behind", caption: "Learning at the helm" },
      meal: { alt: "A close view of food served aboard Fishing 4 You", caption: "A real meal served aboard" },
    },
    eyebrow: "Real moments · Privacy respected",
    title: "Catches, company and life aboard.",
    intro: "A genuine look at fishing days with Dimitris: preparing the tackle, sharing a catch and enjoying food by the Aegean.",
    privacyNote: "Faces are blurred where requested. Only approved photographs are shown.",
    items: {
      veronika: { alt: "Veronika with friends beside the catch on the boat", caption: "A shared catch with Veronika" },
      groupSea: { alt: "A group enjoying a fishing day at sea with faces privacy-protected", caption: "A group day at sea" },
      guestCatch: { alt: "A guest holding a fish aboard with the face privacy-protected", caption: "A guest's catch" },
      underway: { alt: "Fishing 4 You travelling across the Aegean", caption: "Fishing 4 You underway" },
      youngAngler: { alt: "A young angler fishing aboard with the face privacy-protected", caption: "A young angler's moment" },
      rigTogether: { alt: "Dimitris helping prepare fishing tackle aboard", caption: "Preparing the rig together" },
      barbecue: { alt: "Friends sharing a barbecue meal aboard with faces privacy-protected", caption: "Lunch beside the Aegean" },
      groupCatch: { alt: "A group gathered around the day's catch with children privacy-protected", caption: "A catch shared at the marina" },
      largeCatch: { alt: "A young guest with a large fish and face privacy-protected", caption: "A memorable large catch" },
      mealAboard: { alt: "A meal shared on board with guests' faces privacy-protected", caption: "A meal on board" },
      dimitrisFish: { alt: "Dimitris holding a large fish aboard", caption: "Dimitris and a large fish" },
      trophy: { alt: "Dimitris presenting a trophy fish", caption: "A trophy catch with Dimitris" },
      soup: { alt: "Fresh fish soup cooking in a pot aboard", caption: "Fresh fish soup prepared aboard" },
    },
  },
  el: {
    techniqueTitle: "Δείτε την αρματωσιά, το τιμόνι και το γεύμα",
    techniqueItems: {
      rig: { alt: "Χέρια που ετοιμάζουν την απλή αρματωσιά βυθού με ένα αγκίστρι", caption: "Η απλή αρματωσιά που ετοιμάζεται στο σκάφος" },
      helm: { alt: "Επισκέπτης μαθαίνει στο τιμόνι του σκάφους, φωτογραφημένος από πίσω", caption: "Μαθαίνοντας στο τιμόνι" },
      meal: { alt: "Κοντινή εικόνα φαγητού που σερβίρεται στο Fishing 4 You", caption: "Ένα αληθινό γεύμα στο σκάφος" },
    },
    eyebrow: "Αληθινές στιγμές · Σεβασμός στην ιδιωτικότητα",
    title: "Ψαριές, παρέα και ζωή στο σκάφος.",
    intro: "Μια αυθεντική ματιά στις ημέρες ψαρέματος με τον Δημήτρη: προετοιμασία εξοπλισμού, κοινές ψαριές και φαγητό δίπλα στο Αιγαίο.",
    privacyNote: "Τα πρόσωπα έχουν θολωθεί όπου ζητήθηκε. Εμφανίζονται μόνο εγκεκριμένες φωτογραφίες.",
    items: {
      veronika: { alt: "Η Βερόνικα με φίλους δίπλα στην ψαριά στο σκάφος", caption: "Μια κοινή ψαριά με τη Βερόνικα" },
      groupSea: { alt: "Παρέα σε ημέρα ψαρέματος με προστατευμένα πρόσωπα", caption: "Μια ομαδική ημέρα στη θάλασσα" },
      guestCatch: { alt: "Επισκέπτης κρατά ψάρι στο σκάφος με προστατευμένο πρόσωπο", caption: "Η ψαριά ενός επισκέπτη" },
      underway: { alt: "Το Fishing 4 You ταξιδεύει στο Αιγαίο", caption: "Το Fishing 4 You εν πλω" },
      youngAngler: { alt: "Νεαρός ψαράς στο σκάφος με προστατευμένο πρόσωπο", caption: "Η στιγμή ενός νεαρού ψαρά" },
      rigTogether: { alt: "Ο Δημήτρης βοηθά στην προετοιμασία της αρματωσιάς", caption: "Ετοιμάζοντας μαζί την αρματωσιά" },
      barbecue: { alt: "Φίλοι μοιράζονται μπάρμπεκιου στο σκάφος με προστατευμένα πρόσωπα", caption: "Γεύμα δίπλα στο Αιγαίο" },
      groupCatch: { alt: "Παρέα γύρω από την ψαριά με προστατευμένα τα πρόσωπα των παιδιών", caption: "Μια κοινή ψαριά στη μαρίνα" },
      largeCatch: { alt: "Νεαρός επισκέπτης με μεγάλο ψάρι και προστατευμένο πρόσωπο", caption: "Μια αξέχαστη μεγάλη ψαριά" },
      mealAboard: { alt: "Γεύμα στο σκάφος με προστατευμένα τα πρόσωπα των επισκεπτών", caption: "Γεύμα στο σκάφος" },
      dimitrisFish: { alt: "Ο Δημήτρης κρατά ένα μεγάλο ψάρι στο σκάφος", caption: "Ο Δημήτρης με ένα μεγάλο ψάρι" },
      trophy: { alt: "Ο Δημήτρης παρουσιάζει ένα μεγάλο ψάρι", caption: "Μια σπουδαία ψαριά με τον Δημήτρη" },
      soup: { alt: "Φρέσκια ψαρόσουπα μαγειρεύεται σε κατσαρόλα στο σκάφος", caption: "Φρέσκια ψαρόσουπα στο σκάφος" },
    },
  },
  ro: {
    techniqueTitle: "Vezi montura, cârma și masa",
    techniqueItems: {
      rig: { alt: "Mâini care pregătesc montura simplă de fund cu un singur cârlig", caption: "Montura simplă pregătită la bord" },
      helm: { alt: "Un oaspete învață la cârma bărcii, fotografiat din spate", caption: "Învățând la cârmă" },
      meal: { alt: "Prim-plan cu mâncarea servită la bordul Fishing 4 You", caption: "O masă adevărată servită la bord" },
    },
    eyebrow: "Momente reale · Intimitate respectată",
    title: "Capturi, prieteni și viață la bord.",
    intro: "O privire autentică asupra zilelor de pescuit cu Dimitris: pregătirea echipamentului, bucuria capturii și masa lângă Marea Egee.",
    privacyNote: "Fețele sunt blurate acolo unde s-a cerut. Sunt afișate doar fotografii aprobate.",
    items: {
      veronika: { alt: "Veronika alături de prieteni și captura de pe barcă", caption: "O captură împărțită cu Veronika" },
      groupSea: { alt: "Un grup într-o zi de pescuit pe mare, cu fețele protejate", caption: "O zi pe mare cu prietenii" },
      guestCatch: { alt: "Un oaspete ține un pește la bord, cu fața protejată", caption: "Captura unui oaspete" },
      underway: { alt: "Fishing 4 You navigând pe Marea Egee", caption: "Fishing 4 You în larg" },
      youngAngler: { alt: "Un pescar tânăr la bord, cu fața protejată", caption: "Momentul unui pescar tânăr" },
      rigTogether: { alt: "Dimitris ajută la pregătirea monturii de pescuit", caption: "Pregătind montura împreună" },
      barbecue: { alt: "Prieteni la o masă cu grătar pe barcă, cu fețele protejate", caption: "Prânz lângă Marea Egee" },
      groupCatch: { alt: "Un grup în jurul capturii zilei, cu fețele copiilor protejate", caption: "O captură împărțită în port" },
      largeCatch: { alt: "Un oaspete tânăr cu un pește mare și fața protejată", caption: "O captură mare, de neuitat" },
      mealAboard: { alt: "O masă la bord, cu fețele oaspeților protejate", caption: "O masă la bord" },
      dimitrisFish: { alt: "Dimitris ține un pește mare la bord", caption: "Dimitris și un pește mare" },
      trophy: { alt: "Dimitris prezintă un pește impresionant", caption: "O captură de trofeu cu Dimitris" },
      soup: { alt: "Supă proaspătă de pește pregătită într-o oală la bord", caption: "Supă proaspătă de pește la bord" },
    },
  },
  ru: {
    techniqueTitle: "Посмотрите на снасть, штурвал и обед",
    techniqueItems: {
      rig: { alt: "Руки готовят простую донную снасть с одним крючком", caption: "Простая снасть, подготовленная на борту" },
      helm: { alt: "Гость учится управлять лодкой, вид со спины", caption: "Знакомство со штурвалом" },
      meal: { alt: "Еда, поданная на борту Fishing 4 You, крупным планом", caption: "Настоящий обед на борту" },
    },
    eyebrow: "Настоящие моменты · Уважение к приватности",
    title: "Улов, компания и жизнь на борту.",
    intro: "Настоящие рыболовные дни с Димитрисом: подготовка снастей, радость от улова и еда у Эгейского моря.",
    privacyNote: "Лица размыты там, где это было необходимо. Показаны только одобренные фотографии.",
    items: {
      veronika: { alt: "Вероника с друзьями и уловом на лодке", caption: "Общий улов с Вероникой" },
      groupSea: { alt: "Группа на морской рыбалке с защищёнными лицами", caption: "День в море с друзьями" },
      guestCatch: { alt: "Гость держит рыбу на борту, лицо защищено", caption: "Улов гостя" },
      underway: { alt: "Fishing 4 You идёт по Эгейскому морю", caption: "Fishing 4 You в море" },
      youngAngler: { alt: "Юный рыбак на борту, лицо защищено", caption: "Момент юного рыбака" },
      rigTogether: { alt: "Димитрис помогает подготовить рыболовную снасть", caption: "Готовим снасть вместе" },
      barbecue: { alt: "Друзья за обедом с барбекю на лодке, лица защищены", caption: "Обед у Эгейского моря" },
      groupCatch: { alt: "Группа рядом с дневным уловом, лица детей защищены", caption: "Общий улов в марине" },
      largeCatch: { alt: "Юный гость с крупной рыбой, лицо защищено", caption: "Запоминающийся крупный улов" },
      mealAboard: { alt: "Обед на борту, лица гостей защищены", caption: "Обед на борту" },
      dimitrisFish: { alt: "Димитрис держит крупную рыбу на борту", caption: "Димитрис и крупная рыба" },
      trophy: { alt: "Димитрис показывает трофейную рыбу", caption: "Трофейный улов с Димитрисом" },
      soup: { alt: "Свежий рыбный суп готовится в кастрюле на борту", caption: "Свежий рыбный суп на борту" },
    },
  },
  de: {
    techniqueTitle: "Montage, Steuerstand und Mahlzeit ansehen",
    techniqueItems: {
      rig: { alt: "Hände bereiten die einfache Grundmontage mit einem Haken vor", caption: "Die einfache Montage an Bord" },
      helm: { alt: "Ein Gast lernt am Steuerstand, von hinten fotografiert", caption: "Einblick am Steuerstand" },
      meal: { alt: "Nahaufnahme des Essens an Bord von Fishing 4 You", caption: "Eine echte Mahlzeit an Bord" },
    },
    eyebrow: "Echte Momente · Privatsphäre respektiert",
    title: "Fänge, Gemeinschaft und Leben an Bord.",
    intro: "Ein authentischer Einblick in Angeltage mit Dimitris: Ausrüstung vorbereiten, Fänge teilen und Essen an der Ägäis genießen.",
    privacyNote: "Gesichter wurden auf Wunsch unkenntlich gemacht. Gezeigt werden nur freigegebene Fotos.",
    items: {
      veronika: { alt: "Veronika mit Freunden und dem Fang auf dem Boot", caption: "Ein gemeinsamer Fang mit Veronika" },
      groupSea: { alt: "Eine Gruppe beim Angeltag auf See mit geschützten Gesichtern", caption: "Ein gemeinsamer Tag auf See" },
      guestCatch: { alt: "Ein Gast hält einen Fisch an Bord, das Gesicht ist geschützt", caption: "Der Fang eines Gastes" },
      underway: { alt: "Fishing 4 You unterwegs auf der Ägäis", caption: "Fishing 4 You auf See" },
      youngAngler: { alt: "Ein junger Angler an Bord mit geschütztem Gesicht", caption: "Der Moment eines jungen Anglers" },
      rigTogether: { alt: "Dimitris hilft bei der Vorbereitung der Angelmontage", caption: "Gemeinsam die Montage vorbereiten" },
      barbecue: { alt: "Freunde beim Grillessen an Bord mit geschützten Gesichtern", caption: "Mittagessen an der Ägäis" },
      groupCatch: { alt: "Eine Gruppe beim Tagesfang, Kindergesichter sind geschützt", caption: "Ein gemeinsamer Fang im Hafen" },
      largeCatch: { alt: "Ein junger Gast mit einem großen Fisch und geschütztem Gesicht", caption: "Ein unvergesslicher großer Fang" },
      mealAboard: { alt: "Eine Mahlzeit an Bord mit geschützten Gesichtern", caption: "Eine Mahlzeit an Bord" },
      dimitrisFish: { alt: "Dimitris hält einen großen Fisch an Bord", caption: "Dimitris und ein großer Fisch" },
      trophy: { alt: "Dimitris präsentiert einen Trophäenfisch", caption: "Ein Trophäenfang mit Dimitris" },
      soup: { alt: "Frische Fischsuppe wird in einem Topf an Bord gekocht", caption: "Frische Fischsuppe an Bord" },
    },
  },
};
