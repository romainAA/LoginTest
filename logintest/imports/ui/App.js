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
      page: Main,
      ready: false
     };
  }




  render(){
    const changePageFn = {
      'SignIn': () => this.setState({page: SignIn}),
      'LoggedIn': () => this.setState({page: LoggedIn}),
      'Main': () => this.setState({page: Main}),
    }
    const Page = this.state.page
    return (<div>
      <Page
        changePageFn={changePageFn} 
        setReady={() => this.setState({ready: true})}
        ready={this.state.ready}/>
    </div>)
  }
}

export default App
