import React, { Component } from 'react';
import Garden from '../Garden/Garden';
import Container from '@material-ui/core/Container';

// CSS
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <h1>Welcome to your garden!</h1>
        </header>

        <Container maxWidth="lg">
          <Garden />
        </Container>
      </div>
    );
  } 
}

export default App;
