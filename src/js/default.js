// Default JavaScript Functions and Initiations

// Load Custom Google Font
WebFont.load({
  google: {
    families: ['Source Sans Pro:200,300,400,600,700,900', 'Clicker Script']
  }
});

// Google Map
function googleMap() {
  var map = document.getElementById('google-map');

  var map_options = {
    center: new google.maps.LatLng(-37.9073198,145.1494552),
    scrollwheel: false,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(map, map_options)

  // Map Marker
  var myLatlng = new google.maps.LatLng(-37.9073198,145.1494552);
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    icon: '../img/pin.svg'
  });
  map.panBy(-300, 0);
}
google.maps.event.addDomListener(window, 'load', googleMap);