import React, { Component } from 'react';

export default class Header extends Component {
 render() {
     return(
        <div className="header">
        <div className="header-right">
          <a className="active" href="#">Home</a>
          <a href="#">Events</a>
          <a href="#">Costums</a>
          <a href="#">Halloween Movies</a>
        </div>
      </div>
     )
 }
}