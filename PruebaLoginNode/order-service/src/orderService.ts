import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());


app.get('/orders', (req: Request, res: Response) => {
  res.json({ message: 'Lista de órdenes' });
});

const PORT = process.env.PORT || 4003;
app.listen(PORT, () => {
  console.log(`Order service escuchando en el puerto ${PORT}`);
});
