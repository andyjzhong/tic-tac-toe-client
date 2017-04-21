'use strict'

const player1 = 'X'
const player2 = 'O'
let currentPlayer = 'X'

// This alternates player turns.
const currentTurn = function (id) {
  $('#move_marker_form').val(currentPlayer)
  $('#index_form').val(id)
  currentPlayer = currentPlayer === player1 ? player2 : player1
  return currentPlayer
}

// Prevents overwriting.
const start = function () {

}

// Creates the cell Ids array.
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

// Retrieves the This adds an event listener every time a box is clicked, run the updateCell function.
const setUpGameBoard = function () {
  $('#signUpForm, #signInForm, #signOutForm, #changePasswordForm, #game_info, #createGame, #gameArea').show()
  $('#signOutForm, #changePasswordForm, #game_info, #createGame, #gameArea').hide()
  // for (let i = 0; i < gameCellIds.length; i++) {
  //   const elementId = gameCellIds[i]
  //   const element = document.getElementById(elementId)
  //   element.addEventListener('click', updateCell)
  // }
}

// This logs an X or O into the gameBoard array.
const updateCell = function () {
  if ($(this).html() === '' && $('#game_over_form').val() === 'false') {
    const id = this.id
    $(this).html(currentPlayer)
    gameBoard[id] = currentPlayer
    currentTurn(id)
    checkWinner()
    checkDraw()
    turnCounter()
    $('#game_info').submit()
  }
}

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
let gameBoard = new Array(9)

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
  if (xWins() === true) {
    $('.banner-id').text('Player X Wins!')
    $('#game_over_form').val('true')
    return 'X'
  }
  if (oWins() === true) {
    $('.banner-id').text('Player O Wins!')
    $('#game_over_form').val('true')
    return 'O'
  }
}
// Function to check if there is a Draw.
const checkDraw = function () {
  if (turnCounter() === 9 && $('#game_over_form').val() === 'false') {
    $('.banner-id').text("It's a Draw!")
    $('#game_over_form').val('true')
  }
}

const clickHandler = () =>
  $('.box').on('click', start)

const resetHandler = () =>
  $('#reset-board').on('click', clearBoard)

const clearBoard = function () {
  gameBoard = []
  currentPlayer = 'X'
}

module.exports = {
  clickHandler,
  setUpGameBoard,
  updateCell,
  resetHandler,
  checkWinner,
  checkDraw,
  turnCounter,
  start,
  gameBoard,
  currentPlayer,
  clearBoard
}
