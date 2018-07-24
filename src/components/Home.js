import React, { Component } from 'react';
import '../App.css'
import mainBanner from '../assets/space.jpg';
import Navigator from './HeaderNavigation';


export default class Home extends Component {
    render() {
      return (
        <div className="App">
          <h1>Steven J. Carranza</h1>
          <Navigator />
        </div>
      );
    }
  }
  