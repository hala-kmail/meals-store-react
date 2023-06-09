
import React, { useState } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import { Fragment } from 'react';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
function App() {
 const [cartIsShown,setCartIsShown]=useState(false);
 const ShowCartHandler=()=>{
  setCartIsShown(true);
 }
 const hideCartHandler=()=>{
  setCartIsShown(false);
 }
  return (
   <CartProvider>
   {cartIsShown && <Cart onHideCart={hideCartHandler}/>}
  <Header onShowCart={ShowCartHandler}/>
  <main>
    <Meals/>
</main>
   </CartProvider>

   
  );
}

export default App;
