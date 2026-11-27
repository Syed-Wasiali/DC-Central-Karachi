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
    title: "News & Press Releases",
    subtitle: "Latest official updates and activities from District Central Karachi.",
    breadcrumb: "News & Press Releases",
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
              <button class="top-link" type="button">Urdu</button>
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
                <a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
                <a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
                <a href="#" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
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
                <a class="nav-link dropdown-toggle${active(page, "about")}" href="about.html" data-bs-toggle="dropdown">About District</a>
                <div class="dropdown-menu mega-menu">
                  <div class="mega-grid">
                    <a href="about.html#vision">Vision</a><a href="about.html#mission">Mission</a><a href="about.html#history">History</a><a href="about.html#geography">District Profile</a><a href="about.html#map">Map</a>
                  </div>
                </div>
              </li>
              <li class="nav-item"><a class="nav-link" href="deputy-commissioner.html">Deputy Commissioner</a></li>
              <li class="nav-item dropdown position-static">
                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Administrative Team</a>
                <div class="dropdown-menu mega-menu"><div class="mega-grid wide"><a href="deputy-commissioner.html">Deputy Commissioner</a><a href="adc-1.html">ADC-I</a><a href="adc-2.html">ADC-II</a><a href="ac-1.html">Assistant Commissioner Liaquatabad</a><a href="ac-2.html">Assistant Commissioner Gulberg</a><a href="ac-3.html">Assistant Commissioner Nazimabad</a><a href="ac-4.html">Assistant Commissioner North Nazimabad</a><a href="ac-5.html">Assistant Commissioner New Karachi</a><a href="ac-6.html">Assistant Commissioner Revenue</a><a href="mukhtiarkar-liaquatabad.html">Mukhtiarkar Liaquatabad</a><a href="mukhtiarkar-gulberg.html">Mukhtiarkar Gulberg</a><a href="mukhtiarkar-nazimabad.html">Mukhtiarkar Nazimabad</a><a href="mukhtiarkar-north-nazimabad.html">Mukhtiarkar North Nazimabad</a><a href="mukhtiarkar-new-karachi.html">Mukhtiarkar New Karachi</a><a href="superintendent-bilal-ahmed.html">Superintendent Bilal Ahmed</a><a href="superintendent-maria-shah.html">Superintendent Maria Shah</a></div></div>
              </li>
              <li class="nav-item dropdown position-static">
                <a class="nav-link dropdown-toggle" href="branches.html" data-bs-toggle="dropdown">Branches</a>
                <div class="dropdown-menu mega-menu"><div class="mega-grid wide"><a href="revenue.html">Revenue</a><a href="accounts-branch.html">Accounts</a><a href="general-branch.html">General</a><a href="judicial-branch.html">Judicial</a><a href="establishment-branch.html">Establishment</a><a href="domicile-branch.html">Domicile / PRC</a><a href="arms-branch.html">Arms</a><a href="pa-branch.html">P.A. Branch of ADC-I</a><a href="benevolent-fund.html">Benevolent Fund</a><a href="ri-branch.html">R &amp; I</a><a href="control-room.html">Control Room</a><a href="it-cell.html">IT Cell</a><a href="complaint-cell.html">Complaint Cell</a><a href="public-relations.html">Public Relations</a></div></div>
              </li>
              <li class="nav-item dropdown position-static">
                <a class="nav-link dropdown-toggle${active(page, "services")}" href="citizen-services.html" data-bs-toggle="dropdown">Citizen Services</a>
                <div class="dropdown-menu mega-menu"><div class="mega-grid wide"><a href="domicile.html">Domicile</a><a href="prc.html">PRC</a><a href="noc.html">NOC</a><a href="arms-license.html">Arms License</a><a href="revenue-certificate.html">Revenue Certificate</a><a href="land-revenue.html">Land / Revenue</a><a href="complaint-registration.html">Complaint Registration</a><a href="price-list.html">Price List</a><a href="downloads.html">Downloads / Forms</a><a href="public-assistance.html">General Public Assistance</a></div></div>
              </li>
              <li class="nav-item"><a class="nav-link" href="index.html#downloads">Downloads</a></li>
              <li class="nav-item"><a class="nav-link${active(page, "news")}" href="news.html">News</a></li>
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
            <div class="footer-social"><a href="#"><i class="bi bi-facebook"></i></a><a href="#"><i class="bi bi-instagram"></i></a><a href="#"><i class="bi bi-youtube"></i></a></div>
          </div>
          <div class="col-6 col-lg-2"><h3>Quick Links</h3><a href="about.html">About</a><a href="news.html">News</a><a href="index.html#gallery">Gallery</a><a href="index.html#downloads">Downloads</a></div>
          <div class="col-6 col-lg-2"><h3>Branches</h3><a href="revenue.html">Revenue</a><a href="accounts-branch.html">Accounts</a><a href="it-cell.html">IT Cell</a><a href="complaint-cell.html">Complaint Cell</a></div>
          <div class="col-6 col-lg-2"><h3>Services</h3><a href="domicile.html">Domicile</a><a href="prc.html">PRC</a><a href="noc.html">NOC</a><a href="price-list.html">Price List</a></div>
          <div class="col-6 col-lg-2"><h3>Important</h3><a href="#">Privacy Policy</a><a href="#">Terms</a><a href="complaint-registration.html">Complaint</a><a href="contact.html">Contact</a></div>
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
      <div class="hero-bg placeholder-image"><i class="bi bi-building"></i></div>
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
  return `<div class="gallery-grid major-gallery">${Array.from({ length: count }, (_, i) => `<div class="placeholder-image image-zoom"><i class="bi bi-image"></i><span>${["District", "Government Offices", "Public Services", "Development", "Events", "Administration", "Gallery", "Official Activity"][i] || "Gallery"}</span></div>`).join("")}</div>`;
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
    <section class="section"><div class="container"><div class="row g-5 align-items-center"><div class="col-lg-5" data-aos="zoom-in"><div class="dc-portrait placeholder-image image-zoom"><i class="bi bi-map"></i></div></div><div class="col-lg-7" data-aos="fade-left"><span class="section-kicker">District Introduction</span><h2>District Central Karachi</h2><p>District Central Karachi functions as one of the seven districts of Karachi Division under the Government of Sindh, with the Deputy Commissioner Office located at Sector 15-A/1, Buffer Zone, Karachi.</p><p>The district administration coordinates public services, citizen facilitation, revenue administration, complaint redressal, and field governance across its notified towns and sub-divisions.</p><a class="btn btn-primary-gradient" href="#history">Read More</a></div></div></div></section>
    <section class="section muted-section" id="vision"><div class="container"><article class="vision-panel" data-aos="fade-up"><i class="bi bi-bank2"></i><div><span class="section-kicker">Our Vision</span><h2>Responsive, Transparent and Citizen-Focused Governance</h2><p>To build a district administration that is transparent, responsive, and rooted in service, where every resident of District Central can access government facilitation quickly, fairly, and without unnecessary hardship.</p></div></article></div></section>
    <section class="section" id="mission"><div class="container">${sectionHead("Mission", "Our Mission", "To deliver efficient, accountable public services across all branches of the Deputy Commissioner's Office; to maintain law and order in coordination with allied departments; and to strengthen the bridge between citizens and government through digital facilitation and timely complaint resolution.")}<div class="card-grid">${mission.map(([icon, title]) => iconCard(icon, title, "A core priority for District Central's citizen-focused public administration.")).join("")}</div></div></section>
    <section class="section muted-section" id="history"><div class="container">${sectionHead("History", "History of District Central Karachi", "District Central Karachi, officially notified as Karachi Central District and referred to in some records as Nazimabad District, was first established as an administrative district in 1996. It was dissolved in 2001 when Karachi's five districts were merged into City District Government Karachi, and was re-established as an independent district on 11 July 2011 when the city-district system was disbanded and the original district structure restored.")}<div class="timeline-list">${["Established as an administrative district in 1996", "Merged into City District Government Karachi in 2001", "Re-established as an independent district on 11 July 2011", "Now functions as part of Karachi Division under Government of Sindh"].map((title) => `<article class="timeline-card" data-aos="fade-up"><span class="section-kicker">District Milestone</span><h3>${title}</h3><p>Official district history summary based on the provided website content document.</p></article>`).join("")}</div></div></section>
    <section class="section" id="geography"><div class="container">${sectionHead("Location", "District Profile")}<div class="row g-4 align-items-center"><div class="col-lg-6"><div class="dc-portrait placeholder-image" id="map"><i class="bi bi-geo-alt"></i></div></div><div class="col-lg-6"><div class="checklist">${[["Province","Sindh"],["Division","Karachi"],["Headquarters","Deputy Commissioner Office, Sector 15-A/1, Buffer Zone, Karachi"],["Area","Approx. 69 km2"],["Population (2023 census)","Approx. 3.82 million"],["Literacy Rate","Approx. 83.5%"],["Towns / Sub-divisions","Gulberg Town, Liaquatabad Town, Nazimabad Town, New Karachi Town, North Nazimabad Town"],["Postal Code","74600"]].map(([item, value]) => `<div class="mini-panel"><i class="bi bi-check-circle"></i><strong>${item}</strong><span>${value}</span></div>`).join("")}</div><a class="btn btn-primary-gradient mt-4" href="#map">View District Map</a></div></div></div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Weather", "Climate")}<div class="card-grid">${climate.map(([icon, title], i) => iconCard(icon, title, [
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
    <section class="section muted-section"><div class="container">${sectionHead("Statistics", "District Statistics")}${stats([[3820000, "Population (Census 2023)", "3.82 million"], [5, "Towns / Sub-divisions"], [14, "District Branches"], [10, "Citizen Services"]], "Population figure from the 2023 Population and Housing Census, Pakistan Bureau of Statistics.")}</div></section>
    <section class="section"><div class="container">${sectionHead("Gallery", "Photo Gallery")}${gallery(8)}<div class="text-center mt-4"><a class="btn btn-primary-gradient" href="index.html#gallery">View Gallery</a></div></div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Citizen Support", "Frequently Asked Questions")}${faq("aboutFaq", [["What is District Central Karachi?", "District Central is one of the seven districts of Karachi Division, Government of Sindh. It covers about 69 square kilometres and has five towns: Gulberg, Liaquatabad, Nazimabad, New Karachi and North Nazimabad."], ["Where is the District Central Office located?", "The Deputy Commissioner Office is at Sector 15-A/1, Buffer Zone, Karachi. It is open to the public Monday to Friday, 9:00 AM to 5:00 PM."], ["Who is responsible for district administration?", "The Deputy Commissioner heads the district administration, supported by two Additional Deputy Commissioners, five Assistant Commissioners (one for each sub-division), an Assistant Commissioner Revenue and the Mukhtiarkars."], ["What services are provided by the district administration?", "Domicile and PRC, NOCs, arms licences, revenue certificates and land record matters, price control, complaint redressal, and coordination of law and order, disaster response and public campaigns such as polio."], ["How can citizens contact the DC Office?", "Visit the office during public hours or submit a complaint through this website. The Complaint Cell aims to respond within 48 hours on working days."]])}</div></section>
  </main>${footer()}`;
}

const services = ["Domicile", "PRC", "NOC", "Arms License", "Revenue Certificate", "Land / Revenue Information", "Complaint Registration", "Price List", "Downloads / Forms", "General Public Assistance"];
const serviceLinks = {
  "Domicile": "domicile.html",
  "PRC": "prc.html",
  "NOC": "noc.html",
  "Arms License": "arms-license.html",
  "Revenue Certificate": "revenue-certificate.html",
  "Land / Revenue Information": "land-revenue.html",
  "Complaint Registration": "complaint-registration.html",
  "Price List": "price-list.html",
  "Downloads / Forms": "downloads.html",
  "General Public Assistance": "public-assistance.html"
};
function servicesPage() {
  return `${header("services")}<main>${hero("services")}
    <!-- Content sourced from: content/DC OFFICE CONTENT.docx; content/content.docx -->
    <section class="section"><div class="container">${sectionHead("Services", "Services Introduction", "Citizen-facing services include Domicile, PRC, NOC guidance, Arms License facilitation, Revenue Certificate guidance, complaints, price lists, forms, downloads, and public assistance.")}<div class="service-search"><i class="bi bi-search"></i><input id="serviceSearch" type="search" placeholder="Search Citizen Services..." aria-label="Search Citizen Services"></div></div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Directory", "All Citizen Services")}<div class="row g-4" id="serviceCards">${services.map((name, i) => `<div class="col-md-6 col-lg-4 service-entry" data-title="${name.toLowerCase()}" id="${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}"><article class="dept-card h-100"><i class="bi ${["bi-file-earmark-person", "bi-person-lines-fill", "bi-shield-check", "bi-file-lock", "bi-file-text", "bi-map", "bi-chat-left-text", "bi-list-ul", "bi-download", "bi-headset"][i]}"></i><h3>${name}</h3><p>${name === "Domicile" ? "Application facilitation and document verification through the Domicile/PRC Branch." : name === "PRC" ? "Permanent Resident Certificate service issued alongside Domicile requirements." : name === "Arms License" ? "New Non-Prohibited Bore arms licence applications are processed through the Arms Branch." : name === "Complaint Registration" ? "Complaints may be submitted online or through the Complaint Cell / Control Room." : ({"NOC": "No-Objection Certificates for petrol pumps, CNG stations, public gatherings, marriage functions, street tents and Bachat Bazars.", "Revenue Certificate": "Revenue-related certificates issued through the Revenue Branch after verification of records.", "Land / Revenue Information": "Guidance on land records, mutation, demarcation, government land and encroachment enquiries.", "Price List": "Official notified prices of essential commodities, with guidance on reporting overcharging.", "Downloads / Forms": "Application forms, requirement lists, notifications and other official documents.", "General Public Assistance": "Guidance for citizens who are not sure which office handles their matter."})[name] || ""}</p><a class="btn btn-primary-gradient" href="${serviceLinks[name]}">View Details</a></article></div>`).join("")}</div></div></section>
    <section class="section"><div class="container">${sectionHead("Details", "Service Detail Preview")}<div class="accordion help-accordion" id="serviceDetails">${services.map((name, i) => {
      const domicileDocs = "CNIC of applicant and father; Form B and birth certificate; educational documents of last three years; utility bills of last three years or rent agreement with supporting documents; father's domicile or mother's domicile if father's domicile is unavailable; spouse CNIC and marriage certificate if married; voter list entry; Union Council resident certificate; Mukhtiarkar report; Rs. 210 bank challan; affidavit; originals plus one certified photocopy set.";
      const armsDocs = "Application addressed to the Deputy Commissioner; CNIC copy; Sindh Domicile copy; utility bill or proof of residence; one recent passport-size photograph; duly filled application form; CRO / Police Verification; biometric verification and photograph at the Arms Section; Rs. 5,000 government fee through prescribed National Bank of Pakistan Challan.";
      const detail = name === "Domicile" ? `Required documents: ${domicileDocs} Processing fee: Rs. 450. Applicants whose CNIC is registered outside Karachi should first contact the branch in-charge.` : name === "PRC" ? `PRC is issued alongside the Domicile Certificate; see the same requirements. Processing fee: Rs. 450.` : name === "Arms License" ? `Eligibility: applicant must be a resident of Sindh Province and possess valid Sindh Domicile. District Central Karachi quota: 50 licences per month. ${armsDocs}` : name === "NOC" ? "NOCs for petrol pumps/CNG stations, public gatherings, marriage functions, street tents/shamianas, and Bachat Bazars are handled through the Judicial Branch and ADC-I office. Applicants should contact the relevant branch for the specific checklist." : name === "Complaint Registration" ? "Citizens may file a complaint online through the Citizen Help Center form, or in person at the Complaint Cell / Control Room, with complete details for review and follow-up." : name === "Price List" ? "Official district price lists are issued periodically for public awareness and market monitoring, supported by inspections carried out by Assistant Commissioners and Mukhtiarkars." : name === "Revenue Certificate" ? "Issued through the Revenue Branch. Applicants are advised to verify required supporting documents before visiting the facilitation counter." : "Information will be updated.";
      return `<div class="accordion-item" id="detail-${i}"><h4 class="accordion-header" id="serviceH${i}"><button class="accordion-button ${i ? "collapsed" : ""}" type="button" data-bs-toggle="collapse" data-bs-target="#serviceC${i}" aria-expanded="${i ? "false" : "true"}" aria-controls="serviceC${i}">${name}</button></h4><div id="serviceC${i}" class="accordion-collapse collapse ${i ? "" : "show"}" aria-labelledby="serviceH${i}" data-bs-parent="#serviceDetails"><div class="accordion-body"><p>${detail}</p></div></div></div>`;
    }).join("")}</div></div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Process", "How to Access Services")}<div class="branch-workflow">${["Select Service", "Review Requirements", "Submit / Visit Relevant Office", "Receive Service / Follow Up"].map((x, i) => `<div class="flow-card"><span class="avatar placeholder-image mx-auto"><i class="bi bi-${i + 1}-circle"></i></span><strong>${i + 1}. ${x}</strong></div>`).join("")}</div></div></section>
    <section class="section"><div class="container">${sectionHead("Quick Links", "Quick Service Links")}<div class="quick-links"><a class="btn btn-primary-gradient" href="domicile.html">Domicile</a><a class="btn btn-primary-gradient" href="prc.html">PRC</a><a class="btn btn-primary-gradient" href="complaint-registration.html">Complaint</a><a class="btn btn-primary-gradient" href="downloads.html">Downloads</a><a class="btn btn-primary-gradient" href="price-list.html">Price List</a><a class="btn btn-primary-gradient" href="public-assistance.html">Contact Office</a></div></div></section>
    <section class="section muted-section"><div class="container">${sectionHead("FAQ", "Frequently Asked Questions")}${faq("servicesFaq", [["Which documents are required?", "Each service page lists the documents required. In most cases you will need your original CNIC and copies of the documents related to your application."], ["Can I download forms?", "Yes. Application forms and requirement lists are available in the Downloads / Forms section as they are issued."], ["How long does processing take?", "Processing time depends on the service and on verification. Please ask at the relevant counter for the expected time for your application."], ["Where do I submit applications?", "At the relevant facilitation counter in the DC Office, Sector 15-A/1, Buffer Zone, Monday to Friday, 9:00 AM to 5:00 PM. Domicile and PRC applications can also be made online through the Sindh Domicile Portal."]])}</div></section>
    <section class="complaint-cta" id="service-complaint"><div class="container"><div class="cta-panel"><div><span class="section-kicker">Complaint CTA</span><h2>Need Help With a Government Service?</h2><p>Submit or track a public complaint through official facilitation channels.</p></div><div class="cta-actions"><a class="btn btn-primary-gradient" href="#">Submit Your Complaint</a><a class="btn btn-outline-primary" href="#">Track Your Complaint</a></div></div></div></section>
  </main>${footer()}`;
}

function newsPage() {
  const cats = ["Notifications", "Circulars", "Government Orders", "Tender Notices", "Public Announcements"];
  const sourcedNews = [
    ["District Coordination Meeting Held", "Public facilitation counters and service improvement priorities were reviewed by officials.", "District Update"],
    ["Price Monitoring Campaign Continues", "Field teams inspected markets across District Central to support fair pricing and consumer protection.", "Price Control"],
    ["Public Service Desk Upgraded", "Applicants can access clearer guidance and improved document counters at the Deputy Commissioner Office.", "Citizen Facilitation"]
  ];
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
  return `${header("news")}<main>${hero("news")}
    <!-- Content sourced from: content/DC OFFICE CONTENT.docx -->
    <section class="section"><div class="container">${sectionHead("Featured", "Featured News")}<article class="feature-card"><div class="placeholder-image"><i class="bi bi-newspaper"></i></div><div><span class="section-kicker">${sourcedNews[0][2]}</span><h2>${sourcedNews[0][0]}</h2><p><strong>Category:</strong> ${sourcedNews[0][2]}</p><p>${sourcedNews[0][1]}</p><a class="btn btn-primary-gradient" href="#newsCards">Read More</a></div></article></div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Latest", "Latest News")}<div class="row g-4" id="newsCards">${sourcedNews.map((item, i) => `<div class="col-md-6 col-lg-4 news-entry" data-title="${item[0].toLowerCase()}" data-category="${item[2]}" data-year=""><article class="news-card"><div class="news-img placeholder-image"><i class="bi bi-newspaper"></i></div><div><span class="section-kicker">${item[2]}</span><h3>${item[0]}</h3><p>${item[1]}</p></div></article></div>`).join("")}</div></div></section>
    <section class="section"><div class="container">${sectionHead("Press", "Press Releases")}<div class="table-responsive"><table class="table press-table"><thead><tr><th>Date</th><th>Title</th><th>Category</th><th>Download/View</th></tr></thead><tbody><tr><td colspan="4" class="text-center text-muted">Press releases will appear here as they are issued.</td></tr></tbody></table></div></div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Notices", "Public Notices")}<div class="notice-list">${sourcedNotices.map((notice) => `<article class="notice-item"><span><i class="bi bi-megaphone"></i></span><strong>${notice}</strong></article>`).join("")}</div></div></section>
    <section class="section"><div class="container">${sectionHead("Filter", "News Search & Filter")}<form class="filter-bar" id="newsFilter"><input type="search" id="newsSearch" placeholder="Search News" aria-label="Search News"><select id="newsCategory" aria-label="Category"><option value="">All Categories</option>${cats.map((x) => `<option>${x}</option>`).join("")}</select><select id="newsYear" aria-label="Year"><option value="">All Years</option><option>2026</option><option>2025</option><option>2024</option><option>2023</option></select><button class="btn btn-primary-gradient" type="submit">Filter</button></form></div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Archive", "News Archive")}<div class="related-links">${[2026,2025,2024,2023].map((year) => `<a href="#">${year} Archive <i class="bi bi-arrow-right"></i></a>`).join("")}</div></div></section>
  </main>${footer()}`;
}

function initiativesPage() {
  const cats = ["Public Welfare", "Development", "Price Control", "Anti-Encroachment", "Environment", "Cleanliness", "Disaster Management", "Digital Services", "Citizen Facilitation", "Public Awareness"];
  const sourcedInitiatives = [
    ["Digital Service Desk", "An ongoing effort to move citizen-facing services, from Domicile/PRC applications to complaint registration, onto digital and semi-digital channels, reducing repeat visits and processing time.", "Digital Services"],
    ["Market Price Monitoring", "Regular field inspections by Assistant Commissioners and Mukhtiarkars to check that essential commodities are sold at official rates, with enforcement action against profiteering and hoarding.", "Price Control"],
    ["Complaint Tracking", "A structured follow-up system through the Complaint Cell, ensuring registered complaints are assigned to the relevant branch and tracked through to resolution.", "Citizen Facilitation"],
    ["District Field Visits", "Routine visits by the Deputy Commissioner and Assistant Commissioners to markets, facilitation counters, and public offices across the district's five towns.", "Public Welfare"]
  ];
  return `${header("initiatives")}<main>${hero("initiatives")}
    <!-- Content sourced from: content/DC OFFICE CONTENT.docx; content/Functions and Powers of Deputy Commissioner.docx -->
    <section class="section"><div class="container">${sectionHead("Featured", "Featured Initiative")}<article class="feature-card"><div class="placeholder-image"><i class="bi bi-building-gear"></i></div><div><span class="section-kicker">${sourcedInitiatives[0][2]}</span><h2>${sourcedInitiatives[0][0]}</h2><p>${sourcedInitiatives[0][1]}</p><a class="btn btn-primary-gradient" href="#">View Initiative</a></div></article></div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Categories", "Initiative Categories")}<div class="card-grid">${cats.map((x, i) => iconCard("bi-grid", x, [
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
    <section class="section"><div class="container">${sectionHead("Initiatives", "Initiative Cards")}<div class="row g-4">${sourcedInitiatives.map((item) => `<div class="col-md-6 col-lg-3"><article class="initiative-card"><div class="placeholder-image"><i class="bi bi-building-gear"></i></div><span class="section-kicker">${item[2]}</span><h3>${item[0]}</h3><p>${item[1]}</p></article></div>`).join("")}</div></div></section>
    <!-- Ongoing and completed projects hidden until real project data is supplied by the DC Office. -->
    <section class="section muted-section"><div class="container">${sectionHead("Upcoming", "Upcoming Initiatives")}<div class="timeline-list">${[["Polio Immunisation Campaign", "All sub-divisions", "Door-to-door vaccination of children under five, coordinated by the district Polio Focal Person."], ["Monsoon Preparedness Review", "DC Office", "Review of drain cleaning, dewatering arrangements and emergency response before the rains."], ["Ramazan Price Monitoring", "All markets", "Daily inspections to keep essential items at notified prices during Ramazan."], ["Tree Plantation Drive", "Parks and green belts", "Plantation with schools and community groups to improve the district's green cover."]].map(([t, loc, d]) => `<article class="timeline-card"><span class="section-kicker">Scheduled campaign</span><h3>${t}</h3><p><strong>Location:</strong> ${loc}. ${d}</p></article>`).join("")}</div></div></section>
    <section class="section"><div class="container">${sectionHead("Impact", "Impact / Statistics")}${stats([[5, "Sub-divisions Covered"], [10, "Citizen Services Online"], [14, "District Branches"], [48, "Complaint Response Target", "48 hrs"]], "Figures will be updated as initiative data is published.")}</div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Gallery", "Initiative Photos")}${gallery(6)}</div></section>
    <section class="section"><div class="container">${sectionHead("FAQ", "Frequently Asked Questions")}${faq("initiativesFaq", [["What are government initiatives?", "Programmes and campaigns run by the District Administration Central to improve public services, protect consumers and support residents."], ["How are projects selected?", "Projects are chosen according to public need, government priorities and directions from the Government of Sindh and the Commissioner Karachi."], ["Can citizens suggest initiatives?", "Yes. Send your suggestion through the complaint form on this website, marking it as a suggestion."], ["Where can progress be checked?", "Progress updates are published on this page, on the News page and on the District Central social media pages."]])}</div></section>
  </main>${footer()}`;
}

function linkCards(items) {
  return `<div class="row g-4">${items.map(([icon, title, text, url, label]) => `<div class="col-md-6 col-lg-4"><article class="dept-card h-100" data-aos="fade-up"><i class="bi ${icon}"></i><h3>${title}</h3><p>${text}</p>${url ? `<a class="btn btn-primary-gradient" href="${url}" target="_blank" rel="noopener">${label || "Visit Website"}</a>` : ""}</article></div>`).join("")}</div>`;
}

function jurisdictionPage() {
  const federal = [
    ["bi-person-vcard", "NADRA", "CNIC, NICOP, Form-B and Family Registration Certificate. Helpline: 1777.", "https://www.nadra.gov.pk"],
    ["bi-passport", "Directorate General of Immigration & Passports", "New passports and passport renewal, including online renewal.", "https://www.dgip.gov.pk"],
    ["bi-receipt", "Federal Board of Revenue", "Income tax registration, returns and active taxpayer status.", "https://www.fbr.gov.pk"],
    ["bi-check2-square", "Election Commission of Pakistan", "Voter registration and verification of your vote.", "https://www.ecp.gov.pk"],
    ["bi-heart", "Benazir Income Support Programme", "Registration and eligibility for income support.", "https://www.bisp.gov.pk"],
    ["bi-chat-square-text", "Pakistan Citizen's Portal", "Complaints to federal and provincial departments.", "https://www.citizenportal.gov.pk"]
  ];
  const provincial = [
    ["bi-bank2", "Government of Sindh", "Official portal of the Government of Sindh.", "https://www.sindh.gov.pk"],
    ["bi-shield-shaded", "Sindh Police", "Police emergency 15 and online police services.", "https://www.sindhpolice.gov.pk"],
    ["bi-truck-front", "Sindh Emergency Rescue Service", "Rescue 1122 for emergencies.", "https://www.sers.gos.pk"],
    ["bi-hospital", "Health Department, Sindh", "Tele Tabeeb 24/7 healthcare helpline: 1123.", "https://health.sindh.gov.pk"],
    ["bi-car-front", "Excise, Taxation & Narcotics Control", "Vehicle registration and property tax.", "https://excise.gos.pk"],
    ["bi-mortarboard", "Sindh Education Foundation", "Educational grants and scholarships.", "https://www.sef.org.pk"]
  ];
  const local = [
    ["bi-buildings", "Karachi Metropolitan Corporation", "City-wide municipal services, including the Fire Brigade (16).", "https://home.kmc.gos.pk"],
    ["bi-house-gear", "Town Municipal Corporations", "Gulberg, Liaquatabad, Nazimabad, New Karachi and North Nazimabad: local roads, streetlights, parks, sanitation, and birth and death registration.", ""],
    ["bi-people", "Union Committees", "Your first point of contact for residence certificates and local civic issues. A full list of Union Committees will be added.", ""]
  ];
  return `${header("jurisdiction")}<main>${hero("jurisdiction")}
    <section class="section" id="federal"><div class="container">${sectionHead("Federal", "Federal Government Services", "Federal Government offices that serve residents of District Central. Use the links below to reach official services online or to find your nearest office.")}${linkCards(federal)}</div></section>
    <section class="section muted-section" id="provincial"><div class="container">${sectionHead("Provincial", "Government of Sindh Services", "Government of Sindh departments and services available to residents of District Central.")}${linkCards(provincial)}</div></section>
    <section class="section" id="local"><div class="container">${sectionHead("Local", "Local Government", "Local government in District Central is delivered by the Karachi Metropolitan Corporation, the Town Municipal Corporations and the Union Committees.")}${linkCards(local)}</div></section>
  </main>${footer()}`;
}

function contactPage() {
  return `${header("contact")}<main>${hero("contact")}
    <section class="section"><div class="container"><div class="row g-4">
      <div class="col-lg-5"><article class="contact-card h-100" data-aos="fade-up"><span class="section-kicker">Office Details</span><h2>Deputy Commissioner Office, District Central</h2>
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
  const renderers = { about: aboutPage, services: servicesPage, news: newsPage, initiatives: initiativesPage, jurisdiction: jurisdictionPage, contact: contactPage };
  root.innerHTML = renderers[page]();
  initFilters();
  if (window.AOS) AOS.refreshHard();
});
