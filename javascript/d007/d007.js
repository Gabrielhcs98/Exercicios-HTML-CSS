var cotacao = Number((prompt("Antes de mais nada. Quanto está a cotação dólar agora?")).replace(',','.'))

while (isNaN(cotacao) || cotacao <= 0) {
    var cotacao = Number(prompt("Digite um número válido!"))
}

function conversor(){
    var reais = Number((prompt("Quantos R$ você tem na carteira?")).replace(',','.'))
    var quantidade = Number(reais / cotacao)
    var resultado = document.querySelector("div#resultado")
    
    if (quantidade < 1) {
        resultado.innerHTML = `
    <p>Você não vai conseguir comprar nem 1 dólar hoje!</p>`
    } else if (quantidade == 1) {
        resultado.innerHTML = `
    <p>Você vai conseguir comprar apenas 1 dólar hoje!</p>`
    } else {
        quantidade = (quantidade.toFixed(2)).toLocaleString('pt-BR')
        resultado.innerHTML = `
    <p>Você vai conseguir comprar <strong>${quantidade}</strong> dólares hoje!</p>`
    }
}
