function reajustar(){
    var nome = prompt("Qual é o nome do funcionário?")
    var salario = Number(prompt(`Qual é o salário de ${nome}`).replace(',','.'))
    var aumentoPercentual = Number(prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`).replace(',','.'))
    var resultado = document.getElementById("resultado")

    var aumento = salario * (aumentoPercentual / 100)
    var novoSalario = salario + aumento

    var salarioBRL = salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    var aumentoBRL = aumento.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    var novoSalarioBRL = novoSalario.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})

    resultado.innerHTML = `
    <h2>${nome} recebeu um aumento salarial!</h2>
    <p>O salário atual era ${salarioBRL}.</p>
    <p>Com o aumento de ${aumentoPercentual}%, o salário vai aumentar ${aumentoBRL} no próximo mês.</p>
    <p>E a partir daí, ${nome} vai passar a ganhar ${novoSalarioBRL}.</p>`

}