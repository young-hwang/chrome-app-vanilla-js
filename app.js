const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input')
const loginUsername = document.querySelector('#greeting')

const HIDDEN_CLASS_NAME = 'hidden'

function onLoginSubmit(event) {
  event.preventDefault()
  const username = loginInput.value
  loginForm.classList.add(HIDDEN_CLASS_NAME)
  loginUsername.innerText = 'Hello ' + username
  loginUsername.classList.remove(HIDDEN_CLASS_NAME)
}

loginForm.addEventListener('submit', onLoginSubmit)
