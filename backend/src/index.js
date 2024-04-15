import express from 'express';
import cors from 'cors';
import * as Rutas from './routes/index.js';


const app = express();
app.use(cors());
app.use(express.json());

app.use(Rutas.taskRouter);


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});