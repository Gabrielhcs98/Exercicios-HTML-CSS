function calcular(){
    var a = Number(prompt("Qual é o valor de a?"))
    var b = Number(prompt("Qual é o valor de b?"))
    var c = Number(prompt("Qual é o valor de c?"))
    var resultado = document.getElementById("resultado")

    var delta = (b**2) - (4*a*c)
    var deltaRaiz = Math.sqrt(delta)

    var x1 = Number(((-b + deltaRaiz) / 2*a).toFixed(2))
    var x2 = Number(((-b - deltaRaiz) / 2*a).toFixed(2))

    resultado.innerHTML = `
    <h2>Resolvendo Bhaskara</h2>
    <p> A equação atual é <strong>${a}x<sup>2</sup> + ${b}x + ${c} = 0</strong></p>
    <p>O cálculo realizado será <strong>Δ = ${b}<sup>2</sup> -4 . ${a} . ${c}</strong></p>
    <p>O valor calculado foi <strong><mark>Δ = ${delta}</mark></strong></p>
    <p>Então, temos o valor de <mark><strong>X' = ${x1}</strong></mark> e <mark><strong>X" = ${x2}</strong></mark>.</p>`
}