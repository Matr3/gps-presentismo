
var tabla = document.querySelector(".deslizarMenu");
var maTr3 = true;
tabla.addEventListener("click",function(){
       const display =  document.querySelectorAll(".bt-menu"); 
       if (maTr3) {
        document.getElementById("menu").style.width = "0";
        for(var i = 0; i < display.length; i++){
            display[i].style.display = "none";
        }
        maTr3 = false;
           
        }else {
            document.getElementById("menu").style.width = "250px";
            for(var i = 0; i < display.length; i++){
                display[i].style.display = "block";
            }
            maTr3 = true;   
        }
});


var bts = document.querySelector(".bt-titulo");

bts.addEventListener("click",function(e){
    e.preventDefault();
    const x = document.getElementsByClassName("submenu");
    var i;
    for (i = 0; i < x.length; i++) {
        if (x[i].style.display === "block"){
            x[i].style.display = "none";
        }else{
            x[i].style.display = "block";
        }
    }
});

var bts1 = document.querySelector(".bt-titulo-1");

bts1.addEventListener("click",function(e){
    e.preventDefault();
    const x = document.getElementsByClassName("submenu1");
    var i;
    for (i = 0; i < x.length; i++) {
        if (x[i].style.display === "block"){
            x[i].style.display = "none";
        }else{
            x[i].style.display = "block";
        }
    }
});

var bts2 = document.querySelector(".bt-titulo-2");

bts2.addEventListener("click",function(e){
    e.preventDefault();
    const x = document.getElementsByClassName("submenu2");
    var i;
    for (i = 0; i < x.length; i++) {
        if (x[i].style.display === "block"){
            x[i].style.display = "none";
        }else{
            x[i].style.display = "block";
        }
    }
});
