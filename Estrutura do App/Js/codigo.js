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
    }else if(tabela[num] === undefined){
        tabela[num].style.backgroundColor = "red"
    }else{
        tabela[num].style.backgroundColor = "green"
    }
    var tr = document.querySelectorAll("tr")
    var tr = tr.length-1
    qtdTabela.innerHTML = `Atualmente Existe ${tr} Dados Cadastrados...`

    var input = document.querySelectorAll("input")
    num = 0
    for(;num<input.length;num++){
        input[num].value = ""
        if(num==3){
            break
        }
    }
    // nota.value = ""
    input[0].focus()

})
console.log(Number(nome.style.width))
nome.addEventListener("keyup", ()=>{
    comprimento_nome = String(nome.value).length
    console.log(comprimento_nome)
    if(comprimento_nome >=10){
        nome.style.width= `${comprimento_nome}2px`
    }else if(comprimento_nome===0){
        nome.style.width= `auto`
    }
})

let logout = document.getElementById("logout")
logout.addEventListener("click", ()=>{
    var temcerteza = confirm("Tem certeza que quer sair?")
    console.log(temcerteza)
    if(temcerteza===true){
        location.href = `./login.html`
    }
})