import express from 'express';
import cors from 'cors';

import htttp from 'http';
import { Server } from 'socket.io';
import * as Rutas from './routes/index.js';


const app = express();
const server = htttp.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
  }
});

io.on('connection', (socket) => {
  console.log('New connection', socket.id);

  socket.on('create task', (task) => {
    io.emit('task created', task);
  });

  socket.on('update task', (task) => {
    io.emit('task updated', task);
  });

  socket.on('delete task', (id) => {
    io.emit('task deleted', id);
  });
});

app.use(cors());

app.use(express.json());

app.use(Rutas.taskRouter);


server.listen(3000, () => {
  console.log('Server is running on port 3000');
});