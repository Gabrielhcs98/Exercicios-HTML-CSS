function converter(){
    var celsius = Number((prompt("Digite uma temperatura em °C (Celsius)")).replace(',','.'))
    var resultado = document.querySelector('div#resultado')

    var kelvin = ((celsius + 273.15).toFixed(2)).replace('.',',')
    var fahrenheit = ((((celsius * (9/5)) + 32)).toFixed(2)).replace('.',',')
    
    resultado.innerHTML = `
        <h2>A temperatura de ${celsius} corresponde a...</h2>
        <p>${kelvin}°K (Kelvin)</p>
        <p>${fahrenheit}°F (Fahrenheit)</p>`
}