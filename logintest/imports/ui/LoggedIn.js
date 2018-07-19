import React from 'react';
import {withTracker} from 'meteor/react-meteor-data'

import Button from '@material-ui/core/Button';

const LoggedInPage = (props) =>{
  const user = Meteor.user()
  console.log(props.user.fetch())
  return <div style={{display: 'flex', flexDirection: 'column'}}>
    <h1>Logged in: Hello {user.username}</h1>
    {props.ready ? 'This account has: ' + user.emails.length+'+ email addresses and ' + user.emails.filter(x => x.verified).length + ' of them are verified.' : 'Loading'}
    <div style={{height: '10px'}}/>
    <Button onClick={props.changePageFn['Main']} variant='contained' style={{width: 'fit-content'}}>Log out</Button>
  </div>}

export default withTracker(() => {
  Meteor.subscribe('usersMails', { onReady: () => null})
  return ({
    user: Meteor.users.find({ _id: Meteor.userId()})
  })
})
  (LoggedInPage)
