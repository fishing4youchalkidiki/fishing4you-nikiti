import type { Locale } from "./content";

type GuideStep = {
  title: string;
  text: string;
};

type GuideContent = {
  nav: string;
  eyebrow: string;
  title: string;
  intro: string;
  journeyTitle: string;
  journey: GuideStep[];
  weather: string;
  rigTitle: string;
  rigIntro: string;
  rigAria: string;
  rigLabels: {
    line: string;
    hook: string;
    bait: string;
    sinker: string;
    seabed: string;
  };
  stepsEyebrow: string;
  stepsTitle: string;
  steps: GuideStep[];
  biteTitle: string;
  nibbleTitle: string;
  nibbleText: string;
  pullTitle: string;
  pullText: string;
  baitCheck: string;
  catchNote: string;
  safetyNote: string;
  mediaEyebrow: string;
  mediaTitle: string;
  mediaIntro: string;
  videoTitle: string;
  videoCaption: string;
  videoFallback: string;
  rodsAlt: string;
  rodsCaption: string;
  catchAlt: string;
  catchCaption: string;
  dolphinTitle: string;
  dolphinCaption: string;
  familyEyebrow: string;
  familyTitle: string;
  familyIntro: string;
  dimitrisAlt: string;
  dimitrisCaption: string;
  wifeCatchAlt: string;
  wifeCatchCaption: string;
  wifeHelmAlt: string;
  wifeHelmCaption: string;
  sonAlt: string;
  sonCaption: string;
  dogsAlt: string;
  dogsCaption: string;
  equipmentAlt: string;
  equipmentCaption: string;
  coastAlt: string;
  coastCaption: string;
};

export const guideContent: Record<Locale, GuideContent> = {
  en: {
    nav: "How to fish",
    eyebrow: "Know before you board",
    title: "From the marina to your first bite.",
    intro:
      "A simple visual guide to the real morning experience: the gear is ready, the crew chooses the fishing spot and you learn bottom fishing step by step.",
    journeyTitle: "What the trip feels like",
    journey: [
      {
        title: "Meet in Nikiti",
        text: "Meet at the confirmed marina point and board at the agreed time.",
      },
      {
        title: "Gear is provided",
        text: "You receive a rod, a single-hook rig, a sinker and shrimp bait.",
      },
      {
        title: "The crew finds the spot",
        text: "The route and fishing area are chosen according to sea conditions and local knowledge.",
      },
      {
        title: "Fish vertically",
        text: "Lower the rig beside the boat until the sinker reaches the seabed.",
      },
      {
        title: "Return to the marina",
        text: "Enjoy the ride back after the fishing session ends.",
      },
    ],
    weather:
      "Trips leave only when conditions are safe. The route, departure and fishing spot may change with the weather.",
    rigTitle: "The simple bottom-fishing setup",
    rigIntro:
      "Do not cast. Lower the rig vertically beside the boat and let the sinker touch the seabed.",
    rigAria:
      "Diagram of a bottom-fishing rig with one hook, shrimp bait and a sinker lowered to the seabed",
    rigLabels: {
      line: "Main line",
      hook: "One hook",
      bait: "Shrimp bait",
      sinker: "Sinker",
      seabed: "Seabed",
    },
    stepsEyebrow: "Six simple actions",
    stepsTitle: "How to give yourself the best chance",
    steps: [
      {
        title: "Reach the bottom",
        text: "Lower the rig until you feel the sinker touch the seabed.",
      },
      {
        title: "Remove the slack",
        text: "Reel in just enough line to keep a light, direct connection with the rig.",
      },
      {
        title: "Watch and feel",
        text: "Keep the rod steady and pay attention to the tip and the line in your hand.",
      },
      {
        title: "Do not rush the first tap",
        text: "Small fish may peck quickly at the shrimp. Stay ready and wait for a more committed pull.",
      },
      {
        title: "Follow the crew's signal",
        text: "When the pull becomes repeated or firm, react as the crew has demonstrated.",
      },
      {
        title: "Keep the line tight",
        text: "Reel smoothly without giving slack. If the bites stop, lift the rig and check the bait.",
      },
    ],
    biteTitle: "Nibble or real bite?",
    nibbleTitle: "Quick, light taps",
    nibbleText:
      "Often a small fish tasting or stealing the shrimp. Stay attentive and avoid a rushed strike.",
    pullTitle: "Repeated pull or weight",
    pullText:
      "The fish may have committed to the bait. Follow the crew's instruction and keep steady pressure.",
    baitCheck: "No more movement after several taps? Bring the rig up and check the shrimp.",
    catchNote:
      "A catch can never be guaranteed. Fish activity, sea conditions, timing, attention and technique all matter.",
    safetyNote:
      "Always follow the crew's instructions. Ask about a child's age and safety arrangements before booking.",
    mediaEyebrow: "Real trip media",
    mediaTitle: "This is what the morning looks like.",
    mediaIntro:
      "Real photographs and video from the Fishing 4 You boat, with no identifiable guests shown.",
    videoTitle: "Leaving Nikiti",
    videoCaption: "A short real clip from the boat, heading out with the fishing gear ready.",
    videoFallback: "Your browser does not support this video.",
    rodsAlt: "Fishing rods with sinkers prepared on the Fishing 4 You boat",
    rodsCaption: "Rods and bottom rigs prepared for the trip",
    catchAlt: "A real catch from a Fishing 4 You trip on the Aegean Sea",
    catchCaption: "A real catch from a day on the Aegean",
    dolphinTitle: "Dolphins alongside the boat",
    dolphinCaption:
      "A real moment at sea. Wildlife sightings are possible, but never guaranteed.",
    familyEyebrow: "The people behind the trip",
    familyTitle: "Meet the Fishing 4 You family.",
    familyIntro:
      "Dimitris, his wife, their son and the dogs share a life shaped by the boat and the Aegean.",
    dimitrisAlt: "Dimitris holding a large fish aboard the Fishing 4 You boat",
    dimitrisCaption: "Dimitris and a memorable catch",
    wifeCatchAlt: "Dimitris and his wife posing with a large fish on the boat",
    wifeCatchCaption: "Dimitris and his wife with a catch",
    wifeHelmAlt: "Dimitris and his wife together at the helm of the boat",
    wifeHelmCaption: "Together at the helm",
    sonAlt: "Dimitris with his son beside the fishing rods on the boat",
    sonCaption: "A family moment on the water",
    dogsAlt: "Dimitris with the dogs aboard the Fishing 4 You boat",
    dogsCaption: "The four-legged crew",
    equipmentAlt: "Fishing rods and reels arranged on the side of the boat",
    equipmentCaption: "Fishing equipment is provided on board",
    coastAlt: "The coastline near Nikiti viewed from the Aegean Sea",
    coastCaption: "The coast seen from the water",
  },
  el: {
    nav: "Πώς ψαρεύουμε",
    eyebrow: "Πριν ανεβείτε στο σκάφος",
    title: "Από τη μαρίνα μέχρι το πρώτο τσίμπημα.",
    intro:
      "Ένας απλός οπτικός οδηγός για την πραγματική πρωινή εμπειρία: ο εξοπλισμός είναι έτοιμος, το πλήρωμα επιλέγει το σημείο και μαθαίνετε ψάρεμα βυθού βήμα προς βήμα.",
    journeyTitle: "Πώς είναι η εκδρομή",
    journey: [
      {
        title: "Συνάντηση στη Νικήτη",
        text: "Συναντιόμαστε στο επιβεβαιωμένο σημείο της μαρίνας και επιβιβαζόμαστε την συμφωνημένη ώρα.",
      },
      {
        title: "Ο εξοπλισμός παρέχεται",
        text: "Παίρνετε καλάμι, αρματωσιά με ένα αγκίστρι, μολύβι και δόλωμα γαρίδα.",
      },
      {
        title: "Το πλήρωμα βρίσκει το σημείο",
        text: "Η διαδρομή και η περιοχή ψαρέματος επιλέγονται ανάλογα με τη θάλασσα και την τοπική εμπειρία.",
      },
      {
        title: "Κάθετο ψάρεμα",
        text: "Κατεβάζετε την αρματωσιά δίπλα στο σκάφος μέχρι το μολύβι να φτάσει στον βυθό.",
      },
      {
        title: "Επιστροφή στη μαρίνα",
        text: "Απολαμβάνετε τη διαδρομή της επιστροφής μετά το τέλος του ψαρέματος.",
      },
    ],
    weather:
      "Οι εκδρομές πραγματοποιούνται μόνο όταν οι συνθήκες είναι ασφαλείς. Η διαδρομή, η αναχώρηση και το σημείο ψαρέματος μπορεί να αλλάξουν λόγω καιρού.",
    rigTitle: "Η απλή αρματωσιά ψαρέματος βυθού",
    rigIntro:
      "Δεν κάνετε ρίψη. Κατεβάζετε την αρματωσιά κάθετα δίπλα στο σκάφος μέχρι το μολύβι να αγγίξει τον βυθό.",
    rigAria:
      "Διάγραμμα αρματωσιάς βυθού με ένα αγκίστρι, δόλωμα γαρίδα και μολύβι στον βυθό",
    rigLabels: {
      line: "Κύρια πετονιά",
      hook: "Ένα αγκίστρι",
      bait: "Δόλωμα γαρίδα",
      sinker: "Μολύβι",
      seabed: "Βυθός",
    },
    stepsEyebrow: "Έξι απλές κινήσεις",
    stepsTitle: "Πώς αυξάνετε τις πιθανότητες επιτυχίας",
    steps: [
      {
        title: "Φτάστε στον βυθό",
        text: "Κατεβάστε την αρματωσιά μέχρι να αισθανθείτε το μολύβι να ακουμπά στον βυθό.",
      },
      {
        title: "Μαζέψτε τα μπόσικα",
        text: "Τυλίξτε λίγο νήμα ώστε να υπάρχει ελαφριά και άμεση επαφή με την αρματωσιά.",
      },
      {
        title: "Κοιτάξτε και αισθανθείτε",
        text: "Κρατήστε το καλάμι σταθερό και προσέξτε την κορυφή και την αίσθηση της πετονιάς.",
      },
      {
        title: "Μην βιαστείτε στο πρώτο τσίμπημα",
        text: "Μικρά ψάρια μπορεί να τσιμπούν γρήγορα τη γαρίδα. Περιμένετε ένα πιο σταθερό τράβηγμα.",
      },
      {
        title: "Ακολουθήστε το σήμα του πληρώματος",
        text: "Όταν το τράβηγμα γίνει επαναλαμβανόμενο ή δυνατό, αντιδράστε όπως σας έδειξε το πλήρωμα.",
      },
      {
        title: "Κρατήστε την πετονιά τεντωμένη",
        text: "Τυλίξτε ομαλά χωρίς χαλάρωση. Αν σταματήσουν τα τσιμπήματα, σηκώστε την αρματωσιά και ελέγξτε το δόλωμα.",
      },
    ],
    biteTitle: "Τσίμπημα ή κανονική ψαριά;",
    nibbleTitle: "Γρήγορα, ελαφριά χτυπήματα",
    nibbleText:
      "Συχνά είναι μικρό ψάρι που δοκιμάζει ή κλέβει τη γαρίδα. Μείνετε προσεκτικοί χωρίς βιαστική κίνηση.",
    pullTitle: "Επαναλαμβανόμενο τράβηγμα ή βάρος",
    pullText:
      "Το ψάρι μπορεί να έχει πάρει το δόλωμα. Ακολουθήστε την οδηγία του πληρώματος και κρατήστε σταθερή πίεση.",
    baitCheck: "Δεν υπάρχει κίνηση μετά από αρκετά τσιμπήματα; Σηκώστε την αρματωσιά και ελέγξτε τη γαρίδα.",
    catchNote:
      "Η σύλληψη ψαριού δεν μπορεί να εγγυηθεί. Η δραστηριότητα των ψαριών, η θάλασσα, η στιγμή, η προσοχή και η τεχνική παίζουν ρόλο.",
    safetyNote:
      "Ακολουθείτε πάντα τις οδηγίες του πληρώματος. Ρωτήστε για την ηλικία του παιδιού και τα μέτρα ασφαλείας πριν την κράτηση.",
    mediaEyebrow: "Πραγματικό υλικό εκδρομής",
    mediaTitle: "Έτσι μοιάζει το πρωινό στη θάλασσα.",
    mediaIntro:
      "Πραγματικές φωτογραφίες και βίντεο από το Fishing 4 You, χωρίς αναγνωρίσιμους επισκέπτες.",
    videoTitle: "Αναχώρηση από τη Νικήτη",
    videoCaption: "Ένα σύντομο πραγματικό βίντεο από το σκάφος με τον εξοπλισμό έτοιμο.",
    videoFallback: "Ο περιηγητής σας δεν υποστηρίζει αυτό το βίντεο.",
    rodsAlt: "Καλάμια με μολύβια έτοιμα στο σκάφος Fishing 4 You",
    rodsCaption: "Καλάμια και αρματωσιές βυθού έτοιμα για την εκδρομή",
    catchAlt: "Πραγματική ψαριά από εκδρομή του Fishing 4 You στο Αιγαίο",
    catchCaption: "Πραγματική ψαριά από μια μέρα στο Αιγαίο",
    dolphinTitle: "Δελφίνια δίπλα στο σκάφος",
    dolphinCaption:
      "Μια πραγματική στιγμή στη θάλασσα. Η εμφάνιση άγριων ζώων είναι πιθανή, αλλά δεν είναι εγγυημένη.",
    familyEyebrow: "Οι άνθρωποι πίσω από την εκδρομή",
    familyTitle: "Γνωρίστε την οικογένεια του Fishing 4 You.",
    familyIntro:
      "Ο Δημήτρης, η σύζυγός του, ο γιος τους και τα σκυλιά μοιράζονται μια ζωή δεμένη με το σκάφος και το Αιγαίο.",
    dimitrisAlt: "Ο Δημήτρης κρατά ένα μεγάλο ψάρι στο σκάφος Fishing 4 You",
    dimitrisCaption: "Ο Δημήτρης με μια αξέχαστη ψαριά",
    wifeCatchAlt: "Ο Δημήτρης και η σύζυγός του με ένα μεγάλο ψάρι στο σκάφος",
    wifeCatchCaption: "Ο Δημήτρης και η σύζυγός του με την ψαριά",
    wifeHelmAlt: "Ο Δημήτρης και η σύζυγός του μαζί στη γέφυρα του σκάφους",
    wifeHelmCaption: "Μαζί στο τιμόνι",
    sonAlt: "Ο Δημήτρης με τον γιο του δίπλα στα καλάμια στο σκάφος",
    sonCaption: "Μια οικογενειακή στιγμή στη θάλασσα",
    dogsAlt: "Ο Δημήτρης με τα σκυλιά στο σκάφος Fishing 4 You",
    dogsCaption: "Το τετράποδο πλήρωμα",
    equipmentAlt: "Καλάμια και μηχανισμοί τοποθετημένα στο πλάι του σκάφους",
    equipmentCaption: "Ο εξοπλισμός ψαρέματος παρέχεται στο σκάφος",
    coastAlt: "Η ακτή κοντά στη Νικήτη όπως φαίνεται από το Αιγαίο",
    coastCaption: "Η ακτή όπως φαίνεται από τη θάλασσα",
  },
  ro: {
    nav: "Cum pescuiești",
    eyebrow: "Înainte să urci la bord",
    title: "De la port până la prima trăsătură.",
    intro:
      "Un ghid vizual simplu al experienței reale de dimineață: echipamentul este pregătit, echipajul alege locul și înveți pescuitul la fund pas cu pas.",
    journeyTitle: "Cum se desfășoară excursia",
    journey: [
      {
        title: "Întâlnirea în Nikiti",
        text: "Vă întâlniți în punctul confirmat din port și urcați la ora stabilită.",
      },
      {
        title: "Echipamentul este oferit",
        text: "Primești o lansetă, o montură cu un cârlig, un plumb și momeală din crevete.",
      },
      {
        title: "Echipajul alege locul",
        text: "Traseul și zona de pescuit sunt alese după starea mării și experiența locală.",
      },
      {
        title: "Pescuit vertical",
        text: "Cobori montura lângă barcă până când plumbul ajunge pe fund.",
      },
      {
        title: "Întoarcerea în port",
        text: "Te bucuri de drumul înapoi după încheierea sesiunii de pescuit.",
      },
    ],
    weather:
      "Excursiile pleacă numai când condițiile sunt sigure. Traseul, plecarea și locul de pescuit se pot schimba în funcție de vreme.",
    rigTitle: "Montura simplă pentru pescuit la fund",
    rigIntro:
      "Nu arunci montura. O cobori vertical lângă barcă până când plumbul atinge fundul mării.",
    rigAria:
      "Diagramă a unei monturi de fund cu un cârlig, momeală din crevete și un plumb coborât până pe fundul mării",
    rigLabels: {
      line: "Fir principal",
      hook: "Un cârlig",
      bait: "Crevete",
      sinker: "Plumb",
      seabed: "Fundul mării",
    },
    stepsEyebrow: "Șase acțiuni simple",
    stepsTitle: "Cum îți mărești șansele să prinzi",
    steps: [
      {
        title: "Ajungi la fund",
        text: "Coboară montura până simți că plumbul a atins fundul mării.",
      },
      {
        title: "Întinzi firul",
        text: "Recuperează doar cât trebuie pentru a păstra o legătură ușoară și directă cu montura.",
      },
      {
        title: "Privești și simți",
        text: "Ține lanseta stabilă și urmărește atent vârful și vibrațiile transmise prin fir.",
      },
      {
        title: "Nu te grăbi la prima ciupitură",
        text: "Peștii mici pot ciuguli rapid crevetele. Rămâi pregătit și așteaptă o tragere mai hotărâtă.",
      },
      {
        title: "Urmezi semnalul echipajului",
        text: "Când tragerea devine repetată sau fermă, reacționează așa cum ți-a arătat echipajul.",
      },
      {
        title: "Păstrezi firul întins",
        text: "Recuperează constant, fără să lași firul liber. Dacă trăsăturile se opresc, verifică momeala.",
      },
    ],
    biteTitle: "Ciupitură sau trăsătură adevărată?",
    nibbleTitle: "Atingeri rapide și ușoare",
    nibbleText:
      "De multe ori este un pește mic care gustă sau fură crevetele. Rămâi atent și nu trage în grabă.",
    pullTitle: "Tragere repetată sau greutate",
    pullText:
      "Peștele poate fi hotărât să ia momeala. Urmează indicația echipajului și menține o presiune constantă.",
    baitCheck: "Nu mai simți nimic după mai multe ciupituri? Ridică montura și verifică momeala.",
    catchNote:
      "Captura nu poate fi garantată. Activitatea peștilor, starea mării, momentul, atenția și tehnica au toate un rol.",
    safetyNote:
      "Urmează întotdeauna instrucțiunile echipajului. Întreabă despre vârsta copilului și măsurile de siguranță înainte de rezervare.",
    mediaEyebrow: "Materiale reale din excursie",
    mediaTitle: "Așa arată o dimineață pe mare.",
    mediaIntro:
      "Fotografii și un clip real de pe barca Fishing 4 You, fără clienți care pot fi identificați.",
    videoTitle: "Plecare din Nikiti",
    videoCaption: "Un clip scurt și real de pe barcă, cu echipamentul pregătit pentru pescuit.",
    videoFallback: "Browserul tău nu poate reda acest videoclip.",
    rodsAlt: "Lansete cu plumbi pregătite pe barca Fishing 4 You",
    rodsCaption: "Lansetele și monturile de fund pregătite pentru excursie",
    catchAlt: "O captură reală dintr-o excursie Fishing 4 You pe Marea Egee",
    catchCaption: "O captură reală dintr-o zi pe Marea Egee",
    dolphinTitle: "Delfini lângă barcă",
    dolphinCaption:
      "Un moment real pe mare. Delfinii pot apărea, dar observarea lor nu este garantată.",
    familyEyebrow: "Oamenii din spatele excursiei",
    familyTitle: "Cunoaște familia Fishing 4 You.",
    familyIntro:
      "Dimitris, soția sa, fiul lor și câinii împărtășesc o viață legată de barcă și de Marea Egee.",
    dimitrisAlt: "Dimitris ținând un pește mare la bordul bărcii Fishing 4 You",
    dimitrisCaption: "Dimitris și o captură memorabilă",
    wifeCatchAlt: "Dimitris și soția sa cu un pește mare pe barcă",
    wifeCatchCaption: "Dimitris și soția sa cu captura",
    wifeHelmAlt: "Dimitris și soția sa împreună la timona bărcii",
    wifeHelmCaption: "Împreună la timonă",
    sonAlt: "Dimitris cu fiul său lângă lansetele de pe barcă",
    sonCaption: "Un moment de familie pe mare",
    dogsAlt: "Dimitris cu câinii la bordul bărcii Fishing 4 You",
    dogsCaption: "Echipajul cu patru lăbuțe",
    equipmentAlt: "Lansete și mulinete aranjate pe partea laterală a bărcii",
    equipmentCaption: "Echipamentul de pescuit este oferit la bord",
    coastAlt: "Coasta din apropierea localității Nikiti văzută de pe Marea Egee",
    coastCaption: "Coasta văzută de pe mare",
  },
  ru: {
    nav: "Как ловить",
    eyebrow: "Перед выходом в море",
    title: "От марины до первой поклёвки.",
    intro:
      "Простой наглядный гид по реальной утренней поездке: снасти готовы, экипаж выбирает место, а вы шаг за шагом осваиваете донную ловлю.",
    journeyTitle: "Как проходит поездка",
    journey: [
      {
        title: "Встреча в Никити",
        text: "Встречаемся в подтверждённой точке марины и поднимаемся на борт в согласованное время.",
      },
      {
        title: "Снасти предоставляются",
        text: "Вы получаете удочку, оснастку с одним крючком, грузило и креветку для наживки.",
      },
      {
        title: "Экипаж выбирает место",
        text: "Маршрут и район ловли выбираются с учётом состояния моря и местного опыта.",
      },
      {
        title: "Вертикальная ловля",
        text: "Опустите оснастку рядом с лодкой, пока грузило не достигнет дна.",
      },
      {
        title: "Возвращение в марину",
        text: "После рыбалки насладитесь обратной прогулкой к берегу.",
      },
    ],
    weather:
      "Поездка состоится только при безопасных условиях. Маршрут, выход и место ловли могут измениться из-за погоды.",
    rigTitle: "Простая донная оснастка",
    rigIntro:
      "Забрасывать не нужно. Опустите оснастку вертикально рядом с лодкой, пока грузило не коснётся дна.",
    rigAria:
      "Схема донной оснастки с одним крючком, креветкой и грузилом, опущенным на морское дно",
    rigLabels: {
      line: "Основная леска",
      hook: "Один крючок",
      bait: "Креветка",
      sinker: "Грузило",
      seabed: "Морское дно",
    },
    stepsEyebrow: "Шесть простых действий",
    stepsTitle: "Как повысить шанс на улов",
    steps: [
      {
        title: "Достигните дна",
        text: "Опускайте оснастку, пока не почувствуете, что грузило коснулось дна.",
      },
      {
        title: "Уберите слабину",
        text: "Подмотайте немного лески, чтобы сохранить лёгкий прямой контакт с оснасткой.",
      },
      {
        title: "Смотрите и чувствуйте",
        text: "Держите удочку спокойно и следите за кончиком и ощущениями в леске.",
      },
      {
        title: "Не спешите при первом касании",
        text: "Мелкая рыба может быстро объедать креветку. Ждите более уверенной поклёвки.",
      },
      {
        title: "Следуйте подсказке экипажа",
        text: "Когда потяжка станет повторяющейся или уверенной, действуйте так, как показал экипаж.",
      },
      {
        title: "Держите леску натянутой",
        text: "Подматывайте плавно, не давая слабины. Если поклёвки прекратились, проверьте наживку.",
      },
    ],
    biteTitle: "Касание или настоящая поклёвка?",
    nibbleTitle: "Быстрые лёгкие касания",
    nibbleText:
      "Часто это мелкая рыба пробует или крадёт креветку. Будьте внимательны и не делайте поспешную подсечку.",
    pullTitle: "Повторяющаяся потяжка или вес",
    pullText:
      "Рыба могла уверенно взять наживку. Следуйте указанию экипажа и сохраняйте постоянное натяжение.",
    baitCheck: "После нескольких касаний движения больше нет? Поднимите оснастку и проверьте креветку.",
    catchNote:
      "Улов нельзя гарантировать. Важны активность рыбы, состояние моря, время, внимание и техника.",
    safetyNote:
      "Всегда выполняйте указания экипажа. До бронирования уточните возраст ребёнка и меры безопасности.",
    mediaEyebrow: "Настоящие материалы поездки",
    mediaTitle: "Так выглядит утро в море.",
    mediaIntro:
      "Реальные фотографии и видео с лодки Fishing 4 You без узнаваемых гостей.",
    videoTitle: "Выход из Никити",
    videoCaption: "Короткое настоящее видео с лодки и подготовленными снастями.",
    videoFallback: "Ваш браузер не поддерживает это видео.",
    rodsAlt: "Удочки с грузилами, подготовленные на лодке Fishing 4 You",
    rodsCaption: "Удочки и донные оснастки готовы к поездке",
    catchAlt: "Настоящий улов с экскурсии Fishing 4 You в Эгейском море",
    catchCaption: "Настоящий улов после дня в Эгейском море",
    dolphinTitle: "Дельфины рядом с лодкой",
    dolphinCaption:
      "Настоящий момент в море. Диких животных можно увидеть, но это не гарантируется.",
    familyEyebrow: "Люди, которые стоят за этой поездкой",
    familyTitle: "Познакомьтесь с семьёй Fishing 4 You.",
    familyIntro:
      "Димитрис, его жена, их сын и собаки живут жизнью, связанной с лодкой и Эгейским морем.",
    dimitrisAlt: "Димитрис держит крупную рыбу на борту лодки Fishing 4 You",
    dimitrisCaption: "Димитрис и запоминающийся улов",
    wifeCatchAlt: "Димитрис и его жена с крупной рыбой на лодке",
    wifeCatchCaption: "Димитрис и его жена с уловом",
    wifeHelmAlt: "Димитрис и его жена вместе у штурвала лодки",
    wifeHelmCaption: "Вместе у штурвала",
    sonAlt: "Димитрис с сыном рядом с удочками на лодке",
    sonCaption: "Семейный момент на воде",
    dogsAlt: "Димитрис с собаками на борту лодки Fishing 4 You",
    dogsCaption: "Четвероногая команда",
    equipmentAlt: "Удочки и катушки, размещённые вдоль борта лодки",
    equipmentCaption: "Рыболовные снасти предоставляются на борту",
    coastAlt: "Побережье рядом с Никити, вид с Эгейского моря",
    coastCaption: "Побережье с моря",
  },
  de: {
    nav: "So wird geangelt",
    eyebrow: "Vor dem Einsteigen",
    title: "Vom Hafen bis zum ersten Biss.",
    intro:
      "Ein einfacher visueller Leitfaden für den echten Morgenausflug: Die Ausrüstung ist bereit, die Crew wählt den Angelplatz und Sie lernen das Grundangeln Schritt für Schritt.",
    journeyTitle: "So läuft der Ausflug ab",
    journey: [
      {
        title: "Treffen in Nikiti",
        text: "Treffen Sie sich am bestätigten Punkt im Hafen und gehen Sie zur vereinbarten Zeit an Bord.",
      },
      {
        title: "Ausrüstung wird gestellt",
        text: "Sie erhalten eine Rute, ein Vorfach mit einem Haken, ein Gewicht und Garnele als Köder.",
      },
      {
        title: "Die Crew wählt den Platz",
        text: "Route und Angelgebiet werden nach Seegang und lokaler Erfahrung ausgewählt.",
      },
      {
        title: "Senkrecht angeln",
        text: "Lassen Sie die Montage neben dem Boot ab, bis das Gewicht den Meeresboden erreicht.",
      },
      {
        title: "Rückkehr zum Hafen",
        text: "Genießen Sie nach dem Angeln die Rückfahrt nach Nikiti.",
      },
    ],
    weather:
      "Ausflüge starten nur bei sicheren Bedingungen. Route, Abfahrt und Angelplatz können sich wetterbedingt ändern.",
    rigTitle: "Die einfache Grundmontage",
    rigIntro:
      "Nicht auswerfen. Lassen Sie die Montage senkrecht neben dem Boot ab, bis das Gewicht den Meeresboden berührt.",
    rigAria:
      "Darstellung einer Grundmontage mit einem Haken, Garnelenköder und einem Gewicht am Meeresboden",
    rigLabels: {
      line: "Hauptschnur",
      hook: "Ein Haken",
      bait: "Garnelenköder",
      sinker: "Gewicht",
      seabed: "Meeresboden",
    },
    stepsEyebrow: "Sechs einfache Schritte",
    stepsTitle: "So verbessern Sie Ihre Fangchance",
    steps: [
      {
        title: "Den Grund erreichen",
        text: "Lassen Sie die Montage ab, bis Sie spüren, dass das Gewicht den Meeresboden berührt.",
      },
      {
        title: "Lose Schnur aufnehmen",
        text: "Kurbeln Sie nur so viel ein, dass ein leichter direkter Kontakt zur Montage entsteht.",
      },
      {
        title: "Beobachten und fühlen",
        text: "Halten Sie die Rute ruhig und achten Sie auf die Spitze und die Bewegung der Schnur.",
      },
      {
        title: "Beim ersten Zupfen nicht eilen",
        text: "Kleine Fische können schnell am Köder zupfen. Warten Sie auf einen deutlicheren Zug.",
      },
      {
        title: "Dem Signal der Crew folgen",
        text: "Wenn der Zug wiederholt oder deutlich wird, reagieren Sie so, wie es die Crew gezeigt hat.",
      },
      {
        title: "Die Schnur gespannt halten",
        text: "Kurbeln Sie gleichmäßig ohne lose Schnur. Hören die Bisse auf, prüfen Sie den Köder.",
      },
    ],
    biteTitle: "Zupfen oder echter Biss?",
    nibbleTitle: "Schnelle, leichte Zupfer",
    nibbleText:
      "Oft probiert oder stiehlt ein kleiner Fisch die Garnele. Bleiben Sie aufmerksam und schlagen Sie nicht überhastet an.",
    pullTitle: "Wiederholter Zug oder Gewicht",
    pullText:
      "Der Fisch könnte den Köder genommen haben. Folgen Sie der Anweisung der Crew und halten Sie gleichmäßigen Druck.",
    baitCheck: "Nach mehreren Zupfern keine Bewegung mehr? Holen Sie die Montage ein und prüfen Sie die Garnele.",
    catchNote:
      "Ein Fang kann nicht garantiert werden. Fischaktivität, Seegang, Zeitpunkt, Aufmerksamkeit und Technik spielen zusammen.",
    safetyNote:
      "Befolgen Sie immer die Anweisungen der Crew. Fragen Sie vor der Buchung nach dem Alter des Kindes und den Sicherheitsvorkehrungen.",
    mediaEyebrow: "Echte Aufnahmen vom Ausflug",
    mediaTitle: "So sieht ein Morgen auf dem Meer aus.",
    mediaIntro:
      "Echte Fotos und ein Video vom Fishing-4-You-Boot, ohne erkennbare Gäste.",
    videoTitle: "Abfahrt aus Nikiti",
    videoCaption: "Ein kurzer echter Clip vom Boot mit vorbereiteter Angelausrüstung.",
    videoFallback: "Ihr Browser unterstützt dieses Video nicht.",
    rodsAlt: "Vorbereitete Angelruten mit Gewichten auf dem Fishing-4-You-Boot",
    rodsCaption: "Ruten und Grundmontagen sind für den Ausflug vorbereitet",
    catchAlt: "Ein echter Fang von einem Fishing-4-You-Ausflug in der Ägäis",
    catchCaption: "Ein echter Fang nach einem Tag in der Ägäis",
    dolphinTitle: "Delfine neben dem Boot",
    dolphinCaption:
      "Ein echter Moment auf dem Meer. Wildtiersichtungen sind möglich, aber nie garantiert.",
    familyEyebrow: "Die Menschen hinter dem Ausflug",
    familyTitle: "Lernen Sie die Fishing-4-You-Familie kennen.",
    familyIntro:
      "Dimitris, seine Frau, ihr Sohn und die Hunde teilen ein Leben, das vom Boot und der Ägäis geprägt ist.",
    dimitrisAlt: "Dimitris hält einen großen Fisch an Bord des Fishing-4-You-Bootes",
    dimitrisCaption: "Dimitris und ein unvergesslicher Fang",
    wifeCatchAlt: "Dimitris und seine Frau mit einem großen Fisch auf dem Boot",
    wifeCatchCaption: "Dimitris und seine Frau mit dem Fang",
    wifeHelmAlt: "Dimitris und seine Frau gemeinsam am Steuerstand des Bootes",
    wifeHelmCaption: "Gemeinsam am Steuer",
    sonAlt: "Dimitris mit seinem Sohn neben den Angelruten auf dem Boot",
    sonCaption: "Ein Familienmoment auf dem Wasser",
    dogsAlt: "Dimitris mit den Hunden an Bord des Fishing-4-You-Bootes",
    dogsCaption: "Die vierbeinige Crew",
    equipmentAlt: "Angelruten und Rollen an der Seite des Bootes",
    equipmentCaption: "Die Angelausrüstung wird an Bord gestellt",
    coastAlt: "Die Küste bei Nikiti vom Ägäischen Meer aus gesehen",
    coastCaption: "Die Küste vom Wasser aus gesehen",
  },
};
