import React, { Component } from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import Home from './components/Home';
import {About} from './components/About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
            <Switch>
              <Route exact path='/' component={Home}/>
			        <Route path='/about' component={About} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;