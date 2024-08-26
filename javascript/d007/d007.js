var cotacao = Number(prompt("Antes de mais nada. Quanto está a cotação dólar agora?"))
var resultado = document.querySelector("div#resultado")

function conversor(){
    var reais = Number(prompt("Quantos R$ você tem na carteira?"))
    var quantidade = reais / cotacao
    resultado.innerHTML = `
    <p>Você vai conseguir comprar ${quantidade} dólares hoje!</p>`
}
