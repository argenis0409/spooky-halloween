import React, { Component } from 'react';
import Costume from '../costume/Costume';
import Home from '../home/Home';

export default class Header extends Component {
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
  
     return(

         <div className="header">
            <div className="header-right">
                <a className="active" href="#">Home</a>
                <a href="#">Events</a>
                <a onClick={this.clicked} href="#">Costumes</a>
                <a href="#">Halloween Movies</a>
            </div>
      </div>
     )
 }
}