
function getChave(nn, ne){
    $.ajax("euro.php",
        {   
            method: "GET",
            dataType : "json" ,
            data: {
              nn: nn
              ne: ne
            },
            success: function(response) {
               var listaNumeros = $("#output").append('<ul></ul>').find('ul');
                    
                for (var i = 0; i < nn; i++){
                       listaNumeros.append("<li>" + response['numeros'][i] + "</li>");
                }

                var listaEstrelas = $("#output").append('<ul class="dois"></ul>').find('.dois');
                            
                for (var i = 0; i < ne; i++){
                       listaEstrelas.append("<li>" + response['estrelas'][i] + "</li>");
                }
    });
};