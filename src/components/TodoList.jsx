import React, { useState } from "react";
import { TextField, Button, Card, CardContent } from "@mui/material";

export const TodoList = () => {
  const [data, setData] = useState([]);
  const [todo, setTodo] = useState("");
  const handleAddTask = () => {
    if (todo !== "") {
      setData([...data, todo]);
      setTodo("");
    }
  };
  return (
    <div className="sub">
      <TextField
        label="todo"
        variant="standard"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button variant="contained" onClick={handleAddTask}>
        Add Task
      </Button>
      {data.map((item) => (
        <Card className="item">
          <CardContent>{item}</CardContent>
        </Card>
      ))}
    </div>
  );
};
