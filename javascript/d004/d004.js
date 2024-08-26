function buyProduct(){
    var produto = prompt("Que produto você está comprando?")
    var price = Number (prompt(`Quanto custa ${produto} que você está comprando?`))
    var valorPago = Number (prompt(`Qual foi o valor que você deu para pagar ${produto}?`))
    
    var troco = valorPago - price

    if (troco<0) {
        troco = -troco
        alert(`O ${produto} que escolheu custou R$${price},00. \nAinda falta R$${troco},00 para completar o pagamento.`)
    } else if (troco == 0) {
        alert(`Você comprou ${produto} que custou R$${price},00.\nVolte sempre!`)
    } else{
        alert(`Você comprou ${produto} que custou R$${price},00. \nDeu R$${troco},00 de troco. \nVolte sempre!`)
    }
}