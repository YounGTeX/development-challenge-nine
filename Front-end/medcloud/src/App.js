import './App.css';
import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";

import GlobalStyle from "./styles/global";
import { Container } from '@mui/material';
import { toast, ToastContainer } from "react-toastify";
import Form from './components/Form';
import Grid from './components/Grid';

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [onEdit, setOnEdit] = useState(null);
  
  const getPacientes = async () => {
    try { 
      const res = await axios.get("http://localhost:8800");
      setPacientes(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  }

  useEffect(() => {
    getPacientes();
  }, [setPacientes]);

  return (
      <>
        <Container>
            <h2>Registro de pacientes</h2>
            <Form  onEdit={onEdit} setOnEdit={setOnEdit} getPacientes={getPacientes}/>
            <Grid pacientes={pacientes} setPacientes={setPacientes} setOnEdit={setOnEdit} />
        </Container>
        <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
        <GlobalStyle />
      </>
  );
}

export default App;
