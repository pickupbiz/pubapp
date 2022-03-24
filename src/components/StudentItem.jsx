import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

export const StudentItem = () => {
  return (
    <div className="sub">
      <Card>
        <CardContent>
          <Typography>Umesh Singh</Typography>
          <Typography>Pune</Typography>
          <Typography>87878877</Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained">Details</Button>
        </CardActions>
      </Card>
    </div>
  );
};
