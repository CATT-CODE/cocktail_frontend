import React, { Component } from 'react';
import MainRouter from './MainRouter';

export default class App extends Component {
  state = {
    user: null,
  };
  
  handleUserLogin = (user) => {
    this.setState({ 
      user: {
        email: user.email,
      },
    });
  }
  render() {
    return (
      <>
        <MainRouter user={this.state.user} handleUserLogin={this.handleUserLogin} />
      </>
    )
  }
}

