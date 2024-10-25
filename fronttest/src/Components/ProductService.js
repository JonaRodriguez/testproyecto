// src/Components/ProductService.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductService() {
  const [products, setProducts] = useState([]);

  
  const url = `http://localhost:4004/products`;
  
  console.log('URL de la solicitud:', url); // Verificar que la URL sea la correcta
  


  useEffect(() => {
    // Hacer una solicitud GET a la API del microservicio
    axios.get(url)
    
      .then(response => {
        console.log('Datos de productos:', response.data); // Verificar datos recibidos
        // Actualizar el estado con la lista de productos
        setProducts(response.data);
      })
      .catch(error => {
        console.log('Datos de  error:', error); // Verificar datos recibidos
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <h3>Product Service</h3>
      {products.length > 0 ? (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading product data...</p>
      )}
    </div>
  );
}

export default ProductService;
