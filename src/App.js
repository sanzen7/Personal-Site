import React, { Component } from 'react';
import './App.css';
import Navigator from './components/HeaderNavigation.js';
import mainBanner from './/assets/space.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Reactstrap</h1>
        <Navigator />
        <img className="bannerPhoto" src={mainBanner} alt="space main"/>
      </div>
    );
  }
}

export default App;
