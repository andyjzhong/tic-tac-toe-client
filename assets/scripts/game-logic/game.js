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
/*
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
*/

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
  // const index = index1[1]
  gameBoard[id] = currentPlayer
  console.log('gameBoard', gameBoard)
  checkWinner()
}

const clickHandler = () =>
  $('.box').on('click', start)

// Function for button to reset the game board.
const clearBoard = function () {
  console.log('Clearboard ran!')
}

const resetHandler = () =>
  $('#reset-board').on('click', clearBoard)

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

const threeInARow = function () {

}

// Array to check win status. Build array during game.
const gameBoard = new Array(9)

// To see if X has won any of the rows.
const xWinsRow = function () {
// This checks each of the rows to see if 3 cells in a row are filled with X's.
  if ((gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') ||
  (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') ||
  (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X')) {
    console.log('True')
  }
}

// Requirements for X to win.
const xWins = function () {
  return xWinsRow()
  // || xWinsColumns() || xWinsDiagonal()
}

// Requirements for O to win.
const oWins = function () {}

// Function to check if either X or O is a winner.
const checkWinner = function () {
  console.log('checkWinner ran!')
  if (xWins()) {
    return 'X'
  }
  if (oWins()) {
    return 'O'
  }
  return null
}

module.exports = {
  clickHandler,
  setUpGameBoard,
  updateCell,
  clearBoard,
  resetHandler
}
