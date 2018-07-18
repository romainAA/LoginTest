import React from 'react';
import { Meteor } from 'meteor/meteor';

import LoginForm from './LoginForm'

class App extends React.Component{
  constructor() {
    super();
    this.state = {
     };
  }


  render(){
    return (<div>
      Accueil
      <LoginForm/>
    </div>)
  }
}

export default App
