let historico = []
let medicao = document.getElementById('medicao')
let dataMed = document.getElementById('dataMed')
let eat = document.getElementById('eat')

function mandar() {

    if (localStorage.getItem('historico') != null)
        historico = JSON.parse(localStorage.getItem('historico'))


    historico.push({
        medicao: medicao.value,
        data: dataMed.value,
        eat: eat.value,
    })

    console.log(historico)
    localStorage.setItem("hitorico", JSON.stringify(historico))
    medicao.value = ""
    dataMed.value = ""
    eat.value = ""

}