let nome = document.getElementById("nome")
let nota = document.getElementById("nota")
let materia = document.getElementById("materia")
let unidade = document.getElementById("unidade")

let enviar = document.getElementById("enviar")
let table = document.querySelector("tbody")

enviar.addEventListener("click", (event)=>{
    let tabela = document.getElementsByClassName("nota")
    table.innerHTML += `
    <tr>
    <td>${nome.value}</td>
    <td class="nota">${nota.value}</td>
    <td>${materia.value}</td>
    <td>${unidade.value}</td>

    </tr> `
    event.preventDefault()
    let num = tabela.length-1
    if(tabela[num].innerHTML <=6){
        tabela[num].style.backgroundColor = "red"
    }else{
        tabela[num].style.backgroundColor = "green"
    }
})

