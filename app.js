
/*ao carregar no botao submeter vai buscar o valor que esta lá e chama a funcao que faz o pedido para ir buscar o tempo,
 depois muda a propriadade display para mostrar os elementos que estao escondidos*/
$(document).on("click", ":submit", function(e){
    var city_name = $('#city_name').val();
    getWeather(city_name);
    $('#weather').css({
        display: 'block'
    });
});

function getWeather(city_name) {
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


