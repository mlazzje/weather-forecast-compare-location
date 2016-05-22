var loadWeather = function (location, id) {
    $.simpleWeather({
        zipcode: '',
        woeid: '', //2357536
        location: location,
        unit: 'c',
        success: function(weather) {
            html = '';
            html += '<ul class="box">';
            html += '<li id="weather-title'+id
                +'" class="title"><h3 class="clickable">'
                +weather.city+', '
                +weather.region+'</h3></li>';
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
    
            $("#weather"+id).html(html);
            titleClickable(id);
        },
        error: function(error) {
            $("#weather"+id).html('<p>'+error+'</p>');
        }
    });        
}

var titleClickable = function(id) {
    $('#weather-title'+id+' h3').click({id: id},changeLocation);
}

var changeLocation = function (o) {
    var form = $('<form></form>').attr({ id: o.data.id});
    var input = $('<input/>').attr({ type: 'text', id: 'weather-input'+o.data.id, name: 'input-location'});
    var button = $('<input/>').attr({ type: 'submit', id: 'weather-button'+o.data.id, name: 'button-location'});
    
    form.submit(setLocation);
    input.placepicker();
    
    input.appendTo(form);
    button.appendTo(form);
    
    $('#weather-title'+o.data.id).html(form);
}

var setLocation = function (e) {
    
    var values = this.elements;
    var input = $(values[0]);
    
    loadWeather(input.context.value,e.target.id);
    
    return false;
}

$(document).ready(function() {
    loadWeather("Paris, FR",1);
    loadWeather("Lyon, FR",2);
});
