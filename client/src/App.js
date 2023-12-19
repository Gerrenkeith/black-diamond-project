import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css"
import Home from './Home';
import NavBar from './NavBar';
import Shop from './Shop';
import ItemPage from './ItemPage';


function App() {  
  console.log('App component rendered');

  const items = [
    { id: 1, name: 'item 1', price: '$300' },
    { id: 2, name: 'Item 2', price: '$300' },
    { id: 3, name: 'Item 3', price: '$300' },
    { id: 4, name: 'Item 4', price: '$300' },
    { id: 5, name: 'Item 5', price: '$300' },
    { id: 6, name: 'Item 6', price: '$300' },
    { id: 7, name: 'Item 7', price: '$300' },
    { id: 8, name: 'Item 8', price: '$300' },
    { id: 9, name: 'Item 9', price: '$300' },
    { id: 10, name: 'Item 10', price: '$300' },
    { id: 11, name: 'Item 11', price: '$300' },
];

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/shop">
            <Shop items={items}/>
          </Route>
          {items.map((item) => (
            <Route key={item.id} path={`/item/${item.id}`}>
              {/* Render the ItemDetail component and pass the current item */}
              <ItemPage item={item} />
            </Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
