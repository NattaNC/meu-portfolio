// Scroll Reveal
window.sr = ScrollReveal({ reset: true });

ScrollReveal().reveal(".slide-left, .sobre-mim" , {
    duration: 1500,
    origin: "left",
    distance: "300px",
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



//Animação
const animation = document.querySelector('#link1')
const animation2 = document.querySelector('#link2')
const animation3 = document.querySelector('#link3')
const animation4 = document.querySelector('#link4')
const animation5 = document.querySelector('#link5')
const cor01 = '#F7ECE1'
const cor02 = '#00A5CF'

//link1
animation.addEventListener('mouseenter', entrar)
function entrar() {
    animation.style.color = cor02
    animation.style.padding = '0 0 0 1rem'
    animation.style.transition = '0.5s'
}

animation.addEventListener('mouseout', sair)
function sair () {
    animation.style.color = cor01
    animation.style.padding = '0'
    animation.style.transition = '0.5s'
}
//link1

//link2
animation2.addEventListener('mouseenter', entrar2)
function entrar2() {
    animation2.style.color = cor02
    animation2.style.padding = '0 0 0 1rem'
    animation2.style.transition = '0.5s'
}

animation2.addEventListener('mouseout', sair2)
function sair2 () {
    animation2.style.color = cor01
    animation2.style.padding = '0'
    animation2.style.transition = '0.5s'
}
//link2

//link3
animation3.addEventListener('mouseenter', entrar3)
function entrar3() {
    animation3.style.color = cor02
    animation3.style.padding = '0 0 0 1rem'
    animation3.style.transition = '0.5s'
}

animation3.addEventListener('mouseout', sair3)
function sair3 () {
    animation3.style.color = cor01
    animation3.style.padding = '0'
    animation3.style.transition = '0.5s'
}
//link3

//link4
animation4.addEventListener('mouseenter', entrar4)
function entrar4() {
    animation4.style.color = cor02
    animation4.style.padding = '0 0 0 1rem'
    animation4.style.transition = '0.5s'
}

animation4.addEventListener('mouseout', sair4)
function sair4 () {
    animation4.style.color = cor01
    animation4.style.padding = '0'
    animation4.style.transition = '0.5s'
}
//link4

//link5
animation5.addEventListener('mouseenter', entrar5)
function entrar5() {
    animation5.style.color = cor02
    animation5.style.padding = '0 0 0 1rem'
    animation5.style.transition = '0.5s'
}

animation5.addEventListener('mouseout', sair5)
function sair5 () {
    animation5.style.color = cor01
    animation5.style.padding = '0'
    animation5.style.transition = '0.5s'
}
//link5
