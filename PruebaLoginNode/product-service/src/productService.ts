import express, { Request, Response } from 'express';
import cors from 'cors'; // Importar cors

const app = express();

// Middleware para permitir CORS
app.use(cors()); // Permitir solicitudes desde cualquier origen

// Middleware para parsear el cuerpo de las solicitudes JSON
app.use(express.json());

app.get('/products', (req: Request, res: Response) => {
  const productMock = {
    id: 101,
    name: "Product X",
    price: 99.99
  };
  res.json(productMock);
});

const PORT = process.env.PORT || 4002;
app.listen(PORT, () => {
  console.log(`Product service escuchando en el puerto ${PORT}`);
});
