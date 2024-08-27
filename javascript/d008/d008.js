function desconto(){
    var produto = prompt("Qual é o produto que você está comprando?")
    var price = Number((prompt(`Qual é o preço de ${produto}?`)).replace(',','.'))

    while(isNaN(price) || price <= 0){
        var price = Number((prompt(`Preço inválido!`)).replace(',','.'))
    }

    var resultado = document.getElementById("resultado")

    var desconto = price * 0.1
    var pagar = price - desconto

    var formatPrice = conversorNumerico(price)
    var formatDesconto = conversorNumerico(desconto)
    var formatPagar = conversorNumerico(pagar)

    resultado.innerHTML = `
    <h2>Calculando desconto de 10% para ${produto}</h2>
    <p>O preço original era <strong>R$ ${formatPrice}</strong>.</p>
    <p>Você acaba de ganhar <strong>R$ ${formatDesconto}</strong> de desconto (-10%).</p>
    <p>No fim, você vai pagar <strong>R$ ${formatPagar}</strong> no produto ${produto}.</p>`
}

function conversorNumerico(numero){
    return (numero.toFixed(2)).replace('.',',')
}