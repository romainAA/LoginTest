import { Accounts } from 'meteor/accounts-base'

export default (username, email, password) => {
  window.alert('Congrat, you have just logged in with:\n- user: '
  + username + '\n- mail: '
  + mail + '\n- pwd: '
  + password)
  Accounts.createUser({username, email, password})
}
