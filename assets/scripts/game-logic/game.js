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

// This adds an event listener every time a box is clicked, run the updateCell function.
const setUpGameBoard = function () {
  console.log('setUpGameBoard ran!')
  for (let i = 0; i < gameCellIds.length; i++) {
    const elementId = gameCellIds[i]
    const element = document.getElementById(elementId)
    element.addEventListener('click', updateCell)
  }
}

// This logs an X or O into the gameBoard array.
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
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

// Array to check win status. Build array during game.
const gameBoard = new Array(9)

// To see if X has won any of the rows.
const xWinsRow = function () {
// This checks each of the rows to see if 3 cells in a ROW are filled with X's.
  if ((gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') ||
  (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') ||
  (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X')) {
    console.log('True')
    console.log('X wins via Row!')
  }
}

const xWinsCol = function () {
// This checks each of the rows to see if 3 cells in a COL are filled with X's.
  if ((gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') ||
  (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') ||
  (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X')) {
    console.log('True')
    console.log('X wins via Column!')
  }
}

const xWinsDiag = function () {
// This checks each of the rows to see if 3 cells in a DIAG are filled with X's.
  if ((gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') ||
  (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X')) {
    console.log('True')
    console.log('X wins via Diagonal!')
  }
}

// To see if O has won any of the rows.
const oWinsRow = function () {
// This checks each of the rows to see if 3 cells in a ROW are filled with O's.
  if ((gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') ||
  (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') ||
  (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O')) {
    console.log('True')
    console.log('O wins via Row!')
    alert('O wins!')
  }
}

const oWinsCol = function () {
// This checks each of the rows to see if 3 cells in a COL are filled with O's.
  if ((gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') ||
  (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') ||
  (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O')) {
    console.log('True')
    console.log('O wins via Column!')
  }
}

const oWinsDiag = function () {
// This checks each of the rows to see if 3 cells in a DIAG are filled with O's.
  if ((gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') ||
  (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O')) {
    console.log('True')
    console.log('O wins via Diagonal!')
  }
}

// Requirements for X to win.
const xWins = function () {
  return xWinsRow() || xWinsCol() || xWinsDiag()
}

// Requirements for O to win.
const oWins = function () {
  return oWinsRow() || oWinsCol() || oWinsDiag()
}

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
