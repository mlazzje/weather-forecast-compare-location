// Docs at http://simpleweatherjs.com
$(document).ready(function() {
  $.simpleWeather({
    zipcode: '',
    woeid: '', //2357536
    location: 'Paris, FR',
    unit: 'c',
    success: function(weather) {
      html = '';
      html += '<ul class="box">';
      html += '<li class="title"><h3>'+weather.city+', '+weather.region+'</h3></li>';
      html += '</ul>';
      html += '<ul class="box">';
      html += '<li style="flex: 1"><h3>'+weather.temp+'&deg;'+weather.units.temp+'</h3></li>';
      html += '<li style="flex: 1"><img src="'+weather.image+'"></img></li>';
      html += '</ul>';
      
       
      for(var i=0;i<weather.forecast.length;i++) {
          
        html += '<ul class="box">';
        html += '<li style="flex: 1"><h3>'+weather.forecast[i].low+'~'+weather.forecast[i].high+'&deg;'+weather.units.temp+'</h3></li>';
        html += '<li style="flex: 1"><img src="'+weather.forecast[i].image+'"></img></li>';
        html += '</ul>';
       
      }
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
  
  $.simpleWeather({
    zipcode: '',
    woeid: '', //2357536
    location: 'Lyon, FR',
    unit: 'c',
    success: function(weather) {
      html = '';
      html += '<ul class="box">';
      html += '<li class="title"><h3>'+weather.city+', '+weather.region+'</h3></li>';
      html += '</ul>';
      html += '<ul class="box">';
      html += '<li style="flex: 1"><h3>'+weather.temp+'&deg;'+weather.units.temp+'</h3></li>';
      html += '<li style="flex: 1"><img src="'+weather.image+'"></img></li>';
      html += '</ul>';
      
       
      for(var i=0;i<weather.forecast.length;i++) {
          
        html += '<ul class="box">';
        html += '<li style="flex: 1"><h3>'+weather.forecast[i].low+'~'+weather.forecast[i].high+'&deg;'+weather.units.temp+'</h3></li>';
        html += '<li style="flex: 1"><img src="'+weather.forecast[i].image+'"></img></li>';
        html += '</ul>';
      }
  
      $("#weather2").html(html);
    },
    error: function(error) {
      $("#weather2").html('<p>'+error+'</p>');
    }
  });
});
