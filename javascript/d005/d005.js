function converter() {
    var metros = Number(prompt("Digite uma distância em metros (m):").replace(',','.'))
    var resultado = document.querySelector('div#resultado')
    
    var km = (metros / 1000).toLocaleString('pt-BR')
    var hm = (metros / 100).toLocaleString('pt-BR')
    var dam = (metros / 10).toLocaleString('pt-BR')
    var dm= (metros * 10).toLocaleString('pt-BR')
    var cm = (metros * 100).toLocaleString('pt-BR')
    var mm = (metros * 1000).toLocaleString('pt-BR')

    if (metros < 0) {
        alert ("Distância não pode ser negativa. \n Verifique e tente novamente!")
    } else {
    resultado.innerHTML = `<h2>A distância de ${metros} metros, corresponde a...</h2>
    <p>${km} quilômetros (Km)</p> 
    <p>${hm} hectômetros (Hm)</p> 
    <p>${dam} decâmetros (Dam)</p>
    <p>${dm} decímetros (dm)</p> 
    <p>${cm} centímetros (cm)</p>
    <p>${mm} milímetros (mm)</p>`
    }
}