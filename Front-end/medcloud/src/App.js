import './App.css';
import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import GlobalStyle from "./styles/global";

function App() {

  const [value, setValue] = useState();
  const handleChangeValue = (value) => {
    setValue((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  return (
      <div className="container">
        <div className='register--container'>
          <h1>Registro de pacientes</h1>
            <TextField id="standard-basic" label="Nome" variant="standard" onChange={handleChangeValue}/>
            <TextField id="standard-basic" label="Data de nascimento" variant="standard" onChange={handleChangeValue}/>
            <TextField id="standard-basic" label="Email" variant="standard" onChange={handleChangeValue}/>
            <TextField id="standard-basic" label="Endereço" variant="standard" onChange={handleChangeValue}/>
            <Button variant="contained">Registrar</Button>
        </div>
        <GlobalStyle />
      </div>
  );
}

export default App;
