import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Container, Typography, IconButton } from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";

import { teal, red } from '@mui/material/colors';


const Todo = ({title , checkTask , id , status , deleteTask }) => {

  const delTask = () => {
    deleteTask(id)
  }

  const taskCompleted = () => {
    checkTask(id)
  }

  const getColor = () => {
    return status ? teal[100] : red[100]
  }
  return (

    <div>
      <Container maxWidth="sm">
        <Card
          variant="outlined"
          style={{ marginTop: 35, background: getColor() }}
        >
          <CardContent>
            <Typography variant="h5" component="h2">
              <IconButton onClick={taskCompleted}>
                <CheckIcon style={{color:"green"}} />
              </IconButton>
                {title}
              <IconButton style={{float:"right"}} onClick={delTask}> 
                <DeleteIcon style={{color:"red"}} />
              </IconButton>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Todo;
