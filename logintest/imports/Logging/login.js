import { Accounts } from 'meteor/accounts-base'

export const signin (username, email, password) => {
  window.alert('Congrat, you have just signed:\n- user: '
  + username + '\n- mail: '
  + email + '\n- pwd: '
  + password)
  Accounts.createUser({username, email, password})
}

export const login (username, password) => {
  window.alert('Congrat, you have just logged:\n- user: '
  + username + '\n- mail: '
  + email + '\n- pwd: '
  + password)
  Meteor.users.find({username}).fetch
  Accounts.createUser({username, email, password})
}
