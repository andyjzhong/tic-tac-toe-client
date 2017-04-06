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

const onSignIn = function (event) {
  console.log('sign in ran')
  event.preventDefault()

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  console.log('sign out ran')
  event.preventDefault()
  const data = getFormFields(this)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  console.log('change password ran')
  event.preventDefault()
  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// Creates an event handler to listen for when the submit button is clicked.
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
}

// Exports out the addHandlers function.
module.exports = {
  addHandlers
}
