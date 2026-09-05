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
  captain: {
    eyebrow: string;
    title: string;
    intro: string;
    highlights: string[];
    tagline: string;
    whyTitle: string;
    whyParagraphs: string[];
    moreTitle: string;
    moreParagraphs: string[];
    guarantee: string;
    // Dimitris sent this line in English on 9 August and asked for it to go
    // "somewhere inside". "You are in" has no literal equivalent in the other
    // four languages, so they render the sense of it — you are one of us now.
    waiting: string;
  };
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
    // Dimitris asked for booking requests by email (9 August). WhatsApp
    // carried the guest's number automatically; email carries nothing, so
    // name and phone are now asked for outright — otherwise he receives a
    // request he cannot answer.
    nameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    emailOptional: string;
    sending: string;
    sentTitle: string;
    sentBody: string;
    // Shown when the email cannot be sent. Never a dead end: the guest is
    // handed the WhatsApp route instead, with the message already written.
    failedTitle: string;
    failedBody: string;
    failedButton: string;
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
    privacy: string;
    verified: string;
  };
};

export const content: Record<Locale, SiteContent> = {
  en: {
    languageName: "English",
    metaTitle: "Fishing 4 You Nikiti & Nea Moudania | Fishing Trips Halkidiki",
    metaDescription:
      "Morning fishing, a fishing cruise with barbecue and night fishing with Dimitris. Nikiti in summer, Nea Moudania in winter. Halkidiki, Greece.",
    nav: {
      trips: "Trips",
      story: "The experience",
      gallery: "Gallery",
      faq: "FAQ",
      book: "Book now",
    },
    hero: {
      eyebrow: "Nikiti · Nea Moudania · Halkidiki",
      title: "FISHING",
      accent: "12 months a year. 100% experience. From €40. Memories for a lifetime.",
      description:
        "Three ways to experience the sea with Dimitris: morning fishing, a full-day fishing cruise with barbecue, or fishing after sunset.",
      primary: "Book now",
      secondary: "See the programmes",
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
      title: "Fishing trips in Nikiti: one boat, three different stories.",
      intro:
        "Start with the first light, spend a generous day on the water, or discover the quiet Aegean after dark.",
      priceNote:
        "Morning and night fishing are €40 per person, with equipment and bait included. The barbecue cruise is €600 for the whole boat, for up to 10 guests — the same price whether one person comes or ten. Payment is in cash.",
    },
    tours: [
      {
        id: "morning",
        number: "01",
        title: "Morning Fishing",
        time: "07:00 — 10:30",
        duration: "3.5 hours",
        description:
          "An early fishing departure with equipment and bait provided, plus espresso coffee, water and juice for children.",
        highlights: ["€40 per person", "Equipment & bait", "Drinks included", "Minimum 3 guests"],
        tone: "sunrise",
      },
      {
        id: "cruise",
        number: "02",
        title: "Fishing Cruise & Barbecue",
        time: "11:30 — 18:30",
        duration: "7 hours",
        description:
          "Swim at Spathies, explore Neos Marmaras while the captain prepares traditional kakavia, share a generous meal at the boat-only coves of Porto Carras, then finish with a last swim at Kelyfos island.",
        highlights: ["€600 for the boat", "Up to 10 guests", "4 stops", "Full meal & drinks"],
        tone: "day",
      },
      {
        id: "night",
        number: "03",
        title: "Night Fishing",
        time: "21:00 — 00:30",
        duration: "3.5 hours",
        description:
          "Fish after sunset with equipment and bait provided, plus one beer per adult and juice for children.",
        highlights: ["€40 per person", "Equipment & bait", "Beer or children’s juice"],
        tone: "night",
      },
    ],
    captain: {
      eyebrow: "The captain",
      title: "Fishing adventures in Halkidiki",
      intro:
        "With Dimitris — Captain Chris — and the Fishing 4 You crew, everything is taken care of for you. All you need to bring is your sense of adventure. We offer you the most authentic fishing tourism experience.",
      highlights: [
          "No crowds.",
          "No tourist traps.",
          "Just you, the sea and the rod.",
      ],
      tagline: "Fishing tourism, twelve months a year.",
      whyTitle: "Why choose Dimitris?",
      whyParagraphs: [
          "Fishing 4 You was born out of a real passion for fishing and for the sea.",
          "The ten-metre boat is more than a working boat. It is his home on the water. Fully equipped for safety and comfort, it lets you feel like a local from the very first moment.",
          "Dimitris has been diving and fishing in these waters since he was a child. He knows every reef, every current and every place where the fish hide.",
      ],
      moreTitle: "More than just fishing",
      moreParagraphs: [
          "Come with us for an unforgettable adventure in the crystal-clear waters of Halkidiki. With experienced guidance, quality equipment and a passion for the sea, we create experiences you will remember for ever.",
          "The catch depends on nature, but the smiles, the scenery and the moments you share on the boat are always guaranteed. Whether you are an experienced angler or trying sea fishing for the first time, our aim is to give you a safe, enjoyable and unforgettable experience.",
          "We use quality equipment, share local knowledge and guide you throughout the trip to give you the best chance. Nature always has the last word, but every trip offers striking views, calm and memories that last a lifetime.",
          "Fishing success depends on the conditions at sea and on the fish. We guarantee the best possible experience, expert guidance and unforgettable moments — but we cannot guarantee how many fish will be caught.",
      ],
      guarantee: "We guarantee the memories you will make.",
      waiting: "Captain Chris and his team are waiting for you. You are in.",
    },
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
        "The boat shown here is the real Fishing 4 You boat. It takes a maximum of 10 guests per departure.",
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
          text: "A maximum of 10 guests per departure, so the boat never feels crowded.",
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
      note: "These are the real Fishing 4 You boat and the current meeting-point sign in Nikiti.",
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
      button: "Send the request",
      direct: "No payment is taken on this website.",
      messageTemplate:
        "Hello Dimitris! I am interested in {trip} on {date}. We are {adults} adult(s) and {children} child(ren). Could you please confirm availability, the final price and what is included? Thank you!",
      nameLabel: "Your name",
      phoneLabel: "Phone or WhatsApp",
      emailLabel: "Email",
      emailOptional: "optional",
      sending: "Sending…",
      sentTitle: "Request sent.",
      sentBody:
        "Dimitris has your request and will reply to confirm the date, the price and the meeting point. Nothing is booked and nothing is charged until he answers.",
      failedTitle: "That did not go through.",
      failedBody:
        "The message could not be sent just now. Send it on WhatsApp instead — it is already written, you only have to press send.",
      failedButton: "Send on WhatsApp",
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
            "Morning and night fishing are €40 per person. The barbecue cruise is priced per boat: €600 for the full day from 11:30 to 18:30, for up to 10 guests. That price does not change with the size of the group — one guest or ten, it is €600. The boat cannot take more than 10 people; talk to Dimitris if you are a larger group. Payment is in cash.",
        },
        {
          question: "Is fishing equipment included?",
          answer:
            "Yes. Fishing equipment and bait are provided on the morning and night fishing trips. The morning trip also includes espresso coffee, water and juice for children. Night fishing includes one beer per adult and juice for children.",
        },
        {
          question: "Can I bring my own fishing equipment?",
          answer:
            "Yes. If you'd rather fish with your own rod or gear, you're welcome to bring it — Dimitris still provides equipment and bait for anyone who doesn't have their own.",
        },
        {
          question: "What happens on the barbecue cruise?",
          answer:
            "The first stop is Spathies for swimming. The second is Neos Marmaras for about one hour ashore while the captain prepares traditional kakavia fish soup. The third is the Porto Carras coves, accessible only by boat, where the remaining meal is prepared: fish, shrimp, salads, tzatziki, skordalia, feta, fried zucchini, wine, soft drinks, beer and water. The last stop is Kelyfos island, for one more swim before heading back.",
        },
        {
          question: "Can children join?",
          answer:
            "Yes. Life jackets are carried on board. There is no minimum age, but guests under 16 must be accompanied by an adult.",
        },
        {
          question: "Where does the boat leave from?",
          answer:
            "Fishing 4 You is based at Nikiti Marina, which is the meeting point through the summer season. The boat moves at other times of the year, so Dimitris sends the exact location on WhatsApp before your departure.",
        },
        {
          question: "What happens if the weather changes?",
          answer:
            "Departures only go ahead in safe conditions. If the day does not work out, Dimitris returns your money. A booking can also be cancelled free of charge up to 5 hours before departure.",
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
      meetingNote: "Dimitris sends the exact spot on WhatsApp before departure — the berth changes with the season.",
      phoneLabel: "Phone",
      map: "Open the shared location in Maps",
      whatsapp: "WhatsApp",
      viber: "Viber",
    },
    footer: {
      tagline: "Fishing trips with Dimitris in Nikiti, Halkidiki.",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      verified: "Details based on the current sign and information shared directly by Dimitris.",
    },
  },
  el: {
    languageName: "Ελληνικά",
    metaTitle: "Fishing 4 You Νικήτη & Νέα Μουδανιά | Εκδρομές Ψαρέματος",
    metaDescription:
      "Πρωινό ψάρεμα, κρουαζιέρα ψαρέματος με μπάρμπεκιου και νυχτερινό ψάρεμα με τον Δημήτρη. Νικήτη το καλοκαίρι, Νέα Μουδανιά τον χειμώνα. Χαλκιδική.",
    nav: {
      trips: "Εκδρομές",
      story: "Η εμπειρία",
      gallery: "Φωτογραφίες",
      faq: "Ερωτήσεις",
      book: "Κράτηση",
    },
    hero: {
      eyebrow: "Νικήτη · Νέα Μουδανιά · Χαλκιδική",
      title: "FISHING",
      accent: "12 μήνες τον χρόνο. 100% εμπειρία. Από 40€. Αναμνήσεις για μια ζωή.",
      description:
        "Τρεις τρόποι να ζήσετε τη θάλασσα με τον Δημήτρη: πρωινό ψάρεμα, ολοήμερη κρουαζιέρα με μπάρμπεκιου ή ψάρεμα μετά τη δύση.",
      primary: "Κλείστε τώρα",
      secondary: "Δείτε τα προγράμματα",
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
      title: "Εκδρομές ψαρέματος στη Νικήτη: ένα σκάφος, τρεις διαφορετικές ιστορίες.",
      intro:
        "Ξεκινήστε με το πρώτο φως, περάστε μια γεμάτη μέρα στο νερό ή γνωρίστε το ήσυχο Αιγαίο μετά το σκοτάδι.",
      priceNote:
        "Το πρωινό και το νυχτερινό ψάρεμα κοστίζουν 40€ ανά άτομο, με εξοπλισμό και δολώματα. Η κρουαζιέρα με μπάρμπεκιου κοστίζει 600€ για ολόκληρο το σκάφος, έως 10 άτομα — η ίδια τιμή είτε έρθει ένα άτομο είτε δέκα. Η πληρωμή γίνεται μετρητά.",
    },
    tours: [
      {
        id: "morning",
        number: "01",
        title: "Πρωινό Ψάρεμα",
        time: "07:00 — 10:30",
        duration: "3,5 ώρες",
        description:
          "Πρωινή αναχώρηση για ψάρεμα με εξοπλισμό και δολώματα, καφέ εσπρέσο, νερό και χυμό για τα παιδιά.",
        highlights: ["40€ ανά άτομο", "Εξοπλισμός & δολώματα", "Ποτά περιλαμβάνονται", "Ελάχιστο 3 άτομα"],
        tone: "sunrise",
      },
      {
        id: "cruise",
        number: "02",
        title: "Κρουαζιέρα Ψαρέματος & Μπάρμπεκιου",
        time: "11:30 — 18:30",
        duration: "7 ώρες",
        description:
          "Κολύμπι στις Σπαθιές, βόλτα στον Νέο Μαρμαρά όσο ο καπετάνιος ετοιμάζει παραδοσιακή κακαβιά, πλούσιο γεύμα στα Λιμανάκια του Πόρτο Καρράς και τελευταία στάση η Κελυφός για ένα ακόμη μπάνιο.",
        highlights: ["600€ για το σκάφος", "Έως 10 άτομα", "4 στάσεις", "Πλήρες γεύμα & ποτά"],
        tone: "day",
      },
      {
        id: "night",
        number: "03",
        title: "Νυχτερινό Ψάρεμα",
        time: "21:00 — 00:30",
        duration: "3,5 ώρες",
        description:
          "Νυχτερινό ψάρεμα με εξοπλισμό και δολώματα, μία μπύρα ανά ενήλικα και χυμό για τα παιδιά.",
        highlights: ["40€ ανά άτομο", "Εξοπλισμός & δολώματα", "Μπύρα ή παιδικός χυμός"],
        tone: "night",
      },
    ],
    captain: {
      eyebrow: "Ο καπετάνιος",
      title: "Ψαρευτικές περιπέτειες στη Χαλκιδική",
      intro:
        "Με τον Δημήτρη — τον Captain Chris — και την ομάδα του Fishing 4 You, όλα φροντίζονται για εσάς. Το μόνο που χρειάζεται να φέρετε μαζί σας είναι η αίσθηση της περιπέτειας. Σας προσφέρουμε την πιο αυθεντική εμπειρία αλιευτικού τουρισμού.",
      highlights: [
          "Χωρίς πλήθη.",
          "Χωρίς τουριστικές παγίδες.",
          "Μόνο εσείς, η θάλασσα και το καλάμι.",
      ],
      tagline: "Αλιευτικός τουρισμός, δώδεκα μήνες τον χρόνο.",
      whyTitle: "Γιατί να επιλέξετε τον Δημήτρη;",
      whyParagraphs: [
          "Το Fishing 4 You γεννήθηκε από το αληθινό πάθος μας για το ψάρεμα και τη θάλασσα.",
          "Το δεκάμετρο σκάφος είναι κάτι περισσότερο από ένα απλό επαγγελματικό σκάφος. Είναι το σπίτι του στη θάλασσα. Πλήρως εξοπλισμένο για ασφάλεια και άνεση, σας επιτρέπει να νιώσετε σαν ντόπιος από την πρώτη κιόλας στιγμή.",
          "Ο Δημήτρης κάνει καταδύσεις και ψαρεύει σε αυτά τα νερά από τότε που ήταν παιδί. Γνωρίζει κάθε ύφαλο, κάθε ρεύμα και κάθε μέρος όπου κρύβονται τα ψάρια.",
      ],
      moreTitle: "Κάτι παραπάνω από απλό ψάρεμα",
      moreParagraphs: [
          "Ελάτε μαζί μας για μια αξέχαστη περιπέτεια στα κρυστάλλινα νερά της Χαλκιδικής. Με έμπειρη καθοδήγηση, εξοπλισμό υψηλής ποιότητας και πάθος για τη θάλασσα, δημιουργούμε εμπειρίες που θα θυμάστε για πάντα.",
          "Ενώ η αλίευση εξαρτάται από τη φύση, τα χαμόγελα, το τοπίο και οι στιγμές που μοιράζεστε στο σκάφος είναι πάντα εγγυημένα. Είτε είστε έμπειρος ψαράς είτε δοκιμάζετε ψάρεμα στη θάλασσα για πρώτη φορά, στόχος μας είναι να σας προσφέρουμε μια ασφαλή, ευχάριστη και αξέχαστη εμπειρία.",
          "Χρησιμοποιούμε ποιοτικό εξοπλισμό, μοιραζόμαστε την τοπική γνώση και σας καθοδηγούμε σε όλο το ταξίδι για να μεγιστοποιήσουμε τις πιθανότητες επιτυχίας σας. Η φύση έχει πάντα τον τελευταίο λόγο, αλλά κάθε εκδρομή προσφέρει εκπληκτική θέα, χαλάρωση και αναμνήσεις που διαρκούν μια ζωή.",
          "Η επιτυχία του ψαρέματος εξαρτάται από τις συνθήκες της θάλασσας και τα ψάρια. Εγγυόμαστε την καλύτερη δυνατή εμπειρία, την καθοδήγηση από ειδικούς και τις αξέχαστες στιγμές, αλλά δεν μπορούμε να εγγυηθούμε τον αριθμό των ψαριών που θα αλιευθούν.",
      ],
      guarantee: "Εγγυόμαστε τις αναμνήσεις που θα δημιουργήσετε!",
      waiting: "Ο Captain Chris και η ομάδα του σας περιμένουν. Είστε μαζί μας.",
    },
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
        "Το σκάφος στη φωτογραφία είναι το πραγματικό σκάφος του Fishing 4 You. Δέχεται το πολύ 10 άτομα ανά αναχώρηση.",
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
          text: "Το πολύ 10 άτομα ανά αναχώρηση, ώστε το σκάφος να μη γεμίζει ποτέ.",
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
      note: "Αυτά είναι το πραγματικό σκάφος Fishing 4 You και η σημερινή πινακίδα του σημείου συνάντησης στη Νικήτη.",
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
      button: "Στείλτε το αίτημα",
      direct: "Δεν πραγματοποιείται πληρωμή σε αυτή την ιστοσελίδα.",
      messageTemplate:
        "Γεια σου Δημήτρη! Ενδιαφέρομαι για {trip} στις {date}. Είμαστε {adults} ενήλικες και {children} παιδιά. Μπορείς να επιβεβαιώσεις διαθεσιμότητα, τελική τιμή και τι περιλαμβάνεται; Ευχαριστώ!",
      nameLabel: "Το όνομά σας",
      phoneLabel: "Τηλέφωνο ή WhatsApp",
      emailLabel: "Email",
      emailOptional: "προαιρετικό",
      sending: "Αποστολή…",
      sentTitle: "Το αίτημα στάλθηκε.",
      sentBody:
        "Ο Δημήτρης έλαβε το αίτημά σας και θα απαντήσει για να επιβεβαιώσει την ημερομηνία, την τιμή και το σημείο συνάντησης. Τίποτα δεν κρατείται και τίποτα δεν χρεώνεται μέχρι να απαντήσει.",
      failedTitle: "Δεν στάλθηκε.",
      failedBody:
        "Το μήνυμα δεν μπόρεσε να σταλεί αυτή τη στιγμή. Στείλτε το στο WhatsApp — είναι ήδη γραμμένο, αρκεί να πατήσετε αποστολή.",
      failedButton: "Αποστολή στο WhatsApp",
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
            "Το πρωινό και το νυχτερινό ψάρεμα κοστίζουν 40€ ανά άτομο. Η κρουαζιέρα με μπάρμπεκιου χρεώνεται ανά σκάφος: 600€ για όλη την ημέρα, από τις 11:30 έως τις 18:30, έως 10 άτομα. Η τιμή δεν αλλάζει με τον αριθμό των ατόμων — ένα άτομο ή δέκα, είναι 600€. Το σκάφος δεν μπορεί να δεχτεί περισσότερα από 10 άτομα· αν είστε μεγαλύτερη παρέα, μιλήστε με τον Δημήτρη. Η πληρωμή γίνεται μετρητά.",
        },
        {
          question: "Περιλαμβάνεται ο εξοπλισμός ψαρέματος;",
          answer:
            "Ναι. Στο πρωινό και στο νυχτερινό ψάρεμα παρέχονται εξοπλισμός και δολώματα. Το πρωινό περιλαμβάνει επίσης καφέ εσπρέσο, νερό και χυμό για τα παιδιά. Το νυχτερινό ψάρεμα περιλαμβάνει μία μπύρα ανά ενήλικα και χυμό για τα παιδιά.",
        },
        {
          question: "Μπορώ να φέρω τον δικό μου εξοπλισμό ψαρέματος;",
          answer:
            "Ναι. Αν προτιμάτε να ψαρέψετε με το δικό σας καλάμι ή εξοπλισμό, μπορείτε να το φέρετε — ο Δημήτρης παρέχει ούτως ή άλλως εξοπλισμό και δολώματα για όσους δεν έχουν δικό τους.",
        },
        {
          question: "Τι περιλαμβάνει η εκδρομή με μπάρμπεκιου;",
          answer:
            "Η πρώτη στάση είναι στις Σπαθιές για κολύμπι. Η δεύτερη είναι στον Νέο Μαρμαρά για περίπου μία ώρα βόλτα, όσο ο καπετάνιος ετοιμάζει παραδοσιακή κακαβιά. Η τρίτη είναι στα Λιμανάκια του Πόρτο Καρράς, με πρόσβαση μόνο από τη θάλασσα, όπου ετοιμάζονται ψάρια, γαρίδες, σαλάτες, τζατζίκι, σκορδαλιά, φέτα, τηγανητά κολοκυθάκια, κρασί, αναψυκτικά, μπύρες και νερό. Τελευταία στάση είναι το νησί Κελυφός, για ένα ακόμη μπάνιο πριν την επιστροφή.",
        },
        {
          question: "Μπορούν να συμμετέχουν παιδιά;",
          answer:
            "Ναι. Υπάρχουν σωσίβια στο σκάφος. Δεν υπάρχει ελάχιστη ηλικία, αλλά όσοι είναι κάτω των 16 ετών πρέπει να συνοδεύονται από ενήλικα.",
        },
        {
          question: "Από πού φεύγει το σκάφος;",
          answer:
            "Το Fishing 4 You έχει βάση τη μαρίνα Νικήτης, που είναι και το σημείο συνάντησης όλη τη θερινή σεζόν. Το σκάφος μετακινείται άλλες εποχές του χρόνου, γι’ αυτό ο Δημήτρης στέλνει την ακριβή τοποθεσία στο WhatsApp πριν την αναχώρηση.",
        },
        {
          question: "Τι γίνεται αν αλλάξει ο καιρός;",
          answer:
            "Οι αναχωρήσεις γίνονται μόνο με ασφαλείς συνθήκες. Αν δεν βολεύει η μέρα, ο Δημήτρης επιστρέφει τα χρήματα. Η κράτηση ακυρώνεται επίσης χωρίς χρέωση έως 5 ώρες πριν την αναχώρηση.",
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
      meetingNote: "Ο Δημήτρης στέλνει την ακριβή τοποθεσία στο WhatsApp πριν την αναχώρηση — το σημείο αλλάζει ανάλογα με την εποχή.",
      phoneLabel: "Τηλέφωνο",
      map: "Άνοιγμα κοινοποιημένης τοποθεσίας",
      whatsapp: "WhatsApp",
      viber: "Viber",
    },
    footer: {
      tagline: "Εκδρομές ψαρέματος με τον Δημήτρη στη Νικήτη Χαλκιδικής.",
      rights: "Με επιφύλαξη παντός δικαιώματος.",
      privacy: "Πολιτική Απορρήτου",
      verified: "Οι λεπτομέρειες βασίζονται στην πινακίδα και σε πληροφορίες του Δημήτρη.",
    },
  },
  ro: {
    languageName: "Română",
    metaTitle: "Fishing 4 You Nikiti & Nea Moudania | Excursii de pescuit",
    metaDescription:
      "Pescuit de dimineață, croazieră de pescuit cu grătar și pescuit de noapte cu Dimitris. Nikiti vara, Nea Moudania iarna. Halkidiki, Grecia.",
    nav: {
      trips: "Excursii",
      story: "Experiența",
      gallery: "Galerie",
      faq: "Întrebări",
      book: "Rezervă",
    },
    hero: {
      eyebrow: "Nikiti · Nea Moudania · Halkidiki",
      title: "FISHING",
      accent: "12 luni pe an. 100% experiență. De la 40 €. Amintiri pentru o viață.",
      description:
        "Trei moduri de a descoperi marea cu Dimitris: pescuit dimineața, croazieră de o zi cu grătar sau pescuit după apus.",
      primary: "Rezervă acum",
      secondary: "Vezi programele",
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
      title: "Excursii de pescuit în Nikiti: o barcă, trei povești diferite.",
      intro:
        "Pornește la prima lumină, petrece o zi întreagă pe apă sau descoperă liniștea Mării Egee după lăsarea nopții.",
      priceNote:
        "Pescuitul de dimineață și cel de noapte costă 40 € de persoană, cu echipament și momeală incluse. Croaziera cu grătar costă 600 € pentru toată barca, pentru maximum 10 persoane — același preț fie că vine o persoană, fie zece. Plata se face cash.",
    },
    tours: [
      {
        id: "morning",
        number: "01",
        title: "Pescuit de dimineață",
        time: "07:00 — 10:30",
        duration: "3,5 ore",
        description:
          "Pescuit de dimineață cu echipament și momeală, cafea espresso, apă și suc pentru copii.",
        highlights: ["40 € de persoană", "Echipament & momeală", "Băuturi incluse", "Minimum 3 persoane"],
        tone: "sunrise",
      },
      {
        id: "cruise",
        number: "02",
        title: "Croazieră de pescuit & grătar",
        time: "11:30 — 18:30",
        duration: "7 ore",
        description:
          "Înot la Spathies, o plimbare prin Neos Marmaras cât căpitanul pregătește supa tradițională kakavia, o masă bogată în golfurile Porto Carras accesibile doar cu barca, iar la final o baie la insula Kelyfos.",
        highlights: ["600 € pentru barcă", "Maximum 10 persoane", "4 opriri", "Masă completă & băuturi"],
        tone: "day",
      },
      {
        id: "night",
        number: "03",
        title: "Pescuit de noapte",
        time: "21:00 — 00:30",
        duration: "3,5 ore",
        description:
          "Pescuit după apus cu echipament și momeală, o bere pentru fiecare adult și suc pentru copii.",
        highlights: ["40 € de persoană", "Echipament & momeală", "Bere sau suc pentru copii"],
        tone: "night",
      },
    ],
    captain: {
      eyebrow: "Căpitanul",
      title: "Aventuri de pescuit în Halkidiki",
      intro:
        "Cu Dimitris — Captain Chris — și echipajul Fishing 4 You, totul e pregătit pentru tine. Singurul lucru pe care trebuie să-l aduci e pofta de aventură. Îți oferim cea mai autentică experiență de turism pescăresc.",
      highlights: [
          "Fără aglomerație.",
          "Fără capcane turistice.",
          "Doar tu, marea și lanseta.",
      ],
      tagline: "Turism pescăresc, douăsprezece luni pe an.",
      whyTitle: "De ce să-l alegi pe Dimitris?",
      whyParagraphs: [
          "Fishing 4 You s-a născut din pasiunea noastră adevărată pentru pescuit și pentru mare.",
          "Barca de zece metri e mai mult decât o barcă de lucru. E casa lui pe apă. Complet dotată pentru siguranță și confort, te face să te simți ca un localnic din prima clipă.",
          "Dimitris se scufundă și pescuiește în apele astea de când era copil. Cunoaște fiecare recif, fiecare curent și fiecare loc unde se ascund peștii.",
      ],
      moreTitle: "Mai mult decât pescuit",
      moreParagraphs: [
          "Vino cu noi într-o aventură de neuitat în apele cristaline ale Halkidiki. Cu îndrumare experimentată, echipament de calitate și pasiune pentru mare, creăm experiențe pe care le vei ține minte mereu.",
          "Captura depinde de natură, dar zâmbetele, peisajul și clipele pe care le împarți la bord sunt mereu garantate. Fie că ești pescar cu experiență, fie că încerci pescuitul pe mare prima oară, scopul nostru e să-ți oferim o experiență sigură, plăcută și de neuitat.",
          "Folosim echipament bun, împărtășim cunoașterea locului și te îndrumăm pe tot parcursul ieșirii, ca să ai cele mai bune șanse. Natura are mereu ultimul cuvânt, dar fiecare excursie oferă priveliști uimitoare, liniște și amintiri care țin o viață.",
          "Reușita la pescuit depinde de condițiile mării și de pești. Garantăm cea mai bună experiență posibilă, îndrumarea unui om care cunoaște locurile și clipe de neuitat — dar nu putem garanta câți pești se prind.",
      ],
      guarantee: "Garantăm amintirile pe care le vei crea.",
      waiting: "Captain Chris și echipa lui te așteaptă. Ești la bord.",
    },
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
        "Barca din fotografie este barca reală Fishing 4 You. Ia maximum 10 persoane la fiecare plecare.",
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
          text: "Maximum 10 persoane la fiecare plecare, ca barca să nu fie niciodată aglomerată.",
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
      note: "Acestea sunt barca reală Fishing 4 You și afișul actual al punctului de întâlnire din Nikiti.",
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
      button: "Trimite cererea",
      direct: "Nu se efectuează plăți pe acest website.",
      messageTemplate:
        "Salut, Dimitris! Sunt interesat de {trip} în data de {date}. Suntem {adults} adult/adulți și {children} copil/copii. Poți confirma disponibilitatea, prețul final și ce este inclus? Mulțumesc!",
      nameLabel: "Numele tău",
      phoneLabel: "Telefon sau WhatsApp",
      emailLabel: "Email",
      emailOptional: "opțional",
      sending: "Se trimite…",
      sentTitle: "Cererea a fost trimisă.",
      sentBody:
        "Dimitris are cererea ta și va răspunde pentru a confirma data, prețul și punctul de întâlnire. Nimic nu este rezervat și nimic nu se plătește până nu răspunde el.",
      failedTitle: "Nu a mers.",
      failedBody:
        "Mesajul nu a putut fi trimis acum. Trimite-l pe WhatsApp — este deja scris, trebuie doar să apeși trimite.",
      failedButton: "Trimite pe WhatsApp",
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
            "Pescuitul de dimineață și cel de noapte costă 40 € de persoană. Croaziera cu grătar se plătește pe barcă: 600 € pentru toată ziua, de la 11:30 la 18:30, pentru maximum 10 persoane. Prețul nu se schimbă în funcție de numărul de participanți — o persoană sau zece, tot 600 € sunt. Barca nu poate lua mai mult de 10 persoane; dacă sunteți un grup mai mare, vorbiți cu Dimitris. Plata se face cash.",
        },
        {
          question: "Este inclus echipamentul de pescuit?",
          answer:
            "Da. La pescuitul de dimineață și de noapte sunt oferite echipamentul și momeala. Dimineața sunt incluse și cafea espresso, apă și suc pentru copii. Pescuitul de noapte include o bere pentru fiecare adult și suc pentru copii.",
        },
        {
          question: "Pot să aduc propriul echipament de pescuit?",
          answer:
            "Da. Dacă preferați să pescuiți cu propria undiță sau echipament, sunteți binevenit să le aduceți — Dimitris oferă oricum echipament și momeală pentru cei care nu au propriul echipament.",
        },
        {
          question: "Ce include croaziera cu grătar?",
          answer:
            "Prima oprire este la Spathies pentru înot. A doua este în Neos Marmaras, pentru aproximativ o oră de plimbare, timp în care căpitanul pregătește supa tradițională de pește kakavia. A treia oprire este în golfurile Porto Carras, accesibile numai cu barca, unde sunt pregătite pește, creveți, salate, tzatziki, skordalia, feta, dovlecei prăjiți, vin, băuturi răcoritoare, bere și apă. Ultima oprire este insula Kelyfos, pentru încă o baie înainte de întoarcere.",
        },
        {
          question: "Pot participa copiii?",
          answer:
            "Da. La bord există veste de salvare. Nu există o vârstă minimă, dar copiii sub 16 ani trebuie să fie însoțiți de un adult.",
        },
        {
          question: "De unde pleacă barca?",
          answer:
            "Fishing 4 You are baza la Marina Nikiti, care este și punctul de întâlnire pe tot sezonul de vară. Barca se mută în alte perioade ale anului, așa că Dimitris trimite locația exactă pe WhatsApp înainte de plecare.",
        },
        {
          question: "Ce se întâmplă dacă se schimbă vremea?",
          answer:
            "Plecările au loc doar în condiții sigure. Dacă ziua nu se potrivește, Dimitris restituie banii. Rezervarea se poate anula și fără costuri cu până la 5 ore înainte de plecare.",
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
      meetingNote: "Dimitris trimite locația exactă pe WhatsApp înainte de plecare — locul se schimbă în funcție de sezon.",
      phoneLabel: "Telefon",
      map: "Deschide locația trimisă în Maps",
      whatsapp: "WhatsApp",
      viber: "Viber",
    },
    footer: {
      tagline: "Excursii de pescuit cu Dimitris în Nikiti, Halkidiki.",
      rights: "Toate drepturile rezervate.",
      privacy: "Politica de confidențialitate",
      verified: "Detalii bazate pe afiș și pe informațiile comunicate direct de Dimitris.",
    },
  },
  ru: {
    languageName: "Русский",
    metaTitle: "Fishing 4 You Никити и Неа Мудания | Морская рыбалка",
    metaDescription:
      "Утренняя рыбалка, рыболовный круиз с барбекю и ночная рыбалка с Димитрисом. Никити летом, Неа Мудания зимой. Халкидики, Греция.",
    nav: {
      trips: "Экскурсии",
      story: "О поездке",
      gallery: "Галерея",
      faq: "Вопросы",
      book: "Забронировать",
    },
    hero: {
      eyebrow: "Никити · Неа Мудания · Халкидики",
      title: "FISHING",
      accent: "12 месяцев в году. 100% впечатлений. От 40 €. Воспоминания на всю жизнь.",
      description:
        "Три способа увидеть море с Димитрисом: утренняя рыбалка, дневной круиз с барбекю или рыбалка после заката.",
      primary: "Забронировать",
      secondary: "Посмотреть программы",
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
      title: "Рыболовные туры в Никити: одна лодка, три разные истории.",
      intro:
        "Выйдите с первым светом, проведите день на воде или откройте для себя тихое Эгейское море ночью.",
      priceNote:
        "Утренняя и ночная рыбалка стоят 40 € с человека, снасти и наживка включены. Круиз с барбекю стоит 600 € за всю лодку, до 10 человек — цена одна и та же, приедет один человек или десять. Оплата наличными.",
    },
    tours: [
      {
        id: "morning",
        number: "01",
        title: "Утренняя рыбалка",
        time: "07:00 — 10:30",
        duration: "3,5 часа",
        description:
          "Утренняя рыбалка со снастями и наживкой, кофе эспрессо, водой и соком для детей.",
        highlights: ["40 € с человека", "Снасти и наживка", "Напитки включены", "Минимум 3 гостя"],
        tone: "sunrise",
      },
      {
        id: "cruise",
        number: "02",
        title: "Рыболовный круиз & барбекю",
        time: "11:30 — 18:30",
        duration: "7 часов",
        description:
          "Купание у Спатьес, прогулка по Неос-Мармарасу, пока капитан готовит традиционную какавию, щедрый обед в бухтах Порто-Каррас, доступных только с моря, и напоследок купание у острова Келифос.",
        highlights: ["600 € за лодку", "До 10 человек", "4 остановки", "Полный обед и напитки"],
        tone: "day",
      },
      {
        id: "night",
        number: "03",
        title: "Ночная рыбалка",
        time: "21:00 — 00:30",
        duration: "3,5 часа",
        description:
          "Ночная рыбалка со снастями и наживкой, одной бутылкой пива для каждого взрослого и соком для детей.",
        highlights: ["40 € с человека", "Снасти и наживка", "Пиво или детский сок"],
        tone: "night",
      },
    ],
    captain: {
      eyebrow: "Капитан",
      title: "Рыболовные приключения на Халкидики",
      intro:
        "С Димитрисом — капитаном Крисом — и командой Fishing 4 You всё уже готово для вас. Взять с собой нужно только желание приключений. Мы предлагаем самый настоящий рыболовный отдых.",
      highlights: [
          "Без толпы.",
          "Без туристических ловушек.",
          "Только вы, море и удочка.",
      ],
      tagline: "Рыболовный туризм — двенадцать месяцев в году.",
      whyTitle: "Почему именно Димитрис?",
      whyParagraphs: [
          "Fishing 4 You родился из настоящей страсти к рыбалке и к морю.",
          "Десятиметровая лодка — больше, чем рабочее судно. Это его дом на воде. Полностью оснащённая для безопасности и удобства, она позволяет почувствовать себя местным с первой минуты.",
          "Димитрис ныряет и рыбачит в этих водах с детства. Он знает каждый риф, каждое течение и каждое место, где прячется рыба.",
      ],
      moreTitle: "Больше, чем просто рыбалка",
      moreParagraphs: [
          "Отправляйтесь с нами в незабываемое приключение по кристальным водам Халкидики. Опытное сопровождение, качественные снасти и любовь к морю — так рождаются впечатления, которые остаются надолго.",
          "Улов зависит от природы, но улыбки, виды и минуты, прожитые на борту, гарантированы всегда. Опытный вы рыбак или впервые пробуете морскую рыбалку — наша цель дать вам безопасный, приятный и незабываемый день.",
          "Мы используем хорошие снасти, делимся местными знаниями и сопровождаем вас всю поездку, чтобы дать вам лучший шанс. Последнее слово всегда за природой, но каждая поездка дарит прекрасные виды, покой и воспоминания на всю жизнь.",
          "Успех рыбалки зависит от состояния моря и от рыбы. Мы гарантируем лучший возможный день, сопровождение знающего человека и незабываемые моменты — но не можем гарантировать количество пойманной рыбы.",
      ],
      guarantee: "Мы гарантируем воспоминания, которые вы увезёте с собой.",
      waiting: "Captain Chris и его команда ждут вас. Вы с нами.",
    },
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
        "На фотографии настоящая лодка Fishing 4 You. На борт принимается не более 10 гостей за выход.",
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
          text: "Не более 10 гостей за выход, поэтому на лодке никогда не бывает тесно.",
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
      note: "Это настоящая лодка Fishing 4 You и актуальная вывеска у места встречи в Никити.",
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
      button: "Отправить заявку",
      direct: "Оплата на этом сайте не производится.",
      messageTemplate:
        "Здравствуйте, Димитрис! Меня интересует {trip} на {date}. Нас {adults} взрослых и {children} детей. Подтвердите, пожалуйста, наличие мест, итоговую цену и что включено. Спасибо!",
      nameLabel: "Ваше имя",
      phoneLabel: "Телефон или WhatsApp",
      emailLabel: "Email",
      emailOptional: "необязательно",
      sending: "Отправка…",
      sentTitle: "Заявка отправлена.",
      sentBody:
        "Димитрис получил вашу заявку и ответит, чтобы подтвердить дату, цену и место встречи. Ничего не забронировано и ничего не списывается, пока он не ответит.",
      failedTitle: "Не отправилось.",
      failedBody:
        "Сообщение не удалось отправить сейчас. Отправьте его в WhatsApp — оно уже написано, нужно только нажать отправить.",
      failedButton: "Отправить в WhatsApp",
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
            "Утренняя и ночная рыбалка стоят 40 € с человека. Круиз с барбекю оплачивается за лодку: 600 € за весь день, с 11:30 до 18:30, до 10 человек. Цена не зависит от числа участников — один человек или десять, это 600 €. Лодка не может взять больше 10 человек; если вас больше, свяжитесь с Димитрисом. Оплата наличными.",
        },
        {
          question: "Снасти включены?",
          answer:
            "Да. На утренней и ночной рыбалке предоставляются снасти и наживка. Утренняя поездка также включает кофе эспрессо, воду и сок для детей. Ночная рыбалка включает одно пиво для каждого взрослого и сок для детей.",
        },
        {
          question: "Можно ли привезти своё снаряжение для рыбалки?",
          answer:
            "Да. Если вы предпочитаете рыбачить со своей удочкой или снаряжением, можете взять их с собой — Димитрис всё равно предоставляет снасти и наживку тем, у кого своих нет.",
        },
        {
          question: "Что входит в круиз с барбекю?",
          answer:
            "Первая остановка — Спатьес для купания. Вторая — Неос-Мармарас, где можно гулять около часа, пока капитан готовит традиционный рыбный суп какавия. Третья — бухты Порто-Каррас, доступные только с моря, где готовят рыбу, креветки, салаты, дзадзики, скордалию, фету, жареные кабачки, а также подают вино, прохладительные напитки, пиво и воду. Последняя остановка — остров Келифос, где можно искупаться ещё раз перед возвращением.",
        },
        {
          question: "Можно ли с детьми?",
          answer:
            "Да. На борту есть спасательные жилеты. Минимального возраста нет, но дети до 16 лет должны быть в сопровождении взрослого.",
        },
        {
          question: "Откуда отправляется лодка?",
          answer:
            "База Fishing 4 You — марина Никити, там же место встречи весь летний сезон. В другое время года лодка стоит в других местах, поэтому точную локацию Димитрис присылает в WhatsApp перед выходом.",
        },
        {
          question: "Что будет при плохой погоде?",
          answer:
            "Выходы в море возможны только при безопасных условиях. Если день не подходит, Димитрис возвращает деньги. Бронирование также можно отменить бесплатно не позднее чем за 5 часов до выхода.",
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
      meetingNote: "Точное место Димитрис присылает в WhatsApp перед выходом — стоянка меняется по сезону.",
      phoneLabel: "Телефон",
      map: "Открыть полученное место на карте",
      whatsapp: "WhatsApp",
      viber: "Viber",
    },
    footer: {
      tagline: "Морская рыбалка с Димитрисом в Никити, Халкидики.",
      rights: "Все права защищены.",
      privacy: "Политика конфиденциальности",
      verified: "Сведения основаны на вывеске и информации, полученной напрямую от Димитриса.",
    },
  },
  de: {
    languageName: "Deutsch",
    metaTitle: "Fishing 4 You Nikiti & Nea Moudania | Angeltouren Chalkidiki",
    metaDescription:
      "Morgenangeln, Angelkreuzfahrt mit Barbecue und Nachtangeln mit Dimitris. Nikiti im Sommer, Nea Moudania im Winter. Chalkidiki, Griechenland.",
    nav: {
      trips: "Touren",
      story: "Das Erlebnis",
      gallery: "Galerie",
      faq: "FAQ",
      book: "Anfragen",
    },
    hero: {
      eyebrow: "Nikiti · Nea Moudania · Chalkidiki",
      title: "FISHING",
      accent: "12 Monate im Jahr. 100% Erlebnis. Ab 40 €. Erinnerungen fürs Leben.",
      description:
        "Drei Arten, das Meer mit Dimitris zu erleben: Morgenangeln, eine Tagestour mit Barbecue oder Angeln nach Sonnenuntergang.",
      primary: "Jetzt buchen",
      secondary: "Programme ansehen",
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
      title: "Angeltouren in Nikiti: ein Boot, drei verschiedene Geschichten.",
      intro:
        "Starten Sie im ersten Licht, verbringen Sie einen ganzen Tag auf dem Wasser oder erleben Sie die ruhige Ägäis bei Nacht.",
      priceNote:
        "Morgen- und Nachtangeln kosten 40 € pro Person, Ausrüstung und Köder inklusive. Die Barbecue-Ausfahrt kostet 600 € für das ganze Boot, für bis zu 10 Gäste — derselbe Preis, ob eine Person mitkommt oder zehn. Bezahlt wird bar.",
    },
    tours: [
      {
        id: "morning",
        number: "01",
        title: "Morgenangeln",
        time: "07:00 — 10:30",
        duration: "3,5 Stunden",
        description:
          "Morgenangeln mit Ausrüstung und Ködern sowie Espresso, Wasser und Saft für Kinder.",
        highlights: ["40 € pro Person", "Ausrüstung & Köder", "Getränke inklusive", "Mindestens 3 Gäste"],
        tone: "sunrise",
      },
      {
        id: "cruise",
        number: "02",
        title: "Angelkreuzfahrt & Barbecue",
        time: "11:30 — 18:30",
        duration: "7 Stunden",
        description:
          "Schwimmen bei Spathies, ein Spaziergang durch Neos Marmaras, während der Kapitän traditionelle Kakavia zubereitet, ein großzügiges Essen in den nur per Boot erreichbaren Buchten von Porto Carras und zum Abschluss ein Bad bei der Insel Kelyfos.",
        highlights: ["600 € für das Boot", "Bis zu 10 Gäste", "4 Stopps", "Komplettes Essen & Getränke"],
        tone: "day",
      },
      {
        id: "night",
        number: "03",
        title: "Nachtangeln",
        time: "21:00 — 00:30",
        duration: "3,5 Stunden",
        description:
          "Nachtangeln mit Ausrüstung und Ködern sowie einem Bier pro Erwachsenen und Saft für Kinder.",
        highlights: ["40 € pro Person", "Ausrüstung & Köder", "Bier oder Kindersaft"],
        tone: "night",
      },
    ],
    captain: {
      eyebrow: "Der Kapitän",
      title: "Angelabenteuer auf Chalkidiki",
      intro:
        "Mit Dimitris — Captain Chris — und der Crew von Fishing 4 You ist alles für Sie vorbereitet. Mitbringen müssen Sie nur die Lust auf Abenteuer. Wir bieten Ihnen den authentischsten Angelurlaub.",
      highlights: [
          "Kein Gedränge.",
          "Keine Touristenfallen.",
          "Nur Sie, das Meer und die Rute.",
      ],
      tagline: "Angeltourismus, zwölf Monate im Jahr.",
      whyTitle: "Warum Dimitris?",
      whyParagraphs: [
          "Fishing 4 You entstand aus echter Leidenschaft für das Angeln und für das Meer.",
          "Das zehn Meter lange Boot ist mehr als ein Arbeitsboot. Es ist sein Zuhause auf dem Wasser. Voll ausgestattet für Sicherheit und Komfort, lässt es Sie vom ersten Moment an wie einen Einheimischen fühlen.",
          "Dimitris taucht und angelt in diesen Gewässern, seit er ein Kind war. Er kennt jedes Riff, jede Strömung und jede Stelle, an der sich die Fische verstecken.",
      ],
      moreTitle: "Mehr als nur Angeln",
      moreParagraphs: [
          "Kommen Sie mit auf ein unvergessliches Abenteuer im kristallklaren Wasser von Chalkidiki. Mit erfahrener Führung, guter Ausrüstung und Leidenschaft für das Meer schaffen wir Erlebnisse, an die Sie sich immer erinnern werden.",
          "Der Fang hängt von der Natur ab, doch das Lachen, die Landschaft und die gemeinsamen Stunden an Bord sind immer sicher. Ob erfahrener Angler oder zum ersten Mal auf See — unser Ziel ist ein sicherer, schöner und unvergesslicher Tag.",
          "Wir verwenden gute Ausrüstung, teilen unser Wissen über die Gegend und begleiten Sie während der gesamten Fahrt, damit Sie die besten Chancen haben. Die Natur hat immer das letzte Wort, aber jede Ausfahrt bietet großartige Aussichten, Ruhe und Erinnerungen fürs Leben.",
          "Der Erfolg beim Angeln hängt von den Bedingungen auf See und von den Fischen ab. Wir garantieren das bestmögliche Erlebnis, die Begleitung durch einen Kenner und unvergessliche Momente — aber nicht die Zahl der gefangenen Fische.",
      ],
      guarantee: "Wir garantieren die Erinnerungen, die Sie mitnehmen.",
      waiting: "Captain Chris und sein Team warten auf Sie. Sie sind dabei.",
    },
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
        "Das abgebildete Boot ist das echte Fishing 4 You Boot. Es nimmt höchstens 10 Gäste pro Ausfahrt.",
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
          text: "Höchstens 10 Gäste pro Ausfahrt, damit es an Bord nie eng wird.",
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
      note: "Das sind das echte Fishing-4-You-Boot und das aktuelle Schild am Treffpunkt in Nikiti.",
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
      button: "Anfrage senden",
      direct: "Auf dieser Website erfolgt keine Zahlung.",
      messageTemplate:
        "Hallo Dimitris! Ich interessiere mich für {trip} am {date}. Wir sind {adults} Erwachsene und {children} Kinder. Kannst du bitte Verfügbarkeit, Endpreis und enthaltene Leistungen bestätigen? Danke!",
      nameLabel: "Ihr Name",
      phoneLabel: "Telefon oder WhatsApp",
      emailLabel: "E-Mail",
      emailOptional: "optional",
      sending: "Wird gesendet…",
      sentTitle: "Anfrage gesendet.",
      sentBody:
        "Dimitris hat Ihre Anfrage und meldet sich, um Datum, Preis und Treffpunkt zu bestätigen. Es ist nichts gebucht und es wird nichts berechnet, bis er antwortet.",
      failedTitle: "Das hat nicht geklappt.",
      failedBody:
        "Die Nachricht konnte gerade nicht gesendet werden. Senden Sie sie über WhatsApp — sie ist bereits geschrieben, Sie müssen nur auf Senden tippen.",
      failedButton: "Über WhatsApp senden",
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
            "Morgen- und Nachtangeln kosten 40 € pro Person. Die Barbecue-Ausfahrt wird pro Boot berechnet: 600 € für den ganzen Tag von 11:30 bis 18:30 Uhr, für bis zu 10 Gäste. Der Preis ändert sich nicht mit der Gruppengröße — ein Gast oder zehn, es sind 600 €. Mehr als 10 Personen kann das Boot nicht aufnehmen; sprechen Sie bei einer größeren Gruppe mit Dimitris. Bezahlt wird bar.",
        },
        {
          question: "Ist die Angelausrüstung inklusive?",
          answer:
            "Ja. Beim Morgen- und Nachtangeln werden Ausrüstung und Köder gestellt. Der Morgenausflug umfasst außerdem Espresso, Wasser und Saft für Kinder. Beim Nachtangeln gibt es ein Bier pro Erwachsenen und Saft für Kinder.",
        },
        {
          question: "Kann ich meine eigene Angelausrüstung mitbringen?",
          answer:
            "Ja. Wenn Sie lieber mit Ihrer eigenen Rute oder Ausrüstung angeln möchten, dürfen Sie diese gerne mitbringen — Dimitris stellt Ausrüstung und Köder trotzdem für alle bereit, die keine eigene haben.",
        },
        {
          question: "Was beinhaltet die Barbecue-Kreuzfahrt?",
          answer:
            "Der erste Stopp ist Spathies zum Schwimmen. Der zweite ist Neos Marmaras für etwa eine Stunde Landgang, während der Kapitän traditionelle Kakavia-Fischsuppe zubereitet. Der dritte Stopp sind die nur per Boot erreichbaren Buchten von Porto Carras. Dort werden Fisch, Garnelen, Salate, Tzatziki, Skordalia, Feta und frittierte Zucchini sowie Wein, Softdrinks, Bier und Wasser serviert. Letzter Stopp ist die Insel Kelyfos, für ein weiteres Bad vor der Rückfahrt.",
        },
        {
          question: "Können Kinder teilnehmen?",
          answer:
            "Ja. An Bord sind Rettungswesten vorhanden. Es gibt kein Mindestalter, aber Gäste unter 16 Jahren müssen von einem Erwachsenen begleitet werden.",
        },
        {
          question: "Wo fährt das Boot ab?",
          answer:
            "Fishing 4 You hat seinen Liegeplatz in der Marina Nikiti, dort ist in der gesamten Sommersaison auch der Treffpunkt. Zu anderen Jahreszeiten liegt das Boot woanders, deshalb schickt Dimitris den genauen Standort vor der Abfahrt per WhatsApp.",
        },
        {
          question: "Was passiert bei Wetteränderung?",
          answer:
            "Ausfahrten finden nur bei sicheren Bedingungen statt. Passt der Tag nicht, erstattet Dimitris das Geld. Eine Buchung lässt sich außerdem bis 5 Stunden vor der Abfahrt kostenfrei stornieren.",
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
      meetingNote: "Dimitris schickt den genauen Treffpunkt vor der Abfahrt per WhatsApp — der Liegeplatz wechselt mit der Saison.",
      phoneLabel: "Telefon",
      map: "Geteilten Standort in Maps öffnen",
      whatsapp: "WhatsApp",
      viber: "Viber",
    },
    footer: {
      tagline: "Angeltouren mit Dimitris in Nikiti auf Chalkidiki.",
      rights: "Alle Rechte vorbehalten.",
      privacy: "Datenschutzerklärung",
      verified: "Details basieren auf dem Schild und direkt von Dimitris erhaltenen Angaben.",
    },
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
