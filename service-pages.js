const servicePages = {
  domicile: {
    title: "Domicile Certificate",
    file: "domicile.html",
    icon: "bi-file-earmark-person",
    category: "Citizen Documentation",
    department: "Domicile / PRC Branch",
    source: "content/DC OFFICE CONTENT.docx",
    description: "Application facilitation and document verification for Domicile Certificate services.",
    overview: "A Domicile Certificate is the official proof that a person permanently resides in a particular district of Sindh. It is required for admission to colleges and universities on provincial and district quotas, for appointment to government jobs, and for many other official purposes. In District Central, Domicile Certificates are issued by the Deputy Commissioner through the Domicile / PRC Branch of the DC Office. Residents can now also apply online through the Sindh Domicile Portal, which sends each application to the DC Office for verification and decision.",
    whoIntro: "Any person whose permanent address on their CNIC is in District Central, Karachi can apply. Applicants under 18 apply with their Form B and birth certificate, using their father's documents (or their mother's, where the father's are not available). Residence in the district is shown through the last three years of educational records and utility bills, or a rent agreement for tenants. If your CNIC address is outside Karachi, please speak to the branch in-charge before you apply.",
    docsIntro: "Bring the original documents together with one set of attested photocopies. Each document is checked against the original, and the Mukhtiarkar's report and the Union Committee residence certificate are used to confirm your address, so an incomplete file is the most common cause of delay. If you apply online, photograph or scan each document clearly so that every word can be read. The authority may ask for further documents where needed.",
    procIntro: "Whether you apply online or at the counter, your application goes through the same checks. The Domicile / PRC Branch scrutinises your documents, the Mukhtiarkar of your area confirms your residence, and the case is then placed before the competent officer for a decision. You will be told if anything is missing. Online applicants can follow every stage in the Sindh Domicile Portal app.",
    note: "The processing fee for a computerised Domicile Certificate is Rs. 450, plus a bank challan of Rs. 210. Online applicants can pay through the portal or by bank challan. Keep your fee receipt and application number until the certificate is issued. Please pay only at the official counter, the bank or through the portal, and report any request for extra money through the complaint form.",
    faq: [["Can I apply for a Domicile online?", "Yes. Download the Sindh Domicile Portal app from the App Store or Google Play, or use the portal website. Register with your CNIC number, verify your identity, upload your documents and pay the fee online or through a bank challan. Your application is sent to the DC Office, District Central for verification and decision."], ["How long does it take?", "Processing time depends on a complete file and on verification by the Mukhtiarkar. Online applicants can track their application in the app; counter applicants can ask the Domicile / PRC Branch for the expected date."], ["My CNIC address is outside Karachi. Can I apply here?", "Please speak to the branch in-charge before applying. A Domicile for District Central is issued on the basis of permanent residence in the district, which must be supported by your documents."], ["What is the difference between a Domicile and a PRC?", "The Domicile Certificate shows the district of your permanent residence, while the Permanent Residence Certificate (PRC) confirms permanent residence in Sindh. Both are usually needed together for admissions and jobs, and they are processed with the same documents."], ["How can an institution check that my certificate is genuine?", "Certificates issued through the portal are kept in a central digital record that authorised institutions can verify online. For older certificates, institutions can write to the Domicile / PRC Branch for verification."]],
    eligibility: ["The permanent address on the CNIC must be District Central, Karachi.", "Applicants whose CNIC is registered outside Karachi should first contact the branch in-charge."],
    documents: ["CNIC of applicant and father", "Form B and birth certificate", "Educational certificate/documents of the last three years", "Utility bills of the last three years or rent agreement and supporting documents if a tenant", "Applicant's father's domicile, or mother's domicile if father's domicile is unavailable", "CNIC and marriage certificate of spouse if the applicant is married", "Mother's identity card if father is deceased or divorced, with father's death certificate or divorce decree", "Voter list entry for applicant, or father's voter list if applicant is under 18", "Resident Certificate from the relevant Union Council", "Report from the Mukhtiarkar of the relevant area", "Bank challan of Rs. 210/-", "Affidavit", "Original documents plus one set of certified photocopies"],
    procedure: ["Verify required documents before visiting the facilitation counter", "Submit the application and supporting documents", "Branch scrutiny and document verification", "Mukhtiarkar report where required", "Issuance after prescribed verification and approval"],
    fees: ["Processing fee: Rs. 450/-", "Bank challan: Rs. 210/-"],
    processing: "Processing time depends on complete documents and verification. Please ask at the counter for the expected time for your application.",
    online: { app: "https://apps.apple.com/us/app/sindh-domicile-portal/id6815170592", play: "https://play.google.com/store/apps/details?id=com.sindhdomicile.app", portal: "https://www.sindhdomicileportal.gos.pk" },
    where: "Online through the Sindh Domicile Portal, or at the Domicile / PRC Branch, Deputy Commissioner Office, Sector 15-A/1, Buffer Zone, Karachi."
  },
  prc: {
    title: "Permanent Resident Certificate (PRC)",
    file: "prc.html",
    icon: "bi-person-lines-fill",
    category: "Citizen Documentation",
    department: "Domicile / PRC Branch",
    source: "content/DC OFFICE CONTENT.docx",
    description: "PRC is issued alongside the Domicile Certificate using the same verified document requirements.",
    overview: "A Permanent Residence Certificate (PRC) confirms that a person is a permanent resident of Sindh. It is usually required together with the Domicile Certificate for admission to educational institutions, for government jobs and for other official purposes within the province. In District Central, the PRC is issued by the Domicile / PRC Branch of the DC Office and is processed alongside the Domicile Certificate with the same documents. The Sindh Domicile Portal also offers online applications for both the District PRC (PRC-D) and the City PRC (PRC-C).",
    whoIntro: "Residents whose permanent address on their CNIC is in District Central, Karachi can apply. The eligibility rules are the same as for the Domicile Certificate: your documents must show that you have lived permanently in the district, including the last three years of educational records and utility bills, or a rent agreement for tenants. Applicants whose CNIC is registered outside Karachi should speak to the branch in-charge before applying.",
    docsIntro: "The PRC uses the same document checklist as the Domicile Certificate, so you can apply for both with one set of papers. Bring the originals and one set of attested photocopies to the counter, or upload clear copies through the Sindh Domicile Portal. Your residence is confirmed through the Mukhtiarkar's report and the Union Committee residence certificate, so please make sure these are complete.",
    procIntro: "Apply online through the Sindh Domicile Portal or at the Domicile / PRC counter. The branch checks your documents, the Mukhtiarkar confirms your residence, and the competent officer decides the case. If you apply for both a Domicile and a PRC, they are verified together. Online applicants can track progress and receive notifications in the app until a decision is made.",
    note: "The processing fee is Rs. 450, plus a bank challan of Rs. 210. Online applicants can pay through the portal or by bank challan. Keep your receipt and application number safe until your certificate is issued, and pay only at the official counter, the bank or through the portal.",
    faq: [["Can I apply for a PRC online?", "Yes. The Sindh Domicile Portal app (App Store and Google Play) and the portal website accept applications for the District PRC (PRC-D) and the City PRC (PRC-C), as well as the Domicile Certificate."], ["Do I need separate documents for the PRC?", "No. The PRC uses the same documents as the Domicile Certificate, and both can be processed together."], ["Which PRC do I need?", "Check the requirement of the institution or employer you are applying to. If you are unsure, ask the Domicile / PRC Branch before applying."], ["How long does it take?", "Processing time depends on a complete file and on verification. Online applicants can track their application in the app."]],
    eligibility: ["See Domicile Certificate requirements.", "Applicants whose CNIC is registered outside Karachi should first contact the branch in-charge."],
    documents: ["Same document checklist as Domicile Certificate."],
    procedure: ["Review Domicile/PRC requirements", "Submit application and supporting documents", "Branch scrutiny and verification", "Issuance after approval"],
    fees: ["Processing fee: Rs. 450/-", "Bank challan: Rs. 210/-"],
    processing: "The PRC is processed together with the Domicile Certificate. Processing time depends on complete documents and verification. Please ask at the counter for the expected time for your application.",
    online: { app: "https://apps.apple.com/us/app/sindh-domicile-portal/id6815170592", play: "https://play.google.com/store/apps/details?id=com.sindhdomicile.app", portal: "https://www.sindhdomicileportal.gos.pk" },
    where: "Online through the Sindh Domicile Portal, or at the Domicile / PRC Branch, Deputy Commissioner Office, Sector 15-A/1, Buffer Zone, Karachi."
  },
  noc: {
    title: "No-Objection Certificate (NOC)",
    file: "noc.html",
    icon: "bi-file-check",
    category: "Permissions & NOCs",
    department: "Judicial Branch / ADC-I Office",
    source: "content/DC OFFICE CONTENT.docx; content/Departments and Mukhtiar kar.docx",
    description: "NOC facilitation for matters handled by the Judicial Branch and ADC-I office.",
    overview: "Certain activities in District Central need a No-Objection Certificate (NOC) from the District Administration before they can take place. These include setting up a petrol pump or CNG station, holding a public gathering, mela or marriage function, erecting tents or shamianas in the street, and organising a Bachat Bazar. An NOC is issued once the concerned agencies \u2014 such as the police and other departments \u2014 confirm that they have no objection. Most NOCs are handled by the Judicial Branch under ADC-II, while Bachat Bazar NOCs are handled by the P.A. Branch of ADC-I.",
    whoIntro: "Individuals, organisations and businesses that plan an activity in a public place in District Central, or a business that by law needs the district administration's permission, should apply for an NOC. Event organisers should apply well before the date of the event, as most cases need reports from other agencies. If you are not sure whether your activity needs an NOC, ask the Judicial Branch before making arrangements.",
    docsIntro: "Requirements differ for each type of NOC, so please confirm the full checklist with the branch before you apply. In every case, your application should clearly state the activity, its exact location, date and timing, and the expected number of people. Proof that you own or have permission to use the site is essential, and some activities also need clearances from other departments.",
    procIntro: "Submit your application to the relevant branch with the required documents. The branch checks the application and sends it to the police and other concerned agencies for their reports. Once the reports are received, the competent officer decides the case and the NOC is issued, with any conditions that must be followed. Please do not start the activity until the NOC has been issued.",
    note: "Fees depend on the type of NOC; please confirm the fee with the Judicial Branch or the P.A. Branch of ADC-I before applying. Allow enough time for agency reports, especially for public gatherings and events. Conditions written on the NOC must be followed, and the NOC may be cancelled if they are breached.",
    faq: [["Which branch issues my NOC?", "NOCs for petrol pumps, CNG stations, public gatherings, melas, marriage functions and street tents are handled by the Judicial Branch under ADC-II. Bachat Bazar NOCs are handled by the P.A. Branch of ADC-I."], ["How early should I apply?", "As early as possible, and well before the date of the activity, because most NOCs need reports from the police and other agencies."], ["Can I hold the event while my NOC is pending?", "No. Please wait until the NOC has been issued, and follow any conditions written on it."], ["What happens if conditions are not followed?", "The NOC may be cancelled and action may be taken under the law."]],
    eligibility: ["Individuals and organisations holding events, running businesses or using public places in District Central that need permission from the District Administration.", "Examples: petrol pumps and CNG stations, public gatherings and melas, marriage functions, street tents and shamianas, and Bachat Bazars."],
    documents: ["Application addressed to the Deputy Commissioner", "Copy of the applicant's CNIC", "Details of the event or site: location, date, time and expected attendance", "Proof of ownership of, or permission to use, the site", "Other NOCs required for the type of activity (the branch will advise)"],
    procedure: ["Contact the relevant branch for the specific NOC category", "Submit application and supporting documents", "Department review", "Decision under the prescribed administrative process"],
    fees: ["Please confirm the fee for your NOC type with the Judicial Branch or the P.A. Branch of ADC-I."],
    processing: "Apply well before the event date. NOCs are issued after verification by the concerned agencies.",
    where: "Judicial Branch for petrol pump/CNG, public gathering, marriage, tent/shamiana and related NOCs; ADC-I office for Bachat Bazar NOC and gratis water tanker permission."
  },
  "arms-license": {
    title: "Arms License",
    file: "arms-license.html",
    icon: "bi-shield-check",
    category: "Licensing",
    department: "Arms Branch",
    source: "content/content.docx; content/Departments and Mukhtiar kar.docx",
    description: "Guidance for General Arms Licence (Non-Prohibited Bore) applications.",
    overview: "Residents of Sindh can apply for a General Arms Licence for a non-prohibited bore weapon through the Arms Branch of the Deputy Commissioner's Office. Arms licences are issued under the arms policy of the Home Department, Government of Sindh, and within the monthly quota set for each district \u2014 50 licences per month for each Karachi district. Every application is scrutinised and verified by the police before a licence is issued. From time to time the Home Department may suspend the issuance of new licences, so please check that applications are open before you apply.",
    whoIntro: "Applicants must be residents of Sindh with a valid Sindh Domicile. According to the Home Department, Government of Sindh, applicants should be at least 25 years of age and physically and mentally fit. Residents of any district of Sindh may apply, subject to the prescribed procedure and the district quota. Applicants must appear in person for biometric verification.",
    docsIntro: "Bring your application addressed to the Deputy Commissioner, the completed application form with a recent photograph, a copy of your CNIC and Sindh Domicile, and proof of residence. Make sure that all copies are clear and that the details match your CNIC exactly, as any difference will delay verification.",
    procIntro: "After your application is scrutinised and approved for processing, it is sent for CRO and police verification. You will then be asked to appear for biometric verification and a photograph at the Arms Section, and to deposit the government fee through the prescribed National Bank of Pakistan challan. The licence is issued once all verification and formalities are complete.",
    note: "The government fee is Rs. 5,000, deposited through the prescribed National Bank of Pakistan challan. Processing time depends mainly on police verification. Please deal only with the Arms Branch counter and pay only through the official challan.",
    faq: [["Who can apply for an arms licence?", "Residents of Sindh with a valid Sindh Domicile who are at least 25 years old and physically and mentally fit, subject to the procedure and quota set by the Home Department."], ["How many licences are issued in District Central?", "Each Karachi district has a quota of 50 licences per month."], ["Do I need to appear in person?", "Yes. Applicants must appear for biometric verification and a photograph."], ["Are applications always open?", "No. The Home Department may suspend the issuance of new licences from time to time. Please check with the Arms Branch before applying."]],
    eligibility: ["Applicant must be a resident of Sindh Province and possess a valid Sindh Domicile.", "Residents of any district of Sindh may apply, subject to the prescribed procedure and quota.", "District Central Karachi quota: 50 licences per month."],
    documents: ["Application addressed to the Deputy Commissioner concerned", "Copy of CNIC", "Copy of Sindh Domicile", "Utility bill / proof of residence", "One recent passport-size photograph", "Duly filled application form"],
    procedure: ["Submit application to the Deputy Commissioner concerned", "Application scrutiny and approval", "CRO / Police Verification", "Applicant appears for biometric verification and photograph at the concerned Arms Section", "Deposit government fee through prescribed National Bank of Pakistan challan", "Licence issuance after verification, biometric, photograph, fee payment and all prescribed formalities"],
    fees: ["Government fee: Rs. 5,000/- through prescribed National Bank of Pakistan challan."],
    processing: "Processing time depends on CRO / police verification. Please ask the Arms Branch for the expected time.",
    where: "Arms Branch, Deputy Commissioner Office, District Central."
  },
  "revenue-certificate": {
    title: "Revenue Certificate",
    file: "revenue-certificate.html",
    icon: "bi-file-earmark-ruled",
    category: "Revenue Services",
    department: "Revenue Branch",
    source: "content/DC OFFICE CONTENT.docx; content/Departments and Mukhtiar kar.docx",
    description: "Revenue Certificate guidance through the Revenue Branch.",
    overview: "Revenue certificates are official certificates issued by the Revenue Branch of the DC Office on the basis of the district's land and revenue records. They are commonly needed for legal proceedings, banking and loan purposes, and other official work involving property in District Central. Because each certificate is issued only after the records have been checked, applicants should bring the supporting documents for their property or matter. The Revenue Branch works with the Mukhtiarkars of each sub-division, who maintain the land records.",
    whoIntro: "Owners of property in District Central, their legal heirs, and authorised representatives can apply for a revenue certificate. If you are applying on someone else's behalf, bring a signed authority letter and copies of both CNICs. Legal heirs should bring the legal heirship certificate.",
    docsIntro: "Bring a copy of your CNIC, copies of the title documents for the property (such as the registry, lease or allotment order), any previous record extract or mutation entry, and an application stating the certificate you need and its purpose. Please confirm the exact checklist with the Revenue Branch before visiting.",
    procIntro: "Submit your application at the Revenue Branch counter. The branch checks your documents and the official record, and where needed the Mukhtiarkar's staff verify the record or visit the site. The certificate is issued once the record has been confirmed, or you are told what further documents are needed.",
    note: "Please confirm any applicable fee at the Revenue Branch counter. Processing time depends on the condition of the record and on any field verification. Keep a copy of your application and the receipt you are given.",
    faq: [["Who issues revenue certificates?", "The Revenue Branch of the DC Office, District Central, which reports to ADC-I."], ["Can someone apply on my behalf?", "Yes, with a signed authority letter and copies of both CNICs."], ["Why does it take time?", "Each certificate is issued only after the land record has been checked, and some cases need field verification."]],
    eligibility: ["Residents and property owners of District Central who need a revenue certificate for official, legal or banking purposes."],
    documents: ["Applicants are advised to verify required supporting documents before visiting the facilitation counter."],
    procedure: ["Visit the facilitation counter", "Verify required supporting documents", "Submit application for branch scrutiny", "Department review and response"],
    fees: ["Please confirm any applicable fee at the Revenue Branch counter."],
    processing: "Processing time depends on complete documents and verification. Please ask at the counter for the expected time for your application.",
    where: "Revenue Branch, Deputy Commissioner Office, District Central."
  },
  "land-revenue": {
    title: "Land / Revenue Information",
    file: "land-revenue.html",
    icon: "bi-map",
    category: "Revenue Services",
    department: "Revenue Branch",
    source: "content/Functions and Powers of Deputy Commissioner.docx; content/Functions and Powers of Deputy Commissioner, ADC, AC, Mukhtiarkar.docx; content/Departments and Mukhtiar kar.docx",
    description: "Information related to land records, mutation, demarcation, revenue cases, government land and public revenue assistance.",
    overview: "The Revenue Branch, the Assistant Commissioners and the Mukhtiarkars deal with land records in District Central, including record of rights, mutation after sale, gift or inheritance, demarcation, and the protection of government land. This page explains how to seek information or action on a land matter.",
    eligibility: ["Owners, legal heirs and authorised representatives seeking information or action on land and revenue records in District Central."],
    documents: ["Copy of CNIC", "Copy of title documents (registry, lease or allotment)", "Previous record extract or mutation entry, if available", "Legal heirship certificate, where applicable", "Authority letter if applying on someone else's behalf"],
    procedure: ["Submit land or revenue enquiry to the relevant revenue office", "Revenue staff review records and supporting documents", "Field report or verification where required", "Proceeding or response under delegated authority"],
    fees: ["Please confirm any applicable fee at the Revenue Branch counter."],
    processing: "Depends on the type of matter and on field verification by revenue staff.",
    where: "Revenue Branch, Assistant Commissioners, Mukhtiarkars and field revenue staff as relevant."
  },
  "complaint-registration": {
    title: "Complaint Registration",
    file: "complaint-registration.html",
    icon: "bi-chat-left-text",
    category: "Citizen Support",
    department: "Complaint Cell / Control Room",
    source: "content/DC OFFICE CONTENT.docx; content/Departments and Mukhtiar kar.docx",
    description: "Citizens may submit complaints online or in person for review and follow-up through the relevant branch.",
    overview: "Every citizen has the right to raise a complaint about a public service or a matter within the jurisdiction of the District Administration Central. Complaints can be registered online through this website at any time, or in person at the Complaint Cell or Control Room of the DC Office during public hours. Each complaint is entered in the record, assigned to the branch or office responsible, and followed up by the Complaint Cell until it is resolved. The target response time is 48 hours on working days.",
    whoIntro: "Any citizen can register a complaint, whether about a service of the DC Office, a matter in your sub-division such as encroachment or overcharging, or a problem with another government department in the district. Complaints about other departments are referred to the department concerned and followed up by the General Branch.",
    docsIntro: "Give your full name, CNIC, mobile number and email address so that the office can contact you, and describe the matter clearly: what happened, where, when, and who is involved. Attach any photographs, receipts or documents that support your complaint. Complete details help the office act quickly.",
    procIntro: "Once registered, your complaint is assigned to the branch or officer responsible. The Complaint Cell follows it up until it is resolved, and you are informed of the outcome. If you are not satisfied with how your complaint was handled, you can raise it again with the Additional Deputy Commissioner-II.",
    note: "There is no fee for registering a complaint. Please give accurate information; false or abusive complaints may lead to action under the law. Your personal details are used only to process your complaint.",
    faq: [["How long will it take to get a response?", "The target response time is 48 hours on working days. Some matters need more time for inquiry, and you will be kept informed."], ["Can I complain about another department?", "Yes. Complaints about other departments are referred to the department concerned and followed up."], ["Is my information kept private?", "Your details are used only to process your complaint and are shared only with the office responsible for your matter."]],
    eligibility: ["Any citizen with a complaint about a public service or a matter within the jurisdiction of the District Administration Central."],
    documents: ["Full name", "CNIC number", "Mobile number", "Email address", "Subject", "Complaint details"],
    procedure: ["Submit complaint online or at the Complaint Cell / Control Room", "Complaint is reviewed and assigned to the relevant branch", "Follow-up continues through the complaint facilitation channel"],
    fees: ["No fee."],
    processing: "Response Time: 48 Hours.",
    where: "Complaint Cell / Control Room, Deputy Commissioner Office, District Central."
  },
  "price-list": {
    title: "Price List",
    file: "price-list.html",
    icon: "bi-tags",
    category: "Public Awareness",
    department: "District Administration / Assistant Commissioners",
    source: "content/DC OFFICE CONTENT.docx; content/Functions and Powers of Deputy Commissioner.docx",
    description: "Official district price lists are issued for public awareness and market monitoring.",
    overview: "To protect consumers, the District Administration Central publishes official price lists for essential commodities such as flour, milk, meat, vegetables and other daily items. The price list tells citizens the correct rates and gives traders a clear standard to follow. Assistant Commissioners and Mukhtiarkars inspect markets regularly across all five sub-divisions and take action against overcharging, hoarding and profiteering under the applicable laws. Special drives are carried out during Ramazan and other periods of high demand.",
    whoIntro: "The price list is public information for every resident, trader and shopkeeper in District Central. No application is needed to view it. Shopkeepers are expected to display the official price list in their shops.",
    docsIntro: "No documents are needed to view the price list. To report overcharging, note the shop name and exact location, the item, the price you were charged and the date and time, and keep any receipt. These details help the Assistant Commissioner's team take action quickly.",
    procIntro: "Price lists are issued for public awareness and market monitoring. Field teams led by the Assistant Commissioners and Mukhtiarkars inspect markets against the list, and fines or other action are taken where violations are found. Complaints from citizens are referred to the Assistant Commissioner of the area for inspection.",
    note: "There is no fee. You can report overcharging through the complaint form on this website or at the Assistant Commissioner's office of your sub-division.",
    faq: [["Where can I see the current price list?", "On this page, as soon as each list is notified by the Commissioner Karachi."], ["What should I do if a shop overcharges?", "Note the shop name, location, item and price, and report it through the complaint form or to your Assistant Commissioner's office."], ["Who checks the markets?", "Assistant Commissioners and Mukhtiarkars carry out regular inspections in every sub-division."]],
    eligibility: ["All citizens, traders and shopkeepers. The price list is public information and no application is needed."],
    documents: ["No documents are required.", "To report overcharging, give the shop name, location, item and price charged."],
    procedure: ["District price list is issued for public awareness", "Assistant Commissioners and Mukhtiarkars monitor markets", "Action may be taken against profiteering, hoarding and violations under applicable laws/rules"],
    fees: ["No fee."],
    processing: "Price lists are published as soon as they are notified. Overcharging complaints are referred to the Assistant Commissioner of the area for inspection.",
    where: "This page, and the Citizen Services section, for public reference."
  },

  "public-assistance": {
    title: "General Public Assistance",
    file: "public-assistance.html",
    icon: "bi-headset",
    category: "Citizen Support",
    department: "Deputy Commissioner Office",
    source: "content/DC OFFICE CONTENT.docx",
    description: "Public guidance for connecting with local authorities, departments, government schemes, social services, and complaint facilitation.",
    overview: "If you are not sure which office deals with your matter, the DC Office can guide you to the right branch, department or service. Visit the facilitation counter during public hours with your CNIC and any documents related to your matter.",
    eligibility: ["Any citizen who needs guidance on a public matter or is not sure which office deals with it."],
    documents: ["Original CNIC and any documents related to your matter."],
    procedure: ["Review relevant service information", "Contact the relevant branch or facilitation counter", "Submit complete details for guidance or follow-up"],
    fees: ["No fee."],
    processing: "Guidance is given at the counter on the same day. Matters needing action are referred to the relevant branch.",
    where: "Deputy Commissioner Office, Sector 15-A/1, Buffer Zone, Karachi."
  }
};

const serviceOrder = Object.keys(servicePages);

function linkFor(key) {
  return servicePages[key].file;
}

function header(current) {
  return `
    <header class="site-header">
      <div class="top-gov-bar"><div class="container-fluid px-lg-5"><div class="d-flex flex-wrap align-items-center justify-content-between gap-2"><div class="d-flex flex-wrap align-items-center gap-3"><span><i class="bi bi-shield-check"></i> Government of Sindh</span><span class="d-none d-md-inline"><i class="bi bi-patch-check"></i> Official Government Website</span></div><div class="d-flex flex-wrap align-items-center gap-3"><span><i class="bi bi-clock"></i> Mon-Fri 9:00 AM - 5:00 PM</span><a href="tel:1122"><i class="bi bi-telephone"></i> Emergency Contact</a><button class="top-link lang-soon" type="button" title="Urdu and Sindhi versions are coming soon">Urdu</button><button class="top-link" type="button" aria-label="Search"><i class="bi bi-search"></i></button></div></div></div></div>
      <div class="main-header"><div class="container-fluid px-lg-5"><div class="row align-items-center g-3"><div class="col-lg-4"><a class="brand-lockup" href="index.html" aria-label="District Central Karachi home"><span class="gov-logo"><img src="images/sindh-govt-logo.png" alt="Government of Sindh logo"></span><span><strong>District Central Karachi</strong><small>Government of Sindh</small></span></a></div><div class="col-lg-5"><form class="header-search" role="search"><i class="bi bi-search"></i><input type="search" placeholder="Search services, departments, notices..." aria-label="Search portal"><button type="submit">Search</button></form></div><div class="col-lg-3"><div class="header-actions"><a href="https://www.facebook.com/deputycommissionerCentral" target="_blank" rel="noopener" aria-label="Facebook"><i class="bi bi-facebook"></i></a><a href="https://www.instagram.com/dcentralkarachi/" target="_blank" rel="noopener" aria-label="Instagram"><i class="bi bi-instagram"></i></a><span class="social-soon" title="YouTube account coming soon" aria-label="YouTube (coming soon)"><i class="bi bi-youtube"></i></span><a class="complaint-btn" href="complaint-registration.html"><i class="bi bi-chat-square-text"></i> Complaint</a></div></div></div></div></div>
      <nav class="navbar navbar-expand-xl sticky-nav"><div class="container-fluid px-lg-5"><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#portalNav" aria-controls="portalNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="portalNav"><ul class="navbar-nav mx-auto">
        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="about.html">About District</a></li>
        <li class="nav-item"><a class="nav-link" href="deputy-commissioner.html">Deputy Commissioner</a></li>
        <li class="nav-item dropdown position-static"><a class="nav-link dropdown-toggle active" href="citizen-services.html" data-bs-toggle="dropdown">Citizen Services</a><div class="dropdown-menu mega-menu"><div class="mega-grid wide">${serviceOrder.map((key) => `<a href="${linkFor(key)}">${servicePages[key].title}</a>`).join("")}</div></div></li>
        <li class="nav-item"><a class="nav-link" href="branches.html">Branches</a></li>
        <li class="nav-item"><a class="nav-link" href="news.html">News</a></li>
        <li class="nav-item dropdown position-static"><a class="nav-link dropdown-toggle" href="directory.html" data-bs-toggle="dropdown">Directory</a><div class="dropdown-menu mega-menu"><div class="mega-grid wide dir-menu"><a href="css-corner.html"><i class="bi bi-star-fill"></i> CSS Corner</a><a href="academic-institutions.html"><i class="bi bi-mortarboard"></i> Academic Institutions</a><a href="libraries.html"><i class="bi bi-book"></i> Libraries</a><a href="health.html"><i class="bi bi-hospital"></i> Hospitals &amp; Health</a><a href="sports.html"><i class="bi bi-trophy"></i> Sports</a><a href="parks.html"><i class="bi bi-tree"></i> Parks</a><a href="entertainment.html"><i class="bi bi-bag"></i> Entertainment &amp; Shopping</a><a href="emergency-safety.html"><i class="bi bi-shield-plus"></i> Emergency &amp; Safety</a><a href="monsoon.html"><i class="bi bi-cloud-rain-heavy"></i> Monsoon</a><a href="markets-commerce.html"><i class="bi bi-shop"></i> Markets &amp; Commerce</a><a href="union-committees.html"><i class="bi bi-diagram-3"></i> Union Committees</a><a href="personalities.html"><i class="bi bi-person-badge"></i> Personalities</a><a href="directory.html"><i class="bi bi-grid-3x3-gap"></i> All Directory</a></div></div></li><li class="nav-item"><a class="nav-link${current === "price-list" ? " active" : ""}" href="price-list.html">Price List</a></li><li class="nav-item"><a class="nav-link" href="initiatives.html">Initiatives</a></li>
        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
      </ul></div></div></nav>
    </header>`;
}

function footer() {
  return `<footer class="site-footer" id="contact"><div class="container"><div class="row g-4"><div class="col-lg-4"><a class="brand-lockup footer-brand" href="index.html"><span class="gov-logo"><img src="images/sindh-govt-logo.png" alt="Government of Sindh logo"></span><span><strong>District Central Karachi</strong><small>Government of Sindh</small></span></a><p>Official district portal for public information, citizen services, administrative updates, and complaint facilitation.</p></div><div class="col-6 col-lg-2"><h3>Quick Links</h3><a href="about.html">About</a><a href="news.html">News</a><a href="initiatives.html">Initiatives</a></div><div class="col-6 col-lg-2"><h3>Branches</h3><a href="revenue.html">Revenue</a><a href="accounts-branch.html">Accounts</a><a href="it-cell.html">IT Cell</a><a href="complaint-cell.html">Complaint Cell</a></div><div class="col-6 col-lg-2"><h3>Services</h3><a href="domicile.html">Domicile</a><a href="prc.html">PRC</a><a href="noc.html">NOC</a><a href="price-list.html">Price List</a></div><div class="col-6 col-lg-2"><h3>Important</h3><a href="privacy-policy.html">Privacy Policy</a><a href="terms-of-use.html">Terms of Use</a> <a href="sitemap.html">Sitemap</a><a href="complaint-registration.html">Complaint</a><a href="contact.html">Contact</a></div></div><div class="footer-bottom"><span>Copyright 2026 District Central Karachi. All rights reserved.</span><span class="footer-gov-mark"><img src="images/sindh-govt-logo.png" alt="Government of Sindh"> Official Government Website</span></div></div></footer><button class="back-to-top" id="backToTop" aria-label="Back to top"><i class="bi bi-arrow-up"></i></button>`;
}

function list(items) {
  return `<div class="checklist">${items.map((item) => `<div class="mini-panel"><i class="bi bi-check-circle"></i><strong>${item}</strong></div>`).join("")}</div>`;
}

function related(current) {
  return serviceOrder.filter((key) => key !== current).slice(0, 4).map((key) => {
    const service = servicePages[key];
    return `<div class="col-md-6 col-lg-3"><article class="dept-card h-100"><i class="bi ${service.icon}"></i><h3>${service.title}</h3><p>${service.category}</p><a class="btn btn-primary-gradient" href="${service.file}">View Details</a></article></div>`;
  }).join("");
}

function priceListsSection() {
  const P = window.DC_PRICES;
  const fmt = (d) => new Date(d + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  return `<section class="section" id="todays-prices"><div class="container"><div class="section-heading"><span class="section-kicker">Official Rates</span><h2>Today's Notified Price Lists</h2><p>These are the official prices notified by the Commissioner Karachi (Bureau of Supply &amp; Prices) for the whole of Karachi Division, including District Central. Select a list to open it full size. Last updated ${fmt(P.updated)}.</p></div>
  <div class="row g-4">${P.lists.map((l) => `<div class="col-sm-6 col-lg-4 col-xl"><article class="price-card h-100"><a href="${l.image}" target="_blank" rel="noopener" class="price-thumb"><img src="${l.image}?v=${P.updated}" alt="Official price list for ${l.title}" loading="lazy"></a><div class="p-3"><h3>${l.title}</h3><p class="mb-2">${l.desc}</p><span class="dir-badge ${l.standing ? "private" : "govt"}">${l.standing ? "In force until further orders" : "Dated " + fmt(l.date)}</span><div class="mt-2"><a class="btn btn-outline-primary btn-sm" href="${l.image}" target="_blank" rel="noopener"><i class="bi bi-arrows-fullscreen"></i> Open full size</a></div></div></article></div>`).join("")}</div>
  <div class="price-help mt-4"><p class="mb-1"><strong>Being overcharged?</strong> Report it to the Commissioner's Control Room on <a href="tel:1299">1299</a>, WhatsApp <a href="https://wa.me/923160111712" target="_blank" rel="noopener">0316-0111712</a>, the complaint portal <a href="https://www.ckcmsgov.com" target="_blank" rel="noopener">ckcmsgov.com</a>, or the <a href="complaint-registration.html">DC Central complaint form</a>.</p><p class="mb-0 text-muted small">Source: <a href="${P.source}" target="_blank" rel="noopener">Commissioner Karachi Office on Facebook</a>. Lists are published daily for fruit, vegetables and chicken.</p></div></div></section>`;
}

function servicePage(key) {
  const service = servicePages[key];
  document.title = `${service.title} | District Central Karachi`;
  document.querySelector('meta[name="description"]')?.setAttribute("content", `${service.title} service information for District Central Karachi.`);
  return `${header(key)}<main>
    <div class="breadcrumb-band"><div class="container"><nav aria-label="breadcrumb"><ol class="breadcrumb"><li class="breadcrumb-item"><a href="index.html">Home</a></li><li class="breadcrumb-item"><a href="citizen-services.html">Citizen Services</a></li><li class="breadcrumb-item active" aria-current="page">${service.title}</li></ol></nav></div></div>
    <section class="hero-section page-hero"><div class="hero-bg placeholder-image"></div><div class="hero-overlay"></div><div class="container-fluid px-lg-5 hero-content"><div class="row align-items-center min-vh-hero"><div class="col-xl-7 col-lg-8" data-aos="fade-up"><span class="hero-badge"><i class="bi bi-stars"></i> ${service.category}</span><h1>${service.title}</h1><p>${service.description}</p><div class="hero-buttons"><a class="btn btn-primary-gradient" href="#requirements">View Requirements</a><a class="btn btn-outline-light" href="#contact-card">Contact Department</a></div></div></div></div></section>
    <!-- Source: ${service.source} -->
    <section class="section"><div class="container"><div class="row g-5 align-items-center"><div class="col-lg-5"><div class="dc-portrait placeholder-image image-zoom"><i class="bi ${service.icon}"></i><span class="visually-hidden">${service.title}</span></div></div><div class="col-lg-7"><span class="section-kicker">Service Overview</span><h2>${service.title}</h2><p>${service.overview || service.description}</p><div class="row g-3"><div class="col-md-6"><div class="mini-panel"><i class="bi bi-building"></i><strong>Department</strong><span>${service.department}</span></div></div><div class="col-md-6"><div class="mini-panel"><i class="bi bi-grid"></i><strong>Category</strong><span>${service.category}</span></div></div></div></div></div></div></section>
    ${key === "price-list" && window.DC_PRICES ? priceListsSection() : ""}
    ${key === "complaint-registration" && window.complaintFormSection ? complaintFormSection() : ""}
    ${service.online ? `<section class="section" id="apply-online"><div class="container"><article class="feature-card" data-aos="fade-up"><div class="placeholder-image"><i class="bi bi-phone"></i></div><div><span class="section-kicker">Apply Online</span><h2>Sindh Domicile Portal</h2><p>The Government of Sindh launched the e-Domicile and PRC Portal on 17 November 2026, so that residents of Karachi can apply for Domicile and Permanent Residence Certificates from home, without queues or repeated visits to government offices. Applications made online are sent to the Deputy Commissioner's office of the applicant's district, where the documents are examined and each case is decided after verification.</p><p>To apply, download the Sindh Domicile Portal app or open the portal website, register with your CNIC number, verify your identity, upload your documents, and pay the fee online or through a bank challan. You can then track your application and receive notifications at every stage until a decision is made. Certificates issued through the portal are kept in a central digital record, which authorised institutions can verify online.</p><div class="row g-3">${[["bi-ui-checks", "Apply for Domicile, PRC-D and PRC-C", "One guided application for the Domicile Certificate and the District and City Permanent Residence Certificates."], ["bi-person-bounding-box", "Verify your identity", "Confirm your identity securely within the app before you submit."], ["bi-camera", "Upload documents", "Upload your CNIC, photographs and proof of residence directly from your phone."], ["bi-credit-card", "Pay online or by challan", "Pay the prescribed fee online or through a bank challan."], ["bi-bell", "Track your status", "Follow your application in real time and receive notifications at each stage."], ["bi-shield-lock", "Secure login", "Log in with your CNIC number and password, with OTP verification."]].map(([icon, title, text]) => `<div class="col-md-6"><div class="mini-panel"><i class="bi ${icon}"></i><strong>${title}</strong><span>${text}</span></div></div>`).join("")}</div><div class="hero-buttons mt-3"><a class="btn btn-primary-gradient" href="${service.online.app}" target="_blank" rel="noopener"><i class="bi bi-apple"></i> Download on the App Store</a><a class="btn btn-primary-gradient" href="${service.online.play}" target="_blank" rel="noopener"><i class="bi bi-google-play"></i> Get it on Google Play</a><a class="btn btn-outline-primary" href="${service.online.portal}" target="_blank" rel="noopener">Visit the Portal Website</a></div></div></div></article></div></section>` : ""}
    ${key !== "price-list" ? `<section class="section muted-section"><div class="container"><div class="section-heading"><span class="section-kicker">Eligibility</span><h2>Who Can Apply</h2>${service.whoIntro ? `<p>${service.whoIntro}</p>` : ""}</div>${list(service.eligibility)}</div></section>` : ""}
    <section class="section" id="requirements"><div class="container"><div class="section-heading"><span class="section-kicker">Documents</span><h2>Required Documents</h2>${service.docsIntro ? `<p>${service.docsIntro}</p>` : ""}</div>${list(service.documents)}</div></section>
    <section class="section muted-section"><div class="container"><div class="section-heading"><span class="section-kicker">Procedure</span><h2>Application Procedure</h2>${service.procIntro ? `<p>${service.procIntro}</p>` : ""}</div><div class="timeline-list">${service.procedure.map((step, index) => `<article class="timeline-card"><span class="section-kicker">Step ${String(index + 1).padStart(2, "0")}</span><h3>${step}</h3></article>`).join("")}</div></div></section>
    <section class="section"><div class="container">${service.note ? `<div class="section-heading"><span class="section-kicker">Before You Apply</span><h2>Fees, Timelines and Where to Apply</h2><p>${service.note}</p></div>` : ""}<div class="row g-4"><div class="col-lg-4"><article class="dept-card h-100"><i class="bi bi-cash-stack"></i><h3>Fees / Charges</h3>${service.fees.map((fee) => `<p>${fee}</p>`).join("")}</article></div><div class="col-lg-4"><article class="dept-card h-100"><i class="bi bi-clock-history"></i><h3>Processing Information</h3><p>${service.processing}</p></article></div><div class="col-lg-4"><article class="dept-card h-100"><i class="bi bi-geo-alt"></i><h3>Where to Apply</h3><p>${service.where}</p></article></div></div></div></section>
    <section class="section"><div class="container"><div class="section-heading"><span class="section-kicker">Related</span><h2>Related Services</h2></div><div class="row g-4">${related(key)}</div></div></section>
    <section class="section muted-section"><div class="container"><div class="section-heading"><span class="section-kicker">FAQ</span><h2>Frequently Asked Questions</h2></div><div class="accordion help-accordion" id="serviceFaq">${(service.faq || [["Which department handles this service?", service.department], ["Are official forms available online?", "Application forms are available at the facilitation counter of the DC Office, District Central."]]).map(([q, a], n) => `<div class="accordion-item"><h4 class="accordion-header" id="sfaqH${n}"><button class="accordion-button ${n ? "collapsed" : ""}" type="button" data-bs-toggle="collapse" data-bs-target="#sfaqC${n}" aria-expanded="${n ? "false" : "true"}" aria-controls="sfaqC${n}">${q}</button></h4><div id="sfaqC${n}" class="accordion-collapse collapse ${n ? "" : "show"}" aria-labelledby="sfaqH${n}" data-bs-parent="#serviceFaq"><div class="accordion-body">${a}</div></div></div>`).join("")}</div></div></div></section>
    <section class="complaint-cta"><div class="container"><div class="cta-panel"><div><span class="section-kicker">Need Help?</span><h2>Can't find the information you need?</h2><p>Use the district facilitation channels for guidance or complaint follow-up.</p></div><div class="cta-actions"><a class="btn btn-primary-gradient" href="complaint-registration.html">Submit Complaint</a><a class="btn btn-outline-primary" href="#contact-card">Contact District Office</a><a class="btn btn-outline-primary" href="citizen-services.html">Back to Citizen Services</a></div></div></div></section>
    <section class="section pt-0" id="contact-card"><div class="container"><article class="contact-card"><span class="section-kicker">Office Details</span><h2>District Central Contact Card</h2><p><strong>Address:</strong> Deputy Commissioner Office, Sector 15-A/1, Buffer Zone, Karachi, 74600</p><p><strong>Public Hours:</strong> Monday to Friday, 9:00 AM - 5:00 PM</p></article></div></section>
  </main>${footer()}`;
}

document.addEventListener("DOMContentLoaded", function () {
  const root = document.getElementById("servicePage");
  if (!root) return;
  root.innerHTML = servicePage(root.dataset.service);
  if (window.AOS) AOS.refreshHard();
});
