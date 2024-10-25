import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// Ruta básica
app.get('/users', (req: Request, res: Response) => {
  const userMock = {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com"
  };
  res.json(userMock);
});

// Puerto donde escucha el servicio
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`User service escuchando en el puerto ${PORT}`);
});
