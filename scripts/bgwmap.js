// Initialise current location custom icon
var currentLocationIcon = L.icon({
  iconUrl: '/images/current-location.png',
  
  iconSize: [56, 56]
});

// Initialise the bubur points
var buburGWDetails = "<br />Open 5pm-6pm Daily. <a href=\"https://bukapuasa.sg/signup\">Registration</a> is required. Distributed by <a href=\"https://bukapuasa.sg/\">SGUnited Buka Puasa</a>.";
var alFalahDetails = "<br />Open 2.30pm Onwards Daily. First Come, First Served basis.<br />Distributed by <a href=\"https://www.facebook.com/AL-FALAH-RESTAURANT-885964118145075/\">Al-Falah & Al-Falah Barakah Restaurants</a>.";
var anisDinDetails = "<br />Open 3.30pm to 5.30pm depending on availability. First Come, First Served basis.<br />Distributed by <a href=\"https://www.facebook.com/anisdincatering\">Anis & Din Catering</a>.";

var buburGW = [
  ["Bedok CC",1.3242600, 103.9360603, "<br />850 New Upper Changi Road, Singapore 467352"+buburGWDetails,"Government"],
  ["Boon Lay CC", 1.3482255, 103.7114949, "<br />10 Boon Lay Place Singapore 649882"+buburGWDetails,"Government"],
  ["Bukit Batok East CC", 1.3489315, 103.7582583, "<br />23 Bukit Batok East Ave 4, Singapore 659841"+buburGWDetails,"Government"],
  ["Bukit Panjang CC", 1.3763534, 103.7706518, "<br />8 Pending Road Singapore 678295"+buburGWDetails,"Government"],
  ["Eunos CC", 1.3326437, 103.9152553, "<br />180 Bedok Reservoir Road, Singapore 479220"+buburGWDetails,"Government"],
  ["Henderson CC", 1.2855724, 103.8233882, "<br />500 Bukit Merah View Singapore 159682"+buburGWDetails,"Government"],
  ["Kampong Ubi CC", 1.3178568, 103.9007543, "<br />10 Jalan Ubi, Singapore 409075"+buburGWDetails,"Government"],
  ["Keat Hong CC", 1.3840652, 103.7449238, "<br />2 Choa Chu Kang Loop, Singapore 689687"+buburGWDetails,"Government"],
  ["Kolam Ayer CC", 1.3242572, 103.8697455, "<br />3188 Geylang Bahru Singapore 339717"+buburGWDetails,"Government"],
  ["Macpherson CC", 1.3235371, 103.8844812, "<br />400 Paya Lebar Way Singapore 379131"+buburGWDetails,"Government"],
  ["Marsiling CC", 1.4406568, 103.7736152, "<br />100 Admiralty Road Singapore 739980"+buburGWDetails,"Government"],
  ["Pasir Ris Elias CC", 1.3784294, 103.9424764, "<br />93 Pasir Ris Drive 3, Singapore 519498"+buburGWDetails,"Government"],
  ["Radin Mas CC", 1.2758065, 103.8198444, "<br />51 Telok Blangah Crescent Singapore 098917"+buburGWDetails,"Government"],
  ["Taman Jurong CC", 1.3353068, 103.7216264, "<br />1 Yung Sheng Road, Singapore 618495"+buburGWDetails,"Government"],
  ["Tampines Central CC", 1.3535902, 103.9406781, "<br />Tampines Central CC @ Our Tampines Hub, 1 Tampines Walk, Singapore 528523"+buburGWDetails,"Government"],
  ["Tampines East CC", 1.3532208, 103.9546239, "<br />10 Tampines St 23, Singapore 529341"+buburGWDetails,"Government"],
  ["Teck Ghee CC", 1.3630887, 103.8535361, "<br />Blk 861 Ang Mo Kio Ave 10 Singapore 569734"+buburGWDetails,"Government"],
  ["Toa Payoh Central CC", 1.3345582, 103.8504820, "<br />93 Toa Payoh Central Singapore 319194"+buburGWDetails,"Government"],
  ["Woodlands Galaxy CC", 1.4390416, 103.8026110, "<br />31 Woodlands Ave 6, Singapore 738991"+buburGWDetails,"Government"],
  ["Nee Soon Central@Blk 749 Yishun St 72", 1.4283760, 103.8341135, "<br />Multi-Purpose hall next to Blk 749 Yishun Street 72 Singapore 760749"+buburGWDetails,"Government"],
  ["Al-Falah Hougang",1.3729784, 103.8856792,"<br />Blk 681 Hougang Avenue 8, Singapore 530681<br />Call <a href=\"tel: +6563437786\">63437786</a>"+alFalahDetails,"Business"],
  ["Al-Falah Geylang",1.3162757, 103.8991837,"<br />Al-Falah Barakah Restaurant<br />Opposite Geylang Serai Market<br />48A Changi Road Singapore 419705<br />Call <a href=\"tel: +6563487786\">63487786</a>"+alFalahDetails,"Business"],
  ["Al-Falah Serangoon",1.3226905, 103.8637971,"<br />1009 Serangoon Road, Singapore 328168<br />Call <a href=\"tel: +6562031334\">62031334</a>"+alFalahDetails,"Business"],
  ["Al-Falah Sembawang",1.4257484, 103.8256063,"<br />A&A Special Restaurant, 343 Sembawang Road, Singapore 758353<br />Call <a href=\"tel: +6567560323\">67560323</a>"+alFalahDetails,"Business"],
  ["Anis & Din Catering",1.4486086, 103.8091409,"<br />15 Woodlands Loop #03-43, Singapore 738322<br />Call <a href=\"tel: +6590664114\">90664114</a> first to confirm availability."+anisDinDetails,"Business"],
  ["Zainab",1.4422812, 103.7869156,"<br />808 Woodlands St 81 SINGAPORE 730808<br />Call <a href=\"tel: +6594874659\">94874659</a> to confirm unit and availability.<br />Only 20 packets available every Tuesday, Thursday and Saturday from 4pm to 5pm. First Come, First Served basis.<br />Distributed by Ms Zainab.","Individual"],
  ["Afghanistan Family Restaurant",1.3529216, 103.9538583,"<br />Blk 201E Tampines Street 23, Singapore 527201<br />Call <a href=\"tel:+6567837746\">67837746</a> to confirm availability. Available from 2pm onwards. First Come, First Served basis.<br />Distributed by Afghanistan Family Restaurant.","Business"],
  ["MakanShiok @ Teban Gardens",1.3209893, 103.7381807,"<br />Blk 49 Teban Gardens Road #01-583 Singapore 600049<br />Call <a href=\"tel:+6598567607\">98567607</a> to confirm availability. Available from 2pm onwards. First Come, First Served basis.<br />Distributed by MakanShiok.","Business"],
  ["Masamasamanis Caterer",1.3132030, 103.8833992,"<br />440 Geylang Road Lor 24 Singapore 389400<br />Call <a href=\"tel:+6587934243\">87934243</a> to confirm availability. Available from 3pm onwards. First Come, First Served basis.<br />Distributed by Masamasamanis Caterer.","Business"],
  ["Adam's Corner Seafood Restaurant",1.3131579, 103.8567919,"<br />452 SERANGOON ROAD SINGAPORE 218140<br />Call <a href=\"tel:+6596858468\">96858468</a> to confirm availability. Available from 3pm onwards. First Come, First Served basis.<br />Distributed by Adam's Corner Seafood Restaurant.","Business"],
  ["Sinaran Baharu",1.3317730, 103.9242365,"<br />537 BEDOK NORTH STREET #01-557 SINGAPORE 460537<br />Call <a href=\"tel:+6568718799\">68718799</a> to confirm availability. Available from 3pm to 5pm. <br /><a href=\"https://forms.gle/DWUfQYvhN6svnree6\">Registration Required for Collection</a>. Last day of registration on 30 April 2020, 5pm.<br />Distributed by Pengurusan Jenazah Sinaran Baharu Pte. Ltd.","Non-Profit"],
  ["Ghifari International Foundation",1.3775562, 103.9384104,"<br />642 PASIR RIS DRIVE 10 SINGAPORE 510642<br />Available only on Monday to Thursday from 3.30pm to 4pm and Friday to Sunday from 3.30pm to 4.30pm. <br />First come, First served basis.<br />Distributed by Ghifari International Foundation","Non-Profit"],
  ["Ghifari International Foundation",1.3094081, 103.7880856,"<br />16 GHIM MOH ROAD SINGAPORE 270016<br />Available every day from 5pm. <br />First come, First served basis.<br />Distributed by Ghifari International Foundation","Non-Profit"],
  ["Ghifari International Foundation",1.4299546, 103.8288352,"<br />701 YISHUN AVENUE 5 CHONG PANG GREEN SINGAPORE 760701<br />Available every day from 5pm. <br /><strong>Only for Elderly and Poor.</strong><br />Distributed by Ghifari International Foundation","Non-Profit"],
  ["Ghifari International Foundation",1.3033122, 103.8626165,"<br />18 JALAN SULTAN SINGAPORE 190018<br />Available only on Friday to Sunday from 5pm. <br />First come, First served basis.<br />Distributed by Ghifari International Foundation","Non-Profit"],
  ["Ghifari International Foundation",1.3646365, 103.9371739,"<br />610 TAMPINES NORTH DRIVE 1 TAMPINES GREENWEAVE SINGAPORE 520610<br />Available only on Friday to Sunday from 5pm. <br />First come, First served basis.<br />Distributed by Ghifari International Foundation","Non-Profit"],
  ["Ghifari International Foundation",1.3406957, 103.6968843,"<br />639 JURONG WEST STREET 61 SINGAPORE 640639<br />Available only on Friday to Sunday from 5pm. <br />First come, First served basis.<br />Distributed by Ghifari International Foundation","Non-Profit"]
];

var map = L.map('mapid').setView([1.3609751, 103.8218307], 12);
  mapLink = 
      '<a href="https://openstreetmap.org">OpenStreetMap</a>';
  L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; ' + mapLink + ' Contributors',
      maxZoom: 18,
      }).addTo(map);

for (var i = 0; i < buburGW.length; i++) {
  marker = new L.marker([buburGW[i][1],buburGW[i][2]])
    .bindPopup(buburGW[i][0]+buburGW[i][3])
    .addTo(map);
}

function onLocationFound(e) {
  var radius = e.accuracy / 2;
  L.circle(e.latlng, radius).addTo(map).bindPopup("You are within " + radius + " meters from this point").openPopup();
  map.flyTo(e.latlng, 15);
}

map.on('locationfound', onLocationFound);
map.locate({setView: true, maxZoom: 20});