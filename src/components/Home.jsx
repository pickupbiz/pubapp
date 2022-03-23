import React, { useState } from "react";
import { Button, Rating, TextField } from "@mui/material";

export const Home = () => {
  const [myrate, setMyRate] = useState(1);
  return (
    <div className="sub">
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
