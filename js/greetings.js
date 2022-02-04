const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input')
const loginUsername = document.querySelector('#greeting')

const HIDDEN_CLASS_NAME = 'hidden'
const USERNAME_KEY = 'username'

function onLoginSubmit(event) {
  event.preventDefault()
  const username = loginInput.value
  localStorage.setItem(USERNAME_KEY, username)
  loginForm.classList.add(HIDDEN_CLASS_NAME)
  paintGreeting(username)
}

function paintGreeting(username) {
  loginUsername.classList.remove(HIDDEN_CLASS_NAME)
  loginUsername.innerText = `Hello  ${username}`
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASS_NAME)
  loginForm.addEventListener('submit', onLoginSubmit)
} else {
  paintGreeting(savedUsername)
}
