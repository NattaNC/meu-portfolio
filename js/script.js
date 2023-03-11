// Scroll Reveal
window.sr = ScrollReveal({ reset: true });

ScrollReveal().reveal(".slide-left, .sobre-mim" , {
    duration: 1500,
    origin: "left",
    distance: "10px",
    easing: "ease-in-out"
  });

  ScrollReveal().reveal(".slide-up", {
    duration: 1000,
    origin: "bottom",
    distance: "50px",
    easing: "ease-in-out"
  });

  ScrollReveal().reveal(".btn", {
    duration: 4000,
    scale: 0.85
  });

  ScrollReveal().reveal("#card-html", {
    duration: 500,
    origin: "top",
    distance: "100px",
    easing: "ease-in-out"
  });

  ScrollReveal().reveal("#card-css", {
    duration: 1000,
    origin: "top",
    distance: "100px",
    easing: "ease-in-out"
  });

  ScrollReveal().reveal("#card-javascript", {
    duration: 2000,
    origin: "top",
    distance: "100px",
    easing: "ease-in-out"
  });

  ScrollReveal().reveal("#card-react", {
    duration: 3000,
    origin: "top",
    distance: "100px",
    easing: "ease-in-out"
  });

  ScrollReveal().reveal("#border-card1, #border-card2, #border-card3 ", {
    duration: 1000,
    origin: "top",
    distance: "100px",
    easing: "ease-in-out"
  });

  ScrollReveal().reveal("#border-card4, #border-card5, #border-card6 ", {
    duration: 1500,
    origin: "bottom",
    distance: "100px",
    easing: "ease-in-out"
  });

  ScrollReveal().reveal(".barra-progresso", {
    duration: 1000,
    scale: 0.85
  });

// Aside
const menu = document.querySelector('#menu-header')
const cabeçalho = document.querySelector('#header')
const PaginLado = document.querySelector('#aside')
const principal = document.querySelector('#main')
const close = document.querySelector('#fechar')

const empatia = document.querySelector('#empatia')
const flexivel = document.querySelector('#flexivel')
const estudo = document.querySelector('#estudo')
const hardskills = document.querySelector('.skills-left')
const hardskillsdir = document.querySelector('.skills-right')

menu.addEventListener('click', MenuMobile)
function MenuMobile(){
    PaginLado.style.marginLeft = '0'
    principal.style.display = 'none'
}

close.addEventListener('click', fechado)
function fechado(){
    PaginLado.style.marginLeft = '-100%'
    cabeçalho.style.display = 'flex'
    principal.style.display = 'block'
}




