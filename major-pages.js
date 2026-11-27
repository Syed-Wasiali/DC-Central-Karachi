const pageInfo = {
  about: {
    title: "About District Central Karachi",
    subtitle: "District Central Karachi - Government of Sindh",
    breadcrumb: "About District",
    badge: "District Profile"
  },
  services: {
    title: "Citizen Services",
    subtitle: "Access information about services provided by District Central Karachi.",
    breadcrumb: "Citizen Services",
    badge: "Public Facilitation"
  },
  news: {
    title: "News & Events",
    subtitle: "Latest news from District Central, Commissioner Karachi and the Government of Sindh.",
    breadcrumb: "News & Events",
    badge: "Official Updates"
  },
  jurisdiction: {
    title: "Government Jurisdiction",
    subtitle: "Federal, provincial and local government services for residents of District Central.",
    breadcrumb: "Government Jurisdiction",
    badge: "Public Services Directory"
  },
  contact: {
    title: "Contact Us",
    subtitle: "Contact the District Administration Central for information, services or complaints.",
    breadcrumb: "Contact Us",
    badge: "Citizen Support"
  },
  ucs: { title: "Union Committees", subtitle: "The 45 Union Committees of District Central, with their Chairmen, Vice Chairmen and offices.", breadcrumb: "Union Committees", badge: "Local Government" },
  sports: { title: "Sports Facilities", subtitle: "Sports complexes, arenas, grounds and governing bodies in and around District Central.", breadcrumb: "Sports", badge: "District Directory" },
  health: { title: "Hospitals and Health Services", subtitle: "Government and private hospitals, specialist centres and laboratories in District Central.", breadcrumb: "Health", badge: "District Directory" },
  libraries: { title: "Libraries", subtitle: "Public, municipal and trust libraries in District Central.", breadcrumb: "Libraries", badge: "District Directory" },
  parks: { title: "Parks and Green Spaces", subtitle: "Public parks, family parks and urban forests across the five subdivisions.", breadcrumb: "Parks", badge: "District Directory" },
  emergency: { title: "Emergency and Public Safety", subtitle: "Rescue, fire, police and ambulance services, and a fire safety guide.", breadcrumb: "Emergency & Safety", badge: "District Directory" },
  transport: { title: "Transport in District Central", subtitle: "Green Line BRT, Peoples Bus Service, EV charging and the Karachi Circular Railway: how to get around the district.", breadcrumb: "Transport", badge: "About District" },
  law: { title: "Law & Order", subtitle: "Police stations, emergency helplines and how the District Administration, Sindh Police and Rangers keep District Central safe.", breadcrumb: "Law & Order", badge: "District Directory" },
  monsoon: { title: "Monsoon and Rain Emergencies", subtitle: "Who to call before and during heavy rain, and how to stay safe.", breadcrumb: "Monsoon", badge: "District Directory" },
  markets: { title: "Markets and Commerce", subtitle: "Industrial areas, trade associations, markets and bachat bazaars.", breadcrumb: "Markets & Commerce", badge: "District Directory" },
  directory: { title: "District Directory", subtitle: "Everything in District Central in one place: education, health, sport, parks, safety and more.", breadcrumb: "District Directory", badge: "District Directory" },
  css: { title: "CSS Corner", subtitle: "Free preparation for the CSS examination, founded by Deputy Commissioner Taha Saleem.", breadcrumb: "CSS Corner", badge: "Flagship Initiative" },
  education: { title: "Academic Institutions", subtitle: "Universities, colleges, examination boards and schools in District Central.", breadcrumb: "Academic Institutions", badge: "District Directory" },
  entertainment: { title: "Entertainment and Shopping", subtitle: "Malls, supermarkets, food streets and cultural venues in District Central.", breadcrumb: "Entertainment", badge: "District Directory" },
  personalities: { title: "Notable Personalities", subtitle: "Celebrating the remarkable people associated with District Central.", breadcrumb: "Personalities", badge: "District Heritage" },
  team: { title: "Administrative Team", subtitle: "The officers of the District Administration Central and their offices.", breadcrumb: "Administrative Team", badge: "District Administration" },
  track: { title: "Track Your Complaint", subtitle: "Follow up a complaint registered with the District Administration Central.", breadcrumb: "Track Complaint", badge: "Citizen Support" },
  privacy: { title: "Privacy Policy", subtitle: "How the District Administration Central handles information on this website.", breadcrumb: "Privacy Policy", badge: "Website Policies" },
  terms: { title: "Terms of Use", subtitle: "Conditions for using the official website of the District Administration Central.", breadcrumb: "Terms of Use", badge: "Website Policies" },
  sitemap: { title: "Sitemap", subtitle: "Every page of the District Central Karachi website in one place.", breadcrumb: "Sitemap", badge: "Website Guide" },
  search: { title: "Search", subtitle: "Search the District Central Karachi website.", breadcrumb: "Search", badge: "Website Guide" },
  plaques: {
    title: "Commemorative Blue Plaques",
    subtitle: "Honouring the remarkable people who lived in District Central.",
    breadcrumb: "Blue Plaques",
    badge: "District Heritage"
  },
  rwa: {
    title: "Residents Welfare Associations",
    subtitle: "Community policing and neighbourhood security across District Central.",
    breadcrumb: "Residents Associations",
    badge: "Community Policing"
  },
  initiatives: {
    title: "Government Initiatives",
    subtitle: "District-level programs, development activities and public service initiatives.",
    breadcrumb: "Initiatives",
    badge: "District Programs"
  }
};

const placeholderNote = "Official information will be added after verification.";

function active(page, key) {
  return page === key ? " active" : "";
}

function header(page) {
  return `
    <header class="site-header">
      <div class="top-gov-bar">
        <div class="container-fluid px-lg-5">
          <div class="d-flex flex-wrap align-items-center justify-content-between gap-2">
            <div class="d-flex flex-wrap align-items-center gap-3">
              <span><i class="bi bi-shield-check"></i> Government of Sindh</span>
              <span class="d-none d-md-inline"><i class="bi bi-patch-check"></i> Official Government Website</span>
            </div>
            <div class="d-flex flex-wrap align-items-center gap-3">
              <span><i class="bi bi-clock"></i> Mon-Fri 9:00 AM - 5:00 PM</span>
              <a href="tel:1122"><i class="bi bi-telephone"></i> Emergency Contact</a>
              <button class="top-link lang-soon" type="button" title="Urdu and Sindhi versions are coming soon">Urdu</button>
              <button class="top-link" type="button" aria-label="Search"><i class="bi bi-search"></i></button>
            </div>
          </div>
        </div>
      </div>
      <div class="main-header">
        <div class="container-fluid px-lg-5">
          <div class="row align-items-center g-3">
            <div class="col-lg-4">
              <a class="brand-lockup" href="index.html" aria-label="District Central Karachi home">
                <span class="gov-logo"><img src="images/sindh-govt-logo.png" alt="Government of Sindh logo"></span>
                <span><strong>District Central Karachi</strong><small>Government of Sindh</small></span>
              </a>
            </div>
            <div class="col-lg-5">
              <form class="header-search" role="search">
                <i class="bi bi-search"></i>
                <input type="search" placeholder="Search services, departments, notices..." aria-label="Search portal">
                <button type="submit">Search</button>
              </form>
            </div>
            <div class="col-lg-3">
              <div class="header-actions">
                <a href="https://www.facebook.com/deputycommissionerCentral" target="_blank" rel="noopener" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/dcentralkarachi/" target="_blank" rel="noopener" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
                <span class="social-soon" title="YouTube account coming soon" aria-label="YouTube (coming soon)"><i class="bi bi-youtube"></i></span>
                <a class="complaint-btn" href="complaint-registration.html"><i class="bi bi-chat-square-text"></i> Complaint</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-expand-xl sticky-nav">
        <div class="container-fluid px-lg-5">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#portalNav" aria-controls="portalNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="portalNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
              <li class="nav-item dropdown position-static">
                <a class="nav-link dropdown-toggle${active(page === "transport" ? "about" : page, "about")}" href="about.html" data-bs-toggle="dropdown">About District</a>
                <div class="dropdown-menu mega-menu">
                  <div class="mega-grid">
                    <a href="about.html#vision">Vision</a><a href="about.html#mission">Mission</a><a href="about.html#history">History</a><a href="about.html#geography">District Profile</a><a href="about.html#map">Map</a><a href="transport.html">Transport</a><a href="union-committees.html">Union Committees</a><a href="personalities.html">Personalities</a><a href="sports.html">Sports</a><a href="health.html">Health</a><a href="academic-institutions.html">Academic Institutions</a><a href="entertainment.html">Entertainment</a><a href="libraries.html">Libraries</a><a href="parks.html">Parks</a><a href="emergency-safety.html">Emergency &amp; Safety</a><a href="monsoon.html">Monsoon</a><a href="markets-commerce.html">Markets &amp; Commerce</a><a href="css-corner.html">CSS Corner</a><a href="directory.html">District Directory</a><a href="jurisdiction.html">Government Jurisdiction</a>
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown position-static"><a class="nav-link dropdown-toggle${active(page, "jurisdiction")}" href="jurisdiction.html" data-bs-toggle="dropdown">Government Jurisdiction</a><div class="dropdown-menu mega-menu"><div class="mega-grid"><a href="jurisdiction.html#federal">Federal</a><a href="jurisdiction.html#provincial">Provincial</a><a href="jurisdiction.html#local">Local</a><a href="jurisdiction.html#union-committees">Union Committees</a></div></div></li>
              <li class="nav-item"><a class="nav-link" href="deputy-commissioner.html">Deputy Commissioner</a></li>
              <li class="nav-item dropdown position-static">
                <a class="nav-link dropdown-toggle" href="administrative-team.html" data-bs-toggle="dropdown">Administrative Team</a>
                <div class="dropdown-menu mega-menu"><div class="mega-grid wide"><a href="deputy-commissioner.html">Deputy Commissioner</a><a href="adc-1.html">ADC-I</a><a href="adc-2.html">ADC-II</a><a href="ac-1.html">Assistant Commissioner Liaquatabad</a><a href="ac-2.html">Assistant Commissioner Gulberg</a><a href="ac-3.html">Assistant Commissioner Nazimabad</a><a href="ac-4.html">Assistant Commissioner North Nazimabad</a><a href="ac-5.html">Assistant Commissioner New Karachi</a><a href="ac-6.html">Assistant Commissioner Revenue</a><a href="mukhtiarkar-liaquatabad.html">Mukhtiarkar Liaquatabad</a><a href="mukhtiarkar-gulberg.html">Mukhtiarkar Gulberg</a><a href="mukhtiarkar-nazimabad.html">Mukhtiarkar Nazimabad</a><a href="mukhtiarkar-north-nazimabad.html">Mukhtiarkar North Nazimabad</a><a href="mukhtiarkar-new-karachi.html">Mukhtiarkar New Karachi</a><a href="superintendent-revenue.html">Office Superintendent (Revenue)</a></div></div>
              </li>
              <li class="nav-item dropdown position-static">
                <a class="nav-link dropdown-toggle" href="branches.html" data-bs-toggle="dropdown">Branches</a>
                <div class="dropdown-menu mega-menu"><div class="mega-grid wide"><a href="revenue.html">Revenue</a><a href="accounts-branch.html">Accounts</a><a href="general-branch.html">General</a><a href="judicial-branch.html">Judicial</a><a href="establishment-branch.html">Establishment</a><a href="domicile-branch.html">Domicile / PRC</a><a href="arms-branch.html">Arms</a><a href="pa-branch.html">P.A. Branch of ADC-I</a><a href="benevolent-fund.html">Benevolent Fund</a><a href="ri-branch.html">R &amp; I</a><a href="control-room.html">Control Room</a><a href="it-cell.html">IT Cell</a><a href="complaint-cell.html">Complaint Cell</a><a href="public-relations.html">Public Relations</a></div></div>
              </li>
              <li class="nav-item dropdown position-static">
                <a class="nav-link dropdown-toggle${active(page, "services")}" href="citizen-services.html" data-bs-toggle="dropdown">Citizen Services</a>
                <div class="dropdown-menu mega-menu"><div class="mega-grid wide"><a href="domicile.html">Domicile</a><a href="prc.html">PRC</a><a href="noc.html">NOC</a><a href="arms-license.html">Arms License</a><a href="revenue-certificate.html">Revenue Certificate</a><a href="land-revenue.html">Land / Revenue</a><a href="complaint-registration.html">Complaint Registration</a><a href="price-list.html">Price List</a><a href="public-assistance.html">General Public Assistance</a></div></div>
              </li>
              
              <li class="nav-item"><a class="nav-link${active(page, "news")}" href="news.html">News</a></li>
              <li class="nav-item dropdown position-static"><a class="nav-link dropdown-toggle${["directory","css","education","libraries","health","sports","parks","entertainment","emergency","monsoon","markets","ucs","personalities","law"].includes(page) || page.startsWith("uc-") ? " active" : ""}" href="directory.html" data-bs-toggle="dropdown">Directory</a><div class="dropdown-menu mega-menu"><div class="mega-grid wide dir-menu"><a href="css-corner.html"><i class="bi bi-star-fill"></i> CSS Corner</a><a href="academic-institutions.html"><i class="bi bi-mortarboard"></i> Academic Institutions</a><a href="libraries.html"><i class="bi bi-book"></i> Libraries</a><a href="health.html"><i class="bi bi-hospital"></i> Hospitals &amp; Health</a><a href="sports.html"><i class="bi bi-trophy"></i> Sports</a><a href="parks.html"><i class="bi bi-tree"></i> Parks</a><a href="entertainment.html"><i class="bi bi-bag"></i> Entertainment &amp; Shopping</a><a href="law-order.html"><i class="bi bi-shield-shaded"></i> Law &amp; Order · Police Stations</a><a href="emergency-safety.html"><i class="bi bi-shield-plus"></i> Emergency &amp; Safety</a><a href="monsoon.html"><i class="bi bi-cloud-rain-heavy"></i> Monsoon</a><a href="markets-commerce.html"><i class="bi bi-shop"></i> Markets &amp; Commerce</a><a href="union-committees.html"><i class="bi bi-diagram-3"></i> Union Committees</a><a href="personalities.html"><i class="bi bi-person-badge"></i> Personalities</a><a href="directory.html"><i class="bi bi-grid-3x3-gap"></i> All Directory</a></div></div></li><li class="nav-item"><a class="nav-link" href="price-list.html">Price List</a></li>
              <li class="nav-item"><a class="nav-link${active(page, "initiatives")}" href="initiatives.html">Initiatives</a></li>
              <li class="nav-item"><a class="nav-link" href="index.html#gallery">Gallery</a></li>
              <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>`;
}

function footer() {
  return `
    <footer class="site-footer" id="contact">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-4">
            <a class="brand-lockup footer-brand" href="index.html"><span class="gov-logo"><img src="images/sindh-govt-logo.png" alt="Government of Sindh logo"></span><span><strong>District Central Karachi</strong><small>Government of Sindh</small></span></a>
            <p>Official district portal for public information, citizen services, administrative updates, and complaint facilitation.</p>
            <div class="footer-social"><a href="https://www.facebook.com/deputycommissionerCentral" target="_blank" rel="noopener"><i class="bi bi-facebook"></i></a><a href="https://www.instagram.com/dcentralkarachi/" target="_blank" rel="noopener" aria-label="Instagram"><i class="bi bi-instagram"></i></a><span class="social-soon" title="YouTube account coming soon" aria-label="YouTube (coming soon)"><i class="bi bi-youtube"></i></span></div>
          </div>
          <div class="col-6 col-lg-2"><h3>Quick Links</h3><a href="about.html">About</a><a href="news.html">News</a><a href="index.html#gallery">Gallery</a></div>
          <div class="col-6 col-lg-2"><h3>Branches</h3><a href="revenue.html">Revenue</a><a href="accounts-branch.html">Accounts</a><a href="it-cell.html">IT Cell</a><a href="complaint-cell.html">Complaint Cell</a></div>
          <div class="col-6 col-lg-2"><h3>Services</h3><a href="domicile.html">Domicile</a><a href="prc.html">PRC</a><a href="noc.html">NOC</a><a href="price-list.html">Price List</a></div>
          <div class="col-6 col-lg-2"><h3>Important</h3><a href="privacy-policy.html">Privacy Policy</a><a href="terms-of-use.html">Terms of Use</a> <a href="sitemap.html">Sitemap</a><a href="complaint-registration.html">Complaint</a><a href="contact.html">Contact</a></div>
        </div>
        <div class="footer-bottom"><span>Copyright 2026 District Central Karachi. All rights reserved.</span><span class="footer-gov-mark"><img src="images/sindh-govt-logo.png" alt="Government of Sindh"> Official Government Website</span></div>
      </div>
    </footer>
    <button class="back-to-top" id="backToTop" aria-label="Back to top"><i class="bi bi-arrow-up"></i></button>`;
}

function hero(key) {
  const page = pageInfo[key];
  return `
    <div class="breadcrumb-band">
      <div class="container">
        <nav aria-label="breadcrumb"><ol class="breadcrumb"><li class="breadcrumb-item"><a href="index.html">Home</a></li><li class="breadcrumb-item active" aria-current="page">${page.breadcrumb}</li></ol></nav>
      </div>
    </div>
    <section class="hero-section page-hero major-hero">
      <div class="hero-bg placeholder-image"></div>
      <div class="hero-overlay"></div>
      <div class="container-fluid px-lg-5 hero-content">
        <div class="row align-items-center min-vh-hero">
          <div class="col-xl-7 col-lg-8" data-aos="fade-up">
            <span class="hero-badge"><i class="bi bi-stars"></i> ${page.badge}</span>
            <h1>${page.title}</h1>
            <p>${page.subtitle}</p>
          </div>
        </div>
      </div>
    </section>`;
}

function sectionHead(kicker, title, text = "") {
  return `<div class="section-heading" data-aos="fade-up"><span class="section-kicker">${kicker}</span><h2>${title}</h2>${text ? `<p>${text}</p>` : ""}</div>`;
}

function iconCard(icon, title, text) {
  return `<article class="dept-card" data-aos="fade-up"><i class="bi ${icon}"></i><h3>${title}</h3><p>${text}</p></article>`;
}

function faq(id, items) {
  return `<div class="accordion help-accordion" id="${id}">${items.map((item, index) => `<div class="accordion-item"><h4 class="accordion-header" id="${id}h${index}"><button class="accordion-button ${index ? "collapsed" : ""}" type="button" data-bs-toggle="collapse" data-bs-target="#${id}c${index}" aria-expanded="${index ? "false" : "true"}" aria-controls="${id}c${index}">${item[0]}</button></h4><div id="${id}c${index}" class="accordion-collapse collapse ${index ? "" : "show"}" aria-labelledby="${id}h${index}" data-bs-parent="#${id}"><div class="accordion-body">${item[1]}</div></div></div>`).join("")}</div>`;
}

function gallery(count) {
  const W = window.DC_WORK;
  if (W && W.photos) return W.photoGrid(["gallery", "dc", "green", "sports", "rwa"], count);
  return `<div class="gallery-grid major-gallery">${Array.from({ length: count }, (_, i) => `<div class="placeholder-image image-zoom"><i class="bi bi-image"></i></div>`).join("")}</div>`;
}

function stats(items, note) {
  return `<div class="row g-3">${items.map(([value, label, display]) => `<div class="col-6 col-lg-3"><div class="stat-item"><strong data-counter="${value}"${display ? ` data-display="${display}"` : ""}>0</strong><span>${label}</span></div></div>`).join("")}</div>${note ? `<p class="text-center mt-3 text-muted fw-bold">${note}</p>` : ""}`;
}

function aboutPage() {
  const mission = [["bi-shield-check", "Transparent Governance"], ["bi-people", "Citizen-Centered Services"], ["bi-gear", "Efficient Administration"], ["bi-tree", "Sustainable Development"]];
  const climate = [["bi-sun", "Summer"], ["bi-cloud-rain", "Monsoon"], ["bi-snow", "Winter"], ["bi-thermometer-sun", "Average Weather"]];
  const transport = [["bi-bus-front", "Green Line Bus"], ["bi-bus-front-fill", "Public Buses"], ["bi-signpost-split", "Road Network"], ["bi-train-front", "Rail / Other Public Transport"]];
  return `${header("about")}<main>${hero("about")}
    <!-- Content sourced from: content/DC OFFICE CONTENT.docx -->
    <section class="section"><div class="container"><div class="row g-5 align-items-center"><div class="col-lg-5" data-aos="zoom-in"><div class="dc-portrait placeholder-image image-zoom"><i class="bi bi-map"></i></div></div><div class="col-lg-7" data-aos="fade-left"><span class="section-kicker">District Introduction</span><h2>District Central Karachi</h2><p>District Central Karachi functions as one of the seven districts of Karachi Division under the Government of Sindh, with the Deputy Commissioner Office located at Sector 15-A/1, Buffer Zone, Karachi.</p><p>The district administration coordinates public services, citizen facilitation, revenue administration, complaint redressal, and field governance across its notified towns and sub-divisions.</p><p>Covering about 69 square kilometres and home to around 3.8 million people (2023 census), District Central is one of the most densely populated districts in Pakistan. Its five towns — Gulberg, Liaquatabad, Nazimabad, New Karachi and North Nazimabad — combine long-established residential neighbourhoods with busy commercial markets, educational institutions and major hospitals.</p><p>The Deputy Commissioner heads the district administration, supported by two Additional Deputy Commissioners, five Assistant Commissioners, an Assistant Commissioner (Revenue), the Mukhtiarkars of each sub-division and the branches of the DC Office. Together they deliver citizen services, maintain land records, coordinate law and order, monitor prices and respond to emergencies.</p><a class="btn btn-primary-gradient" href="#history">Read More</a></div></div></div></section>
    <section class="section muted-section" id="vision"><div class="container"><article class="vision-panel" data-aos="fade-up"><i class="bi bi-bank2"></i><div><span class="section-kicker">Our Vision</span><h2>Responsive, Transparent and Citizen-Focused Governance</h2><p>To build a district administration that is transparent, responsive, and rooted in service, where every resident of District Central can access government facilitation quickly, fairly, and without unnecessary hardship.</p><p>Success is measured by the citizen's experience: clear information, fair treatment and a decision within a reasonable time. Published requirements, online services and a structured complaint system are central to this vision.</p></div></article></div></section>
    <section class="section" id="mission"><div class="container">${sectionHead("Mission", "Our Mission", "To deliver efficient, accountable public services across all branches of the Deputy Commissioner's Office; to maintain law and order in coordination with allied departments; and to strengthen the bridge between citizens and government through digital facilitation and timely complaint resolution.")}<div class="card-grid">${mission.map(([icon, title], i) => iconCard(icon, title, ["Publishing service requirements, fees and procedures so citizens know what to expect, and recording decisions properly under the law.", "Designing counters, forms and online services around the needs of residents, so that most matters can be completed in a single visit.", "Coordinating the branches of the DC Office, the Assistant Commissioners and the Mukhtiarkars so that applications move quickly and complaints are followed up.", "Monitoring development schemes, protecting government land and green spaces, and supporting plantation and cleanliness drives for a liveable district."][i])).join("")}</div></div></section>
    <section class="section muted-section" id="history"><div class="container">${sectionHead("History", "History of District Central Karachi", "District Central Karachi, officially notified as Karachi Central District and referred to in some records as Nazimabad District, was first established as an administrative district in 1996. It was dissolved in 2001 when Karachi's five districts were merged into City District Government Karachi, and was re-established as an independent district on 11 July 2011 when the city-district system was disbanded and the original district structure restored.")}<div class="timeline-list">${["Established as an administrative district in 1996", "Merged into City District Government Karachi in 2001", "Re-established as an independent district on 11 July 2011", "Now functions as part of Karachi Division under Government of Sindh"].map((title, i) => `<article class="timeline-card" data-aos="fade-up"><span class="section-kicker">District Milestone</span><h3>${title}</h3><p>${["Karachi Central was created as a separate administrative district of Karachi Division, with its own Deputy Commissioner.", "Under the Sindh Local Government Ordinance 2001, Karachi's districts were merged into the City District Government Karachi, and District Central became part of the city-district system.", "When the city-district system was disbanded, District Central was restored as an independent district on 11 July 2011, headed by a Deputy Commissioner.", "District Central is one of the seven districts of Karachi Division, administered by the Deputy Commissioner under the Commissioner Karachi and the Government of Sindh."][i]}</p></article>`).join("")}</div></div></section>
    <section class="section" id="geography"><div class="container">${sectionHead("Location", "District Profile", "Key facts about District Central Karachi. Area and population figures are from the 2023 Population and Housing Census.")}<div class="row g-4 align-items-center"><div class="col-lg-6"><div class="district-map" id="map"><iframe src="https://www.google.com/maps?q=District+Central,+Karachi,+Pakistan&z=12&output=embed" title="Map of District Central Karachi" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div><div class="col-lg-6"><div class="checklist">${[["Province","Sindh"],["Division","Karachi"],["Headquarters","Deputy Commissioner Office, Sector 15-A/1, Buffer Zone, Karachi"],["Area","Approx. 69 km2"],["Population (2023 census)","Approx. 3.82 million"],["Literacy Rate","Approx. 83.5%"],["Towns / Sub-divisions","Gulberg Town, Liaquatabad Town, Nazimabad Town, New Karachi Town, North Nazimabad Town"],["Postal Code","74600"]].map(([item, value]) => `<div class="mini-panel"><i class="bi bi-check-circle"></i><strong>${item}</strong><span>${value}</span></div>`).join("")}</div><a class="btn btn-primary-gradient mt-4" href="#map">View District Map</a></div></div></div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Weather", "Climate", "District Central's coastal location gives it a warm climate for most of the year. The district administration issues public advisories during heatwaves and heavy rain.")}<div class="card-grid">${climate.map(([icon, title], i) => iconCard(icon, title, [
      "From April to June the weather is hot and humid, with daytime temperatures often above 35°C. Sea breezes usually bring relief in the evenings. Citizens should follow heatwave advisories issued by the district administration.",
      "Monsoon rains usually fall between July and September. Heavy spells can cause urban flooding in low-lying areas. In a rain emergency, citizens can contact the District Control Room or Rescue 1122.",
      "December to February is mild and dry, with pleasant days and cool nights. Winter is the main season for public events and outdoor activities.",
      "Karachi has a warm, coastal climate with low annual rainfall and high humidity for most of the year. October, November and March are transitional months with warm days."][i])).join("")}</div></div></section>
    <section class="section"><div class="container">${sectionHead("Connectivity", "Transportation & Connectivity", "District Central is one of the best-connected parts of Karachi. Major arterial roads, the Green Line Bus Rapid Transit corridor and city bus routes link its five towns with the city centre, the industrial areas and the rest of Karachi.")}<div class="card-grid">${transport.map(([icon, title], i) => iconCard(icon, title, [
      "The Green Line BRT runs on a dedicated corridor through New Karachi, North Nazimabad, Nazimabad and Liaquatabad, linking District Central with Numaish and Surjani Town.",
      "Peoples Bus Service, mini-buses and coaches run along the district's main roads, connecting residential areas with markets, hospitals and educational institutions.",
      "Major roads include Shahrah-e-Pakistan and Sher Shah Suri Road, with key junctions at Nagan Chowrangi, Hyderi and Ayesha Manzil.",
      "Rickshaws, taxis and app-based ride-hailing services operate across the district and serve areas not covered by bus routes."][i])).join("")}</div><article class="feature-card mt-4" data-aos="fade-up"><div class="placeholder-image"><i class="bi bi-bus-front"></i></div><div><span class="section-kicker">Green Line Bus Section</span><h2>Green Line Bus Rapid Transit</h2><p>The Green Line is Karachi's first Bus Rapid Transit service. It runs between Surjani Town and Numaish on a dedicated track, with a large part of its route inside District Central.</p><div class="row g-3">${[["Route Overview", "Surjani Town – New Karachi – Nagan Chowrangi – North Nazimabad – Nazimabad – Numaish, on a dedicated corridor separated from general traffic."], ["Major Stops", "Stations in or near District Central include Nazimabad No. 1, Enquiry Office, Annu Bhai Park, Board Office, Hyderi, Five Star Chowrangi, Jumma Bazar, Erum Shopping, Nagan Chowrangi, U.P. Morr and Road 4200."], ["Connectivity", "The corridor links the district's main markets at Hyderi, Liaquatabad and Nazimabad, and connects with the city centre at Numaish."], ["Passenger Information", "Tickets and cards are available at stations. Please check current timings and fares at the station before travelling. Priority seating is available for women, elderly passengers and persons with disabilities."]].map(([x, t]) => `<div class="col-md-6"><div class="mini-panel"><i class="bi bi-signpost"></i><strong>${x}</strong><span>${t}</span></div></div>`).join("")}</div></div></article></div></section>
    
    <!-- Members as notified by the Election Commission of Pakistan, General Elections 2024. PS-129 to be confirmed with the Provincial Assembly of Sindh. -->
    <section class="section"><div class="container">${sectionHead("Parliamentary Members", "Members of the National Assembly")}<p class="text-center text-muted">Members of the National Assembly elected from District Central in the General Elections 2024, as notified by the Election Commission of Pakistan.</p><div class="row g-4">${[["Khawaja Izharul Hassan", "NA-247 Karachi Central-I"], ["Khalid Maqbool Siddiqui", "NA-248 Karachi Central-II"], ["Ahmad Saleem Siddiqui", "NA-249 Karachi Central-III"], ["Farhan Chishti", "NA-250 Karachi Central-IV"]].map(([name, seat]) => `<div class="col-md-6 col-lg-3"><article class="person-card"><div class="avatar-lg placeholder-image"><i class="bi bi-person"></i></div><h3>${name}</h3><p>${seat}</p><a href="https://na.gov.pk" target="_blank" rel="noopener">View Profile</a></article></div>`).join("")}</div><div class="mt-5"></div>${sectionHead("Parliamentary Members", "Members of the Provincial Assembly")}<p class="text-center text-muted">Members of the Provincial Assembly of Sindh elected from District Central in the General Elections 2024, as notified by the Election Commission of Pakistan.</p><div class="row g-4">${[["Rehan Akram", "PS-122 Karachi Central-I"], ["Abdul Waseem", "PS-123 Karachi Central-II"], ["Abdul Basit", "PS-124 Karachi Central-III"], ["Syed Adil Askari", "PS-125 Karachi Central-IV"], ["Muhammad Iftikhar Alam", "PS-126 Karachi Central-V"], ["Muhammad Maaz Mehboob", "PS-127 Karachi Central-VI"], ["Taha Ahmed Khan", "PS-128 Karachi Central-VII"], ["Jamal Ahmed", "PS-130 Karachi Central-IX"]].map(([name, seat]) => `<div class="col-md-6 col-lg-3"><article class="person-card"><div class="avatar-lg placeholder-image"><i class="bi bi-person"></i></div><h3>${name}</h3><p>${seat}</p><a href="https://www.pas.gov.pk" target="_blank" rel="noopener">View Profile</a></article></div>`).join("")}</div></div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Statistics", "District Statistics", "A snapshot of District Central's population, administrative structure and public services.")}${stats([[3820000, "Population (Census 2023)", "3.82 million"], [5, "Towns / Sub-divisions"], [14, "District Branches"], [10, "Citizen Services"]], "Population figure from the 2023 Population and Housing Census, Pakistan Bureau of Statistics.")}</div></section>
    <section class="section"><div class="container"><span id="gallery"></span>${sectionHead("Gallery", "Photo Gallery", "Photographs of District Central's landmarks, public offices and official events.")}${gallery(8)}<div class="text-center mt-4"><a class="btn btn-primary-gradient" href="index.html#gallery">View Gallery</a></div></div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Citizen Support", "Frequently Asked Questions")}${faq("aboutFaq", [["What is District Central Karachi?", "District Central is one of the seven districts of Karachi Division, Government of Sindh. It covers about 69 square kilometres and has five towns: Gulberg, Liaquatabad, Nazimabad, New Karachi and North Nazimabad."], ["Where is the District Central Office located?", "The Deputy Commissioner Office is at Sector 15-A/1, Buffer Zone, Karachi. It is open to the public Monday to Friday, 9:00 AM to 5:00 PM."], ["Who is responsible for district administration?", "The Deputy Commissioner heads the district administration, supported by two Additional Deputy Commissioners, five Assistant Commissioners (one for each sub-division), an Assistant Commissioner Revenue and the Mukhtiarkars."], ["What services are provided by the district administration?", "Domicile and PRC, NOCs, arms licences, revenue certificates and land record matters, price control, complaint redressal, and coordination of law and order, disaster response and public campaigns such as polio."], ["How can citizens contact the DC Office?", "Visit the office during public hours or submit a complaint through this website. The Complaint Cell aims to respond within 48 hours on working days."]])}</div></section>
  </main>${footer()}`;
}

const services = ["Domicile", "PRC", "NOC", "Arms License", "Revenue Certificate", "Land / Revenue Information", "Complaint Registration", "Price List", "General Public Assistance"];
const serviceLinks = {
  "Domicile": "domicile.html",
  "PRC": "prc.html",
  "NOC": "noc.html",
  "Arms License": "arms-license.html",
  "Revenue Certificate": "revenue-certificate.html",
  "Land / Revenue Information": "land-revenue.html",
  "Complaint Registration": "complaint-registration.html",
  "Price List": "price-list.html",
  "General Public Assistance": "public-assistance.html"
};
function servicesPage() {
  return `${header("services")}<main>${hero("services")}
    <!-- Content sourced from: content/DC OFFICE CONTENT.docx; content/content.docx -->
    <section class="section"><div class="container">${sectionHead("Services", "Services Introduction", "The District Administration Central provides a range of services to residents, from Domicile and Permanent Resident Certificates to NOCs, arms licences, revenue certificates and land record information. Each service page sets out who can apply, the documents required, fees and where to apply, so that you can prepare before you visit. Domicile and PRC applications can now also be made online through the Sindh Domicile Portal, and complaints can be registered online at any time.")}<div class="service-search"><i class="bi bi-search"></i><input id="serviceSearch" type="search" placeholder="Search Citizen Services..." aria-label="Search Citizen Services"></div></div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Directory", "All Citizen Services", "Select a service to see full details, including eligibility, required documents, fees and the application procedure.")}<div class="row g-4" id="serviceCards">${services.map((name, i) => `<div class="col-md-6 col-lg-4 service-entry" data-title="${name.toLowerCase()}" id="${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}"><article class="dept-card h-100"><i class="bi ${["bi-file-earmark-person", "bi-person-lines-fill", "bi-shield-check", "bi-file-lock", "bi-file-text", "bi-map", "bi-chat-left-text", "bi-list-ul", "bi-download", "bi-headset"][i]}"></i><h3>${name}</h3><p>${name === "Domicile" ? "Application facilitation and document verification through the Domicile/PRC Branch." : name === "PRC" ? "Permanent Resident Certificate service issued alongside Domicile requirements." : name === "Arms License" ? "New Non-Prohibited Bore arms licence applications are processed through the Arms Branch." : name === "Complaint Registration" ? "Complaints may be submitted online or through the Complaint Cell / Control Room." : ({"NOC": "No-Objection Certificates for petrol pumps, CNG stations, public gatherings, marriage functions, street tents and Bachat Bazars.", "Revenue Certificate": "Revenue-related certificates issued through the Revenue Branch after verification of records.", "Land / Revenue Information": "Guidance on land records, mutation, demarcation, government land and encroachment enquiries.", "Price List": "Official notified prices of essential commodities, with guidance on reporting overcharging.", "Downloads / Forms": "Application forms, requirement lists, notifications and other official documents.", "General Public Assistance": "Guidance for citizens who are not sure which office handles their matter."})[name] || ""}</p><a class="btn btn-primary-gradient" href="${serviceLinks[name]}">View Details</a></article></div>`).join("")}</div></div></section>
    <section class="section"><div class="container">${sectionHead("Details", "Service Detail Preview")}<div class="accordion help-accordion" id="serviceDetails">${services.map((name, i) => {
      const domicileDocs = "CNIC of applicant and father; Form B and birth certificate; educational documents of last three years; utility bills of last three years or rent agreement with supporting documents; father's domicile or mother's domicile if father's domicile is unavailable; spouse CNIC and marriage certificate if married; voter list entry; Union Council resident certificate; Mukhtiarkar report; Rs. 210 bank challan; affidavit; originals plus one certified photocopy set.";
      const armsDocs = "Application addressed to the Deputy Commissioner; CNIC copy; Sindh Domicile copy; utility bill or proof of residence; one recent passport-size photograph; duly filled application form; CRO / Police Verification; biometric verification and photograph at the Arms Section; Rs. 5,000 government fee through prescribed National Bank of Pakistan Challan.";
      const detail = name === "Domicile" ? `Required documents: ${domicileDocs} Processing fee: Rs. 450. Applicants whose CNIC is registered outside Karachi should first contact the branch in-charge.` : name === "PRC" ? `PRC is issued alongside the Domicile Certificate; see the same requirements. Processing fee: Rs. 450.` : name === "Arms License" ? `Eligibility: applicant must be a resident of Sindh Province and possess valid Sindh Domicile. District Central Karachi quota: 50 licences per month. ${armsDocs}` : name === "NOC" ? "NOCs for petrol pumps/CNG stations, public gatherings, marriage functions, street tents/shamianas, and Bachat Bazars are handled through the Judicial Branch and ADC-I office. Applicants should contact the relevant branch for the specific checklist." : name === "Complaint Registration" ? "Citizens may file a complaint online through the Citizen Help Center form, or in person at the Complaint Cell / Control Room, with complete details for review and follow-up." : name === "Price List" ? "Official district price lists are issued periodically for public awareness and market monitoring, supported by inspections carried out by Assistant Commissioners and Mukhtiarkars." : name === "Revenue Certificate" ? "Issued through the Revenue Branch. Applicants are advised to verify required supporting documents before visiting the facilitation counter." : "Information will be updated.";
      return `<div class="accordion-item" id="detail-${i}"><h4 class="accordion-header" id="serviceH${i}"><button class="accordion-button ${i ? "collapsed" : ""}" type="button" data-bs-toggle="collapse" data-bs-target="#serviceC${i}" aria-expanded="${i ? "false" : "true"}" aria-controls="serviceC${i}">${name}</button></h4><div id="serviceC${i}" class="accordion-collapse collapse ${i ? "" : "show"}" aria-labelledby="serviceH${i}" data-bs-parent="#serviceDetails"><div class="accordion-body"><p>${detail}</p></div></div></div>`;
    }).join("")}</div></div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Process", "How to Access Services")}<div class="branch-workflow">${["Select Service", "Review Requirements", "Submit / Visit Relevant Office", "Receive Service / Follow Up"].map((x, i) => `<div class="flow-card"><span class="avatar placeholder-image mx-auto"><i class="bi bi-${i + 1}-circle"></i></span><strong>${i + 1}. ${x}</strong><p class="flow-text">${["Choose the service you need from the list above.", "Check who can apply, the documents and the fee.", "Apply online or visit the relevant counter.", "Collect your document or follow up your case."][i]}</p></div>`).join("")}</div></div></section>
    <section class="section"><div class="container">${sectionHead("Quick Links", "Quick Service Links", "Go straight to the services residents use most often.")}<div class="quick-links"><a class="btn btn-primary-gradient" href="domicile.html">Domicile</a><a class="btn btn-primary-gradient" href="prc.html">PRC</a><a class="btn btn-primary-gradient" href="complaint-registration.html">Complaint</a><a class="btn btn-primary-gradient" href="price-list.html">Price List</a><a class="btn btn-primary-gradient" href="public-assistance.html">Contact Office</a></div></div></section>
    <section class="section muted-section"><div class="container">${sectionHead("FAQ", "Frequently Asked Questions")}${faq("servicesFaq", [["Which documents are required?", "Each service page lists the documents required. In most cases you will need your original CNIC and copies of the documents related to your application."], ["Can I download forms?", "Yes. Application forms and requirement lists are available in the Downloads / Forms section as they are issued."], ["How long does processing take?", "Processing time depends on the service and on verification. Please ask at the relevant counter for the expected time for your application."], ["Where do I submit applications?", "At the relevant facilitation counter in the DC Office, Sector 15-A/1, Buffer Zone, Monday to Friday, 9:00 AM to 5:00 PM. Domicile and PRC applications can also be made online through the Sindh Domicile Portal."]])}</div></section>
    <section class="complaint-cta" id="service-complaint"><div class="container"><div class="cta-panel"><div><span class="section-kicker">Complaint CTA</span><h2>Need Help With a Government Service?</h2><p>Submit or track a public complaint through official facilitation channels.</p></div><div class="cta-actions"><a class="btn btn-primary-gradient" href="complaint-registration.html">Submit Your Complaint</a><a class="btn btn-outline-primary" href="track-complaint.html">Track Your Complaint</a></div></div></div></section>
  </main>${footer()}`;
}

function newsPage() {
  const N = window.DC_NEWS || [], P = window.DC_PRESS || [];
  const sourcedNotices = [
    "Domicile and PRC applications can now be made online through the Sindh Domicile Portal app.",
    "Applications for public facilitation counters will be received during office hours.",
    "District price list has been issued for public awareness and market monitoring.",
    "Domicile and PRC applicants are advised to verify all required documents before visiting the facilitation counter.",
    "Revenue certificate applicants are advised to verify required documents before visiting.",
    "Complaint Cell follow-up desk remains available for registered public matters.",
    "All correspondence to the office should include valid contact details for a timely response.",
    "Applicants whose CNIC is registered outside Karachi must contact the branch in-charge before applying."
  ];
  const esc = (t) => String(t).replace(/"/g, "&quot;");
  const CAT_ICON = { Heritage: "bi-award", Administration: "bi-building", Health: "bi-heart-pulse", Community: "bi-people", "Fire Safety": "bi-fire", "Citizen Services": "bi-person-check", Education: "bi-mortarboard", "Anti-Encroachment": "bi-cone-striped", "Public Safety": "bi-shield-check", "Price Control": "bi-tags", Environment: "bi-tree", Sports: "bi-trophy" };
  const cats = [...new Set(N.map((n) => n.cat))];
  const story = (n, cls = "") => `<article class="nr-card ${cls}" data-cat="${n.cat}" data-text="${esc((n.title + " " + n.text).toLowerCase())}"><div class="nr-img"><img src="${n.img}" alt="" loading="lazy"><span class="nr-cat"><i class="bi ${CAT_ICON[n.cat] || "bi-newspaper"}"></i> ${n.cat}</span></div><div class="nr-body"><time><i class="bi bi-calendar3"></i> ${n.d}</time><h3>${n.link ? `<a href="${n.link}">${n.title}</a>` : n.title}</h3><p>${n.text}</p><a class="nr-src" href="${n.src[1]}" target="_blank" rel="noopener">${/DC Central/.test(n.src[0]) ? '<i class="bi bi-facebook"></i>' : '<i class="bi bi-newspaper"></i>'} ${n.src[0]} <i class="bi bi-box-arrow-up-right"></i></a></div></article>`;
  const [lead, ...rest] = N;
  const side = rest.slice(0, 4);
  const grid = rest.slice(4);
  const stats = [["185", "buildings audited for fire safety", "bi-fire"], ["Rs520,000", "fines on 123 profiteers in one week", "bi-tags"], ["28 acres", "of reservoir land retrieved", "bi-geo"], ["~25", "neighbourhoods with residents' associations", "bi-people"], ["14", "municipal schools adopted", "bi-mortarboard"], ["5", "blue plaques unveiled", "bi-award"]];
  return `${header("news")}<main>${hero("news")}
    <div class="nr-ticker" aria-label="Latest headlines"><span class="nr-ticker-label"><i class="bi bi-broadcast"></i> Latest</span><div class="nr-ticker-track"><div class="nr-ticker-move">${[...N.slice(0, 10), ...N.slice(0, 10)].map((n) => `<span><b>${n.d}</b> ${n.title}</span>`).join("")}</div></div></div>
    <section class="section pt-5"><div class="container">${sectionHead("Top Stories", "District Central This Month", "The latest work of the District Administration Central, from the Deputy Commissioner's official Facebook page and the press.")}
      <div class="row g-4"><div class="col-lg-7">${story(lead, "nr-lead")}</div><div class="col-lg-5"><div class="nr-side">${side.map((n) => `<article class="nr-mini"><img src="${n.img}" alt="" loading="lazy"><div><span class="nr-mini-cat">${n.cat} · ${n.d}</span><h3>${n.link ? `<a href="${n.link}">${n.title}</a>` : n.title}</h3><a class="nr-src" href="${n.src[1]}" target="_blank" rel="noopener">${n.src[0]} <i class="bi bi-box-arrow-up-right"></i></a></div></article>`).join("")}</div></div></div>
    </div></section>
    <section class="nr-stats"><div class="container"><div class="nr-stats-grid">${stats.map(([v, l, i]) => `<div><i class="bi ${i}"></i><strong>${v}</strong><span>${l}</span></div>`).join("")}</div><p class="nr-stats-note">District Central in 2026, from reports to the Commissioner Karachi and the District Administration.</p></div></section>
    <section class="section" id="newsroom"><div class="container">${sectionHead("Newsroom", "All District Central News", "Filter by topic or search for a story.")}
      <div class="nr-tools"><div class="nr-chips" role="group" aria-label="Filter news by topic"><button class="nr-chip on" data-cat="">All <b>${grid.length}</b></button>${cats.filter((c) => grid.some((n) => n.cat === c)).map((c) => `<button class="nr-chip" data-cat="${c}"><i class="bi ${CAT_ICON[c] || "bi-newspaper"}"></i> ${c} <b>${grid.filter((n) => n.cat === c).length}</b></button>`).join("")}</div><div class="nr-search"><i class="bi bi-search"></i><input type="search" id="nrSearch" placeholder="Search news" aria-label="Search news"></div></div>
      <div class="nr-grid" id="nrGrid">${grid.map((n) => story(n)).join("")}</div>
      <p class="text-center text-muted mt-4 d-none" id="nrEmpty">No stories match your search.</p>
      <div class="text-center mt-4"><button class="btn btn-outline-primary" id="nrMore">Show more stories</button></div>
    </div></section>
    <section class="section muted-section" id="press"><div class="container">${sectionHead("In the Press", "District Central in the News", "Coverage of the District Administration Central in national newspapers and news channels.")}
      <div class="nr-press">${P.map(([o, d, t, u]) => `<a class="nr-press-item" href="${u}" target="_blank" rel="noopener"><span class="nr-outlet">${o}</span><strong>${t}</strong><span class="nr-press-date">${d} <i class="bi bi-box-arrow-up-right"></i></span></a>`).join("")}</div>
    </div></section>
    <section class="section" id="karachi-sindh"><div class="container">${sectionHead("Karachi & Sindh", "From the Commissioner Karachi and the Government of Sindh", "Updated automatically from the official websites.")}
      <div class="row g-4"><div class="col-lg-6"><article class="nr-feed h-100"><h3><img src="images/sindh-govt-logo.png" alt=""> Commissioner Karachi</h3><div id="ckNews" class="nr-feed-list"><p class="text-muted">Loading news…</p></div><a class="btn btn-sm btn-outline-primary mt-3" href="https://commissionerkarachi.gos.pk/media-gallery" target="_blank" rel="noopener">More from Commissioner Karachi</a></article></div>
      <div class="col-lg-6"><article class="nr-feed h-100"><h3><img src="images/sindh-govt-logo.png" alt=""> Government of Sindh</h3><div id="sindhNews" class="nr-feed-list"><p class="text-muted">Loading news…</p></div><a class="btn btn-sm btn-outline-primary mt-3" href="https://www.sindh.gov.pk/notifications?show=news" target="_blank" rel="noopener">More from the Government of Sindh</a></article></div></div>
      <p class="text-center text-muted small mt-3" id="newsUpdated"></p>
    </div></section>
    <section class="section muted-section" id="notices"><div class="container"><div class="row g-4 align-items-stretch"><div class="col-lg-5"><span class="section-kicker">Live from Facebook</span><h2 class="h3 mb-3">Deputy Commissioner Central</h2><div class="fb-feed-frame"><iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FdeputycommissionerCentral&tabs=timeline&width=500&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false" width="500" height="700" style="border:none;overflow:hidden;max-width:100%" scrolling="no" frameborder="0" allowfullscreen="true" allow="encrypted-media" title="District Central on Facebook" loading="lazy"></iframe></div></div>
      <div class="col-lg-7"><span class="section-kicker">Notices</span><h2 class="h3 mb-3">Public Notices</h2><div class="notice-list">${sourcedNotices.map((notice) => `<article class="notice-item"><span><i class="bi bi-megaphone"></i></span><strong>${notice}</strong></article>`).join("")}</div></div></div></div></section>
    <section class="section muted-section" id="archive"><div class="container">${sectionHead("Archive", "News Archive", "A month-by-month summary of the work of the District Administration Central. Earlier updates are available on Facebook.")}<div class="accordion help-accordion" id="newsArchive"><div class="accordion-item"><h4 class="accordion-header"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#arch2026" aria-expanded="true">2026 Archive</button></h4><div id="arch2026" class="accordion-collapse collapse show" data-bs-parent="#newsArchive"><div class="accordion-body"><div class="table-responsive"><table class="table press-table"><thead><tr><th>Month</th><th>Main work</th></tr></thead><tbody>${window.DC_WORK.months.slice().reverse().map(([m, t]) => `<tr><td><strong>${m}</strong></td><td>${t}</td></tr>`).join("")}</tbody></table></div><a class="btn btn-outline-primary" href="initiatives.html">See the 2026 initiatives</a></div></div></div>${[2025, 2024, 2023].map((y) => `<div class="accordion-item"><h4 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#arch${y}" aria-expanded="false">${y} Archive</button></h4><div id="arch${y}" class="accordion-collapse collapse" data-bs-parent="#newsArchive"><div class="accordion-body">Updates from ${y} are available on the official Facebook page of the Deputy Commissioner Central. <a href="https://www.facebook.com/deputycommissionerCentral" target="_blank" rel="noopener">Open Facebook</a></div></div></div>`).join("")}</div></div></section>
  </main>${footer()}`;
}
function initNewsroom() {
  const grid = document.getElementById("nrGrid"); if (!grid) return;
  const cards = [...grid.querySelectorAll(".nr-card")], more = document.getElementById("nrMore"), empty = document.getElementById("nrEmpty"), q = document.getElementById("nrSearch");
  let cat = "", limit = 9;
  const apply = () => { const t = (q.value || "").trim().toLowerCase(); const m = cards.filter((c) => (!cat || c.dataset.cat === cat) && (!t || c.dataset.text.includes(t))); cards.forEach((c) => (c.hidden = true)); m.forEach((c, i) => (c.hidden = i >= limit)); more.hidden = m.length <= limit; empty.classList.toggle("d-none", m.length > 0); };
  document.querySelectorAll(".nr-chip").forEach((b) => b.addEventListener("click", () => { document.querySelectorAll(".nr-chip").forEach((x) => x.classList.toggle("on", x === b)); cat = b.dataset.cat; limit = 9; apply(); }));
  q.addEventListener("input", () => { limit = 9; apply(); });
  more.addEventListener("click", () => { limit += 9; apply(); });
  apply();
}
document.addEventListener("DOMContentLoaded", () => setTimeout(initNewsroom, 0));

function initiativesPage() {
  const W = window.DC_WORK;
  const cats = ["Public Welfare", "Development", "Price Control", "Anti-Encroachment", "Environment", "Cleanliness", "Disaster Management", "Digital Services", "Citizen Facilitation", "Public Awareness"];
  const sourcedInitiatives = [
    ["Digital Service Desk", "An ongoing effort to move citizen-facing services, from Domicile/PRC applications to complaint registration, onto digital and semi-digital channels, reducing repeat visits and processing time.", "Digital Services"],
    ["Market Price Monitoring", "Regular field inspections by Assistant Commissioners and Mukhtiarkars to check that essential commodities are sold at official rates, with enforcement action against profiteering and hoarding.", "Price Control"],
    ["Complaint Tracking", "A structured follow-up system through the Complaint Cell, ensuring registered complaints are assigned to the relevant branch and tracked through to resolution.", "Citizen Facilitation"],
    ["District Field Visits", "Routine visits by the Deputy Commissioner and Assistant Commissioners to markets, facilitation counters, and public offices across the district's five towns.", "Public Welfare"]
  ];
  return `${header("initiatives")}<main>${hero("initiatives")}
    <!-- Content sourced from: content/DC OFFICE CONTENT.docx; content/Functions and Powers of Deputy Commissioner.docx -->
    <section class="section"><div class="container">${sectionHead("Featured", "Featured Initiatives")}<a class="text-decoration-none" href="css-corner.html"><article class="feature-card mb-4" data-aos="fade-up"><div class="css-hero-badge"><img class="css-logo-img" src="images/logos/css-corner.png" alt="CSS Corner logo"><span>Free · Merit-based</span></div><div><span class="section-kicker">Flagship · Education</span><h2>CSS Corner</h2><p>${W.initiatives.find((x) => x.id === "css-corner").summary}</p><p>Three branches in Karachi, including Al-Markaz-e-Islami at Ayesha Manzil in District Central.</p><span class="btn btn-primary-gradient">Find out more</span></div></article></a><article class="feature-card" data-aos="fade-up"><div class="placeholder-image cover-photo"><img src="images/gallery/plaques-09.jpg" alt="Commemorative Plaques Initiative"></div><div><span class="section-kicker">District Heritage</span><h2>Commemorative Blue Plaques</h2><p>${W.initiatives.find((x) => x.id === "blue-plaques").summary}</p><p>Six plaques have been installed so far, honouring Sadequain, Asad Shafiq, Syed Abbas Haider Bilgrami, Amjad Sabri, Umar Sharif and Umeed Fazli. Residents are invited to suggest more names.</p><a class="btn btn-primary-gradient" href="blue-plaques.html">View the Blue Plaques</a></div></article></div></section>
    <section class="section"><div class="container">${sectionHead("2026", "Flagship Initiatives", "The main initiatives of the District Administration Central in 2026, taken from the district's official Facebook page.")}<div class="row g-4">${W.initiatives.map((x) => `<div class="col-md-6 col-lg-3"><a class="text-decoration-none" href="${x.link || "#" + x.id}"><article class="initiative-card h-100" data-aos="fade-up">${(() => { const c = W.pick(W.initiativePhotoCat[x.id], 1)[0]; return c ? `<div class="placeholder-image cover-photo"><img src="images/gallery/${c[0]}" alt="${x.title}" loading="lazy"></div>` : x.cover ? `<div class="placeholder-image cover-photo logo-cover"><img src="${x.cover}" alt="${x.title}" loading="lazy"></div>` : `<div class="placeholder-image"><i class="bi ${x.icon}"></i></div>`; })()}<div class="p-3"><span class="section-kicker">${x.category}</span><h3>${x.title}</h3><p>${x.summary.split(". ")[0]}.</p><span class="btn btn-outline-primary btn-sm">Read more</span></div></article></a></div>`).join("")}</div></div></section>
    ${W.initiatives.map((x, n) => `<section class="section ${n % 2 ? "" : "muted-section"}" id="${x.id}"><div class="container"><div class="row g-4 align-items-start"><div class="col-lg-5" data-aos="fade-right"><span class="section-kicker">${x.category}</span><h2>${x.title}</h2><p>${x.summary}</p>${x.link ? `<a class="btn btn-primary-gradient" href="${x.link}">Find out more</a>` : ""}<div class="dc-photo-grid dc-photo-strip">${W.pick(W.initiativePhotoCat[x.id], 4).map((p) => W.photoTile(p)).join("")}</div></div><div class="col-lg-7" data-aos="fade-left"><div class="timeline-list">${x.timeline.map(([m, t]) => `<article class="timeline-card"><span class="section-kicker">${m}</span><p class="mb-0">${t}</p></article>`).join("")}</div></div></div></div></section>`).join("")}
    <section class="section"><div class="container">${sectionHead("Monthly Report", "District Central at Work – 2026", "The main focus of the District Administration each month, from the official Facebook page.")}<div class="table-responsive"><table class="table press-table"><thead><tr><th>Month</th><th>Main work</th></tr></thead><tbody>${W.months.map(([m, t]) => `<tr><td><strong>${m}</strong></td><td>${t}</td></tr>`).join("")}</tbody></table></div><p class="text-center mt-3"><a class="btn btn-outline-primary" href="${W.source}" target="_blank" rel="noopener"><i class="bi bi-facebook"></i> See all updates on Facebook</a></p></div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Categories", "Initiative Categories", "The district administration's work is organised around ten areas of public service. Each category brings together the campaigns and programmes run in that area.")}<div class="card-grid">${cats.map((x, i) => iconCard("bi-grid", x, [
      "Programmes that support vulnerable citizens, including financial assistance and compensation cases.",
      "Monitoring of development schemes in the district to ensure quality and timely completion.",
      "Market inspections and action against overcharging, hoarding and profiteering.",
      "Drives to clear encroachments from roads, footpaths, parks and government land.",
      "Support for tree plantation drives and action against environmental hazards.",
      "Coordination with municipal bodies on cleanliness and drainage, especially before the monsoon.",
      "Preparedness and response for rain emergencies, heatwaves and other disasters.",
      "Bringing public information, forms and complaint registration online.",
      "Clearer guidance and better counters so citizens can complete their work in fewer visits.",
      "Campaigns on polio, health, safety and citizens' rights."][i])).join("")}</div></div></section>
    <!-- Ongoing and completed projects hidden until real project data is supplied by the DC Office. -->
    <section class="section muted-section"><div class="container">${sectionHead("Upcoming", "Upcoming Initiatives", "Work planned or under way across District Central. Dates are announced on the News page and on Facebook.")}<div class="timeline-list"><article class="timeline-card"><span class="section-kicker">District-wide</span><h3>More Blue Plaques</h3><p>Further plaques will honour notable residents of District Central. Residents are invited to suggest names by calling 021-99260038.</p></article><article class="timeline-card"><span class="section-kicker">All subdivisions</span><h3>Miyawaki Urban Forests</h3><p>Ten dense urban forests are planned under the MoU signed in January 2026 to make the district greener and cooler.</p></article><article class="timeline-card"><span class="section-kicker">All subdivisions</span><h3>Refurbishment of 14 TMC Schools</h3><p>The Momina & Duraid Foundation will continue adopting, refurbishing and running municipal schools.</p></article><article class="timeline-card"><span class="section-kicker">North Karachi</span><h3>Gymnasium and Football Ground, Public School Central</h3><p>Development work on the gymnasium and football ground is under way.</p></article><article class="timeline-card"><span class="section-kicker">More blocks</span><h3>Residents Welfare Associations</h3><p>More blocks are forming associations under the Community Policing Initiative, with the Access Monitoring System.</p></article><article class="timeline-card"><span class="section-kicker">All 45 UCs</span><h3>Polio Vaccination Campaigns</h3><p>Door-to-door campaigns continue in every Union Committee. Dates are announced by the Emergency Operations Centre and on our Facebook page.</p></article></div></div></div></section>
    <section class="section"><div class="container">${sectionHead("Impact", "Results in 2026", "Some of the results of the District Administration's work this year.")}${stats(W.stats)}</div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Gallery", "Photo Gallery", "Photographs of the work of the District Administration Central in 2026, from the official Facebook page. Select a photo to enlarge it.")}${W.photoGallery(["plaques", "rwa", "education", "sports", "green", "fire", "polio", "dc", "adc1", "adc2", "acgul", "acliaq", "acnaz", "acnn", "acnk", "mukh", "gallery"])}</div></section>
    <section class="section"><div class="container">${sectionHead("FAQ", "Frequently Asked Questions")}${faq("initiativesFaq", [["What are government initiatives?", "Programmes and campaigns run by the District Administration Central to improve public services, protect consumers and support residents."], ["How are projects selected?", "Projects are chosen according to public need, government priorities and directions from the Government of Sindh and the Commissioner Karachi."], ["Can citizens suggest initiatives?", "Yes. Send your suggestion through the complaint form on this website, marking it as a suggestion."], ["Where can progress be checked?", "Progress updates are published on this page, on the News page and on the District Central social media pages."]])}</div></section>
  </main>${footer()}`;
}

function plaquesPage() {
  const W = window.DC_WORK;
  return `${header("initiatives")}<main>${hero("plaques")}
    <section class="section"><div class="container">${sectionHead("About", "Celebrating Our Legends", W.initiatives[0].summary + " The initiative was launched in November 2026 with plaques in Block 13, Gulberg, Federal B Area.")}<div class="row g-4">${W.plaques.map(([name, years, field, text, place]) => `<div class="col-md-6 col-lg-4"><article class="dept-card h-100" data-aos="fade-up">${({ "Sadequain": "plaques-05", "Amjad Sabri": "plaques-07", "Umar Sharif": "plaques-08", "Umeed Fazli": "plaques-10" })[name] ? `<img class="plaque-photo" src="images/gallery/${({ "Sadequain": "plaques-05", "Amjad Sabri": "plaques-07", "Umar Sharif": "plaques-08", "Umeed Fazli": "plaques-10" })[name]}.jpg" alt="Blue plaque for ${name}" loading="lazy">` : `<i class="bi bi-award"></i>`}<span class="section-kicker">${field}</span><h3>${name}</h3><p class="fw-bold mb-1">${years}</p><p>${text}</p><p class="small text-muted mb-0"><i class="bi bi-geo-alt"></i> ${place}</p></article></div>`).join("")}</div></div></section>
    <section class="section"><div class="container">${sectionHead("Map", "Blue Plaques Map", "Explore the plaques by category. Tap a category to filter the map, or a name to find its plaque.")}${plaqueMap()}</div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Photos", "Plaques and Ceremonies")}${W.photoGrid("plaques")}</div></section>
    <section class="section"><div class="container">${sectionHead("Timeline", "How the Initiative Began")}<div class="timeline-list">${W.initiatives[0].timeline.map(([m, t]) => `<article class="timeline-card"><span class="section-kicker">${m}</span><p class="mb-0">${t}</p></article>`).join("")}</div></div></section>
    <section class="complaint-cta"><div class="container"><div class="cta-panel"><div><span class="section-kicker">Suggest a Name</span><h2>Do You Know a Notable Resident?</h2><p>The District Administration welcomes suggestions of people from District Central who made significant contributions in sports, arts, music, education, science, public service and other fields. Call 021-99260038 or message us on Facebook.</p></div><div class="cta-actions"><a class="btn btn-primary-gradient" href="tel:02199260038"><i class="bi bi-telephone"></i> 021-99260038</a><a class="btn btn-outline-light" href="${W.source}" target="_blank" rel="noopener"><i class="bi bi-facebook"></i> Message on Facebook</a></div></div></div></section>
  </main>${footer()}`;
}

const RWA_PAGES = [
  { key: "b12", block: "Block 12, Federal B Area", sub: "Gulberg", org: "Gulberg Block 12 Residence Welfare Association", status: "Interim body elected, July 2026", fb: "https://www.facebook.com/Gulbergblock12ResidentWelfareAssociation", text: "Block 12 has worked closely with the police and the DC Office on CCTV coverage, guarded entry points and a monitoring room. According to the association's own figures, street crime in the block fell from 16–18 incidents to 1–2 in the 90 days after its cameras and guards were in place.", caps: ["Association update on falling crime", "Members of the association", "Meeting with officers", "Review meeting"] },
  { key: "b13", block: "Block 13, Federal B Area", sub: "Gulberg", org: "Block 13 Federal B Area Residents Welfare Association", status: "The model association", fb: "https://www.facebook.com/block13fba", web: "https://block-13.com", android: "https://play.google.com/store/apps/details?id=com.fbarea.residentapp", ios: "https://apps.apple.com/pk/app/block-13-resident-app/id6762463076", text: "The first block to form an association under the Deputy Commissioner's guidance, and the model for the rest of the district. Residents installed barriers and CCTV at entry points and hired guards, with a monitoring room that reports to the local police station. The association runs its own website and resident app for registration, complaints and monthly contributions, and held its second General Body Meeting at the TMC Cricket Ground in June 2026.", caps: ["Residents' meeting in the block", "Committee meeting", "Evening meeting with residents", "Residents gather at the block office"] },
  { key: "b14", block: "Block 14, Federal B Area", sub: "Gulberg", org: "Block 14 Residents Welfare Association", status: "General Body Meeting, October 2026", fb: "https://www.facebook.com/fbarea14", text: "Alongside community security, the Block 14 association has taken on cleanliness. Working with the sanitation staff, it cleared garbage dumps from its streets in November 2026 and supports regular waste collection, posting before-and-after photos so residents can see the results.", caps: ["Street cleared of garbage, November 2026", "Waste collection in the block", "Before and after the clean-up", "Association members at the DC Office"] },
  { key: "b15", block: "Block 15, Federal B Area", sub: "Gulberg", org: "Block 15 FB Area Residents Welfare Association", status: "General Body Meeting, November 2026", fb: "https://www.facebook.com/block15fbarea", text: "Formed in 2026 under the motto \u201cTogether We Can\u201d, the Block 15 association holds regular working-group meetings, has appointed a spokesperson and media cell, and runs a community security initiative funded by residents' monthly contributions.", caps: ["General Body Meeting", "Working group meeting", "Committee at work", "Residents' evening meeting"] },
  { key: "naz1", block: "Nazimabad No. 1", sub: "Nazimabad", org: "Nazimabad No. 1 Resident Welfare Association", status: "Working group awareness session, September 2026", fb: "https://www.facebook.com/profile.php?id=61594992351230", text: "Residents of Nazimabad No. 1 have formed working groups and held awareness sessions with the District Administration on how the association model can bring better security and quicker action on civic problems to one of Karachi's oldest neighbourhoods.", caps: ["Awareness session with residents", "Working group members", "Residents at the session", "Discussion with the working group"] },
  { key: "nnb", block: "Block B, North Nazimabad", sub: "North Nazimabad", org: "Block B Residents Association North Nazimabad", status: "Adopting the Block 13 model, June 2026", fb: "https://www.facebook.com/BBRAkarachi", text: "One of North Nazimabad's established residents' associations, now adopting the Block 13 model for security. It keeps residents informed about civic work in the block, including the recent resurfacing of its roads.", caps: ["Newly resurfaced road", "Road works in the block", "Resurfaced street", "Tree-lined road after resurfacing"] }
];
function rwaCard(r) {
  const imgs = [1, 2, 3, 4].map((n, i) => `<a class="rwa-tile t${n}" href="images/rwa/${r.key}-${n}.jpg" target="_blank" rel="noopener"><img src="images/rwa/${r.key}-${n}.jpg" alt="${r.caps[i]} – ${r.block}" loading="lazy"></a>`).join("");
  const links = [`<a class="btn btn-sm rwa-fb" href="${r.fb}" target="_blank" rel="noopener"><i class="bi bi-facebook"></i> Facebook page</a>`, r.web ? `<a class="btn btn-sm btn-outline-primary" href="${r.web}" target="_blank" rel="noopener"><i class="bi bi-globe2"></i> ${r.web.replace(/^https?:\/\//, "")}</a>` : "", r.android ? `<a class="btn btn-sm btn-outline-primary" href="${r.android}" target="_blank" rel="noopener"><i class="bi bi-google-play"></i> Android app</a><a class="btn btn-sm btn-outline-primary" href="${r.ios}" target="_blank" rel="noopener"><i class="bi bi-apple"></i> iPhone app</a>` : ""].join("");
  return `<div class="col-lg-6" data-aos="fade-up"><article class="rwa-card h-100"><div class="rwa-collage">${imgs}</div><div class="rwa-body"><div class="rwa-meta"><span class="rwa-sub"><i class="bi bi-geo-alt"></i> ${r.sub}</span><span class="rwa-status">${r.status}</span></div><h3>${r.block}</h3><p class="rwa-org">${r.org}</p><p>${r.text}</p><div class="rwa-links">${links}</div><p class="rwa-credit">Photos from the association's Facebook page.</p></div></article></div>`;
}
function rwaPage() {
  const W = window.DC_WORK;
  const steps = [["bi-people", "Gather your neighbours", "Hold a meeting of the residents of your block and agree to form an association."], ["bi-journal-check", "Register the association", "Register with the Social Welfare Department. Officers from the DC Office can guide you through the process."], ["bi-shield-check", "Agree a security plan", "Work with the police and the District Administration on patrolling, CCTV and, where approved under the SOPs, manned barriers or gates."], ["bi-chat-dots", "Stay in touch", "Raise sanitation, water, roads and other civic issues through your association for quicker action by the departments concerned."]];
  return `${header("initiatives")}<main>${hero("rwa")}
    <section class="section"><div class="container">${sectionHead("Community Policing", "Safer Neighbourhoods, Together", W.initiatives[1].summary)}<div class="branch-workflow">${steps.map(([icon, title, text], i) => `<div class="flow-card"><span class="avatar placeholder-image mx-auto"><i class="bi ${icon}"></i></span><strong>${i + 1}. ${title}</strong><p class="flow-text">${text}</p></div>`).join("")}</div></div></section>
    <section class="section muted-section" id="why"><div class="container">${sectionHead("Why It Matters", "Why This Initiative Matters", "Many civic problems go unresolved because residents have no organised way to raise them. A registered association gives every block one representative voice, and a direct line to the police, the District Administration and the civic agencies.")}
      <div class="row g-4">${[["bi-shield-lock", "Safer streets", "Guarded entry points, CCTV and a monitoring room that alerts the local police station deter street crime. Residents only watch and report; enforcement stays with the police."], ["bi-megaphone", "One voice for the block", "Instead of many separate complaints, the association raises water, sewerage, roads and waste problems through focal persons, so departments can act faster."], ["bi-house-check", "Protecting public space", "Residents collectively oppose illegal water connections, unauthorised construction and encroachment of streets and parks."], ["bi-people", "Ownership and trust", "Neighbours who meet regularly take responsibility for their block, and build trust with the officers who serve them."], ["bi-sign-turn-right", "Open to everyone", "Gates and barriers are allowed only under the approved SOPs, after consultation with the police and Rangers, and must never block ordinary citizens or commuters."], ["bi-diagram-3", "A model that spreads", "What began in one block of Federal B Area in early 2026 has grown to about 25 neighbourhoods across the district."]].map(([i, t, x]) => `<div class="col-md-6 col-lg-4"><article class="rwa-why h-100"><i class="bi ${i}"></i><h3>${t}</h3><p>${x}</p></article></div>`).join("")}</div></div></section>
    <section class="section" id="associations"><div class="container">${sectionHead("Associations", "Meet the Associations", "Residents' associations that share their work online. Follow their pages for meetings, security updates and civic work in each block.")}<div class="row g-4">${RWA_PAGES.map(rwaCard).join("")}</div></div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Also Forming", "More Blocks Joining the Initiative", "These blocks have formed, or are forming, an association with the support of the DC Office.")}<div class="row g-3">${W.rwas.filter(([a]) => !RWA_PAGES.some((r) => r.block === a)).sort((x, y) => { const k = (a) => { const m = a.match(/^Block (\d+), Federal/); return m ? -100 + (m[1] === "11" ? 0 : m[1] === "10" ? 1 : m[1] === "2" ? 2 : 3) : 0; }; return k(x[0]) - k(y[0]); }).map(([a, b, c]) => `<div class="col-md-6 col-lg-3"><article class="rwa-mini h-100"><span class="rwa-sub"><i class="bi bi-geo-alt"></i> ${b}</span><h3>${a}</h3><p>${c}</p></article></div>`).join("")}</div></div></section>
    <section class="section"><div class="container">${sectionHead("Photos", "Residents Meeting Across the District")}${W.photoGrid("rwa")}</div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Timeline", "How the Initiative Has Grown")}<div class="timeline-list">${W.initiatives[1].timeline.map(([m, t]) => `<article class="timeline-card"><span class="section-kicker">${m}</span><p class="mb-0">${t}</p></article>`).join("")}</div></div></section>
    <section class="complaint-cta"><div class="container"><div class="cta-panel"><div><span class="section-kicker">Join</span><h2>Want to Start an Association in Your Block?</h2><p>Contact the office of the Assistant Commissioner of your subdivision, or the DC Office, and our team will help you get started.</p></div><div class="cta-actions"><a class="btn btn-primary-gradient" href="contact.html">Contact Us</a><a class="btn btn-outline-light" href="${W.source}" target="_blank" rel="noopener"><i class="bi bi-facebook"></i> Facebook</a></div></div></div></section>
  </main>${footer()}`;
}

function teamPage() {
  const card = ([href, photo, name, role, area]) => `<div class="col-md-6 col-lg-4"><a class="text-decoration-none" href="${href}"><article class="dept-card h-100 team-card" data-aos="fade-up">${photo ? `<img class="team-photo" src="images/${photo}" alt="${name}" loading="lazy">` : `<span class="team-photo team-icon"><i class="bi bi-person"></i></span>`}<span class="section-kicker">${area}</span><h3>${name}</h3><p>${role}</p><span class="btn btn-outline-primary btn-sm">View profile</span></article></a></div>`;
  const lead = [["deputy-commissioner.html", "DC Central.jpg", "Mr. Taha Saleem (PAS)", "Deputy Commissioner, District Central", "Head of District"], ["adc-1.html", "ADC I.jpeg", "Mr. Muhammad Asim Abbasi (Ex-PCS)", "Additional Deputy Commissioner-I", "Revenue & Coordination"], ["adc-2.html", "", "Mr. Rizwan Alam (PMS)", "Additional Deputy Commissioner-II", "General Administration"]];
  const acs = [["ac-1.html", "Dr Saira.jpeg", "Dr. Saira Khan (PMS)", "Assistant Commissioner", "Liaquatabad"], ["ac-2.html", "Umar Iqbal.jpg", "Mr. Umar Iqbal (PAS)", "Assistant Commissioner", "Gulberg"], ["ac-3.html", "Rabia .jpeg", "Ms. Rabia Syed (PMS)", "Assistant Commissioner", "Nazimabad"], ["ac-4.html", "Naimat Ullah.jpeg", "Mr. Naimat Ullah Chachar (PMS)", "Assistant Commissioner", "North Nazimabad"], ["ac-5.html", "Fareed haneef.jpeg", "Capt (R) Fareed Haneef (PAS)", "Assistant Commissioner", "New Karachi"], ["ac-6.html", "", "Assistant Commissioner (Revenue)", "Revenue, District Central", "Revenue"]];
  const mk = [["mukhtiarkar-liaquatabad.html", "", "Mr. Abdul Hafeez Narejo", "Mukhtiarkar", "Liaquatabad"], ["mukhtiarkar-gulberg.html", "", "Mr. Piyas Ali Pitafi", "Mukhtiarkar", "Gulberg"], ["mukhtiarkar-nazimabad.html", "", "Mr. Saeed Ahmed Kohaao", "Mukhtiarkar", "Nazimabad"], ["mukhtiarkar-north-nazimabad.html", "karrar Hussain.PNG", "Syed Karar Hussain", "Mukhtiarkar", "North Nazimabad"], ["mukhtiarkar-new-karachi.html", "", "Mr. Arshad Hussain Chandio", "Mukhtiarkar", "New Karachi"], ["superintendent-revenue.html", "", "Mr. Kailash B. Maheshwari", "Office Superintendent (Revenue)", "DC Office"]];
  return `${header("team")}<main>${hero("team")}
    <section class="section"><div class="container">${sectionHead("Leadership", "District Leadership", "The Deputy Commissioner heads the District Administration Central, supported by two Additional Deputy Commissioners.")}<div class="row g-4">${lead.map(card).join("")}</div></div></section>
    <section class="section muted-section" id="assistant-commissioners"><div class="container">${sectionHead("Sub-Divisions", "Assistant Commissioners", "Each of the five sub-divisions is headed by an Assistant Commissioner, responsible for administration, price control, anti-encroachment and public facilitation.")}<div class="row g-4">${acs.map(card).join("")}</div></div></section>
    <section class="section" id="mukhtiarkars"><div class="container">${sectionHead("Revenue", "Mukhtiarkars and Superintendent", "Mukhtiarkars head the revenue field offices of each sub-division, maintaining land records and verifying residence for Domicile and PRC.")}<div class="row g-4">${mk.map(card).join("")}</div></div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Branches", "District Office Branches")}<div class="text-center"><a class="btn btn-primary-gradient" href="branches.html">View all branches</a></div></div></section>
  </main>${footer()}`;
}

function trackPage() {
  const ways = [["bi-telephone", "Call the DC Office", "Call (021) 99260049 during office hours and give your complaint number, name and CNIC."], ["bi-building", "Visit the Complaint Cell", "Visit the Complaint Cell at the DC Office, Sector 15-A/1, Buffer Zone, Monday to Friday, 9:00 AM to 5:00 PM."], ["bi-phone", "Pakistan Citizen’s Portal", "If you registered your complaint on the Pakistan Citizen’s Portal, track it in the app or at citizenportal.gov.pk."], ["bi-facebook", "Message us on Facebook", "Send a message to the official Facebook page with your complaint number for an update."]];
  return `${header("track")}<main>${hero("track")}
    ${window.trackFormSection ? trackFormSection() : ""}
    <section class="section"><div class="container">${sectionHead("Follow Up", "How to Track Your Complaint", "Every complaint registered with the District Administration Central is given a reference and assigned to the branch or officer responsible. The target response time is 48 hours on working days. You can follow up in any of these ways.")}<div class="card-grid">${ways.map(([i, t, x]) => iconCard(i, t, x)).join("")}</div></div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Keep Ready", "Information to Keep With You")}<div class="row justify-content-center"><div class="col-lg-8"><ul class="check-list"><li>Your complaint reference or the date you registered it</li><li>Your name, CNIC and mobile number as given in the complaint</li><li>The subject of the complaint and the area concerned</li><li>Any receipt or photographs you submitted</li></ul></div></div></div></section>
    <section class="complaint-cta"><div class="container"><div class="cta-panel"><div><span class="section-kicker">New Complaint</span><h2>Haven’t Registered Yet?</h2><p>Register your complaint online and the office will contact you.</p></div><div class="cta-actions"><a class="btn btn-primary-gradient" href="complaint-registration.html">Register a Complaint</a><a class="btn btn-outline-light" href="tel:02199260049">(021) 99260049</a></div></div></div></section>
  </main>${footer()}`;
}

function policyPage(key, sections) {
  return `${header(key)}<main>${hero(key)}<section class="section"><div class="container"><div class="row justify-content-center"><div class="col-lg-9"><article class="content-card policy-card">${sections.map(([h, t]) => `<h2>${h}</h2><p>${t}</p>`).join("")}<p class="text-muted mt-4">Last updated: November 2026</p></article></div></div></div></section></main>${footer()}`;
}

function privacyPage() {
  return policyPage("privacy", [
    ["Our commitment", "The District Administration Central respects the privacy of everyone who uses this website. This policy explains what information is collected and how it is used."],
    ["Information you give us", "When you submit a complaint or contact form, we collect only the details needed to deal with your matter, such as your name, CNIC, mobile number, email address and the details of your complaint."],
    ["How we use it", "Your information is used only to process your request, to contact you about it and to forward it to the branch or department responsible. It is not sold or shared for any commercial purpose."],
    ["Sharing with other departments", "Where your complaint concerns another government department, the relevant details are shared with that department so that it can take action."],
    ["Browsing information", "Like most websites, the hosting service may record basic technical information such as your browser type and the pages visited, to keep the website secure and working well. This information does not identify you personally."],
    ["Links to other websites", "This website links to other government and partner websites. We are not responsible for the privacy practices of those websites."],
    ["Security", "We take reasonable steps to protect the information you give us. Please do not send sensitive personal information through social media messages."],
    ["Contact", "For any question about this policy, contact the Deputy Commissioner Office, District Central, Sector 15-A/1, Buffer Zone, Karachi, or call (021) 99260049."]]);
}

function termsPage() {
  return policyPage("terms", [
    ["Use of this website", "This is the official website of the District Administration Central, Karachi, Government of Sindh. By using it you agree to these terms."],
    ["Accuracy of information", "We make every effort to keep the information on this website accurate and up to date. However, fees, requirements, timings and contact numbers can change. Please confirm with the office concerned before you apply or visit."],
    ["Official documents", "Information on this website is for guidance. Official notifications, orders and certificates issued by the competent authority take precedence over any content on this website."],
    ["Complaints and submissions", "Please give true and accurate information when submitting a complaint. False, abusive or misleading complaints may lead to action under the law."],
    ["Links to other websites", "Links to other websites are provided for convenience. The District Administration Central is not responsible for the content of external websites."],
    ["Copyright", "Text and photographs on this website belong to the District Administration Central unless stated otherwise. Logos belong to their respective organisations. Content may be shared for non-commercial purposes with credit to the District Administration Central."],
    ["Changes", "These terms may be updated from time to time. The latest version will always be published on this page."]]);
}

const TP_PHOTOS = {
  "downtown-nazimabad-2": ["Downtown Nazimabad 2.jpg", "King Eliot", "CC BY-SA 4.0"],
  "downtown-nazimabad-3": ["Downtown Nazimabad 3.jpg", "King Eliot", "CC BY-SA 4.0"],
  "greenline-station-karachi": ["Greenline Station Karachi.jpg", "King Eliot", "CC BY-SA 4.0"],
  "greenline-metro-station-karachi": ["Greenline Metro Station Karachi.jpg", "King Eliot", "CC BY-SA 4.0"],
  "orange-line-station-karachi": ["Orange Line Station Karachi.jpg", "King Eliot", "CC BY-SA 4.0"],
  "peoples-bus-service-red-karachi": ["Peoples Bus Service (Red) Karachi.jpg", "King Eliot", "CC BY-SA 4.0"],
  "karachi-circular-railway": ["Karachi Circular Railway.jpg", "Adnanrail", "CC BY-SA 3.0"],
  "liaquatabad-railway-station-building-0288": ["Liaquatabad railway station building 0288.jpg", "Asad Razzaki", "CC BY-SA 4.0"]
};
function tpPhoto(slug, alt, icon, cls = "") {
  const [file, by, lic] = TP_PHOTOS[slug];
  return `<figure class="tp-photo ${cls}"><img src="images/transport/${slug}.jpg" alt="${alt}" loading="lazy" onerror="this.parentNode.classList.add('noimg')"><i class="bi ${icon}"></i><figcaption><a href="https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replace(/ /g, "_"))}" target="_blank" rel="noopener">Photo: ${by}, ${lic}</a></figcaption></figure>`;
}
function transportPage() {
  const stations = [["Numaish", 0], ["Patel Para (Guru Mandir)", 0], ["Lasbela Chowk", 0], ["Sanitary Market (Gulbahar)", 0], ["Nazimabad No. 1", 1], ["Enquiry Office", 1], ["Annu Bhai Park", 1], ["Board Office (Orange Line)", 1], ["Hyderi", 1], ["Five Star Chowrangi", 1], ["Jumma Bazaar", 1], ["Erum Shopping Mall", 1], ["Nagan Chowrangi", 1], ["U.P. More", 1], ["Road 4200", 1], ["Power House Chowrangi", 1], ["Road 2400", 1], ["2 Minute Chowrangi", 1], ["Surjani Chowrangi (4K)", 0], ["Karimi Chowrangi", 0], ["KDA Flats", 0], ["Abdullah Chowk", 0]];
  const pbs = [["bi-bus-front", "Route 2 – North Karachi to Indus Hospital", "Via Nagan Chowrangi, Shafiq Mor, Gulshan Chowrangi, NIPA, Johar Mor, Drigh Road, Shah Faisal Colony and Singer Chowrangi. Pink buses for women also run on this corridor."], ["bi-bus-front", "Route 3 – Power House to Singer Chowrangi", "Via U.P. More, Nagan Chowrangi, Sakhi Hasan, Five Star Chowrangi, KDA Chowrangi, Nazimabad Eid Gah, Liaquatabad No. 10, Civic Centre and the National Stadium."], ["bi-bus-front", "Route 4 – North Karachi onwards", "Starts in North Karachi and runs through New Karachi to University Road, linking the district with the universities and the eastern side of the city."]];
  const ev = [["EV Station – North Nazimabad (KDA)", "Block A, KDA Apartments, Street 8, North Nazimabad", "DC fast charger · up to 120 kW · CCS2"], ["EV Station – North Karachi Industrial Area", "Plot 11, Sector 12-D, North Karachi Industrial Area", "DC fast charger · up to 240 kW · CCS2"], ["Near Metric Board, North Nazimabad", "Near Jinnah College for Women, North Nazimabad", "AC charger · 11 kW · registered with NEECA"]];
  return `${header("transport")}<main>${hero("transport")}
  <section class="section"><div class="container"><div class="row g-5 align-items-center"><div class="col-lg-6" data-aos="fade-up">
    <span class="section-kicker">Getting Around</span><h2>At the Heart of Karachi's North–South Corridor</h2>
    <p>District Central sits on the main route between the city centre and the northern suburbs. Every day hundreds of thousands of people travel through Nazimabad, Liaquatabad, Gulberg, North Nazimabad and New Karachi to reach work, colleges, hospitals and markets across the city.</p>
    <p>The district is served by Karachi's first bus rapid transit line, the <strong>Green Line BRT</strong>, which runs through it for most of its length, and by the Sindh government's <strong>Peoples Bus Service</strong>, including women-only Pink buses and electric buses. Public <strong>EV charging</strong> points have opened in North Nazimabad and North Karachi, and two stations of the <strong>Karachi Circular Railway</strong>, Liaquatabad and North Nazimabad, are part of the plan to revive the city's rail loop.</p>
    <p>This page brings together what residents and visitors need to know: routes, stations, fares, timings and where to charge an electric vehicle.</p>
  </div><div class="col-lg-6" data-aos="fade-up">${tpPhoto("downtown-nazimabad-2", "A Green Line bus on its dedicated lane through Nazimabad", "bi-bus-front-fill", "tp-hero")}</div></div>
  <div class="tp-stats" data-aos="fade-up"><div><strong>22</strong><span>Green Line stations</span></div><div><strong>80</strong><span>Green Line buses</span></div><div><strong>Rs 15–55</strong><span>Green Line fare</span></div><div><strong>7 am – 10 pm</strong><span>BRT and Peoples Bus hours</span></div></div></div></section>

  <section class="section muted-section" id="green-line"><div class="container">${sectionHead("Bus Rapid Transit", "Green Line BRT", "The Green Line is Karachi's flagship metro bus. Its buses run on their own dedicated lane, so a journey that takes over an hour in traffic is much quicker.")}
    <div class="row g-4 align-items-stretch"><div class="col-lg-7"><article class="content-card h-100">
      <h3>About the service</h3>
      <p>The Green Line opened in December 2021 and became fully operational in January 2022, with 80 modern 18-metre hybrid buses serving 22 stations between Numaish Chowrangi and Surjani Town, about 21 km. More than half of its stations are in District Central, from <strong>Nazimabad No. 1</strong> through <strong>Hyderi</strong> and <strong>North Nazimabad</strong> to <strong>Nagan Chowrangi</strong> and <strong>North Karachi</strong>.</p>
      <ul class="check-list"><li><strong>Timing:</strong> 7:00 am to 10:00 pm, every day</li><li><strong>Fare:</strong> Rs 15 to Rs 55 depending on distance; Rs 55 for the full route</li><li><strong>Metrobus card:</strong> available at station counters for Rs 100; rechargeable and quicker at the gates</li><li><strong>Orange Line:</strong> the Abdul Sattar Edhi (Orange) Line from Orangi Town connects with the Green Line at Board Office station</li><li><strong>Extension:</strong> a 1.8 km extension from Numaish to Municipal Park near Jama Cloth Market is under construction and expected to be completed in the 2026-27 financial year</li></ul>
    </article></div><div class="col-lg-5"><div class="tp-stack">${tpPhoto("greenline-station-karachi", "Green Line station and bus at night", "bi-signpost-2")}${tpPhoto("greenline-metro-station-karachi", "Platform inside a Green Line station", "bi-signpost-2")}</div></div></div>
    <div class="row g-4 mt-1"><div class="col-md-6">${tpPhoto("downtown-nazimabad-3", "Green Line station and footbridge in Nazimabad", "bi-bus-front")}</div><div class="col-md-6">${tpPhoto("orange-line-station-karachi", "Orange Line station in Orangi Town", "bi-sign-turn-right")}</div></div>
    <article class="content-card mt-4" data-aos="fade-up"><h3>Green Line stations</h3><p class="text-muted mb-3">Stations in or bordering District Central are highlighted. Listed from south to north.</p><ol class="tp-stations">${stations.map(([s, d]) => `<li class="${d ? "in" : ""}">${s}</li>`).join("")}</ol></article>
  </div></section>

  <section class="section" id="peoples-bus"><div class="container">${sectionHead("Public Buses", "Peoples Bus Service", "Launched by the Government of Sindh in June 2022, the Peoples Bus Service runs air-conditioned buses on fixed routes across Karachi at a low, fixed fare.")}
    <div class="row g-4 align-items-center mb-4"><div class="col-lg-5">${tpPhoto("peoples-bus-service-red-karachi", "A red Peoples Bus in Karachi", "bi-bus-front")}</div><div class="col-lg-7">
      <div class="row g-3"><div class="col-sm-4"><article class="tp-fleet red"><i class="bi bi-bus-front-fill"></i><h3>Red buses</h3><p>Air-conditioned hybrid buses for everyone, with a separate section for women.</p></article></div>
      <div class="col-sm-4"><article class="tp-fleet pink"><i class="bi bi-gender-female"></i><h3>Pink buses</h3><p>Pakistan's first women-only bus service, launched in 2023 and run with women drivers and conductors.</p></article></div>
      <div class="col-sm-4"><article class="tp-fleet white"><i class="bi bi-lightning-charge-fill"></i><h3>EV buses</h3><p>White electric buses with their own charging points: zero exhaust and a quieter ride.</p></article></div></div>
      <p class="mt-3 mb-0"><strong>Fare:</strong> Rs 80 for up to 15 km and Rs 120 for longer trips (since February 2025). <strong>Hours:</strong> about 7:00 am to 10:00 pm. Buses stop only at marked stops.</p>
    </div></div>
    <h3 class="h5 mb-3">Routes serving District Central</h3><div class="card-grid">${pbs.map(([i, t, x]) => iconCard(i, t, x)).join("")}</div>
    <p class="text-muted small mt-3">Routes and stops change from time to time. Check the Sindh Mass Transit Authority at <a href="https://smta.sindh.gov.pk/people-bus-service" target="_blank" rel="noopener">smta.sindh.gov.pk</a> before you travel.</p>
  </div></section>

  <section class="section muted-section" id="ev-charging"><div class="container">${sectionHead("Electric Vehicles", "EV Charging in District Central", "Electric cars and bikes are becoming common in Karachi, and some of the city's fastest public chargers are in District Central.")}
    <div class="row g-4">${ev.map(([n, a, s]) => `<div class="col-md-6 col-lg-4"><article class="tp-ev h-100" data-aos="fade-up"><div class="tp-ev-icon"><i class="bi bi-ev-station-fill"></i></div><h3>${n}</h3><p><i class="bi bi-geo-alt"></i> ${a}</p><span class="tp-ev-spec">${s}</span><a class="btn btn-sm btn-outline-primary mt-3" href="https://www.google.com/maps/search/${encodeURIComponent(n.replace(/–.*/, "") + " EV charging " + a + " Karachi")}" target="_blank" rel="noopener"><i class="bi bi-map"></i> Directions</a></article></div>`).join("")}</div>
    <div class="row g-4 mt-3"><div class="col-lg-6"><article class="content-card h-100"><h3>Before you charge</h3><ul class="check-list"><li>Most fast chargers in Karachi use the <strong>CCS2</strong> connector; check your car's charging port</li><li>Prices are charged per unit (kWh) and differ between operators</li><li>Check that a charger is working before you set off, using a charging map app such as Open Charge Map or ChargePK</li><li>Public charging stations must be registered with the National Energy Efficiency and Conservation Authority (NEECA)</li></ul></article></div>
    <div class="col-lg-6"><article class="content-card h-100"><h3>Cleaner transport in Sindh</h3><p>The Sindh government has introduced electric buses on the Peoples Bus Service, Pink electric scooties for women and students, and in April 2026 signed an agreement with Sindh Bank and the Sindh Mass Transit Authority to launch an electric taxi service, including taxis for women. More electric buses are being added to the fleet in phases.</p></article></div></div>
  </div></section>

  <section class="section" id="kcr"><div class="container">${sectionHead("Rail", "Karachi Circular Railway", "The KCR loop line once carried commuters around the city, and two of its stations are in District Central.")}
    <div class="row g-4 align-items-center"><div class="col-lg-6"><div class="tp-stack two">${tpPhoto("karachi-circular-railway", "A KCR train at Karachi City station", "bi-train-front")}${tpPhoto("liaquatabad-railway-station-building-0288", "The old Liaquatabad railway station building", "bi-train-front")}</div></div>
    <div class="col-lg-6"><p>The Karachi Circular Railway was extended north-west in the 1970s to form a loop through <strong>Liaquatabad</strong> and <strong>North Nazimabad</strong>, whose station opened in 1970. Services on the loop stopped in 1999.</p>
    <p>The revival plan under the China–Pakistan Economic Corridor covers 43.2 km with 24 stations, 13 of them elevated and 11 at ground level, and is designed to carry about 650,000 passengers a day. Railway land has been cleared at several stations. Encroachments near Liaquatabad still need to be removed, and the District Administration supports the anti-encroachment work along the route.</p></div></div>
  </div></section>

  <section class="section muted-section" id="local-transport"><div class="container">${sectionHead("Everyday Travel", "Buses, Coaches, Rickshaws and Ride-Hailing")}
    <div class="card-grid">${iconCard("bi-truck-front", "Minibuses and coaches", "Private minibuses and coaches still carry many commuters on routes through Nagan Chowrangi, Hyderi, Liaquatabad and Gulberg. Fares are set by the Sindh Regional Transport Authority.")}${iconCard("bi-cash-coin", "Official fares", "Under the notification of April 2026: Rs 40–50 for up to 10 km, Rs 70–80 for up to 30 km and Rs 110–120 for longer routes. Being overcharged? Report it through the complaint form.")}${iconCard("bi-scooter", "Rickshaws and ride-hailing", "Auto-rickshaws, motorbike taxis and app-based rides cover the last mile from BRT stations and bus stops to homes and markets.")}${iconCard("bi-cone-striped", "Traffic and roads", "Report traffic problems to the Karachi Traffic Police helpline 1915. Report broken roads, missing manhole covers or encroachments on footpaths to the DC Office.")}</div>
  </div></section>

  <section class="section" id="map"><div class="container">${sectionHead("Map", "Green Line Through District Central")}<div class="row justify-content-center"><div class="col-lg-10"><div class="district-map tp-map"><iframe src="https://www.google.com/maps?q=Nagan+Chowrangi+Green+Line+BRT+Station,+Karachi&z=13&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map of the Green Line BRT in District Central"></iframe></div></div></div></div></section>

  <section class="section muted-section"><div class="container">${sectionHead("Help", "Frequently Asked Questions")}<div class="row justify-content-center"><div class="col-lg-9">${faq("tpFaq", [
    ["Which Green Line stations are in District Central?", "Nazimabad No. 1, Enquiry Office, Annu Bhai Park, Board Office, Hyderi, Five Star Chowrangi, Jumma Bazaar, Erum Shopping Mall, Nagan Chowrangi, U.P. More, Road 4200, Power House Chowrangi, Road 2400 and 2 Minute Chowrangi serve the district and the areas around it."],
    ["How do I pay on the Green Line?", "Buy a token at the station counter for your journey, or buy a rechargeable Metrobus card for Rs 100 and tap it at the gate. Fares run from Rs 15 to Rs 55."],
    ["Are there buses only for women?", "Yes. Pink buses of the Peoples Bus Service are for women only, and Red buses have a separate section for women. The Green Line also has a reserved area for women."],
    ["Where can I charge an electric car in the district?", "Public fast chargers are at the KDA Apartments in Block A, North Nazimabad, and in Sector 12-D of the North Karachi Industrial Area. Check that the charger is working before you travel."],
    ["Who do I contact about a transport problem?", "For the Green Line and Peoples Bus Service, contact the Sindh Mass Transit Authority. For traffic, call 1915. For roads, encroachments and overcharging in the district, use the DC Office complaint form."]])}</div></div></div></section>

  <section class="complaint-cta"><div class="container"><div class="cta-panel"><div><span class="section-kicker">Report a Problem</span><h2>Broken road, encroached footpath or overcharging?</h2><p>Tell the District Administration and we will forward it to the department responsible.</p></div><div class="cta-actions"><a class="btn btn-primary-gradient" href="complaint-registration.html">Register a Complaint</a><a class="btn btn-outline-light" href="tel:1915">Traffic Helpline 1915</a></div></div></div></section>
  <section class="section pt-4"><div class="container"><p class="text-muted small text-center mb-0">Information correct as of November 2026, from the Sindh Mass Transit Authority, NEECA and published news reports. Fares and routes can change. Photos from Wikimedia Commons under Creative Commons licences; photographers are credited on each image.</p></div></section>
  </main>${footer()}`;
}

const POLICE_DIVISIONS = [
  { name: "Liaquatabad Division", sp: "021-99231384", sub: "Liaquatabad and Nazimabad", stations: [["Liaquatabad", "021-99231382"], ["Sharifabad", "021-99246189"], ["Gulbahar", "021-36622882"], ["Super Market", "021-99239367"], ["Nazimabad", "021-99260502"], ["Rizvia Society", "021-36622323"], ["Paposh Nagar", "021-36620992"]] },
  { name: "Gulberg Division", sp: "021-99260552", sub: "Gulberg and North Nazimabad", stations: [["Gulberg", "021-99246165"], ["Samanabad", "021-99246172"], ["Azizabad", "021-99246154"], ["Jauharabad", "021-99246145"], ["Yousuf Plaza", "021-99246188"], ["Shahrah-e-Noor Jahan", "021-36673336"], ["Taimuria", "021-36629790"], ["North Nazimabad", "021-36637220"], ["Hyderi Market", "021-36628969"]] },
  { name: "New Karachi Division", sp: "021-99333195", sub: "New Karachi and F.B. Industrial Area", stations: [["New Karachi", "021-36902222"], ["Bilal Colony", "021-36904000"], ["New Karachi Industrial Area", "021-36972222"], ["Sir Syed", "021-36982222"], ["Khawaja Ajmer Nagri", "021-36902100"], ["F.B. Industrial Area", "021-99246477"], ["Gabol Town", "021-36924222"]] }
];
const LAW_PHOTOS = [["night-inspection", "Night inspection with the police in the district"], ["cctv-room-1", "Community Policing Karachi (CPK) monitoring room, Nazimabad"], ["residents-police-2", "Residents and police discuss neighbourhood security"], ["police-meeting-1", "Law and order meeting with police officers"], ["market-check", "Joint market check with the police"], ["night-patrol", "Night visit to a busy market"], ["cctv-room-2", "Briefing at the community policing room"], ["residents-police-1", "Evening meeting on community policing"], ["police-meeting-2", "Review meeting with police officers"], ["cctv-room-3", "Visit to the monitoring room"], ["block14-ceremony", "Block 14 residents' association inauguration with police officers"], ["night-inspection", ""]].filter(([, c]) => c);
function lawOrderPage() {
  const tel = (n) => n.replace(/[^0-9]/g, "");
  const helplines = [["bi-telephone-fill", "15", "Police emergency (Madadgar)", "#dc2626"], ["bi-shield-fill-check", "1101", "Sindh Rangers helpline", "#15803d"], ["bi-whatsapp", "0347-9001111", "Rangers WhatsApp", "#16a34a"], ["bi-people-fill", "1102", "CPLC (Citizens-Police Liaison)", "#1d4ed8"], ["bi-sign-stop-fill", "1915", "Karachi Traffic Police", "#b45309"], ["bi-truck-front-fill", "1122", "Rescue 1122", "#c2410c"]];
  const total = POLICE_DIVISIONS.reduce((a, d) => a + d.stations.length, 0);
  return `${header("law")}<main>${hero("law")}
  <section class="section law-press-top"><div class="container"><div class="row g-4 align-items-center">
    <div class="col-lg-4" data-aos="fade-up"><span class="section-kicker">Safe City Project · Feb 2022</span><h2>Building a Safer District, Together with the Police</h2><p>The Deputy Commissioner Central, Taha Saleem, welcomed the DIG Security, Dr Maqsood Ahmed, to the DC Office to plan a regional office of the <strong>Safe City Project</strong> in District Central. The SSP Central, DSP Madadgar 15 and the Assistant Commissioner Gulberg joined the meeting.</p><p class="small text-muted mb-0">As reported in Daily Jehan Pakistan and Daily Raftaar, Karachi, February 2022.</p></div>
    <div class="col-lg-8" data-aos="fade-up"><div class="law-press-clips"><figure><a href="images/police/press-dig-visit-2022.jpg" target="_blank" rel="noopener"><img src="images/police/press-dig-visit-2022.jpg" alt="Daily Jehan Pakistan: Deputy Commissioner Central Taha Saleem shows DIG Security Dr Maqsood Ahmed around the DC Office"></a><figcaption>Daily Jehan Pakistan: the Deputy Commissioner shows DIG Security Dr Maqsood Ahmed around the DC Office.</figcaption></figure><figure><a href="images/police/press-safe-city-2022.jpg" target="_blank" rel="noopener"><img src="images/police/press-safe-city-2022.jpg" alt="Daily Raftaar: meeting on the Safe City Project regional office in District Central"></a><figcaption>Daily Raftaar: meeting on the Safe City Project regional office, with the SSP Central, DSP 15 and AC Gulberg.</figcaption></figure></div></div>
  </div></div></section>
  <section class="law-help"><div class="container"><div class="law-help-grid">${helplines.map(([i, n, l, c]) => `<a class="law-help-item" href="tel:${tel(n)}" style="--c:${c}"><i class="bi ${i}"></i><strong>${n}</strong><span>${l}</span></a>`).join("")}</div><p class="law-help-note"><i class="bi bi-info-circle"></i> In an emergency, call <strong>15</strong> first. For an incident in your area you can also call your local police station below.</p></div></section>
  <section class="section"><div class="container"><div class="row g-5 align-items-center"><div class="col-lg-6" data-aos="fade-up"><span class="section-kicker">Law & Order</span><h2>A Safer District Central</h2>
    <p>Keeping the peace in District Central is a shared responsibility. The <strong>Sindh Police</strong>, under the Senior Superintendent of Police (SSP) District Central, prevents and investigates crime through ${total} police stations in three police divisions. <strong>Sindh Rangers</strong> support the police in maintaining law and order across Karachi.</p>
    <p>The <strong>District Administration</strong>, led by the Deputy Commissioner, coordinates the effort. It chairs law and order and peace committee meetings, issues orders under Section 144 when public safety requires it, arranges security for Muharram, Eid and other events, and verifies arms licences.</p>
    <p>Residents play their part too, through <a href="residents-associations.html">residents' associations</a>, CCTV and monitoring rooms linked to local police stations.</p></div>
    <div class="col-lg-6" data-aos="fade-up"><div class="law-hero-photos"><img src="images/police/night-inspection.jpg" alt="Night inspection with the police" class="a"><img src="images/police/cctv-room-1.jpg" alt="Community policing CCTV room" class="b"><img src="images/police/residents-police-2.jpg" alt="Residents and police meeting" class="c"></div></div></div></div></section>
  <section class="section muted-section"><div class="container">${sectionHead("Who Does What", "How Law and Order Works Here")}
    <div class="card-grid">${iconCard("bi-person-badge", "Deputy Commissioner", "Coordinates law and order in the district, chairs the district peace and law and order committees, issues Section 144 orders and reports to the Commissioner Karachi.")}${iconCard("bi-shield-shaded", "SSP District Central", "Heads the Sindh Police in the district: three police divisions, each under a Superintendent of Police, with SDPOs and station house officers (SHOs).")}${iconCard("bi-shield-check", "Sindh Rangers", "Support the police in maintaining peace, especially during sensitive events, and run the Madadgar helpline 1101.")}${iconCard("bi-people", "CPLC", "The Citizens-Police Liaison Committee helps citizens with reporting crime, vehicle theft and kidnapping cases, and keeps crime data.")}${iconCard("bi-camera-video", "Community policing", "Residents' associations run CCTV, guarded entry points and monitoring rooms that alert the local police station.")}${iconCard("bi-megaphone", "Peace committees", "Religious and community leaders meet with the administration and police before Muharram, Rabi-ul-Awwal and other occasions.")}</div>
  </div></section>
  <section class="section" id="police-stations"><div class="container">${sectionHead("Police Stations", "Police Stations in District Central", `All ${total} police stations of District Central, grouped by police division. Tap a number to call, or get directions.`)}
    <div class="law-ssp"><div><span class="section-kicker">District Police Office</span><h3>SSP District Central</h3><p>Senior Superintendent of Police, District Central, Karachi</p></div><div class="law-ssp-actions"><a class="btn btn-primary-gradient" href="tel:02199246162"><i class="bi bi-telephone"></i> 021-99246162</a><a class="btn btn-outline-primary" href="tel:02199246199"><i class="bi bi-telephone"></i> 021-99246199</a></div></div>
    <div class="nr-search law-search"><i class="bi bi-search"></i><input type="search" id="psSearch" placeholder="Find your police station" aria-label="Find your police station"></div>
    ${POLICE_DIVISIONS.map((d) => `<div class="law-div" data-aos="fade-up"><div class="law-div-head"><h3><i class="bi bi-diagram-3"></i> ${d.name}</h3><span>${d.sub} · SP office <a href="tel:${tel(d.sp)}">${d.sp}</a></span></div><div class="law-ps-grid">${d.stations.map(([n, p]) => `<article class="law-ps" data-name="${n.toLowerCase()}"><span class="law-ps-ico"><i class="bi bi-building-fill-lock"></i></span><div><h4>${n} Police Station</h4><a class="law-ps-tel" href="tel:${tel(p)}"><i class="bi bi-telephone-fill"></i> ${p}</a><a class="law-ps-map" href="https://www.google.com/maps/search/${encodeURIComponent(n + " Police Station Karachi")}" target="_blank" rel="noopener"><i class="bi bi-geo-alt"></i> Directions</a></div></article>`).join("")}</div></div>`).join("")}
    <p class="text-muted small mt-3"><i class="bi bi-info-circle"></i> Office numbers as published by the Karachi Police for District Central. If a number is busy, call <strong>15</strong>.</p>
  </div></section>
  <section class="section muted-section" id="gallery"><div class="container">${sectionHead("In the Field", "Working Together with the Police", "The District Administration and Sindh Police working together on the ground, from the Deputy Commissioner Central's official Facebook page.")}
    <div class="law-gallery">${LAW_PHOTOS.map(([f, c], i) => `<figure class="law-g g${i}"><img src="images/police/${f}.jpg" alt="${c}" loading="lazy"><figcaption>${c}</figcaption></figure>`).join("")}</div>
  </div></section>
  <section class="section"><div class="container"><div class="row g-4">
    <div class="col-lg-6"><article class="content-card h-100"><h3><i class="bi bi-journal-text"></i> Reporting a crime</h3><ul class="check-list"><li>In an emergency, call <strong>15</strong> and stay on the line.</li><li>To register an FIR, go to the police station of the area where the incident happened, with your CNIC.</li><li>For a stolen mobile phone, vehicle or CNIC, report it at the police station and to <strong>CPLC (1102)</strong>.</li><li>If a police station refuses to register your complaint, you can approach the SP of the division or the SSP office.</li></ul></article></div>
    <div class="col-lg-6"><article class="content-card h-100"><h3><i class="bi bi-laptop"></i> Sindh Police online</h3><ul class="check-list"><li>Character certificates, tenant and employee registration and other services are available from the <a href="https://www.sindhpolice.gov.pk" target="_blank" rel="noopener">Sindh Police website</a>.</li><li>Arms licence verification is handled by the District Administration: see <a href="arms-license.html">Arms Licence</a>.</li><li>Problems in your block, such as encroachments or illegal construction, can be reported through the <a href="complaint-registration.html">DC Office complaint form</a>.</li></ul></article></div>
  </div></div></section>
  <section class="section muted-section"><div class="container">${sectionHead("Help", "Frequently Asked Questions")}<div class="row justify-content-center"><div class="col-lg-9">${faq("lawFaq", [
    ["Which police station covers my area?", "Search for your area in the list above. If you are not sure, call 15 and the operator will connect you to the right station."],
    ["What is Section 144?", "Section 144 lets the District Administration temporarily ban activities that endanger public safety, such as pillion riding or gatherings during sensitive days. Orders are announced in advance."],
    ["How can my block start community policing?", "Form a residents' welfare association with the help of the DC Office. See the Residents' Associations page for how the Block 13 model works."],
    ["Who do I contact about a complaint against the police?", "Contact the SP of the police division or the SSP District Central office. You can also inform the DC Office through the complaint form."]])}</div></div></div></section>
  </main>${footer()}`;
}
function initLawPage() {
  const q = document.getElementById("psSearch"); if (!q) return;
  q.addEventListener("input", () => { const t = q.value.trim().toLowerCase(); document.querySelectorAll(".law-ps").forEach((c) => (c.hidden = t && !c.dataset.name.includes(t))); document.querySelectorAll(".law-div").forEach((d) => (d.hidden = ![...d.querySelectorAll(".law-ps")].some((c) => !c.hidden))); });
}
document.addEventListener("DOMContentLoaded", () => setTimeout(initLawPage, 0));

function sitemapPage() {
  const groups = [["Main", [["index.html", "Home"], ["about.html", "About District"], ["transport.html", "Transport"], ["law-order.html", "Law & Order"], ["deputy-commissioner.html", "Deputy Commissioner"], ["administrative-team.html", "Administrative Team"], ["news.html", "News & Events"], ["initiatives.html", "Initiatives"], ["contact.html", "Contact Us"], ["jurisdiction.html", "Government Jurisdiction"]]],
    ["Officers", [["adc-1.html", "ADC-I"], ["adc-2.html", "ADC-II"], ["ac-1.html", "AC Liaquatabad"], ["ac-2.html", "AC Gulberg"], ["ac-3.html", "AC Nazimabad"], ["ac-4.html", "AC North Nazimabad"], ["ac-5.html", "AC New Karachi"], ["ac-6.html", "AC Revenue"], ["mukhtiarkar-liaquatabad.html", "Mukhtiarkar Liaquatabad"], ["mukhtiarkar-gulberg.html", "Mukhtiarkar Gulberg"], ["mukhtiarkar-nazimabad.html", "Mukhtiarkar Nazimabad"], ["mukhtiarkar-north-nazimabad.html", "Mukhtiarkar North Nazimabad"], ["mukhtiarkar-new-karachi.html", "Mukhtiarkar New Karachi"], ["superintendent-revenue.html", "Superintendent (Revenue)"]]],
    ["Branches", [["branches.html", "All Branches"], ["revenue.html", "Revenue"], ["accounts-branch.html", "Accounts"], ["general-branch.html", "General"], ["judicial-branch.html", "Judicial"], ["establishment-branch.html", "Establishment"], ["domicile-branch.html", "Domicile / PRC"], ["arms-branch.html", "Arms"], ["pa-branch.html", "P.A. Branch"], ["benevolent-fund.html", "Benevolent Fund"], ["ri-branch.html", "R&I"], ["control-room.html", "Control Room"], ["it-cell.html", "IT Cell"], ["complaint-cell.html", "Complaint Cell"], ["public-relations.html", "Public Relations"]]],
    ["Citizen Services", [["citizen-services.html", "All Services"], ["domicile.html", "Domicile"], ["prc.html", "PRC"], ["noc.html", "NOC"], ["arms-license.html", "Arms Licence"], ["revenue-certificate.html", "Revenue Certificate"], ["land-revenue.html", "Land / Revenue"], ["complaint-registration.html", "Complaint Registration"], ["track-complaint.html", "Track Complaint"], ["price-list.html", "Price List"], ["public-assistance.html", "Public Assistance"]]],
    ["District Directory", [["union-committees.html", "Union Committees"], ["uc-new-karachi.html", "UCs New Karachi"], ["uc-north-nazimabad.html", "UCs North Nazimabad"], ["uc-gulberg.html", "UCs Gulberg"], ["uc-liaquatabad.html", "UCs Liaquatabad"], ["uc-nazimabad.html", "UCs Nazimabad"], ["sports.html", "Sports"], ["health.html", "Health"], ["academic-institutions.html", "Academic Institutions"], ["entertainment.html", "Entertainment"], ["libraries.html", "Libraries"], ["parks.html", "Parks"], ["emergency-safety.html", "Emergency & Safety"], ["monsoon.html", "Monsoon"], ["markets-commerce.html", "Markets & Commerce"], ["css-corner.html", "CSS Corner"], ["directory.html", "District Directory"], ["personalities.html", "Personalities"], ["blue-plaques.html", "Blue Plaques"], ["residents-associations.html", "Residents Associations"]]],
    ["Website", [["search.html", "Search"], ["privacy-policy.html", "Privacy Policy"], ["terms-of-use.html", "Terms of Use"], ["sitemap.html", "Sitemap"]]]];
  return `${header("sitemap")}<main>${hero("sitemap")}<section class="section"><div class="container"><div class="row g-4">${groups.map(([g, links]) => `<div class="col-md-6 col-lg-4"><article class="dept-card h-100 sitemap-card"><h3>${g}</h3><ul>${links.map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join("")}</ul></article></div>`).join("")}</div></div></section></main>${footer()}`;
}

function searchPage() {
  return `${header("search")}<main>${hero("search")}<section class="section"><div class="container"><form class="site-search-form" id="siteSearchForm" role="search"><input type="search" id="siteSearchInput" placeholder="Search services, officers, Union Committees, initiatives..." aria-label="Search the website"><button class="btn btn-primary-gradient" type="submit"><i class="bi bi-search"></i> Search</button></form><p class="text-muted mt-3" id="siteSearchSummary"></p><div id="siteSearchResults" class="search-results"></div></div></section></main>${footer()}`;
}

function runSiteSearch() {
  const input = document.getElementById("siteSearchInput");
  if (!input || !window.DC_SEARCH) return;
  const params = new URLSearchParams(location.search);
  input.value = params.get("q") || "";
  const render = () => {
    const q = input.value.trim().toLowerCase();
    const box = document.getElementById("siteSearchResults");
    const sum = document.getElementById("siteSearchSummary");
    if (!q) { box.innerHTML = ""; sum.textContent = "Type a word such as domicile, polio, Gulberg or UC to search the whole website."; return; }
    const words = q.split(/\s+/).filter(Boolean);
    const results = window.DC_SEARCH.map((p) => {
      const hay = (p.t + " " + p.h + " " + p.x).toLowerCase();
      if (!words.every((w) => hay.includes(w))) return null;
      let score = 0; words.forEach((w) => { if (p.t.toLowerCase().includes(w)) score += 10; if (p.h.toLowerCase().includes(w)) score += 4; score += Math.min(5, hay.split(w).length - 1); });
      const idx = p.x.toLowerCase().indexOf(words[0]);
      const snip = idx >= 0 ? (idx > 60 ? "…" : "") + p.x.slice(Math.max(0, idx - 60), idx + 160) + "…" : p.x.slice(0, 200) + "…";
      return { p, score, snip };
    }).filter(Boolean).sort((a, b) => b.score - a.score);
    sum.textContent = `${results.length} page${results.length === 1 ? "" : "s"} found for “${input.value.trim()}”`;
    const esc = (t) => t.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
    const mark = (t) => { let o = esc(t); words.forEach((w) => { o = o.replace(new RegExp("(" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi"), "<mark>$1</mark>"); }); return o; };
    box.innerHTML = results.map(({ p, snip }) => `<article class="search-result"><a href="${p.u}"><h3>${esc(p.t)}</h3></a><span class="search-url">${p.u}</span><p>${mark(snip)}</p></article>`).join("") || `<p>No pages found. Try a different word, or browse the <a href="sitemap.html">Sitemap</a>.</p>`;
  };
  document.getElementById("siteSearchForm").addEventListener("submit", (e) => { e.preventDefault(); history.replaceState(null, "", "?q=" + encodeURIComponent(input.value.trim())); render(); });
  render();
}

function linkCards(items) {
  return `<div class="row g-4">${items.map(([icon, title, text, url, label]) => `<div class="col-md-6 col-lg-4"><article class="dept-card h-100" data-aos="fade-up"><i class="bi ${icon}"></i><h3>${title}</h3><p>${text}</p>${url ? `<a class="btn btn-primary-gradient" href="${url}" target="_blank" rel="noopener">${label || "Visit Website"}</a>` : ""}</article></div>`).join("")}</div>`;
}

function orgLogo(o) {
  return o.logo ? `<span class="org-logo${o.logo === "artscouncil.png" ? " dark" : ""}"><img src="images/logos/${o.logo}" alt="${o.name} logo" loading="lazy"></span>` : `<span class="org-logo"><i class="bi ${o.icon || "bi-building"}"></i></span>`;
}

function orgCard(o) {
  const web = o.web ? `<a class="btn btn-primary-gradient btn-sm" href="${o.web}"${o.internal ? "" : ' target="_blank" rel="noopener"'}>${o.internal ? "View list" : "Visit official website"} <i class="bi bi-box-arrow-up-right"></i></a>` : "";
  return `<div class="col-md-6 col-xl-4"><article class="org-card h-100" data-aos="fade-up">${orgLogo(o)}<h3>${o.name}</h3><p>${o.text}</p><ul class="org-contact">${o.phones.map(([l, n]) => `<li><i class="bi bi-telephone"></i><span>${l}:</span> <a href="tel:${n.replace(/[^0-9+]/g, "")}">${n}</a></li>`).join("")}${o.timing ? `<li><i class="bi bi-clock"></i><span>Timings:</span> ${o.timing}</li>` : ""}${o.email ? `<li><i class="bi bi-envelope"></i><span>Email:</span> <a href="mailto:${o.email}">${o.email}</a></li>` : ""}${o.web && !o.internal ? `<li><i class="bi bi-globe"></i><span>Website:</span> <a href="${o.web}" target="_blank" rel="noopener">${o.web.replace(/^https?:\/\//, "").replace(/\/$/, "")}</a></li>` : ""}</ul>${web}</article></div>`;
}

function jurisdictionPage() {
  const J = window.DC_DIR.jurisdiction;
  return `${header("jurisdiction")}<main>${hero("jurisdiction")}
    <section class="section"><div class="container">${sectionHead("Overview", "Who Does What?", "Public services in District Central are delivered by three tiers of government. The Federal Government handles national matters such as identity cards, passports, taxes and elections. The Government of Sindh runs the police, rescue services, health, education and provincial taxes. Local government – the Karachi Metropolitan Corporation, the five Town Municipal Corporations and 45 Union Committees – looks after roads, water, sanitation and neighbourhood services. Use the directory below to reach the right office directly.")}</div></section>
    <section class="section muted-section" id="jurisdiction-tabs"><div class="container">
      <ul class="nav nav-tabs juris-tabs justify-content-center" role="tablist"><li class="nav-item" role="presentation"><button class="nav-link active" id="tab-federal" data-bs-toggle="tab" data-bs-target="#federal" type="button" role="tab" aria-controls="federal" aria-selected="true"><i class="bi bi-flag"></i> Federal</button></li><li class="nav-item" role="presentation"><button class="nav-link" id="tab-provincial" data-bs-toggle="tab" data-bs-target="#provincial" type="button" role="tab" aria-controls="provincial" aria-selected="false"><i class="bi bi-bank2"></i> Provincial</button></li><li class="nav-item" role="presentation"><button class="nav-link" id="tab-local" data-bs-toggle="tab" data-bs-target="#local" type="button" role="tab" aria-controls="local" aria-selected="false"><i class="bi bi-buildings"></i> Local</button></li><li class="nav-item" role="presentation"><button class="nav-link" id="tab-union-committees" data-bs-toggle="tab" data-bs-target="#union-committees" type="button" role="tab" aria-controls="union-committees" aria-selected="false"><i class="bi bi-people"></i> Union Committees</button></li></ul>
      <div class="tab-content pt-4">
        <div class="tab-pane fade show active" id="federal" role="tabpanel" aria-labelledby="tab-federal">${sectionHead("Federal", "Federal Government Services", "Federal Government departments serving residents of District Central. Helplines, timings and email addresses are taken from each department\u2019s official channels \u2013 please check their website for the latest information.")}<div class="row g-4">${J.federal.map(orgCard).join("")}</div></div>
        <div class="tab-pane fade" id="provincial" role="tabpanel" aria-labelledby="tab-provincial">${sectionHead("Provincial", "Government of Sindh Services", "Government of Sindh departments and emergency services for the people of District Central.")}<div class="row g-4">${J.provincial.map(orgCard).join("")}</div></div>
        <div class="tab-pane fade" id="local" role="tabpanel" aria-labelledby="tab-local">${sectionHead("Local", "Local Government and Utilities", "Municipal bodies and utility companies responsible for everyday services in your neighbourhood.")}<div class="row g-4">${J.local.map(orgCard).join("")}</div></div>
        <div class="tab-pane fade" id="union-committees" role="tabpanel" aria-labelledby="tab-union-committees">${sectionHead("Union Committees", `${window.DC_DIR.towns.reduce((a, t) => a + t.ucs.length, 0)} Union Committees of District Central`, "Union Committees are the closest tier of elected local government. Each UC has an elected Chairman and Vice Chairman and is your first point of contact for the residence certificate needed for Domicile and PRC, civil registration and neighbourhood issues. Select a town below.")}
          <ul class="nav nav-pills uc-pills justify-content-center mb-4" role="tablist">${window.DC_DIR.towns.map((t, n) => `<li class="nav-item" role="presentation"><button class="nav-link${n ? "" : " active"}" data-bs-toggle="pill" data-bs-target="#ucp-${t.slug}" type="button" role="tab">${t.name} (${t.ucs.length})</button></li>`).join("")}</ul>
          <div class="tab-content">${window.DC_DIR.towns.map((t, n) => `<div class="tab-pane fade${n ? "" : " show active"}" id="ucp-${t.slug}" role="tabpanel">${ucTable(t)}<p class="text-center mt-3"><a class="btn btn-primary-gradient" href="uc-${t.slug}.html">Open the ${t.name} page</a> <a class="btn btn-outline-primary" href="${t.ac}.html">Assistant Commissioner ${t.name}</a></p></div>`).join("")}</div>
        </div>
      </div>
    </div></section>
    <section class="complaint-cta"><div class="container"><div class="cta-panel"><div><span class="section-kicker">Need Help?</span><h2>Not Sure Which Office to Contact?</h2><p>Register your complaint with the District Administration Central and we will forward it to the department concerned.</p></div><div class="cta-actions"><a class="btn btn-primary-gradient" href="complaint-registration.html">Submit a Complaint</a><a class="btn btn-outline-light" href="contact.html">Contact Us</a></div></div></div></section>
  </main>${footer()}`;
}

function ucTable(t) {
  return `<div class="table-responsive"><table class="table press-table uc-table"><thead><tr><th>UC No.</th><th>Union Committee</th><th>Chairman</th><th>Vice Chairman</th><th>Office / Location</th></tr></thead><tbody>${t.ucs.map(([n, name, loc, ch, vc]) => `<tr><td>${n}</td><td><strong>${name}</strong></td><td>${ch || "—"}</td><td>${vc || "—"}</td><td>${loc || "—"}</td></tr>`).join("")}</tbody></table></div>`;
}

function ucPage() {
  const D = window.DC_DIR; const total = D.towns.reduce((a, t) => a + t.ucs.length, 0);
  const roles = [["bi-file-earmark-check", "Residence certificates", "The UC issues the residence certificate needed for Domicile and PRC applications."], ["bi-person-vcard", "Civil registration", "Registration of births, deaths, marriages and divorces through the Sindh civil registration system."], ["bi-lightbulb", "Neighbourhood services", "Street lights, small roads, drains and parks are raised with the Town Municipal Corporation through the UC."], ["bi-heart-pulse", "Polio and health campaigns", "UC teams lead door-to-door polio vaccination, with morning assemblies attended by the Assistant Commissioners."], ["bi-people", "Community link", "Elected UC representatives work with Residents Welfare Associations, the police and the District Administration."], ["bi-chat-square-text", "Local complaints", "Residents can raise sanitation, water and encroachment issues with their UC Chairman."]];
  return `${header("ucs")}<main>${hero("ucs")}
    <section class="section"><div class="container">${sectionHead("Local Government", "Your Union Committee", `Union Committees are the closest tier of elected local government. District Central has ${total} Union Committees in five Town Municipal Corporations. Each UC has an elected Chairman and Vice Chairman and is your first point of contact for local civic matters and the residence certificate needed for Domicile and PRC.`)}${stats([[total, "Union Committees"], [5, "Town Municipal Corporations"], [5, "Sub-divisions"], [3820000, "Population (Census 2023)", "3.82 million"]])}</div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Role", "What Does a Union Committee Do?")}<div class="card-grid">${roles.map(([i, t, x]) => iconCard(i, t, x)).join("")}</div></div></section>
    <section class="section"><div class="container">${sectionHead("Towns", "Union Committees by Town", "Select a town to see its Union Committees, elected representatives and office locations.")}<div class="row g-4">${D.towns.map((t) => `<div class="col-md-6 col-lg-4"><a class="text-decoration-none" href="uc-${t.slug}.html"><article class="dept-card h-100 uc-town-card" data-aos="fade-up"><i class="bi bi-geo-alt"></i><h3>TMC ${t.name}</h3><p><strong>${t.ucs.length} Union Committees</strong></p><p>${t.ucs.map((u) => u[1]).join(", ")}</p><span class="btn btn-outline-primary btn-sm">View UCs</span></article></a></div>`).join("")}</div></div></section>
    ${D.towns.map((t, n) => `<section class="section ${n % 2 ? "" : "muted-section"}" id="${t.slug}"><div class="container">${sectionHead(`TMC ${t.name}`, `${t.name} – ${t.ucs.length} Union Committees`)}${ucTable(t)}<p class="text-center mt-3"><a class="btn btn-primary-gradient" href="uc-${t.slug}.html">Open the ${t.name} page</a></p></div></section>`).join("")}
  </main>${footer()}`;
}

function ucTownPage(slug) {
  const D = window.DC_DIR; const t = D.towns.find((x) => x.slug === slug);
  pageInfo["uc-" + slug] = { title: `Union Committees – ${t.name}`, subtitle: `The ${t.ucs.length} Union Committees of TMC ${t.name}, District Central.`, breadcrumb: `UCs ${t.name}`, badge: "Local Government" };
  const others = D.towns.filter((x) => x.slug !== slug);
  return `${header("ucs")}<main>${hero("uc-" + slug)}
    <section class="section"><div class="container">${sectionHead(`TMC ${t.name}`, `${t.ucs.length} Union Committees in ${t.name}`, `The Town Municipal Corporation ${t.name} is divided into ${t.ucs.length} Union Committees. Each UC is led by an elected Chairman and Vice Chairman. Contact your UC for residence certificates, civil registration and neighbourhood issues, or the Assistant Commissioner’s office for administrative matters in the subdivision.`)}<div class="row g-4">${t.ucs.map(([n, name, loc, ch, vc]) => `<div class="col-md-6 col-lg-4"><article class="dept-card h-100 uc-card" data-aos="fade-up"><span class="uc-no">UC ${n}</span><h3>${name}</h3><ul class="org-contact">${ch ? `<li><i class="bi bi-person-badge"></i><span>Chairman:</span> ${ch}</li>` : ""}${vc ? `<li><i class="bi bi-person"></i><span>Vice Chairman:</span> ${vc}</li>` : ""}${loc ? `<li><i class="bi bi-geo-alt"></i><span>Office:</span> ${loc}</li>` : ""}</ul></article></div>`).join("")}</div></div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Table", `All UCs of ${t.name}`)}${ucTable(t)}</div></section>
    <section class="section"><div class="container">${sectionHead("Administration", "Your Subdivision Officers")}<div class="quick-links justify-content-center"><a class="btn btn-primary-gradient" href="${t.ac}.html">Assistant Commissioner ${t.name}</a><a class="btn btn-outline-primary" href="${t.mukhtiarkar}.html">Mukhtiarkar ${t.name}</a><a class="btn btn-outline-primary" href="union-committees.html">All Union Committees</a></div><p class="text-center mt-4">Other towns: ${others.map((x) => `<a href="uc-${x.slug}.html">${x.name}</a>`).join(" · ")}</p></div></section>
  </main>${footer()}`;
}

const DIR_PAGES = [["css", "css-corner.html", "CSS Corner", "bi-star-fill"], ["education", "academic-institutions.html", "Academic Institutions", "bi-mortarboard"], ["libraries", "libraries.html", "Libraries", "bi-book"], ["health", "health.html", "Hospitals & Health", "bi-hospital"], ["sports", "sports.html", "Sports", "bi-trophy"], ["parks", "parks.html", "Parks", "bi-tree"], ["entertainment", "entertainment.html", "Entertainment & Shopping", "bi-bag"], ["emergency", "emergency-safety.html", "Emergency & Safety", "bi-shield-plus"], ["monsoon", "monsoon.html", "Monsoon", "bi-cloud-rain-heavy"], ["markets", "markets-commerce.html", "Markets & Commerce", "bi-shop"]];

function dirLogo(o) {
  if (o.logo) return `<span class="org-logo${o.logo === "artscouncil.png" ? " dark" : ""}"><img src="images/logos/${o.logo}" alt="${o.name} logo" loading="lazy"></span>`;
  const words = String(o.name || "").replace(/\(.*?\)/g, "").replace(/^(Dr\.?|The)\s+/i, "").split(/[\s,&\-–]+/).filter((w) => w && !/^(and|of|the|for|&)$/i.test(w));
  const ini = (words.length > 1 ? words[0][0] + words[1][0] : (words[0] || "?").slice(0, 2)).toUpperCase();
  const pal = ["#0b5d3b", "#1d4ed8", "#7c3aed", "#be185d", "#c2410c", "#0f766e", "#b45309", "#334155"];
  const c = pal[[...String(o.name)].reduce((a, ch) => a + ch.charCodeAt(0), 0) % pal.length];
  return `<span class="org-logo org-mono" style="--mono:${c}" aria-hidden="true"><b>${ini}<i class="bi ${o.icon || "bi-building"}"></i></b></span>`;
}

function dirCard(o) {
  const ext = o.web && /^https?:/.test(o.web);
  const sec = o.sector === "Government" ? "govt" : "private";
  const tel = (n) => `<a href="tel:${n.replace(/[^0-9+]/g, "")}">${n}</a>`;
  return `<div class="col-md-6 col-xl-4 dir-item" data-sector="${sec}"><article class="org-card h-100">${dirLogo(o)}<span class="dir-badge ${sec}">${o.sector}</span><h3>${o.name}</h3><p class="org-area"><i class="bi bi-geo-alt"></i> ${o.area}</p><p>${o.text}</p><ul class="org-contact">${o.phone ? `<li><i class="bi bi-telephone"></i><span>Phone:</span> ${tel(o.phone)}</li>` : ""}${o.address ? `<li><i class="bi bi-pin-map"></i><span>Address:</span> ${o.address}</li>` : ""}${o.timing ? `<li><i class="bi bi-clock"></i><span>Timings:</span> ${o.timing}</li>` : ""}${ext ? `<li><i class="bi bi-globe"></i><span>Website:</span> <a href="${o.web}" target="_blank" rel="noopener">${o.web.replace(/^https?:\/\//, "").replace(/\/$/, "")}</a></li>` : ""}</ul>${o.web ? `<a class="btn btn-primary-gradient btn-sm" href="${o.web}"${ext ? ' target="_blank" rel="noopener"' : ""}>${ext ? "Visit website" : "Find out more"} <i class="bi bi-${ext ? "box-arrow-up-right" : "arrow-right"}"></i></a>` : ""}</article></div>`;
}

const FIRE_GUIDE = `<section class="section muted-section" id="fire-safety"><div class="container">${sectionHead("Fire Safety Guide", "Know Your Fire Extinguisher", "Every shop, office and building should keep the right extinguisher where people can reach it, check it regularly and train staff to use it. After Paposh Market was sealed in October 2026 for not meeting fire safety rules, the District Administration is checking markets across the district.")}<div class="card-grid">${[["bi-droplet", "Water (red label)", "For paper, wood, cloth and plastic (Class A). Never use on electrical, oil or gas fires."], ["bi-cloud", "Foam (cream label)", "For Class A fires and burning liquids such as petrol and paint (Class B). Not for electrical fires."], ["bi-wind", "Dry powder ABC (blue label)", "Multi-purpose: solids, liquids, gas and electrical fires. The most common choice for shops and homes."], ["bi-snow", "CO2 (black label)", "For electrical equipment and burning liquids. Leaves no residue, so best for offices and server rooms."], ["bi-fire", "Wet chemical (yellow label)", "For cooking oil and fat fires in kitchens and restaurants (Class F)."], ["bi-hand-index", "How to use it: PASS", "Pull the pin. Aim at the base of the fire. Squeeze the handle. Sweep from side to side. Keep your back to an exit."]].map(([i, t, x]) => iconCard(i, t, x)).join("")}</div>
<div class="row g-4 mt-2"><div class="col-lg-6"><article class="content-card h-100"><h3>Checklist for Shops and Buildings</h3><ul class="check-list"><li>A working extinguisher on every floor, checked and refilled on time</li><li>Exits and stairways kept clear, never locked during working hours</li><li>No illegal electrical connections or overloaded sockets</li><li>No storage of petrol, gas cylinders or chemicals in stairways or basements</li><li>Smoke detectors and a fire alarm in larger buildings</li><li>Staff trained in using extinguishers and evacuating customers</li></ul></article></div><div class="col-lg-6"><article class="content-card h-100"><h3>If There Is a Fire</h3><ul class="check-list"><li>Raise the alarm and get everyone out first</li><li>Call Rescue 1122 or the Fire Brigade on 16</li><li>Switch off the electricity and gas only if it is safe to do so</li><li>Fight a fire only if it is small and you have a clear way out</li><li>Stay low under smoke and never use the lift</li><li>Do not go back inside until the fire service says it is safe</li></ul><p class="mt-3 mb-0">Rescue 1122 holds regular fire safety training for traders, including weekly sessions at Hyderi Market.</p></article></div></div></div></section>`;

const RAIN_GUIDE = `<section class="section muted-section" id="rain-safety"><div class="container">${sectionHead("Stay Safe", "Monsoon Safety Guide", "Heavy rain in Karachi brings flooding, electrocution and building collapses. These simple steps save lives.")}<div class="row g-4"><div class="col-lg-4"><article class="content-card h-100"><h3>Before the Rain</h3><ul class="check-list"><li>Follow PMD and PDMA warnings</li><li>Clear drains and gutters around your home and shop</li><li>Keep a torch, phone charger and medicines ready</li><li>Move valuables and documents above floor level</li><li>Report choked drains to the Union Committee or the DC Office</li></ul></article></div><div class="col-lg-4"><article class="content-card h-100"><h3>During the Rain</h3><ul class="check-list"><li>Stay away from electric poles, wires and transformers</li><li>Never walk or drive through flooded underpasses</li><li>Keep children away from nullahs and open manholes</li><li>Leave old or cracked buildings if water is seeping in</li><li>Call 1122 in any emergency</li></ul></article></div><div class="col-lg-4"><article class="content-card h-100"><h3>After the Rain</h3><ul class="check-list"><li>Do not touch wet electrical appliances until checked</li><li>Boil drinking water, as supply may be contaminated</li><li>Watch for mosquito breeding: dengue and malaria rise after rain</li><li>Report fallen wires to K-Electric on 118</li><li>Report sewage overflow to the Water Corporation on 1334</li></ul></article></div></div></div></section>`;

function directoryPage(key) {
  const d = (window.DC_DIRECTORY || {})[key] || window.DC_DIR.directory[key];
  if (!d.items.length || Array.isArray(d.items[0])) return oldDirectoryPage(key);
  const groups = [...new Set(d.items.map((o) => o.type))];
  const slug = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const hasBoth = d.items.some((o) => o.sector === "Government") && d.items.some((o) => o.sector !== "Government");
  const photoCat = { sports: "sports", education: "education", parks: "green", emergency: "fire" }[key];
  return `${header(key)}<main>${hero(key)}
    <section class="section"><div class="container">${sectionHead("Directory", d.title, d.intro)}
      <div class="dir-toolbar"><div class="quick-links">${groups.map((g) => `<a class="btn btn-outline-primary btn-sm" href="#${slug(g)}">${g}</a>`).join("")}</div>${hasBoth ? `<div class="btn-group dir-filter" role="group" aria-label="Filter by type"><button class="btn btn-sm active" data-filter="all">All</button><button class="btn btn-sm" data-filter="govt">Government</button><button class="btn btn-sm" data-filter="private">Private &amp; Trust</button></div>` : ""}</div>
      ${groups.map((g) => `<div class="dir-group" id="${slug(g)}"><h3 class="dir-group-title">${g}</h3><div class="row g-4">${d.items.filter((o) => o.type === g).map(dirCard).join("")}</div></div>`).join("")}
      <p class="text-center text-muted mt-4">Details are taken from official websites and public sources. Know a place that should be listed, or a detail that has changed? Tell us through the <a href="contact.html">Contact page</a>.</p></div></section>
    ${key === "emergency" ? FIRE_GUIDE : ""}${key === "monsoon" ? RAIN_GUIDE : ""}
    ${photoCat && window.DC_WORK ? `<section class="section ${key === "emergency" || key === "monsoon" ? "" : "muted-section"}"><div class="container">${sectionHead("Photos", "From District Central")}${window.DC_WORK.photoGrid(photoCat, 8)}</div></section>` : ""}
    <section class="section"><div class="container">${sectionHead("More", "Other Directories")}<div class="quick-links justify-content-center">${DIR_PAGES.filter(([k]) => k !== key).map(([, h, t]) => `<a class="btn btn-outline-primary" href="${h}">${t}</a>`).join("")}<a class="btn btn-outline-primary" href="personalities.html">Personalities</a><a class="btn btn-outline-primary" href="union-committees.html">Union Committees</a></div></div></section>
  </main>${footer()}`;
}

function directoryHubPage() {
  const D = window.DC_DIRECTORY || {};
  return `${header("directory")}<main>${hero("directory")}
    <section class="section"><div class="container"><a class="text-decoration-none" href="css-corner.html"><article class="feature-card" data-aos="fade-up"><div class="css-hero-badge"><img class="css-logo-img" src="images/logos/css-corner.png" alt="CSS Corner logo"><span>Free · Merit-based</span></div><div><span class="section-kicker">Flagship Initiative</span><h2>CSS Corner</h2><p>Free preparation for the Central Superior Services examination, founded by Deputy Commissioner Taha Saleem. Classes are taught by serving and former CSS officers and subject experts, with admission purely on merit.</p><span class="btn btn-primary-gradient">Find out more</span></div></article></a>
    <div class="row g-4 mt-2">${DIR_PAGES.slice(1).map(([k, h, t, i]) => `<div class="col-md-6 col-lg-4"><a class="text-decoration-none" href="${h}"><article class="dept-card h-100" data-aos="fade-up"><i class="bi ${i}"></i><h3>${t}</h3><p>${(D[k] || {}).intro || ""}</p><span class="btn btn-outline-primary btn-sm">${(D[k] || { items: [] }).items.length} listings</span></article></a></div>`).join("")}
    <div class="col-md-6 col-lg-4"><a class="text-decoration-none" href="union-committees.html"><article class="dept-card h-100"><i class="bi bi-diagram-3"></i><h3>Union Committees</h3><p>All 45 Union Committees with chairmen and vice chairmen.</p></article></a></div><div class="col-md-6 col-lg-4"><a class="text-decoration-none" href="personalities.html"><article class="dept-card h-100"><i class="bi bi-person-badge"></i><h3>Personalities</h3><p>People from District Central who made Pakistan proud.</p></article></a></div></div></div></section>
  </main>${footer()}`;
}

function cssCornerPage() {
  const facts = [["bi-cash-coin", "Completely Free", "No fee is charged. Private academies charge Rs150,000 to Rs200,000 for similar courses."], ["bi-award", "Admission on Merit", "Seats are given purely on merit, so talent and hard work count, not the ability to pay."], ["bi-people", "Taught by Officers", "Around 100 volunteer teachers, including serving and retired CSS officers, federal and provincial secretaries, professors and subject experts."], ["bi-trophy", "Proven Results", "Fourteen candidates from the first year alone passed the CSS examination and joined the civil service."]];
  const branches = [["Ayesha Manzil (District Central)", "Al-Markaz-e-Islami, Ayesha Manzil, F.B. Area", "Serves Nazimabad, North Nazimabad, F.B. Area, Buffer Zone, Liaquatabad and nearby areas. Opened in November 2020."], ["Frere Hall", "Frere Hall Library, Saddar", "The first CSS Corner, opened in October 2020."], ["Korangi", "Model Library, Korangi No. 5", "The third branch, serving the east of the city."]];
  return `${header("css")}<main>${hero("css")}
    <section class="section"><div class="container"><div class="row g-4 align-items-center"><div class="col-lg-7" data-aos="fade-right"><span class="section-kicker">About</span><h2>Opening the Civil Service to Every Talented Young Person</h2><p>CSS Corner was founded by Taha Saleem (PAS), now Deputy Commissioner District Central, to make preparation for the Central Superior Services examination free and open to all. Many capable young people, especially women and students from low and middle-income families, could not afford private academies. CSS Corner gives them the same preparation at no cost.</p><p>It has been offering free courses since December 2019. Classes run in rooms attached to public libraries, and each new batch is announced on CSS Corner's social media pages.</p><div class="hero-buttons"><a class="btn btn-primary-gradient" href="https://x.com/CSSCorner" target="_blank" rel="noopener"><i class="bi bi-twitter-x"></i> Follow @CSSCorner</a><a class="btn btn-outline-primary" href="https://www.facebook.com/deputycommissionerCentral" target="_blank" rel="noopener"><i class="bi bi-facebook"></i> DC Central on Facebook</a></div></div><div class="col-lg-5"><div class="css-hero-badge big"><img class="css-logo-img" src="images/logos/css-corner.png" alt="CSS Corner logo"><strong>CSS Corner</strong><span>Free CSS preparation since 2019</span></div></div></div></div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Why CSS Corner", "What Makes It Different")}<div class="card-grid">${facts.map(([i, t, x]) => iconCard(i, t, x)).join("")}</div></div></section>
    <section class="section"><div class="container">${sectionHead("Branches", "Three CSS Corners in Karachi")}<div class="row g-4">${branches.map(([n, a, x], k) => `<div class="col-md-4"><article class="org-card h-100"><span class="org-logo"><i class="bi bi-geo-alt-fill"></i></span>${k === 0 ? `<span class="dir-badge govt">District Central</span>` : ""}<h3>${n}</h3><p class="org-area"><i class="bi bi-pin-map"></i> ${a}</p><p>${x}</p></article></div>`).join("")}</div></div></section>
    <section class="section muted-section"><div class="container">${sectionHead("How to Join", "Admission")}<div class="row justify-content-center"><div class="col-lg-8"><ul class="check-list"><li>Follow CSS Corner on social media for the announcement of each new batch</li><li>Apply within the given dates and appear for the merit-based selection</li><li>Selected candidates attend a four-month course of lectures, tests and essay practice</li><li>Courses are free; you only need commitment and regular attendance</li></ul></div></div></div></section>
    <section class="section" id="libraries"><div class="container">${sectionHead("Also by the DC", "Reading and Green Spaces", "Taha Saleem's other initiatives for young people and families in District Central.")}<div class="row g-4"><div class="col-md-6"><article class="content-card h-100"><h3><i class="bi bi-book"></i> Libraries Open Round the Clock</h3><p>The District Administration refurbished Naseerabad Public Library in Block 14, F.B. Area, as a 24-hour library, and began refurbishing all libraries in the district so that students can walk in to study at any time.</p><a class="btn btn-outline-primary btn-sm" href="libraries.html">See all libraries</a></article></div><div class="col-md-6"><article class="content-card h-100"><h3><i class="bi bi-tree"></i> 100 Parks Project</h3><p>As Administrator of the District Municipal Corporation Central in 2022, Taha Saleem launched a project to restore 100 neglected parks with community and private partners. Twenty-eight were reopened within months, including Parda Park, Umme Kulsoom Park and Khawaja Gharib Nawaz Park.</p><a class="btn btn-outline-primary btn-sm" href="parks.html">See all parks</a></article></div></div></div></section>
  </main>${footer()}`;
}

function oldDirectoryPage(key) {
  const d = window.DC_DIR.directory[key];
  const card = ([logo, icon, name, area, text, web]) => `<div class="col-md-6 col-xl-4"><article class="org-card h-100">${orgLogo({ logo, icon, name })}<h3>${name}</h3><p class="org-area"><i class="bi bi-geo-alt"></i> ${area}</p><p>${text}</p>${web ? `<a class="btn btn-primary-gradient btn-sm" href="${web}" target="_blank" rel="noopener">Visit website</a>` : ""}</article></div>`;
  return `${header(key)}<main>${hero(key)}<section class="section"><div class="container">${sectionHead("Directory", d.title, d.intro)}<div class="row g-4">${d.items.map(card).join("")}</div></div></section></main>${footer()}`;
}

function initDirFilters() {
  document.querySelectorAll(".dir-filter").forEach((bar) => bar.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-filter]"); if (!b) return;
    bar.querySelectorAll("button").forEach((x) => x.classList.toggle("active", x === b));
    const f = b.dataset.filter;
    document.querySelectorAll(".dir-item").forEach((el) => { el.style.display = f === "all" || el.dataset.sector === f ? "" : "none"; });
    document.querySelectorAll(".dir-group").forEach((g) => { g.style.display = [...g.querySelectorAll(".dir-item")].some((el) => el.style.display !== "none") ? "" : "none"; });
  }));
}

function personalitiesPage() {
  const P = window.DC_DIR.personalities;
  return `${header("personalities")}<main>${hero("personalities")}
    <section class="section"><div class="container">${sectionHead("Our Legends", "People Who Made District Central Proud", "District Central has been home to artists, poets, sportspeople and public figures who brought pride to Pakistan. Many are now honoured with blue plaques at the homes where they lived.")}<div class="row g-4">${P.map(([name, years, field, text, photo]) => `<div class="col-md-6 col-lg-4"><article class="dept-card h-100 person-card" data-aos="fade-up">${photo ? `<img class="plaque-photo" src="images/gallery/${photo}" alt="${name}" loading="lazy">` : `<i class="bi bi-person-circle"></i>`}<span class="section-kicker">${field}</span><h3>${name}</h3>${years ? `<p class="fw-bold mb-1">${years}</p>` : ""}<p>${text}</p></article></div>`).join("")}</div></div></section>
    <section class="complaint-cta"><div class="container"><div class="cta-panel"><div><span class="section-kicker">Suggest a Name</span><h2>Do You Know a Notable Resident?</h2><p>Share details of people from District Central who made significant contributions in sports, arts, music, education, science and public service. Call 021-99260038.</p></div><div class="cta-actions"><a class="btn btn-primary-gradient" href="blue-plaques.html">Blue Plaques</a><a class="btn btn-outline-light" href="tel:02199260038">021-99260038</a></div></div></div></section>
  </main>${footer()}`;
}

const PLAQUE_CATS = {
  artists: { label: "Artists & Painters", icon: "bi-palette-fill", color: "#7c3aed" },
  poets: { label: "Poets & Writers", icon: "bi-feather", color: "#0f766e" },
  music: { label: "Musicians & Qawwals", icon: "bi-music-note-beamed", color: "#c2410c" },
  sports: { label: "Sportspeople", icon: "bi-trophy-fill", color: "#1d4ed8" },
  entertainers: { label: "Entertainers", icon: "bi-mic-fill", color: "#be185d" }
};
// Area-level positions only (no house addresses), offset slightly so markers in the same block do not overlap.
const PLAQUE_POINTS = [
  { name: "Sadequain", cat: "artists", area: "Block 13, Federal B Area (Gulberg)", ll: [24.9262, 67.0728], photo: "plaques-05" },
  { name: "Asad Shafiq", cat: "sports", area: "Block 13, Federal B Area (Gulberg)", ll: [24.9250, 67.0742] },
  { name: "Syed Abbas Haider Bilgrami", cat: "sports", area: "Block 13, Federal B Area (Gulberg)", ll: [24.9243, 67.0722] },
  { name: "Amjad Sabri", cat: "music", area: "Liaquatabad", ll: [24.9078, 67.0440], photo: "plaques-07" },
  { name: "Umar Sharif", cat: "entertainers", area: "Liaquatabad", ll: [24.9062, 67.0462], photo: "plaques-08" },
  { name: "Umeed Fazli", cat: "poets", area: "District Central", ll: null, photo: "plaques-10" }
];
function plaqueMap() {
  const W = window.DC_WORK, info = Object.fromEntries((W.plaques || []).map((p) => [p[0], p]));
  const counts = Object.fromEntries(Object.keys(PLAQUE_CATS).map((k) => [k, PLAQUE_POINTS.filter((p) => p.cat === k).length]));
  const chips = `<div class="pm-chips" role="group" aria-label="Filter plaques by category"><button class="pm-chip on" data-cat="all"><i class="bi bi-grid-fill"></i> All <b>${PLAQUE_POINTS.length}</b></button>${Object.entries(PLAQUE_CATS).map(([k, c]) => `<button class="pm-chip" data-cat="${k}" style="--c:${c.color}"><i class="bi ${c.icon}"></i> ${c.label} <b>${counts[k]}</b></button>`).join("")}</div>`;
  const list = `<div class="pm-list">${Object.entries(PLAQUE_CATS).map(([k, c]) => `<div class="pm-group" data-cat="${k}"><h4 style="--c:${c.color}"><i class="bi ${c.icon}"></i> ${c.label}</h4>${PLAQUE_POINTS.filter((p) => p.cat === k).map((p) => { const d = info[p.name] || []; return `<button class="pm-item" data-name="${p.name}" ${p.ll ? "" : "disabled"} style="--c:${c.color}"><span class="pm-dot"></span><span><strong>${p.name}</strong><small>${d[2] || ""}${d[1] ? " · " + d[1] : ""}</small><small class="pm-area"><i class="bi bi-geo-alt"></i> ${p.ll ? p.area : "Shown on the map once the plaque location is confirmed"}</small></span></button>`; }).join("")}</div>`).join("")}</div>`;
  return `${chips}<div class="row g-4"><div class="col-lg-8"><div id="plaqueLeaflet" class="pm-map" aria-label="Map of blue plaques in District Central"></div><p class="small text-muted mt-2 mb-0">Markers show the neighbourhood of each plaque, not exact house addresses.</p></div><div class="col-lg-4">${list}</div></div>`;
}
function initPlaqueMap() {
  const el = document.getElementById("plaqueLeaflet"); if (!el || !window.L) return;
  const W = window.DC_WORK, info = Object.fromEntries((W.plaques || []).map((p) => [p[0], p]));
  const map = L.map(el, { scrollWheelZoom: false }).setView([24.918, 67.06], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 18, attribution: "&copy; OpenStreetMap contributors" }).addTo(map);
  const markers = {};
  PLAQUE_POINTS.filter((p) => p.ll).forEach((p) => {
    const c = PLAQUE_CATS[p.cat], d = info[p.name] || [];
    const icon = L.divIcon({ className: "pm-pin", html: `<span style="background:${c.color}"><i class="bi ${c.icon}"></i></span>`, iconSize: [36, 36], iconAnchor: [18, 36], popupAnchor: [0, -32] });
    markers[p.name] = { cat: p.cat, m: L.marker(p.ll, { icon, title: p.name }).bindPopup(`<div class="pm-pop">${p.photo ? `<img src="images/gallery/${p.photo}.jpg" alt="Blue plaque for ${p.name}">` : ""}<span style="color:${c.color}"><i class="bi ${c.icon}"></i> ${c.label}</span><strong>${p.name}</strong><em>${d[2] || ""}${d[1] ? " · " + d[1] : ""}</em><small><i class="bi bi-geo-alt"></i> ${p.area}</small></div>`).addTo(map) };
  });
  const all = Object.values(markers).map((x) => x.m);
  const fit = (ms) => ms.length && map.fitBounds(L.featureGroup(ms).getBounds().pad(0.35), { maxZoom: 15 });
  fit(all);
  document.querySelectorAll(".pm-chip").forEach((b) => b.addEventListener("click", () => {
    document.querySelectorAll(".pm-chip").forEach((x) => x.classList.toggle("on", x === b));
    const cat = b.dataset.cat, shown = [];
    Object.values(markers).forEach((x) => { const on = cat === "all" || x.cat === cat; if (on) { x.m.addTo(map); shown.push(x.m); } else x.m.remove(); });
    document.querySelectorAll(".pm-group").forEach((g) => (g.hidden = !(cat === "all" || g.dataset.cat === cat)));
    map.closePopup(); fit(shown);
  }));
  document.querySelectorAll(".pm-item:not([disabled])").forEach((b) => b.addEventListener("click", () => { const x = markers[b.dataset.name]; if (!x) return; if (!map.hasLayer(x.m)) x.m.addTo(map); map.setView(x.m.getLatLng(), 16); x.m.openPopup(); el.scrollIntoView({ behavior: "smooth", block: "center" }); }));
}
document.addEventListener("DOMContentLoaded", () => setTimeout(initPlaqueMap, 0));


function contactPage() {
  return `${header("contact")}<main>${hero("contact")}
    <section class="section"><div class="container"><div class="row g-4">
      <div class="col-lg-5"><article class="contact-card h-100" data-aos="fade-up"><span class="section-kicker">Office Details</span><h2>Deputy Commissioner Office, District Central</h2><p>The Deputy Commissioner Office is the headquarters of the District Administration Central. Citizens can visit the relevant branch counter during public hours for Domicile, PRC, NOCs, licences, revenue matters and complaints. If you are not sure which office deals with your matter, ask at the reception or submit your query through the complaint form.</p>
        <p><i class="bi bi-geo-alt"></i> <strong>Address:</strong> Sector 15-A/1, Buffer Zone, Karachi 74600</p>
        <p><i class="bi bi-clock"></i> <strong>Public hours:</strong> Monday to Friday, 9:00 AM – 5:00 PM</p>
        <p><i class="bi bi-hourglass-split"></i> <strong>Complaint response:</strong> within 48 hours on working days</p>
        <p><i class="bi bi-telephone"></i> <strong>Emergency:</strong> Rescue 1122 · Police 15 · Fire Brigade 16</p>
        <div class="hero-buttons mt-3"><a class="btn btn-primary-gradient" href="complaint-registration.html">Submit a Complaint</a><a class="btn btn-outline-primary" href="https://www.facebook.com/deputycommissionerCentral" target="_blank" rel="noopener"><i class="bi bi-facebook"></i> Facebook</a></div>
      </article></div>
      <div class="col-lg-7" data-aos="fade-left"><div class="ratio ratio-4x3 rounded overflow-hidden"><iframe src="https://www.google.com/maps?q=Deputy+Commissioner+Office+District+Central+Buffer+Zone+Karachi&output=embed" title="Map of the Deputy Commissioner Office, District Central" loading="lazy" style="border:0"></iframe></div></div>
    </div></div></section>
  </main>${footer()}`;
}

function initFilters() {
  const serviceSearch = document.getElementById("serviceSearch");
  if (serviceSearch) {
    serviceSearch.addEventListener("input", function () {
      const query = this.value.trim().toLowerCase();
      document.querySelectorAll(".service-entry").forEach((card) => {
        card.classList.toggle("d-none", !card.dataset.title.includes(query));
      });
    });
  }

  const newsFilter = document.getElementById("newsFilter");
  if (newsFilter) {
    newsFilter.addEventListener("submit", function (event) {
      event.preventDefault();
      const query = document.getElementById("newsSearch").value.trim().toLowerCase();
      const category = document.getElementById("newsCategory").value;
      const year = document.getElementById("newsYear").value;
      document.querySelectorAll(".news-entry").forEach((card) => {
        const matchesText = !query || card.dataset.title.includes(query);
        const matchesCategory = !category || card.dataset.category === category;
        const matchesYear = !year || card.dataset.year === year;
        card.classList.toggle("d-none", !(matchesText && matchesCategory && matchesYear));
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const root = document.getElementById("majorPage");
  if (!root) return;
  const page = root.dataset.page;
  const renderers = { about: aboutPage, services: servicesPage, news: newsPage, initiatives: initiativesPage, plaques: plaquesPage, rwa: rwaPage, ucs: ucPage, personalities: personalitiesPage, team: teamPage, directory: directoryHubPage, css: cssCornerPage, track: trackPage, transport: transportPage, law: lawOrderPage, privacy: privacyPage, terms: termsPage, sitemap: sitemapPage, search: searchPage, jurisdiction: jurisdictionPage, contact: contactPage };
  root.innerHTML = renderers[page] ? renderers[page]() : page.startsWith("uc-") ? ucTownPage(page.slice(3)) : directoryPage(page);
  initFilters();
  runSiteSearch();
  initDirFilters();
  const showTabFromHash = () => {
    const id = (location.hash || "").slice(1);
    const btn = id && document.getElementById("tab-" + id);
    if (btn && window.bootstrap) { bootstrap.Tab.getOrCreateInstance(btn).show(); document.getElementById("jurisdiction-tabs").scrollIntoView({ behavior: "smooth" }); }
  };
  showTabFromHash();
  window.addEventListener("hashchange", showTabFromHash);
  document.querySelectorAll(".juris-tabs button").forEach((b) => b.addEventListener("shown.bs.tab", () => history.replaceState(null, "", "#" + b.id.slice(4))));
  if (window.AOS) AOS.refreshHard();
});
