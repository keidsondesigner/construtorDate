const h1 = document.querySelector('.container #resultado')
const data = new Date()

function getDiaSemanaTexto(diaSemana) {
    const diaSemanaTexto = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    return diaSemanaTexto[diaSemana]

}

function getNomeMes(numeroMes) {
    const nomeMes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return nomeMes[numeroMes]

}

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function criaData(data) {
    const diaSemana = data.getDay()
    const numeroMes = data.getMonth()

    const nomeDia = getDiaSemanaTexto(diaSemana)
    const nomeMes = getNomeMes(numeroMes)

    return (
        `<h1>${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}</h1>` +
        `<h2>${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()}</h2>`
    )
}

h1.innerHTML = criaData(data)






