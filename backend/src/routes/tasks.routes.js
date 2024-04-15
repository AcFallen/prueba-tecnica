import { Router } from "express";

import AsynHandler from 'express-async-handler';

import { getTasks, createTask, updateTask, deleteTask } from "../controllers/tasks.controller.js";

export const taskRouter = Router();

taskRouter.get('/task-list', AsynHandler(getTasks));
taskRouter.post('/create-task', AsynHandler(createTask));

taskRouter.put('/update-task/:id', AsynHandler(updateTask));
taskRouter.delete('/delete-task/:id', AsynHandler(deleteTask));
