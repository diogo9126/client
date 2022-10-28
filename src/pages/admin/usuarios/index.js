import * as React from 'react';
import {useState, useEffect} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Chip from '@mui/material/Chip';

import MainAdmin from '../../../components/appbar';
import Footer from '../../../components/footer-menu';
import Title from '../../../components/title';
import api from '../../../services/api';

const mdTheme = createTheme();


export default function UsuarioListagem() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(()=>{
        async function loadUsuarios(){
            const response = await api.get('/api/usuarios')
            setUsuarios(response.data); 

        }
        loadUsuarios()
    },[])

    async function handleDelete(id){
        if(window.confirm('Deseja realmente excluir esse usuário?')){
            var result = await api.delete('/api/usuarios-delete/'+ id);
            if(result.status===200){
                window.location.href='/admin/usuarios';
            }else{
                alert("Erro ao excluir!, tente novamente");
            }
        }
    }

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <MainAdmin title={'Usuários'} />
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100] 
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>
                            {/* Recent Orders */}
                            <Grid item xs={12}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <Title>Lista de Usuarios</Title>
                                    <TableContainer component={Paper}>
                                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell aligin='center' >Name</TableCell>
                                                    <TableCell aligin='center'>E-mail</TableCell>
                                                    <TableCell aligin='center'>Type</TableCell>
                                                    <TableCell aligin='center'>Logs</TableCell>
                                                    <TableCell aligin='center'>Action</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {usuarios.map((row) => (
                                                    <TableRow
                                                        key={row._id}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row">
                                                            {row.nome_usuario}
                                                        </TableCell>
                                                        <TableCell aligin='center'>{row.nome_usuario}</TableCell>
                                                        <TableCell aligin='center'>{row.tipo_usuario===1?<Chip label="Coordenador" color='primary'/>:<Chip label="Participante" color="success"/> }</TableCell>
                                                        <TableCell aligin='center'>{new Date (row.createdAt).toLocaleString('pt-br')}</TableCell>
                                                        <TableCell aligin='right' >
                                                            <ButtonGroup variant="outlined" aria-label="outlined button group">
                                                                <Button color="success" href={"/admin/usuarios/editar/"+row._id}>Update</Button>
                                                                <Button color='error' onClick={()=>handleDelete(row._id)}>Delete</Button>
                                                            </ButtonGroup>                                                            
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Paper>
                            </Grid>
                        </Grid>
                        <Footer sx={{ pt: 4 }} />
                    </Container>
                </Box>

            </Box>
        </ThemeProvider>
    );
}

