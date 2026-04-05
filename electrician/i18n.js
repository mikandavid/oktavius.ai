(function () {
  var STORAGE = 'oktavius-industry-lang';

  var T = {
    en: {
      title: 'Oktavius for electricians — More jobs, less paperwork',
      metaDesc: 'Oktavius is not a software tool but an AI teammate that automates processes in your electrical business end to end. Fully tailored to how you work.',
      logoAria: 'Oktavius for electricians',
      navWhy: 'Why Oktavius',
      navCta: 'Book a call',
      heroLabel: 'AI for electricians',
      heroTitle: 'More jobs.<br><span class="gradient">Less paperwork.</span>',
      heroBody: 'Oktavius handles the back office for your electrical business — from job capture to the final invoice. Not another tool to learn: an AI teammate that adapts to your company.',
      heroCta1: 'Book a call now',
      heroCta2: 'Learn more',
      heroImgAlt: 'Electrician working on an outdoor service panel with a solar connection',
      painLabel: 'The problem',
      painTitle: 'Your business is growing — <br>but the office is holding you back.',
      painSub: 'Jobs arrive by phone, email, and WhatsApp. Timesheets stack up. Invoices go out late. By the end of the day there is little time left for what really matters.',
      p1t: 'Hours lost to admin',
      p1b: 'Typing up measurements, transferring timesheets, writing invoices — all manual, often twice. Valuable hours missing from the job site.',
      p2t: 'Jobs slip through the cracks',
      p2b: 'Requests by email, phone, and message. Without a system, nothing lands where it should — and customers wait too long for a reply.',
      p3t: 'Invoices go out late',
      p3b: 'The work is done but the invoice goes out weeks later. Cash flow suffers, reminders pile up, and revenue sits unpaid.',
      p4t: 'Software that does not fit',
      p4b: 'Every tool promises order — none truly matches how your team works. In the end nobody uses it.',
      p5t: 'Information scattered everywhere',
      p5b: 'Photos on phones, notes on paper, plans in the inbox. When you need something, you search everywhere.',
      p6t: 'No back-office hire',
      p6b: 'A full-time admin role? Too expensive. Doing it yourself? Too little time. You need something that actually thinks with you.',
      nsQuote: 'Not a software tool.<br><span class="gradient">An AI teammate.</span>',
      nsBody: 'Oktavius is not another app to operate. It is a digital worker built on AI — automating processes in your business end to end, from the first enquiry to the sent invoice.',
      ns1t: 'Works with you, not just on-screen',
      ns1b: 'Traditional software shows data. Oktavius processes it: documents are read, data extracted, invoices created — automatically.',
      ns2t: 'End-to-end automation',
      ns2b: 'Not one step in isolation but the full flow — from job intake through time and materials to the finished invoice.',
      ns3t: 'Learns how you work',
      ns3b: 'Oktavius is configured around your workflows, customers, and habits — not the other way around.',
      wfLabel: 'Tailored to your business',
      wfTitle: 'Your workflows. <span class="gradient">Automated.</span>',
      wfSub: 'Every electrical contractor works differently. Oktavius adapts to your real processes — you do not force-fit a rigid system.',
      wf1t: 'Capture jobs',
      wf1b: 'Enquiries by email, phone, or message are captured automatically, linked to a customer, and turned into a job. Nothing gets lost.',
      wf2t: 'Measurements & documentation',
      wf2b: 'Photos, survey notes, and records are attached to the right project and filed in structure — without manual sorting.',
      wf3t: 'Hours & mileage',
      wf3b: 'Time on site and travel are captured in the flow and tied directly to the project and invoice — no paper chase.',
      wf4t: 'Quotes & invoices',
      wf4b: 'Quotes and invoices are generated from captured data and queued for approval. One click to send.',
      wf5t: 'Materials & orders',
      wf5b: 'Material needs are tracked per project, purchase orders prepared, and delivery notes processed automatically.',
      wf6t: 'Customer communication',
      wf6b: 'Emails are read, classified, and tied to the right job. Replies and status updates are drafted for you to approve.',
      ctaTitle: 'Ready for<br><span class="gradient">your AI teammates?</span>',
      ctaBody: 'Book a call and see how Oktavius can be tailored to the way your electrical business runs.',
      ctaBtn: 'Book a call',
      footerLine: '&copy; 2026 Oktavius · A product by <a href="https://texterous.com" style="color: var(--text); text-decoration: underline;">Texterous</a>',
      footerMadeIn: 'Developed in Austria 🇦🇹',
      footerContact: 'Contact',
      footerHome: 'oktavius.ai'
    },
    de: {
      title: 'Oktavius für Elektriker — Mehr Aufträge, weniger Papierkram',
      metaDesc: 'Oktavius ist kein Software-Tool, sondern ein KI-Mitarbeiter, der Prozesse in Ihrem Elektrobetrieb Ende zu Ende automatisiert. Komplett anpassbar auf Ihren Betrieb.',
      logoAria: 'Oktavius für Elektriker',
      navWhy: 'Warum Oktavius',
      navCta: 'Gespräch vereinbaren',
      heroLabel: 'KI für Elektriker',
      heroTitle: 'Mehr Aufträge.<br><span class="gradient">Weniger Papierkram.</span>',
      heroBody: 'Oktavius übernimmt den Bürokram in Ihrem Elektrobetrieb — von der Auftragserfassung bis zur fertigen Rechnung. Kein neues Software-Tool, sondern ein KI-Mitarbeiter, der sich an Ihren Betrieb anpasst.',
      heroCta1: 'Jetzt Gespräch vereinbaren',
      heroCta2: 'Mehr erfahren',
      heroImgAlt: 'Elektriker bei der Arbeit an einem Außen-Schaltkasten mit Solaranschluss',
      painLabel: 'Das Problem',
      painTitle: 'Ihr Betrieb wächst — <br>aber das Büro bremst.',
      painSub: 'Aufträge kommen per Anruf, Mail und WhatsApp. Stundenzettel stapeln sich. Rechnungen gehen spät raus. Und am Ende des Tages fehlt die Zeit für das, was zählt.',
      p1t: 'Stunden für Papierkram',
      p1b: 'Aufmaße abtippen, Stundenzettel übertragen, Rechnungen schreiben — alles manuell, alles doppelt. Wertvolle Stunden, die auf der Baustelle fehlen.',
      p2t: 'Aufträge gehen unter',
      p2b: 'Anfragen per Mail, Telefon und Nachricht. Ohne System landet nichts dort, wo es hingehört — und Kunden warten vergeblich auf Rückmeldung.',
      p3t: 'Rechnungen zu spät',
      p3b: 'Die Arbeit ist erledigt, aber die Rechnung geht erst Wochen später raus. Cashflow leidet, Mahnungen häufen sich, Geld bleibt liegen.',
      p4t: 'Software, die nicht passt',
      p4b: 'Jedes Tool verspricht Ordnung — aber keines versteht, wie Ihr Betrieb wirklich arbeitet. Am Ende nutzt es niemand im Team.',
      p5t: 'Infos verstreut',
      p5b: 'Fotos auf dem Handy, Notizen auf Zetteln, Pläne in der Mail. Wenn Sie etwas suchen, suchen Sie überall.',
      p6t: 'Kein Büropersonal',
      p6b: 'Eine Vollzeitkraft für die Verwaltung? Zu teuer. Selbst machen? Zu wenig Zeit. Sie brauchen eine Lösung, die wirklich mitdenkt.',
      nsQuote: 'Kein Software-Tool.<br><span class="gradient">Ein KI-Mitarbeiter.</span>',
      nsBody: 'Oktavius ist keine App, die Sie zusätzlich bedienen müssen. Oktavius ist ein digitaler Mitarbeiter, der von Grund auf mit KI arbeitet — und Prozesse in Ihrem Betrieb Ende zu Ende automatisiert. Von der eingehenden Anfrage bis zur versandten Rechnung.',
      ns1t: 'Arbeitet aktiv mit, zeigt nicht nur an',
      ns1b: 'Herkömmliche Software zeigt Ihnen Daten. Oktavius verarbeitet sie. Dokumente werden gelesen, Daten extrahiert, Rechnungen erstellt — automatisch.',
      ns2t: 'Ende-zu-Ende Automatisierung',
      ns2b: 'Nicht nur ein Schritt, sondern der ganze Prozess. Vom Auftragseingang über Zeiterfassung und Material bis zur fertigen Rechnung.',
      ns3t: 'Lernt Ihren Betrieb kennen',
      ns3b: 'Oktavius wird auf Ihre Abläufe, Ihre Kunden und Ihre Art zu arbeiten eingestellt — nicht umgekehrt.',
      wfLabel: 'Angepasst auf Ihren Betrieb',
      wfTitle: 'Ihre Abläufe. <span class="gradient">Automatisiert.</span>',
      wfSub: 'Jeder Elektrobetrieb arbeitet anders. Oktavius passt sich an Ihre konkreten Workflows an — nicht Sie sich an ein starres System.',
      wf1t: 'Aufträge erfassen',
      wf1b: 'Anfragen per Mail, Anruf oder Nachricht werden automatisch erfasst, einem Kunden zugeordnet und als Auftrag angelegt. Nichts geht verloren.',
      wf2t: 'Aufmaße & Dokumentation',
      wf2b: 'Fotos, Messprotokolle und Notizen werden automatisch dem richtigen Projekt zugeordnet und strukturiert abgelegt.',
      wf3t: 'Stunden & Fahrten',
      wf3b: 'Arbeitszeiten und Kilometer werden im Ablauf erfasst und direkt mit Projekt und Rechnung verknüpft — ohne Zettelwirtschaft.',
      wf4t: 'Angebote & Rechnungen',
      wf4b: 'Aus erfassten Daten werden Angebote und Rechnungen erstellt und zur Freigabe vorbereitet. Ein Klick, fertig.',
      wf5t: 'Material & Bestellungen',
      wf5b: 'Materialbedarf wird pro Projekt erfasst, Bestellungen vorbereitet und Lieferscheine automatisch verarbeitet.',
      wf6t: 'Kundenkommunikation',
      wf6b: 'E-Mails werden gelesen, klassifiziert und dem richtigen Auftrag zugeordnet. Antworten und Statusupdates werden vorbereitet.',
      ctaTitle: 'Bereit für<br><span class="gradient">Ihre KI-Mitarbeiter?</span>',
      ctaBody: 'Vereinbaren Sie ein Gespräch und sehen Sie, wie Oktavius an die Abläufe Ihres Elektrobetriebs angepasst wird.',
      ctaBtn: 'Gespräch vereinbaren',
      footerLine: '&copy; 2026 Oktavius · Ein Produkt von <a href="https://texterous.com" style="color: var(--text); text-decoration: underline;">Texterous</a>',
      footerMadeIn: 'Entwickelt in Österreich 🇦🇹',
      footerContact: 'Kontakt',
      footerHome: 'oktavius.ai'
    },
    nl: {
      title: 'Oktavius voor elektriciens — Meer opdrachten, minder administratie',
      metaDesc: 'Oktavius is geen softwaretool, maar een AI-medewerker die processen in uw elektriciensbedrijf van begin tot eind automatiseert. Volledig aanpasbaar aan uw bedrijf.',
      logoAria: 'Oktavius voor elektriciens',
      navWhy: 'Waarom Oktavius',
      navCta: 'Afspraak maken',
      heroLabel: 'AI voor elektriciens',
      heroTitle: 'Meer opdrachten.<br><span class="gradient">Minder papierwerk.</span>',
      heroBody: 'Oktavius neemt de administratie in uw elektriciensbedrijf over — van opdrachtregistratie tot de factuur. Geen nieuwe softwaretool, maar een AI-medewerker die zich aanpast aan uw bedrijf.',
      heroCta1: 'Nu een gesprek plannen',
      heroCta2: 'Meer weten',
      heroImgAlt: 'Elektricien aan het werk aan een buitenverdeelkast met solar-aansluiting',
      painLabel: 'Het probleem',
      painTitle: 'Uw bedrijf groeit — <br>maar het kantoor remt.',
      painSub: 'Opdrachten komen via telefoon, mail en WhatsApp. Urenstaten stapelen zich op. Facturen gaan er laat uit. En aan het eind van de dag ontbreekt de tijd voor wat echt telt.',
      p1t: 'Uren kwijt aan papierwerk',
      p1b: 'Metingen overtypen, urenstaten overzetten, facturen schrijven — allemaal handelijk en dubbel. Kostbare uren die op de werf ontbreken.',
      p2t: 'Opdrachten raken zoek',
      p2b: 'Aanvragen via mail, telefoon en berichten. Zonder systeem belandt niets waar het hoort — en klanten wachten tevergeefs op antwoord.',
      p3t: 'Facturen te laat',
      p3b: 'Het werk is klaar, maar de factuur gaat pas weken later de deur uit. Cashflow lijdt, herinneringen stapelen zich op, geld blijft liggen.',
      p4t: 'Software die niet past',
      p4b: 'Elke tool belooft overzicht — maar geen enkele snapt hoe uw bedrijf echt werkt. Uiteindelijk gebruikt niemand in het team het.',
      p5t: 'Info verspreid',
      p5b: "Foto's op de telefoon, notities op papiertjes, plannen in de mail. Als u iets zoekt, zoekt u overal.",
      p6t: 'Geen kantoorpersoneel',
      p6b: 'Een fulltime kracht voor administratie? Te duur. Zelf doen? Te weinig tijd. U heeft een oplossing nodig die echt meedenkt.',
      nsQuote: 'Geen softwaretool.<br><span class="gradient">Een AI-medewerker.</span>',
      nsBody: 'Oktavius is geen app die u erbij moet bedienen. Oktavius is een digitale medewerker die vanaf de basis met AI werkt — en processen in uw bedrijf van begin tot eind automatiseert. Van binnenkomende aanvraag tot verzonden factuur.',
      ns1t: 'Werkt actief mee, toont niet alleen',
      ns1b: 'Traditionele software toont gegevens. Oktavius verwerkt ze. Documenten worden gelezen, data geëxtraheerd, facturen gemaakt — automatisch.',
      ns2t: 'Automatisering van A tot Z',
      ns2b: 'Niet één stap, maar het hele proces. Van opdracht binnen via tijdregistratie en materiaal tot de factuur klaar.',
      ns3t: 'Leert uw bedrijf kennen',
      ns3b: 'Oktavius wordt afgestemd op uw processen, klanten en manier van werken — niet andersom.',
      wfLabel: 'Afgestemd op uw bedrijf',
      wfTitle: 'Uw processen. <span class="gradient">Geautomatiseerd.</span>',
      wfSub: 'Elk elektriciensbedrijf werkt anders. Oktavius past zich aan uw concrete workflows aan — niet u aan een star systeem.',
      wf1t: 'Opdrachten vastleggen',
      wf1b: 'Aanvragen via mail, telefoon of bericht worden automatisch vastgelegd, aan een klant gekoppeld en als opdracht aangemaakt. Niets gaat verloren.',
      wf2t: 'Metingen & documentatie',
      wf2b: "Foto's, meetprotocollen en notities worden automatisch aan het juiste project gekoppeld en gestructureerd opgeslagen.",
      wf3t: 'Uren & ritten',
      wf3b: 'Werktijden en kilometers worden in het proces vastgelegd en direct gekoppeld aan project en factuur — zonder papierrommel.',
      wf4t: 'Offertes & facturen',
      wf4b: 'Uit vastgelegde gegevens worden offertes en facturen gemaakt en klaargezet voor goedkeuring. Eén klik, klaar.',
      wf5t: 'Materiaal & bestellingen',
      wf5b: 'Materiaalbehoefte wordt per project vastgelegd, bestellingen voorbereid en pakbonnen automatisch verwerkt.',
      wf6t: 'Klantcommunicatie',
      wf6b: 'E-mails worden gelezen, geclassificeerd en aan de juiste opdracht gekoppeld. Antwoorden en statusupdates worden voorbereid.',
      ctaTitle: 'Klaar voor<br><span class="gradient">uw AI-medewerkers?</span>',
      ctaBody: 'Plan een gesprek en ontdek hoe Oktavius wordt afgestemd op de processen van uw elektriciensbedrijf.',
      ctaBtn: 'Afspraak maken',
      footerLine: '&copy; 2026 Oktavius · Een product van <a href="https://texterous.com" style="color: var(--text); text-decoration: underline;">Texterous</a>',
      footerMadeIn: 'Ontwikkeld in Oostenrijk 🇦🇹',
      footerContact: 'Contact',
      footerHome: 'oktavius.ai'
    }
  };

  function apply(lang) {
    var copy = T[lang] || T.de;
    document.documentElement.lang = { en: 'en', de: 'de', nl: 'nl' }[lang] || 'de';
    document.title = copy.title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', copy.metaDesc);
    var logo = document.querySelector('.logo-stack');
    if (logo) logo.setAttribute('aria-label', copy.logoAria);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (copy[k]) el.textContent = copy[k];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-html');
      if (copy[k]) el.innerHTML = copy[k];
    });
    var heroImg = document.querySelector('[data-i18n-alt]');
    if (heroImg && copy.heroImgAlt) heroImg.setAttribute('alt', copy.heroImgAlt);
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });
    try {
      localStorage.setItem(STORAGE, lang);
      localStorage.setItem('oktavius-language', lang);
    } catch (e) {}
  }

  function detect() {
    var n = (navigator.language || '').toLowerCase();
    if (n.startsWith('nl')) return 'nl';
    if (n.startsWith('de')) return 'de';
    if (n.startsWith('en')) return 'en';
    return 'de';
  }

  function init() {
    var stored = null;
    try {
      stored = localStorage.getItem(STORAGE);
    } catch (e) {}
    var chosen = stored;
    if (['en', 'de', 'nl'].indexOf(chosen) === -1) {
      try {
        var mainLang = localStorage.getItem('oktavius-language');
        if (['en', 'de', 'nl'].indexOf(mainLang) !== -1) chosen = mainLang;
      } catch (e2) {}
    }
    if (['en', 'de', 'nl'].indexOf(chosen) === -1) chosen = detect();
    apply(chosen);
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        apply(btn.getAttribute('data-lang'));
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
