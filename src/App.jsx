import React ,{useEffect}from 'react';
import './App.css';
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Sign from './components/Sign';

import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { CartProvider } from './contexts/CartContext';




import { HashRouter,Routes,Route } from 'react-router-dom';

function App() {

  return (
    <CartProvider>
      <HashRouter> 
        <Routes>
          <Route path="/" element={<Home/>}/>
           <Route path="/shop" element={<Shop/>}/>
           <Route path="/About" element={<About/>}/>
           <Route path="/Contact" element={<Contact/>}/>
           <Route path="/Login" element={<Login/>}/>
           <Route path="/Sign" element={<Sign/>}/>

           <Route path="/cart" element={<Cart/>}/>
           <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      </HashRouter>
    </CartProvider>
  );
}

export default App;
