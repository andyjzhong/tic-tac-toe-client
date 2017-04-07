'use strict'

const player1 = 'X'
const player2 = 'O'
let currentPlayer = 'O'

// This alternates player turns.
const currentTurn = function () {
  console.log("It's " + currentPlayer + "'s turn now.")
  currentPlayer = currentPlayer === player1 ? player2 : player1
  return currentPlayer
}

// Prevents overwriting.
const start = function () {
  $(this).html(currentTurn)
  $(this).unbind()
}

// Creates the cell IDs.
const gameCellIds = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8'
]

// This creates the game object for logging the user
const gameObject = {
  'game': {
    'id': 1,
    'cells': ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
    'over': false,
    'player_x': {
      'id': 1,
      'email': 'and@and.com'
    },
    'player_o': null
  }
}

// This adds an event listener every time a box is clicked, run the updateCell function.
const setUpGameBoard = function () {
  console.log('setUpGameBoard ran!')
  for (let i = 0; i < gameCellIds.length; i++) {
    const elementId = gameCellIds[i]
    const element = document.getElementById(elementId)
    element.addEventListener('click', updateCell)
  }
}

// This logs an id into the gameObject array.
const updateCell = function () {
  console.log(currentPlayer)
  const id = this.id
  console.log('ID of clicked box = ' + id)
  const index = id.split('-')
  // const index = index1[1]
  gameObject.game.cells[index] = currentPlayer
  console.log('gameObject', gameObject)
}

const clickHandler = () =>
  $('.box').on('click', start)

// These next few functions help determine whether or not there is a winner.
const winChecker = function () {
  console.log('winChecker ran!')
}

// This lists out all the possible winning combinations.
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 5],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

// Use a forEach function in order to run winChecker.
forEach.

module.exports = {
  clickHandler,
  setUpGameBoard,
  updateCell
}
