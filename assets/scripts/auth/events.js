'use strict'

// Goes and gets information from the GetFormFields file. This came with the template.
const getFormFields = require(`../../../lib/get-form-fields`)

// Goes and gets the info from the api.js file.
const api = require('./api')
// Goes and gets the info from the ui.js file.
const ui = require('./ui')
// Goes and gets the info from the ui.js file.
const game = require('../game-logic/game.js')

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

const clearBoard = function (event) {
  console.log('Clear Board ran!')
  event.preventDefault()
  game.clearBoard()
}

// Creates a new game.
const onCreateGame = function (event) {
  event.preventDefault()
  console.log('onCreateGame from events.js ran!')
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
  setTimeout(api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure), 2000)
}

// Updates a game.
const onUpdateGame = function (event) {
  event.preventDefault()
  console.log('AZ: onUpdateGame from events.js ran!')
  const id = getFormFields(event.target)
  console.log(id)
  api.updateGame(id)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

// Creates a new game.
const onGetGames = function (event) {
  event.preventDefault()
  console.log('onGetGames from events.js ran!')
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

// Creates an event handler to listen for when the submit button is clicked.
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#clearBoard').on('click', clearBoard)
  $('#createGame').on('click', onCreateGame)
  $('#updateGame').on('click', onUpdateGame)
  $('#game_info').on('submit', onUpdateGame)
}

// Exports out the addHandlers function.
module.exports = {
  addHandlers,
  onGetGames
}
