import './Form.css';
import React, { useEffect, useRef } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { LocalizationProvider, DatePicker, DateField } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { toast } from "react-toastify";
import axios from "axios";

const Form = ({ onEdit, getPacientes, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const paciente = ref.current;

      paciente.nome.value = onEdit.nome;
      paciente.email.value = onEdit.email;
      paciente.endereço.value = onEdit.endereço;
      paciente.data_nascimento.value = onEdit.data_nascimento;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const paciente = ref.current;

    if (
      !paciente.nome.value ||
      !paciente.email.value ||
      !paciente.endereço.value ||
      !paciente.data_nascimento.value
    ) {
      return alert("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          nome: paciente.nome.value,
          email: paciente.email.value,
          endereço: paciente.endereço.value,
          data_nascimento: paciente.data_nascimento.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800", {
          nome: paciente.nome.value,
          email: paciente.email.value,
          endereço: paciente.endereço.value,
          data_nascimento: paciente.data_nascimento.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    paciente.nome.value = "";
    paciente.email.value = "";
    paciente.endereço.value = "";
    paciente.data_nascimento.value = "";

    setOnEdit(null);
    getPacientes();
  };


return (
    <form ref={ref} onSubmit={handleSubmit}>
      <TextField id="standard-basic" name="nome" label="Nome" variant="standard" />
      <TextField id="standard-basic" name="email" type="email" label="Email" variant="standard" />
      <TextField id="standard-basic" name="endereço" label="Endereço" variant="standard" />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateField label="Data de nascimento" name="data_nascimento" variant="standard"/>
      </LocalizationProvider>
      <Button type="submit" variant="contained">Registrar</Button>
    </form>
  );
};


export default Form;