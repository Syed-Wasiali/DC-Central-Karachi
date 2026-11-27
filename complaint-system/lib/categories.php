<?php
// Complaint categories, keywords used to check/suggest the category, and the office each category is routed to.
// Keywords cover English, Roman Urdu and Urdu. Edit freely.
const DC_CATEGORIES = [
  'solid-waste' => ['label' => 'Solid Waste & Garbage', 'icon' => 'bi-trash3', 'office' => 'Sindh Solid Waste Management Board / Town Municipal Corporation',
    'kw' => ['garbage','kachra','kachra kundi','trash','waste','dump','dumping','sweeper','safai','cleanliness','dustbin','kooda','کچرا','کوڑا','صفائی','گندگی']],
  'roads' => ['label' => 'Roads & Infrastructure', 'icon' => 'bi-cone-striped', 'office' => 'KMC / Town Municipal Corporation / KDA',
    'kw' => ['road','pothole','gaddha','broken road','footpath','pavement','bridge','flyover','speed breaker','carpeting','street','sarak','سڑک','گڑھا','فٹ پاتھ']],
  'illegal-construction' => ['label' => 'Illegal / Dangerous Buildings', 'icon' => 'bi-buildings', 'office' => 'Sindh Building Control Authority (SBCA)',
    'kw' => ['illegal construction','illegal building','extra floor','portion','sbca','dangerous building','collapse','crack','unauthorised floor','naqsha','تعمیر','غیر قانونی تعمیر','خطرناک عمارت']],
  'encroachment' => ['label' => 'Anti-Encroachment', 'icon' => 'bi-sign-stop', 'office' => 'Assistant Commissioner (Anti-Encroachment)',
    'kw' => ['encroachment','tajawuzat','stall','thela','cart','footpath blocked','occupied','qabza','parking','road blocked','تجاوزات','قبضہ','ٹھیلا']],
  'illegal-business' => ['label' => 'Illegal Shops & Businesses', 'icon' => 'bi-shop', 'office' => 'Assistant Commissioner of the sub-division',
    'kw' => ['illegal shop','lpg','gas cylinder','refilling','factory','godown','warehouse','unlicensed','commercial in residential','marriage hall','غیر قانونی دکان','ایل پی جی','گودام']],
  'price-control' => ['label' => 'Price Control & Overcharging', 'icon' => 'bi-tags', 'office' => 'Assistant Commissioner (Price Control)',
    'kw' => ['price','overcharging','mehnga','expensive','rate list','hoarding','profiteering','milk price','atta','sugar','meat','chicken','fruit','vegetable','قیمت','مہنگا','ذخیرہ اندوزی','گراں فروشی']],
  'water' => ['label' => 'Water Supply', 'icon' => 'bi-droplet', 'office' => 'Karachi Water & Sewerage Corporation (KWSC)',
    'kw' => ['water','pani','no water','water shortage','tanker','hydrant','pipeline','leakage','line leak','پانی','ٹینکر','ہائیڈرنٹ']],
  'sewerage' => ['label' => 'Sewerage & Drainage', 'icon' => 'bi-water', 'office' => 'KWSC / Town Municipal Corporation',
    'kw' => ['sewerage','sewage','gutter','manhole','nala','nullah','drain','overflow','choke','choked','rain water','barish','گٹر','نالہ','سیوریج','مین ہول']],
  'street-lights' => ['label' => 'Street Lights & Electricity', 'icon' => 'bi-lightbulb', 'office' => 'Town Municipal Corporation / K-Electric',
    'kw' => ['street light','light','bulb','andhera','dark','electricity','bijli','wire','pole','transformer','k-electric','ke','بجلی','اسٹریٹ لائٹ','تار']],
  'parks' => ['label' => 'Parks & Public Spaces', 'icon' => 'bi-tree', 'office' => 'Town Municipal Corporation / KMC Parks',
    'kw' => ['park','ground','playground','garden','tree','plantation','jhoola','پارک','میدان','درخت']],
  'fire-safety' => ['label' => 'Fire Safety', 'icon' => 'bi-fire', 'office' => 'Assistant Commissioner / KMC Fire Brigade',
    'kw' => ['fire','aag','fire safety','extinguisher','emergency exit','short circuit','آگ','فائر']],
  'stray-animals' => ['label' => 'Stray Dogs & Animals', 'icon' => 'bi-exclamation-octagon', 'office' => 'Town Municipal Corporation',
    'kw' => ['dog','dogs','stray','kutta','kuttay','animal','cattle','کتے','آوارہ']],
  'health' => ['label' => 'Health & Polio', 'icon' => 'bi-heart-pulse', 'office' => 'District Health Office',
    'kw' => ['hospital','dispensary','doctor','medicine','polio','vaccination','vaccine','dengue','mosquito','spray','ہسپتال','پولیو','ڈینگی','مچھر']],
  'education' => ['label' => 'Schools & Education', 'icon' => 'bi-mortarboard', 'office' => 'Education Department / TMC Schools',
    'kw' => ['school','teacher','college','fees','admission','ustad','اسکول','استاد','کالج']],
  'land-revenue' => ['label' => 'Land & Revenue', 'icon' => 'bi-map', 'office' => 'Mukhtiarkar / Revenue Branch',
    'kw' => ['land','plot','mutation','record','qabza mafia','land grabbing','property','fard','zameen','زمین','پلاٹ','انتقال']],
  'certificates' => ['label' => 'Domicile, PRC & Certificates', 'icon' => 'bi-file-earmark-person', 'office' => 'Domicile / PRC Branch, DC Office',
    'kw' => ['domicile','prc','certificate','noc','arms licence','arms license','delay','ڈومیسائل','سرٹیفکیٹ']],
  'law-order' => ['label' => 'Law & Order / Community Safety', 'icon' => 'bi-shield-exclamation', 'office' => 'Police (referred) / Residents Welfare Association',
    'kw' => ['theft','robbery','snatching','crime','drugs','police','security','gate','chori','dakaiti','چوری','ڈکیتی','منشیات']],
  'pollution' => ['label' => 'Noise, Smoke & Pollution', 'icon' => 'bi-cloud-haze2', 'office' => 'Assistant Commissioner / SEPA',
    'kw' => ['noise','loudspeaker','smoke','pollution','burning','smell','dhuan','شور','دھواں','آلودگی']],
  'office-conduct' => ['label' => 'Government Office Conduct', 'icon' => 'bi-person-x', 'office' => 'Deputy Commissioner Office',
    'kw' => ['bribe','rishwat','corruption','staff behaviour','rude','absent','رشوت','کرپشن']],
  'other' => ['label' => 'Other', 'icon' => 'bi-three-dots', 'office' => 'Complaint Cell, DC Office', 'kw' => []],
];

// Words that make a complaint urgent (risk to life or property).
const DC_URGENT_WORDS = ['fire','aag','collapse','gir gaya','falling','electrocution','current','open manhole','khula gutter','gas leak','dangerous','khatarnak','injured','زخمی','آگ','گر','کرنٹ','خطرناک'];

const DC_STATUSES = [
  'new' => ['label' => 'New', 'color' => '#2563eb'],
  'assigned' => ['label' => 'Assigned', 'color' => '#7c3aed'],
  'in-progress' => ['label' => 'In progress', 'color' => '#d97706'],
  'resolved' => ['label' => 'Resolved', 'color' => '#059669'],
  'closed' => ['label' => 'Closed', 'color' => '#4b5563'],
  'rejected' => ['label' => 'Not actionable', 'color' => '#dc2626'],
];

const DC_PRIORITIES = ['urgent' => 'Urgent', 'high' => 'High', 'normal' => 'Normal', 'low' => 'Low'];

const DC_SUBDIVISIONS = ['Gulberg', 'Liaquatabad', 'Nazimabad', 'New Karachi', 'North Nazimabad', 'Not sure'];

/** Score each category by keyword matches in the text; returns [bestKey, score]. */
function dc_classify(string $text): array {
  $t = ' ' . mb_strtolower($text) . ' ';
  $best = 'other'; $bestScore = 0;
  foreach (DC_CATEGORIES as $key => $c) {
    $score = 0;
    foreach ($c['kw'] as $w) {
      $w = mb_strtolower($w);
      if ($w === '') continue;
      $n = mb_substr_count($t, $w);
      if ($n) $score += $n * (mb_strlen($w) > 6 ? 2 : 1);
    }
    if ($score > $bestScore) { $best = $key; $bestScore = $score; }
  }
  return [$best, $bestScore];
}

function dc_is_urgent(string $text): bool {
  $t = mb_strtolower($text);
  foreach (DC_URGENT_WORDS as $w) if (mb_strpos($t, mb_strtolower($w)) !== false) return true;
  return false;
}
