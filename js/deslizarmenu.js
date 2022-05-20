
var tabla = document.querySelector(".deslizarMenu");
var maTr3 = true;
tabla.addEventListener("click",function(){
        var x = document.getElementById("menu");
        
       if (maTr3) {
        document.getElementById("menu").style.width = "0";
        maTr3 = false;
           
        }else {
            document.getElementById("menu").style.width = "200px";
            maTr3 = true;
           
        }
});


var bts = document.querySelector(".bt-titulo");

bts.addEventListener("click",function(){
    var x = document.getElementsByClassName("bt-menu");
    var i;
    for (i = 0; i < x.length; i++) {
        if (x[i].style.display === "block"){
            x[i].style.display = "none";
        }else{
            x[i].style.display = "block";
        }
    }
});

