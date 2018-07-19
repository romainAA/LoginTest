import React from 'react';
import Button from '@material-ui/core/Button';

import SignInForm from './SignInForm'

export default (props) =>
<div style={{display: 'flex', flexDirection: 'column'}}>
  <h1>Signing in</h1>
  <SignInForm changePageFn={props.changePageFn}/>
  <div style={{height: '10px'}}/>
  <Button onClick={props.changePageFn['Main']} variant='contained' style={{width: 'fit-content'}}>Cancel</Button>
</div>
