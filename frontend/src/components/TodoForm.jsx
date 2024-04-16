import { useState } from "react";
import { FormControl, Container, TextField, Button } from "@mui/material";

const TodoForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth={true}>
          <TextField
            label="Ingresa tu tarea"
            required={true}
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: 20 }}
          >
            Agregar Tarea
          </Button>
        </FormControl>
      </form>
    </Container>
  );
};

export default TodoForm;
