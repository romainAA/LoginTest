import React from 'react';

import Button from '@material-ui/core/Button';

export default (props) =>{
const user = Meteor.user()
return <div style={{display: 'flex', flexDirection: 'column'}}>
  <h1>Logged in: Hello {user.username}</h1>
  {console.log(user) && user.emails ? 'This account has: ' + user.emails.length+'+ email addresses and ' + user.emails.filter(x => x.verified).length + ' of them are verified.' : 'This account doesn\'t have any email address associated.'}
  <div style={{height: '10px'}}/>
  <Button onClick={props.changePageFn['Main']} variant='contained' style={{width: 'fit-content'}}>Log out</Button>
</div>}
