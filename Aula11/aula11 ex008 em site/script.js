function verificar () {
    var txt = document.querySelector("input#txt")
    var pais = String(txt.value).toLowerCase()
    var resposta = document.querySelector("div#Resposta")
    resposta.innerHTML = `<p>Voce é <strong>${pais}</strong>!</p>`


    if (pais == "br"  ) {
        resposta.innerHTML += `<p>Você é <strong>Brasileiro(a)!</strong></p>`
    } else {
        resposta.innerHTML += `<p>Você é <strong>estrangeiro!</strong></p>`
    }
}