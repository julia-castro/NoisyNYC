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
  })
});
