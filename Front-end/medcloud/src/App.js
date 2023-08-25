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
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);
  
  const getUsers = async () => {
    try { 
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
      <>
        <Container>
            <h2>Registro de pacientes</h2>
            <Form />
            <Grid users={users}/>
        </Container>
        <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
        <GlobalStyle />
      </>
  );
}

export default App;
