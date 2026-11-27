  const officerPages = {
    "deputy-commissioner": {
      title: "Deputy Commissioner",
      subtitle: "Official District Central Karachi Administration",
      designation: "Deputy Commissioner",
      icon: "bi-person-vcard"
    },
    "adc-1": {
      title: "ADC-I",
      subtitle: "Official District Central Karachi Administration",
      designation: "Additional Deputy Commissioner-I",
      icon: "bi-person-badge"
    },
    "adc-2": {
      title: "ADC-II",
      subtitle: "Official District Central Karachi Administration",
      designation: "Additional Deputy Commissioner-II",
      icon: "bi-person-badge"
    },
    "ac-1": {
      title: "Assistant Commissioner",
      subtitle: "Sub-Division Administration",
      designation: "Assistant Commissioner, Sub-Division Liaquatabad",
      icon: "bi-person-workspace"
    },
    "ac-2": {
      title: "Assistant Commissioner",
      subtitle: "Sub-Division Administration",
      designation: "Assistant Commissioner, Sub-Division Gulberg",
      icon: "bi-person-workspace"
    },
    "ac-3": {
      title: "Assistant Commissioner",
      subtitle: "Sub-Division Administration",
      designation: "Assistant Commissioner, Sub-Division Nazimabad",
      icon: "bi-person-workspace"
    },
    "ac-4": {
      title: "Assistant Commissioner",
      subtitle: "Sub-Division Administration",
      designation: "Assistant Commissioner, Sub-Division North Nazimabad",
      icon: "bi-person-workspace"
    },
    "ac-5": {
      title: "Assistant Commissioner",
      subtitle: "Sub-Division Administration",
      designation: "Assistant Commissioner, Sub-Division New Karachi",
      icon: "bi-person-workspace"
    },
    "mukhtiarkar-liaquatabad": {
      title: "Mukhtiarkar",
      subtitle: "Sub-Division Revenue Office",
      designation: "Mukhtiarkar Liaquatabad",
      icon: "bi-person-workspace"
    },
    "mukhtiarkar-gulberg": {
      title: "Mukhtiarkar",
      subtitle: "Sub-Division Revenue Office",
      designation: "Mukhtiarkar Gulberg",
      icon: "bi-person-workspace"
    },
    "mukhtiarkar-nazimabad": {
      title: "Mukhtiarkar",
      subtitle: "Sub-Division Revenue Office",
      designation: "Mukhtiarkar Nazimabad",
      icon: "bi-person-workspace"
    },
    "mukhtiarkar-north-nazimabad": {
      title: "Mukhtiarkar",
      subtitle: "Sub-Division Revenue Office",
      designation: "Mukhtiarkar North Nazimabad",
      icon: "bi-person-workspace"
    },
    "mukhtiarkar-new-karachi": {
      title: "Mukhtiarkar",
      subtitle: "Sub-Division Revenue Office",
      designation: "Mukhtiarkar New Karachi",
      icon: "bi-person-workspace"
    },
    "superintendent-revenue": {
      title: "Office Superintendent",
      subtitle: "Official District Central Karachi Administration",
      designation: "Office Superintendent (Revenue)",
      icon: "bi-person-badge"
    },
    "ac-6": {
      title: "Assistant Commissioner",
      subtitle: "Sub-Division Administration",
      designation: "Assistant Commissioner (Revenue), District Central",
      icon: "bi-person-workspace"
    }
  };

  const branches = [
      [
          "bi-bank",
          "Revenue Branch",
          "In-charge: Mr. Sajid. Revenue administration is one of the principal statutory functions associated with the Deputy Commissioner / Collector in Sindh.",
          "revenue.html"
      ],
      [
          "bi-cash-stack",
          "Accounts Branch",
          "In-charge: Mr. Mazhar Shamshad. The Accounts Branch manages the financial administration of the Deputy Commissioner's Office.",
          "accounts-branch.html"
      ],
      [
          "bi-building",
          "General Branch",
          "In-charge: Mr. Khalid Jameel, Assistant. The General Branch deals with a wide range of public matters: complaints about other departments, local government issues, election and census work, rain emergencies and disaster response, price checking, and financial assistance and compensation cases.",
          "general-branch.html"
      ],
      [
          "bi-scale",
          "Judicial Branch",
          "In-charge: Mr. Naseem. The Judicial Branch handles law-and-order matters and issues NOCs, licences and declarations within District Central, including NOCs for petrol pumps, CNG stations, public gatherings and marriage functions, and petroleum, fireworks and hotel licences.",
          "judicial-branch.html"
      ],
      [
          "bi-people",
          "Establishment Branch",
          "In-charge: Mr. Zubair Aftab. The Establishment Branch manages staff matters of the district administration: personal files of non-gazetted staff, appointments, transfers, postings and service matters, together with correspondence on government directions and Assembly questions.",
          "establishment-branch.html"
      ],
      [
          "bi-file-earmark-person",
          "Domicile / PRC Branch",
          "In-charge: Mr. Farooq Afzal, Senior Clerk. The Domicile / PRC Branch issues and keeps records of Domicile Certificates and Permanent Resident Certificates for residents of District Central, and verifies certificates when requested.",
          "domicile-branch.html"
      ],
      [
          "bi-shield-check",
          "Arms Branch",
          "In-charge: Syed Rooh Ul Ameen. The Arms Branch processes new arms licence applications for residents of District Central, in line with the procedure and quota set by the Government of Sindh.",
          "arms-branch.html"
      ],
      [
          "bi-briefcase",
          "P.A. Branch of ADC-I",
          "In-charge: Mr. Farhat Mirza, Assistant. The P.A.",
          "pa-branch.html"
      ],
      [
          "bi-heart",
          "Benevolent Fund Branch",
          "In-charge: Mr. Shahid Hussain, Senior Clerk. The Benevolent Fund Branch processes Benevolent Fund cases for government employees and their families, and handles related correspondence on government directions and Assembly questions.",
          "benevolent-fund.html"
      ],
      [
          "bi-envelope-paper",
          "R & I Branch (Receipt & Issue)",
          "In-charge: Mr. Sarwar, Senior Clerk. The Receipt & Issue (R & I) Branch receives all incoming correspondence of the DC Office and dispatches outgoing letters, making sure every letter reaches the right office.",
          "ri-branch.html"
      ],
      [
          "bi-broadcast",
          "Control Room",
          "In-charge: Mr. Ghulam Hussain and Mr. Shoukat. The Control Room operates the district's wireless network and acts as the operational desk of the Complaint Cell, providing round-the-clock coordination and monitoring, especially during emergencies.",
          "control-room.html"
      ],
      [
          "bi-cpu",
          "IT Cell",
          "The IT Cell manages the district's website, digital services and data systems, and supports the office's technology infrastructure.",
          "it-cell.html"
      ],
      [
          "bi-chat-left-text",
          "Complaint Cell",
          "The Complaint Cell registers, tracks and follows up citizen complaints submitted online or in person, working with the relevant branch until each complaint is resolved.",
          "complaint-cell.html"
      ],
      [
          "bi-megaphone",
          "Public Relations",
          "Public Relations manages press updates, public awareness campaigns and media coordination for the Deputy Commissioner's Office, including the district's social media pages.",
          "public-relations.html"
      ]
  ];

  const officerContent = {
    "deputy-commissioner": {
      name: "Taha Saleem (PAS)",
      kicker: "Deputy Commissioner Profile",
      message: "It is an honor to serve as the Deputy Commissioner of District Central, Karachi, a district that stands at the heart of the city's civic and economic life. My commitment remains steadfast: to ensure transparent governance, efficient public service delivery, and swift redressal of citizen grievances for every resident of District Central. Under the guidance of the Commissioner Karachi and the Government of Sindh, we are working to strengthen revenue administration, streamline the issuance of Domicile and Permanent Resident Certificates, improve market price monitoring, and expand digital facilitation across all branches of this office.",
      bio: "Taha Saleem is an officer of the Pakistan Administrative Service (PAS) and took charge as Deputy Commissioner, District Central on 8 September 2024. As head of the district administration and Collector of the district, he oversees civil administration, revenue, law-and-order coordination, price control, disaster management and the delivery of public services across District Central's five sub-divisions. He works under the direction of the Commissioner Karachi and the Government of Sindh, and leads the Additional Deputy Commissioners, Assistant Commissioners, Mukhtiarkars and the branches of the DC Office.",
      roles: ["Principal district-level representative of the Provincial Government", "Overall coordination of district administration and line departments", "Revenue administration as Collector under the Sindh Land Revenue Act, 1967", "Law-and-order coordination with police and allied agencies", "District Disaster Management Authority and relief coordination", "Price control, anti-hoarding, and essential commodity monitoring", "Election, census, polio, encroachment, traffic plan, and special-event duties", "Issuance of Domicile and PRC to district residents"]
    },
    "adc-1": {
      name: "Mr. Muhammad Asim Abbasi (Ex-PCS)",
      kicker: "Additional Deputy Commissioner-I",
      message: "As Additional Deputy Commissioner-I, this office supports the Deputy Commissioner in establishment matters, revenue administration, accounts, Domicile/PRC facilitation, the P.A. Branch of ADC-I, and Arms Branch functions.",
      bio: "Mr. Muhammad Asim Abbasi (Ex-PCS) has served as Additional Deputy Commissioner-I, District Central since 4 July 2024. Working under the general supervision of the Deputy Commissioner, the ADC-I oversees the Establishment, Revenue, Accounts, Domicile/PRC, Arms and P.A. branches of the DC Office. The office supervises staff and revenue records, the issuance of Domicile and Permanent Resident Certificates and arms licence processing, and acts on the Deputy Commissioner's behalf when assigned.",
      roles: ["Assist the DC in overall district administration", "Supervise assigned revenue matters and records", "Coordinate establishment and accounts branch work", "Support Domicile/PRC facilitation", "Coordinate price-control and anti-profiteering work where authorized", "Assist in disaster management and emergency response", "Monitor government instructions and submit reports", "Hear and dispose of delegated complaints"]
    },
    "adc-2": {
      name: "Mr. Rizwan Alam (PMS)",
      kicker: "Additional Deputy Commissioner-II",
      message: "As Additional Deputy Commissioner-II, this office oversees judicial coordination, general administration, Benevolent Fund matters, R&I, Control Room coordination, and district complaint-handling functions.",
      bio: "Mr. Rizwan Alam, an officer of the Provincial Management Service (PMS), has served as Additional Deputy Commissioner-II, District Central since 30 September 2026. The ADC-II supports the Deputy Commissioner in law-and-order coordination and oversees the Judicial, General, Benevolent Fund and R&I branches, the Control Room and the Complaint Cell. The office handles NOCs and licences issued through the Judicial Branch, arrangements for major public events, and the follow-up of public complaints.",
      roles: ["Assist the DC in maintaining law and order", "Coordinate with Police, Rangers, and other law-enforcement agencies", "Participate in law-and-order meetings and monitor decisions", "Assist arrangements for processions, public gatherings, religious events, and sensitive occasions", "Handle assigned magisterial or legal functions where conferred by law", "Conduct inspections and fact-finding inquiries when directed", "Coordinate with local government and municipal institutions", "Follow up public complaints and administrative issues"]
    },
    "ac-1": { name: "Dr. Saira Khan (PMS)", kicker: "Assistant Commissioner Liaquatabad", message: "It is my privilege to serve as Assistant Commissioner Liaquatabad, working closely with residents to ensure efficient administrative facilitation, timely grievance redressal, and coordinated municipal support across the sub-division.", bio: "Dr. Saira Khan, an officer of the Provincial Management Service (PMS), has served as Assistant Commissioner Liaquatabad since 30 September 2025. She also serves as Polio Focal Person for District Central and oversees public school administration. As the Deputy Commissioner's representative in the sub-division, the Assistant Commissioner supervises revenue work through the Mukhtiarkar, carries out price control and anti-encroachment action, and hears public complaints.", roles: ["Sub-divisional field administration", "Revenue administration within Liaquatabad", "Price control and market monitoring", "Public grievance review", "Polio campaign coordination", "Municipal coordination", "Field inspections", "Other duties assigned by DC/Government"] },
    "ac-2": { name: "Mr. Umar Iqbal (PAS)", kicker: "Assistant Commissioner Gulberg", message: "It is an honor to serve as Assistant Commissioner Gulberg. My priority is accessible administrative services, effective coordination with local authorities, and prompt resolution of citizen concerns across Gulberg Town.", bio: "Mr. Umar Iqbal, an officer of the Pakistan Administrative Service (PAS), has served as Assistant Commissioner Gulberg since 18 November 2026. As the Deputy Commissioner's representative in Gulberg sub-division, the Assistant Commissioner supervises revenue work through the Mukhtiarkar, coordinates with the police and local government on civic issues, carries out price control and anti-encroachment action, and hears public complaints.", roles: ["Revenue administration within Gulberg", "Land and revenue matters", "Law-and-order coordination", "Price control and market monitoring", "Anti-encroachment support", "Government department coordination", "Disaster management support", "Public grievance handling"] },
    "ac-3": { name: "Ms. Rabia Syed (PMS)", kicker: "Assistant Commissioner Nazimabad", message: "It is a privilege to serve as Assistant Commissioner Nazimabad, working to strengthen public facilitation, revenue coordination, and civic administration for the residents of Nazimabad Town.", bio: "Ms. Rabia Syed, an officer of the Provincial Management Service (PMS), has served as Assistant Commissioner Nazimabad since 8 June 2026. As the Deputy Commissioner's representative in Nazimabad sub-division, the Assistant Commissioner supervises land-record proceedings through the Mukhtiarkar, inspects markets, coordinates with line departments on local issues and reports to the district administration.", roles: ["Revenue administration within Nazimabad", "Mutation, partition, demarcation, and authorized land-record proceedings", "Public order coordination", "Market inspections", "Coordination with line departments", "Development and municipal coordination", "Field assessments", "Reports to district administration"] },
    "ac-4": { name: "Mr. Naimat Ullah Chachar (PMS)", kicker: "Assistant Commissioner North Nazimabad", message: "It is my responsibility, as Assistant Commissioner North Nazimabad, to ensure residents receive timely administrative facilitation, effective market monitoring, and responsive local governance.", bio: "Mr. Naimat Ullah Chachar, an officer of the Provincial Management Service (PMS), has served as Assistant Commissioner North Nazimabad since 20 June 2026. As the Deputy Commissioner's representative in North Nazimabad sub-division, the Assistant Commissioner supervises revenue work, leads market monitoring and action against hoarding and overcharging, protects public land and reviews citizens' complaints.", roles: ["Revenue supervision", "Market monitoring", "Anti-hoarding and anti-profiteering coordination", "Public property and encroachment support", "Local government coordination", "Emergency response support", "Citizen complaint review", "Field inspections"] },
    "ac-5": { name: "Capt (R) Fareed Haneef (PAS)", kicker: "Assistant Commissioner New Karachi", message: "It is an honor to serve as Assistant Commissioner New Karachi. Drawing on a background of disciplined public service, I am committed to maintaining law-and-order coordination, efficient administrative facilitation, and responsive governance for the residents of New Karachi Town.", bio: "Capt (R) Fareed Haneef, an officer of the Pakistan Administrative Service (PAS), has served as Assistant Commissioner New Karachi since 23 September 2025. As the Deputy Commissioner's representative in New Karachi sub-division, the Assistant Commissioner supervises revenue and land records, coordinates law-and-order arrangements with the police, carries out price control and anti-encroachment operations, and leads local disaster response.", roles: ["Sub-divisional administration in New Karachi", "Revenue and land-record supervision", "Law-and-order coordination", "Price control operations", "Anti-encroachment support", "Disaster management", "Public grievances", "Elections and government exercises"] },
    "ac-6": { name: "Assistant Commissioner Revenue", kicker: "District Central", message: "As Assistant Commissioner Revenue, my office supports the Deputy Commissioner in revenue administration across District Central: land records, revenue cases, protection of government land and public facilitation on revenue matters. We aim to deal with every citizen's revenue matter fairly, transparently and on time.", bio: "The Assistant Commissioner (Revenue) supports the Deputy Commissioner and the ADC-I in revenue administration across District Central. The office supervises land records, mutation, demarcation and revenue cases within delegated powers, protects government land, and guides citizens on revenue procedures and certificates.", roles: ["Administrative Leadership", "District Governance", "Public Services", "Law & Order Coordination", "Revenue Administration", "Development Oversight", "Citizen Welfare", "Disaster Management"] },
    "mukhtiarkar-liaquatabad": { name: "Mr. Abdul Hafeez Narejo", kicker: "Mukhtiarkar Liaquatabad", message: "The Mukhtiarkar office Liaquatabad is the revenue office closest to the residents of Liaquatabad. It maintains land records, processes mutation and demarcation, prepares verification reports for certificates such as Domicile and PRC, and works under the Assistant Commissioner Liaquatabad to resolve citizens' revenue matters fairly and on time.", bio: "Mr. Abdul Hafeez Narejo has served as Mukhtiarkar Liaquatabad since 13 April 2025. The Mukhtiarkar heads the revenue office of Liaquatabad sub-division, working under the Assistant Commissioner Liaquatabad and the Deputy Commissioner. The office maintains land records, processes mutation and demarcation, and prepares the Mukhtiarkar's report required for Domicile, PRC and other certificates.", roles: ["Land Record Maintenance", "Mutation (Dakhil-Kharij)", "Demarcation and Measurement", "Revenue Court Cases", "Government Land Protection", "Certificate Verification Reports", "Supervision of Field Staff", "Assigned Public Duties"] },
    "mukhtiarkar-gulberg": { name: "Mr. Piyas Ali Pitafi", kicker: "Mukhtiarkar Gulberg", message: "The Mukhtiarkar office Gulberg is the revenue office closest to the residents of Gulberg. It maintains land records, processes mutation and demarcation, prepares verification reports for certificates such as Domicile and PRC, and works under the Assistant Commissioner Gulberg to resolve citizens' revenue matters fairly and on time.", bio: "Mr. Piyas Ali Pitafi is the Mukhtiarkar of Gulberg sub-division. The Mukhtiarkar heads the revenue office of Gulberg, working under the Assistant Commissioner Gulberg and the Deputy Commissioner. The office maintains land records, processes mutation and demarcation, and prepares the Mukhtiarkar's report required for Domicile, PRC and other certificates.", roles: ["Land Record Maintenance", "Mutation (Dakhil-Kharij)", "Demarcation and Measurement", "Revenue Court Cases", "Government Land Protection", "Certificate Verification Reports", "Supervision of Field Staff", "Assigned Public Duties"] },
    "mukhtiarkar-nazimabad": { name: "Mr. Saeed Ahmed Kohaao", kicker: "Mukhtiarkar Nazimabad", message: "The Mukhtiarkar office Nazimabad is the revenue office closest to the residents of Nazimabad. It maintains land records, processes mutation and demarcation, prepares verification reports for certificates such as Domicile and PRC, and works under the Assistant Commissioner Nazimabad to resolve citizens' revenue matters fairly and on time.", bio: "Mr. Saeed Ahmed Kohaao has served as Mukhtiarkar Nazimabad since 27 February 2026. The Mukhtiarkar heads the revenue office of Nazimabad sub-division, working under the Assistant Commissioner Nazimabad and the Deputy Commissioner. The office maintains land records, processes mutation and demarcation, and prepares the Mukhtiarkar's report required for Domicile, PRC and other certificates.", roles: ["Land Record Maintenance", "Mutation (Dakhil-Kharij)", "Demarcation and Measurement", "Revenue Court Cases", "Government Land Protection", "Certificate Verification Reports", "Supervision of Field Staff", "Assigned Public Duties"] },
    "mukhtiarkar-north-nazimabad": { name: "Syed Karar Hussain", kicker: "Mukhtiarkar North Nazimabad", message: "The Mukhtiarkar office North Nazimabad is the revenue office closest to the residents of North Nazimabad. It maintains land records, processes mutation and demarcation, prepares verification reports for certificates such as Domicile and PRC, and works under the Assistant Commissioner North Nazimabad to resolve citizens' revenue matters fairly and on time.", bio: "Syed Karar Hussain has served as Mukhtiarkar North Nazimabad since 2 March 2026. The Mukhtiarkar heads the revenue office of North Nazimabad sub-division, working under the Assistant Commissioner North Nazimabad and the Deputy Commissioner. The office maintains land records, processes mutation and demarcation, and prepares the Mukhtiarkar's report required for Domicile, PRC and other certificates.", roles: ["Land Record Maintenance", "Mutation (Dakhil-Kharij)", "Demarcation and Measurement", "Revenue Court Cases", "Government Land Protection", "Certificate Verification Reports", "Supervision of Field Staff", "Assigned Public Duties"] },
    "mukhtiarkar-new-karachi": { name: "Mr. Arshad Hussain Chandio", kicker: "Mukhtiarkar New Karachi", message: "The Mukhtiarkar office New Karachi is the revenue office closest to the residents of New Karachi. It maintains land records, processes mutation and demarcation, prepares verification reports for certificates such as Domicile and PRC, and works under the Assistant Commissioner New Karachi to resolve citizens' revenue matters fairly and on time.", bio: "Mr. Arshad Hussain Chandio has served as Mukhtiarkar New Karachi since 7 October 2026. The Mukhtiarkar heads the revenue office of New Karachi sub-division, working under the Assistant Commissioner New Karachi and the Deputy Commissioner. The office maintains land records, processes mutation and demarcation, and prepares the Mukhtiarkar's report required for Domicile, PRC and other certificates.", roles: ["Land Record Maintenance", "Mutation (Dakhil-Kharij)", "Demarcation and Measurement", "Revenue Court Cases", "Government Land Protection", "Certificate Verification Reports", "Supervision of Field Staff", "Assigned Public Duties"] },
    "superintendent-revenue": { name: "Mr. Kailash B. Maheshwari", kicker: "Office Superintendent (Revenue), DC Office", message: "The Superintendent supervises the day-to-day office work of the District Administration Central, making sure that files, correspondence and public applications move through the office promptly and are dealt with in line with the rules.", bio: "Mr. Kailash B. Maheshwari has served as Office Superintendent (Revenue) at the Deputy Commissioner Office since 1 December 2024. The Office Superintendent supervises the revenue staff of the DC Office, keeps track of revenue files and correspondence, and makes sure that citizens' revenue matters move promptly to the officers who decide them.", roles: ["Office Supervision", "File Management", "Record Keeping", "Correspondence", "Staff Coordination", "Follow-up of Directions", "Public Dealing", "Branch Coordination"] }
  };

  const officerExtraMore = {
    "mukhtiarkar-liaquatabad": {
      "photo": null,
      "office": "the Mukhtiarkar office Liaquatabad",
      "roleText": [
        "Maintains the record of rights and land records for Liaquatabad.",
        "Processes the transfer of land records after sale, gift or inheritance.",
        "Supervises demarcation and measurement of land through field revenue staff.",
        "Represents the Deputy Commissioner and Assistant Commissioner in revenue cases before the High Court and the lower courts.",
        "Identifies and reports encroachment on government land.",
        "Prepares the Mukhtiarkar's report required for Domicile, PRC and other certificates.",
        "Supervises Tapedars and other field revenue staff.",
        "Carries out election, census, price monitoring and other duties assigned by the Assistant Commissioner."
      ],
      "initiatives": [
        "Helping residents of Liaquatabad with land record and certificate matters at the Mukhtiarkar office.",
        "Supporting the Assistant Commissioner Liaquatabad in market inspections against overcharging.",
        "Following up revenue complaints from Liaquatabad until they are resolved.",
        "Field visits across Liaquatabad to check land records, government land and encroachments."
      ]
    },
    "mukhtiarkar-gulberg": {
      "photo": null,
      "office": "the Mukhtiarkar office Gulberg",
      "roleText": [
        "Maintains the record of rights and land records for Gulberg.",
        "Processes the transfer of land records after sale, gift or inheritance.",
        "Supervises demarcation and measurement of land through field revenue staff.",
        "Represents the Deputy Commissioner and Assistant Commissioner in revenue cases before the High Court and the lower courts.",
        "Identifies and reports encroachment on government land.",
        "Prepares the Mukhtiarkar's report required for Domicile, PRC and other certificates.",
        "Supervises Tapedars and other field revenue staff.",
        "Carries out election, census, price monitoring and other duties assigned by the Assistant Commissioner."
      ],
      "initiatives": [
        "Helping residents of Gulberg with land record and certificate matters at the Mukhtiarkar office.",
        "Supporting the Assistant Commissioner Gulberg in market inspections against overcharging.",
        "Following up revenue complaints from Gulberg until they are resolved.",
        "Field visits across Gulberg to check land records, government land and encroachments."
      ]
    },
    "mukhtiarkar-nazimabad": {
      "photo": null,
      "office": "the Mukhtiarkar office Nazimabad",
      "roleText": [
        "Maintains the record of rights and land records for Nazimabad.",
        "Processes the transfer of land records after sale, gift or inheritance.",
        "Supervises demarcation and measurement of land through field revenue staff.",
        "Represents the Deputy Commissioner and Assistant Commissioner in revenue cases before the High Court and the lower courts.",
        "Identifies and reports encroachment on government land.",
        "Prepares the Mukhtiarkar's report required for Domicile, PRC and other certificates.",
        "Supervises Tapedars and other field revenue staff.",
        "Carries out election, census, price monitoring and other duties assigned by the Assistant Commissioner."
      ],
      "initiatives": [
        "Helping residents of Nazimabad with land record and certificate matters at the Mukhtiarkar office.",
        "Supporting the Assistant Commissioner Nazimabad in market inspections against overcharging.",
        "Following up revenue complaints from Nazimabad until they are resolved.",
        "Field visits across Nazimabad to check land records, government land and encroachments."
      ]
    },
    "mukhtiarkar-north-nazimabad": {
      "photo": "karrar Hussain.PNG",
      "office": "the Mukhtiarkar office North Nazimabad",
      "roleText": [
        "Maintains the record of rights and land records for North Nazimabad.",
        "Processes the transfer of land records after sale, gift or inheritance.",
        "Supervises demarcation and measurement of land through field revenue staff.",
        "Represents the Deputy Commissioner and Assistant Commissioner in revenue cases before the High Court and the lower courts.",
        "Identifies and reports encroachment on government land.",
        "Prepares the Mukhtiarkar's report required for Domicile, PRC and other certificates.",
        "Supervises Tapedars and other field revenue staff.",
        "Carries out election, census, price monitoring and other duties assigned by the Assistant Commissioner."
      ],
      "initiatives": [
        "Helping residents of North Nazimabad with land record and certificate matters at the Mukhtiarkar office.",
        "Supporting the Assistant Commissioner North Nazimabad in market inspections against overcharging.",
        "Following up revenue complaints from North Nazimabad until they are resolved.",
        "Field visits across North Nazimabad to check land records, government land and encroachments."
      ]
    },
    "mukhtiarkar-new-karachi": {
      "photo": null,
      "office": "the Mukhtiarkar office New Karachi",
      "roleText": [
        "Maintains the record of rights and land records for New Karachi.",
        "Processes the transfer of land records after sale, gift or inheritance.",
        "Supervises demarcation and measurement of land through field revenue staff.",
        "Represents the Deputy Commissioner and Assistant Commissioner in revenue cases before the High Court and the lower courts.",
        "Identifies and reports encroachment on government land.",
        "Prepares the Mukhtiarkar's report required for Domicile, PRC and other certificates.",
        "Supervises Tapedars and other field revenue staff.",
        "Carries out election, census, price monitoring and other duties assigned by the Assistant Commissioner."
      ],
      "initiatives": [
        "Helping residents of New Karachi with land record and certificate matters at the Mukhtiarkar office.",
        "Supporting the Assistant Commissioner New Karachi in market inspections against overcharging.",
        "Following up revenue complaints from New Karachi until they are resolved.",
        "Field visits across New Karachi to check land records, government land and encroachments."
      ]
    },
    "superintendent-revenue": {
      "photo": null,
      "office": "the office of the Superintendent",
      "roleText": [
        "Supervises the day-to-day work of office staff.",
        "Keeps track of the movement and disposal of files.",
        "Maintains office records in good order.",
        "Prepares letters, summaries and replies for the officers concerned.",
        "Coordinates the work of clerks and support staff.",
        "Follows up directions from senior officers and keeps deadlines.",
        "Guides members of the public who visit the office.",
        "Coordinates with the branches of the DC Office."
      ],
      "initiatives": [
        "Helping visitors reach the right branch and officer quickly.",
        "Supporting the district price monitoring work with office records.",
        "Keeping track of complaints received in the office until they are disposed of.",
        "Supporting field arrangements for district campaigns and events."
      ]
    }
  };
  const officerExtra = {
    "deputy-commissioner": {
      "photo": "DC Central.jpg",
      "office": "the DC Office",
      "roleText": [
        "Represents the Government of Sindh in the district and ensures that provincial policies and directions are carried out.",
        "Coordinates the work of all district offices and line departments so that public services are delivered on time.",
        "Supervises land records, revenue collection, mutation and revenue cases as Collector of the district.",
        "Works with the police, Rangers and other agencies to maintain public order, especially during sensitive events.",
        "Chairs the District Disaster Management Authority and leads preparedness and relief during rains, heatwaves and other emergencies.",
        "Ensures that essential items are sold at notified prices and that action is taken against profiteering and hoarding.",
        "Leads district arrangements for elections, census, polio campaigns, anti-encroachment drives and major public events.",
        "Oversees the issuance and verification of Domicile and Permanent Resident Certificates for residents of the district."
      ],
      "initiatives": [
        "Clearer guidance, improved document counters and online information so that citizens can complete their work in fewer visits.",
        "Regular market inspections across all five sub-divisions to keep essential commodities at notified rates.",
        "Every complaint is registered, assigned to the relevant branch and followed up through the Complaint Cell until it is resolved.",
        "Regular field visits to markets, public offices and service points to check service quality and resolve problems on the spot."
      ],
      "timeline": [
        [
          "Achievements",
          "Launch of the District Central digital portal, an upgraded public service desk at the DC Office, regular price monitoring drives across all sub-divisions, and structured complaint tracking through the Complaint Cell."
        ]
      ],
      "announcements": true
    },
    "adc-1": {
      "photo": "ADC I.jpeg",
      "office": "the office of the Additional Deputy Commissioner-I",
      "roleText": [
        "Supports the Deputy Commissioner in running the district and acts on his behalf when assigned.",
        "Oversees the Revenue Branch, land records and revenue cases delegated by the Deputy Commissioner.",
        "Supervises staff matters, salaries, pensions, budget and accounts of the DC Office.",
        "Supervises the Domicile/PRC Branch to ensure applications are processed fairly and on time.",
        "Coordinates market inspections and action against overcharging with the Assistant Commissioners.",
        "Supports the district's preparedness and relief work during rains, heatwaves and other emergencies.",
        "Follows up directions from the Government of Sindh and the Commissioner Karachi and prepares the required reports.",
        "Hears public complaints referred by the Deputy Commissioner and decides them within delegated powers."
      ],
      "initiatives": [
        "Improving the Domicile/PRC counter with clear checklists and guidance so applicants can complete their work in one visit.",
        "Coordinating district-wide market inspections with the Assistant Commissioners and Mukhtiarkars.",
        "Reviewing complaints related to revenue, establishment and Domicile/PRC matters until they are resolved.",
        "Visiting revenue offices and facilitation counters to check record-keeping and service quality."
      ]
    },
    "adc-2": {
      "photo": null,
      "office": "the office of the Additional Deputy Commissioner-II",
      "roleText": [
        "Supports the Deputy Commissioner in keeping public order across the district.",
        "Acts as the district's link with law-enforcement agencies on security arrangements and public safety.",
        "Attends district security meetings and follows up the decisions taken.",
        "Plans and supervises arrangements for Muharram, Eid, Rabi-ul-Awwal, public rallies and other major events.",
        "Carries out legal and regulatory functions given by law, including NOCs and licences handled by the Judicial Branch.",
        "Inspects offices and sites and conducts inquiries when directed by the Deputy Commissioner.",
        "Works with KMC, the Town Municipal Corporations and the Union Committees on civic issues.",
        "Supervises the Complaint Cell and Control Room and follows up complaints until they are resolved."
      ],
      "initiatives": [
        "Faster processing of NOCs and licences through the Judicial Branch, with clear guidance on documents.",
        "Supporting market inspections through the General Branch, which handles price checking.",
        "Strengthening the Complaint Cell and Control Room so every complaint is tracked to resolution.",
        "Overseeing security and public arrangements for major events and religious occasions."
      ]
    },
    "ac-1": {
      "photo": "Dr Saira.jpeg",
      "office": "the office of the Assistant Commissioner Liaquatabad",
      "roleText": [
        "Heads the administration of Liaquatabad sub-division on behalf of the Deputy Commissioner.",
        "Supervises the Mukhtiarkar's office, land records and revenue matters in Liaquatabad.",
        "Inspects markets and takes action against overcharging and hoarding.",
        "Hears public complaints and refers them to the relevant departments for action.",
        "As Polio Focal Person for District Central, coordinates polio immunisation campaigns across the district.",
        "Works with the Town Municipal Corporation and Union Committees on civic issues.",
        "Visits markets, schools, offices and public sites to check services and conditions.",
        "Carries out election, census and other duties assigned by the Deputy Commissioner or the Government of Sindh."
      ],
      "initiatives": [
        "Helping residents of Liaquatabad with revenue, certificate and civic matters through the Assistant Commissioner's office.",
        "Regular inspections of markets in Liaquatabad to check that essential items are sold at notified prices.",
        "Reviewing public complaints from Liaquatabad and following them up with the relevant departments until they are resolved.",
        "Regular field visits across Liaquatabad to check civic conditions, encroachments and public services."
      ]
    },
    "ac-2": {
      "photo": null,
      "office": "the office of the Assistant Commissioner Gulberg",
      "roleText": [
        "Supervises the Mukhtiarkar's office, land records and revenue matters in Gulberg.",
        "Deals with land enquiries, revenue cases and record matters within delegated powers.",
        "Works with the police on public order in Gulberg, especially during events and gatherings.",
        "Inspects markets and takes action against overcharging and hoarding.",
        "Identifies encroachments on public land and supports removal drives.",
        "Coordinates with line departments to resolve civic and service issues.",
        "Supports rain emergency and heatwave arrangements in the sub-division.",
        "Hears public complaints and follows them up until they are resolved."
      ],
      "initiatives": [
        "Helping residents of Gulberg with revenue, certificate and civic matters through the Assistant Commissioner's office.",
        "Regular inspections of markets in Gulberg to check that essential items are sold at notified prices.",
        "Reviewing public complaints from Gulberg and following them up with the relevant departments until they are resolved.",
        "Regular field visits across Gulberg to check civic conditions, encroachments and public services."
      ]
    },
    "ac-3": {
      "photo": "Rabia .jpeg",
      "office": "the office of the Assistant Commissioner Nazimabad",
      "roleText": [
        "Supervises the Mukhtiarkar's office, land records and revenue matters in Nazimabad.",
        "Handles land-record proceedings within the powers delegated under revenue law.",
        "Works with the police on public order in Nazimabad.",
        "Inspects markets to check prices, weights and measures.",
        "Coordinates with health, education, municipal and utility departments on local issues.",
        "Monitors civic works and development schemes in the sub-division.",
        "Assesses sites and conditions and reports to the district administration.",
        "Prepares regular and special reports for the Deputy Commissioner."
      ],
      "initiatives": [
        "Helping residents of Nazimabad with revenue, certificate and civic matters through the Assistant Commissioner's office.",
        "Regular inspections of markets in Nazimabad to check that essential items are sold at notified prices.",
        "Reviewing public complaints from Nazimabad and following them up with the relevant departments until they are resolved.",
        "Regular field visits across Nazimabad to check civic conditions, encroachments and public services."
      ]
    },
    "ac-4": {
      "photo": "Naimat Ullah.jpeg",
      "office": "the office of the Assistant Commissioner North Nazimabad",
      "roleText": [
        "Supervises the Mukhtiarkar's office and revenue work in North Nazimabad.",
        "Inspects markets and checks that notified prices are displayed and followed.",
        "Takes action against hoarding and overcharging of essential items.",
        "Protects public land and supports anti-encroachment drives.",
        "Works with the Town Municipal Corporation and Union Committees on civic issues.",
        "Supports the district response during rains, heatwaves and other emergencies.",
        "Reviews public complaints and follows them up with the relevant offices.",
        "Visits markets, public offices and sites to check conditions and services."
      ],
      "initiatives": [
        "Helping residents of North Nazimabad with revenue, certificate and civic matters through the Assistant Commissioner's office.",
        "Regular inspections of markets in North Nazimabad to check that essential items are sold at notified prices.",
        "Reviewing public complaints from North Nazimabad and following them up with the relevant departments until they are resolved.",
        "Regular field visits across North Nazimabad to check civic conditions, encroachments and public services."
      ]
    },
    "ac-5": {
      "photo": "Fareed haneef.jpeg",
      "office": "the office of the Assistant Commissioner New Karachi",
      "roleText": [
        "Heads the administration of New Karachi sub-division on behalf of the Deputy Commissioner.",
        "Supervises the Mukhtiarkar's office and land records in New Karachi.",
        "Works with the police on public order and security arrangements.",
        "Carries out market inspections and action against overcharging.",
        "Identifies encroachments on public land and supports removal drives.",
        "Leads local preparedness and response during rains and other emergencies.",
        "Hears public complaints and follows them up until they are resolved.",
        "Carries out election, census and campaign duties assigned by the Government."
      ],
      "initiatives": [
        "Helping residents of New Karachi with revenue, certificate and civic matters through the Assistant Commissioner's office.",
        "Regular inspections of markets in New Karachi to check that essential items are sold at notified prices.",
        "Reviewing public complaints from New Karachi and following them up with the relevant departments until they are resolved.",
        "Regular field visits across New Karachi to check civic conditions, encroachments and public services."
      ]
    },
    "ac-6": {
      "photo": null,
      "office": "the office of the Assistant Commissioner Revenue",
      "roleText": [
        "Supervises revenue staff and the Mukhtiarkars' revenue work across the district.",
        "Supports the Deputy Commissioner and ADC-I on revenue policy and directions from the Board of Revenue.",
        "Oversees revenue certificates, land-record information and related citizen services.",
        "Supports law-and-order arrangements on land disputes and anti-encroachment drives.",
        "Supervises land records, mutation, demarcation and revenue cases within delegated powers.",
        "Supports land acquisition and record matters for public development schemes.",
        "Hears revenue complaints and guides citizens on revenue procedures.",
        "Supports damage assessment and relief records during emergencies."
      ],
      "initiatives": [
        "Helping residents of District Central with revenue, certificate and civic matters through the Assistant Commissioner's office.",
        "Regular inspections of markets in District Central to check that essential items are sold at notified prices.",
        "Reviewing public complaints from District Central and following them up with the relevant departments until they are resolved.",
        "Regular field visits across District Central to check civic conditions, encroachments and public services."
      ]
    }
  };

  const branchData = {
    "revenue": {
      "file": "revenue.html",
      "title": "Revenue Branch",
      "icon": "bi-bank",
      "incharge": "Mr. Sajid",
      "reports": "ADC-I",
      "scope": "Land, records, revenue cases, encroachment matters.",
      "about": "Revenue administration is one of the principal statutory functions associated with the Deputy Commissioner / Collector in Sindh. The branch handles land and encroachment enquiries, anti-encroachment drives, civil suits and other court cases, revenue cases and appeals, and illegal or dangerous building matters referred through SBCA.",
    "more": "Citizens can approach the Revenue Branch for revenue certificates, information from land records, guidance on mutation after sale, gift or inheritance, and complaints about encroachment on government land. Field verification is carried out through the Mukhtiarkars and their staff in each sub-division.",
      "functions": "REVENUE",
      "services": "REVENUE"
    },
    "accounts": {
      "file": "accounts-branch.html",
      "title": "Accounts Branch",
      "icon": "bi-cash-stack",
      "incharge": "Mr. Mazhar Shamshad",
      "reports": "ADC-I",
      "scope": "Salaries, pensions, budget, audit and development finance.",
      "about": "The Accounts Branch manages the financial administration of the Deputy Commissioner's Office. It handles staff salaries, GP Fund and pension cases, contingency bills, audit matters and relief-fund finance, and oversees the financial side of development schemes in the district.",
    "more": "Although its work is mostly internal, the Accounts Branch underpins every public service of the DC Office. Timely salaries, pensions and payments keep counters running, and careful financial records make relief funds and development schemes accountable to the public.",
      "functions": [
        [
          "bi-person-vcard",
          "Gazetted Officers' Records",
          "Maintains the personal files of gazetted officers of the district administration."
        ],
        [
          "bi-wallet2",
          "Salaries and Pensions",
          "Processes staff salaries, GP Fund cases and pension cases."
        ],
        [
          "bi-receipt",
          "Contingency Bills",
          "Prepares and processes contingency bills for office expenditure."
        ],
        [
          "bi-clipboard-check",
          "Audit Matters",
          "Deals with audit observations and maintains financial records for audit."
        ],
        [
          "bi-life-preserver",
          "Relief Fund Finance",
          "Manages the financial side of relief funds and emergency assistance."
        ],
        [
          "bi-journal-text",
          "Service Books",
          "Maintains service books of employees of the DC Office."
        ],
        [
          "bi-graph-up-arrow",
          "Development Schemes",
          "Oversees the financial side of development schemes, including SDG and special development schemes, and monitors schemes of other departments."
        ],
        [
          "bi-buildings",
          "DC Complex and Events",
          "Maintains the DC Complex and DC Office, and coordinates important events and VIP movements."
        ]
      ],
      "services": []
    },
    "general": {
      "file": "general-branch.html",
      "title": "General Branch",
      "icon": "bi-building",
      "incharge": "Mr. Khalid Jameel, Assistant",
      "reports": "ADC-II",
      "scope": "Complaints, elections, disasters, price checking and assistance cases.",
      "about": "The General Branch deals with a wide range of public matters: complaints about other departments, local government issues, election and census work, rain emergencies and disaster response, price checking, and financial assistance and compensation cases.",
    "more": "The General Branch is often the first stop for matters that involve more than one department. It refers complaints to the department responsible and follows them up, and during rains and other emergencies it helps coordinate the district's response.",
      "functions": [
        [
          "bi-chat-square-text",
          "Complaints about Other Departments",
          "Receives complaints about other departments and local government and TMC issues, and follows them up."
        ],
        [
          "bi-check2-square",
          "Elections and Census",
          "Handles district work for elections and the census."
        ],
        [
          "bi-cloud-rain",
          "Rain Emergency and Disasters",
          "Coordinates rain emergency arrangements and disaster response."
        ],
        [
          "bi-people",
          "Heirship and Domicile Verification",
          "Verifies heirship certificates and domiciles when requested by other offices."
        ],
        [
          "bi-tags",
          "Price Checking",
          "Supports market price checking and action against overcharging."
        ],
        [
          "bi-person-x",
          "Blocked CNIC Matters",
          "Deals with blocked CNIC and related verification matters."
        ],
        [
          "bi-heart",
          "Financial Assistance",
          "Processes financial assistance and socio-economic cases."
        ],
        [
          "bi-shield-exclamation",
          "Compensation Cases",
          "Handles compensation cases arising from accidents, disasters, target killing or terrorism."
        ]
      ],
      "services": [
        [
          "bi-chat-left-text",
          "Complaint Registration",
          "Register a complaint about a public service or another department.",
          "complaint-registration.html"
        ],
        [
          "bi-tags",
          "Price List",
          "Check official prices and report overcharging.",
          "price-list.html"
        ],
        [
          "bi-headset",
          "Public Assistance",
          "Guidance if you are not sure which office handles your matter.",
          "public-assistance.html"
        ]
      ]
    },
    "judicial": {
      "file": "judicial-branch.html",
      "title": "Judicial Branch",
      "icon": "bi-scale",
      "incharge": "Mr. Naseem",
      "reports": "ADC-II",
      "scope": "Law and order, NOCs, licences and declarations.",
      "about": "The Judicial Branch handles law-and-order matters and issues NOCs, licences and declarations within District Central, including NOCs for petrol pumps, CNG stations, public gatherings and marriage functions, and petroleum, fireworks and hotel licences.",
    "more": "Applicants for an NOC or licence should apply well before the date of the activity, as most cases need reports from the police and other agencies. The branch will advise on the documents required for each type of NOC or licence.",
      "functions": [
        [
          "bi-shield-check",
          "Law and Order",
          "Handles law-and-order matters, including Section 144 Cr.P.C. orders and security matters."
        ],
        [
          "bi-fuel-pump",
          "Petrol Pump and CNG NOCs",
          "Processes NOCs for petrol pumps and CNG stations."
        ],
        [
          "bi-people",
          "Gatherings and Functions",
          "Issues NOCs for public gatherings, melas, marriage functions and street tents or shamianas."
        ],
        [
          "bi-droplet-half",
          "Petroleum Licences",
          "Issues and renews dangerous and non-dangerous petroleum licences."
        ],
        [
          "bi-stars",
          "Fireworks Licences",
          "Issues and renews fireworks licences."
        ],
        [
          "bi-building",
          "Hotel Licences",
          "Issues hotel licences within District Central."
        ],
        [
          "bi-newspaper",
          "Newspaper Declarations",
          "Processes declarations for newspapers and magazines."
        ],
        [
          "bi-patch-check",
          "NGO Verification",
          "Verifies local NGOs on request of the competent authorities."
        ]
      ],
      "services": [
        [
          "bi-file-check",
          "No-Objection Certificate (NOC)",
          "NOCs for petrol pumps, CNG stations, gatherings, functions and tents.",
          "noc.html"
        ]
      ]
    },
    "establishment": {
      "file": "establishment-branch.html",
      "title": "Establishment Branch",
      "icon": "bi-people",
      "incharge": "Mr. Zubair Aftab",
      "reports": "ADC-I",
      "scope": "Staff appointments, postings, transfers and service matters.",
      "about": "The Establishment Branch manages staff matters of the district administration: personal files of non-gazetted staff, appointments, transfers, postings and service matters, together with correspondence on government directions and Assembly questions.",
    "more": "By keeping staff records accurate and filling posts on time, the Establishment Branch helps make sure every counter and office of the district administration is properly staffed to serve the public.",
      "functions": [
        [
          "bi-folder2-open",
          "Staff Records",
          "Maintains personal files of non-gazetted staff."
        ],
        [
          "bi-person-plus",
          "Appointments",
          "Processes appointments against sanctioned posts."
        ],
        [
          "bi-arrow-left-right",
          "Transfers and Postings",
          "Handles transfers, postings and other service matters."
        ],
        [
          "bi-universal-access",
          "Special Quotas",
          "Processes cases for persons with disabilities and the deceased quota."
        ],
        [
          "bi-search",
          "Office Inspections",
          "Inspects subordinate offices of the district administration."
        ],
        [
          "bi-envelope-paper",
          "Government Directions",
          "Handles correspondence on directions from Governor House, the Prime Minister and the Chief Minister, and Assembly questions."
        ]
      ],
      "services": []
    },
    "domicile": {
      "file": "domicile-branch.html",
      "title": "Domicile / PRC Branch",
      "icon": "bi-file-earmark-person",
      "incharge": "Mr. Farooq Afzal, Senior Clerk",
      "reports": "ADC-I",
      "scope": "Domicile and Permanent Resident Certificates.",
      "about": "The Domicile / PRC Branch issues and keeps records of Domicile Certificates and Permanent Resident Certificates for residents of District Central, and verifies certificates when requested. Applications can now also be made online through the Sindh Domicile Portal.",
    "more": "Applicants should check the full document checklist on the Domicile Certificate page before applying. The Mukhtiarkar's report and the Union Committee residence certificate are part of the verification, so incomplete files can delay issuance.",
      "functions": [
        [
          "bi-file-earmark-person",
          "Domicile Certificates",
          "Receives and processes Domicile Certificate applications."
        ],
        [
          "bi-person-lines-fill",
          "Permanent Resident Certificates",
          "Processes PRC applications alongside Domicile."
        ],
        [
          "bi-check2-circle",
          "Verification",
          "Verifies existing certificates when requested by other offices."
        ],
        [
          "bi-archive",
          "Record Keeping",
          "Maintains the record of all certificates issued."
        ]
      ],
      "services": [
        [
          "bi-file-earmark-person",
          "Domicile Certificate",
          "Who can apply, documents, fees and the online application.",
          "domicile.html"
        ],
        [
          "bi-person-lines-fill",
          "Permanent Resident Certificate",
          "Requirements and how to apply for a PRC.",
          "prc.html"
        ]
      ]
    },
    "arms": {
      "file": "arms-branch.html",
      "title": "Arms Branch",
      "icon": "bi-shield-check",
      "incharge": "Syed Rooh Ul Ameen",
      "reports": "ADC-I",
      "scope": "New arms licence applications.",
      "about": "The Arms Branch processes new arms licence applications for residents of District Central, in line with the procedure and quota set by the Government of Sindh.",
    "more": "Applications are processed in line with the Government of Sindh's procedure and the monthly quota for District Central. Applicants must complete CRO and police verification and biometric verification before a licence can be issued.",
      "functions": [
        [
          "bi-file-earmark-text",
          "Licence Applications",
          "Receives and scrutinises new arms licence applications."
        ],
        [
          "bi-shield-lock",
          "Verification",
          "Coordinates CRO and police verification of applicants."
        ],
        [
          "bi-fingerprint",
          "Biometric Verification",
          "Arranges biometric verification and photographs of applicants."
        ],
        [
          "bi-card-checklist",
          "Licence Issuance",
          "Processes licences after verification and fee payment."
        ]
      ],
      "services": [
        [
          "bi-shield-check",
          "Arms Licence",
          "Eligibility, documents, procedure and fee.",
          "arms-license.html"
        ]
      ]
    },
    "pa-branch": {
      "file": "pa-branch.html",
      "title": "P.A. Branch of ADC-I",
      "icon": "bi-briefcase",
      "incharge": "Mr. Farhat Mirza, Assistant",
      "reports": "ADC-I",
      "scope": "Polio coordination, Bachat Bazar NOCs and water tankers.",
      "about": "The P.A. Branch of ADC-I supports the Additional Deputy Commissioner-I and handles polio campaign coordination, NOCs for Bachat Bazars and permissions for gratis water tankers.",
    "more": "Applications for Bachat Bazar NOCs and gratis water tankers should be made through the P.A. Branch with full details of the location and need. During polio campaigns, the branch supports coordination between the district administration and the health teams.",
      "functions": [
        [
          "bi-capsule",
          "Polio Coordination",
          "Supports the district's polio immunisation campaigns."
        ],
        [
          "bi-shop",
          "Bachat Bazar NOCs",
          "Processes NOCs for Bachat Bazars."
        ],
        [
          "bi-droplet",
          "Gratis Water Tankers",
          "Processes permissions for free water tanker supply in eligible cases."
        ],
        [
          "bi-briefcase",
          "ADC-I Office Support",
          "Handles correspondence and appointments for the ADC-I office."
        ]
      ],
      "services": [
        [
          "bi-file-check",
          "Bachat Bazar NOC",
          "How to apply for a Bachat Bazar NOC.",
          "noc.html"
        ]
      ]
    },
    "benevolent-fund": {
      "file": "benevolent-fund.html",
      "title": "Benevolent Fund Branch",
      "icon": "bi-heart",
      "incharge": "Mr. Shahid Hussain, Senior Clerk",
      "reports": "ADC-II",
      "scope": "Benevolent Fund cases for government employees.",
      "about": "The Benevolent Fund Branch processes Benevolent Fund cases for government employees and their families, and handles related correspondence on government directions and Assembly questions.",
    "more": "Families of government employees can seek guidance from the branch on the documents needed for a Benevolent Fund case, and on the progress of cases already submitted.",
      "functions": [
        [
          "bi-heart",
          "Benevolent Fund Cases",
          "Processes Benevolent Fund cases for government employees and their families."
        ],
        [
          "bi-envelope-paper",
          "Correspondence",
          "Handles correspondence on directions from Governor House, the Prime Minister and the Chief Minister, and Assembly questions."
        ]
      ],
      "services": []
    },
    "ri-branch": {
      "file": "ri-branch.html",
      "title": "R & I Branch (Receipt & Issue)",
      "icon": "bi-envelope-paper",
      "incharge": "Mr. Sarwar, Senior Clerk",
      "reports": "ADC-II",
      "scope": "Inward and outward correspondence.",
      "about": "The Receipt & Issue (R & I) Branch receives all incoming correspondence of the DC Office and dispatches outgoing letters, making sure every letter reaches the right office. Team: Mr. Sarwar (Senior Clerk), with Behzad Ahmed, Salman Ahmed and Jawad Siddiqui.",
    "more": "Every letter and application received at the DC Office is entered in the inward register before it is sent to the branch concerned. Keeping your receipt or diary number helps the office trace your application quickly.",
      "functions": [
        [
          "bi-inbox",
          "Receipt of Correspondence",
          "Receives and records all incoming letters and applications."
        ],
        [
          "bi-send",
          "Dispatch",
          "Dispatches outgoing letters and mail to the offices concerned."
        ],
        [
          "bi-journal-text",
          "Registers",
          "Maintains the inward and outward registers."
        ]
      ],
      "services": []
    },
    "control-room": {
      "file": "control-room.html",
      "title": "Control Room",
      "icon": "bi-broadcast",
      "incharge": "Mr. Ghulam Hussain and Mr. Shoukat",
      "reports": "ADC-II",
      "scope": "Wireless coordination and complaint desk.",
      "about": "The Control Room operates the district's wireless network and acts as the operational desk of the Complaint Cell, providing round-the-clock coordination and monitoring, especially during emergencies.",
    "more": "During rain emergencies, heatwaves and major events, the Control Room keeps the Deputy Commissioner informed and passes instructions to field officers. Citizens can report emergencies through the Control Room as well as through Rescue 1122 and Police 15.",
      "functions": [
        [
          "bi-broadcast",
          "Wireless Network",
          "Operates the district's wireless communication network."
        ],
        [
          "bi-headset",
          "Complaint Desk",
          "Acts as the operational desk of the Complaint Cell."
        ],
        [
          "bi-exclamation-triangle",
          "Emergency Coordination",
          "Coordinates information during rain emergencies and other incidents."
        ]
      ],
      "services": [
        [
          "bi-chat-left-text",
          "Complaint Registration",
          "Register a complaint online or at the Control Room.",
          "complaint-registration.html"
        ]
      ]
    },
    "it-cell": {
      "file": "it-cell.html",
      "title": "IT Cell",
      "icon": "bi-cpu",
      "incharge": "",
      "reports": "Deputy Commissioner",
      "scope": "Website, digital services and office technology.",
      "about": "The IT Cell manages the district's website, digital services and data systems, and supports the office's technology infrastructure.",
    "more": "The IT Cell supports the district's move towards digital services, including online information, downloadable forms and online complaint registration, so that citizens can complete more of their work without visiting the office.",
      "functions": [
        [
          "bi-globe",
          "District Website",
          "Manages and updates the District Central website."
        ],
        [
          "bi-phone",
          "Digital Services",
          "Supports online services and complaint registration."
        ],
        [
          "bi-database",
          "Data Systems",
          "Maintains office data systems and records."
        ],
        [
          "bi-pc-display",
          "Technology Support",
          "Supports computers, networks and equipment in the DC Office."
        ]
      ],
      "services": []
    },
    "complaint-cell": {
      "file": "complaint-cell.html",
      "title": "Complaint Cell",
      "icon": "bi-chat-left-text",
      "incharge": "",
      "reports": "ADC-II",
      "scope": "Citizen complaints and follow-up.",
      "about": "The Complaint Cell registers, tracks and follows up citizen complaints submitted online or in person, working with the relevant branch until each complaint is resolved. The target response time is 48 hours on working days.",
    "more": "Citizens can submit complaints online through this website or in person at the DC Office. Please give your full name, CNIC, mobile number and complete details of the matter so that the complaint can be assigned and followed up without delay.",
      "functions": [
        [
          "bi-pencil-square",
          "Registration",
          "Registers complaints received online and in person."
        ],
        [
          "bi-diagram-3",
          "Assignment",
          "Assigns each complaint to the branch or office responsible."
        ],
        [
          "bi-arrow-repeat",
          "Follow-up",
          "Follows up each complaint until it is resolved."
        ],
        [
          "bi-bell",
          "Response",
          "Informs the complainant of the outcome."
        ]
      ],
      "services": [
        [
          "bi-chat-left-text",
          "Complaint Registration",
          "How to register a complaint and what details to give.",
          "complaint-registration.html"
        ]
      ]
    },
    "public-relations": {
      "file": "public-relations.html",
      "title": "Public Relations",
      "icon": "bi-megaphone",
      "incharge": "",
      "reports": "Deputy Commissioner",
      "scope": "Press, public awareness and media.",
      "about": "Public Relations manages press updates, public awareness campaigns and media coordination for the Deputy Commissioner's Office, including the district's social media pages.",
    "more": "Public Relations keeps citizens informed about district decisions, price lists, campaigns and emergency advisories through the press, this website and the district's official social media pages.",
      "functions": [
        [
          "bi-newspaper",
          "Press Releases",
          "Prepares and issues press releases and news updates."
        ],
        [
          "bi-megaphone",
          "Public Awareness",
          "Runs awareness campaigns on public services, health and safety."
        ],
        [
          "bi-camera",
          "Media Coordination",
          "Coordinates media coverage of district events."
        ],
        [
          "bi-share",
          "Social Media",
          "Manages the district's official social media pages."
        ]
      ],
      "services": []
    }
  };

  const officerPosted = {
    "deputy-commissioner": "8 September 2024",
    "adc-1": "4 July 2024",
    "adc-2": "30 September 2026",
    "ac-1": "30 September 2025",
    "ac-2": "18 November 2026",
    "ac-3": "8 June 2026",
    "ac-4": "20 June 2026",
    "ac-5": "23 September 2025",
    "mukhtiarkar-liaquatabad": "13 April 2025",
    "mukhtiarkar-nazimabad": "27 February 2026",
    "mukhtiarkar-north-nazimabad": "2 March 2026",
    "mukhtiarkar-new-karachi": "7 October 2026",
    "superintendent-revenue": "1 December 2024"
  };

  function siteHeader() {
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
                  <span class="social-soon" title="Instagram account coming soon" aria-label="Instagram (coming soon)"><i class="bi bi-instagram"></i></span>
                  <span class="social-soon" title="YouTube account coming soon" aria-label="YouTube (coming soon)"><i class="bi bi-youtube"></i></span>
                  <a class="complaint-btn" href="#contact-cta"><i class="bi bi-chat-square-text"></i> Complaint</a>
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
                  <a class="nav-link dropdown-toggle" href="about.html" data-bs-toggle="dropdown">About District</a>
                  <div class="dropdown-menu mega-menu">
                    <div class="mega-grid">
                      <a href="about.html#vision">Vision</a><a href="about.html#mission">Mission</a><a href="about.html#history">History</a><a href="about.html#geography">District Profile</a><a href="about.html#map">Map</a><a href="union-committees.html">Union Committees</a><a href="personalities.html">Personalities</a><a href="sports.html">Sports</a><a href="health.html">Health</a><a href="academic-institutions.html">Academic Institutions</a><a href="entertainment.html">Entertainment</a><a href="jurisdiction.html">Government Jurisdiction</a>
                    </div>
                  </div>
                </li>
                <li class="nav-item"><a class="nav-link" href="deputy-commissioner.html">Deputy Commissioner</a></li>
                <li class="nav-item"><a class="nav-link" href="adc-1.html">ADC-I</a></li>
                <li class="nav-item"><a class="nav-link" href="adc-2.html">ADC-II</a></li>
                <li class="nav-item dropdown position-static">
                  <a class="nav-link dropdown-toggle" href="administrative-team.html" data-bs-toggle="dropdown">Assistant Commissioners</a>
                  <div class="dropdown-menu mega-menu">
                    <div class="mega-grid wide">
                      <a href="ac-1.html">AC-I</a><a href="ac-2.html">AC-II</a><a href="ac-3.html">AC-III</a><a href="ac-4.html">AC-IV</a><a href="ac-5.html">AC-V</a><a href="ac-6.html">AC-VI</a>
                    </div>
                  </div>
                </li>
                <li class="nav-item"><a class="nav-link" href="branches.html">Branches</a></li>
                <li class="nav-item dropdown position-static"><a class="nav-link dropdown-toggle" href="citizen-services.html" data-bs-toggle="dropdown">Citizen Services</a><div class="dropdown-menu mega-menu"><div class="mega-grid wide"><a href="domicile.html">Domicile</a><a href="prc.html">PRC</a><a href="noc.html">NOC</a><a href="arms-license.html">Arms License</a><a href="revenue-certificate.html">Revenue Certificate</a><a href="land-revenue.html">Land / Revenue</a><a href="complaint-registration.html">Complaint Registration</a><a href="price-list.html">Price List</a><a href="downloads.html">Downloads / Forms</a><a href="public-assistance.html">General Public Assistance</a></div></div></li>
                <li class="nav-item"><a class="nav-link" href="news.html">News</a></li>
                <li class="nav-item"><a class="nav-link" href="initiatives.html">Initiatives</a></li>
                <li class="nav-item"><a class="nav-link" href="#faq">FAQ</a></li>
                <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>`;
  }

  function siteFooter() {
    return `
      <footer class="site-footer" id="contact">
        <div class="container">
          <div class="row g-4">
            <div class="col-lg-4">
              <a class="brand-lockup footer-brand" href="index.html"><span class="gov-logo"><img src="images/sindh-govt-logo.png" alt="Government of Sindh logo"></span><span><strong>District Central Karachi</strong><small>Government of Sindh</small></span></a>
              <p>Official district portal for public information, citizen services, administrative updates, and complaint facilitation.</p>
              <div class="footer-social"><a href="https://www.facebook.com/deputycommissionerCentral" target="_blank" rel="noopener"><i class="bi bi-facebook"></i></a><span class="social-soon" title="Instagram account coming soon" aria-label="Instagram (coming soon)"><i class="bi bi-instagram"></i></span><span class="social-soon" title="YouTube account coming soon" aria-label="YouTube (coming soon)"><i class="bi bi-youtube"></i></span></div>
            </div>
            <div class="col-6 col-lg-2"><h3>Quick Links</h3><a href="about.html">About</a><a href="news.html">News</a><a href="index.html#gallery">Gallery</a><a href="index.html#downloads">Downloads</a></div>
            <div class="col-6 col-lg-2"><h3>Branches</h3><a href="revenue.html">Revenue</a><a href="accounts-branch.html">Accounts</a><a href="it-cell.html">IT Cell</a><a href="complaint-cell.html">Complaint Cell</a></div>
            <div class="col-6 col-lg-2"><h3>Officers</h3><a href="deputy-commissioner.html">Deputy Commissioner</a><a href="adc-1.html">ADC-I</a><a href="adc-2.html">ADC-II</a><a href="ac-1.html">Assistant Commissioners</a></div>
            <div class="col-6 col-lg-2"><h3>Important</h3><a href="privacy-policy.html">Privacy Policy</a><a href="terms-of-use.html">Terms of Use</a> <a href="sitemap.html">Sitemap</a><a href="complaint-registration.html">Complaint</a><a href="#contact-card">Contact</a></div>
          </div>
          <div class="footer-bottom"><span>Copyright 2026 District Central Karachi. All rights reserved.</span><span class="footer-gov-mark"><img src="images/sindh-govt-logo.png" alt="Government of Sindh"> Official Government Website</span></div>
        </div>
      </footer>
      <button class="back-to-top" id="backToTop" aria-label="Back to top"><i class="bi bi-arrow-up"></i></button>`;
  }

  function pageHero(page) {
    const description = page.description ? `<p>${page.description}</p>` : "";
    const actions = page.actions ? `<div class="hero-buttons">${page.actions}</div>` : "";
    const crumb = page.parent ? `<li class="breadcrumb-item"><a href="${page.parent.href}">${page.parent.label}</a></li>` : "";
    const badge = page.badge || "Official Profile";
    return `
      <div class="breadcrumb-band">
        <div class="container">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
              ${crumb}
              <li class="breadcrumb-item active" aria-current="page">${page.title}</li>
            </ol>
          </nav>
        </div>
      </div>
      <section class="hero-section page-hero">
        <div class="hero-bg placeholder-image"></div>
        <div class="hero-overlay"></div>
        <div class="container-fluid px-lg-5 hero-content">
          <div class="row align-items-center min-vh-hero">
            <div class="col-xl-7 col-lg-8" data-aos="fade-up">
              <span class="hero-badge"><i class="bi bi-stars"></i> ${badge}</span>
              <h1>${page.title}</h1>
              <p>${page.subtitle}</p>
              ${description}
              ${actions}
            </div>
          </div>
        </div>
      </section>`;
  }

  function faq(id, office) {
    const where = office || "the DC Office";
    const items = ["How can citizens contact this office?", "What documents should visitors bring?", "Where can official updates be reviewed?", "How are requests processed?"];
    const answers = [
      `Visit ${where} at the Deputy Commissioner Office, Sector 15-A/1, Buffer Zone, Karachi, Monday to Friday, 9:00 AM to 5:00 PM, or submit a complaint through this website.`,
      "Bring your original CNIC and copies of any documents related to your matter, such as previous applications, certificates or correspondence. Each service page lists the exact documents required.",
      "Official notices, press releases and price lists are published on the News page and in the Downloads section of this website, and on the District Central social media pages.",
      "Requests are received at the relevant counter or through the Complaint Cell, checked by the concerned branch, and decided by the competent officer. Applicants are informed of the outcome or of any further documents needed."
    ];
    return `
      <div class="accordion help-accordion" id="${id}">
        ${items.map((q, index) => `
          <div class="accordion-item">
            <h4 class="accordion-header" id="${id}h${index}">
              <button class="accordion-button ${index ? "collapsed" : ""}" type="button" data-bs-toggle="collapse" data-bs-target="#${id}c${index}" aria-expanded="${index ? "false" : "true"}" aria-controls="${id}c${index}">${q}</button>
            </h4>
            <div id="${id}c${index}" class="accordion-collapse collapse ${index ? "" : "show"}" aria-labelledby="${id}h${index}" data-bs-parent="#${id}">
              <div class="accordion-body">${answers[index]}</div>
            </div>
          </div>`).join("")}
      </div>`;
  }

  function officerMain(page) {
    const key = Object.keys(officerPages).find((item) => officerPages[item] === page);
    const content = officerContent[key] || {};
    const extra = officerExtra[key] || officerExtraMore[key] || {};
    const roles = content.roles || ["Administrative Leadership", "District Governance", "Public Services", "Law & Order Coordination", "Revenue Administration", "Development Oversight", "Citizen Welfare", "Disaster Management"];
    return `
      ${siteHeader()}<main>${pageHero(page)}
        <!-- Content sourced from: content/DC OFFICE CONTENT.docx; content/Functions and Powers of Deputy Commissioner.docx; content/Functions and Powers of Deputy Commissioner, ADC, AC, Mukhtiarkar.docx -->
        <section class="section">
          <div class="container">
            <div class="row g-4 align-items-start">
              <div class="col-lg-8">
                <article class="profile-card large-card" data-aos="fade-up">
                  <div class="profile-img placeholder-image">${extra.photo ? `<img src="images/${extra.photo}" height="100%" alt="${content.name || ""}">` : `<i class="bi bi-person"></i>`}</div>
                  <div>
                    <span class="section-kicker">${content.kicker || "Official Profile"}</span>
                    <h2>${content.name || "Officer Name Placeholder"}</h2>
                    <p class="read-time"><i class="bi bi-clock"></i> 4 min read</p>
                    <h3>${page.designation}</h3>
                    <p>${content.bio || "Official information will be added after verification."}</p>
                  </div>
                </article>
                <article class="content-card mt-4" data-aos="fade-up">
                  <span class="section-kicker">Official Message</span>
                  <h2>Message for Citizens</h2>
                  <p>${content.message || "Official information will be added after verification."}</p>
                </article>
              </div>
              <aside class="col-lg-4">
                <div class="sidebar-card" data-aos="fade-left">
                  <h3>Office Snapshot</h3>
                  <p><strong>Designation:</strong> ${page.designation}</p>${officerPosted[key] ? `<p><strong>Date of Posting:</strong> ${officerPosted[key]}</p>` : ""}
                  <p><strong>Public Hours:</strong> Monday to Friday, 9:00 AM - 5:00 PM</p>
                  <p><strong>Location:</strong> Deputy Commissioner Office, Sector 15-A/1, Buffer Zone, Karachi</p>
                  <a class="btn btn-primary-gradient w-100" href="#contact-card">Contact Office</a>
                </div>
              </aside>
            </div>
          </div>
        </section>
        <section class="section muted-section">
          <div class="container">
            <div class="section-heading" data-aos="fade-up"><span class="section-kicker">Responsibilities</span><h2>Roles & Responsibilities</h2><p>The main responsibilities of this office, carried out under the law and the directions of the Government of Sindh and the Deputy Commissioner.</p></div>
            <div class="card-grid">${roles.map((role, i) => `<article class="dept-card role-card" data-aos="fade-up" data-aos-delay="${(i % 4) * 70}"><i class="bi bi-check2-circle"></i><h3>${role}</h3><p>${(extra.roleText || [])[i] || ""}</p></article>`).join("")}</div>
          </div>
        </section>
        <section class="section">
          <div class="container">
            <div class="section-heading" data-aos="fade-up"><span class="section-kicker">Initiatives</span><h2>Major Initiatives</h2><p>Current priorities of this office for the residents of District Central.</p></div>
            <div class="row g-4">${["Public Facilitation", "Price Monitoring", "Complaint Follow-up", "Field Coordination"].map((title, i) => `<div class="col-md-6 col-lg-3" data-aos="zoom-in"><article class="initiative-card"><div class="placeholder-image"><i class="bi bi-building-gear"></i></div><h3>${title}</h3><p>${(extra.initiatives || [])[i] || ""}</p><a href="initiatives.html">Read More</a></article></div>`).join("")}</div>
          </div>
        </section>
${((window.DC_WORK || {}).officers || {})[key] ? `        <section class="section">
          <div class="container">
            <div class="section-heading" data-aos="fade-up"><span class="section-kicker">2026</span><h2>Committees and Work in 2026</h2><p>Meetings chaired, committees led and work done by this office in 2026, as published on the official Facebook page of the District Administration Central.</p></div>
            <div class="timeline-list">${window.DC_WORK.officers[key].map(([m, t]) => `<article class="timeline-card" data-aos="fade-up"><span class="section-kicker">${m}</span><p class="mb-0">${t}</p></article>`).join("")}</div>
            <p class="text-center mt-3"><a class="btn btn-outline-primary" href="https://www.facebook.com/deputycommissionerCentral" target="_blank" rel="noopener"><i class="bi bi-facebook"></i> More updates on Facebook</a></p>
          </div>
        </section>
` : ""}        <section class="section muted-section">
          <div class="container">
            <div class="row g-4 align-items-start">
              <div class="${(extra.timeline || []).length ? "col-lg-7" : "col-12"}" data-aos="fade-right">
                <div class="section-heading text-start"><span class="section-kicker">Gallery</span><h2>Photo Gallery</h2></div>
                ${((window.DC_WORK || {}).officerPhotoCat || {})[key] ? window.DC_WORK.photoGrid(window.DC_WORK.officerPhotoCat[key], 12) : `<div class="gallery-grid">${[1, 2, 3, 4, 5, 6].map(() => `<button class="placeholder-image image-zoom border-0 gallery-lightbox" type="button" aria-label="Open gallery image"><i class="bi bi-image"></i></button>`).join("")}</div>`}
              </div>
              ${(extra.timeline || []).length ? `<div class="col-lg-5" data-aos="fade-left">
                <div class="section-heading text-start"><span class="section-kicker">Achievements</span><h2>Timeline</h2></div>
                <div class="timeline-list">${extra.timeline.map(([title, text]) => `<article class="timeline-card"><span class="section-kicker">District Central</span><h3>${title}</h3><p>${text}</p></article>`).join("")}</div>
              </div>` : ""}
            </div>
          </div>
        </section>
${extra.announcements ? `        <section class="section">
          <div class="container">
            <div class="section-heading" data-aos="fade-up"><span class="section-kicker">Announcements</span><h2>Latest Announcements</h2></div>
            <div class="row g-4">${["Public facilitation counters remain available during office hours.", "Complaint follow-up is handled through the Complaint Cell and Control Room.", "Applicants should verify required documents before visiting service counters."].map((notice) => `<div class="col-md-4" data-aos="fade-up"><article class="news-card"><div class="news-img placeholder-image"><i class="bi bi-newspaper"></i></div><div><h3>Public Notice</h3><p>${notice}</p><a href="news.html">Read More</a></div></article></div>`).join("")}</div>
          </div>
        </section>` : ""}
        <section class="section muted-section" id="faq"><div class="container"><div class="section-heading" data-aos="fade-up"><span class="section-kicker">Citizen Support</span><h2>Frequently Asked Questions</h2></div>${faq("officerFaq", extra.office)}</div></section>
        ${sharedSupport()}
      </main>${siteFooter()}${lightbox()}`;
  }

  function relatedLinks() {
    return `<section class="section"><div class="container"><div class="section-heading" data-aos="fade-up"><span class="section-kicker">Related Links</span><h2>Explore District Services</h2></div><div class="related-links"><a href="deputy-commissioner.html">Deputy Commissioner <i class="bi bi-arrow-right"></i></a><a href="adc-1.html">ADC-I <i class="bi bi-arrow-right"></i></a><a href="adc-2.html">ADC-II <i class="bi bi-arrow-right"></i></a><a href="branches.html">Branches <i class="bi bi-arrow-right"></i></a></div></div></section>`;
  }

  function sharedSupport() {
    return `${relatedLinks()}<section class="complaint-cta" id="contact-cta"><div class="container"><div class="cta-panel" data-aos="zoom-in"><div><span class="section-kicker">Contact CTA</span><h2>Need Assistance?</h2><p>Contact District Central for public guidance, complaint facilitation, and official visitor information.</p></div><div class="cta-actions"><a class="btn btn-primary-gradient" href="tel:1122">Call Now</a><a class="btn btn-outline-primary" href="complaint-registration.html">Submit Complaint</a></div></div></div></section><section class="section pt-0" id="contact-card"><div class="container"><article class="contact-card" data-aos="fade-up"><span class="section-kicker">Office Details</span><h2>District Central Contact Card</h2><p><strong>Address:</strong> Deputy Commissioner Office, Sector 15-A/1, Buffer Zone, Karachi, 74600</p><p><strong>Public Hours:</strong> Monday to Friday, 9:00 AM - 5:00 PM</p><p><strong>Response Time:</strong> 48 Hours</p></article></div></section>`;
  }

  function branchesMain() {
    const page = { title: "District Central Branches", subtitle: "Departments & Administrative Branches" };
    return `${siteHeader()}<main>${pageHero(page)}
      <!-- Content sourced from: content/DC OFFICE CONTENT.docx; content/Departments and Mukhtiar kar.docx -->
      <section class="section"><div class="container"><div class="section-heading" data-aos="fade-up"><span class="section-kicker">Branches</span><h2>District Central Branches</h2><p>The Deputy Commissioner's Office works through fourteen branches, each responsible for a specific area of public service. Branches under ADC-I handle establishment, revenue, accounts, Domicile/PRC and arms licensing, while branches under ADC-II handle judicial matters, general administration, correspondence, the Control Room and complaints. Select a branch to see its in-charge, functions and the citizen services it provides.</p></div><div class="card-grid">${branches.map(([icon, name, desc, file], i) => `<article class="dept-card branch-card d-flex flex-column" data-aos="fade-up" data-aos-delay="${(i % 4) * 70}"><i class="bi ${icon}"></i><h3 class="mt-3">${name}</h3><p>${desc}</p><a class="btn btn-primary-gradient" href="${file}">View Branch</a></article>`).join("")}</div></div></section>
      <section class="section muted-section"><div class="container"><div class="section-heading" data-aos="fade-up"><span class="section-kicker">Workflow</span><h2>How Our Branches Work</h2></div><div class="branch-workflow">${[["Citizen Request", "Apply at the counter with your documents."], ["Department Review", "The branch checks your application and papers."], ["Verification", "Records are verified, with a field report if needed."], ["Approval", "The officer reviews and decides the case."], ["Service Delivery", "You receive your certificate, licence or reply."]].map(([step, text], i) => `<div class="flow-card" data-aos="fade-up"><span class="avatar placeholder-image mx-auto"><i class="bi bi-${i === 4 ? "check2" : "arrow-down"}"></i></span><strong>${step}</strong><p class="flow-text">${text}</p></div>`).join("")}</div></div></section>
      <section class="section" id="faq"><div class="container"><div class="section-heading" data-aos="fade-up"><span class="section-kicker">Citizen Support</span><h2>Frequently Asked Questions</h2></div>${faq("branchFaq")}</div></section>
      ${sharedSupport()}</main>${siteFooter()}`;
  }

  function revenueFaq() {
    const items = [
      "How do I apply for a Revenue Certificate?",
      "How long does processing take?",
      "What documents are required?",
      "Where is the Revenue Office located?",
      "How can I contact the department?"
    ];
    return `<div class="accordion help-accordion" id="revenueFaq">${items.map((q, index) => `<div class="accordion-item"><h4 class="accordion-header" id="revFaqH${index}"><button class="accordion-button ${index ? "collapsed" : ""}" type="button" data-bs-toggle="collapse" data-bs-target="#revFaqC${index}" aria-expanded="${index ? "false" : "true"}" aria-controls="revFaqC${index}">${q}</button></h4><div id="revFaqC${index}" class="accordion-collapse collapse ${index ? "" : "show"}" aria-labelledby="revFaqH${index}" data-bs-parent="#revenueFaq"><div class="accordion-body">Citizens may visit the relevant facilitation counter with complete documents. The department reviews each request through the prescribed administrative process and provides guidance through official contact channels.</div></div></div>`).join("")}</div>`;
  }

  const revenueFunctions = [["bi-map", "Land Record Management", "Maintenance and updating of land records, record-of-rights matters, mutation records, and revenue inspections."], ["bi-cash-stack", "Revenue Collection", "Assessment and collection of land revenue, recovery of government dues, rates, cesses, and arrears where authorized."], ["bi-files", "Mutation / Dakhil-Kharij", "Processing and supervision of mutation of land rights arising from lawful transactions, with notices and record maintenance where required."], ["bi-signpost", "Demarcation and Measurement", "Conduct or supervision of demarcation, land measurement, survey-related work, and boundary identification according to prescribed revenue procedure."], ["bi-shield-check", "Government Land Protection", "Identification and protection of government land, reporting unauthorized occupation and encroachment to competent authority."], ["bi-bank", "Revenue Proceedings", "Revenue cases, appeals, enquiries, civil suits, court cases, and proceedings within statutory or delegated jurisdiction."], ["bi-building", "SBCA / Building Matters", "Coordination on illegal portions, encroachment matters, and illegal or dangerous building references."], ["bi-people", "Public Assistance", "Guidance and complaint review for citizens on revenue matters within the office's delegated authority."]];
  const revenueServices = [["bi-file-earmark-check", "Revenue Certificate", "Applicants are advised to verify required supporting documents before visiting the facilitation counter.", "revenue-certificate.html"], ["bi-folder2-open", "Land Record Information", "Information from land records for owners and legal heirs, after verification of identity and entitlement.", "land-revenue.html"], ["bi-signpost", "Mutation Guidance", "Guidance on transfer of land records after sale, gift or inheritance, and the documents needed.", "land-revenue.html"], ["bi-shield", "Government Land Matters", "Protection of government land and reporting of illegal occupation to the competent authority.", "land-revenue.html"], ["bi-building-check", "Encroachment Enquiries", "Complaints and enquiries about encroachment on public land, referred for inspection and action.", "land-revenue.html"], ["bi-headset", "Public Assistance", "Guidance for citizens on revenue procedures and the office that deals with their matter.", "public-assistance.html"]];

  function branchMain(key) {
    const b = branchData[key];
    const functions = b.functions === "REVENUE" ? revenueFunctions : b.functions;
    const services = b.services === "REVENUE" ? revenueServices : b.services;
    const page = {
      title: b.title,
      subtitle: "District Central Karachi",
      badge: "Branch",
      parent: { label: "Branches", href: "branches.html" },
      description: b.about.split(". ")[0].replace(/\.$/, "") + ".",
      actions: `<a class="btn btn-primary-gradient" href="#contact">Contact Branch</a>`
    };
    document.title = `${b.title} | District Central Karachi`;
    const nav = ["Overview", "Functions"].concat(services.length ? ["Services"] : [], ["Contact"]);
    return `${siteHeader()}<main>${pageHero(page)}
      <section class="section"><div class="container"><div class="row g-4 align-items-start"><aside class="col-lg-3 order-lg-2"><div class="sidebar-card department-sidebar" data-aos="fade-left"><h3>Quick Navigation</h3>${nav.map((item) => `<a href="#${item.toLowerCase()}"><i class="bi bi-arrow-right-circle"></i>${item}</a>`).join("")}<a href="branches.html"><i class="bi bi-grid"></i>All Branches</a></div></aside><div class="col-lg-9 order-lg-1">
        <section id="overview" class="mb-5"><div class="row g-4 align-items-center"><div class="col-md-5" data-aos="zoom-in"><div class="dc-portrait placeholder-image image-zoom"><i class="bi ${b.icon}"></i></div></div><div class="col-md-7" data-aos="fade-left"><span class="section-kicker">Branch Overview</span><h2>About ${b.title}</h2><p>${b.about}</p>${b.more ? `<p>${b.more}</p>` : ""}<div class="row g-3 mt-2">${b.incharge ? `<div class="col-md-4"><div class="mini-panel"><i class="bi bi-person"></i><strong>In-charge</strong><span>${b.incharge}</span></div></div>` : ""}<div class="col-md-4"><div class="mini-panel"><i class="bi bi-diagram-3"></i><strong>Reports To</strong><span>${b.reports}</span></div></div><div class="col-md-4"><div class="mini-panel"><i class="bi bi-list-check"></i><strong>Scope</strong><span>${b.scope}</span></div></div></div></div></div></section>
        <section id="functions" class="mb-5"><div class="section-heading text-start"><span class="section-kicker">Responsibilities</span><h2>Functions & Responsibilities</h2></div><div class="card-grid">${functions.map(([icon, title, text], i) => `<article class="dept-card" data-aos="fade-up" data-aos-delay="${(i % 4) * 70}"><i class="bi ${icon}"></i><h3>${title}</h3><p>${text}</p></article>`).join("")}</div></section>
        ${services.length ? `<section id="services" class="mb-5"><div class="section-heading text-start"><span class="section-kicker">Citizen Services</span><h2>Public Facilitation Services</h2></div><div class="row g-4">${services.map(([icon, title, text, href]) => `<div class="col-md-6 col-xl-4" data-aos="fade-up"><article class="news-card h-100"><div class="news-img placeholder-image"><i class="bi ${icon}"></i></div><div><h3>${title}</h3><p>${text}</p><a href="${href}">Learn More</a></div></article></div>`).join("")}</div></section>` : ""}
        <section id="contact" class="mb-5"><article class="contact-card" data-aos="fade-up"><span class="section-kicker">Contact</span><h2>Visit the ${b.title}</h2><p><strong>Location:</strong> Deputy Commissioner Office, Sector 15-A/1, Buffer Zone, Karachi 74600</p><p><strong>Public hours:</strong> Monday to Friday, 9:00 AM – 5:00 PM</p>${b.incharge ? `<p><strong>In-charge:</strong> ${b.incharge}</p>` : ""}<p><strong>Reports to:</strong> ${b.reports}</p><a class="btn btn-primary-gradient" href="complaint-registration.html">Submit a Complaint</a></article></section>
      </div></div></div></section>
    </main>${siteFooter()}`;
  }

  function lightbox() {
    return `<div class="lightbox-modal" id="pageLightbox" aria-hidden="true"><button class="lightbox-close" type="button" aria-label="Close image"><i class="bi bi-x-lg"></i></button><div class="placeholder-image"><i class="bi bi-image"></i></div></div>`;
  }

  document.addEventListener("DOMContentLoaded", function () {
    const root = document.getElementById("internalPage");
    if (!root) return;

    const pageKey = root.dataset.page;
    root.innerHTML = pageKey === "branches" ? branchesMain() : branchData[pageKey] ? branchMain(pageKey) : officerMain(officerPages[pageKey]);

    document.querySelectorAll(".gallery-lightbox").forEach(function (button) {
      button.addEventListener("click", function () {
        const modal = document.getElementById("pageLightbox");
        modal.classList.add("show");
        modal.setAttribute("aria-hidden", "false");
      });
    });

    const lightboxClose = document.querySelector(".lightbox-close");
    const lightbox = document.getElementById("pageLightbox");
    if (lightboxClose && lightbox) {
      lightboxClose.addEventListener("click", function () {
        lightbox.classList.remove("show");
        lightbox.setAttribute("aria-hidden", "true");
      });
      lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) lightboxClose.click();
      });
    }

    if (window.AOS) AOS.refreshHard();
  });
