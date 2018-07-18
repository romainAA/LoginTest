import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import PasswordField from 'material-ui-password-field'
import Button from '@material-ui/core/Button';
import { compose, withState } from 'recompose'

import login from '../Logging/login'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#CCCCCC',
    width: 'fit-content'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  }
});

const loginForm = ({username, setUsername, password, setPassword, mail, setMail, classes}) =>{
  return (
<form className={classes.container} noValidate autoComplete="off">
  <TextField
          id="username"
          label="username"
          className={classes.textField}
          value={username}
          onChange={e => setUsername(e.target.value)}
          margin="normal"
        />
  <TextField
          id="mail"
          label="email"
          className={classes.textField}
          value={mail}
          onChange={e => setMail(e.target.value)}
          margin="normal"
        />
  <TextField
          id="password"
          label="password"
          className={classes.textField}
          value={password}
          onChange={e => setPassword(e.target.value)}
          margin="normal"
  />
  <Button
    variant='contained'
    className={classes.button}
    onClick={() => login(username, mail, password)}
    >Log In</Button>
</form>)}

export default compose(
  withState('username', 'setUsername',''),
  withState('password', 'setPassword', ''),
  withState('mail', 'setMail', '')
)(withStyles(styles)(loginForm))
