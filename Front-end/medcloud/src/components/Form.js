import './Form.css';
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ptBR } from 'date-fns/locale';

const Form = ({ onEdit }) => {
  const ref = useRef();

return (
    <form ref={ref}>
      <TextField id="standard-basic" name="nome" label="Nome" variant="outlined" />
      <TextField id="standard-basic" name="email" type="email" label="Email" variant="outlined" />
      <TextField id="standard-basic" name="endereço" label="Endereço" variant="outlined" />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker label="Data de nascimento" name="endereço" variant="standard"/>
      </LocalizationProvider>
      <Button type="submit" variant="contained">Registrar</Button>
    </form>
  );
};


export default Form;