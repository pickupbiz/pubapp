import React, { useState } from "react";
import { TextField, Button, Card, CardContent } from "@mui/material";

export const Employee = () => {
  const [data, setData] = useState([]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const handleAdd = () => {
    setData([...data, `${fname} ${lname}`]);
    setFname("");
    setLname("");
  };
  const handleDelete = (index) => {
    const filtered = data.filter((ele, ind) => index !== ind);
    setData([...filtered]);
  };
  return (
    <div className="sub">
      <TextField
        onChange={(e) => setFname(e.target.value)}
        className="fil"
        variant="outlined"
        label="First Name"
        value={fname}
      />
      <TextField
        onChange={(e) => setLname(e.target.value)}
        className="fil"
        variant="outlined"
        label="Last Name"
        value={lname}
      />
      <Button className="btn" variant="contained" onClick={handleAdd}>
        Add Employee
      </Button>
      {data.map((item, index) => (
        <div className="lst">
          <Card>
            <CardContent>
              {item}
              <Button variant="contained" onClick={() => handleDelete(index)}>
                Delete
              </Button>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};
