'use strict'

const { ipcRenderer } = require('electron')

document.getElementById('add-user-btn').addEventListener('click', () => {
  ipcRenderer.send('add-todo-window')
})

