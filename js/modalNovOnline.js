const btnOpenEl = document.querySelector(".btn-modal-open");
const btnOpenEl1 = document.querySelector(".btn-modal-open-1");
const btnOpenEl2 = document.querySelector(".btn-modal-open-2");
const btnOpenEl3 = document.querySelector(".btn-modal-open-3");
const btnOpenEl4 = document.querySelector(".btn-modal-open-4");
const btnOpenEl5 = document.querySelector(".btn-modal-open-5");
const btnOpenEl6 = document.querySelector(".btn-modal-open-6");
const btnOpenEl7 = document.querySelector(".btn-modal-open-7");
const btnCloseEl = document.querySelector(".btn-modal-close");
const btnCloseEl1 = document.querySelector(".btn-modal-close1");
const btnCloseEl2 = document.querySelector(".btn-modal-close2");
const btnCloseEl3 = document.querySelector(".btn-modal-close3");
const btnCloseEl4 = document.querySelector(".btn-modal-close4");
const btnCloseEl5 = document.querySelector(".btn-modal-close5");
const btnCloseEl6 = document.querySelector(".btn-modal-close6");
const btnCloseEl7 = document.querySelector(".btn-modal-close7");
const modal = document.getElementById("overlay");
const modal1 = document.getElementById("overlay1");
const modal2 = document.getElementById("overlay2");
const modal3 = document.getElementById("overlay3");
const modal4 = document.getElementById("overlay4");
const modal5 = document.getElementById("overlay5");
const modal6 = document.getElementById("overlay6");
const modal7 = document.getElementById("overlay7");

//2.                                The function!
btnOpenEl.addEventListener("click", openModal);
btnOpenEl1.addEventListener("click", openModal1);
btnOpenEl2.addEventListener("click", openModal2);
btnOpenEl3.addEventListener("click", openModal3);
btnOpenEl4.addEventListener("click", openModal4);
btnOpenEl5.addEventListener("click", openModal5);
btnOpenEl6.addEventListener("click", openModal6);
btnOpenEl7.addEventListener("click", openModal7);
//                                   Another One!
btnCloseEl.addEventListener("click", closeModal)
btnCloseEl1.addEventListener("click", closeModal1)
btnCloseEl2.addEventListener("click", closeModal2)
btnCloseEl3.addEventListener("click", closeModal3)
btnCloseEl4.addEventListener("click", closeModal4)
btnCloseEl5.addEventListener("click", closeModal5)
btnCloseEl6.addEventListener("click", closeModal6)
btnCloseEl7.addEventListener("click", closeModal7)

//3.
/* For the modal i'm going to be setting two different event listeners on two different buttons. The functions provided will open the modal and close the modal*/
function openModal() {
  modal.style.display = "block";
}
function openModal1() {
    modal1.style.display = "block";
}
function openModal2() {
    modal2.style.display = "block";
}
function openModal3() {
    modal3.style.display = "block";
}
function openModal4() {
    modal4.style.display = "block";
}
function openModal5() {
    modal5.style.display = "block";
}
function openModal6() {
    modal6.style.display = "block";
}
function openModal7() {
    modal7.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}
function closeModal1() {
    modal1.style.display = "none";
}
function closeModal2() {
    modal2.style.display = "none";
}
function closeModal3() {
    modal3.style.display = "none";
}
function closeModal4() {
    modal4.style.display = "none";
}
function closeModal5() {
    modal5.style.display = "none";
}
function closeModal6() {
    modal6.style.display = "none";
}
function closeModal7() {
    modal7.style.display = "none";
}