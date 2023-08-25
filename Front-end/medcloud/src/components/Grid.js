import './Grid.css';
import React from "react";
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from "react-toastify";
import { Table, TableContainer, TableHead, TableRow, TableBody, Paper, TableCell } from '@mui/material';

const Grid = ({ pacientes, setPacientes, setOnEdit }) => {
    const handleEdit = (item) => {
        setOnEdit(item);
      };
    
      const handleDelete = async (id) => {
        await axios
          .delete("http://localhost:8800/" + id)
          .then(({ data }) => {
            const newArray = pacientes.filter((user) => user.id !== id);
    
            setPacientes(newArray);
            toast.success(data);
          })
          .catch(({ data }) => toast.error(data));
    
        setOnEdit(null);
      };

    return (
        <TableContainer component={Paper}>
            <Table aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell><h2>Nome</h2></TableCell>
                        <TableCell><h2>Endereço</h2></TableCell>
                        <TableCell><h2>Email</h2></TableCell>
                        <TableCell><h2>Data de Nasc.</h2></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {pacientes.map((item, i) => (
                    <TableRow key={i}>
                        <TableCell>{item.nome}</TableCell>
                        <TableCell>{item.endereço}</TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell>{item.data_nascimento}</TableCell>
                        <TableCell><EditIcon onClick={() => handleEdit(item)} /></TableCell>
                        <TableCell><DeleteIcon onClick={() => handleDelete(item.id)} /></TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Grid;