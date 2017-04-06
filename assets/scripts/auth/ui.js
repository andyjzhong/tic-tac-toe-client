'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  console.log('signIn success ran. data is :', data)
  store.user = data.user
}

const signInFailure = (error) => {
  console.error('signIn failure ran. error is :', error)
}

const signOutSuccess = (data) => {
  console.log('signOut success ran. data is :', data)
  console.log('store is: ', store)
  store.user = null
  console.log('store is: ', store)
}

const signOutFailure = (error) => {
  console.error('signOut failure ran. error is :', error)
}

const changePasswordSuccess = (data) => {
  console.log('changePassword success ran. data is :', data)
}

const changePasswordFailure = (error) => {
  console.error('changePassword failure ran. error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
