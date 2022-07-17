//import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/sections/ItemListContainer/ItemListContainer';
import Cart from './components/sections/Cart/Cart';
import ItemDetailContainer from './components/sections/ItemDetailContainer/ItemDetailContainer';
import Error404 from './components/sections/Error404/Error404';
import { CartContext } from './context/cartContext';



function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route index path='/' element={<ItemListContainer texto="Hello Coders" />} />
            <Route path='/category/:categoryId' element={<ItemListContainer texto="Hello Coders" />} />
            <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />

            <Route path='*' element={ <Error404 /> } />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
