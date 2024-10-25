import React from 'react';
import './App.css';
import UserService from './Components/UserService';
import ProductService from './Components/ProductService';
import OrderService from './Components/OrderService';

function App() {
  return (
    <div className="App">
      <h1>Frontend de Microservicios</h1>
      <UserService />
      <ProductService />
      <OrderService />
    </div>
  );
}

export default App;
