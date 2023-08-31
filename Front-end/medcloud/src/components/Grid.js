import './Grid.css';
import React from "react";
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Table, TableContainer, TableHead, TableRow, TableBody, Paper, TableCell, TablePagination, TextField, Container } from '@mui/material';
import Swal from 'sweetalert2'

const Grid = ({ user, setUser, setOnEdit }) => {
    const handleEdit = (item) => {
        setOnEdit(item);
      };
    
      const handleDelete = async (id) => {
        await axios
          .delete("http://localhost:8800/" + id)
          .then(({ data }) => {
            const newArray = user.filter((user) => user.id !== id);
    
            setUser(newArray);
            Swal.fire('Paciente excluído com sucesso!');
          })
          .catch(({ data }) => Swal.fire( data ));
    
        setOnEdit(null);
      };

    const [page, setPage] = React.useState(0);
    const [rowsPerPage] = React.useState(5);
    const [busca, setBusca] = React.useState('');

    let buscaUser = user.filter(element => element.nome.toLowerCase().includes(busca.toLowerCase()));

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, user.length - page * rowsPerPage);

  const emptyRowsSearch =
    rowsPerPage - Math.min(rowsPerPage, buscaUser.length - page * rowsPerPage);

    return (

        <TableContainer component={Paper}>
          <Container className='searchField'>
            <TextField id="standard-basic" fullWidth inputProps={{ maxLength: 254 }} label="Busca" value={busca} onChange={e => setBusca(e.target.value)} variant="standard" />
          </Container>
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
                    {buscaUser.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, i) => (
                    <TableRow key={i}>
                        <TableCell>{item.nome}</TableCell>
                        <TableCell>{item.endereço}</TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell>{item.data_nascimento = item.data_nascimento.slice(0,10).split("-").reverse().join("/")}</TableCell>
                        <TableCell><EditIcon onClick={() => handleEdit(item)} /></TableCell>
                        <TableCell><DeleteIcon onClick={() => handleDelete(item.id)} /></TableCell>
                    </TableRow>
                    ))}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            {busca === '' ? 
              <TablePagination
                  component="div"
                  count={user.length}
                  rowsPerPage={5}
                  page={page}
                  onPageChange={handleChangePage}
                  rowsPerPageOptions={[5]} 
              /> : <>
              <TableRow style={{ height: 53 * emptyRowsSearch }}></TableRow>
              <TablePagination
                  component="div"
                  count={buscaUser.length}
                  rowsPerPage={5}
                  page={page}
                  onPageChange={handleChangePage}
                  rowsPerPageOptions={[5]} 
              /> 
            </>
            }
            </TableContainer>
    );
};

export default Grid;