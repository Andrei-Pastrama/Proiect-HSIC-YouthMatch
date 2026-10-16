const opportunities = [
  {
    id: 1, category: "Erasmus+", typeLabel: "ERASMUS+ · SCHIMB DE TINERET", icon: "globe-2",
    title: "Erasmus+ Youth Exchanges", organization: "Comisia Europeană · Erasmus+",
    location: "Proiecte internaționale", period: "Durata și datele depind de proiect",
    description: "Schimburi de învățare non-formală între grupuri de tineri din cel puțin două țări. Participarea se face prin organizațiile care implementează proiectul.",
    skills: ["#Călătorii", "#LucruÎnEchipă", "#Leadership"], color: "erasmus",
    source: "Ghidul oficial Erasmus+", sourceUrl: "https://erasmus-plus.ec.europa.eu/programme-guide/part-b/key-action-1/youth-exchanges",
    status: "Proiecte recurente · verifică apelurile",
  },
  {
    id: 2, category: "Erasmus+", typeLabel: "ERASMUS+ · PARTICIPARE CIVICĂ", icon: "messages-square",
    title: "Youth Participation Activities", organization: "Comisia Europeană · Erasmus+",
    location: "Local, național sau internațional", period: "Formatul depinde de proiect",
    description: "Activități non-formale prin care tinerii contribuie la dezbateri, inițiative civice și decizii care le influențează comunitățile.",
    skills: ["#ImplicareCivică", "#Dezbateri", "#Leadership"], color: "participare",
    source: "Ghidul oficial Erasmus+", sourceUrl: "https://erasmus-plus.ec.europa.eu/programme-guide/part-b/key-action-1/youth-participation",
    status: "Proiecte derulate de grupuri și organizații",
  },
  {
    id: 3, category: "Voluntariat", typeLabel: "EUROPEAN SOLIDARITY CORPS", icon: "heart-handshake",
    title: "Voluntariat individual ESC", organization: "European Solidarity Corps · UE",
    location: "România sau în străinătate", period: "2 săptămâni–12 luni",
    description: "Implică-te într-un proiect comunitar. Pentru rezidenți de 18–30 ani; pot fi acoperite transportul, cazarea, masa, asigurarea și bani de buzunar, conform regulilor programului.",
    skills: ["#Voluntariat", "#Comunitate", "#18–30ani"], color: "voluntariat",
    source: "Portalul oficial European Youth", sourceUrl: "https://youth.europa.eu/solidarity/young-people/volunteering_en",
    status: "Caută proiecte și condiții în portal",
  },
  {
    id: 4, category: "Voluntariat", typeLabel: "EUROPEAN SOLIDARITY CORPS", icon: "users-round",
    title: "Voluntariat în echipă ESC", organization: "European Solidarity Corps · UE",
    location: "România sau în străinătate", period: "2 săptămâni–2 luni",
    description: "Lucrează alături de cel puțin 5 voluntari din minimum două țări. Activitățile sunt full-time și susțin comunități locale.",
    skills: ["#LucruÎnEchipă", "#Comunitate", "#18–30ani"], color: "voluntariat",
    source: "Portalul oficial European Youth", sourceUrl: "https://youth.europa.eu/solidarity/young-people/volunteering_en",
    status: "Caută proiecte și condiții în portal",
  },
  {
    id: 5, category: "DiscoverEU", typeLabel: "ERASMUS+ · DISCOVEREU", icon: "train-front",
    title: "DiscoverEU — permis de călătorie", organization: "Comisia Europeană · Erasmus+",
    location: "Europa", period: "Călătorii eligibile: mart. 2027–mai 2028",
    description: "Program pentru tinerii de 18 ani eligibili, cu permis de călătorie și card de reduceri. Runda 1–15 octombrie 2026 s-a încheiat; următoarea dată nu este confirmată.",
    skills: ["#Călătorii", "#CulturiNoi", "#18ani"], color: "discovereu",
    source: "Pagina oficială DiscoverEU", sourceUrl: "https://youth.europa.eu/discovereu_en",
    status: "Runda oct. 2026 închisă · urmărește pagina",
  },
  {
    id: 6, category: "Digital", typeLabel: "EU CODE WEEK · CODING", icon: "code-2",
    title: "Ateliere și evenimente de programare", organization: "EU Code Week",
    location: "Caută evenimente în România", period: "Datele diferă în funcție de eveniment",
    description: "Descoperă activități de coding și competențe digitale din comunitatea EU Code Week. Verifică direct în catalog organizatorul, locul și data.",
    skills: ["#Programare", "#Digital", "#Creativitate"], color: "digital",
    source: "Catalogul oficial EU Code Week", sourceUrl: "https://codeweek.eu/events",
    status: "Catalog de evenimente · verifică datele",
  },
  {
    id: 7, category: "Eveniment local", typeLabel: "EVENIMENT EDUCAȚIONAL · IAȘI", icon: "graduation-cap",
    title: "IUF Iași — International University Fair", organization: "IUF · International University Fair",
    location: "Palas Congress Hall, Iași", period: "7 octombrie 2026 · 10:00–16:00",
    description: "Târg educațional cu universități și instituții din mai multe țări, pentru a afla despre programe de studiu, burse și opțiuni după liceu. Ediția din 2026 a avut loc deja.",
    skills: ["#Facultate", "#Burse", "#Orientare"], color: "eveniment",
    source: "Site-ul oficial IUF", sourceUrl: "https://iuf.world/ro/",
    status: "Ediția din 2026 s-a încheiat · urmărește următoarea dată",
  },
  {
    id: 8, category: "Voluntariat", typeLabel: "VOLUNTARIAT · IAȘI", icon: "heart-handshake",
    title: "Voluntariat la Crucea Roșie Iași", organization: "Crucea Roșie Română · Filiala Iași",
    location: "Iași", period: "Proiecte și perioade: întreabă filiala",
    description: "Filiala locală oferă sprijin umanitar persoanelor vulnerabile. Contactează echipa pentru a afla despre activitățile de voluntariat disponibile și pașii de înscriere.",
    skills: ["#Ajutor", "#PrimAjutor", "#Iași"], color: "voluntariat",
    source: "Site-ul Crucii Roșii Iași", sourceUrl: "https://crucearosieiasi.ro/",
    status: "Contactează filiala pentru înscrieri și condiții",
  },
];

const approvedActivityDomains = {
  1: ["erasmus-plus.ec.europa.eu", "europa.eu"],
  2: ["erasmus-plus.ec.europa.eu", "europa.eu"],
  3: ["youth.europa.eu", "europa.eu"],
  4: ["youth.europa.eu", "europa.eu"],
  5: ["youth.europa.eu", "europa.eu"],
  6: ["codeweek.eu"],
  7: ["iuf.world"],
  8: ["crucearosieiasi.ro", "crucearosie.ro"],
};

const translations = {
  en: {
    "YouthMatch MVP · Găsește-ți următoarea experiență": "YouthMatch MVP · Find your next experience",
    "Explorează oportunități": "Explore opportunities", "Găsește o idee": "Find an idea",
    "Pentru organizații": "For organizations",
    "MAI PUȚIN SCROLL. MAI MULTE EXPERIENȚE.": "LESS SCROLLING. MORE EXPERIENCES.",
    "Găsește ceva": "Find something", "pe stilul tău.": "that fits you.",
    "Programe de voluntariat, schimburi de tineri și activități digitale, într-un singur loc. Alege ce te atrage și verifică detaliile la organizator.":
      "Volunteering, youth exchanges and digital activities in one place. Choose what interests you and check the details with the organizer.",
    "Descoperă oportunități": "Discover opportunities", "Profil personalizat": "Personalized profile",
    "· experiențe potrivite ție": "· experiences picked for you", "gratuit": "free", "Gratuit": "Free",
    "Creează cont gratuit": "Create a free account", "Salvează-ți profilul și găsește oportunități": "Save your profile and find opportunities",
    "Creează cont YouthMatch": "Create your YouthMatch account", "Conectează-te la YouthMatch": "Sign in to YouthMatch",
    "Demo local: contul este disponibil doar în browserul acestui dispozitiv; nu există server sau sincronizare.":
      "Local demo: your account is available only in this browser on this device; there is no server or sync.",
    "Creează cont": "Sign up", "Conectare": "Sign in", "Numele tău": "Your name", "Email": "Email",
    "Parolă": "Password", "Confirmă parola": "Confirm password", "Închide": "Close",
    "Deconectare": "Sign out", "Contul meu": "My account", "Bun venit,": "Welcome,",
    "Tipul de acces": "Access type",
    "Introdu numele tău.": "Enter your name.",
    "Parolele nu se potrivesc.": "The passwords do not match.",
    "Acest email are deja un cont local. Conectează-te.": "This email already has a local account. Please sign in.",
    "Emailul sau parola nu sunt corecte.": "The email or password is incorrect.",
    "Nu s-a putut salva contul în acest browser.": "The account could not be saved in this browser.",
    "Nu s-a putut verifica datele contului în browser.": "The account data could not be checked in this browser.",
    "Autentificarea locală nu este disponibilă în acest browser.": "Local sign-in is not available in this browser.",
    "Contul a fost creat și ești conectat.": "Your account was created and you are signed in.",
    "Nu cerem date personale": "We don't ask for personal data",
    "OPORTUNITĂȚI DIN SURSE OFICIALE": "OPPORTUNITIES FROM OFFICIAL SOURCES",
    "direcții de explorat": "areas to explore",
    "alegi ce explorezi": "you choose what to explore", "versiune MVP · feedback-ul tău contează": "MVP version · your feedback matters",
    "PRIMUL PAS, FĂRĂ COMPLICAȚII": "YOUR FIRST STEP, MADE SIMPLE",
    "Ce ai vrea să încerci": "What would you like to try",
    "Răsfoiește programe reale. Apasă pe sursă pentru date, condiții și înscriere.":
      "Browse real programs. Visit the source for dates, requirements and applications.",
    "idei de explorat": "ideas to explore", "Toate": "All", "Voluntariat": "Volunteering",
    "Voluntariate viitoare": "Future volunteering", "Eveniment local": "Local event",
    "Digital": "Digital", "DiscoverEU": "DiscoverEU",
    "Caută după titlu, skill, oraș...": "Search by title, skill, city...",
    "Filtrează oportunitățile": "Filter opportunities", "Sortează alfabetic": "Sort alphabetically",
    "Titlu A–Z": "Title A–Z", "Titlu Z–A": "Title Z–A",
    "N-am găsit nimic aici.": "Nothing found here.", "Încearcă alt termen sau schimbă filtrul.":
      "Try another search or change the filter.", "Resetează filtrele": "Reset filters",
    "Arată toate": "Show all", "Verifică oportunitatea": "View opportunity",
    "Sursă oficială": "Official source", "Verifică mereu vârsta, perioada și înscrierea pe site-ul oficial.":
      "Always confirm age limits, dates and applications on the official website.",
    "YouthMatch este un prototip.": "YouthMatch is a prototype.",
    "NU ȘTII DE UNDE SĂ ÎNCEPI?": "NOT SURE WHERE TO START?",
    "Hai să găsim": "Let's find", "un punct de pornire.": "a place to start.",
    "Alege ce-ți place și adaugă câteva lucruri la care te pricepi. YouthMatch îți arată o sugestie simplă — nu e test și nu decide în locul tău.":
      "Choose what you enjoy and add a few skills. YouthMatch offers a simple suggestion — it's not a test and it won't decide for you.",
    "Nu ai nevoie de experiență": "No experience needed", "Începe cu ce te interesează.": "Start with what interests you.",
    "Sugestii ghidate de interesele tale": "Suggestions guided by your interests",
    "Selectează domenii și află de unde să începi.": "Choose areas and find out where to start.",
    "Tu alegi următorul pas": "You choose the next step", "Detaliile și înscrierea sunt la organizator.":
      "The organizer provides details and handles applications.",
    "SUGESTIE DE ÎNCEPUT": "A PLACE TO START", "Ce ți s-ar potrivi?": "What might suit you?",
    "Ce te interesează?": "What are you interested in?", "Vârsta ta": "Your age",
    "Ce știi să faci?": "What can you do?", "(opțional, desparte cu virgulă)": "(optional, comma-separated)",
    "Tech, jocuri și programare": "Tech, games and programming",
    "Ajutarea oamenilor și comunitatea": "Helping people and the community",
    "Artă, design și idei noi": "Art, design and new ideas", "Natură și animale": "Nature and animals",
    "ex. desen, engleză, lucru în echipă": "e.g. drawing, English, teamwork",
    "Arată-mi o idee": "Show me an idea",
    "Sugestiile sunt orientative; contul demo se salvează local în browser.":
      "Suggestions are for guidance; the demo account is saved locally in this browser.",
    "EXTRA · DEMO PENTRU ORGANIZAȚII": "EXTRA · ORGANIZATION DEMO",
    "Ai un proiect": "Have a project", "pentru tineri?": "for young people?",
    "Formularul de mai jos e doar o previzualizare. În acest MVP, anunțul nu se publică și nu este trimis nicăieri.":
      "The form below is a preview only. In this MVP, the listing isn't published or sent anywhere.",
    "GATA DE UN PRIM PAS?": "READY TO TAKE THE FIRST STEP?",
    "Începe cu ceva": "Start with something", "care te face curios.": "that makes you curious.",
    "Nu trebuie să ai tot planul. Alege doar ce vrei să explorezi.": "You don't need the whole plan. Just choose what you want to explore.",
    "Hai să vedem": "Let's explore", "Făcut cu": "Made with",
    "pentru elevii care vor să încerce ceva nou.": "for students who want to try something new.",
    "YOUTHMATCH PENTRU ORGANIZAȚII": "YOUTHMATCH FOR ORGANIZATIONS",
    "Previzualizează un anunț": "Preview a listing", "Cum se numește proiectul?": "What is the project called?",
    "ex. Atelier de design pentru liceeni": "e.g. Design workshop for high school students",
    "Pe cine cauți?": "Who are you looking for?", "Ce interese sau calități ar fi utile?": "What interests or qualities would be useful?",
    "Locuri": "Places", "Buget / participant": "Budget / participant", "ex. 500": "e.g. 500",
    "Previzualizează anunțul": "Preview listing", "Doar demo · datele nu se trimit sau salvează": "Demo only · data isn't sent or saved",
    "Select language": "Select language", "YouthMatch — pagina principală": "YouthMatch — home page",
    "Ateliere și evenimente de programare": "Coding workshops and events",
    "Voluntariat individual ESC": "ESC individual volunteering",
    "Youth Participation Activities": "Youth Participation Activities",
    "Erasmus+ Youth Exchanges": "Erasmus+ Youth Exchanges",
    "Voluntariat în echipă ESC": "ESC team volunteering",
    "DiscoverEU — permis de călătorie": "DiscoverEU — travel pass",
    "IUF Iași — International University Fair": "IUF Iași — International University Fair",
    "Voluntariat la Crucea Roșie Iași": "Volunteering with the Iași Red Cross",
    "EUROPEAN SOLIDARITY CORPS": "EUROPEAN SOLIDARITY CORPS",
    "ERASMUS+ · DISCOVEREU": "ERASMUS+ · DISCOVEREU",
    "EVENIMENT EDUCAȚIONAL · IAȘI": "EDUCATION FAIR · IAȘI",
    "VOLUNTARIAT · IAȘI": "VOLUNTEERING · IAȘI",
    "EU CODE WEEK · CODING": "EU CODE WEEK · CODING",
    "ERASMUS+ · PARTICIPARE CIVICĂ": "ERASMUS+ · YOUTH PARTICIPATION",
    "ERASMUS+ · SCHIMB DE TINERET": "ERASMUS+ · YOUTH EXCHANGE",
    "EU CODE WEEK · CODING": "EU CODE WEEK · CODING",
    "2 săptămâni–12 luni": "2 weeks–12 months",
    "Local, național sau internațional": "Local, national or international",
    "Proiecte internaționale": "International projects",
    "Caută evenimente în România": "Find events in Romania",
    "Radar local: verifică datele cunoscute și separă voluntariatele viitoare. Sursele externe nu sunt monitorizate live.":
      "Local radar: checks known dates and separates future volunteering. External sources are not monitored live.",
    "Verifică acum": "Check now", "Voluntariat · urmărește apeluri": "Volunteering · follow new calls",
    "Perioadă neconfirmată · verifică sursa oficială": "Dates not confirmed · check the official source",
    "În desfășurare": "Ongoing", "Urmează": "Upcoming", "Încheiat": "Ended",
    "Date de verificat": "Dates to check",
    "Nu există încă date confirmate pentru voluntariate viitoare. Verifică sursele oficiale.":
      "There are no confirmed dates for future volunteering yet. Check the official sources.",
    "Verificare locală actualizată:": "Local check updated:",
    "Detalii și analiză AI": "Details and AI analysis",
    "Rezumat și context": "Summary and context",
    "Locație": "Location", "Perioadă": "Dates",
    "Despre activitate": "About this activity", "Context și alternative": "Context and alternatives",
    "Cui i se potrivește": "Who it suits", "Date și durată": "Dates and duration",
    "Cum aplici": "How to apply", "Conturi și înscriere": "Accounts and applications",
    "Surse verificate": "Verified sources", "Pagina oficială a activității": "Official activity page",
    "Rezumatele AI sunt orientative; confirmă condițiile și datele la organizator.":
      "AI summaries are for guidance; confirm requirements and dates with the organizer.",
    "YouthMatch nu creează și nu șterge conturi pe platforma organizatorului. Aceste acțiuni se fac direct la serviciul respectiv.":
      "YouthMatch does not create or delete accounts on organizer platforms. Do this directly with the relevant service.",
    "Cont / înscriere la organizator": "Organizer account / application",
    "Informații despre ștergerea contului": "Account deletion information",
    "Nu a fost găsit un link oficial verificat pentru crearea contului. Deschide pagina oficială a activității pentru instrucțiuni.":
      "No verified official account-creation link was found. Open the official activity page for instructions.",
    "Nu a fost găsit un link oficial verificat pentru ștergerea contului. Contactează organizatorul sau consultă politica sa de confidențialitate.":
      "No verified official account-deletion link was found. Contact the organizer or check its privacy policy.",
    "Caut surse oficiale și pregătesc rezumatul AI…": "Searching official sources and preparing the AI summary…",
    "Nu am putut genera rezumatul acum. Verifică sursa oficială mai jos și încearcă din nou.":
      "The summary could not be generated right now. Check the official source below and try again.",
    "Analiză actualizată:": "Analysis updated:",
    "Sursă": "Source",
    "Contextul pieței nu este suficient de clar în sursele găsite.": "The available sources do not provide enough market context.",
    "Nu sunt disponibile date verificate pentru acest câmp.": "No verified information is available for this field.",
    "Deschide detaliile activității": "Open activity details",
    "Cheia GEMINI_API_KEY nu este configurată pe server. Configureaz-o pentru a activa rezumatele AI.":
      "GEMINI_API_KEY is not configured on the server. Set it to enable AI summaries.",
    "Analiza AI nu a putut fi generată. Verifică jurnalul serverului și încearcă din nou.":
      "The AI summary could not be generated. Check the server log and try again.",
    "Limita de solicitări AI a fost atinsă. Încearcă din nou mai târziu.":
      "The AI request limit was reached. Try again later.",
    "Limba nu este acceptată de serviciul de rezumate AI.":
      "This language is not supported by the AI summary service."
  },
  fr: {
    "YouthMatch MVP · Găsește-ți următoarea experiență": "YouthMatch MVP · Trouvez votre prochaine expérience",
    "Explorează oportunități": "Explorer les opportunités", "Găsește o idee": "Trouver une idée",
    "Pentru organizații": "Pour les organisations",
    "MAI PUȚIN SCROLL. MAI MULTE EXPERIENȚE.": "MOINS DE DÉFILEMENT. PLUS D’EXPÉRIENCES.",
    "Găsește ceva": "Trouvez quelque chose", "pe stilul tău.": "qui vous ressemble.",
    "Programe de voluntariat, schimburi de tineri și activități digitale, într-un singur loc. Alege ce te atrage și verifică detaliile la organizator.":
      "Bénévolat, échanges de jeunes et activités numériques au même endroit. Choisissez ce qui vous intéresse et vérifiez les détails auprès de l’organisateur.",
    "Descoperă oportunități": "Découvrir les opportunités", "Profil personalizat": "Profil personnalisé",
    "· experiențe potrivite ție": "· des expériences pour vous", "gratuit": "gratuit", "Gratuit": "Gratuit",
    "Creează cont gratuit": "Créer un compte gratuit", "Salvează-ți profilul și găsește oportunități": "Enregistrez votre profil et trouvez des opportunités",
    "Creează cont YouthMatch": "Créer un compte YouthMatch", "Conectează-te la YouthMatch": "Se connecter à YouthMatch",
    "Demo local: contul este disponibil doar în browserul acestui dispozitiv; nu există server sau sincronizare.":
      "Démo locale : votre compte est disponible uniquement dans ce navigateur sur cet appareil ; aucun serveur ni synchronisation.",
    "Creează cont": "Créer un compte", "Conectare": "Connexion", "Numele tău": "Votre nom", "Email": "E-mail",
    "Parolă": "Mot de passe", "Confirmă parola": "Confirmer le mot de passe", "Închide": "Fermer",
    "Deconectare": "Se déconnecter", "Contul meu": "Mon compte", "Bun venit,": "Bienvenue,",
    "Tipul de acces": "Type d’accès",
    "Introdu numele tău.": "Saisissez votre nom.",
    "Parolele nu se potrivesc.": "Les mots de passe ne correspondent pas.",
    "Acest email are deja un cont local. Conectează-te.": "Cet e-mail possède déjà un compte local. Connectez-vous.",
    "Emailul sau parola nu sunt corecte.": "L’e-mail ou le mot de passe est incorrect.",
    "Nu s-a putut salva contul în acest browser.": "Impossible d’enregistrer le compte dans ce navigateur.",
    "Nu s-a putut verifica datele contului în browser.": "Impossible de vérifier les données du compte dans le navigateur.",
    "Autentificarea locală nu este disponibilă în acest browser.": "La connexion locale n’est pas disponible dans ce navigateur.",
    "Contul a fost creat și ești conectat.": "Votre compte a été créé et vous êtes connecté.",
    "Nu cerem date personale": "Aucune donnée personnelle demandée",
    "OPORTUNITĂȚI DIN SURSE OFICIALE": "OPPORTUNITÉS ISSUES DE SOURCES OFFICIELLES",
    "direcții de explorat": "pistes à explorer",
    "alegi ce explorezi": "vous choisissez quoi explorer", "versiune MVP · feedback-ul tău contează": "Version MVP · votre avis compte",
    "PRIMUL PAS, FĂRĂ COMPLICAȚII": "UN PREMIER PAS, EN TOUTE SIMPLICITÉ",
    "Ce ai vrea să încerci": "Qu’aimeriez-vous essayer",
    "Răsfoiește programe reale. Apasă pe sursă pentru date, condiții și înscriere.":
      "Parcourez des programmes réels. Consultez la source pour les dates, conditions et inscriptions.",
    "idei de explorat": "idées à explorer", "Toate": "Tout", "Voluntariat": "Bénévolat",
    "Voluntariate viitoare": "Bénévolat à venir", "Eveniment local": "Événement local",
    "Digital": "Numérique", "DiscoverEU": "DiscoverEU",
    "Caută după titlu, skill, oraș...": "Rechercher par titre, compétence, ville...",
    "Filtrează oportunitățile": "Filtrer les opportunités", "Sortează alfabetic": "Trier par ordre alphabétique",
    "Titlu A–Z": "Titre A–Z", "Titlu Z–A": "Titre Z–A",
    "N-am găsit nimic aici.": "Aucun résultat.", "Încearcă alt termen sau schimbă filtrul.":
      "Essayez un autre terme ou modifiez le filtre.", "Resetează filtrele": "Réinitialiser les filtres",
    "Arată toate": "Tout afficher", "Verifică oportunitatea": "Voir l’opportunité",
    "Sursă oficială": "Source officielle", "Verifică mereu vârsta, perioada și înscrierea pe site-ul oficial.":
      "Vérifiez toujours l’âge, les dates et les inscriptions sur le site officiel.",
    "YouthMatch este un prototip.": "YouthMatch est un prototype.",
    "NU ȘTII DE UNDE SĂ ÎNCEPI?": "VOUS NE SAVEZ PAS PAR OÙ COMMENCER ?",
    "Hai să găsim": "Trouvons", "un punct de pornire.": "un point de départ.",
    "Alege ce-ți place și adaugă câteva lucruri la care te pricepi. YouthMatch îți arată o sugestie simplă — nu e test și nu decide în locul tău.":
      "Choisissez ce qui vous plaît et ajoutez quelques compétences. YouthMatch vous propose une piste — ce n’est pas un test et le choix vous appartient.",
    "Nu ai nevoie de experiență": "Aucune expérience requise", "Începe cu ce te interesează.": "Commencez par ce qui vous intéresse.",
    "Sugestii ghidate de interesele tale": "Des suggestions selon vos intérêts",
    "Selectează domenii și află de unde să începi.": "Choisissez des domaines pour savoir par où commencer.",
    "Tu alegi următorul pas": "Vous choisissez la suite", "Detaliile și înscrierea sunt la organizator.":
      "L’organisateur fournit les détails et gère les inscriptions.",
    "SUGESTIE DE ÎNCEPUT": "POUR BIEN COMMENCER", "Ce ți s-ar potrivi?": "Qu’est-ce qui vous conviendrait ?",
    "Ce te interesează?": "Qu’est-ce qui vous intéresse ?", "Vârsta ta": "Votre âge",
    "Ce știi să faci?": "Que savez-vous faire ?", "(opțional, desparte cu virgulă)": "(facultatif, séparé par des virgules)",
    "Tech, jocuri și programare": "Tech, jeux et programmation",
    "Ajutarea oamenilor și comunitatea": "Aider les autres et la communauté",
    "Artă, design și idei noi": "Art, design et nouvelles idées", "Natură și animale": "Nature et animaux",
    "ex. desen, engleză, lucru în echipă": "ex. dessin, anglais, travail d’équipe",
    "Arată-mi o idee": "Proposez-moi une idée",
    "Sugestiile sunt orientative; contul demo se salvează local în browser.":
      "Les suggestions sont indicatives ; le compte démo est enregistré localement dans ce navigateur.",
    "EXTRA · DEMO PENTRU ORGANIZAȚII": "EN PLUS · DÉMO POUR LES ORGANISATIONS",
    "Ai un proiect": "Vous avez un projet", "pentru tineri?": "pour les jeunes ?",
    "Formularul de mai jos e doar o previzualizare. În acest MVP, anunțul nu se publică și nu este trimis nicăieri.":
      "Le formulaire ci-dessous est un aperçu. Dans ce MVP, l’annonce n’est ni publiée ni envoyée.",
    "GATA DE UN PRIM PAS?": "PRÊT À FAIRE LE PREMIER PAS ?",
    "Începe cu ceva": "Commencez par quelque chose", "care te face curios.": "qui éveille votre curiosité.",
    "Nu trebuie să ai tot planul. Alege doar ce vrei să explorezi.": "Pas besoin d’avoir un plan complet. Choisissez simplement ce que vous voulez explorer.",
    "Hai să vedem": "C’est parti", "Făcut cu": "Fait avec",
    "pentru elevii care vor să încerce ceva nou.": "pour les élèves qui veulent tenter une nouvelle expérience.",
    "YOUTHMATCH PENTRU ORGANIZAȚII": "YOUTHMATCH POUR LES ORGANISATIONS",
    "Previzualizează un anunț": "Prévisualiser une annonce", "Cum se numește proiectul?": "Comment s’appelle le projet ?",
    "ex. Atelier de design pentru liceeni": "ex. Atelier de design pour lycéens",
    "Pe cine cauți?": "Qui recherchez-vous ?", "Ce interese sau calități ar fi utile?": "Quels centres d’intérêt ou qualités seraient utiles ?",
    "Locuri": "Places", "Buget / participant": "Budget / participant", "ex. 500": "ex. 500",
    "Previzualizează anunțul": "Prévisualiser l’annonce", "Doar demo · datele nu se trimit sau salvează": "Démo uniquement · données ni envoyées ni enregistrées",
    "Select language": "Choisir la langue", "YouthMatch — pagina principală": "YouthMatch — page d’accueil",
    "Ateliere și evenimente de programare": "Ateliers et événements de programmation",
    "Voluntariat individual ESC": "Bénévolat individuel CES",
    "Youth Participation Activities": "Activités de participation des jeunes",
    "Erasmus+ Youth Exchanges": "Échanges de jeunes Erasmus+",
    "Voluntariat în echipă ESC": "Bénévolat en équipe CES",
    "DiscoverEU — permis de călătorie": "DiscoverEU — titre de voyage",
    "IUF Iași — International University Fair": "IUF Iași — Salon international des universités",
    "Voluntariat la Crucea Roșie Iași": "Bénévolat à la Croix-Rouge de Iași",
    "EUROPEAN SOLIDARITY CORPS": "CORPS EUROPÉEN DE SOLIDARITÉ",
    "ERASMUS+ · DISCOVEREU": "ERASMUS+ · DISCOVEREU",
    "EVENIMENT EDUCAȚIONAL · IAȘI": "SALON DE L’ÉDUCATION · IAȘI",
    "VOLUNTARIAT · IAȘI": "BÉNÉVOLAT · IAȘI",
    "EU CODE WEEK · CODING": "EU CODE WEEK · PROGRAMMATION",
    "ERASMUS+ · PARTICIPARE CIVICĂ": "ERASMUS+ · PARTICIPATION DES JEUNES",
    "ERASMUS+ · SCHIMB DE TINERET": "ERASMUS+ · ÉCHANGE DE JEUNES",
    "EU CODE WEEK · CODING": "EU CODE WEEK · PROGRAMMATION",
    "2 săptămâni–12 luni": "2 semaines–12 mois",
    "Local, național sau internațional": "Local, national ou international",
    "Proiecte internaționale": "Projets internationaux",
    "Caută evenimente în România": "Trouver des événements en Roumanie",
    "Radar local: verifică datele cunoscute și separă voluntariatele viitoare. Sursele externe nu sunt monitorizate live.":
      "Radar local : vérifie les dates connues et distingue le bénévolat à venir. Les sources externes ne sont pas suivies en direct.",
    "Verifică acum": "Vérifier", "Voluntariat · urmărește apeluri": "Bénévolat · suivre les appels",
    "Perioadă neconfirmată · verifică sursa oficială": "Dates non confirmées · consultez la source officielle",
    "În desfășurare": "En cours", "Urmează": "À venir", "Încheiat": "Terminé",
    "Date de verificat": "Dates à vérifier",
    "Nu există încă date confirmate pentru voluntariate viitoare. Verifică sursele oficiale.":
      "Aucune date confirmée pour le bénévolat à venir. Consultez les sources officielles.",
    "Verificare locală actualizată:": "Vérification locale mise à jour :",
    "Detalii și analiză AI": "Détails et analyse IA",
    "Rezumat și context": "Résumé et contexte",
    "Locație": "Lieu", "Perioadă": "Dates",
    "Despre activitate": "À propos de l’activité", "Context și alternative": "Contexte et alternatives",
    "Cui i se potrivește": "Pour qui", "Date și durată": "Dates et durée",
    "Cum aplici": "Comment participer", "Conturi și înscriere": "Comptes et inscription",
    "Surse verificate": "Sources vérifiées", "Pagina oficială a activității": "Page officielle de l’activité",
    "Rezumatele AI sunt orientative; confirmă condițiile și datele la organizator.":
      "Les résumés IA sont indicatifs ; confirmez les conditions et les dates auprès de l’organisateur.",
    "YouthMatch nu creează și nu șterge conturi pe platforma organizatorului. Aceste acțiuni se fac direct la serviciul respectiv.":
      "YouthMatch ne crée ni ne supprime les comptes des plateformes organisatrices. Ces actions doivent être effectuées auprès du service concerné.",
    "Cont / înscriere la organizator": "Compte / inscription auprès de l’organisateur",
    "Informații despre ștergerea contului": "Informations sur la suppression du compte",
    "Nu a fost găsit un link oficial verificat pentru crearea contului. Deschide pagina oficială a activității pentru instrucțiuni.":
      "Aucun lien officiel vérifié pour créer un compte n’a été trouvé. Consultez la page officielle de l’activité.",
    "Nu a fost găsit un link oficial verificat pentru ștergerea contului. Contactează organizatorul sau consultă politica sa de confidențialitate.":
      "Aucun lien officiel vérifié pour supprimer un compte n’a été trouvé. Contactez l’organisateur ou consultez sa politique de confidentialité.",
    "Caut surse oficiale și pregătesc rezumatul AI…": "Recherche de sources officielles et préparation du résumé IA…",
    "Nu am putut genera rezumatul acum. Verifică sursa oficială mai jos și încearcă din nou.":
      "Impossible de générer le résumé. Consultez la source officielle ci-dessous et réessayez.",
    "Analiză actualizată:": "Analyse mise à jour :",
    "Sursă": "Source",
    "Contextul pieței nu este suficient de clar în sursele găsite.": "Les sources trouvées ne fournissent pas assez de contexte sur le marché.",
    "Nu sunt disponibile date verificate pentru acest câmp.": "Aucune information vérifiée n’est disponible pour ce champ.",
    "Deschide detaliile activității": "Ouvrir les détails de l’activité",
    "Cheia GEMINI_API_KEY nu este configurată pe server. Configureaz-o pentru a activa rezumatele AI.":
      "GEMINI_API_KEY n’est pas configurée sur le serveur. Configurez-la pour activer les résumés IA.",
    "Analiza AI nu a putut fi generată. Verifică jurnalul serverului și încearcă din nou.":
      "Le résumé IA n’a pas pu être généré. Consultez le journal du serveur et réessayez.",
    "Limita de solicitări AI a fost atinsă. Încearcă din nou mai târziu.":
      "La limite de requêtes IA est atteinte. Réessayez plus tard.",
    "Limba nu este acceptată de serviciul de rezumate AI.":
      "Cette langue n’est pas prise en charge par le service de résumé IA."
  },
  de: {
    "YouthMatch MVP · Găsește-ți următoarea experiență": "YouthMatch MVP · Finde dein nächstes Erlebnis",
    "Explorează oportunități": "Möglichkeiten entdecken", "Găsește o idee": "Idee finden",
    "Pentru organizații": "Für Organisationen",
    "MAI PUȚIN SCROLL. MAI MULTE EXPERIENȚE.": "WENIGER SCROLLEN. MEHR ERLEBEN.",
    "Găsește ceva": "Finde etwas", "pe stilul tău.": "das zu dir passt.",
    "Programe de voluntariat, schimburi de tineri și activități digitale, într-un singur loc. Alege ce te atrage și verifică detaliile la organizator.":
      "Freiwilligenprogramme, Jugendaustausch und digitale Aktivitäten an einem Ort. Wähle, was dich interessiert, und prüfe die Details beim Veranstalter.",
    "Descoperă oportunități": "Möglichkeiten entdecken", "Profil personalizat": "Persönliches Profil",
    "· experiențe potrivite ție": "· passende Erlebnisse für dich", "gratuit": "kostenlos", "Gratuit": "Kostenlos",
    "Creează cont gratuit": "Kostenloses Konto erstellen", "Salvează-ți profilul și găsește oportunități": "Speichere dein Profil und entdecke Möglichkeiten",
    "Creează cont YouthMatch": "YouthMatch-Konto erstellen", "Conectează-te la YouthMatch": "Bei YouthMatch anmelden",
    "Demo local: contul este disponibil doar în browserul acestui dispozitiv; nu există server sau sincronizare.":
      "Lokale Demo: Dein Konto ist nur in diesem Browser auf diesem Gerät verfügbar; es gibt keinen Server und keine Synchronisierung.",
    "Creează cont": "Konto erstellen", "Conectare": "Anmelden", "Numele tău": "Dein Name", "Email": "E-Mail",
    "Parolă": "Passwort", "Confirmă parola": "Passwort bestätigen", "Închide": "Schließen",
    "Deconectare": "Abmelden", "Contul meu": "Mein Konto", "Bun venit,": "Willkommen,",
    "Tipul de acces": "Zugangsart",
    "Introdu numele tău.": "Gib deinen Namen ein.",
    "Parolele nu se potrivesc.": "Die Passwörter stimmen nicht überein.",
    "Acest email are deja un cont local. Conectează-te.": "Für diese E-Mail gibt es bereits ein lokales Konto. Bitte melde dich an.",
    "Emailul sau parola nu sunt corecte.": "E-Mail oder Passwort ist falsch.",
    "Nu s-a putut salva contul în acest browser.": "Das Konto konnte in diesem Browser nicht gespeichert werden.",
    "Nu s-a putut verifica datele contului în browser.": "Die Kontodaten konnten in diesem Browser nicht geprüft werden.",
    "Autentificarea locală nu este disponibilă în acest browser.": "Die lokale Anmeldung ist in diesem Browser nicht verfügbar.",
    "Contul a fost creat și ești conectat.": "Dein Konto wurde erstellt und du bist angemeldet.",
    "Nu cerem date personale": "Keine persönlichen Daten erforderlich",
    "OPORTUNITĂȚI DIN SURSE OFICIALE": "ANGEBOTE AUS OFFIZIELLEN QUELLEN",
    "direcții de explorat": "Bereiche zum Entdecken",
    "alegi ce explorezi": "du entscheidest, was du erkundest", "versiune MVP · feedback-ul tău contează": "MVP-Version · dein Feedback zählt",
    "PRIMUL PAS, FĂRĂ COMPLICAȚII": "DEIN ERSTER SCHRITT, GANZ EINFACH",
    "Ce ai vrea să încerci": "Was möchtest du ausprobieren",
    "Răsfoiește programe reale. Apasă pe sursă pentru date, condiții și înscriere.":
      "Entdecke echte Programme. Auf der Quellseite findest du Termine, Bedingungen und Anmeldung.",
    "idei de explorat": "Ideen zum Entdecken", "Toate": "Alle", "Voluntariat": "Freiwilligenarbeit",
    "Voluntariate viitoare": "Künftige Freiwilligenarbeit", "Eveniment local": "Lokale Veranstaltung",
    "Digital": "Digital", "DiscoverEU": "DiscoverEU",
    "Caută după titlu, skill, oraș...": "Suche nach Titel, Fähigkeit, Stadt...",
    "Filtrează oportunitățile": "Angebote filtern", "Sortează alfabetic": "Alphabetisch sortieren",
    "Titlu A–Z": "Titel A–Z", "Titlu Z–A": "Titel Z–A",
    "N-am găsit nimic aici.": "Keine Ergebnisse gefunden.", "Încearcă alt termen sau schimbă filtrul.":
      "Versuche einen anderen Suchbegriff oder ändere den Filter.", "Resetează filtrele": "Filter zurücksetzen",
    "Arată toate": "Alle anzeigen", "Verifică oportunitatea": "Angebot ansehen",
    "Sursă oficială": "Offizielle Quelle", "Verifică mereu vârsta, perioada și înscrierea pe site-ul oficial.":
      "Prüfe Alter, Zeitraum und Anmeldung immer auf der offiziellen Website.",
    "YouthMatch este un prototip.": "YouthMatch ist ein Prototyp.",
    "NU ȘTII DE UNDE SĂ ÎNCEPI?": "DU WEISST NICHT, WO DU ANFANGEN SOLLST?",
    "Hai să găsim": "Finden wir", "un punct de pornire.": "einen Anfang.",
    "Alege ce-ți place și adaugă câteva lucruri la care te pricepi. YouthMatch îți arată o sugestie simplă — nu e test și nu decide în locul tău.":
      "Wähle, was dir gefällt, und ergänze ein paar Fähigkeiten. YouthMatch macht einen einfachen Vorschlag — kein Test und keine Entscheidung für dich.",
    "Nu ai nevoie de experiență": "Keine Erfahrung nötig", "Începe cu ce te interesează.": "Beginne mit deinen Interessen.",
    "Sugestii ghidate de interesele tale": "Vorschläge nach deinen Interessen",
    "Selectează domenii și află de unde să începi.": "Wähle Themen und finde heraus, wo du anfangen kannst.",
    "Tu alegi următorul pas": "Du entscheidest den nächsten Schritt", "Detaliile și înscrierea sunt la organizator.":
      "Details und Anmeldung gibt es beim Veranstalter.",
    "SUGESTIE DE ÎNCEPUT": "EIN ERSTER ANSATZ", "Ce ți s-ar potrivi?": "Was könnte zu dir passen?",
    "Ce te interesează?": "Was interessiert dich?", "Vârsta ta": "Dein Alter",
    "Ce știi să faci?": "Was kannst du gut?", "(opțional, desparte cu virgulă)": "(optional, durch Kommas trennen)",
    "Tech, jocuri și programare": "Technik, Spiele und Programmieren",
    "Ajutarea oamenilor și comunitatea": "Menschen helfen und Gemeinschaft",
    "Artă, design și idei noi": "Kunst, Design und neue Ideen", "Natură și animale": "Natur und Tiere",
    "ex. desen, engleză, lucru în echipă": "z. B. Zeichnen, Englisch, Teamarbeit",
    "Arată-mi o idee": "Zeig mir eine Idee",
    "Sugestiile sunt orientative; contul demo se salvează local în browser.":
      "Die Vorschläge dienen zur Orientierung; das Demokonto wird lokal in diesem Browser gespeichert.",
    "EXTRA · DEMO PENTRU ORGANIZAȚII": "EXTRA · DEMO FÜR ORGANISATIONEN",
    "Ai un proiect": "Hast du ein Projekt", "pentru tineri?": "für junge Menschen?",
    "Formularul de mai jos e doar o previzualizare. În acest MVP, anunțul nu se publică și nu este trimis nicăieri.":
      "Das folgende Formular ist nur eine Vorschau. In diesem MVP wird der Eintrag weder veröffentlicht noch versendet.",
    "GATA DE UN PRIM PAS?": "BEREIT FÜR DEN ERSTEN SCHRITT?",
    "Începe cu ceva": "Beginne mit etwas", "care te face curios.": "das dich neugierig macht.",
    "Nu trebuie să ai tot planul. Alege doar ce vrei să explorezi.": "Du brauchst keinen vollständigen Plan. Wähle einfach, was du entdecken möchtest.",
    "Hai să vedem": "Los geht's", "Făcut cu": "Mit",
    "pentru elevii care vor să încerce ceva nou.": "für Schülerinnen und Schüler, die etwas Neues ausprobieren möchten.",
    "YOUTHMATCH PENTRU ORGANIZAȚII": "YOUTHMATCH FÜR ORGANISATIONEN",
    "Previzualizează un anunț": "Eintrag ansehen", "Cum se numește proiectul?": "Wie heißt das Projekt?",
    "ex. Atelier de design pentru liceeni": "z. B. Design-Workshop für Schülerinnen und Schüler",
    "Pe cine cauți?": "Wen suchen Sie?", "Ce interese sau calități ar fi utile?": "Welche Interessen oder Eigenschaften wären hilfreich?",
    "Locuri": "Plätze", "Buget / participant": "Budget / Person", "ex. 500": "z. B. 500",
    "Previzualizează anunțul": "Eintrag ansehen", "Doar demo · datele nu se trimit sau salvează": "Nur Demo · Daten werden nicht gesendet oder gespeichert",
    "Select language": "Sprache auswählen", "YouthMatch — pagina principală": "YouthMatch — Startseite",
    "Ateliere și evenimente de programare": "Programmierworkshops und Veranstaltungen",
    "Voluntariat individual ESC": "Individueller ESK-Freiwilligendienst",
    "Youth Participation Activities": "Aktivitäten zur Jugendbeteiligung",
    "Erasmus+ Youth Exchanges": "Erasmus+ Jugendbegegnungen",
    "Voluntariat în echipă ESC": "ESK-Teamfreiwilligendienst",
    "DiscoverEU — permis de călătorie": "DiscoverEU — Travel-Pass",
    "IUF Iași — International University Fair": "IUF Iași — Internationale Hochschulmesse",
    "Voluntariat la Crucea Roșie Iași": "Freiwilligenarbeit beim Roten Kreuz Iași",
    "EUROPEAN SOLIDARITY CORPS": "EUROPÄISCHES SOLIDARITÄTSKORPS",
    "ERASMUS+ · DISCOVEREU": "ERASMUS+ · DISCOVEREU",
    "EVENIMENT EDUCAȚIONAL · IAȘI": "BILDUNGSMESSE · IAȘI",
    "VOLUNTARIAT · IAȘI": "FREIWILLIGENARBEIT · IAȘI",
    "EU CODE WEEK · CODING": "EU CODE WEEK · CODING",
    "ERASMUS+ · PARTICIPARE CIVICĂ": "ERASMUS+ · JUGENDBETEILIGUNG",
    "ERASMUS+ · SCHIMB DE TINERET": "ERASMUS+ · JUGENDBEGEGNUNG",
    "EU CODE WEEK · CODING": "EU CODE WEEK · CODING",
    "2 săptămâni–12 luni": "2 Wochen–12 Monate",
    "Local, național sau internațional": "Lokal, national oder international",
    "Proiecte internaționale": "Internationale Projekte",
    "Caută evenimente în România": "Veranstaltungen in Rumänien finden",
    "Radar local: verifică datele cunoscute și separă voluntariatele viitoare. Sursele externe nu sunt monitorizate live.":
      "Lokaler Radar: prüft bekannte Termine und filtert künftige Freiwilligenangebote. Externe Quellen werden nicht live überwacht.",
    "Verifică acum": "Jetzt prüfen", "Voluntariat · urmărește apeluri": "Freiwilligenarbeit · neue Aufrufe verfolgen",
    "Perioadă neconfirmată · verifică sursa oficială": "Zeitraum unbestätigt · offizielle Quelle prüfen",
    "În desfășurare": "Laufend", "Urmează": "Bevorstehend", "Încheiat": "Abgeschlossen",
    "Date de verificat": "Termine zu prüfen",
    "Nu există încă date confirmate pentru voluntariate viitoare. Verifică sursele oficiale.":
      "Es gibt noch keine bestätigten Termine für künftige Freiwilligenangebote. Prüfe die offiziellen Quellen.",
    "Verificare locală actualizată:": "Lokale Prüfung aktualisiert:",
    "Detalii și analiză AI": "Details und KI-Analyse",
    "Rezumat și context": "Zusammenfassung und Kontext",
    "Locație": "Ort", "Perioadă": "Zeitraum",
    "Despre activitate": "Über diese Aktivität", "Context și alternative": "Kontext und Alternativen",
    "Cui i se potrivește": "Für wen ist das geeignet", "Date și durată": "Termine und Dauer",
    "Cum aplici": "So bewirbst du dich", "Conturi și înscriere": "Konten und Anmeldung",
    "Surse verificate": "Geprüfte Quellen", "Pagina oficială a activității": "Offizielle Aktivitätsseite",
    "Rezumatele AI sunt orientative; confirmă condițiile și datele la organizator.":
      "KI-Zusammenfassungen dienen zur Orientierung; bestätige Bedingungen und Termine beim Veranstalter.",
    "YouthMatch nu creează și nu șterge conturi pe platforma organizatorului. Aceste acțiuni se fac direct la serviciul respectiv.":
      "YouthMatch erstellt oder löscht keine Konten auf Veranstalter-Plattformen. Diese Aktionen müssen direkt beim jeweiligen Dienst erfolgen.",
    "Cont / înscriere la organizator": "Konto / Anmeldung beim Veranstalter",
    "Informații despre ștergerea contului": "Informationen zur Kontolöschung",
    "Nu a fost găsit un link oficial verificat pentru crearea contului. Deschide pagina oficială a activității pentru instrucțiuni.":
      "Es wurde kein verifizierter offizieller Link zur Kontoerstellung gefunden. Öffne die offizielle Aktivitätsseite.",
    "Nu a fost găsit un link oficial verificat pentru ștergerea contului. Contactează organizatorul sau consultă politica sa de confidențialitate.":
      "Es wurde kein verifizierter offizieller Link zur Kontolöschung gefunden. Kontaktiere den Veranstalter oder lies dessen Datenschutzhinweise.",
    "Caut surse oficiale și pregătesc rezumatul AI…": "Offizielle Quellen werden gesucht und die KI-Zusammenfassung wird erstellt…",
    "Nu am putut genera rezumatul acum. Verifică sursa oficială mai jos și încearcă din nou.":
      "Die Zusammenfassung konnte gerade nicht erstellt werden. Prüfe die offizielle Quelle und versuche es erneut.",
    "Analiză actualizată:": "Analyse aktualisiert:",
    "Sursă": "Quelle",
    "Contextul pieței nu este suficient de clar în sursele găsite.": "Die verfügbaren Quellen liefern nicht genügend Marktkontext.",
    "Nu sunt disponibile date verificate pentru acest câmp.": "Für dieses Feld sind keine geprüften Informationen verfügbar.",
    "Deschide detaliile activității": "Aktivitätsdetails öffnen",
    "Cheia GEMINI_API_KEY nu este configurată pe server. Configureaz-o pentru a activa rezumatele AI.":
      "GEMINI_API_KEY ist auf dem Server nicht konfiguriert. Lege sie fest, um KI-Zusammenfassungen zu aktivieren.",
    "Analiza AI nu a putut fi generată. Verifică jurnalul serverului și încearcă din nou.":
      "Die KI-Zusammenfassung konnte nicht erstellt werden. Prüfe das Serverprotokoll und versuche es erneut.",
    "Limita de solicitări AI a fost atinsă. Încearcă din nou mai târziu.":
      "Das KI-Anfragelimit wurde erreicht. Bitte versuche es später erneut.",
    "Limba nu este acceptată de serviciul de rezumate AI.":
      "Diese Sprache wird vom KI-Zusammenfassungsdienst nicht unterstützt."
  }
};

let currentLanguage = "ro";
let activeHeroOpportunityId = 3;
const originalTextNodes = new WeakMap();
const originalAttributes = new WeakMap();
const planetDescriptions = {
  1: {
    ro: "Schimburi internaționale de învățare non-formală pentru tineri.",
    en: "International non-formal learning exchanges for young people.",
    fr: "Échanges internationaux d’apprentissage non formel pour les jeunes.",
    de: "Internationaler, non-formaler Jugendaustausch.",
  },
  2: {
    ro: "Inițiative civice prin care tinerii contribuie la deciziile comunității.",
    en: "Civic projects where young people help shape community decisions.",
    fr: "Des projets citoyens où les jeunes contribuent aux décisions locales.",
    de: "Jugendliche gestalten mit eigenen Ideen Entscheidungen in ihrer Gemeinde.",
  },
  3: {
    ro: "Voluntariat individual pentru proiecte comunitare, în țară sau în străinătate.",
    en: "Individual volunteering on community projects at home or abroad.",
    fr: "Bénévolat individuel pour des projets locaux ou à l’étranger.",
    de: "Individuelle Freiwilligenarbeit in lokalen oder internationalen Projekten.",
  },
  4: {
    ro: "Voluntariat în echipă internațională, pentru comunități locale.",
    en: "Team volunteering with an international group supporting local communities.",
    fr: "Bénévolat en équipe internationale au service des communautés locales.",
    de: "Freiwilligenarbeit im internationalen Team für lokale Gemeinschaften.",
  },
  5: {
    ro: "Permis de călătorie european pentru tineri eligibili de 18 ani.",
    en: "A European travel pass for eligible 18-year-olds.",
    fr: "Un titre de voyage européen pour les jeunes de 18 ans éligibles.",
    de: "Ein Europa-Reisepass für teilnahmeberechtigte 18-Jährige.",
  },
  6: {
    ro: "Ateliere de programare și activități digitale organizate local.",
    en: "Local coding workshops and digital activities.",
    fr: "Ateliers de programmation et activités numériques locales.",
    de: "Programmierworkshops und digitale Aktivitäten vor Ort.",
  },
  7: {
    ro: "Târg educațional despre universități, burse și studii.",
    en: "An education fair about universities, scholarships and study options.",
    fr: "Un salon pour découvrir les universités, les bourses et les études.",
    de: "Eine Bildungsmesse zu Hochschulen, Stipendien und Studienmöglichkeiten.",
  },
  8: {
    ro: "Implicare în activități umanitare alături de filiala locală.",
    en: "Join humanitarian activities with the local Red Cross branch.",
    fr: "Participez aux actions humanitaires de la section locale de la Croix-Rouge.",
    de: "Unterstütze humanitäre Aktionen des örtlichen Roten Kreuzes.",
  },
};

function translate(text) {
  return translations[currentLanguage]?.[text] || text;
}

function renderPlanets() {
  const planetField = document.querySelector("#planet-field");
  const planetSizes = [16, 20, 24, 18, 27, 15, 22, 19];
  planetField.innerHTML = opportunities.map((item, index) => {
    const orbit = Math.floor(index / 2);
    const duration = 110 + orbit * 25;
    const delay = index % 2 === 0 ? 0 : -(duration / 2);
    const radius = 66 + orbit * 28;
    const size = planetSizes[index % planetSizes.length];
    return `
      <div class="planet-orbit planet-orbit-${orbit + 1}"
        style="--orbit-duration:${duration}s;--orbit-delay:${delay}s;--orbit-radius:${radius}px;--planet-size:${size}px;--planet-offset:-${size / 2}px;--planet-icon-size:${Math.max(9, Math.round(size * 0.52))}px">
        <button class="orbit-node planet-${item.color}${item.id === activeHeroOpportunityId ? " is-active" : ""}"
          type="button" data-opportunity-id="${item.id}" data-opportunity-title="${escapeHtml(item.title)}"
          aria-label="${escapeHtml(translate(item.title))}" aria-pressed="${item.id === activeHeroOpportunityId}">
          <i data-lucide="${item.icon}"></i>
        </button>
      </div>`;
  }).join("");
  if (window.lucide) window.lucide.createIcons();

  planetField.querySelectorAll(".orbit-node").forEach((planet) => {
    const selectPlanet = () => updateHeroOpportunity(Number(planet.dataset.opportunityId));
    planet.addEventListener("pointerenter", () => {
      planetField.classList.add("is-interacting");
      selectPlanet();
      showPlanetTooltip(planet);
    });
    planet.addEventListener("pointerleave", (event) => {
      if (!planet.matches(":focus")) {
        planetField.classList.remove("is-interacting");
        if (event.pointerType !== "touch") hidePlanetTooltip();
      }
    });
    planet.addEventListener("focus", () => {
      planetField.classList.add("is-interacting");
      selectPlanet();
      showPlanetTooltip(planet);
    });
    planet.addEventListener("click", () => {
      selectPlanet();
      showPlanetTooltip(planet);
    });
    planet.addEventListener("focusout", (event) => {
      if (!event.relatedTarget?.closest("#planet-field, #planet-tooltip")) {
        planetField.classList.remove("is-interacting");
        hidePlanetTooltip();
      }
    });
  });
  updateHeroOpportunity();
}

function showPlanetTooltip(planet) {
  const item = opportunities.find((opportunity) => opportunity.id === Number(planet.dataset.opportunityId));
  if (!item) return;

  const tooltip = document.querySelector("#planet-tooltip");
  const orbit = document.querySelector(".match-orbit");
  const visual = document.querySelector(".hero-visual");
  tooltip.querySelector(".planet-tooltip-type").textContent = translate(item.typeLabel);
  tooltip.querySelector(".planet-tooltip-title").textContent = translate(item.title);
  tooltip.querySelector(".planet-tooltip-description").textContent =
    planetDescriptions[item.id][currentLanguage] || planetDescriptions[item.id].ro;
  tooltip.classList.remove("hidden");

  const orbitRect = orbit.getBoundingClientRect();
  const visualRect = visual.getBoundingClientRect();
  const planetRect = planet.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();
  const margin = 8;
  const gap = 14;
  const centerX = planetRect.left + planetRect.width / 2;
  const centerY = planetRect.top + planetRect.height / 2;
  const candidates = [
    { side: "right", x: planetRect.right + gap, y: centerY - tooltipRect.height / 2 },
    { side: "left", x: planetRect.left - gap - tooltipRect.width, y: centerY - tooltipRect.height / 2 },
    { side: "bottom", x: centerX - tooltipRect.width / 2, y: planetRect.bottom + gap },
    { side: "top", x: centerX - tooltipRect.width / 2, y: planetRect.top - gap - tooltipRect.height },
  ].map((candidate) => ({
    ...candidate,
    x: Math.max(visualRect.left + margin, Math.min(candidate.x, visualRect.right - tooltipRect.width - margin)),
    y: Math.max(visualRect.top + margin, Math.min(candidate.y, visualRect.bottom - tooltipRect.height - margin)),
  }));
  const otherPlanets = [...document.querySelectorAll(".orbit-node")]
    .filter((node) => node !== planet)
    .map((node) => node.getBoundingClientRect());
  const floatingCards = [...visual.querySelectorAll(".floating-card")].map((card) => card.getBoundingClientRect());
  const overlapArea = (a, b) => Math.max(0, Math.min(a.x + tooltipRect.width, b.right) - Math.max(a.x, b.left))
    * Math.max(0, Math.min(a.y + tooltipRect.height, b.bottom) - Math.max(a.y, b.top));
  const score = (candidate) => {
    const overflow = Math.max(0, visualRect.left + margin - candidate.x)
      + Math.max(0, candidate.x + tooltipRect.width - visualRect.right + margin)
      + Math.max(0, visualRect.top + margin - candidate.y)
      + Math.max(0, candidate.y + tooltipRect.height - visualRect.bottom + margin);
    const rect = { ...candidate, right: candidate.x + tooltipRect.width, bottom: candidate.y + tooltipRect.height };
    const planetOverlap = otherPlanets.reduce((total, other) => total + overlapArea(rect, other) * 5, 0);
    const cardOverlap = floatingCards.reduce((total, card) => total + overlapArea(rect, card) * 2, 0);
    const distance = Math.hypot(candidate.x + tooltipRect.width / 2 - centerX, candidate.y + tooltipRect.height / 2 - centerY) * .01;
    return overflow * 100 + planetOverlap + cardOverlap + distance;
  };
  const placement = candidates.sort((a, b) => score(a) - score(b))[0];
  const scaleX = orbit.offsetWidth / orbitRect.width;
  const scaleY = orbit.offsetHeight / orbitRect.height;
  tooltip.dataset.side = placement.side;
  tooltip.style.left = `${(placement.x - orbitRect.left) * scaleX}px`;
  tooltip.style.top = `${(placement.y - orbitRect.top) * scaleY}px`;
}

function hidePlanetTooltip() {
  document.querySelector("#planet-tooltip").classList.add("hidden");
}

function updateHeroOpportunity(opportunityId = activeHeroOpportunityId) {
  const item = opportunities.find((opportunity) => opportunity.id === opportunityId);
  if (!item) return;
  activeHeroOpportunityId = item.id;

  document.querySelectorAll(".orbit-node").forEach((planet) => {
    const isActive = Number(planet.dataset.opportunityId) === item.id;
    planet.classList.toggle("is-active", isActive);
    planet.setAttribute("aria-pressed", String(isActive));
    planet.setAttribute("aria-label", translate(planet.dataset.opportunityTitle));
  });
  if (window.lucide) window.lucide.createIcons();
}

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : "ro";
  document.documentElement.lang = currentLanguage;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (node.parentElement?.closest("#radar-status")) continue;
    const original = originalTextNodes.get(node) || node.nodeValue;
    originalTextNodes.set(node, original);
    const leading = original.match(/^\s*/)?.[0] || "";
    const trailing = original.match(/\s*$/)?.[0] || "";
    const content = original.trim();
    node.nodeValue = content ? `${leading}${translate(content)}${trailing}` : original;
  }
  document.querySelectorAll("[placeholder], [title], [aria-label]").forEach((element) => {
    const attributes = originalAttributes.get(element) || {};
    ["placeholder", "title", "aria-label"].forEach((name) => {
      const value = element.getAttribute(name);
      if (value === null) return;
      if (!(name in attributes)) attributes[name] = value;
      element.setAttribute(name, translate(attributes[name]));
    });
    originalAttributes.set(element, attributes);
  });
  updateHeroOpportunity();
  const activePlanet = document.querySelector(`.orbit-node[data-opportunity-id="${activeHeroOpportunityId}"]`);
  if (!document.querySelector("#planet-tooltip").classList.contains("hidden") && activePlanet) {
    showPlanetTooltip(activePlanet);
  }
  updateAccountCard();
  if (window.lucide) window.lucide.createIcons();
}

function mountInteractiveComponents() {
  const filters = [
    ["Erasmus+", "globe-2"],
    ["Voluntariat", "heart-handshake"],
    ["Viitoare", "calendar-clock"],
    ["Eveniment local", "calendar-days"],
    ["DiscoverEU", "train-front"],
    ["Digital", "code-2"],
  ];
  const filterButtons = filters.map(([category, icon]) => `
    <button class="filter-pill" data-filter="${category}">
      <i data-lucide="${icon}"></i>${translate(category === "Viitoare" ? "Voluntariate viitoare" : category)}
    </button>`).join("");

  document.querySelector("#opportunity-controls").innerHTML = `
    <div class="filter-panel">
      <label class="search-field" for="opportunity-search">
        <i data-lucide="search"></i>
        <input id="opportunity-search" type="search" placeholder="${translate("Caută după titlu, skill, oraș...")}" autocomplete="off" />
        <kbd>Ctrl K</kbd>
      </label>
      <div class="filter-divider"></div>
      <div class="filter-pills" role="group" aria-label="Filtrează oportunitățile">
        <button class="filter-pill active" data-filter="Toate">${translate("Toate")} <span>${String(opportunities.length).padStart(2, "0")}</span></button>
        ${filterButtons}
      </div>
      <button class="sort-button" id="sort-button" title="${translate("Sortează alfabetic")}">
        <i data-lucide="arrow-down-a-z"></i><span>${translate("Titlu A–Z")}</span><i data-lucide="chevron-down" class="sort-chevron"></i>
      </button>
    </div>`;

  const emptyState = document.querySelector("#empty-state");
  emptyState.className = "empty-state hidden";
  emptyState.innerHTML = `
    <span class="empty-icon"><i data-lucide="search-x"></i></span>
    <strong>${translate("N-am găsit nimic aici.")}</strong>
    <p>${translate("Încearcă alt termen sau schimbă filtrul.")}</p>
    <button class="button button-outline" id="reset-filters">${translate("Resetează filtrele")}</button>`;

  document.querySelector("#simulator-mount").innerHTML = `
    <div class="simulator-card">
      <div class="simulator-header">
        <div class="simulator-icon"><i data-lucide="scan-search"></i></div>
        <div><span class="simulator-kicker">SUGESTIE DE ÎNCEPUT</span><h3>Ce ți s-ar potrivi?</h3></div>
        <span class="demo-tag">MVP</span>
      </div>
      <div class="simulator-form">
        <label class="field-label" for="student-interests">Ce te interesează?</label>
        <div class="select-wrap"><i data-lucide="heart"></i>
          <select id="student-interests">
            <option value="tech">Tech, jocuri și programare</option>
            <option value="leadership">Ajutarea oamenilor și comunitatea</option>
            <option value="creative">Artă, design și idei noi</option>
            <option value="environment">Natură și animale</option>
          </select><i data-lucide="chevron-down" class="select-chevron"></i>
        </div>
        <div>
          <label class="field-label" for="student-age">Vârsta ta</label>
          <div class="input-wrap"><i data-lucide="cake"></i><input id="student-age" type="number" min="14" max="30" value="17" /></div>
        </div>
        <label class="field-label" for="student-skills">Ce știi să faci? <span>(opțional, desparte cu virgulă)</span></label>
        <div class="input-wrap skill-input"><i data-lucide="zap"></i><input id="student-skills" type="text" placeholder="ex. desen, engleză, lucru în echipă" /></div>
        <button class="button button-primary calculate-button" id="calculate-button">
          <i data-lucide="sparkles"></i> Arată-mi o idee <i data-lucide="arrow-right"></i>
        </button>
      </div>
      <div class="match-result" id="match-result" aria-live="polite">
        <div class="result-placeholder"><span class="placeholder-sparkle">✳</span><span>Hai să explorăm.<br /><small>Alege ce-ți place și îți dăm o sugestie.</small></span></div>
      </div>
      <div class="privacy-note"><i data-lucide="lock-keyhole"></i> Sugestiile sunt orientative; contul demo se salvează local în browser.</div>
    </div>`;

  document.querySelector("#org-form-mount").innerHTML = `
    <form class="org-form-card" id="opportunity-form">
      <div class="org-form-top"><div><span class="form-kicker">YOUTHMATCH PENTRU ORGANIZAȚII</span><h3>Previzualizează un anunț</h3></div><span class="form-spark"><i data-lucide="sparkles"></i></span></div>
      <label class="field-label" for="org-title">Cum se numește proiectul?</label>
      <input class="plain-input" id="org-title" name="title" type="text" placeholder="ex. Atelier de design pentru liceeni" required maxlength="70" />
      <label class="field-label" for="org-requirements">Pe cine cauți?</label>
      <textarea class="plain-input textarea-input" id="org-requirements" name="requirements" placeholder="Ce interese sau calități ar fi utile?" required maxlength="300"></textarea>
      <div class="form-row">
        <div><label class="field-label" for="org-places">Locuri</label><input class="plain-input" id="org-places" name="places" type="number" min="1" max="500" value="5" required /></div>
        <div><label class="field-label" for="org-budget">Buget / participant</label><div class="budget-input"><input class="plain-input" id="org-budget" name="budget" type="number" min="0" placeholder="ex. 500" /><span>RON</span></div></div>
      </div>
      <button class="button button-dark publish-button" type="submit"><i data-lucide="eye"></i> Previzualizează anunțul <i data-lucide="arrow-right"></i></button>
      <span class="form-footnote"><i data-lucide="info"></i> Doar demo · datele nu se trimit sau salvează</span>
    </form>`;
}

mountInteractiveComponents();

const grid = document.querySelector("#opportunity-grid");
const searchInput = document.querySelector("#opportunity-search");
const countLabel = document.querySelector("#opportunity-count");
const emptyState = document.querySelector("#empty-state");
let activeFilter = "Toate";
let sortAscending = true;
let toastTimeout;

function getVolunteerState(item, now = new Date()) {
  if (item.category !== "Voluntariat") return "not-applicable";
  const start = item.startDate ? new Date(`${item.startDate}T00:00:00`) : null;
  const end = item.endDate ? new Date(`${item.endDate}T23:59:59`) : null;
  if (end && end < now) return "ended";
  if (start && start > now) return "upcoming";
  if (start && start <= now && (!end || end >= now)) return "ongoing";
  return "unknown";
}

function refreshLocalRadar() {
  const volunteerItems = opportunities.filter((item) => item.category === "Voluntariat");
  const ongoing = volunteerItems.filter((item) => getVolunteerState(item) === "ongoing").length;
  const upcoming = volunteerItems.filter((item) => getVolunteerState(item) === "upcoming").length;
  const unknown = volunteerItems.filter((item) => getVolunteerState(item) === "unknown").length;
  const time = new Intl.DateTimeFormat(currentLanguage, { hour: "2-digit", minute: "2-digit" }).format(new Date());
  const status = document.querySelector("#radar-status span");
  status.textContent = `${translate("Verificare locală actualizată:")} ${time} · ${translate("În desfășurare")}: ${ongoing} · ${translate("Urmează")}: ${upcoming} · ${translate("Date de verificat")}: ${unknown}`;
  document.querySelector("#radar-refresh").textContent = translate("Verifică acum");
  renderOpportunities();
}

function renderOpportunities() {
  const query = searchInput.value.trim().toLocaleLowerCase("ro");
  const matching = opportunities
    .filter((item) => {
      if (activeFilter === "Toate") return true;
      if (activeFilter === "Viitoare") return item.category === "Voluntariat" && getVolunteerState(item) !== "ended";
      return item.category === activeFilter;
    })
    .filter((item) => {
      const searchable = [
        item.title, item.organization, item.location, item.period,
          item.category, item.description, item.status, item.source, ...item.skills,
      ].join(" ").toLocaleLowerCase("ro");
      return searchable.includes(query);
    })
    .sort((a, b) => sortAscending
      ? a.title.localeCompare(b.title, "ro")
      : b.title.localeCompare(a.title, "ro"));

  grid.innerHTML = matching.map((item) => `
    <article class="opportunity-card">
      <div class="card-top">
        <span class="type-badge type-${item.color}"><i data-lucide="${item.icon}"></i>${item.typeLabel}</span>
        <span class="match-badge"><i data-lucide="badge-check"></i>Sursă oficială</span>
      </div>
      <h3 class="card-title">${item.title}</h3>
      <p class="card-org">${item.organization}</p>
      <span class="card-status"><i data-lucide="info"></i>${getVolunteerState(item) === "unknown" ? "Perioadă neconfirmată · verifică sursa oficială" : item.status}</span>
      <div class="card-meta">
        <span><i data-lucide="map-pin"></i>${item.location}</span>
        <span><i data-lucide="calendar-days"></i>${item.period}</span>
      </div>
      <p class="card-description">${item.description}</p>
      <div class="skill-tags">${item.skills.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}</div>
      <button class="activity-detail-button" type="button" data-activity-id="${item.id}" aria-label="${translate("Deschide detaliile activității")}: ${translate(item.title)}">
        <i data-lucide="sparkles"></i>${translate("Detalii și analiză AI")}<i data-lucide="arrow-right"></i>
      </button>
      <a class="apply-button source-button" href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer">
        <span><i data-lucide="external-link"></i>${item.source}</span><strong>Verifică oportunitatea</strong>
      </a>
    </article>
  `).join("");

  countLabel.textContent = String(matching.length).padStart(2, "0");
  const futureCount = opportunities.filter((item) =>
    item.category === "Voluntariat" && getVolunteerState(item) !== "ended").length;
  const futureButton = document.querySelector('[data-filter="Viitoare"]');
  if (futureButton) {
    futureButton.querySelector(".filter-count")?.remove();
    futureButton.insertAdjacentHTML("beforeend", `<span class="filter-count">${futureCount}</span>`);
  }
  emptyState.classList.toggle("hidden", matching.length > 0);
  grid.classList.toggle("hidden", matching.length === 0);
  applyLanguage(currentLanguage);
  emptyState.querySelector("p").textContent = translate(activeFilter === "Viitoare" && matching.length === 0
    ? "Nu există încă date confirmate pentru voluntariate viitoare. Verifică sursele oficiale."
    : "Încearcă alt termen sau schimbă filtrul.");
  document.querySelector("#sort-button span").textContent = translate(sortAscending ? "Titlu A–Z" : "Titlu Z–A");
  if (window.lucide) window.lucide.createIcons();
}

const activityDialog = document.querySelector("#activity-dialog");
let selectedActivityId = null;
let activityRequestController = null;

function isApprovedActivityUrl(value, activity) {
  if (typeof value !== "string") return false;
  try {
    const url = new URL(value);
    return url.protocol === "https:"
      && !url.username
      && !url.password
      && approvedActivityDomains[activity.id].some((domain) =>
        url.hostname === domain || url.hostname.endsWith(`.${domain}`));
  } catch {
    return false;
  }
}

function setActivityField(selector, value, fallback = "Nu sunt disponibile date verificate pentru acest câmp.") {
  document.querySelector(selector).textContent = value?.trim() || translate(fallback);
}

function renderActivityCitations(citations, activity) {
  const list = document.querySelector("#ai-citations");
  list.replaceChildren();
  const verified = citations.filter((citation) => isApprovedActivityUrl(citation.url, activity));
  for (const citation of verified) {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = citation.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = citation.title || new URL(citation.url).hostname;
    item.append(link);
    list.append(item);
  }
  if (!list.children.length) {
    const item = document.createElement("li");
    item.textContent = translate("Nu sunt disponibile date verificate pentru acest câmp.");
    list.append(item);
  }
}

function renderActivityAnalysis(result, activity) {
  const summary = result.summary;
  setActivityField("#ai-summary-text", summary.summary);
  setActivityField("#ai-market-insight", summary.market_insight, "Contextul pieței nu este suficient de clar în sursele găsite.");
  setActivityField("#ai-eligibility", summary.eligibility);
  setActivityField("#ai-dates", summary.dates_and_duration);
  setActivityField("#ai-application-steps", summary.application_steps);

  const createLink = document.querySelector("#ai-account-create");
  const deleteLink = document.querySelector("#ai-account-delete");
  const creationUrl = isApprovedActivityUrl(summary.account_creation_url, activity)
    && result.citations.some((citation) => citation.url === summary.account_creation_url)
    ? summary.account_creation_url
    : "";
  const deletionUrl = isApprovedActivityUrl(summary.account_deletion_url, activity)
    && result.citations.some((citation) => citation.url === summary.account_deletion_url)
    ? summary.account_deletion_url
    : "";

  createLink.classList.toggle("hidden", !creationUrl);
  if (creationUrl) createLink.href = creationUrl;
  deleteLink.classList.toggle("hidden", !deletionUrl);
  if (deletionUrl) deleteLink.href = deletionUrl;
  const note = [];
  if (!creationUrl) note.push(translate("Nu a fost găsit un link oficial verificat pentru crearea contului. Deschide pagina oficială a activității pentru instrucțiuni."));
  if (!deletionUrl) note.push(translate("Nu a fost găsit un link oficial verificat pentru ștergerea contului. Contactează organizatorul sau consultă politica sa de confidențialitate."));
  if (summary.account_deletion_note) note.push(summary.account_deletion_note);
  document.querySelector("#ai-account-links-note").textContent = [...new Set(note)].join(" ");

  renderActivityCitations(result.citations, activity);
  const verifiedAt = new Date(result.verifiedAt);
  document.querySelector("#ai-verified-at").textContent = `${translate("Analiză actualizată:")} ${new Intl.DateTimeFormat(currentLanguage, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(verifiedAt)}`;
  document.querySelector("#ai-summary-content").classList.remove("hidden");
  document.querySelector("#ai-summary-status").classList.add("hidden");
  if (window.lucide) window.lucide.createIcons();
}

async function loadActivityAnalysis(activity) {
  activityRequestController?.abort();
  activityRequestController = new AbortController();
  const status = document.querySelector("#ai-summary-status");
  const content = document.querySelector("#ai-summary-content");
  content.classList.add("hidden");
  status.classList.remove("hidden");
  status.textContent = translate("Caut surse oficiale și pregătesc rezumatul AI…");
  try {
    const response = await fetch(`/api/opportunities/${activity.id}/summary?lang=${currentLanguage}`, {
      method: "POST",
      headers: { Accept: "application/json" },
      signal: activityRequestController.signal,
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || `HTTP ${response.status}`);
    if (selectedActivityId !== activity.id) return;
    renderActivityAnalysis(result, activity);
  } catch (error) {
    if (error.name === "AbortError") return;
    console.error(`Could not load AI summary for activity ${activity.id}:`, error);
    const knownErrors = {
      "Set GEMINI_API_KEY on the server to enable AI summaries.":
        "Cheia GEMINI_API_KEY nu este configurată pe server. Configureaz-o pentru a activa rezumatele AI.",
      "AI summary could not be generated. Check the server log and try again.":
        "Analiza AI nu a putut fi generată. Verifică jurnalul serverului și încearcă din nou.",
      "AI request limit reached. Try again later.":
        "Limita de solicitări AI a fost atinsă. Încearcă din nou mai târziu.",
      "Unsupported language.":
        "Limba nu este acceptată de serviciul de rezumate AI.",
    };
    status.textContent = translate(knownErrors[error.message]
      || "Nu am putut genera rezumatul acum. Verifică sursa oficială mai jos și încearcă din nou.");
    status.classList.remove("hidden");
  }
}

function openActivityDetails(activityId) {
  const activity = opportunities.find((item) => item.id === activityId);
  if (!activity) return;
  selectedActivityId = activity.id;
  document.querySelector("#activity-category").textContent = translate(activity.typeLabel);
  document.querySelector("#activity-category").className = `type-badge type-${activity.color}`;
  document.querySelector("#activity-dialog-title").textContent = translate(activity.title);
  document.querySelector("#activity-organization").textContent = activity.organization;
  document.querySelector("#activity-location").textContent = translate(activity.location);
  document.querySelector("#activity-period").textContent = translate(activity.period);
  const officialLink = document.querySelector("#activity-source-link");
  officialLink.href = activity.sourceUrl;
  officialLink.firstChild.textContent = `${translate("Pagina oficială a activității")} · ${translate(activity.source)} `;
  document.querySelector("#ai-account-create").classList.add("hidden");
  document.querySelector("#ai-account-delete").classList.add("hidden");
  document.querySelector("#ai-account-links-note").textContent = "";
  document.querySelector("#ai-citations").replaceChildren();
  if (!activityDialog.open) activityDialog.showModal();
  if (window.lucide) window.lucide.createIcons();
  loadActivityAnalysis(activity);
}

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-activity-id]");
  if (button) openActivityDetails(Number(button.dataset.activityId));
});
document.querySelector("#activity-close").addEventListener("click", () => activityDialog.close());
activityDialog.addEventListener("click", (event) => {
  if (event.target === activityDialog) activityDialog.close();
});
activityDialog.addEventListener("close", () => {
  selectedActivityId = null;
  activityRequestController?.abort();
});

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.querySelector("span").textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("visible"), 3500);
}

const localAccountsKey = "youthmatch.local-accounts.v1";
const localAccountSessionKey = "youthmatch.local-session.v1";
const accountDialog = document.querySelector("#account-dialog");
const accountForm = document.querySelector("#account-form");
const accountStatus = document.querySelector("#account-status");
let accountMode = "register";

function readLocalAccounts() {
  const storedAccounts = window.localStorage.getItem(localAccountsKey);
  if (!storedAccounts) return [];

  const accounts = JSON.parse(storedAccounts);
  if (!Array.isArray(accounts) || accounts.some((account) =>
    !account || typeof account.email !== "string" || typeof account.name !== "string"
    || typeof account.salt !== "string" || typeof account.passwordHash !== "string")) {
    throw new Error("Stored local account data has an invalid format.");
  }
  return accounts;
}

function getSignedInAccount() {
  const email = window.sessionStorage.getItem(localAccountSessionKey);
  if (!email) return null;
  return readLocalAccounts().find((account) => account.email === email) || null;
}

function updateAccountCard() {
  let account = null;
  try {
    account = getSignedInAccount();
  } catch (error) {
    console.error("Could not read the local account state:", error);
    showToast(translate("Nu s-a putut verifica datele contului în browser."));
  }
  const profileTitle = document.querySelector("#profile-title");
  const profileSubtitle = document.querySelector("#profile-subtitle");
  const profileAvatar = document.querySelector(".profile-avatar");
  const profileIcon = document.querySelector("#profile-icon");
  const headerLabel = document.querySelector("#account-open-header span");
  const profileButton = document.querySelector("#account-open");

  profileTitle.textContent = account ? account.name : translate("Creează cont gratuit");
  profileSubtitle.textContent = translate(account ? "Contul meu" : "Salvează-ți profilul și găsește oportunități");
  profileAvatar.textContent = account ? account.name.trim().charAt(0).toLocaleUpperCase() : "A";
  profileIcon.setAttribute("data-lucide", account ? "user-round-check" : "user-round-plus");
  headerLabel.textContent = translate(account ? "Contul meu" : "Creează cont gratuit");
  profileButton.setAttribute("aria-label", translate(account ? "Contul meu" : "Creează cont gratuit"));
  if (window.lucide) window.lucide.createIcons();
}

function setAccountStatus(message = "", isSuccess = false) {
  accountStatus.textContent = message ? translate(message) : "";
  accountStatus.classList.toggle("hidden", !message);
  accountStatus.classList.toggle("is-success", isSuccess);
}

function setAccountMode(mode) {
  accountMode = mode;
  const isRegistering = mode === "register";
  document.querySelector("#account-register-mode").classList.toggle("active", isRegistering);
  document.querySelector("#account-register-mode").setAttribute("aria-selected", String(isRegistering));
  document.querySelector("#account-login-mode").classList.toggle("active", !isRegistering);
  document.querySelector("#account-login-mode").setAttribute("aria-selected", String(!isRegistering));
  document.querySelector("#account-name-field").classList.toggle("hidden", !isRegistering);
  document.querySelector("#account-confirm-field").classList.toggle("hidden", !isRegistering);
  document.querySelector("#account-name").required = isRegistering;
  document.querySelector("#account-confirm-password").required = isRegistering;
  document.querySelector("#account-password").autocomplete = isRegistering ? "new-password" : "current-password";
  document.querySelector("#account-dialog-title").textContent =
    translate(isRegistering ? "Creează cont YouthMatch" : "Conectează-te la YouthMatch");
  document.querySelector("#account-submit").textContent =
    translate(isRegistering ? "Creează cont gratuit" : "Conectare");
  setAccountStatus();
}

function renderAccountDialog() {
  const account = getSignedInAccount();
  const isSignedIn = Boolean(account);
  document.querySelector("#account-mode-switch").classList.toggle("hidden", isSignedIn);
  accountForm.classList.toggle("hidden", isSignedIn);
  document.querySelector("#account-signed-in").classList.toggle("hidden", !isSignedIn);
  if (account) {
    document.querySelector("#account-dialog-title").textContent = translate("Contul meu");
    document.querySelector("#account-welcome").textContent = `${translate("Bun venit,")} ${account.name}`;
  } else {
    setAccountMode(accountMode);
  }
}

async function hashLocalPassword(password, salt) {
  if (!window.crypto?.subtle) {
    throw new Error("Web Crypto is not available in this browser.");
  }
  const passwordKey = await window.crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"],
  );
  const digest = await window.crypto.subtle.deriveBits(
    { name: "PBKDF2", salt, iterations: 210_000, hash: "SHA-256" },
    passwordKey,
    256,
  );
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function openAccountDialog() {
  try {
    updateAccountCard();
    renderAccountDialog();
    if (!accountDialog.open) {
      accountDialog.showModal();
      if (!getSignedInAccount()) window.requestAnimationFrame(() => document.querySelector("#account-name")?.focus());
    }
  } catch (error) {
    console.error("Could not open the local account dialog:", error);
    showToast(translate("Nu s-a putut verifica datele contului în browser."));
  }
}

document.querySelector("#account-open").addEventListener("click", openAccountDialog);
document.querySelector("#account-open-header").addEventListener("click", openAccountDialog);
document.querySelector("#account-close").addEventListener("click", () => accountDialog.close());
accountDialog.addEventListener("click", (event) => {
  if (event.target === accountDialog) accountDialog.close();
});
document.querySelector("#account-register-mode").addEventListener("click", () => {
  accountForm.reset();
  setAccountMode("register");
});
document.querySelector("#account-login-mode").addEventListener("click", () => {
  accountForm.reset();
  setAccountMode("login");
});
document.querySelector("#account-logout").addEventListener("click", () => {
  window.sessionStorage.removeItem(localAccountSessionKey);
  accountForm.reset();
  setAccountMode("register");
  updateAccountCard();
  renderAccountDialog();
});

accountForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  setAccountStatus();
  if (!window.crypto?.subtle || !window.crypto?.getRandomValues) {
    setAccountStatus("Autentificarea locală nu este disponibilă în acest browser.");
    return;
  }
  const email = document.querySelector("#account-email").value.trim().toLowerCase();
  const password = document.querySelector("#account-password").value;
  try {
    const accounts = readLocalAccounts();
    let account;
    if (accountMode === "register") {
      const name = document.querySelector("#account-name").value.trim();
      const confirmation = document.querySelector("#account-confirm-password").value;
      if (!name) {
        setAccountStatus("Introdu numele tău.");
        return;
      }
      if (password !== confirmation) {
        setAccountStatus("Parolele nu se potrivesc.");
        return;
      }
      if (accounts.some((existing) => existing.email === email)) {
        setAccountStatus("Acest email are deja un cont local. Conectează-te.");
        return;
      }
      const salt = window.crypto.getRandomValues(new Uint8Array(16));
      const passwordHash = await hashLocalPassword(password, salt);
      account = {
        name,
        email,
        salt: Array.from(salt, (byte) => byte.toString(16).padStart(2, "0")).join(""),
        passwordHash,
      };
      accounts.push(account);
      window.localStorage.setItem(localAccountsKey, JSON.stringify(accounts));
    } else {
      account = accounts.find((existing) => existing.email === email);
      if (!account) {
        setAccountStatus("Emailul sau parola nu sunt corecte.");
        return;
      }
      const salt = Uint8Array.from(account.salt.match(/.{2}/g), (byte) => Number.parseInt(byte, 16));
      if (await hashLocalPassword(password, salt) !== account.passwordHash) {
        setAccountStatus("Emailul sau parola nu sunt corecte.");
        return;
      }
    }

    window.sessionStorage.setItem(localAccountSessionKey, account.email);
    updateAccountCard();
    renderAccountDialog();
    accountForm.reset();
    showToast(translate("Contul a fost creat și ești conectat."));
  } catch (error) {
    console.error("Local account operation failed:", error);
    setAccountStatus(accountMode === "register"
      ? "Nu s-a putut salva contul în acest browser."
      : "Nu s-a putut verifica datele contului în browser.");
  }
});

try {
  updateAccountCard();
} catch (error) {
  console.error("Could not load local account state:", error);
  showToast(translate("Nu s-a putut verifica datele contului în browser."));
}

document.querySelectorAll(".filter-pill").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter-pill.active")?.classList.remove("active");
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    renderOpportunities();
  });
});

searchInput.addEventListener("input", renderOpportunities);
document.querySelector("#sort-button").addEventListener("click", () => {
  sortAscending = !sortAscending;
  document.querySelector("#sort-button span").textContent = translate(sortAscending ? "Titlu A–Z" : "Titlu Z–A");
  renderOpportunities();
});
document.querySelector("#reset-filters").addEventListener("click", () => {
  searchInput.value = "";
  activeFilter = "Toate";
  document.querySelector(".filter-pill.active")?.classList.remove("active");
  document.querySelector('[data-filter="Toate"]').classList.add("active");
  renderOpportunities();
});
document.querySelector("#show-all-button").addEventListener("click", () => {
  searchInput.value = "";
  activeFilter = "Toate";
  document.querySelector(".filter-pill.active")?.classList.remove("active");
  document.querySelector('[data-filter="Toate"]').classList.add("active");
  renderOpportunities();
});
const interestMap = {
  tech: ["Digital", "Erasmus+", "Eveniment local"],
  leadership: ["Erasmus+", "Voluntariat", "Eveniment local"],
  creative: ["Digital", "Erasmus+", "Eveniment local"],
  environment: ["Erasmus+", "Voluntariat", "DiscoverEU"],
};
const interestNames = {
  tech: "tech, jocuri și programare",
  leadership: "ajutarea oamenilor și comunitatea",
  creative: "artă, design și idei noi",
  environment: "natură și animale",
};
document.querySelector("#calculate-button").addEventListener("click", () => {
  const interests = document.querySelector("#student-interests").value;
  const age = Number(document.querySelector("#student-age").value);
  const skills = document.querySelector("#student-skills").value
    .split(",").map((skill) => skill.trim()).filter(Boolean);
  const result = document.querySelector("#match-result");

  if (!Number.isInteger(age) || age < 14 || age > 30) {
    result.innerHTML = '<div class="result-copy"><strong>Verifică vârsta</strong>Demo-ul este setat pentru tineri între 14 și 30 de ani. Verifică eligibilitatea fiecărui program.</div>';
    return;
  }

  const relevantCategories = interestMap[interests];
  const bestMatch = opportunities
    .filter((item) => relevantCategories.includes(item.category))
    .map((item) => {
      const matchedSkills = skills.filter((skill) => {
        const normalizedSkill = skill.toLocaleLowerCase("ro").replace(/[\s_#-]/g, "");
        return item.skills.some((tag) =>
          tag.toLocaleLowerCase("ro").replace(/[\s_#-]/g, "").includes(normalizedSkill));
      });
      return { ...item, matchedSkills };
    })
    .sort((a, b) => b.matchedSkills.length - a.matchedSkills.length)[0];

  result.innerHTML = `
    <div class="result-content">
      <div class="result-score">idee</div>
      <div class="result-copy"><strong>O idee de explorat: ${bestMatch.title}</strong>
        Se leagă de ce te interesează: ${interestNames[interests]}${bestMatch.matchedSkills.length ? ` și ${escapeHtml(bestMatch.matchedSkills.slice(0, 2).join(" și "))}` : ""}. E doar o sugestie de început; verifică detaliile programului.
      </div>
    </div>`;
  if (window.lucide) window.lucide.createIcons();
});

document.querySelector("#opportunity-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const title = String(formData.get("title")).trim();
  event.currentTarget.reset();
  document.querySelector("#org-places").value = "5";
  showToast(`„${title}” a fost previzualizată. Nu a fost publicată și datele nu s-au salvat.`);
});

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    searchInput.focus();
    searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});

const languageFlags = {
  ro: '<svg viewBox="0 0 18 12" aria-hidden="true"><path fill="#002B7F" d="M0 0h6v12H0z"/><path fill="#FCD116" d="M6 0h6v12H6z"/><path fill="#CE1126" d="M12 0h6v12h-6z"/></svg>',
  en: '<svg viewBox="0 0 18 12" aria-hidden="true"><path fill="#012169" d="M0 0h18v12H0z"/><path stroke="#fff" stroke-width="3" d="m0 0 18 12M18 0 0 12"/><path stroke="#C8102E" stroke-width="1" d="m0 0 18 12M18 0 0 12"/><path stroke="#fff" stroke-width="5" d="M9 0v12M0 6h18"/><path stroke="#C8102E" stroke-width="2.5" d="M9 0v12M0 6h18"/></svg>',
  fr: '<svg viewBox="0 0 18 12" aria-hidden="true"><path fill="#000091" d="M0 0h6v12H0z"/><path fill="#fff" d="M6 0h6v12H6z"/><path fill="#E1000F" d="M12 0h6v12h-6z"/></svg>',
  de: '<svg viewBox="0 0 18 12" aria-hidden="true"><path d="M0 0h18v4H0z"/><path fill="#D00" d="M0 4h18v4H0z"/><path fill="#FFCE00" d="M0 8h18v4H0z"/></svg>',
};

const languageNames = { ro: "Română", en: "English", fr: "Français", de: "Deutsch" };
const languageTrigger = document.querySelector("#language-trigger");
const languageMenu = document.querySelector("#language-menu");
const languageFlag = document.querySelector("#language-flag");

function updateLanguageFlag() {
  languageFlag.innerHTML = languageFlags[currentLanguage];
  document.querySelector("#language-code").textContent = currentLanguage.toUpperCase();
  languageMenu.querySelectorAll("[data-language]").forEach((option) => {
    option.setAttribute("aria-checked", String(option.dataset.language === currentLanguage));
  });
}

languageMenu.innerHTML = Object.entries(languageNames).map(([code, name]) => `
  <button class="language-option" type="button" role="menuitemradio" data-language="${code}" aria-checked="${code === currentLanguage}">
    <span class="language-flag">${languageFlags[code]}</span>
    <span>${name}</span>
    <span class="language-option-code">${code.toUpperCase()}</span>
  </button>
`).join("");

function closeLanguageMenu() {
  languageMenu.classList.add("hidden");
  languageTrigger.setAttribute("aria-expanded", "false");
}

languageTrigger.addEventListener("click", () => {
  const isOpen = languageTrigger.getAttribute("aria-expanded") === "true";
  languageMenu.classList.toggle("hidden", isOpen);
  languageTrigger.setAttribute("aria-expanded", String(!isOpen));
});

languageMenu.addEventListener("click", (event) => {
  const option = event.target.closest("[data-language]");
  if (!option) return;
  closeLanguageMenu();
  applyLanguage(option.dataset.language);
  updateLanguageFlag();
  refreshLocalRadar();
  if (activityDialog.open && selectedActivityId !== null) openActivityDetails(selectedActivityId);
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".language-control")) closeLanguageMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && languageTrigger.getAttribute("aria-expanded") === "true") {
    closeLanguageMenu();
    languageTrigger.focus();
  }
});
updateLanguageFlag();
document.querySelector("#radar-refresh").addEventListener("click", refreshLocalRadar);
renderPlanets();
const matchOrbit = document.querySelector(".match-orbit");
matchOrbit.addEventListener("pointerleave", () => {
  if (!matchOrbit.contains(document.activeElement)) hidePlanetTooltip();
});
document.addEventListener("pointerdown", (event) => {
  if (!matchOrbit.contains(event.target)) hidePlanetTooltip();
});
window.addEventListener("resize", () => {
  const tooltip = document.querySelector("#planet-tooltip");
  const activePlanet = document.querySelector(`.orbit-node[data-opportunity-id="${activeHeroOpportunityId}"]`);
  if (!tooltip.classList.contains("hidden") && activePlanet) showPlanetTooltip(activePlanet);
});

renderOpportunities();
refreshLocalRadar();
window.setInterval(refreshLocalRadar, 60_000);

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}