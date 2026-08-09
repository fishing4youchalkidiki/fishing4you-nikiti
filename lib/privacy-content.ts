import type { Locale } from "./content";

type PrivacySection = {
  title: string;
  paragraphs: string[];
};

type PrivacyContent = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  intro: string;
  updated: string;
  sections: PrivacySection[];
  back: string;
};

// Written against what this site actually does, not from a template. Every
// claim here was verified while building the booking form on 9 August 2026:
// no cookies are set, nothing is stored on a server of ours, the booking form
// posts once to a function that turns it into an email and keeps no copy, and
// the Resend account sends from the Ireland region. If any of that changes,
// this text has to change with it — a privacy policy that describes a site
// you no longer run is worse than none.
//
// Still missing: the registered company name and ΑΦΜ, which Dimitris has not
// sent. The business is identified by trading name, address and contact
// details until he does.
export const privacyContent: Record<Locale, PrivacyContent> = {
  en: {
    metaTitle: "Privacy Policy | Fishing 4 You Nikiti",
    metaDescription:
      "What Fishing 4 You does with your details when you send a booking request. No cookies, no accounts, no data sold.",
    title: "Privacy Policy",
    intro:
      "This site is run by Dimitris of Fishing 4 You in Nikiti, Halkidiki. It asks for very little, keeps nothing of its own, and sets no cookies. This page explains exactly what happens to what you send.",
    updated: "Last updated: 9 August 2026",
    back: "Back to the site",
    sections: [
      {
        title: "Who is responsible",
        paragraphs: [
          "Fishing 4 You, Nikiti Marina, 630 88, Halkidiki, Greece.",
          "Phone and WhatsApp: +30 6974 139200. Email: fishing4youchalkidiki@gmail.com.",
          "For anything about your data, write or call using the details above.",
        ],
      },
      {
        title: "What you give us, and why",
        paragraphs: [
          "When you send a booking request, the form asks for your name, your phone number, the trip and date you want, and how many adults and children are coming. Your email address is optional.",
          "We use it for one thing: to answer you and arrange the trip. Without a name and a phone number there is no way to reply, which is why those two are required.",
          "The form also records which language you used, so Dimitris knows which language to answer in.",
          "No payment is taken on this website and no card details are ever asked for.",
        ],
      },
      {
        title: "Where it goes",
        paragraphs: [
          "Your request becomes an email to Dimitris and nothing else. It is not saved in a database, because this site has none.",
          "The email is delivered by Resend, from servers in Ireland, inside the European Union. Dimitris reads it in Gmail, which is operated by Google.",
          "The site is hosted by Vercel. Visitor traffic passes through their servers, as it does with any website.",
          "If you choose the WhatsApp button instead of the form, the message goes through WhatsApp and their own privacy terms apply to it.",
          "We do not sell your details, and we do not send marketing.",
        ],
      },
      {
        title: "Visiting the site",
        paragraphs: [
          "This site sets no cookies and does not ask you to accept any. There is nothing to sign in to.",
          "We use Vercel Web Analytics and Speed Insights to count page views and measure how quickly pages load. Neither sets a cookie and neither creates an identifier that could follow you to other websites. What we see is aggregated: how many visits, from which country, on what kind of device, and how fast the site was.",
        ],
      },
      {
        title: "How long it is kept",
        paragraphs: [
          "The booking email stays in Dimitris' mailbox for as long as it is useful to him, in the same way as any message from a guest.",
          "Resend keeps a short-lived record of messages it has delivered, which it deletes on its own schedule.",
          "We keep no separate copy anywhere else, because there is nowhere to keep one.",
        ],
      },
      {
        title: "Your rights",
        paragraphs: [
          "Under the GDPR you may ask what we hold about you, ask for it to be corrected, or ask for it to be deleted. You may also object to our using it.",
          "In practice this is simple here: write or call using the details above and ask, and Dimitris will delete the message.",
          "If you are not satisfied with how we handle it, you may complain to the Hellenic Data Protection Authority (dpa.gr).",
        ],
      },
    ],
  },
  el: {
    metaTitle: "Πολιτική Απορρήτου | Fishing 4 You Νικήτη",
    metaDescription:
      "Τι κάνει το Fishing 4 You με τα στοιχεία σας όταν στέλνετε αίτημα κράτησης. Χωρίς cookies, χωρίς λογαριασμούς.",
    title: "Πολιτική Απορρήτου",
    intro:
      "Αυτή η ιστοσελίδα ανήκει στον Δημήτρη του Fishing 4 You στη Νικήτη Χαλκιδικής. Ζητά ελάχιστα, δεν κρατά τίποτα δικό της και δεν χρησιμοποιεί cookies. Εδώ εξηγούμε ακριβώς τι γίνεται με όσα μας στέλνετε.",
    updated: "Τελευταία ενημέρωση: 9 Αυγούστου 2026",
    back: "Επιστροφή στην ιστοσελίδα",
    sections: [
      {
        title: "Ποιος είναι υπεύθυνος",
        paragraphs: [
          "Fishing 4 You, Μαρίνα Νικήτης, 630 88, Χαλκιδική, Ελλάδα.",
          "Τηλέφωνο και WhatsApp: +30 6974 139200. Email: fishing4youchalkidiki@gmail.com.",
          "Για οτιδήποτε αφορά τα δεδομένα σας, επικοινωνήστε με τα παραπάνω στοιχεία.",
        ],
      },
      {
        title: "Τι μας δίνετε και γιατί",
        paragraphs: [
          "Όταν στέλνετε αίτημα κράτησης, η φόρμα ζητά το όνομά σας, το τηλέφωνό σας, την εκδρομή και την ημερομηνία που θέλετε, και πόσοι ενήλικες και παιδιά θα έρθουν. Το email σας είναι προαιρετικό.",
          "Το χρησιμοποιούμε για ένα πράγμα: να σας απαντήσουμε και να κανονίσουμε την εκδρομή. Χωρίς όνομα και τηλέφωνο δεν υπάρχει τρόπος να απαντήσουμε — γι' αυτό αυτά τα δύο είναι υποχρεωτικά.",
          "Η φόρμα καταγράφει επίσης σε ποια γλώσσα γράψατε, ώστε ο Δημήτρης να ξέρει σε ποια γλώσσα να απαντήσει.",
          "Δεν γίνεται καμία πληρωμή σε αυτή την ιστοσελίδα και δεν ζητούνται ποτέ στοιχεία κάρτας.",
        ],
      },
      {
        title: "Πού πηγαίνει",
        paragraphs: [
          "Το αίτημά σας γίνεται ένα email προς τον Δημήτρη και τίποτα άλλο. Δεν αποθηκεύεται σε βάση δεδομένων, γιατί αυτή η ιστοσελίδα δεν έχει.",
          "Το email παραδίδεται μέσω της Resend, από διακομιστές στην Ιρλανδία, εντός της Ευρωπαϊκής Ένωσης. Ο Δημήτρης το διαβάζει στο Gmail, που λειτουργεί η Google.",
          "Η ιστοσελίδα φιλοξενείται από τη Vercel. Η επισκεψιμότητα περνά από τους διακομιστές τους, όπως σε κάθε ιστοσελίδα.",
          "Αν επιλέξετε το κουμπί WhatsApp αντί για τη φόρμα, το μήνυμα περνά από το WhatsApp και ισχύουν οι δικοί τους όροι απορρήτου.",
          "Δεν πουλάμε τα στοιχεία σας και δεν στέλνουμε διαφημιστικά μηνύματα.",
        ],
      },
      {
        title: "Η επίσκεψή σας στη σελίδα",
        paragraphs: [
          "Αυτή η ιστοσελίδα δεν χρησιμοποιεί cookies και δεν σας ζητά να αποδεχτείτε κανένα. Δεν υπάρχει λογαριασμός για σύνδεση.",
          "Χρησιμοποιούμε το Vercel Web Analytics και το Speed Insights για να μετράμε τις επισκέψεις και την ταχύτητα φόρτωσης. Κανένα από τα δύο δεν χρησιμοποιεί cookie ούτε δημιουργεί αναγνωριστικό που θα μπορούσε να σας ακολουθήσει σε άλλες ιστοσελίδες. Βλέπουμε συγκεντρωτικά στοιχεία: πόσες επισκέψεις, από ποια χώρα, από τι είδους συσκευή και πόσο γρήγορα φόρτωσε η σελίδα.",
        ],
      },
      {
        title: "Πόσο καιρό κρατιέται",
        paragraphs: [
          "Το email της κράτησης παραμένει στο γραμματοκιβώτιο του Δημήτρη όσο του είναι χρήσιμο, όπως κάθε μήνυμα από επισκέπτη.",
          "Η Resend κρατά για μικρό διάστημα αρχείο των μηνυμάτων που παρέδωσε και το διαγράφει με δικό της πρόγραμμα.",
          "Εμείς δεν κρατάμε ξεχωριστό αντίγραφο πουθενά αλλού, γιατί δεν υπάρχει πού.",
        ],
      },
      {
        title: "Τα δικαιώματά σας",
        paragraphs: [
          "Βάσει του GDPR μπορείτε να ζητήσετε τι στοιχεία σας έχουμε, να ζητήσετε διόρθωσή τους ή διαγραφή τους. Μπορείτε επίσης να αντιταχθείτε στη χρήση τους.",
          "Στην πράξη εδώ είναι απλό: επικοινωνήστε με τα παραπάνω στοιχεία και ζητήστε το, και ο Δημήτρης θα διαγράψει το μήνυμα.",
          "Αν δεν μείνετε ικανοποιημένοι, μπορείτε να προσφύγετε στην Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα (dpa.gr).",
        ],
      },
    ],
  },
  ro: {
    metaTitle: "Politica de confidențialitate | Fishing 4 You Nikiti",
    metaDescription:
      "Ce face Fishing 4 You cu datele tale când trimiți o cerere de rezervare. Fără cookie-uri, fără conturi.",
    title: "Politica de confidențialitate",
    intro:
      "Acest site este al lui Dimitris, de la Fishing 4 You din Nikiti, Halkidiki. Cere foarte puțin, nu păstrează nimic la el și nu folosește cookie-uri. Aici îți explicăm exact ce se întâmplă cu ce ne trimiți.",
    updated: "Ultima actualizare: 9 august 2026",
    back: "Înapoi la site",
    sections: [
      {
        title: "Cine răspunde",
        paragraphs: [
          "Fishing 4 You, Marina Nikiti, 630 88, Halkidiki, Grecia.",
          "Telefon și WhatsApp: +30 6974 139200. Email: fishing4youchalkidiki@gmail.com.",
          "Pentru orice legat de datele tale, scrie sau sună la datele de mai sus.",
        ],
      },
      {
        title: "Ce ne dai și de ce",
        paragraphs: [
          "Când trimiți o cerere de rezervare, formularul cere numele tău, numărul de telefon, excursia și data dorită și câți adulți și copii veniți. Adresa de email este opțională.",
          "O folosim pentru un singur lucru: să-ți răspundem și să stabilim excursia. Fără nume și telefon nu avem cum să-ți răspundem — de asta acestea două sunt obligatorii.",
          "Formularul reține și în ce limbă ai scris, ca Dimitris să știe în ce limbă să răspundă.",
          "Pe acest site nu se face nicio plată și nu se cer niciodată date de card.",
        ],
      },
      {
        title: "Unde ajunge",
        paragraphs: [
          "Cererea ta devine un email către Dimitris și nimic altceva. Nu este salvată într-o bază de date, pentru că acest site nu are niciuna.",
          "Emailul este livrat prin Resend, de pe servere din Irlanda, în Uniunea Europeană. Dimitris îl citește în Gmail, operat de Google.",
          "Site-ul este găzduit de Vercel. Traficul trece prin serverele lor, ca la orice site.",
          "Dacă alegi butonul de WhatsApp în locul formularului, mesajul trece prin WhatsApp și se aplică termenii lor de confidențialitate.",
          "Nu vindem datele tale și nu trimitem mesaje publicitare.",
        ],
      },
      {
        title: "Vizita pe site",
        paragraphs: [
          "Acest site nu folosește cookie-uri și nu-ți cere să accepți niciunul. Nu există niciun cont în care să te conectezi.",
          "Folosim Vercel Web Analytics și Speed Insights ca să numărăm vizitele și să măsurăm cât de repede se încarcă paginile. Niciunul nu pune cookie și niciunul nu creează un identificator care să te urmărească pe alte site-uri. Vedem doar date agregate: câte vizite, din ce țară, de pe ce tip de dispozitiv și cât de repede a mers site-ul.",
        ],
      },
      {
        title: "Cât timp se păstrează",
        paragraphs: [
          "Emailul rezervării rămâne în căsuța lui Dimitris atât timp cât îi este util, la fel ca orice mesaj de la un client.",
          "Resend păstrează pentru scurt timp o evidență a mesajelor livrate, pe care o șterge după propriul program.",
          "Noi nu păstrăm o copie separată nicăieri altundeva, pentru că nu avem unde.",
        ],
      },
      {
        title: "Drepturile tale",
        paragraphs: [
          "Conform GDPR poți cere ce date avem despre tine, să fie corectate sau să fie șterse. Te poți opune și folosirii lor.",
          "În practică aici e simplu: scrie sau sună la datele de mai sus și cere asta, iar Dimitris va șterge mesajul.",
          "Dacă nu ești mulțumit de felul în care rezolvăm, poți depune plângere la Autoritatea elenă pentru protecția datelor (dpa.gr).",
        ],
      },
    ],
  },
  ru: {
    metaTitle: "Политика конфиденциальности | Fishing 4 You Никити",
    metaDescription:
      "Что Fishing 4 You делает с вашими данными при заявке на бронирование. Без cookie, без аккаунтов.",
    title: "Политика конфиденциальности",
    intro:
      "Этот сайт принадлежит Димитрису из Fishing 4 You в Никити, Халкидики. Он просит совсем немного, ничего не хранит у себя и не использует cookie. Здесь мы объясняем, что именно происходит с тем, что вы отправляете.",
    updated: "Последнее обновление: 9 августа 2026 г.",
    back: "Вернуться на сайт",
    sections: [
      {
        title: "Кто отвечает",
        paragraphs: [
          "Fishing 4 You, Марина Никити, 630 88, Халкидики, Греция.",
          "Телефон и WhatsApp: +30 6974 139200. Email: fishing4youchalkidiki@gmail.com.",
          "По любым вопросам о ваших данных пишите или звоните по указанным контактам.",
        ],
      },
      {
        title: "Что вы сообщаете и зачем",
        paragraphs: [
          "При отправке заявки форма запрашивает ваше имя, номер телефона, поездку и желаемую дату, а также сколько взрослых и детей приедет. Электронная почта — по желанию.",
          "Мы используем это для одного: чтобы ответить вам и договориться о поездке. Без имени и телефона ответить невозможно — поэтому эти два поля обязательны.",
          "Форма также фиксирует, на каком языке вы писали, чтобы Димитрис знал, на каком языке отвечать.",
          "На этом сайте не производится оплата и никогда не запрашиваются данные карты.",
        ],
      },
      {
        title: "Куда это попадает",
        paragraphs: [
          "Ваша заявка превращается в письмо Димитрису — и только. Она не сохраняется в базе данных, потому что у этого сайта её нет.",
          "Письмо доставляется через Resend, с серверов в Ирландии, на территории Европейского союза. Димитрис читает его в Gmail, который принадлежит Google.",
          "Сайт размещён на Vercel. Трафик проходит через их серверы, как и на любом сайте.",
          "Если вы выберете кнопку WhatsApp вместо формы, сообщение пойдёт через WhatsApp, и к нему применяются их условия конфиденциальности.",
          "Мы не продаём ваши данные и не рассылаем рекламу.",
        ],
      },
      {
        title: "Посещение сайта",
        paragraphs: [
          "Этот сайт не использует cookie и не просит вас ничего принимать. Здесь нет аккаунта, в который нужно входить.",
          "Мы используем Vercel Web Analytics и Speed Insights, чтобы считать посещения и измерять скорость загрузки. Ни то, ни другое не ставит cookie и не создаёт идентификатор, который мог бы следовать за вами на другие сайты. Мы видим обобщённые данные: сколько посещений, из какой страны, с какого типа устройства и насколько быстро работал сайт.",
        ],
      },
      {
        title: "Сколько это хранится",
        paragraphs: [
          "Письмо с заявкой остаётся в почте Димитриса столько, сколько оно ему нужно, как любое сообщение от гостя.",
          "Resend недолго хранит запись о доставленных письмах и удаляет её по собственному графику.",
          "Отдельной копии мы нигде не храним, потому что хранить её негде.",
        ],
      },
      {
        title: "Ваши права",
        paragraphs: [
          "Согласно GDPR вы можете спросить, какие данные о вас у нас есть, попросить их исправить или удалить. Вы также можете возразить против их использования.",
          "На практике здесь всё просто: напишите или позвоните по указанным контактам, и Димитрис удалит сообщение.",
          "Если вас не устроит наш ответ, вы можете подать жалобу в Греческое управление по защите данных (dpa.gr).",
        ],
      },
    ],
  },
  de: {
    metaTitle: "Datenschutzerklärung | Fishing 4 You Nikiti",
    metaDescription:
      "Was Fishing 4 You mit Ihren Angaben macht, wenn Sie eine Anfrage senden. Keine Cookies, keine Konten.",
    title: "Datenschutzerklärung",
    intro:
      "Diese Website gehört Dimitris von Fishing 4 You in Nikiti, Chalkidiki. Sie fragt sehr wenig ab, speichert selbst nichts und setzt keine Cookies. Hier steht genau, was mit dem geschieht, was Sie uns senden.",
    updated: "Zuletzt aktualisiert: 9. August 2026",
    back: "Zurück zur Website",
    sections: [
      {
        title: "Wer verantwortlich ist",
        paragraphs: [
          "Fishing 4 You, Marina Nikiti, 630 88, Chalkidiki, Griechenland.",
          "Telefon und WhatsApp: +30 6974 139200. E-Mail: fishing4youchalkidiki@gmail.com.",
          "Bei allem, was Ihre Daten betrifft, schreiben oder rufen Sie unter den oben genannten Angaben an.",
        ],
      },
      {
        title: "Was Sie uns geben und warum",
        paragraphs: [
          "Wenn Sie eine Anfrage senden, fragt das Formular nach Ihrem Namen, Ihrer Telefonnummer, der gewünschten Tour und dem Datum sowie danach, wie viele Erwachsene und Kinder mitkommen. Ihre E-Mail-Adresse ist freiwillig.",
          "Wir verwenden das für eine einzige Sache: Ihnen zu antworten und die Tour abzustimmen. Ohne Namen und Telefonnummer gibt es keine Möglichkeit zu antworten — deshalb sind diese beiden Pflicht.",
          "Das Formular hält außerdem fest, in welcher Sprache Sie geschrieben haben, damit Dimitris weiß, in welcher Sprache er antworten soll.",
          "Auf dieser Website erfolgt keine Zahlung, und es werden niemals Kartendaten abgefragt.",
        ],
      },
      {
        title: "Wohin es geht",
        paragraphs: [
          "Ihre Anfrage wird zu einer E-Mail an Dimitris, mehr nicht. Sie wird nicht in einer Datenbank gespeichert, denn diese Website hat keine.",
          "Die E-Mail wird über Resend zugestellt, von Servern in Irland, innerhalb der Europäischen Union. Dimitris liest sie in Gmail, betrieben von Google.",
          "Die Website wird von Vercel gehostet. Der Besucherverkehr läuft über deren Server, wie bei jeder Website.",
          "Wenn Sie statt des Formulars die WhatsApp-Schaltfläche wählen, läuft die Nachricht über WhatsApp, und deren Datenschutzbedingungen gelten dafür.",
          "Wir verkaufen Ihre Daten nicht und versenden keine Werbung.",
        ],
      },
      {
        title: "Ihr Besuch auf der Website",
        paragraphs: [
          "Diese Website setzt keine Cookies und bittet Sie nicht, welche zu akzeptieren. Es gibt kein Konto, in das man sich einloggen müsste.",
          "Wir nutzen Vercel Web Analytics und Speed Insights, um Seitenaufrufe zu zählen und die Ladegeschwindigkeit zu messen. Beide setzen kein Cookie und erzeugen keine Kennung, die Ihnen auf andere Websites folgen könnte. Wir sehen zusammengefasste Angaben: wie viele Besuche, aus welchem Land, mit welcher Art von Gerät und wie schnell die Seite war.",
        ],
      },
      {
        title: "Wie lange es gespeichert bleibt",
        paragraphs: [
          "Die Anfrage-E-Mail bleibt im Postfach von Dimitris, solange sie für ihn nützlich ist, wie jede Nachricht eines Gastes.",
          "Resend führt für kurze Zeit einen Nachweis über zugestellte Nachrichten und löscht ihn nach eigenem Zeitplan.",
          "Eine gesonderte Kopie bewahren wir nirgendwo auf, weil es dafür keinen Ort gibt.",
        ],
      },
      {
        title: "Ihre Rechte",
        paragraphs: [
          "Nach der DSGVO können Sie erfragen, welche Daten wir zu Ihnen haben, deren Berichtigung verlangen oder deren Löschung. Sie können der Nutzung auch widersprechen.",
          "In der Praxis ist das hier einfach: Schreiben oder rufen Sie unter den oben genannten Angaben an, und Dimitris löscht die Nachricht.",
          "Sind Sie mit unserem Umgang damit nicht zufrieden, können Sie sich bei der griechischen Datenschutzbehörde beschweren (dpa.gr).",
        ],
      },
    ],
  },
};
