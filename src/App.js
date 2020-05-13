import React from 'react';
import logo from './logo.svg';
import './App.css';
import Quotes from './Quote';

class App extends React.Component {
  render() {
    return (
      <div id="background">
        <Quotes />
      </div>
    );
  }
}

export default App;
