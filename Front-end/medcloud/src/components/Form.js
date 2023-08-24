import './Form.css';
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns'

const Form = ({ onEdit }) => {
  const ref = useRef();

return (
    <form ref={ref}>
      <TextField id="standard-basic" name="nome" label="Nome" variant="standard" />
      <TextField id="standard-basic" name="email" type="email" label="Email" variant="standard" />
      <TextField id="standard-basic" name="endereço" label="Endereço" variant="standard" />
      <TextField id="standard-basic" type='date' name="endereço" label="Endereço" variant="standard" />
      {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker label="Data de nascimento" />
      </LocalizationProvider> */}
      <Button type="submit" variant="contained">Registrar</Button>
    </form>
  );
};


export default Form;