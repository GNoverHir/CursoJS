var corpo = window.document.body
var p1 = window.document.getElementsByTagName("p")[1]

window.document.write("Esta Escrito Assim: " + p1.innerText + "<br>")
window.document.write("Escrito com o negrito: " + p1.innerHTML)
p1.style.color = "blue"
corpo.style.backgroundColor = "black"



// var d = window.document.getElementById("msg") <- Variavel feita ById
var d = document.querySelector("div#msg") // <- Variavel feita querySelecto = ("Chave HTML + Sintex CSS # para id e . para class + nome da class ou id")
d.style.backgroundColor = "Green"


// Dois jeitos de mudar o texto 
d.style.innerText = "Primeira forma"
window.document.getElementById("msg").innerHTML = "Segunda Forma"


var t = window.document.getElementsByName("titulo")[0]
t.style.color = "Yellow"
