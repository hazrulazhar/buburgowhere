const oneMapUrl = 'https://developers.onemap.sg/commonapi/search?searchVal=';
const oneMapParams = '&returnGeom=Y&getAddrDetails=Y';

new Autocomplete('#autocomplete', {
  // Search function can return a promise
  // which resolves with an array of
  // results. In this case we're using
  // the Wikipedia search API.
  search: input => {
    const url = `${oneMapUrl}${encodeURI(input)}${oneMapParams}`

    return new Promise(resolve => {
      if (input.length < 3) {
        return resolve([])
      }

      fetch(url)
        .then(response => response.json())
        .then(data => {
          resolve(data.results)
        })
    })
  },

  /*
    Onemap returns this if successful
    {
        "found": 6,
        "totalNumPages": 1,
        "pageNum": 1,
        "results": [
        {
            "SEARCHVAL": "MULTI STOREY CAR PARK",
            "BLK_NO": "788A",
            "ROAD_NAME": "WOODLANDS CRESCENT",
            "BUILDING": "MULTI STOREY CAR PARK",
            "ADDRESS": "788A WOODLANDS CRESCENT MULTI STOREY CAR PARK SINGAPORE 731788",
            "POSTAL": "731788",
            "X": "24488.702830000002",
            "Y": "47317.783489999994",
            "LATITUDE": "1.444199486",
            "LONGITUDE": "103.8017661",
            "LONGTITUDE": "103.8017661"
        }]
    }

    Onemap returns this if not successful
    {"error":"Parameter searchVal is missing"}
  */
  getResultValue: result => result.ADDRESS,

  // Open the selected article in
  // a new window
  onSubmit: result => {
    gotoLocation(result.LATITUDE,result.LONGITUDE,result.ADDRESS);
  }

})

function gotoLocation(latitude,longitude,address) {
  var latlng = new L.LatLng(latitude, longitude);
  // show current location
  L.circle(latlng, 30).addTo(map).bindPopup(address).openPopup();
  map.flyTo(latlng, 15);
}

// todo
function getNearest(latitude, longitude) {
  var index = leafletKnn(layer);
}