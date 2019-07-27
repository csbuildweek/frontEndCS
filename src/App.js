import React from 'react';
import Home from './components/Home.js';
import About from './components/About.js';
import './App.scss';
import './SCSS/index.scss';

import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
