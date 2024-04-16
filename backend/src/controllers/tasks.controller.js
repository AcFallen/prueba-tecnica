import { conexion } from "../conexion.js";
import { createTaskDto , updateTaskDto } from "../dto/tasks.dto.js";

export async function getTasks(req, res) {
  const tasks = await conexion.task.findMany();
  return res.status(200).json({
    content: tasks,
  });
}

export async function createTask(req, res) {

  const validation = createTaskDto.validate(req.body);

  if (validation.error) {
    return res.status(400).json({
      content: validation.error.details,
    });
  }

  const { title, description } = req.body;
  const task = await conexion.task.create({
    data: {
      title
    },
  });



  return res.status(201).json({
    content: task,
  });
}

export async function updateTask(req, res) {

  const validation = updateTaskDto.validate(req.body);

  if (validation.error) {
    return res.status(400).json({
      content: validation.error.details,
    });
  }



  const { id } = req.params;
  const { title, description , status } = req.body;
  const task = await conexion.task.update({
    where: {
      id: parseInt(id),
    },
    data: {
      title,
      status
    },
  });
  return res.status(200).json({
    content: task,
  });
}

export async function deleteTask(req, res) {
  const { id } = req.params;
  await conexion.task.delete({
    where: {
      id: parseInt(id),
    },
  });
  return res.status(204).json({
    content: "Task deleted",
  });
}
