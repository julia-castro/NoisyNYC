$(document).ready(function() {
  $.ajax({
    type: 'GET',
    url: 'https://data.cityofnewyork.us/resource/erm2-nwe9.json?descriptor=Loud%20Music/Party',
    dataType: 'json',
    cache: true,
    success: function(data, textStatus, jqXHR){
      console.log(data)
    },
    fail: function(jqXHR, textStatus, errorThrown){
      console.log(textStatus)
    }
  });

  L.mapbox.accessToken = 'pk.eyJ1Ijoiam1jYXN0cm8iLCJhIjoiY2llcjl2N2x6MDFneHNtbHpubjR3enhlZCJ9.3A7IZVloogRznOfadjSoGg';
  var map = L.mapbox.map('map', 'jmcastro.cier6sgeg01h9silzqx44aeaw')
    .setView([40.7903, -73.9597], 13);

});
