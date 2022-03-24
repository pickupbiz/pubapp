import React, { useState } from "react";
import { Button, Rating, TextField } from "@mui/material";
import { StudentItem } from "./StudentItem";
import { TodoList } from "./TodoList";

export const Home = () => {
  const [myrate, setMyRate] = useState(1);
  return (
    <div className="sub">
      <TodoList />
      <StudentItem />
      <TextField
        label="Rate it"
        variant="outlined"
        onChange={(e) => setMyRate(e.target.value)}
      />
      <br />
      <br />
      <Button variant="contained">My button</Button>
      <br />
      <br />
      <Rating value={myrate} />
    </div>
  );
};
