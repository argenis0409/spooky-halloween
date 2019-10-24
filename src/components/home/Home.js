import React, { Component } from 'react';
 import Header from '../header/Header';
 import Footer from '../footer/Footer'

export default class Home extends Component {

  render() {
    return (
      <div>
        <Header />
        <h1 className="home-spooky"> Spooky Halloween</h1>
        <Footer />
      </div>
    )
  }
};
