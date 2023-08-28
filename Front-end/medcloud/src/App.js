import './App.css';
import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";

import GlobalStyle from "./styles/global";
import { Container } from '@mui/material';
import Form from './components/Form';
import Grid from './components/Grid';

function App() {
  const [user, setUser] = useState([]);
  const [onEdit, setOnEdit] = useState(null);
  
  const getUser = async () => {
    try { 
      const res = await axios.get("http://localhost:8800");
      setUser(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    getUser();
  }, [setUser]);

  return (
      <>
        <Container>
            <h2>Registro de user</h2>
            <Form  onEdit={onEdit} setOnEdit={setOnEdit} getUser={getUser}/>
            <Grid user={user} setUser={setUser} setOnEdit={setOnEdit} />
        </Container>
        <GlobalStyle />
      </>
  );
}

export default App;
