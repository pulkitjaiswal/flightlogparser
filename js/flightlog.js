var rowCSV;

d3.csv("csv/test.csv")
    .row(function(d) { return {lat: d.lat, lon: d.lon}; })
    .get(function(error, rows) { console.log(rows); });


//mapbox setup

L.mapbox.accessToken = 'pk.eyJ1IjoiZ2FydWRhcm9ib3RpY3MiLCJhIjoiUkdUN3gtOCJ9.F0kNKhYZaEm5jwSyHKpgSw';
var map = L.mapbox.map('map', 'examples.map-h67hf2ic')
  .setView([29, -26], 2);

var marker = L.marker([-73, 40], {
    icon: L.mapbox.marker.icon({
      'marker-color': '#f86767'
    })
});

var t = 0;
window.setInterval(function() {
    // Making a lissajous curve just for fun.
    // Create your own animated path here.
    marker.setLatLng(L.latLng(
        Math.cos(t * 0.5) * 50,
        Math.sin(t) * 50));
    t += 0.1;
}, 50);

marker.addTo(map);
