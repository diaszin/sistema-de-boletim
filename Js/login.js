let email = document.getElementById("email")
let senha = document.getElementById("senha")

let verSenha = document.getElementById("verSenha")
let login = document.getElementById("login")

var contas = {
    "conta1": {
        "email": "admin",
        "senha": "admin"
    },
    "conta2": {
        "email":"kaique",
        "senha": "dias"
    }
}
console.log(Array(contas).length)

console.log(contas["conta"+"1"].email)

login.addEventListener("click",(event)=>{
    // console.log(email.value)
    // console.log(senha.value)
    // if(email.value == "admin@admin" & senha.value == "admin"){
    //     // alert("Entrei")
    //     location.href = `./index.html`
    // }else{
    //     alert("Login ou Senha Incorreto")
    // }
    num = 1
    comprimento_array = Number(Array(contas).length+1)
    while(num<=comprimento_array){
        conta_confirm = contas["conta"+String(num)]
        console.log(num)
        if(email.value == conta_confirm.email && senha.value == conta_confirm.senha){
            alert("Entrei")
            location.href = `./index.html`
            break
        }else{
            if(num == comprimento_array){
                alert("Email ou Senha Incorretos")
            }
        }
        num++
    }    
    //
})

verSenha.addEventListener("click",()=>{
    if(verSenha.innerHTML === "|||||"){
        senha.type = "text"
        verSenha.innerHTML = "/////"
    }else{
        senha.type = "password"
        verSenha.innerHTML = "|||||"
    }
})