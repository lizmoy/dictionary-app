import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import Homepage from './Homepage'
import Search from './Search'
import PocketDictionary from './PocketDictionary'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/pocket">Pocket Dictionary</Link></li>
          </ul>
            <Route exact path="/" component={Homepage}/>
            <Route path="/search" component={Search}/>
            <Route path="/pocket" component={PocketDictionary}/>
        </nav>
      </div>
    );
  }
}

export default App;
