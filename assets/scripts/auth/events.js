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

// Creates an event handler to listen for when the submit button is clicked.
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
}

// Exports out the addHandlers function.
module.exports = {
  addHandlers
}
