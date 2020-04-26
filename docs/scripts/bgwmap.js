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
  ["Ms Sary",1.2969463, 103.8392507,"<br />Blk 35 Lloyd Road, THE BOTANIC ON LLOYD, Singapore 239126<br />Call <a href=\"tel: +6591617535\">91617535</a> to confirm availability.<br />Open 5pm to 6pm depending on availability. First Come, First Served basis.<br />Distributed by Ms Sary.","Individual"],
  ["Nik",1.3229308, 103.8628900,"<br />12 SAINT GEORGE'S ROAD SAINT GEORGE'S EAST GARDENS SINGAPORE 320012<br />Call <a href=\"tel: +6588921977\">88921977</a> to confirm availability.<br />Open anytime in the day. First Come, First Served basis.<br />Distributed by Mr Nik.","Individual"],
  ["Zainab",1.4422812, 103.7869156,"<br />808 Woodlands St 81 SINGAPORE 730808<br />Call <a href=\"tel: +6594874659\">94874659</a> to confirm unit and availability.<br />Only 20 packets available every Tuesday, Thursday and Saturday from 4pm to 5pm. First Come, First Served basis.<br />Distributed by Ms Zainab.","Individual"],
  ["Faiz",1.3110500, 103.7989473,"<br />18 TAMAN WARNA SINGAPORE 276354<br />Call <a href=\"tel: +6584200918\">84200918</a> to confirm availability.<br />Available from 4.30pm to 8pm. First Come, First Served basis.<br />Distributed by Mr Faiz from Knight Frank.","Individual"],
  ["Reimy",1.3701701, 103.8357825,"<br />Blk 257 ANG MO KIO AVENUE 4 #07-61<br />Call <a href=\"tel: +6588910667\">88910667</a> to register with name and last 4 characters of NRIC and to confirm availability.<br />Available from 5pm to 6pm. First Come, First Served basis.<br />Distributed by Mr Reimy.","Individual"],
  ["Surianawati",1.3326427, 103.9225043,"<br />Blk 556 Bedok North st 3 #08-944 singapore 460556<br />Call <a href=\"tel: +6590866544\">90866544</a> to confirm availability.<br />Available from 3pm to 6pm. First Come, First Served basis.<br />Distributed by Ms Surianawati.","Individual"]
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