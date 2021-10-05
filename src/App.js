import React from 'react';
import { useState } from 'react';
import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Footer from './components/footer/Footer';
import Cart from './components/Cart'


function App() {
  const [showCart, setShowCart] = useState(false);

  function handleShowCart() {
    setShowCart(true)
  }
  
  return (
    <div>
     <Header show={handleShowCart}/>
     {showCart && <Cart/>}
     <Categories/>
     <Products/>
     <Footer/>     
    </div>
  )
}

export default App