function contar(){
    var ini = document.getElementById('inicio')
    var end = document.getElementById('fim')
    var pass = document.getElementById('passo')
    var resultado = document.getElementById('resultado')

    if (ini.value == "" || end.value == "" || pass.value == "") {
        alert('Digite todos os dados!')
        resultado.innerHTML = `<p>Preparando a contagem...</p>`
    } else {
        resultado.innerHTML = `Contando: <br>`
        var inicio = Number(ini.value)
        var fim = Number(end.value)
        var passo = Number(pass.value)

        if (passo == 0) {
            alert (`Passo 0 inválido, considerando Passo como 1`)
            passo = 1
        }

        if (passo < 0) {
            passo = -passo
            alert (`Passo negativo inválido, considerando Passo como ${passo}`)
        }

        if (inicio > fim) {
            do {
                resultado.innerHTML += `${inicio} \u{27A1}`
                inicio -= passo
            } while (inicio > fim)
        } else if (inicio == fim) {
        } else{
            do {
                resultado.innerHTML += `${inicio} \u{27A1}`
                inicio += passo
                } while (inicio < fim)
        }
        resultado.innerHTML += `${inicio} \u{1F3C1}`
    }
}