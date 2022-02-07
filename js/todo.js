const toDoForm = document.querySelector('#todo-form')
const toDoInput = toDoForm.querySelector('input')
const toDoList = document.querySelector('#todo-list')

const toDos = []

function saveToDos() {
  localStorage.setItem('toDos', JSON.stringify(toDos))
}

function deleteToDo(event) {
  const li = event.target.parentElement
  li.remove()
}

function paintToDo(toDo) {
  const li = document.createElement('li')
  const span = document.createElement('span')
  const button = document.createElement('button')
  button.innerText = '❌'
  button.addEventListener('click', deleteToDo)
  span.innerText = toDo
  li.appendChild(span)
  li.appendChild(button)
  toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
  event.preventDefault()
  const newToDo = toDoInput.value
  toDoInput.value = ''
  paintToDo(newToDo)
  toDos.push(newToDo)
  saveToDos()
}

toDoForm.addEventListener('submit', handleToDoSubmit)
