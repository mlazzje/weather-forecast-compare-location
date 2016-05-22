// Docs at http://simpleweatherjs.com
$(document).ready(function() {
  $.simpleWeather({
    zipcode: '',
    woeid: '2357536', //2357536
    location: '',
    unit: 'c',
    success: function(weather) {
      html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.alt.temp+'&deg;C</li></ul>';
       
      for(var i=0;i<weather.forecast.length;i++) {
        html += '<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'</p>';
      }
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
  
  $.simpleWeather({
    zipcode: '',
    woeid: '2487956', //2357536
    location: '',
    unit: 'c',
    success: function(weather) {
      html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.alt.temp+'&deg;C</li></ul>';
  
      for(var i=0;i<weather.forecast.length;i++) {
        html += '<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'</p>';
      }
  
      $("#weather2").html(html);
    },
    error: function(error) {
      $("#weather2").html('<p>'+error+'</p>');
    }
  });
});
