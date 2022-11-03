const btNovedad = document.getElementById("novedad");

btNovedad.addEventListener("click",function(e){
    e.preventDefault();
    document.querySelector(".presentismo-coord").style.display = "none";
    document.querySelector(".presentismo-vig").style.display = "none";
    document.querySelector(".marcaciones").style.display = "none";
    document.querySelector(".novedades-onLine").style.display = "block";
    document.querySelector(".novedades-onLine").classList.add("full_screen");
});

const btpresCoord = document.getElementById("presCoord");

btpresCoord.addEventListener("click",function(e){
    e.preventDefault();
    document.querySelector(".novedades-onLine").style.display = "none";
    document.querySelector(".presentismo-vig").style.display = "none";
    document.querySelector(".marcaciones").style.display = "none";
    document.querySelector(".presentismo-coord").style.display = "block";
    document.querySelector(".presentismo-coord").classList.add("full_screen");
});

const btpresVig = document.getElementById("presVig");

btpresVig.addEventListener("click",function(e){
    e.preventDefault();
    document.querySelector(".presentismo-coord").style.display = "none";
    document.querySelector(".novedades-onLine").style.display = "none";
    document.querySelector(".marcaciones").style.display = "none";
    document.querySelector(".presentismo-vig").style.display = "block";
    document.querySelector(".presentismo-vig").classList.add("full_screen");
});

const btmarca = document.getElementById("marca");

btmarca.addEventListener("click",function(e){
    e.preventDefault();
    document.querySelector(".presentismo-coord").style.display = "none";
    document.querySelector(".presentismo-vig").style.display = "none";
    document.querySelector(".novedades-onLine").style.display = "none";
    document.querySelector(".marcaciones").style.display = "block";
    document.querySelector(".marcaciones").classList.add("full_screen");
});