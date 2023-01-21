import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import Fields from "./components/Fields";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  // this is the final array
  //whaterver we enter has to be brought into state to make it actionable

  const addData = () => {
    setData([...data, { name, email }]);
    setName = " ";
    setEmail = " ";
  };


  const removeItem=(index)=>{
    let arr= data;
    arr.splice(index,1);
    setData([...arr]);
  }

  return (
    <div className="App">
      <Header />
      <div className="input">
        <Stack spacing={2} direction="row">
          <TextField
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button onClick={addData} color="success" variant="contained">
            <AddIcon />
          </Button>
        </Stack>
      </div>
      {/* form section ends */}

      <div className="data_val">
        <div className="Heading">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        <div>
          {data.map((element, index) => {
            return (
              <div key={index} className="printvalues">
                <h4>{element.name}</h4>
                <h4>{element.email}</h4>
                <Stack>
                  <Button  onClick={()=>removeItem(index)} variant="contained" color="error">
                    Remove
                    {/* above we can see that if we have to use a function where we have to take an
                    argument then we have to make a fat arrow function ..not normal name of the function */}
                  </Button>
                </Stack>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
