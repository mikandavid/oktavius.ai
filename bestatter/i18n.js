(function () {
  var STORAGE = 'oktavius-industry-lang';

  var T = {
    en: {
      title: 'Oktavius for funeral services — More time for what truly matters',
      metaDesc: 'Oktavius is not a software tool but an AI teammate that takes on administrative processes in your funeral business end to end — so you can focus on families.',
      logoAria: 'Oktavius for funeral directors',
      navWhy: 'Why Oktavius',
      navCta: 'Book a call',
      heroLabel: 'AI teammate for funeral services',
      heroTitle: 'More time for<br><span class="gradient">what truly matters.</span>',
      heroBody: 'You support families in their hardest hours. Oktavius takes on the administration behind the scenes — from documentation to billing. Not another software tool: an AI teammate that gives your team room to focus.',
      heroCta1: 'Speak with us — no obligation',
      heroCta2: 'Learn more',
      heroImgAlt: 'Candles in a calm, quiet setting',
      painLabel: 'The challenge',
      painTitle: 'Families need your full attention — <br>not the paperwork.',
      painSub: 'Between the arrangement meeting and the service lies a mountain of admin: authorities, coordination, documents, billing. Time that should belong to the bereaved.',
      p1t: 'Documents and authorities',
      p1b: 'Death certificates, registrations, pensions, insurers — each case brings a stack of forms. Errors delay everything.',
      p2t: 'Coordinating many partners',
      p2b: 'Cemetery, church, crematorium, florist, stonemason, musicians — everyone needs information, timings, and confirmations. Coordination eats hours.',
      p3t: 'On call around the clock',
      p3b: 'A death does not keep office hours. Enquiries arrive at night, on weekends, on holidays — and each one deserves a dignified response.',
      p4t: 'Billing and estimates',
      p4b: 'Line items, third-party costs, written estimates — in a season when tact matters more than spreadsheets.',
      p5t: 'Information in too many places',
      p5b: 'Family wishes from conversations, dates by phone, documents by email. When several cases run in parallel, it is easy to lose track.',
      p6t: 'Emotional load',
      p6b: 'You carry grief alongside you — while still running operations, admin, and communication. Real relief is often missing.',
      nsQuote: 'Not a software tool.<br><span class="gradient">Quiet support.</span>',
      nsBody: 'Oktavius is not another app to juggle between family meetings. It is a digital worker in the background — lifting administrative weight so you can give families your full attention.',
      ns1t: 'Works with you, not just on-screen',
      ns1b: 'Traditional software shows data. Oktavius processes it: documents prepared, timings coordinated, billing drafted — automatically.',
      ns2t: 'End-to-end automation',
      ns2b: 'Not a single step but the full administrative journey — from first intake through authority communication to the final invoice.',
      ns3t: 'Understands your firm',
      ns3b: 'Oktavius is configured around your processes, partners, and way of working. You do not bend to the software — it bends to you.',
      wfLabel: 'Tailored to your firm',
      wfTitle: 'Your processes. <span class="gradient">Supported.</span>',
      wfSub: 'Every funeral home works differently. Oktavius adapts to your real workflows — you do not force-fit a rigid system.',
      wf1t: 'Capture cases',
      wf1b: 'Incoming notifications are logged, structured, and opened as a case — with the data you need for the next steps.',
      wf2t: 'Documents and forms',
      wf2b: 'Death certificates, registrations, and authority forms are prepared automatically and filled with captured details.',
      wf3t: 'Partner coordination',
      wf3b: 'Requests to cemetery, church, crematorium, and other suppliers are drafted and confirmations tracked.',
      wf4t: 'Estimates and invoices',
      wf4b: 'Services and third-party costs are assembled into estimates or invoices, ready for your approval.',
      wf5t: 'Communication',
      wf5b: 'Incoming messages are matched to the right case. Replies, confirmations, and status updates are drafted for you.',
      wf6t: 'Keep oversight',
      wf6b: 'Active cases, open tasks, pending documents — in one place so parallel cases never slip away.',
      ctaTitle: 'Ready for<br><span class="gradient">quiet support behind the scenes?</span>',
      ctaBody: 'In a no-obligation conversation, we can explore how Oktavius can support your funeral business behind the scenes.',
      ctaBtn: 'Book a call',
      footerLine: '&copy; 2026 Oktavius · A product by <a href="https://texterous.com" style="color: var(--text); text-decoration: underline;">Texterous</a>',
      footerMadeIn: 'Developed in Austria 🇦🇹',
      footerContact: 'Contact',
      footerHome: 'oktavius.ai'
    },
    de: {
      title: 'Oktavius für Bestatter — Mehr Zeit für das, was wirklich zählt',
      metaDesc: 'Oktavius ist kein Software-Tool, sondern ein KI-Mitarbeiter, der Verwaltungsprozesse in Ihrem Bestattungsunternehmen Ende zu Ende übernimmt. Damit Sie sich auf die Familien konzentrieren können.',
      logoAria: 'Oktavius für Bestatter',
      navWhy: 'Warum Oktavius',
      navCta: 'Gespräch vereinbaren',
      heroLabel: 'KI-Mitarbeiter für Bestatter',
      heroTitle: 'Mehr Zeit für<br><span class="gradient">das, was zählt.</span>',
      heroBody: 'Sie begleiten Familien in den schwersten Stunden. Oktavius übernimmt die Verwaltung dahinter — von der Dokumentation bis zur Abrechnung. Kein neues Software-Tool, sondern ein KI-Mitarbeiter, der Ihrem Unternehmen den Rücken freihält.',
      heroCta1: 'Unverbindlich sprechen',
      heroCta2: 'Mehr erfahren',
      heroImgAlt: 'Kerzen in stiller Atmosphäre',
      painLabel: 'Die Herausforderung',
      painTitle: 'Familien brauchen Ihre volle<br>Aufmerksamkeit — nicht der Papierkram.',
      painSub: 'Zwischen Trauergespräch und Beisetzung liegt ein Berg an Verwaltung: Behördengänge, Koordination, Dokumente, Abrechnungen. Zeit, die eigentlich den Hinterbliebenen gehört.',
      p1t: 'Dokumente und Behörden',
      p1b: 'Sterbeurkunden, Abmeldungen, Rentenversicherung, Krankenkasse — jeder Sterbefall bringt ein Dutzend Formulare mit sich. Fehler verzögern alles.',
      p2t: 'Abstimmung mit vielen Partnern',
      p2b: 'Friedhof, Kirche, Krematorium, Florist, Steinmetz, Musiker — jeder Beteiligte braucht Informationen, Termine und Bestätigungen. Die Koordination frisst Stunden.',
      p3t: 'Rund um die Uhr erreichbar',
      p3b: 'Ein Sterbefall kennt keine Bürozeiten. Die Anfragen kommen nachts, am Wochenende, an Feiertagen — und jede einzelne verdient eine würdevolle Antwort.',
      p4t: 'Abrechnungen und Kostenvoranschläge',
      p4b: 'Leistungspositionen zusammenstellen, Fremdkosten einrechnen, Kostenvoranschläge erstellen — in einer Phase, in der Sensibilität wichtiger ist als Kalkulation.',
      p5t: 'Informationen verteilt',
      p5b: 'Wünsche der Familie im Gespräch, Termine per Telefon, Dokumente per Mail. Wenn mehrere Sterbefälle parallel laufen, wird es unübersichtlich.',
      p6t: 'Emotionale Belastung',
      p6b: 'Sie tragen die Last der Trauer mit — und müssen gleichzeitig Organisation, Verwaltung und Kommunikation stemmen. Unterstützung, die wirklich entlastet, fehlt oft.',
      nsQuote: 'Kein Software-Tool.<br><span class="gradient">Stille Unterstützung.</span>',
      nsBody: 'Oktavius ist keine weitere App, die Sie zwischen Trauergesprächen bedienen müssen. Oktavius ist ein digitaler Mitarbeiter, der im Hintergrund arbeitet — und Ihnen den Verwaltungsaufwand abnimmt, damit Sie sich ganz auf die Familien konzentrieren können.',
      ns1t: 'Arbeitet aktiv mit, zeigt nicht nur an',
      ns1b: 'Herkömmliche Software zeigt Ihnen Daten. Oktavius verarbeitet sie: Dokumente werden erstellt, Termine koordiniert, Abrechnungen vorbereitet — automatisch.',
      ns2t: 'Ende-zu-Ende Automatisierung',
      ns2b: 'Nicht nur ein Schritt, sondern der gesamte Verwaltungsprozess. Von der Erstaufnahme über die Behördenkommunikation bis zur fertigen Rechnung.',
      ns3t: 'Versteht Ihr Unternehmen',
      ns3b: 'Oktavius wird auf Ihre Abläufe, Ihre Partner und Ihre Art zu arbeiten eingestellt. Sie passen sich nicht an — Oktavius passt sich an Sie an.',
      wfLabel: 'Angepasst auf Ihr Unternehmen',
      wfTitle: 'Ihre Abläufe. <span class="gradient">Entlastet.</span>',
      wfSub: 'Jedes Bestattungsunternehmen arbeitet anders. Oktavius passt sich an Ihre konkreten Prozesse an — nicht Sie sich an ein starres System.',
      wf1t: 'Sterbefälle erfassen',
      wf1b: 'Eingehende Meldungen werden erfasst, strukturiert und als Vorgang angelegt — mit allen relevanten Daten für die nächsten Schritte.',
      wf2t: 'Dokumente und Formulare',
      wf2b: 'Sterbeurkunden, Abmeldungen und Behördenformulare werden automatisch vorbereitet und mit den erfassten Daten befüllt.',
      wf3t: 'Koordination mit Partnern',
      wf3b: 'Terminanfragen an Friedhof, Kirche, Krematorium und weitere Dienstleister werden vorbereitet und Bestätigungen nachverfolgt.',
      wf4t: 'Kostenvoranschläge und Rechnungen',
      wf4b: 'Leistungen und Fremdkosten werden zusammengestellt und als Kostenvoranschlag oder Rechnung zur Freigabe vorbereitet.',
      wf5t: 'Kommunikation',
      wf5b: 'Eingehende Nachrichten werden dem richtigen Vorgang zugeordnet. Antworten, Bestätigungen und Statusmeldungen werden vorbereitet.',
      wf6t: 'Übersicht behalten',
      wf6b: 'Laufende Sterbefälle, offene Aufgaben, ausstehende Dokumente — alles an einem Ort, damit bei parallelen Vorgängen nichts untergeht.',
      ctaTitle: 'Bereit für<br><span class="gradient">stille Entlastung?</span>',
      ctaBody: 'Lassen Sie uns in einem unverbindlichen Gespräch schauen, wie Oktavius Ihr Bestattungsunternehmen im Hintergrund unterstützen kann.',
      ctaBtn: 'Gespräch vereinbaren',
      footerLine: '&copy; 2026 Oktavius · Ein Produkt von <a href="https://texterous.com" style="color: var(--text); text-decoration: underline;">Texterous</a>',
      footerMadeIn: 'Entwickelt in Österreich 🇦🇹',
      footerContact: 'Kontakt',
      footerHome: 'oktavius.ai'
    },
    nl: {
      title: 'Oktavius voor uitvaartverzorgers — Meer tijd voor wat echt telt',
      metaDesc: 'Oktavius is geen softwaretool, maar een AI-medewerker die administratieve processen in uw uitvaartonderneming van begin tot eind overneemt. Zodat u zich op de families kunt richten.',
      logoAria: 'Oktavius voor uitvaartverzorgers',
      navWhy: 'Waarom Oktavius',
      navCta: 'Afspraak maken',
      heroLabel: 'AI-medewerker voor uitvaart',
      heroTitle: 'Meer tijd voor<br><span class="gradient">wat echt telt.</span>',
      heroBody: 'U begeleidt families in de zwaarste uren. Oktavius neemt de administratie erachter over — van documentatie tot facturatie. Geen nieuwe softwaretool, maar een AI-medewerker die uw organisatie ruimte geeft.',
      heroCta1: 'Vrijblijvend spreken',
      heroCta2: 'Meer weten',
      heroImgAlt: 'Kaarsen in een stille sfeer',
      painLabel: 'De uitdaging',
      painTitle: 'Families hebben uw volle<br>aandacht nodig — niet het papierwerk.',
      painSub: 'Tussen het rouwgesprek en de uitvaart ligt een berg administratie: instanties, coördinatie, documenten, facturatie. Tijd die eigenlijk aan de nabestaanden toebehoort.',
      p1t: 'Documenten en instanties',
      p1b: 'Overlijdensaktes, afmeldingen, pensioen, zorgverzekering — elke uitvaart brengt tientallen formulieren mee. Fouten vertragen alles.',
      p2t: 'Afstemming met veel partners',
      p2b: 'Begraafplaats, kerk, crematorium, bloemist, steenhouwer, muzikant — elke partij heeft informatie, afspraken en bevestigingen nodig. De coördinatie kost uren.',
      p3t: '24/7 bereikbaar',
      p3b: 'Een overlijden kent geen kantooruren. Verzoeken komen ’s nachts, in het weekend, op feestdagen — en elk verdient een waardig antwoord.',
      p4t: 'Facturatie en kostenramingen',
      p4b: 'Posten samenstellen, externe kosten verwerken, ramingen maken — in een fase waarin tact belangrijker is dan rekenen.',
      p5t: 'Informatie verspreid',
      p5b: 'Wensen van de familie in gesprek, afspraken per telefoon, documenten per mail. Bij meerdere parallelle uitvaarten wordt het onoverzichtelijk.',
      p6t: 'Emotionele belasting',
      p6b: 'U draagt het verdriet mee — en moet tegelijk organisatie, administratie en communicatie dragen. Ondersteuning die echt ontlast, ontbreekt vaak.',
      nsQuote: 'Geen softwaretool.<br><span class="gradient">Stille ondersteuning.</span>',
      nsBody: 'Oktavius is geen extra app die u tussen rouwgesprekken moet bedienen. Oktavius is een digitale medewerker die op de achtergrond werkt — en administratieve last van u haalt, zodat u zich volledig op families kunt richten.',
      ns1t: 'Werkt actief mee, toont niet alleen',
      ns1b: 'Traditionele software toont gegevens. Oktavius verwerkt ze: documenten worden gemaakt, afspraken gecoördineerd, facturatie voorbereid — automatisch.',
      ns2t: 'Automatisering van A tot Z',
      ns2b: 'Niet één stap, maar het hele administratieve proces. Van eerste opname via communicatie met instanties tot de factuur klaar.',
      ns3t: 'Begrijpt uw organisatie',
      ns3b: 'Oktavius wordt afgestemd op uw processen, partners en manier van werken. U past zich niet aan — Oktavius past zich aan u aan.',
      wfLabel: 'Afgestemd op uw organisatie',
      wfTitle: 'Uw processen. <span class="gradient">Ontlast.</span>',
      wfSub: 'Elke uitvaartonderneming werkt anders. Oktavius past zich aan uw concrete processen aan — niet u aan een star systeem.',
      wf1t: 'Uitvaarten vastleggen',
      wf1b: 'Binnenkomende meldingen worden vastgelegd, gestructureerd en als dossier aangemaakt — met alle relevante gegevens voor de volgende stappen.',
      wf2t: 'Documenten en formulieren',
      wf2b: 'Overlijdensaktes, afmeldingen en formulieren van instanties worden automatisch voorbereid en ingevuld met de vastgelegde gegevens.',
      wf3t: 'Coördinatie met partners',
      wf3b: 'Afspraakverzoeken aan begraafplaats, kerk, crematorium en andere dienstverleners worden voorbereid en bevestigingen opgevolgd.',
      wf4t: 'Kostenramingen en facturen',
      wf4b: 'Diensten en externe kosten worden samengebracht en als raming of factuur klaargezet voor goedkeuring.',
      wf5t: 'Communicatie',
      wf5b: 'Inkomende berichten worden aan het juiste dossier gekoppeld. Antwoorden, bevestigingen en statusupdates worden voorbereid.',
      wf6t: 'Overzicht behouden',
      wf6b: 'Lopende uitvaarten, open taken, openstaande documenten — alles op één plek, zodat bij parallelle dossiers niets verloren gaat.',
      ctaTitle: 'Klaar voor<br><span class="gradient">meer rust op de achtergrond?</span>',
      ctaBody: 'Laten we in een vrijblijvend gesprek bekijken hoe Oktavius uw uitvaartonderneming op de achtergrond kan ondersteunen.',
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
