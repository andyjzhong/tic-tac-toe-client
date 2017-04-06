'use strict'

// Goes and gets information from the GetFormFields file. This came with the template.
const getFormFields = require(`../../../lib/get-form-fields`)

// Goes and gets the info from the api.js file.
const api = require('./api')
// Goes and gets the info from the ui.js file.
const ui = require('./ui')

// This is the signup function that dictates success or fail. It also prevents it from defaulting to refreshing the page.
const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

// This function is to help figure out who starts the game.
const gameStart = function () {
  document.turn = 'X'
  setMessage(document.turn + ' gets to start.')
}

// This function is for setting the message for whose turn it is.
const setMessage = function (msg) {
  document.getElementById('message').innerText = msg
}

// Creates an event handler to listen for when the submit button is clicked.
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
}

// Exports out the addHandlers function.
module.exports = {
  gameStart,
  setMessage,
  addHandlers
}
