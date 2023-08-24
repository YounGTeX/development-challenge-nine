import './App.css';
import * as React from 'react';

import GlobalStyle from "./styles/global";
import { Container } from '@mui/material';
import { toast, ToastContainer } from "react-toastify";
import Form from './components/Form';

function App() {

  return (
      <>
        <Container>
            <h2>Registro de pacientes</h2>
            <Form />
        </Container>
        <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
        <GlobalStyle />
      </>
  );
}

export default App;
