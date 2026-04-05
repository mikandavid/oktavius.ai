(function () {
  var STORAGE = 'oktavius-industry-lang';

  var T = {
    en: {
      title: 'Oktavius for painters — More jobs, less paperwork',
      metaDesc: 'Oktavius is not a software tool but an AI teammate that automates processes in your painting business end to end. Fully tailored to how you work.',
      logoAria: 'Oktavius for painters',
      navWhy: 'Why Oktavius',
      navCta: 'Book a call',
      heroLabel: 'AI for painters',
      heroTitle: 'More painting.<br><span class="gradient">Less admin.</span>',
      heroBody: 'Oktavius handles the back office for your painting business — from the first enquiry to the final invoice. Not another tool to learn: an AI teammate that adapts to your company.',
      heroCta1: 'Book a call now',
      heroCta2: 'Learn more',
      heroImgAlt: 'Painter working on a building facade',
      painLabel: 'The problem',
      painTitle: 'Your business is growing — <br>but the office is holding you back.',
      painSub: 'Jobs come in by phone, email, and WhatsApp. Measurements must be calculated, quotes written, invoices sent. By the end of the day there is little time left for the real work.',
      p1t: 'Measurements & areas',
      p1b: 'Measuring rooms, calculating areas, deducting windows and doors — all by hand. Mistakes cost time and money when materials are wrong.',
      p2t: 'Quotes take forever',
      p2b: 'Every quote is bespoke: areas, line items, pricing. By the time it goes out, the client may have signed elsewhere.',
      p3t: 'Invoices go out late',
      p3b: 'The walls are painted but the invoice leaves weeks later. Cash flow suffers, reminders pile up, and revenue sits unpaid.',
      p4t: 'Material guesses',
      p4b: 'How much paint for 120 m²? Which primer for this substrate? Estimating leads to over-ordering or extra runs to the trade counter.',
      p5t: 'Information scattered everywhere',
      p5b: 'Site photos on the phone, colour codes in email, client notes on paper. When you need something, you search everywhere.',
      p6t: 'No back-office hire',
      p6b: 'A full-time admin role? Too expensive. Doing it yourself? Too little time. You need something that actually thinks with you.',
      nsQuote: 'Not a software tool.<br><span class="gradient">An AI teammate.</span>',
      nsBody: 'Oktavius is not another app to operate. It is a digital worker built on AI — automating processes in your painting business end to end, from the first enquiry to the sent invoice.',
      ns1t: 'Works with you, not just on-screen',
      ns1b: 'Traditional software shows data. Oktavius processes it: measurements are calculated, quotes and invoices are produced — automatically.',
      ns2t: 'End-to-end automation',
      ns2b: 'Not one step in isolation but the full flow — from job intake through areas and material planning to the finished invoice.',
      ns3t: 'Learns how you work',
      ns3b: 'Oktavius is configured around your workflows, customers, and habits — not the other way around.',
      wfLabel: 'Tailored to your business',
      wfTitle: 'Your workflows. <span class="gradient">Automated.</span>',
      wfSub: 'Every painting contractor works differently. Oktavius adapts to your real processes — you do not force-fit a rigid system.',
      wf1t: 'Capture jobs',
      wf1b: 'Enquiries by email, phone, or message are captured automatically, linked to a customer, and turned into a job. Nothing gets lost.',
      wf2t: 'Measurements & areas',
      wf2b: 'Room dimensions are captured; wall and ceiling areas calculated; windows and doors deducted. Fewer typos, fewer rounding errors.',
      wf3t: 'Quotes & invoices',
      wf3b: 'From measurements and line items, quotes and invoices are generated and queued for approval. One click to send.',
      wf4t: 'Material planning',
      wf4b: 'Paint, primer, filler — quantities are calculated from areas and purchase lists prepared automatically.',
      wf5t: 'Hours & mileage',
      wf5b: 'Time on site and travel are captured in the flow and tied directly to the project and invoice — no paper chase.',
      wf6t: 'Customer communication',
      wf6b: 'Emails are read, classified, and tied to the right job. Replies and status updates are drafted for you to approve.',
      ctaTitle: 'Ready for<br><span class="gradient">your AI teammates?</span>',
      ctaBody: 'Book a call and see how Oktavius can be tailored to the way your painting business runs.',
      ctaBtn: 'Book a call',
      footerLine: '&copy; 2026 Oktavius · A product by <a href="https://texterous.com" style="color: var(--text); text-decoration: underline;">Texterous</a>',
      footerMadeIn: 'Developed in Austria 🇦🇹',
      footerContact: 'Contact',
      footerHome: 'oktavius.ai'
    },
    de: {
      title: 'Oktavius für Maler — Mehr Aufträge, weniger Papierkram',
      metaDesc: 'Oktavius ist kein Software-Tool, sondern ein KI-Mitarbeiter, der Prozesse in Ihrem Malerbetrieb Ende zu Ende automatisiert. Komplett anpassbar auf Ihren Betrieb.',
      logoAria: 'Oktavius für Maler',
      navWhy: 'Warum Oktavius',
      navCta: 'Gespräch vereinbaren',
      heroLabel: 'KI für Maler',
      heroTitle: 'Mehr streichen.<br><span class="gradient">Weniger verwalten.</span>',
      heroBody: 'Oktavius übernimmt den Bürokram in Ihrem Malerbetrieb — von der Anfrage bis zur fertigen Rechnung. Kein neues Software-Tool, sondern ein KI-Mitarbeiter, der sich an Ihren Betrieb anpasst.',
      heroCta1: 'Jetzt Gespräch vereinbaren',
      heroCta2: 'Mehr erfahren',
      heroImgAlt: 'Maler bei der Arbeit an einer Fassade',
      painLabel: 'Das Problem',
      painTitle: 'Ihr Betrieb wächst — <br>aber das Büro bremst.',
      painSub: 'Aufträge kommen per Anruf, Mail und WhatsApp. Aufmaße müssen berechnet, Angebote geschrieben, Rechnungen gestellt werden. Und am Ende des Tages fehlt die Zeit für die eigentliche Arbeit.',
      p1t: 'Aufmaße & Flächenberechnung',
      p1b: 'Räume ausmessen, Flächen berechnen, Fenster und Türen abziehen — alles von Hand. Fehler kosten Zeit und Geld, wenn Material falsch kalkuliert wird.',
      p2t: 'Angebote dauern ewig',
      p2b: 'Jedes Angebot ein Einzelstück: Flächen berechnen, Leistungen aufschlüsseln, Preise kalkulieren. Bis das Angebot raus ist, hat der Kunde schon woanders unterschrieben.',
      p3t: 'Rechnungen zu spät',
      p3b: 'Die Wände sind gestrichen, aber die Rechnung geht erst Wochen später raus. Cashflow leidet, Mahnungen häufen sich, Geld bleibt liegen.',
      p4t: 'Materialmengen aus dem Bauch',
      p4b: 'Wie viel Farbe für 120\u2009m²? Welche Grundierung für den Untergrund? Wer kalkuliert, schätzt oft — und bestellt zu viel oder fährt nochmal zum Großhandel.',
      p5t: 'Infos verstreut',
      p5b: 'Fotos vom Baustellenbesuch auf dem Handy, Farbcodes in der Mail, Kundenwünsche auf Zetteln. Wenn Sie etwas suchen, suchen Sie überall.',
      p6t: 'Kein Büropersonal',
      p6b: 'Eine Vollzeitkraft für die Verwaltung? Zu teuer. Selbst machen? Zu wenig Zeit. Sie brauchen eine Lösung, die wirklich mitdenkt.',
      nsQuote: 'Kein Software-Tool.<br><span class="gradient">Ein KI-Mitarbeiter.</span>',
      nsBody: 'Oktavius ist keine App, die Sie zusätzlich bedienen müssen. Oktavius ist ein digitaler Mitarbeiter, der von Grund auf mit KI arbeitet — und Prozesse in Ihrem Malerbetrieb Ende zu Ende automatisiert. Von der eingehenden Anfrage bis zur versandten Rechnung.',
      ns1t: 'Arbeitet aktiv mit, zeigt nicht nur an',
      ns1b: 'Herkömmliche Software zeigt Ihnen Daten. Oktavius verarbeitet sie. Aufmaße werden berechnet, Angebote erstellt, Rechnungen geschrieben — automatisch.',
      ns2t: 'Ende-zu-Ende Automatisierung',
      ns2b: 'Nicht nur ein Schritt, sondern der ganze Prozess. Vom Auftragseingang über Flächenberechnung und Materialkalkulation bis zur fertigen Rechnung.',
      ns3t: 'Lernt Ihren Betrieb kennen',
      ns3b: 'Oktavius wird auf Ihre Abläufe, Ihre Kunden und Ihre Art zu arbeiten eingestellt — nicht umgekehrt.',
      wfLabel: 'Angepasst auf Ihren Betrieb',
      wfTitle: 'Ihre Abläufe. <span class="gradient">Automatisiert.</span>',
      wfSub: 'Jeder Malerbetrieb arbeitet anders. Oktavius passt sich an Ihre konkreten Workflows an — nicht Sie sich an ein starres System.',
      wf1t: 'Aufträge erfassen',
      wf1b: 'Anfragen per Mail, Anruf oder Nachricht werden automatisch erfasst, einem Kunden zugeordnet und als Auftrag angelegt. Nichts geht verloren.',
      wf2t: 'Aufmaße & Flächenberechnung',
      wf2b: 'Raummaße werden erfasst, Wand- und Deckenflächen automatisch berechnet, Fenster und Türen abgezogen. Keine Tippfehler, keine Rundungsfehler.',
      wf3t: 'Angebote & Rechnungen',
      wf3b: 'Aus Aufmaßen und Leistungspositionen werden Angebote und Rechnungen erstellt und zur Freigabe vorbereitet. Ein Klick, fertig.',
      wf4t: 'Materialkalkulation',
      wf4b: 'Farbbedarf, Grundierung, Spachtelmasse — Mengen werden aus den Flächen automatisch berechnet und Bestelllisten vorbereitet.',
      wf5t: 'Stunden & Fahrten',
      wf5b: 'Arbeitszeiten und Kilometer werden im Ablauf erfasst und direkt mit Projekt und Rechnung verknüpft — ohne Zettelwirtschaft.',
      wf6t: 'Kundenkommunikation',
      wf6b: 'E-Mails werden gelesen, klassifiziert und dem richtigen Auftrag zugeordnet. Antworten und Statusupdates werden vorbereitet.',
      ctaTitle: 'Bereit für<br><span class="gradient">Ihre KI-Mitarbeiter?</span>',
      ctaBody: 'Vereinbaren Sie ein Gespräch und sehen Sie, wie Oktavius an die Abläufe Ihres Malerbetriebs angepasst wird.',
      ctaBtn: 'Gespräch vereinbaren',
      footerLine: '&copy; 2026 Oktavius · Ein Produkt von <a href="https://texterous.com" style="color: var(--text); text-decoration: underline;">Texterous</a>',
      footerMadeIn: 'Entwickelt in Österreich 🇦🇹',
      footerContact: 'Kontakt',
      footerHome: 'oktavius.ai'
    },
    nl: {
      title: 'Oktavius voor schilders — Meer opdrachten, minder administratie',
      metaDesc: 'Oktavius is geen softwaretool, maar een AI-medewerker die processen in uw schildersbedrijf van begin tot eind automatiseert. Volledig aanpasbaar aan uw bedrijf.',
      logoAria: 'Oktavius voor schilders',
      navWhy: 'Waarom Oktavius',
      navCta: 'Afspraak maken',
      heroLabel: 'AI voor schilders',
      heroTitle: 'Meer schilderen.<br><span class="gradient">Minder administratie.</span>',
      heroBody: 'Oktavius neemt de administratie in uw schildersbedrijf over — van de aanvraag tot de factuur. Geen nieuwe softwaretool, maar een AI-medewerker die zich aanpast aan uw bedrijf.',
      heroCta1: 'Nu een gesprek plannen',
      heroCta2: 'Meer weten',
      heroImgAlt: 'Schilder aan het werk op een gevel',
      painLabel: 'Het probleem',
      painTitle: 'Uw bedrijf groeit — <br>maar het kantoor remt.',
      painSub: 'Opdrachten komen via telefoon, mail en WhatsApp. Metingen moeten worden berekend, offertes geschreven, facturen verstuurd. En aan het eind van de dag ontbreekt de tijd voor het echte werk.',
      p1t: 'Metingen & oppervlakte',
      p1b: 'Ruimtes opmeten, oppervlakten berekenen, ramen en deuren aftrekken — allemaal handmatig. Fouten kosten tijd en geld als materiaal verkeerd wordt ingekocht.',
      p2t: 'Offertes duren lang',
      p2b: 'Elke offerte is maatwerk: oppervlakten berekenen, posten uitwerken, prijzen kalkuleren. Tegen de tijd dat de offerte er is, heeft de klant elders getekend.',
      p3t: 'Facturen te laat',
      p3b: 'De muren zijn geschilderd, maar de factuur gaat pas weken later de deur uit. Cashflow lijdt, herinneringen stapelen zich op, geld blijft liggen.',
      p4t: 'Materiaal uit de losse pols',
      p4b: 'Hoeveel verf voor 120 m²? Welke primer voor de ondergrond? Wie kalkuleert, schat vaak — en bestelt te veel of rijdt nog een keer naar de groothandel.',
      p5t: 'Info verspreid',
      p5b: "Foto's van de werf op de telefoon, kleurcodes in de mail, klantwensen op briefjes. Als u iets zoekt, zoekt u overal.",
      p6t: 'Geen kantoorpersoneel',
      p6b: 'Een fulltime kracht voor administratie? Te duur. Zelf doen? Te weinig tijd. U heeft een oplossing nodig die echt meedenkt.',
      nsQuote: 'Geen softwaretool.<br><span class="gradient">Een AI-medewerker.</span>',
      nsBody: 'Oktavius is geen app die u erbij moet bedienen. Oktavius is een digitale medewerker die vanaf de basis met AI werkt — en processen in uw schildersbedrijf van begin tot eind automatiseert. Van binnenkomende aanvraag tot verzonden factuur.',
      ns1t: 'Werkt actief mee, toont niet alleen',
      ns1b: 'Traditionele software toont gegevens. Oktavius verwerkt ze. Metingen worden berekend, offertes gemaakt, facturen geschreven — automatisch.',
      ns2t: 'Automatisering van A tot Z',
      ns2b: 'Niet één stap, maar het hele proces. Van opdracht binnen via oppervlakteberekening en materiaalkalkulatie tot de factuur klaar.',
      ns3t: 'Leert uw bedrijf kennen',
      ns3b: 'Oktavius wordt afgestemd op uw processen, klanten en manier van werken — niet andersom.',
      wfLabel: 'Afgestemd op uw bedrijf',
      wfTitle: 'Uw processen. <span class="gradient">Geautomatiseerd.</span>',
      wfSub: 'Elk schildersbedrijf werkt anders. Oktavius past zich aan uw concrete workflows aan — niet u aan een star systeem.',
      wf1t: 'Opdrachten vastleggen',
      wf1b: 'Aanvragen via mail, telefoon of bericht worden automatisch vastgelegd, aan een klant gekoppeld en als opdracht aangemaakt. Niets gaat verloren.',
      wf2t: 'Metingen & oppervlakte',
      wf2b: 'Ruimtematen worden vastgelegd, wand- en plafondoppervlakken automatisch berekend, ramen en deuren afgetrokken. Geen tikfouten, geen afrondingsfouten.',
      wf3t: 'Offertes & facturen',
      wf3b: 'Uit metingen en posten worden offertes en facturen gemaakt en klaargezet voor goedkeuring. Eén klik, klaar.',
      wf4t: 'Materiaalkalkulatie',
      wf4b: 'Verfbehoefte, primer, vulmiddel — hoeveelheden worden uit de oppervlakken automatisch berekend en inkooplijsten voorbereid.',
      wf5t: 'Uren & ritten',
      wf5b: 'Werktijden en kilometers worden in het proces vastgelegd en direct gekoppeld aan project en factuur — zonder papierrommel.',
      wf6t: 'Klantcommunicatie',
      wf6b: 'E-mails worden gelezen, geclassificeerd en aan de juiste opdracht gekoppeld. Antwoorden en statusupdates worden voorbereid.',
      ctaTitle: 'Klaar voor<br><span class="gradient">uw AI-medewerkers?</span>',
      ctaBody: 'Plan een gesprek en ontdek hoe Oktavius wordt afgestemd op de processen van uw schildersbedrijf.',
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
    var langSelect = document.querySelector('[data-lang-select]');
    if (langSelect) {
      langSelect.value = lang;
      langSelect.setAttribute('aria-label', { en: 'Language', de: 'Sprache', nl: 'Taal' }[lang] || 'Language');
    }
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
    var langSelectEl = document.querySelector('[data-lang-select]');
    if (langSelectEl) {
      langSelectEl.addEventListener('change', function () {
        apply(langSelectEl.value);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
