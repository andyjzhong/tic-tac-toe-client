'use strict'

// Go get the information from config.js. This came with the template.
const config = require('../config')
// Go get the information from store.js. This came with the template.
const store = require('../store')

// Creates the Ajax function to POST data for Signing up.
const signUp = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-up/',
    method: 'POST',
    data: data
  })
}

const signIn = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-in/',
    method: 'POST',
    data: data
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = (data) => {
  console.log('data is ', data)
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// Creates the Ajax function to POST data for new game
const createGame = (data) => {
  console.log('createGame from api.js ran!')
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// Creates the Ajax function to PATCHES data into a game id!
const updateGame = (data) => {
  console.log('AZ: updateGame from api.js ran!')
  console.log('Your id is:' + data)
  console.log(store)
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// Creates the Ajax function to POST data for new game!
const getGames = (id) => {
  console.log('AZ: getGames from api.js ran!')
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// Exports out the signUp Ajax function.
module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createGame,
  updateGame,
  getGames
}
