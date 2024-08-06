/* Scroll reveal - 
Mostrar o elemento quando der scroll na página */

const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "5px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `
.s-hero .title, 
.s-success .tag ,
.title-success,
.cards,
.card,
.s-about,
.about-me .my-picture,
.s-cases,
.title-cases,
.cases`,
  { interval: 50 }
);

const nav = document.querySelector("header .container nav");

const toggle = document.querySelectorAll(".toggle");

for (element of toggle) {
  element.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

const links = document.querySelectorAll(
  "nav .menu li .menu-item, nav .btn-primary, nav .menu-social li a"
);

for (const link of links) {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
}


const vmRealiza = document.getElementById('vmRealiza');
const stormtech = document.getElementById('stormtech');
const rouxinol = document.getElementById('rouxinol');
const racing = document.getElementById('racing');
const bystorm = document.getElementById('bystorm');

const bystormModal = document.getElementById('bystormModal');
const vmModal = document.getElementById('vmModal');
const rouxinolmModal = document.getElementById('rouxinolmModal');
const racingmModal = document.getElementById('racingmModal');
const stormModal = document.getElementById('stormModal');

const closeStormModal = document.getElementById('closeStormModal')
const closeRacingmModal = document.getElementById('closeRacingmModal')
const closeRouxinolModal = document.getElementById('closeRouxinolModal')
const closeVmModal = document.getElementById('closeVmModal')
const closeBystormModal = document.getElementById('closeBystormModal')

function closeVm () {
  vmModal.style.display = "none";
}

function openModalVm() {
  vmModal.style.display = "flex";
}


function closeBystorm () {
  bystormModal.style.display = "none";
}

function openModalBystorm() {
  bystormModal.style.display = "flex";
}


function closeRacing () {
  racingmModal.style.display = "none";
}

function openModalRacing() {
  racingmModal.style.display = "flex";
}


function closeRouxinol () {
  rouxinolmModal.style.display = "none";
}

function openModalRouxinol() {
  rouxinolmModal.style.display = "flex";
}


function closeStorm () {
  stormModal.style.display = "none";
}

function openModalStorm() {
  stormModal.style.display = "flex";
}

// Events

closeVmModal.addEventListener('click', closeVm)
closeStormModal.addEventListener('click', closeStorm)
closeRacingmModal.addEventListener('click', closeRacing)
closeRouxinolModal.addEventListener('click', closeRouxinol)
closeBystormModal.addEventListener('click', closeBystorm)



vmRealiza.addEventListener('click', openModalVm)
stormtech.addEventListener('click', openModalStorm)
rouxinol.addEventListener('click', openModalRouxinol)
racing.addEventListener('click', openModalRacing)
bystorm.addEventListener('click', openModalBystorm)

