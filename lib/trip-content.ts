import type { Locale } from "./content";
import type { TripId } from "./trip-pages";

export type CruiseStop = { title: string; text: string };

type TripMeta = {
  metaTitle: string;
  metaDescription: string;
  intro: string;
  /**
   * The page's own <h1> — deliberately not the same string as tours[].title
   * in lib/content.ts, which stays short for the home page card and the
   * booking dropdown. This one leads with the trip's own keyword + location
   * ("Morning Fishing in Nikiti", not just "Morning Fishing"), matching the
   * metaTitle below it.
   */
  heading: string;
};

type TripPageLabels = {
  unfoldEyebrow: string;
  unfoldTitle: string;
  includedEyebrow: string;
  includedTitle: string;
  galleryEyebrow: string;
  galleryTitle: string;
  faqEyebrow: string;
  faqTitle: string;
  otherTripsEyebrow: string;
  otherTripsTitle: string;
  viewTrip: string;
};

export type TripPageContent = TripPageLabels & {
  /**
   * The cruise's four stops, restructured from the single FAQ paragraph
   * (copy.faq.items[2] in lib/content.ts) into individually titled cards.
   * Same facts as that paragraph — Spathies, Neos Marmaras, Porto Carras,
   * Kelyfos, in that order — just given their own headings for the detail
   * page. Only used on the cruise page; morning and night reuse
   * guideContent.journey instead.
   */
  cruiseStops: [CruiseStop, CruiseStop, CruiseStop, CruiseStop];
  trips: Record<TripId, TripMeta>;
};

export const tripPageContent: Record<Locale, TripPageContent> = {
  en: {
    unfoldEyebrow: "How the trip unfolds",
    unfoldTitle: "What happens, step by step",
    includedEyebrow: "What's included",
    includedTitle: "Everything you need is provided",
    galleryEyebrow: "From the boat",
    galleryTitle: "Real moments from this trip",
    faqEyebrow: "Good to know",
    faqTitle: "Questions about this trip",
    otherTripsEyebrow: "Two other ways to be at sea",
    otherTripsTitle: "The other trips with Dimitris",
    viewTrip: "View this trip",
    cruiseStops: [
      {
        title: "Spathies",
        text: "The first stop, for a swim in clear water before the day gets going.",
      },
      {
        title: "Neos Marmaras",
        text: "About an hour ashore while the captain prepares traditional kakavia fish soup.",
      },
      {
        title: "Porto Carras coves",
        text: "Boat-only coves for a generous shared meal: fish, shrimp, salads, tzatziki, skordalia, feta, fried zucchini, wine, soft drinks, beer and water.",
      },
      {
        title: "Kelyfos island",
        text: "One last swim in turquoise water before heading back to Nikiti.",
      },
    ],
    trips: {
      morning: {
        heading: "Morning Fishing in Nikiti",
        metaTitle: "Morning Fishing in Nikiti | 07:00–10:30 | Fishing 4 You",
        metaDescription:
          "A 3.5-hour morning fishing trip from Nikiti Marina with Dimitris. Equipment, bait, coffee and drinks included. €40 per person.",
        intro:
          "Start the day on the water while the Aegean is still quiet. Rod, rig and shrimp bait are provided, the crew finds the spot, and you fish bottom-style, vertically beside the boat.",
      },
      cruise: {
        heading: "Fishing Cruise & Barbecue in Halkidiki",
        metaTitle: "Fishing Cruise & Barbecue | 11:30–18:30 | Fishing 4 You",
        metaDescription:
          "A full day at sea with Dimitris: swimming at Spathies, kakavia at Neos Marmaras, a barbecue meal in the Porto Carras coves and a last swim at Kelyfos. €600 for up to 10 guests.",
        intro:
          "A generous day at sea with four stops: swimming, a traditional kakavia, a full barbecue meal in coves reachable only by boat, and one last swim before heading home.",
      },
      night: {
        heading: "Night Fishing in Nikiti",
        metaTitle: "Night Fishing in Nikiti | 21:00–00:30 | Fishing 4 You",
        metaDescription:
          "A 3.5-hour night fishing trip from Nikiti Marina with Dimitris. Equipment and bait included, plus a beer for adults. €40 per person.",
        intro:
          "Fish the quiet Aegean after sunset, with the coast lit up in the distance. Equipment and bait are provided, and the crew guides every cast.",
      },
    },
  },
  el: {
    unfoldEyebrow: "Πώς εξελίσσεται η εκδρομή",
    unfoldTitle: "Τι συμβαίνει, βήμα-βήμα",
    includedEyebrow: "Τι περιλαμβάνεται",
    includedTitle: "Όλα όσα χρειάζεστε είναι έτοιμα",
    galleryEyebrow: "Από το σκάφος",
    galleryTitle: "Αληθινές στιγμές από αυτή την εκδρομή",
    faqEyebrow: "Χρήσιμες πληροφορίες",
    faqTitle: "Ερωτήσεις για αυτή την εκδρομή",
    otherTripsEyebrow: "Δύο ακόμη τρόποι να είστε στη θάλασσα",
    otherTripsTitle: "Οι άλλες εκδρομές με τον Δημήτρη",
    viewTrip: "Δείτε αυτή την εκδρομή",
    cruiseStops: [
      {
        title: "Σπαθιές",
        text: "Η πρώτη στάση, για ένα μπάνιο σε καθαρά νερά πριν ξεκινήσει η μέρα.",
      },
      {
        title: "Νέος Μαρμαράς",
        text: "Περίπου μία ώρα βόλτα στη στεριά, όσο ο καπετάνιος ετοιμάζει την παραδοσιακή κακαβιά.",
      },
      {
        title: "Λιμανάκια Πόρτο Καρράς",
        text: "Κόλποι προσβάσιμοι μόνο από τη θάλασσα, για ένα γενναιόδωρο κοινό γεύμα: ψάρια, γαρίδες, σαλάτες, τζατζίκι, σκορδαλιά, φέτα, τηγανητά κολοκυθάκια, κρασί, αναψυκτικά, μπύρα και νερό.",
      },
      {
        title: "Νησί Κελυφός",
        text: "Ένα τελευταίο μπάνιο σε τιρκουάζ νερά πριν την επιστροφή στη Νικήτη.",
      },
    ],
    trips: {
      morning: {
        heading: "Πρωινό Ψάρεμα στη Νικήτη",
        metaTitle: "Πρωινό Ψάρεμα στη Νικήτη | 07:00–10:30 | Fishing 4 You",
        metaDescription:
          "Μια εκδρομή πρωινού ψαρέματος 3,5 ωρών από τη Μαρίνα Νικήτης με τον Δημήτρη. Εξοπλισμός, δολώματα, καφές και αναψυκτικά περιλαμβάνονται. 40€ ανά άτομο.",
        intro:
          "Ξεκινήστε τη μέρα στο νερό όσο το Αιγαίο είναι ακόμη ήσυχο. Καλάμι, αρματωσιά και δόλωμα γαρίδας παρέχονται, το πλήρωμα βρίσκει το σημείο και ψαρεύετε κάθετα, δίπλα στο σκάφος.",
      },
      cruise: {
        heading: "Κρουαζιέρα Ψαρέματος & Μπάρμπεκιου στη Χαλκιδική",
        metaTitle: "Κρουαζιέρα Ψαρέματος & Μπάρμπεκιου | 11:30–18:30 | Fishing 4 You",
        metaDescription:
          "Μια γεμάτη μέρα στη θάλασσα με τον Δημήτρη: κολύμπι στις Σπαθιές, κακαβιά στον Νέο Μαρμαρά, γεύμα μπάρμπεκιου στα Λιμανάκια του Πόρτο Καρράς και τελευταίο μπάνιο στην Κελυφό. 600€ για έως 10 άτομα.",
        intro:
          "Μια γενναιόδωρη μέρα στη θάλασσα με τέσσερις στάσεις: κολύμπι, παραδοσιακή κακαβιά, πλούσιο γεύμα μπάρμπεκιου σε κόλπους προσβάσιμους μόνο από τη θάλασσα και ένα τελευταίο μπάνιο πριν την επιστροφή.",
      },
      night: {
        heading: "Νυχτερινό Ψάρεμα στη Νικήτη",
        metaTitle: "Νυχτερινό Ψάρεμα στη Νικήτη | 21:00–00:30 | Fishing 4 You",
        metaDescription:
          "Μια εκδρομή νυχτερινού ψαρέματος 3,5 ωρών από τη Μαρίνα Νικήτης με τον Δημήτρη. Εξοπλισμός και δολώματα περιλαμβάνονται, καθώς και μία μπύρα για ενήλικες. 40€ ανά άτομο.",
        intro:
          "Ψαρέψτε στο ήσυχο Αιγαίο μετά τη δύση, με την ακτή φωτισμένη στο βάθος. Ο εξοπλισμός και τα δολώματα παρέχονται, και το πλήρωμα καθοδηγεί κάθε ρίξιμο.",
      },
    },
  },
  ro: {
    unfoldEyebrow: "Cum decurge excursia",
    unfoldTitle: "Ce se întâmplă, pas cu pas",
    includedEyebrow: "Ce este inclus",
    includedTitle: "Tot ce aveți nevoie este asigurat",
    galleryEyebrow: "De pe barcă",
    galleryTitle: "Momente reale din această excursie",
    faqEyebrow: "Bine de știut",
    faqTitle: "Întrebări despre această excursie",
    otherTripsEyebrow: "Alte două moduri de a fi pe mare",
    otherTripsTitle: "Celelalte excursii cu Dimitris",
    viewTrip: "Vedeți această excursie",
    cruiseStops: [
      {
        title: "Spathies",
        text: "Prima oprire, pentru înot în apă limpede înainte să înceapă ziua.",
      },
      {
        title: "Neos Marmaras",
        text: "Aproximativ o oră de plimbare pe uscat, cât timp căpitanul pregătește supa tradițională kakavia.",
      },
      {
        title: "Golfurile Porto Carras",
        text: "Golfuri accesibile doar cu barca, pentru o masă comună generoasă: pește, creveți, salate, tzatziki, skordalia, feta, dovlecei prăjiți, vin, băuturi răcoritoare, bere și apă.",
      },
      {
        title: "Insula Kelyfos",
        text: "O ultimă baie în apă turcoaz înainte de întoarcerea la Nikiti.",
      },
    ],
    trips: {
      morning: {
        heading: "Pescuit de Dimineață în Nikiti",
        metaTitle: "Pescuit de Dimineață în Nikiti | 07:00–10:30 | Fishing 4 You",
        metaDescription:
          "O excursie de pescuit de dimineață de 3,5 ore din Marina Nikiti, cu Dimitris. Echipament, momeală, cafea și băuturi incluse. 40 € de persoană.",
        intro:
          "Începeți ziua pe apă cât timp Marea Egee este încă liniștită. Undița, montura și momeala din crevete sunt asigurate, echipajul găsește locul, iar dumneavoastră pescuiți vertical, chiar lângă barcă.",
      },
      cruise: {
        heading: "Croazieră de Pescuit & Grătar în Halkidiki",
        metaTitle: "Croazieră de Pescuit & Grătar | 11:30–18:30 | Fishing 4 You",
        metaDescription:
          "O zi întreagă pe mare cu Dimitris: înot la Spathies, kakavia la Neos Marmaras, masă la grătar în golfurile Porto Carras și o ultimă baie la Kelyfos. 600 € pentru până la 10 persoane.",
        intro:
          "O zi generoasă pe mare, cu patru opriri: înot, o supă tradițională kakavia, o masă completă la grătar în golfuri accesibile doar cu barca și o ultimă baie înainte de întoarcere.",
      },
      night: {
        heading: "Pescuit de Noapte în Nikiti",
        metaTitle: "Pescuit de Noapte în Nikiti | 21:00–00:30 | Fishing 4 You",
        metaDescription:
          "O excursie de pescuit de noapte de 3,5 ore din Marina Nikiti, cu Dimitris. Echipament și momeală incluse, plus o bere pentru adulți. 40 € de persoană.",
        intro:
          "Pescuiți pe Marea Egee liniștită după apus, cu coasta luminată în depărtare. Echipamentul și momeala sunt asigurate, iar echipajul ghidează fiecare aruncare.",
      },
    },
  },
  ru: {
    unfoldEyebrow: "Как проходит поездка",
    unfoldTitle: "Что происходит, шаг за шагом",
    includedEyebrow: "Что входит",
    includedTitle: "Всё необходимое уже предусмотрено",
    galleryEyebrow: "С борта лодки",
    galleryTitle: "Настоящие моменты этой поездки",
    faqEyebrow: "Полезно знать",
    faqTitle: "Вопросы об этой поездке",
    otherTripsEyebrow: "Ещё два способа побыть в море",
    otherTripsTitle: "Другие программы с Димитрисом",
    viewTrip: "Смотреть эту программу",
    cruiseStops: [
      {
        title: "Спатьес",
        text: "Первая остановка — купание в чистой воде перед началом дня.",
      },
      {
        title: "Неос-Мармарас",
        text: "Около часа на берегу, пока капитан готовит традиционную рыбную похлёбку какавию.",
      },
      {
        title: "Бухты Порто-Каррас",
        text: "Бухты, доступные только с моря, для щедрого общего обеда: рыба, креветки, салаты, дзадзики, скордалия, фета, жареные кабачки, вино, прохладительные напитки, пиво и вода.",
      },
      {
        title: "Остров Келифос",
        text: "Последнее купание в бирюзовой воде перед возвращением в Никити.",
      },
    ],
    trips: {
      morning: {
        heading: "Утренняя рыбалка в Никити",
        metaTitle: "Утренняя рыбалка в Никити | 07:00–10:30 | Fishing 4 You",
        metaDescription:
          "Утренняя рыбалка на 3,5 часа от марины Никити с Димитрисом. Снасти, наживка, кофе и напитки включены. 40 € с человека.",
        intro:
          "Начните день на воде, пока Эгейское море ещё спокойно. Удочка, оснастка и наживка-креветка предоставляются, экипаж находит место, а вы ловите вертикально, прямо у борта лодки.",
      },
      cruise: {
        heading: "Круиз с рыбалкой и барбекю в Халкидики",
        metaTitle: "Круиз с рыбалкой и барбекю | 11:30–18:30 | Fishing 4 You",
        metaDescription:
          "Целый день в море с Димитрисом: купание у Спатьес, какавия в Неос-Мармарасе, обед на гриле в бухтах Порто-Каррас и последнее купание у Келифоса. 600 € за лодку, до 10 человек.",
        intro:
          "Щедрый день в море с четырьмя остановками: купание, традиционная какавия, полноценный обед на гриле в бухтах, доступных только с моря, и последнее купание перед возвращением домой.",
      },
      night: {
        heading: "Ночная рыбалка в Никити",
        metaTitle: "Ночная рыбалка в Никити | 21:00–00:30 | Fishing 4 You",
        metaDescription:
          "Ночная рыбалка на 3,5 часа от марины Никити с Димитрисом. Снасти и наживка включены, а также пиво для взрослых. 40 € с человека.",
        intro:
          "Порыбачьте на тихом Эгейском море после заката, пока вдалеке светится берег. Снасти и наживка предоставляются, а экипаж помогает с каждым забросом.",
      },
    },
  },
  de: {
    unfoldEyebrow: "So läuft die Tour ab",
    unfoldTitle: "Was passiert, Schritt für Schritt",
    includedEyebrow: "Was ist inklusive",
    includedTitle: "Alles, was Sie brauchen, ist dabei",
    galleryEyebrow: "Vom Boot aus",
    galleryTitle: "Echte Momente dieser Tour",
    faqEyebrow: "Gut zu wissen",
    faqTitle: "Fragen zu dieser Tour",
    otherTripsEyebrow: "Zwei weitere Arten, auf See zu sein",
    otherTripsTitle: "Die anderen Touren mit Dimitris",
    viewTrip: "Diese Tour ansehen",
    cruiseStops: [
      {
        title: "Spathies",
        text: "Der erste Stopp, zum Schwimmen im klaren Wasser, bevor der Tag richtig beginnt.",
      },
      {
        title: "Neos Marmaras",
        text: "Etwa eine Stunde Landgang, während der Kapitän die traditionelle Kakavia-Fischsuppe zubereitet.",
      },
      {
        title: "Buchten von Porto Carras",
        text: "Nur per Boot erreichbare Buchten für ein großzügiges gemeinsames Essen: Fisch, Garnelen, Salate, Tzatziki, Skordalia, Feta, frittierte Zucchini, Wein, Softdrinks, Bier und Wasser.",
      },
      {
        title: "Insel Kelyfos",
        text: "Ein letztes Bad im türkisfarbenen Wasser vor der Rückfahrt nach Nikiti.",
      },
    ],
    trips: {
      morning: {
        heading: "Morgenangeln in Nikiti",
        metaTitle: "Morgenangeln in Nikiti | 07:00–10:30 | Fishing 4 You",
        metaDescription:
          "Eine 3,5-stündige Morgenangeltour ab der Marina Nikiti mit Dimitris. Ausrüstung, Köder, Kaffee und Getränke inklusive. 40 € pro Person.",
        intro:
          "Starten Sie den Tag auf dem Wasser, während die Ägäis noch ruhig ist. Rute, Vorfach und Garnelenköder werden gestellt, die Crew findet die Stelle, und Sie angeln senkrecht direkt neben dem Boot.",
      },
      cruise: {
        heading: "Angel- & Barbecue-Kreuzfahrt in Chalkidiki",
        metaTitle: "Angel- & Barbecue-Kreuzfahrt | 11:30–18:30 | Fishing 4 You",
        metaDescription:
          "Ein ganzer Tag auf See mit Dimitris: Schwimmen bei Spathies, Kakavia in Neos Marmaras, ein Barbecue in den Buchten von Porto Carras und ein letztes Bad bei Kelyfos. 600 € für bis zu 10 Gäste.",
        intro:
          "Ein großzügiger Tag auf See mit vier Stopps: Schwimmen, eine traditionelle Kakavia, ein vollständiges Barbecue in nur per Boot erreichbaren Buchten und ein letztes Bad vor der Heimfahrt.",
      },
      night: {
        heading: "Nachtangeln in Nikiti",
        metaTitle: "Nachtangeln in Nikiti | 21:00–00:30 | Fishing 4 You",
        metaDescription:
          "Eine 3,5-stündige Nachtangeltour ab der Marina Nikiti mit Dimitris. Ausrüstung und Köder inklusive, dazu ein Bier für Erwachsene. 40 € pro Person.",
        intro:
          "Angeln Sie auf der ruhigen Ägäis nach Sonnenuntergang, mit der beleuchteten Küste in der Ferne. Ausrüstung und Köder werden gestellt, und die Crew begleitet jeden Wurf.",
      },
    },
  },
};
