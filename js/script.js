






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