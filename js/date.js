function fecha(){
    var fecha = new Date(); //Fecha actual
    var mes = fecha.getMonth()+1; //obteniendo mes
    var dia = fecha.getDate(); //obteniendo dia
    var ano = fecha.getFullYear(); //obteniendo año
    if(dia<10)
      dia='0'+dia; //agrega cero si el menor de 10
    if(mes<10)
      mes='0'+mes //agrega cero si el menor de 10

    var fechaHoy = document.querySelectorAll('#date');
    for(var i = 0; i < fechaHoy.length; i++){
        fechaHoy[i].value=ano+"-"+mes+"-"+dia;
    }
}

function hora(){
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  var horaHoy = document.querySelectorAll('#time');

  for(var i = 0; i < horaHoy.length; i++){
      horaHoy[i].value = time;
  }
}

window.onload = function (){
  fecha();
  hora();
}