import React from "react";
import { TextField, Button, Card, CardContent } from "@mui/material";

export const Login = () => {
  return (
    <div className="sub">
      <Card>
        <CardContent>
          <TextField label="USERNAME" variant="Outlined"></TextField>
          <TextField label="PASSWORD" variant="Outlined"></TextField>
          <Button variant="contained">LOGIN</Button>
        </CardContent>
      </Card>
    </div>
  );
};
