import React from 'react';
import { Meteor } from 'meteor/meteor';

import LoginForm from './LoginForm'
import Main from './Main'
import LoggedIn from './LoggedIn'
import SignIn from './SignIn'

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      ready: false,
      page: Main
     };
     Meteor.subscribe('userData', this.setState({ready: true}))
  }




  render(){
    const changePageFn = {
      'SignIn': () => this.setState({page: SignIn}),
      'LoggedIn': () => this.setState({page: LoggedIn}),
      'Main': () => this.setState({page: Main}),
    }
    const Page = this.state.page
    return (<div>
      {this.state.ready ? <Page changePageFn={changePageFn}/> : 'Wait'}
    </div>)
  }
}

export default App
