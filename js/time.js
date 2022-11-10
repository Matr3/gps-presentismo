window.onload = function(){
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  
    var horaHoy = document.querySelectorAll('#time');

    for(var i = 0; i < horaHoy.length; i++){
        horaHoy[i].value = time;
    }
}