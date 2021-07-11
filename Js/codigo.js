let nome = document.getElementById("nome")
let nota = document.getElementById("nota")
let materia = document.getElementById("materia")
let unidade = document.getElementById("unidade")

let importante = document.getElementById("importante")
let enviar = document.getElementById("cadastrar")
let table = document.querySelector("tbody")

let tr = document.querySelectorAll("tr")
var qtdTabela = document.getElementById("qtdAluno")
qtdTabela.innerHTML = `Atualmente Existe ${tr.length-(1)} Dados Cadastrados...`

enviar.addEventListener("click", (event)=>{
    if(importante.checked){
        table.innerHTML += `
        <tr>
        <td class="importante">${nome.value}</td>
        <td class="nota">${nota.value}</td>
        <td class="importante">${materia.value}</td>
        <td class="importante">${unidade.value}</td>
        
        </tr> `
    }else{
        table.innerHTML += `
        <tr>
        <td>${nome.value}</td>
        <td class="nota">${nota.value}</td>
        <td>${materia.value}</td>
        <td>${unidade.value}</td>
        
        </tr> `
    }
    let tabela = document.getElementsByClassName("nota")
    event.preventDefault()
    let num = tabela.length-1
    if(tabela[num].innerHTML <=6){
        tabela[num].style.backgroundColor = "red"
    }else{
        tabela[num].style.backgroundColor = "green"
    }
    var tr = document.querySelectorAll("tr")
    var tr = tr.length-1
    qtdTabela.innerHTML = `Atualmente Existe ${tr} Dados Cadastrados...`
})