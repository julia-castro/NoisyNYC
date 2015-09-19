$(document).ready(function() {
  L.mapbox.accessToken = 'pk.eyJ1Ijoiam1jYXN0cm8iLCJhIjoiY2llcjl2N2x6MDFneHNtbHpubjR3enhlZCJ9.3A7IZVloogRznOfadjSoGg';
  var map = L.mapbox.map('map', 'jmcastro.cier6sgeg01h9silzqx44aeaw')
    .setView([40.7903, -73.9597], 13);

  $.ajax({
    type: 'GET',
    url: 'https://data.cityofnewyork.us/resource/fhrw-4uyv.json?$where=latitude%20IS%20NOT%20NULL%20AND%20descriptor%20=%20%27Loud%20Music/Party%27',
    dataType: 'json',
    cache: true,
    success: function(data, textStatus, jqXHR){
      for (var i = 0; i < data.length; i++){
        L.marker([data[i].latitude, data[i].longitude], {
          icon: L.mapbox.marker.icon({
            'marker-size': 'small',
            'marker-color': '#f6546a'
          })
        }).addTo(map);
        console.log(i)
      }
    },
    fail: function(jqXHR, textStatus, errorThrown){
      console.log(textStatus)
    }
  });
});
