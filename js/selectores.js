window.onload = function() {
    $.post("php/listaObj.php", function(data) {
        const selector1 =  document.querySelectorAll("#SelectObj");
        for(var i = 0; i < selector1.length; i++){
        $(selector1[i]).html(data);
        }
    });
    $.post("php/listaCoord.php", function(data) {
        const selector =  document.querySelectorAll("#SelectCoord");
        for(var i = 0; i < selector.length; i++){
        $(selector[i]).html(data);
        }
    });
}