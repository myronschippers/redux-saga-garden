import React, { Component } from 'react';
import Garden from '../Garden/Garden';

// CSS
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to your garden!</h1>
        </header>
        <Garden />
      </div>
    );
  } 
}

export default App;
