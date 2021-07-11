const { app, BrowserWindow, Notification} = require('electron')

function createWindow () {
    const win = new BrowserWindow({
      width: 900,
      height: 600,
      icon: "Estrutura do App/assets/icon.png"
    })
    win.loadFile('Estrutura do App/index.html')
    win.setBackgroundColor("snow")
    win.maximize()
  }
app.whenReady().then(() => {
    if(BrowserWindow.length === 0){
      createWindow()
    }else{
      alert("Janela já existente")
    }
})

app.setUserTasks([
  {
    program: process.execPath,
    arguments: '--new-window',
    iconPath: process.execPath,
    iconIndex: 0,
    title: 'New Window',
    description: 'Create a new window'
  }
])