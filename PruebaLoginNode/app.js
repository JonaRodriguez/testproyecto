const express = require('express');
const app = express();

// Ruta básica
app.get('/', (req, res) => {
  res.send('¡Hola, Mundo!');
});

// Puerto donde escuchará la app
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});