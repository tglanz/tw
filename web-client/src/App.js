import React from 'react';
import './App.css';

import Navigator from './components/Navigator';
import Router from './components/Router';

export default props => (
  <div className='App-container'>
    <header>
      <h3>Welcome to the web client!</h3>
      <small>It is currently used more for testing stuff</small>
    </header>

    <nav>
      <Navigator />
    </nav>

    <section>
      <Router />
    </section>
  </div>
);

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
*/