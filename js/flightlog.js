var rowCSV;

d3.csv("csv/test.csv", init)
    .row(function(d) { return {lat: d.lat, lon: d.lon}; })
    .get(function(error, rows) { rowCSV = rows; });


//mapbox setup
function init(){
  L.mapbox.accessToken = 'pk.eyJ1IjoiZ2FydWRhcm9ib3RpY3MiLCJhIjoiUkdUN3gtOCJ9.F0kNKhYZaEm5jwSyHKpgSw';
  var map = L.mapbox.map('map', 'examples.map-h67hf2ic')
    .setView([parseFloat(rowCSV[0].lat),
    parseFloat(rowCSV[0].lon)], 18);

  var marker = L.marker([-73, 40], {
      icon: L.mapbox.marker.icon({
        'marker-color': '#f86767'
      })
  });

  var t = 0;
  window.setInterval(function() {
      // Making a lissajous curve just for fun.
      // Create your own animated path here.
      //console.log(rowCSV[t].lat);
      console.log(parseFloat(rowCSV[t].lat),
      parseFloat(rowCSV[t].lon));
      marker.setLatLng(L.latLng(
          parseFloat(rowCSV[t].lat),
          parseFloat(rowCSV[t].lon)));
      t += 1;
  }, 50);

  marker.addTo(map);

}

setTimeout(init, 1000);
