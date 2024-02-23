
function calcular() {
    var txtv = document.querySelector("input#txtvel")
    var vel = Number(txtv.value)
    var resposta = document.querySelector("div#Resposta")

    resposta.innerHTML = `<p>Sua velocidade atual é <strong>${vel}Km/h</strong></p>`
    if (vel > 120) {
        resposta.innerHTML += `<p>Voce esta <strong>MULTADO!</strong></p>`
    } else {
        resposta.innerHTML += `<p>Voce esta <strong>DENTRO DAS NORMAS!</strong></p>`
    }

    resposta.innerHTML += `<p>Dirija com cuidado. Use o cinto de segurança!</p>`
}