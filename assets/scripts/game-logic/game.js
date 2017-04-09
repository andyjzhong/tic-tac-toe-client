'use strict'

const player1 = 'X'
const player2 = 'O'
let currentPlayer = 'O'

// This alternates player turns.
const currentTurn = function () {
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
  for (let i = 0; i < gameCellIds.length; i++) {
    const elementId = gameCellIds[i]
    const element = document.getElementById(elementId)
    element.addEventListener('click', updateCell)
  }
}

// This logs an X or O into the gameBoard array.
const updateCell = function () {
  console.log(gameBoard)
  const id = this.id
  // const index = index1[1]
  gameBoard[id] = currentPlayer
  checkWinner()
  checkDraw()
  turnCounter()
}

const clickHandler = () =>
  $('.box').on('click', start)

// Function for button to reset the game board.
const clearBoard = function () {
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

const turnCounter = function () {
  const totalTurns = gameBoard.join('').length
  return totalTurns
}

// Array to check win status. Build array during game.
const gameBoard = new Array(9)

// To see if X has won any of the rows.
const xWinsRow = function () {
// This checks each of the rows to see if 3 cells in a ROW are filled with X's.
  if ((gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') ||
  (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') ||
  (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X')) {
    return true
  }
}

const xWinsCol = function () {
// This checks each of the rows to see if 3 cells in a COL are filled with X's.
  if ((gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') ||
  (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') ||
  (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X')) {
    return true
  }
}

const xWinsDiag = function () {
// This checks each of the rows to see if 3 cells in a DIAG are filled with X's.
  if ((gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') ||
  (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X')) {
    return true
  }
}

// To see if O has won any of the rows.
const oWinsRow = function () {
// This checks each of the rows to see if 3 cells in a ROW are filled with O's.
  if ((gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') ||
  (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') ||
  (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O')) {
    return true
  }
}

const oWinsCol = function () {
// This checks each of the rows to see if 3 cells in a COL are filled with O's.
  if ((gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') ||
  (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') ||
  (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O')) {
    return true
  }
}

const oWinsDiag = function () {
// This checks each of the rows to see if 3 cells in a DIAG are filled with O's.
  if ((gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') ||
  (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O')) {
    return true
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
  console.log('Check Winner Ran!')
  if (xWins() === true) {
    $('.banner-id').text('Player X Wins!')
    return 'X'
  }
  if (oWins() === true) {
    $('.banner-id').text('Player O Wins!')
    return 'O'
  }
}
// Function to check if there is a Draw.
const checkDraw = function () {
  console.log('Check Draw Ran!')
  if (turnCounter() === 9) {
    $('.banner-id').text("It's a Draw!")
  }
}

module.exports = {
  clickHandler,
  setUpGameBoard,
  updateCell,
  clearBoard,
  resetHandler,
  checkWinner,
  checkDraw,
  turnCounter
}
