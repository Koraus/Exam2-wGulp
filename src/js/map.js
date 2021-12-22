function initMap() {
    var options = {
       zoom:10,
       center: { lat:40.730610, lng:-73.935242} //Coordinates of New York 
    }
 var map = new google.maps.Map(document.getElementById('map'), options);
 var marker = new google.maps.Marker({
    position:{lat: 40.8682, lng: -74.1842}, // Brooklyn Coordinates
    map:map, //Map that we need to add
    icon:'./img/map-pin.png',
    // adding custom icons (Here I used a Flash logo marker)
    draggarble: true// If set to true you can drag the marker
 });
 
 var information = new google.maps.InfoWindow({
    content: '<h4>Brooklyn</h4>'
 });
 
 marker.addListener('click', function() {
    information.open(map, marker);
 });
 
 }

