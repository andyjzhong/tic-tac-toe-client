'use strict'

const authEvents = require('./events.js')
const authApi = require('./api.js')
const authUi = require('./ui.js')
const authGame = require('../game-logic/game.js')

const store = require('../store')

const signUpSuccess = (data) => {
  console.log(data)
  $('.account-banner').text('You have successfully created an account. Log in to Play!')
  $('#signUpForm').hide()
}

const signUpFailure = (error) => {
  $('.account-banner').text("Username is taken or your passwords don't match.")
  console.error(error)
}

const signInSuccess = (data) => {
  console.log('AZ: signInSuccess from UI ran. Data contains :', data)
  store.user = data.user
  $('#signOutForm, #changePasswordForm, #createGame').show()
  $('#signUpForm, #signInForm').hide()
  $('.account-banner').text('You have successfully logged in.')
}

const signInFailure = (error) => {
  console.error('signIn failure ran. error is :', error)
  $('.account-banner').text('Either the info you typed was wrong or you need to create an account.')
}

const signOutSuccess = (data) => {
  console.log('signOut success ran. data is :', data)
  console.log('store is: ', store)
  store.user = null
  console.log('store is: ', store)
  $('#signInForm, #signUpForm').show()
  $('#signOutForm, #changePasswordForm, #createGame, #gameArea').hide()
  $('.account-banner').text('You have successfully logged out.')
}

const signOutFailure = (error) => {
  console.error('signOut failure ran. error is :', error)
}

const changePasswordSuccess = (data) => {
  console.log('changePassword success ran. data is :', data)
  $('.account-banner').text('You have successfully changed your password.')
}

const changePasswordFailure = (error) => {
  console.error('changePassword failure ran. error is :', error)
}

const createGameSuccess = (data) => {
  console.log('createGameSuccess from ui.js ran!')
  $('.box').text('')
  $('#gameArea').show()
  $('.banner-id').text("Let's Play!")
  console.log(data)
  store.game = data.game
}

const createGameFailure = (error) => {
  console.error(error)
}

const updateGameSuccess = (id) => {
  console.log('AZ: updateGameSuccess from ui.js ran!')
  console.log(id)
//  store.games = id.games
}

const updateGameFailure = (error) => {
  console.error(error)
}

const getGamesSuccess = (data) => {
  console.log('WE ARE AWESOME')
  console.log(data)
  const count = data.games.length
  $('#game-count').text(count)
}

const getGamesFailure = (error) => {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  getGamesSuccess,
  getGamesFailure
}
