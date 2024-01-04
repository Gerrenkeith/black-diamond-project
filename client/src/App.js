import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "./App.css"
import Home from './Home';
import NavBar from './NavBar';
import Shop from './Shop';
import ItemPage from './ItemPage';
import Cart from './Cart';


function App() {  
  console.log('App component rendered');

  const items = [
    { id: 1, name: 'item 1', description: "Lorem ipsum dolor sit amet, consectetur", price: 300, quantity: 1 },
    { id: 2, name: 'Item 2', description: "Lorem ipsum dolor sit amet, consectetur", price: 300, quantity: 1 },
    { id: 3, name: 'Item 3', description: "Lorem ipsum dolor sit amet, consectetur", price: 300, quantity: 1 },
    { id: 4, name: 'Item 4', description: "Lorem ipsum dolor sit amet, consectetur", price: 300, quantity: 1 },
    { id: 5, name: 'Item 5', description: "Lorem ipsum dolor sit amet, consectetur", price: 300, quantity: 1 },
    { id: 6, name: 'Item 6', description: "Lorem ipsum dolor sit amet, consectetur", price: 300, quantity: 1 },
    { id: 7, name: 'Item 7', description: "Lorem ipsum dolor sit amet, consectetur", price: 300, quantity: 1 },
    { id: 8, name: 'Item 8', description: "Lorem ipsum dolor sit amet, consectetur", price: 300, quantity: 1 },
    { id: 9, name: 'Item 9', description: "Lorem ipsum dolor sit amet, consectetur", price: 300, quantity: 1 },
    { id: 10, name: 'Item 10', description: "Lorem ipsum dolor sit amet, consectetur", price: 300, quantity: 1 },
    { id: 11, name: 'Item 11', description: "Lorem ipsum dolor sit amet, consectetur", price: 300, quantity: 1 },
];

const [ cart, setCart ] = useState( [ ] );

 
function addToCart ( item ){
  const existingItem = cart.find((cartItem) => cartItem.id === item.id)
  

  if (existingItem) {
    const originalPrice = existingItem.price / existingItem.quantity
    existingItem.quantity += 1
    existingItem.price += originalPrice  
  } else {
      setCart( ( cart ) => [ ...cart, item ] )
  }
  console.log( cart )
}
  

  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path="/" element={<><NavBar /> <Home /></>}/>
          <Route path="/shop" element={<><NavBar /><Shop items={items} addToCart={addToCart} /></>} />
          {items.map((item) => (
            <Route key={item.id} path={`/item/${item.id}`} element={<><NavBar /><ItemPage item={item} addToCart={addToCart} /></>} />
          ))}
          <Route path="/cart" element={<><NavBar /><Cart cart={cart} addToCart={addToCart} /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
