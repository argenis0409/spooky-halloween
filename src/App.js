import React, { Component } from 'react';
import Home from './components/home/Home';
import Header from './components/header/Header'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: false
    }
    this.clicked = this.clicked.bind(this);
  }


clicked() {
  this.setState({ display: !this.state.display })
}


  render() {
    const { display } = this.state;
    if (display) {
      return (
        <Home />
      )
    }
    return (
      <div className='main-container'>
        <Header />
        <h1>Start Here</h1>
        <button onClick={this.clicked}>Click me</button>
        {/* {!display ?
          <Home />
          :
          <div>
            hey
          </div>
        } */}
        
      </div>
    )
  }
};

export default App;
