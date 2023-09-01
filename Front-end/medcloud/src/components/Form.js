import './Form.css';
import React, { useEffect, useRef } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { LocalizationProvider, DateField } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import axios from "axios";
import { useForm } from "react-hook-form";

import Swal from 'sweetalert2'

const Form = ({ onEdit, getUser, setOnEdit }) => {
  const ref = useRef();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.nome.value = onEdit.nome;
      user.email.value = onEdit.email;
      user.endereço.value = onEdit.endereço;
      user.data_nascimento.value = onEdit.data_nascimento;
    }
  }, [onEdit]);

  const handleSubmitForm = async (e) => {
    // e.preventDefault();

    const user = ref.current;
    const data_nascimentoDay = user.data_nascimento.value.slice(0,2);
    const data_nascimentoMonth = user.data_nascimento.value.slice(3,5);
    const data_nascimentoYear = user.data_nascimento.value.slice(6,10);

    const dataAtual = new Date();
    let year = dataAtual.getFullYear(); 
    let month = dataAtual.getMonth()+1; 
    let day = dataAtual.getDate();
    
    if (year < data_nascimentoYear) {
      return Swal.fire('Data de nascimento deve ser anterior ao dia de hoje');
    }

    if(year == data_nascimentoYear) {
      if (month < data_nascimentoMonth) {
        return Swal.fire('Data de nascimento deve ser anterior ao dia de hoje');
        } 
      }
    
    if(year == data_nascimentoYear) {
      if (month == data_nascimentoMonth) {
        if (day < data_nascimentoDay) {
          return Swal.fire('Data de nascimento deve ser anterior ao dia de hoje');
        }
      } 
    }
   
    


    if (
      !user.nome.value 
    ) {
      return Swal.fire('Nome inválido');
    } else if (!user.email.value)
      {
      return Swal.fire('Email inválido');
    } else if (!user.endereço.value)
      {
      return Swal.fire('Endereço inválido');
    } else if (!user.data_nascimento.value)
     {
      return Swal.fire('Data de nascimento inválida');
    }

    if (onEdit) {

      user.data_nascimento.value = data_nascimentoYear+'-'+data_nascimentoMonth+'-'+data_nascimentoDay;

      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          nome: user.nome.value,
          email: user.email.value,
          endereço: user.endereço.value,
          data_nascimento: user.data_nascimento.value,
        })
        .then(({ data }) => Swal.fire('Paciente atualizado com sucesso!'))
        .catch(({ data }) => Swal.fire('Paciente atualizado com sucesso!'));
    } else {

    user.data_nascimento.value = data_nascimentoYear+'-'+data_nascimentoMonth+'-'+data_nascimentoDay;

      await axios
        .post("http://localhost:8800", {
          nome: user.nome.value,
          email: user.email.value,
          endereço: user.endereço.value,
          data_nascimento: user.data_nascimento.value,
        })
        .then(({ data }) => Swal.fire('Paciente registrado com sucesso!'))
        .catch(({ data }) =>  Swal.fire('Paciente registrado com sucesso!'));
    }

    user.nome.value = "";
    user.email.value = "";
    user.endereço.value = "";
    user.data_nascimento.value = "";

    setOnEdit(null);
    getUser();
  };


return (
    <form ref={ref} onSubmit={handleSubmit(handleSubmitForm)}>
      <TextField id="standard-basic" {...register('nome')} inputProps={{ maxLength: 254 }} InputLabelProps={{ shrink: true }} label="Nome" variant="standard" />
      <TextField id="standard-basic" {...register('email')} inputProps={{ maxLength: 254 }} InputLabelProps={{ shrink: true }} type="email" label="Email" variant="standard" />
      <TextField id="standard-basic" {...register('endereço')} inputProps={{ maxLength: 254 }} InputLabelProps={{ shrink: true }}  label="Endereço" variant="standard" />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateField InputLabelProps={{ shrink: true }} format="dd/MM/yyyy" disableFuture={true} label="Data de nascimento" name="data_nascimento" variant="standard"/>
      </LocalizationProvider>
      <Button type="submit" variant="contained">Registrar</Button>
    </form>
  );
};


export default Form;