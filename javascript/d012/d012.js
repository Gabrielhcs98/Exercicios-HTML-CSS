function verificar(){
    var price = Number(prompt(`Qual era o preço anterior do produto?`))
    var newPrice = Number(prompt(`Qual o preço atual do produto?`))
    var resultado = document.getElementById("resultado")

    if (price < newPrice) {
        var porcentagem = ((newPrice * 100) / price) - 100
        var variacao = newPrice - price
        
        var priceBR = price.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
        var newPriceBR = newPrice.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
        var variacaoBR = variacao.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})

        resultado.innerHTML = `
        <h2>Analisando os valores informados</h2>
        <p>O produto custava ${priceBR} e agora custa ${newPriceBR}.</p>
        <p>Hoje o produto está mais caro.</p> 
        <p>O preço subiu ${variacaoBR} em relação ao preço anterior.</p>
        <p>Uma variação de ${porcentagem}% para cima.</p>`
    } else if(price == newPrice) {
        var priceBR = price.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
        var newPriceBR = newPrice.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
        
        resultado.innerHTML = `
        <h2>Analisando os valores informados</h2>
        <p>O produto custava ${priceBR} e agora custa ${newPriceBR}.</p>
        <p>Ou seja, não houve variação real.</p>`
    }else {
        var porcentagem = ((newPrice * 100) / price).toFixed(2)
        var variacao = price - newPrice

        var priceBR = price.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
        var newPriceBR = price.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
        var variacaoBR = variacao.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})

        resultado.innerHTML = `
        <h2>Analisando os valores informados</h2>
        <p>O produto custava ${priceBR} e agora custa ${newPriceBR}.</p>
        <p>Hoje o produto está mais barato.</p> 
        <p>O preço caiu ${variacaoBR} em relação ao preço anterior.</p>
        <p>Uma variação de ${porcentagem}% para cima.</p>`
    }
}