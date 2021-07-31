const NOTIFICATION_TITLE = 'Sistema de Boletim'
const NOTIFICATION_BODY = 'Programa iniciado com sucesso'
const CLICK_MESSAGE = 'Notificação Clicada com sucesso'
  
new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
.onclick = () => console.log(CLICK_MESSAGE)

let corpo = document.querySelector("body")
corpo.onload(()=>{
    let num = 0
    num++
    console.log(num)
})