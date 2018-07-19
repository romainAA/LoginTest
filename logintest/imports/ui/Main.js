import React from 'react';

import Button from '@material-ui/core/Button';
import LoginForm from './LoginForm'

export default (props) =>
<div style={{display: 'flex', flexDirection: 'column'}}>
  <h1>Accueil</h1>
  <LoginForm changePageFn={props.changePageFn}/>
  <div style={{height: '10px'}}/>
  <Button onClick={props.changePageFn['SignIn']} variant='contained' style={{width: 'fit-content'}}>Sign in</Button>
</div>
