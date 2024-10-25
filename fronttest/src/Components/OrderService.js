import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderService = () => {
  const [orders, setOrders] = useState([]);


  const url = `http://localhost:4004/orders`;
  
  console.log('URL de la solicitud:', url); // Verificar que la URL sea la correcta
  

  useEffect(() => {
    // Llamar al Order Service
    axios.get(url)
      .then(response => {
        console.log('Datos de órdenes:', response.data); // Verificar datos recibidos
        setOrders(response.data); // Actualizar el estado con los datos recibidos
      })
      .catch(error => {
        console.error('Error al obtener órdenes:', error);
      });
  }, []);

  return (
    <div>
      <h2>Órdenes</h2>
      <ul>
        {orders.length > 0 ? (
          orders.map(order => (
            <li key={order.id}>{order.description}</li>
          ))
        ) : (
          <p>No se encontraron órdenes</p>
        )}
      </ul>
    </div>
  );
};

export default OrderService;
