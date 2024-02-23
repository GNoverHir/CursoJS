// Site MDN WEB DOCS com lista de eventos JS
// https://yari-demos.prod.mdn.mozit.cloud/pt-BR/docs/Web/Events 


var a = document.getElementById('area')

a.addEventListener('click', clicar)
a.addEventListener('mouseenter', mouseEntrou)
a.addEventListener('mouseout', mouseSaiu)

function clicar() {
    a.innerText = "Clicou"
    a.style.background = 'green'
}

function mouseEntrou () {
    a.innerText = "Clica ai, vai!"
    a.style.background = "orange"
}

function mouseSaiu () {
    a.innerText = "Volta aqui!"
    a.style.background = "red"
}