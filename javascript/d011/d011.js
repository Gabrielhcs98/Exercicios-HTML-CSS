function verificar(){
    var ano = prompt("Qual o ano que você quer verificar?")
    var resultado = document.getElementById("resultado")

    var resto4 = ano%4
    var resto100 = ano%100
    var resto400 = ano%400

    if ((resto4 == 0 && resto100 !== 0) || resto400 == 0) {
        resultado.innerHTML = `
        <h2>Analisando o ano de ${ano}...</h2>
        <p>O ano de ${ano} <strong>
            <mark style="background-color: rgba(0, 255, 0, 0.7)">É BISSEXTO</mark>
        </strong> &#x2705</p>`
    } else{
        resultado.innerHTML = `
        <h2>Analisando o ano de ${ano}...</h2>
        <p>O ano de ${ano} <strong>
            <mark style="background-color: rgba(255, 0, 0, 0.7)"> NÃO É BISSEXTO</mark>
        </strong> &#x274C</p>`
    }
}