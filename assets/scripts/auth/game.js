'use strict'

const player1 = 'X'
const player2 = 'O'
let currentPlayer = 'O'

// This alternates player turns.
const currentTurn = function () {
  console.log("It's " + currentPlayer + "'s turn now.'")
  currentPlayer = currentPlayer === player1 ? player2 : player1
  return currentPlayer
}

// Prevents overwriting.
const start = function () {
  $(this).html(currentTurn)
  $(this).unbind()
}

// Creates the cell IDs.
let gameCellIds = [
  'box-0',
  'box-1',
  'box-2',
  'box-3',
  'box-4',
  'box-5',
  'box-6',
  'box-7',
  'box-8'
]

// This creates the game object for logging the user
const gameObject = {
  'game': {
    'id': 3,
    'cells': ['', '', '', '', '', '', '', '', ''],
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
  console.log('this element id = ' + id)
  const index1 = id.split('-')
  const index = index1[1]
  gameObject.game.cells[index] = currentPlayer
  console.log('gameObject', gameObject)
}

const clickHandler = () =>
  $('.box').on('click', start)

module.exports = {
  clickHandler,
  setUpGameBoard,
  updateCell
}

/*
  const currentTurn = function () {
   $(this).html(currentPlayer = currentPlayer === player1 ? player2 : player1)
   $(this).val(currentPlayer)
   $(this).unbind()
   console.log($(this))
   $(this).val($(this))
   return currentTurn
  }
  $(‘.box’).on(‘click’, currentTurn())
  */
