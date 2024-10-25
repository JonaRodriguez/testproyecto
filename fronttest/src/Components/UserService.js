import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserService = () => {
  const [users, setUsers] = useState([]);



  const url = `http://localhost:4004/users`;
  
  console.log('URL de la solicitud:', url); // Verificar que la URL sea la correcta
  
  
  useEffect(() => {
    // Llamar al User Service
    axios.get(url)

      .then(response => {
        console.log('Datos de usuarios:', response.data); // Verificar datos recibidos
        setUsers(response.data); // Actualizar el estado con los datos recibidos
      })
      .catch(error => {
        console.error('Error al obtener usuarios:', error);
      });
  }, []);

  return (
    <div>
      <h2>Usuarios</h2>
      <ul>
        {users.length > 0 ? (
          users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))
        ) : (
          <p>No se encontraron usuarios</p>
        )}
      </ul>
    </div>
  );
};

export default UserService;
