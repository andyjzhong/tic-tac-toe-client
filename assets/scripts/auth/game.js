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

const clickHandler = () =>
  $('.box').on('click', start)

module.exports = {
  clickHandler
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
