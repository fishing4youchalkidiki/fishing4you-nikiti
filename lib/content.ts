export const locales = ["en", "el", "ro", "ru", "de"] as const;
export type Locale = (typeof locales)[number];

export type SiteContent = {
  languageName: string;
  metaTitle: string;
  metaDescription: string;
  nav: {
    trips: string;
    story: string;
    gallery: string;
    faq: string;
    book: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    accent: string;
    description: string;
    primary: string;
    secondary: string;
    localLabel: string;
  };
  facts: Array<{ value: string; label: string }>;
  tripsSection: {
    eyebrow: string;
    title: string;
    intro: string;
    priceNote: string;
  };
  tours: Array<{
    id: string;
    number: string;
    title: string;
    time: string;
    duration: string;
    description: string;
    highlights: string[];
    tone: "sunrise" | "day" | "night";
  }>;
  story: {
    eyebrow: string;
    title: string;
    description: string;
    quote: string;
    captainTitle: string;
    captainText: string;
    boatTitle: string;
    boatText: string;
  };
  reasons: {
    title: string;
    items: Array<{ number: string; title: string; text: string }>;
  };
  gallery: {
    eyebrow: string;
    title: string;
    boatAlt: string;
    signAlt: string;
    boatCaption: string;
    signCaption: string;
    note: string;
  };
  booking: {
    eyebrow: string;
    title: string;
    description: string;
    tripLabel: string;
    dateLabel: string;
    adultsLabel: string;
    childrenLabel: string;
    button: string;
    direct: string;
    messageTemplate: string;
  };
  checklist: {
    title: string;
    description: string;
    items: string[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  contact: {
    title: string;
    description: string;
    locationLabel: string;
    location: string;
    meetingNote: string;
    phoneLabel: string;
    map: string;
    whatsapp: string;
    viber: string;
  };
  footer: {
    tagline: string;
    rights: string;
    verified: string;
  };
};

export const content: Record<Locale, SiteContent> = {
  en: {
    languageName: "English",
    metaTitle: "Fishing 4 You Nikiti | Fishing Trips in Halkidiki",
    metaDescription:
      "Morning fishing, a fishing cruise with barbecue and night fishing with Dimitris in Nikiti, Halkidiki. Contact directly on WhatsApp.",
    nav: {
      trips: "Trips",
      story: "The experience",
      gallery: "Gallery",
      faq: "FAQ",
      book: "Book now",
    },
    hero: {
      eyebrow: "Nikiti · Sithonia · Halkidiki",
      title: "Come aboard.",
      accent: "The Aegean is waiting.",
      description:
        "Three ways to experience the sea with Dimitris: morning fishing, a full-day fishing cruise with barbecue, or fishing after sunset.",
      primary: "Check availability",
      secondary: "Explore the trips",
      localLabel: "A local sea experience",
    },
    facts: [
      { value: "3", label: "daily experiences" },
      { value: "€40", label: "morning & evening, per person" },
      { value: "3–10", label: "guests per departure" },
      { value: "Direct", label: "WhatsApp contact" },
    ],
    tripsSection: {
      eyebrow: "Choose your time at sea",
      title: "One boat. Three different stories.",
      intro:
        "Start with the first light, spend a generous day on the water, or discover the quiet Aegean after dark.",
      priceNote:
        "Morning and evening fishing are €40 per person and equipment is included. A €600 price was quoted for the barbecue program; confirm whether this is the total boat price, as well as its hours and group size.",
    },
    tours: [
      {
        id: "morning",
        number: "01",
        title: "Morning Fishing",
        time: "07:00 — 10:30",
        duration: "3.5 hours",
        description:
          "An early departure for cooler air, calm water and a relaxed start to your day in Nikiti.",
        highlights: ["€40 per person", "Equipment included", "Minimum 3 guests"],
        tone: "sunrise",
      },
      {
        id: "cruise",
        number: "02",
        title: "Fishing Cruise & Barbecue",
        time: "11:30 — 18:30",
        duration: "7 hours",
        description:
          "The longest experience: a day shaped around fishing, open water and a barbecue at sea.",
        highlights: ["€600 price quoted", "Barbecue", "Confirm final details"],
        tone: "day",
      },
      {
        id: "night",
        number: "03",
        title: "Night Fishing",
        time: "21:00 — 00:30",
        duration: "3.5 hours",
        description:
          "Leave the busy shore behind and experience fishing in the stillness of the sea after sunset.",
        highlights: ["€40 per person", "Equipment included", "After-sunset departure"],
        tone: "night",
      },
    ],
    story: {
      eyebrow: "Local, simple, memorable",
      title: "Meet Dimitris on the water.",
      description:
        "Fishing 4 You is a direct, local experience in Nikiti. You speak with the person behind the trip, choose the departure that suits you and meet at the agreed point by the sea.",
      quote: "No booking maze. Just choose your trip and talk directly to Dimitris.",
      captainTitle: "Your local contact",
      captainText:
        "Dimitris is your contact for availability, the meeting point and everything you should know before departure.",
      boatTitle: "The boat",
      boatText:
        "The boat shown here is the real Fishing 4 You boat. Departure capacity is advertised for groups of 3 to 10 people.",
    },
    reasons: {
      title: "Why guests choose direct",
      items: [
        {
          number: "01",
          title: "A time for every traveller",
          text: "Morning, daytime and night departures make the experience easy to fit into a holiday.",
        },
        {
          number: "02",
          title: "Small-group feeling",
          text: "The advertised group size is between 3 and 10 guests per departure.",
        },
        {
          number: "03",
          title: "One-message booking",
          text: "Ask about your date, group and trip directly through WhatsApp or Viber.",
        },
      ],
    },
    gallery: {
      eyebrow: "From Fishing 4 You",
      title: "The real boat. The real meeting point.",
      boatAlt: "Fishing 4 You boat cruising on the Aegean Sea near Nikiti",
      signAlt: "Fishing 4 You information sign in Nikiti",
      boatCaption: "Fishing 4 You on the water",
      signCaption: "The current trip information in Nikiti",
      note: "More photos from recent trips will be added soon.",
    },
    booking: {
      eyebrow: "Plan your trip",
      title: "Ask Dimitris about your date.",
      description:
        "Choose a trip and group size. We will prepare a WhatsApp message—you can review it before sending.",
      tripLabel: "Experience",
      dateLabel: "Preferred date",
      adultsLabel: "Adults",
      childrenLabel: "Children",
      button: "Continue on WhatsApp",
      direct: "No payment is taken on this website.",
      messageTemplate:
        "Hello Dimitris! I am interested in {trip} on {date}. We are {adults} adult(s) and {children} child(ren). Could you please confirm availability, the final price and what is included? Thank you!",
    },
    checklist: {
      title: "Confirm before you set off",
      description:
        "A quick message is the best way to receive the latest details for your chosen departure.",
      items: [
        "Final price for your selected trip",
        "Fishing equipment and bait",
        "Food and drinks",
        "Exact meeting point",
        "Children and safety equipment",
        "Weather and cancellation policy",
      ],
    },
    faq: {
      eyebrow: "Good to know",
      title: "Questions before the boat leaves",
      items: [
        {
          question: "Is the price €40 for every trip?",
          answer:
            "Dimitris confirmed €40 per person for morning and evening fishing. He quoted €600 for the barbecue program, but please confirm whether this is the total boat price and what it includes.",
        },
        {
          question: "Is fishing equipment included?",
          answer:
            "Yes. On the morning trip, guests received a rod, a single-hook rig, a sinker and shrimp bait. Confirm what is provided for the barbecue and evening programs.",
        },
        {
          question: "Can children join?",
          answer:
            "The sign advertises groups of 3 to 10 people but does not state a minimum age. Share the child’s age before booking so suitability and safety can be confirmed.",
        },
        {
          question: "Where does the boat leave from?",
          answer:
            "The service is based in Nikiti, Halkidiki. The exact meeting point is confirmed directly after you choose a date.",
        },
        {
          question: "What happens if the weather changes?",
          answer:
            "Sea departures depend on safe conditions. Confirm the current weather and the rescheduling or cancellation policy with Dimitris.",
        },
        {
          question: "How should I look after the shrimp bait?",
          answer:
            "Keep it in its container and in the shaded, cool place indicated by the crew. Take out only what you need for the next bait-up, close the container again and clean your hands before eating.",
        },
        {
          question: "What should I do if I feel seasick?",
          answer:
            "Tell the crew early, stay in fresh air, look at the horizon, avoid reading or using your phone and take small sips of water. Ask a doctor or pharmacist before the trip if you may need medicine.",
        },
        {
          question: "What happens after I catch a fish?",
          answer:
            "Ask Dimitris whether it will be kept or released and let the crew handle the hook when instructed. If asked to hold the fish, use wet hands, avoid its gills and keep it out of the water briefly.",
        },
      ],
    },
    contact: {
      title: "Ready for the Aegean?",
      description: "Send a message, confirm the details and meet Dimitris in Nikiti.",
      locationLabel: "Based in",
      location: "Nikiti Marina, 630 88, Halkidiki, Greece",
      meetingNote: "Location shared by Dimitris; confirm it for your selected departure.",
      phoneLabel: "Phone",
      map: "Open the shared location in Maps",
      whatsapp: "WhatsApp",
      viber: "Viber",
    },
    footer: {
      tagline: "Fishing trips with Dimitris in Nikiti, Halkidiki.",
      rights: "All rights reserved.",
      verified: "Details based on the current sign and information shared directly by Dimitris.",
    },
  },
  el: {
    languageName: "Ελληνικά",
    metaTitle: "Fishing 4 You Νικήτη | Εκδρομές Ψαρέματος στη Χαλκιδική",
    metaDescription:
      "Πρωινό ψάρεμα, κρουαζιέρα ψαρέματος με μπάρμπεκιου και νυχτερινό ψάρεμα με τον Δημήτρη στη Νικήτη Χαλκιδικής.",
    nav: {
      trips: "Εκδρομές",
      story: "Η εμπειρία",
      gallery: "Φωτογραφίες",
      faq: "Ερωτήσεις",
      book: "Κράτηση",
    },
    hero: {
      eyebrow: "Νικήτη · Σιθωνία · Χαλκιδική",
      title: "Ανεβείτε στο σκάφος.",
      accent: "Το Αιγαίο σας περιμένει.",
      description:
        "Τρεις τρόποι να ζήσετε τη θάλασσα με τον Δημήτρη: πρωινό ψάρεμα, ολοήμερη κρουαζιέρα με μπάρμπεκιου ή ψάρεμα μετά τη δύση.",
      primary: "Έλεγχος διαθεσιμότητας",
      secondary: "Δείτε τις εκδρομές",
      localLabel: "Μια τοπική θαλάσσια εμπειρία",
    },
    facts: [
      { value: "3", label: "καθημερινές εμπειρίες" },
      { value: "40€", label: "πρωί & βράδυ, ανά άτομο" },
      { value: "3–10", label: "άτομα ανά αναχώρηση" },
      { value: "Άμεσα", label: "επικοινωνία στο WhatsApp" },
    ],
    tripsSection: {
      eyebrow: "Διαλέξτε την ώρα σας στη θάλασσα",
      title: "Ένα σκάφος. Τρεις διαφορετικές ιστορίες.",
      intro:
        "Ξεκινήστε με το πρώτο φως, περάστε μια γεμάτη μέρα στο νερό ή γνωρίστε το ήσυχο Αιγαίο μετά το σκοτάδι.",
      priceNote:
        "Το πρωινό και το βραδινό ψάρεμα κοστίζουν 40€ ανά άτομο και ο εξοπλισμός περιλαμβάνεται. Για το πρόγραμμα με μπάρμπεκιου αναφέρθηκε τιμή 600€· επιβεβαιώστε αν είναι η συνολική τιμή του σκάφους, καθώς και το ωράριο και τον αριθμό ατόμων.",
    },
    tours: [
      {
        id: "morning",
        number: "01",
        title: "Πρωινό Ψάρεμα",
        time: "07:00 — 10:30",
        duration: "3,5 ώρες",
        description:
          "Πρωινή αναχώρηση για δροσερό αέρα, ήρεμα νερά και ένα χαλαρό ξεκίνημα της ημέρας στη Νικήτη.",
        highlights: ["40€ ανά άτομο", "Ο εξοπλισμός περιλαμβάνεται", "Ελάχιστο 3 άτομα"],
        tone: "sunrise",
      },
      {
        id: "cruise",
        number: "02",
        title: "Κρουαζιέρα Ψαρέματος & Μπάρμπεκιου",
        time: "11:30 — 18:30",
        duration: "7 ώρες",
        description:
          "Η μεγαλύτερη εμπειρία: μια μέρα με ψάρεμα, ανοιχτή θάλασσα και μπάρμπεκιου πάνω στο νερό.",
        highlights: ["Αναφέρθηκε τιμή 600€", "Μπάρμπεκιου", "Επιβεβαίωση λεπτομερειών"],
        tone: "day",
      },
      {
        id: "night",
        number: "03",
        title: "Νυχτερινό Ψάρεμα",
        time: "21:00 — 00:30",
        duration: "3,5 ώρες",
        description:
          "Αφήστε πίσω την πολυσύχναστη ακτή και ζήστε το ψάρεμα στην ηρεμία της θάλασσας μετά τη δύση.",
        highlights: ["40€ ανά άτομο", "Ο εξοπλισμός περιλαμβάνεται", "Μετά τη δύση"],
        tone: "night",
      },
    ],
    story: {
      eyebrow: "Τοπικό, απλό, αξέχαστο",
      title: "Γνωρίστε τον Δημήτρη στη θάλασσα.",
      description:
        "Το Fishing 4 You είναι μια άμεση, τοπική εμπειρία στη Νικήτη. Μιλάτε με τον άνθρωπο πίσω από την εκδρομή, επιλέγετε την αναχώρηση και συναντιέστε στο συμφωνημένο σημείο.",
      quote: "Χωρίς περίπλοκες κρατήσεις. Επιλέξτε την εκδρομή και μιλήστε με τον Δημήτρη.",
      captainTitle: "Η τοπική σας επαφή",
      captainText:
        "Ο Δημήτρης σας ενημερώνει για διαθεσιμότητα, σημείο συνάντησης και όσα χρειάζεται να γνωρίζετε.",
      boatTitle: "Το σκάφος",
      boatText:
        "Το σκάφος στη φωτογραφία είναι το πραγματικό σκάφος του Fishing 4 You. Η διαφημιζόμενη χωρητικότητα είναι 3 έως 10 άτομα.",
    },
    reasons: {
      title: "Γιατί απευθείας κράτηση",
      items: [
        {
          number: "01",
          title: "Ώρα για κάθε ταξιδιώτη",
          text: "Πρωινές, ημερήσιες και νυχτερινές αναχωρήσεις που ταιριάζουν εύκολα στις διακοπές σας.",
        },
        {
          number: "02",
          title: "Αίσθηση μικρής ομάδας",
          text: "Το διαφημιζόμενο μέγεθος ομάδας είναι από 3 έως 10 άτομα.",
        },
        {
          number: "03",
          title: "Κράτηση με ένα μήνυμα",
          text: "Ρωτήστε για ημερομηνία και διαθεσιμότητα μέσω WhatsApp ή Viber.",
        },
      ],
    },
    gallery: {
      eyebrow: "Από το Fishing 4 You",
      title: "Το πραγματικό σκάφος. Το πραγματικό σημείο.",
      boatAlt: "Το σκάφος Fishing 4 You στο Αιγαίο κοντά στη Νικήτη",
      signAlt: "Πινακίδα πληροφοριών Fishing 4 You στη Νικήτη",
      boatCaption: "Το Fishing 4 You στη θάλασσα",
      signCaption: "Οι τρέχουσες πληροφορίες εκδρομών στη Νικήτη",
      note: "Σύντομα θα προστεθούν περισσότερες φωτογραφίες.",
    },
    booking: {
      eyebrow: "Οργανώστε την εκδρομή",
      title: "Ρωτήστε τον Δημήτρη για την ημερομηνία σας.",
      description:
        "Επιλέξτε εκδρομή και αριθμό ατόμων. Ετοιμάζουμε ένα μήνυμα WhatsApp που μπορείτε να ελέγξετε πριν το στείλετε.",
      tripLabel: "Εμπειρία",
      dateLabel: "Ημερομηνία",
      adultsLabel: "Ενήλικες",
      childrenLabel: "Παιδιά",
      button: "Συνέχεια στο WhatsApp",
      direct: "Δεν πραγματοποιείται πληρωμή σε αυτή την ιστοσελίδα.",
      messageTemplate:
        "Γεια σου Δημήτρη! Ενδιαφέρομαι για {trip} στις {date}. Είμαστε {adults} ενήλικες και {children} παιδιά. Μπορείς να επιβεβαιώσεις διαθεσιμότητα, τελική τιμή και τι περιλαμβάνεται; Ευχαριστώ!",
    },
    checklist: {
      title: "Επιβεβαιώστε πριν φύγετε",
      description:
        "Ένα σύντομο μήνυμα είναι ο καλύτερος τρόπος για τις τελευταίες λεπτομέρειες.",
      items: [
        "Τελική τιμή εκδρομής",
        "Εξοπλισμός και δόλωμα",
        "Φαγητό και ποτά",
        "Ακριβές σημείο συνάντησης",
        "Παιδιά και εξοπλισμός ασφαλείας",
        "Καιρός και πολιτική ακύρωσης",
      ],
    },
    faq: {
      eyebrow: "Χρήσιμες πληροφορίες",
      title: "Ερωτήσεις πριν την αναχώρηση",
      items: [
        {
          question: "Η τιμή είναι 40€ για κάθε εκδρομή;",
          answer:
            "Ο Δημήτρης επιβεβαίωσε 40€ ανά άτομο για το πρωινό και το βραδινό ψάρεμα. Για το πρόγραμμα με μπάρμπεκιου ανέφερε 600€, αλλά χρειάζεται επιβεβαίωση αν πρόκειται για τη συνολική τιμή του σκάφους και τι περιλαμβάνει.",
        },
        {
          question: "Περιλαμβάνεται ο εξοπλισμός ψαρέματος;",
          answer:
            "Ναι. Στην πρωινή εκδρομή παρέχονται καλάμι, αρματωσιά με ένα αγκίστρι, μολύβι και δόλωμα γαρίδα. Επιβεβαιώστε τι παρέχεται στο πρόγραμμα με μπάρμπεκιου και στο βραδινό ψάρεμα.",
        },
        {
          question: "Μπορούν να συμμετέχουν παιδιά;",
          answer:
            "Δεν αναφέρεται ελάχιστη ηλικία. Δηλώστε την ηλικία του παιδιού πριν την κράτηση για επιβεβαίωση καταλληλότητας και ασφάλειας.",
        },
        {
          question: "Από πού φεύγει το σκάφος;",
          answer:
            "Η υπηρεσία βρίσκεται στη Νικήτη Χαλκιδικής. Το ακριβές σημείο συνάντησης επιβεβαιώνεται μετά την επιλογή ημερομηνίας.",
        },
        {
          question: "Τι γίνεται αν αλλάξει ο καιρός;",
          answer:
            "Οι αναχωρήσεις εξαρτώνται από ασφαλείς συνθήκες. Επιβεβαιώστε τον καιρό και την πολιτική αλλαγής με τον Δημήτρη.",
        },
        {
          question: "Πώς πρέπει να διατηρώ το δόλωμα γαρίδα;",
          answer:
            "Κρατήστε το στο δοχείο του και στο σκιερό, δροσερό σημείο που υποδεικνύει το πλήρωμα. Βγάζετε μόνο όση ποσότητα χρειάζεται για το επόμενο δόλωμα, κλείνετε ξανά το δοχείο και καθαρίζετε τα χέρια πριν φάτε.",
        },
        {
          question: "Τι να κάνω αν νιώσω ναυτία;",
          answer:
            "Ενημερώστε έγκαιρα το πλήρωμα, μείνετε στον καθαρό αέρα, κοιτάξτε τον ορίζοντα, αποφύγετε το διάβασμα ή το κινητό και πίνετε μικρές γουλιές νερό. Για φάρμακο, συμβουλευτείτε γιατρό ή φαρμακοποιό πριν την εκδρομή.",
        },
        {
          question: "Τι γίνεται αφού πιάσω ένα ψάρι;",
          answer:
            "Ρωτήστε τον Δημήτρη αν θα κρατηθεί ή θα απελευθερωθεί και αφήστε το πλήρωμα να χειριστεί το αγκίστρι όταν σας το ζητήσει. Αν κρατήσετε το ψάρι, βρέξτε τα χέρια, αποφύγετε τα βράγχια και περιορίστε τον χρόνο έξω από το νερό.",
        },
      ],
    },
    contact: {
      title: "Έτοιμοι για το Αιγαίο;",
      description:
        "Στείλτε μήνυμα, επιβεβαιώστε τις λεπτομέρειες και συναντήστε τον Δημήτρη στη Νικήτη.",
      locationLabel: "Βρισκόμαστε",
      location: "Μαρίνα Νικήτης, 630 88, Χαλκιδική, Ελλάδα",
      meetingNote: "Το σημείο κοινοποιήθηκε από τον Δημήτρη· επιβεβαιώστε το για την αναχώρησή σας.",
      phoneLabel: "Τηλέφωνο",
      map: "Άνοιγμα κοινοποιημένης τοποθεσίας",
      whatsapp: "WhatsApp",
      viber: "Viber",
    },
    footer: {
      tagline: "Εκδρομές ψαρέματος με τον Δημήτρη στη Νικήτη Χαλκιδικής.",
      rights: "Με επιφύλαξη παντός δικαιώματος.",
      verified: "Οι λεπτομέρειες βασίζονται στην πινακίδα και σε πληροφορίες του Δημήτρη.",
    },
  },
  ro: {
    languageName: "Română",
    metaTitle: "Fishing 4 You Nikiti | Excursii de pescuit în Halkidiki",
    metaDescription:
      "Pescuit de dimineață, croazieră de pescuit cu grătar și pescuit de noapte cu Dimitris în Nikiti, Halkidiki.",
    nav: {
      trips: "Excursii",
      story: "Experiența",
      gallery: "Galerie",
      faq: "Întrebări",
      book: "Rezervă",
    },
    hero: {
      eyebrow: "Nikiti · Sithonia · Halkidiki",
      title: "Urcă la bord.",
      accent: "Marea Egee te așteaptă.",
      description:
        "Trei moduri de a descoperi marea cu Dimitris: pescuit dimineața, croazieră de o zi cu grătar sau pescuit după apus.",
      primary: "Verifică disponibilitatea",
      secondary: "Vezi excursiile",
      localLabel: "O experiență locală pe mare",
    },
    facts: [
      { value: "3", label: "experiențe zilnice" },
      { value: "40 €", label: "dimineața & seara, de persoană" },
      { value: "3–10", label: "oaspeți per plecare" },
      { value: "Direct", label: "contact prin WhatsApp" },
    ],
    tripsSection: {
      eyebrow: "Alege momentul tău pe mare",
      title: "O barcă. Trei povești diferite.",
      intro:
        "Pornește la prima lumină, petrece o zi întreagă pe apă sau descoperă liniștea Mării Egee după lăsarea nopții.",
      priceNote:
        "Pescuitul de dimineață și cel de seară costă 40 € de persoană, iar echipamentul este inclus. Pentru programul cu grătar a fost comunicat prețul de 600 €; confirmă dacă este totalul pentru barcă, programul exact și numărul de persoane.",
    },
    tours: [
      {
        id: "morning",
        number: "01",
        title: "Pescuit de dimineață",
        time: "07:00 — 10:30",
        duration: "3,5 ore",
        description:
          "O plecare matinală pentru aer răcoros, apă liniștită și un început relaxat de zi în Nikiti.",
        highlights: ["40 € de persoană", "Echipament inclus", "Minimum 3 persoane"],
        tone: "sunrise",
      },
      {
        id: "cruise",
        number: "02",
        title: "Croazieră de pescuit & grătar",
        time: "11:30 — 18:30",
        duration: "7 ore",
        description:
          "Cea mai lungă experiență: o zi construită în jurul pescuitului, mării deschise și unui grătar pe apă.",
        highlights: ["Preț comunicat: 600 €", "Grătar", "Confirmă detaliile finale"],
        tone: "day",
      },
      {
        id: "night",
        number: "03",
        title: "Pescuit de noapte",
        time: "21:00 — 00:30",
        duration: "3,5 ore",
        description:
          "Lasă în urmă agitația de pe mal și descoperă pescuitul în liniștea mării după apus.",
        highlights: ["40 € de persoană", "Echipament inclus", "Plecare după apus"],
        tone: "night",
      },
    ],
    story: {
      eyebrow: "Local, simplu, memorabil",
      title: "Îl întâlnești pe Dimitris pe mare.",
      description:
        "Fishing 4 You este o experiență locală și directă în Nikiti. Vorbești cu omul din spatele excursiei, alegi plecarea potrivită și vă întâlniți la punctul stabilit.",
      quote: "Fără rezervări complicate. Alegi excursia și vorbești direct cu Dimitris.",
      captainTitle: "Contactul tău local",
      captainText:
        "Dimitris îți confirmă disponibilitatea, punctul de întâlnire și tot ce trebuie să știi înainte de plecare.",
      boatTitle: "Barca",
      boatText:
        "Barca din fotografie este barca reală Fishing 4 You. Capacitatea afișată este pentru grupuri de 3 până la 10 persoane.",
    },
    reasons: {
      title: "De ce să rezervi direct",
      items: [
        {
          number: "01",
          title: "Un program pentru fiecare",
          text: "Plecările dimineața, ziua și noaptea se potrivesc ușor într-o vacanță.",
        },
        {
          number: "02",
          title: "Atmosferă de grup restrâns",
          text: "Dimensiunea afișată a grupului este între 3 și 10 persoane.",
        },
        {
          number: "03",
          title: "Rezervare printr-un mesaj",
          text: "Întreabă despre dată, grup și excursie direct prin WhatsApp sau Viber.",
        },
      ],
    },
    gallery: {
      eyebrow: "De la Fishing 4 You",
      title: "Barca reală. Locul real.",
      boatAlt: "Barca Fishing 4 You pe Marea Egee lângă Nikiti",
      signAlt: "Afișul informativ Fishing 4 You din Nikiti",
      boatCaption: "Fishing 4 You pe mare",
      signCaption: "Informațiile actuale despre excursii în Nikiti",
      note: "Mai multe fotografii din excursii vor fi adăugate în curând.",
    },
    booking: {
      eyebrow: "Planifică excursia",
      title: "Întreabă-l pe Dimitris despre data ta.",
      description:
        "Alege excursia și numărul de persoane. Pregătim un mesaj WhatsApp pe care îl poți verifica înainte de trimitere.",
      tripLabel: "Experiență",
      dateLabel: "Data preferată",
      adultsLabel: "Adulți",
      childrenLabel: "Copii",
      button: "Continuă pe WhatsApp",
      direct: "Nu se efectuează plăți pe acest website.",
      messageTemplate:
        "Salut, Dimitris! Sunt interesat de {trip} în data de {date}. Suntem {adults} adult/adulți și {children} copil/copii. Poți confirma disponibilitatea, prețul final și ce este inclus? Mulțumesc!",
    },
    checklist: {
      title: "Confirmă înainte de plecare",
      description:
        "Un mesaj scurt este cea mai bună metodă pentru a primi detaliile actuale.",
      items: [
        "Prețul final al excursiei",
        "Echipamentul și momeala",
        "Mâncarea și băuturile",
        "Punctul exact de întâlnire",
        "Copiii și echipamentul de siguranță",
        "Vremea și politica de anulare",
      ],
    },
    faq: {
      eyebrow: "Bine de știut",
      title: "Întrebări înainte de plecare",
      items: [
        {
          question: "Prețul este 40 € pentru fiecare excursie?",
          answer:
            "Dimitris a confirmat 40 € de persoană pentru pescuitul de dimineață și seară. Pentru programul cu grătar a comunicat 600 €, dar trebuie confirmat dacă este prețul total pentru barcă și ce include.",
        },
        {
          question: "Este inclus echipamentul de pescuit?",
          answer:
            "Da. În excursia de dimineață sunt oferite lanseta, montura cu un cârlig, plumbul și momeala din crevete. Confirmă ce este oferit pentru programul cu grătar și cel de seară.",
        },
        {
          question: "Pot participa copiii?",
          answer:
            "Afișul nu menționează o vârstă minimă. Transmite vârsta copilului înainte de rezervare pentru confirmarea siguranței.",
        },
        {
          question: "De unde pleacă barca?",
          answer:
            "Serviciul se află în Nikiti, Halkidiki. Punctul exact de întâlnire este confirmat după alegerea datei.",
        },
        {
          question: "Ce se întâmplă dacă se schimbă vremea?",
          answer:
            "Plecările depind de condiții sigure. Confirmă vremea și politica de reprogramare sau anulare cu Dimitris.",
        },
        {
          question: "Cum trebuie păstrată momeala din crevete?",
          answer:
            "Păstreaz-o în recipient și în locul răcoros, ferit de soare, indicat de echipaj. Scoate doar cât folosești la următoarea montare, închide recipientul și curăță mâinile înainte să mănânci.",
        },
        {
          question: "Ce fac dacă mi se face rău pe mare?",
          answer:
            "Spune echipajului din timp, stai la aer, privește orizontul, evită cititul sau telefonul și bea înghițituri mici de apă. Dacă ai putea avea nevoie de medicamente, discută înainte cu medicul sau farmacistul.",
        },
        {
          question: "Ce se întâmplă după ce prind un pește?",
          answer:
            "Întreabă-l pe Dimitris dacă va fi păstrat sau eliberat și lasă echipajul să scoată cârligul când îți cere. Dacă ții peștele, udă mâinile, evită branhiile și limitează timpul petrecut în afara apei.",
        },
      ],
    },
    contact: {
      title: "Ești pregătit pentru Marea Egee?",
      description: "Trimite un mesaj, confirmă detaliile și întâlnește-l pe Dimitris în Nikiti.",
      locationLabel: "Locație",
      location: "Marina Nikiti, 630 88, Halkidiki, Grecia",
      meetingNote: "Locație trimisă de Dimitris; confirm-o pentru plecarea aleasă.",
      phoneLabel: "Telefon",
      map: "Deschide locația trimisă în Maps",
      whatsapp: "WhatsApp",
      viber: "Viber",
    },
    footer: {
      tagline: "Excursii de pescuit cu Dimitris în Nikiti, Halkidiki.",
      rights: "Toate drepturile rezervate.",
      verified: "Detalii bazate pe afiș și pe informațiile comunicate direct de Dimitris.",
    },
  },
  ru: {
    languageName: "Русский",
    metaTitle: "Fishing 4 You Никити | Морская рыбалка на Халкидики",
    metaDescription:
      "Утренняя рыбалка, рыболовный круиз с барбекю и ночная рыбалка с Димитрисом в Никити, Халкидики.",
    nav: {
      trips: "Экскурсии",
      story: "О поездке",
      gallery: "Галерея",
      faq: "Вопросы",
      book: "Забронировать",
    },
    hero: {
      eyebrow: "Никити · Ситония · Халкидики",
      title: "Поднимайтесь на борт.",
      accent: "Эгейское море ждёт.",
      description:
        "Три способа увидеть море с Димитрисом: утренняя рыбалка, дневной круиз с барбекю или рыбалка после заката.",
      primary: "Узнать о наличии мест",
      secondary: "Посмотреть экскурсии",
      localLabel: "Настоящая местная морская прогулка",
    },
    facts: [
      { value: "3", label: "ежедневные программы" },
      { value: "40 €", label: "утром и вечером, с человека" },
      { value: "3–10", label: "гостей на выход" },
      { value: "Прямо", label: "связь через WhatsApp" },
    ],
    tripsSection: {
      eyebrow: "Выберите своё время в море",
      title: "Одна лодка. Три разные истории.",
      intro:
        "Выйдите с первым светом, проведите день на воде или откройте для себя тихое Эгейское море ночью.",
      priceNote:
        "Утренняя и вечерняя рыбалка стоят 40 € с человека, снасти включены. Для программы с барбекю была названа цена 600 €; уточните, является ли это общей ценой за лодку, а также время и размер группы.",
    },
    tours: [
      {
        id: "morning",
        number: "01",
        title: "Утренняя рыбалка",
        time: "07:00 — 10:30",
        duration: "3,5 часа",
        description:
          "Ранний выход, прохладный воздух, спокойная вода и приятное начало дня в Никити.",
        highlights: ["40 € с человека", "Снасти включены", "Минимум 3 гостя"],
        tone: "sunrise",
      },
      {
        id: "cruise",
        number: "02",
        title: "Рыболовный круиз & барбекю",
        time: "11:30 — 18:30",
        duration: "7 часов",
        description:
          "Самая продолжительная программа: рыбалка, открытое море и барбекю на воде.",
        highlights: ["Названа цена 600 €", "Барбекю", "Уточнить детали"],
        tone: "day",
      },
      {
        id: "night",
        number: "03",
        title: "Ночная рыбалка",
        time: "21:00 — 00:30",
        duration: "3,5 часа",
        description:
          "Оставьте шумный берег позади и почувствуйте тишину моря после заката.",
        highlights: ["40 € с человека", "Снасти включены", "После заката"],
        tone: "night",
      },
    ],
    story: {
      eyebrow: "Местно, просто, незабываемо",
      title: "Встретьтесь с Димитрисом на море.",
      description:
        "Fishing 4 You — местная поездка в Никити без посредников. Вы общаетесь напрямую, выбираете удобный выход и встречаетесь в согласованном месте.",
      quote: "Никаких сложных форм. Выберите поездку и напишите Димитрису.",
      captainTitle: "Ваш местный контакт",
      captainText:
        "Димитрис подтвердит наличие мест, точку встречи и всё, что нужно знать до выхода.",
      boatTitle: "Лодка",
      boatText:
        "На фотографии настоящая лодка Fishing 4 You. Заявленный размер группы — от 3 до 10 человек.",
    },
    reasons: {
      title: "Почему удобно бронировать напрямую",
      items: [
        {
          number: "01",
          title: "Удобное время",
          text: "Утренние, дневные и ночные выходы легко вписать в отпуск.",
        },
        {
          number: "02",
          title: "Небольшая группа",
          text: "Заявленный размер группы — от 3 до 10 гостей.",
        },
        {
          number: "03",
          title: "Бронирование одним сообщением",
          text: "Уточните дату, состав группы и программу через WhatsApp или Viber.",
        },
      ],
    },
    gallery: {
      eyebrow: "От Fishing 4 You",
      title: "Настоящая лодка. Настоящее место.",
      boatAlt: "Лодка Fishing 4 You в Эгейском море рядом с Никити",
      signAlt: "Информационная вывеска Fishing 4 You в Никити",
      boatCaption: "Fishing 4 You в море",
      signCaption: "Актуальная информация об экскурсиях в Никити",
      note: "Скоро появятся новые фотографии с поездок.",
    },
    booking: {
      eyebrow: "Спланируйте поездку",
      title: "Уточните дату у Димитриса.",
      description:
        "Выберите программу и количество гостей. Мы подготовим сообщение WhatsApp, которое можно проверить перед отправкой.",
      tripLabel: "Программа",
      dateLabel: "Желаемая дата",
      adultsLabel: "Взрослые",
      childrenLabel: "Дети",
      button: "Перейти в WhatsApp",
      direct: "Оплата на этом сайте не производится.",
      messageTemplate:
        "Здравствуйте, Димитрис! Меня интересует {trip} на {date}. Нас {adults} взрослых и {children} детей. Подтвердите, пожалуйста, наличие мест, итоговую цену и что включено. Спасибо!",
    },
    checklist: {
      title: "Уточните перед выходом",
      description:
        "Короткое сообщение поможет получить самые свежие сведения о поездке.",
      items: [
        "Итоговая стоимость",
        "Снасти и наживка",
        "Еда и напитки",
        "Точная точка встречи",
        "Условия для детей и безопасность",
        "Погода и правила отмены",
      ],
    },
    faq: {
      eyebrow: "Полезно знать",
      title: "Вопросы перед выходом",
      items: [
        {
          question: "Цена 40 € действует на все программы?",
          answer:
            "Димитрис подтвердил 40 € с человека за утреннюю и вечернюю рыбалку. Для программы с барбекю он назвал 600 €, но нужно уточнить, является ли это общей ценой за лодку и что включено.",
        },
        {
          question: "Снасти включены?",
          answer:
            "Да. На утренней поездке предоставляются удочка, оснастка с одним крючком, грузило и креветка для наживки. Уточните оснащение программы с барбекю и вечерней рыбалки.",
        },
        {
          question: "Можно ли с детьми?",
          answer:
            "Минимальный возраст не указан. Сообщите возраст ребёнка до бронирования, чтобы уточнить безопасность и условия участия.",
        },
        {
          question: "Откуда отправляется лодка?",
          answer:
            "Услуга находится в Никити, Халкидики. Точное место встречи сообщается после выбора даты.",
        },
        {
          question: "Что будет при плохой погоде?",
          answer:
            "Выходы зависят от безопасных условий. Уточните прогноз и правила переноса или отмены у Димитриса.",
        },
        {
          question: "Как хранить креветку для наживки?",
          answer:
            "Держите её в контейнере, в прохладном затенённом месте, указанном экипажем. Доставайте только порцию для следующего насаживания, снова закрывайте контейнер и очищайте руки перед едой.",
        },
        {
          question: "Что делать, если меня укачивает?",
          answer:
            "Сразу сообщите экипажу, оставайтесь на свежем воздухе, смотрите на горизонт, не читайте и не смотрите в телефон, пейте воду небольшими глотками. По поводу лекарства заранее посоветуйтесь с врачом или фармацевтом.",
        },
        {
          question: "Что происходит после поимки рыбы?",
          answer:
            "Спросите Димитриса, оставят рыбу или выпустят, и по указанию дайте экипажу снять крючок. Если нужно подержать рыбу, намочите руки, не касайтесь жабр и как можно меньше держите её вне воды.",
        },
      ],
    },
    contact: {
      title: "Готовы увидеть Эгейское море?",
      description: "Напишите, уточните детали и встретьтесь с Димитрисом в Никити.",
      locationLabel: "Место",
      location: "Марина Никити, 630 88, Халкидики, Греция",
      meetingNote: "Место прислал Димитрис; подтвердите его для выбранного выхода.",
      phoneLabel: "Телефон",
      map: "Открыть полученное место на карте",
      whatsapp: "WhatsApp",
      viber: "Viber",
    },
    footer: {
      tagline: "Морская рыбалка с Димитрисом в Никити, Халкидики.",
      rights: "Все права защищены.",
      verified: "Сведения основаны на вывеске и информации, полученной напрямую от Димитриса.",
    },
  },
  de: {
    languageName: "Deutsch",
    metaTitle: "Fishing 4 You Nikiti | Angeltouren auf Chalkidiki",
    metaDescription:
      "Morgenangeln, Angelkreuzfahrt mit Barbecue und Nachtangeln mit Dimitris in Nikiti auf Chalkidiki.",
    nav: {
      trips: "Touren",
      story: "Das Erlebnis",
      gallery: "Galerie",
      faq: "FAQ",
      book: "Anfragen",
    },
    hero: {
      eyebrow: "Nikiti · Sithonia · Chalkidiki",
      title: "Kommen Sie an Bord.",
      accent: "Die Ägäis wartet.",
      description:
        "Drei Arten, das Meer mit Dimitris zu erleben: Morgenangeln, eine Tagestour mit Barbecue oder Angeln nach Sonnenuntergang.",
      primary: "Verfügbarkeit prüfen",
      secondary: "Touren entdecken",
      localLabel: "Ein lokales Erlebnis auf dem Meer",
    },
    facts: [
      { value: "3", label: "tägliche Erlebnisse" },
      { value: "40 €", label: "morgens & abends, pro Person" },
      { value: "3–10", label: "Gäste pro Abfahrt" },
      { value: "Direkt", label: "Kontakt per WhatsApp" },
    ],
    tripsSection: {
      eyebrow: "Wählen Sie Ihre Zeit auf dem Meer",
      title: "Ein Boot. Drei verschiedene Geschichten.",
      intro:
        "Starten Sie im ersten Licht, verbringen Sie einen ganzen Tag auf dem Wasser oder erleben Sie die ruhige Ägäis bei Nacht.",
      priceNote:
        "Morgen- und Abendangeln kosten 40 € pro Person; die Ausrüstung ist inklusive. Für das Barbecue-Programm wurden 600 € genannt. Bitte bestätigen Sie, ob dies der Gesamtpreis für das Boot ist, sowie Zeiten und Gruppengröße.",
    },
    tours: [
      {
        id: "morning",
        number: "01",
        title: "Morgenangeln",
        time: "07:00 — 10:30",
        duration: "3,5 Stunden",
        description:
          "Eine frühe Abfahrt mit kühler Luft, ruhigem Wasser und einem entspannten Start in den Tag.",
        highlights: ["40 € pro Person", "Ausrüstung inklusive", "Mindestens 3 Gäste"],
        tone: "sunrise",
      },
      {
        id: "cruise",
        number: "02",
        title: "Angelkreuzfahrt & Barbecue",
        time: "11:30 — 18:30",
        duration: "7 Stunden",
        description:
          "Das längste Erlebnis: ein Tag rund ums Angeln, das offene Meer und ein Barbecue auf dem Wasser.",
        highlights: ["Genannter Preis: 600 €", "Barbecue", "Details bestätigen"],
        tone: "day",
      },
      {
        id: "night",
        number: "03",
        title: "Nachtangeln",
        time: "21:00 — 00:30",
        duration: "3,5 Stunden",
        description:
          "Lassen Sie die belebte Küste zurück und erleben Sie die Stille des Meeres nach Sonnenuntergang.",
        highlights: ["40 € pro Person", "Ausrüstung inklusive", "Nach Sonnenuntergang"],
        tone: "night",
      },
    ],
    story: {
      eyebrow: "Lokal, einfach, unvergesslich",
      title: "Treffen Sie Dimitris auf dem Wasser.",
      description:
        "Fishing 4 You ist ein direktes, lokales Erlebnis in Nikiti. Sie sprechen mit dem Menschen hinter der Tour, wählen Ihre Abfahrt und treffen sich am vereinbarten Punkt.",
      quote: "Keine komplizierte Buchung. Tour wählen und direkt mit Dimitris sprechen.",
      captainTitle: "Ihr lokaler Kontakt",
      captainText:
        "Dimitris bestätigt Verfügbarkeit, Treffpunkt und alles, was Sie vor der Abfahrt wissen sollten.",
      boatTitle: "Das Boot",
      boatText:
        "Das abgebildete Boot ist das echte Fishing 4 You Boot. Die angegebene Gruppengröße beträgt 3 bis 10 Personen.",
    },
    reasons: {
      title: "Warum direkt anfragen",
      items: [
        {
          number: "01",
          title: "Eine Zeit für jeden",
          text: "Abfahrten am Morgen, tagsüber und nachts passen bequem in den Urlaub.",
        },
        {
          number: "02",
          title: "Kleine Gruppen",
          text: "Die angegebene Gruppengröße liegt zwischen 3 und 10 Gästen.",
        },
        {
          number: "03",
          title: "Anfrage mit einer Nachricht",
          text: "Fragen Sie per WhatsApp oder Viber direkt nach Datum und Tour.",
        },
      ],
    },
    gallery: {
      eyebrow: "Von Fishing 4 You",
      title: "Das echte Boot. Der echte Ort.",
      boatAlt: "Fishing 4 You Boot auf der Ägäis bei Nikiti",
      signAlt: "Fishing 4 You Informationsschild in Nikiti",
      boatCaption: "Fishing 4 You auf dem Meer",
      signCaption: "Die aktuellen Tourinformationen in Nikiti",
      note: "Weitere Fotos von den Touren folgen in Kürze.",
    },
    booking: {
      eyebrow: "Tour planen",
      title: "Fragen Sie Dimitris nach Ihrem Datum.",
      description:
        "Wählen Sie Tour und Gruppengröße. Wir bereiten eine WhatsApp-Nachricht vor, die Sie vor dem Senden prüfen können.",
      tripLabel: "Erlebnis",
      dateLabel: "Wunschtermin",
      adultsLabel: "Erwachsene",
      childrenLabel: "Kinder",
      button: "Weiter zu WhatsApp",
      direct: "Auf dieser Website erfolgt keine Zahlung.",
      messageTemplate:
        "Hallo Dimitris! Ich interessiere mich für {trip} am {date}. Wir sind {adults} Erwachsene und {children} Kinder. Kannst du bitte Verfügbarkeit, Endpreis und enthaltene Leistungen bestätigen? Danke!",
    },
    checklist: {
      title: "Vor der Abfahrt bestätigen",
      description:
        "Eine kurze Nachricht liefert Ihnen die aktuellen Details zu Ihrer Tour.",
      items: [
        "Endpreis der gewählten Tour",
        "Angelausrüstung und Köder",
        "Essen und Getränke",
        "Genauer Treffpunkt",
        "Kinder und Sicherheitsausrüstung",
        "Wetter und Stornobedingungen",
      ],
    },
    faq: {
      eyebrow: "Gut zu wissen",
      title: "Fragen vor der Abfahrt",
      items: [
        {
          question: "Gilt der Preis von 40 € für jede Tour?",
          answer:
            "Dimitris hat 40 € pro Person für Morgen- und Abendangeln bestätigt. Für das Barbecue-Programm nannte er 600 €; bitte klären Sie, ob dies der Gesamtpreis für das Boot ist und was enthalten ist.",
        },
        {
          question: "Ist die Angelausrüstung inklusive?",
          answer:
            "Ja. Beim Morgenausflug werden Rute, Montage mit einem Haken, Gewicht und Garnelenköder gestellt. Bestätigen Sie die Ausstattung für das Grillprogramm und den Abendausflug.",
        },
        {
          question: "Können Kinder teilnehmen?",
          answer:
            "Ein Mindestalter ist nicht angegeben. Nennen Sie vor der Buchung das Alter des Kindes, damit Eignung und Sicherheit bestätigt werden können.",
        },
        {
          question: "Wo fährt das Boot ab?",
          answer:
            "Der Anbieter befindet sich in Nikiti auf Chalkidiki. Der genaue Treffpunkt wird nach der Terminwahl bestätigt.",
        },
        {
          question: "Was passiert bei Wetteränderung?",
          answer:
            "Abfahrten hängen von sicheren Bedingungen ab. Klären Sie Wetter sowie Umbuchungs- oder Stornoregeln mit Dimitris.",
        },
        {
          question: "Wie bewahre ich den Garnelenköder auf?",
          answer:
            "Bewahren Sie ihn im Behälter und an dem kühlen, schattigen Platz auf, den die Crew zeigt. Nehmen Sie nur die Menge für das nächste Beködern heraus, schließen Sie den Behälter wieder und reinigen Sie vor dem Essen die Hände.",
        },
        {
          question: "Was kann ich bei Seekrankheit tun?",
          answer:
            "Informieren Sie die Crew frühzeitig, bleiben Sie an der frischen Luft, schauen Sie zum Horizont, vermeiden Sie Lesen oder das Handy und trinken Sie Wasser in kleinen Schlucken. Lassen Sie sich vorab ärztlich oder in der Apotheke zu Medikamenten beraten.",
        },
        {
          question: "Was geschieht nach einem Fang?",
          answer:
            "Fragen Sie Dimitris, ob der Fisch behalten oder freigelassen wird, und lassen Sie die Crew den Haken nach Anweisung lösen. Wenn Sie den Fisch halten, befeuchten Sie die Hände, meiden Sie die Kiemen und halten Sie ihn nur kurz außerhalb des Wassers.",
        },
      ],
    },
    contact: {
      title: "Bereit für die Ägäis?",
      description: "Nachricht senden, Details bestätigen und Dimitris in Nikiti treffen.",
      locationLabel: "Standort",
      location: "Marina Nikiti, 630 88, Chalkidiki, Griechenland",
      meetingNote: "Von Dimitris geteilter Standort; bitte für Ihre Abfahrt bestätigen.",
      phoneLabel: "Telefon",
      map: "Geteilten Standort in Maps öffnen",
      whatsapp: "WhatsApp",
      viber: "Viber",
    },
    footer: {
      tagline: "Angeltouren mit Dimitris in Nikiti auf Chalkidiki.",
      rights: "Alle Rechte vorbehalten.",
      verified: "Details basieren auf dem Schild und direkt von Dimitris erhaltenen Angaben.",
    },
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
