const TODOS_KEY = 'toDos'
const toDoForm = document.querySelector('#todo-form')
const toDoInput = toDoForm.querySelector('input')
const toDoList = document.querySelector('#todo-list')

let toDos = []

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo(event) {
  const li = event.target.parentElement
  toDos = toDos.filter((item) => item.id !== li.id)
  saveToDos()
  li.remove()
}

function paintToDo(toDo) {
  const li = document.createElement('li')
  li.id = toDo.id
  const span = document.createElement('span')
  const button = document.createElement('button')
  button.innerText = '❌'
  button.addEventListener('click', deleteToDo)
  span.innerText = toDo.text
  li.appendChild(span)
  li.appendChild(button)
  toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
  event.preventDefault()
  const newToDo = toDoInput.value
  toDoInput.value = ''
  objToDo = { text: newToDo, id: new Date().getTime() }
  paintToDo(objToDo)
  toDos.push(objToDo)
  saveToDos()
}

toDoForm.addEventListener('submit', handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)

if (savedToDos) {
  const arrToDos = JSON.parse(savedToDos)
  arrToDos.forEach(paintToDo)
  toDos = arrToDos
}
