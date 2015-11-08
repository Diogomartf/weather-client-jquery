
/*ao carregar no botao submeter vai buscar o valor que esta lá e chama a funcao que faz o pedido para ir buscar o tempo,
 depois muda a propriadade display para mostrar os elementos que estao escondidos*/

function getForecast(city_name) {
    $('#forecast').css({
        display: 'block'
    });
    
    $.ajax("http://api.openweathermap.org/data/2.5/forecast?",
    {   
        method: "GET",
        dataType : "json" ,
        data: {
          APPID: "105c6a96fc6cc478bc7c239d696a4d04",
          q: city_name,
          units: "metric"
        },
        success: function(response) {
            document.getElementById("day1").innerHTML = response['list'][0].main.temp + " ºC";
            document.getElementById("day2").innerHTML = response['list'][5].main.temp + " ºC";
            document.getElementById("day3").innerHTML = response['list'][10].main.temp + " ºC";
            document.getElementById("day4").innerHTML = response['list'][15].main.temp + " ºC";
            document.getElementById("day5").innerHTML = response['list'][20].main.temp + " ºC";
            document.getElementById("humidity1").innerHTML = response['list'][0].main.humidity;
            document.getElementById("humidity2").innerHTML = response['list'][5].main.humidity;
            document.getElementById("humidity3").innerHTML = response['list'][10].main.humidity;
            document.getElementById("humidity4").innerHTML = response['list'][15].main.humidity;
            document.getElementById("humidity5").innerHTML = response['list'][20].main.humidity;       
            document.getElementById("description1").innerHTML = response['list'][0].weather[0].description;    
            document.getElementById("description2").innerHTML = response['list'][5].weather[0].description;
            document.getElementById("description3").innerHTML = response['list'][10].weather[0].description;
            document.getElementById("description4").innerHTML = response['list'][15].weather[0].description;
            document.getElementById("description5").innerHTML = response['list'][20].weather[0].description;
            var cont = 0;
            for(var i = 0; i <= 20; i += 5){
              cont++;
             whatIcon(response['list'][i].weather[0].description, cont);
            }
        },
        error: function(xhr) {
           alert("Erro");
        }
    });


};

function getWeather(city_name) {
    $('#weather').css({
        display: 'block'
    });
    //pedido http get para ir buscar a temperatura od se passa a cidade atraves da variavel city_name, as units: metric é para vir em celcius, appid é api key
    $.ajax("http://api.openweathermap.org/data/2.5/weather?",
    {   
        method: "GET",
        dataType : "json" ,
        data: {
          APPID: "105c6a96fc6cc478bc7c239d696a4d04",
          q: city_name,
          units: "metric"
        },
        success: function(response) {
          //Em caso do pedido ser com sucesso passar as variaveis para o html
          document.getElementById("city").innerHTML = city_name;
          document.getElementById("temp").innerHTML = response['main'].temp + " ºC";
          document.getElementById("humidity").innerHTML = response['main'].humidity +" %";
          document.getElementById("description").innerHTML = response['weather'][0].description ;
          
        },
        error: function(xhr) {
           alert("Erro");
        }
    });
}

function whatIcon(description, i){
  if(description.indexOf("clear") > -1){
      $("#icon".concat(i)).append('<i class="wi wi-day-sunny"></i>');
  }else if(description.indexOf("light rain") > -1){
      $("#icon".concat(i)).append('<i class="wi wi-day-rain"></i>');
  }else if(description.indexOf("few clouds") > -1){
      $("#icon".concat(i)).append('<i class="wi wi-day-cloudy"></i>');
  }else if(description.indexOf("scattered ") > -1){
      $("#icon".concat(i)).append('<i class="wi wi-cloudy"></i>');
  }else if(description.indexOf("moderate rain") > -1){
      $("#icon".concat(i)).append('<i class="wi wi-showers"></i>');
  }else if(description.indexOf("overcast ") > -1){
      $("#icon".concat(i)).append('<i class="wi wi-cloudy-windy"></i>');
  };
}


