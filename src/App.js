import React, { Component } from 'react';
import './Assets/css/default.min.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


import Header from './components/headerComponent/header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React-Starter-Kit</h1>

          <Header />
      </div>
    );
  }
}

export default App;
