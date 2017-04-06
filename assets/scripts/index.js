'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

// Go get the information from the events.js file.
const authEvents = require('./auth/events.js')
const authGame = require('./game-logic/game.js')
// On document ready, execute event handlers.
$(() => {
  authEvents.addHandlers()
  authGame.clickHandler()
  authGame.setUpGameBoard()
})
