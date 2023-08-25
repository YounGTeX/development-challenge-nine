import React from "react";
import axios from "axios";
import styled from "styled-components";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from "react-toastify";
import { Table, TableContainer, TableHead, TableRow, TableBody, Paper, TableCell } from '@mui/material';

const Grid = ({ users }) => {
    

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
                    {users.map((item, i) => (
                    <TableRow key={i}>
                        <TableCell>{item.nome}</TableCell>
                        <TableCell>{item.endereço}</TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell>{item.data_nascimento}</TableCell>
                        <TableCell><EditIcon /></TableCell>
                        <TableCell><DeleteIcon /></TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Grid;