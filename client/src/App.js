import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css"
import Home from './Home';
import NavBar from './NavBar';
import Shop from './Shop';


function App() {
  console.log('App component rendered');
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
