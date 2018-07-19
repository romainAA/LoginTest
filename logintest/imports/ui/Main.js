import React from 'react';
import { withState } from 'recompose'

import Button from '@material-ui/core/Button';
import LoginForm from './LoginForm'

const myMain = ({changePageFn, error, setError}) =>
<div style={{display: 'flex', flexDirection: 'column'}}>
  <h1>Accueil</h1>
  {error &&
    <div style={{backgroundColor: 'rgb(250,100,10,0.5)', width:'528px', margin: '10px', padding: '10px'}}>
      {error}
    </div>
  }
  <LoginForm changePageFn={changePageFn} setError={setError}/>
  <div style={{height: '10px'}}/>
  <Button onClick={changePageFn['SignIn']} variant='contained' style={{width: 'fit-content'}}>Sign in</Button>
</div>

export default withState('error', 'setError', '')(myMain)
