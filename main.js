'use strict'
const path = require('path')
const { app, ipcMain } = require('electron')
const Window = require('./Window')
const DataStore = require('./DataStore')
require('electron-reload')(__dirname)
const todosData = new DataStore({ name: 'Todos Main' })
function main () {
  let mainWindow = new Window({
    file: path.join('renderer', 'index.html')
  })
  let addTodoWin
  mainWindow.once('show', () => {
    mainWindow.webContents.send('todos', todosData.todos)
  })
  ipcMain.on('add-todo-window', () => {
    if (!addTodoWin) {
      addTodoWin = new Window({
        file: path.join('renderer', 'add.html'),
        width: 1000,
        height: 600,
        parent: mainWindow
      })
      addTodoWin.on('closed', () => {
        addTodoWin = null
      })
    }
  })
  ipcMain.on('add-todo', (event, todo) => {
    const updatedTodos = todosData.addTodo(todo).todos
    mainWindow.send('todos', updatedTodos)
  })
  ipcMain.on('delete-todo', (event, todo) => {
    const updatedTodos = todosData.deleteTodo(todo).todos
    mainWindow.send('todos', updatedTodos)
  })
}
app.on('ready', main)
app.on('window-all-closed', function () {
  app.quit()
})
