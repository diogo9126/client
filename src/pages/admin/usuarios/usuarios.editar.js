import * as React from 'react';
import {useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

import MainAdmin from '../../../components/appbar';
import Footer from '../../../components/footer-menu';
import Title from '../../../components/title';
import api from '../../../services/api';


const mdTheme = createTheme();

export default function UsuarioCadastrar() {
    const [nome, setNome] = useState("");
    const [email, setEmail ] = useState("");
    const [tipo, setTipo] = useState("");
    const [senha, setSenha] = useState("");

    const {idUsuario} = useParams();

    useEffect(()=>{
        async function getUsuario(){
            var response = await api.get('/api/usuarios-detail/' + idUsuario);

            setNome(response.data.nome_usuario)
            setEmail(response.data.email_usuario)
            setTipo(response.data.tipo_usuario)
            setSenha(response.data.senha_usuario)

        }
        getUsuario();
    },[]);

    async function handleSubimit(){
        const data = { 
            id: idUsuario,
            nome_usuario: nome, 
            email_usuario: email,
            senha_usuario : senha,
            tipo_usuario : tipo
        }
        
        if (nome !== ""&& email !== "" && senha !== "" && tipo !==""){
            const response = await api.put('/api/usuarios-update/', data);
            if (response.status ===200){
                window.location.href = '/admin/usuarios';
            }else{
                alert('Erro ao Atualizar o usuario')
            }

        }else{
            alert("Favor, preencha todos os campos")
        }

    }

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <MainAdmin title={'Usuários'}/>
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
                            {/* Forms cadastros */}
                            <Grid item xs={12}>
                                <Paper sx={{ p: 4, display: 'flex', flexDirection: 'column' }}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={12}>
                                            <Title>Atualizar Cadastros</Title>
                                            <TextField
                                                required
                                                id="Nome"
                                                name="Nome"
                                                label="Nome Completo"
                                                fullWidth
                                                autoComplete="nome"
                                                variant="standard"
                                                value={nome}
                                                onChange={e => setNome(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                type='email'
                                                id="email"
                                                name="email"
                                                label="E-mail"
                                                fullWidth
                                                autoComplete="email"
                                                variant="standard"
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={3}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="Age"
                                                    value={tipo}
                                                    onChange={e => setTipo(e.target.value)}
                                                >
                                                    <MenuItem value={1}>Administrador</MenuItem>
                                                    <MenuItem value={2}>Coordenador</MenuItem>
                                                    <MenuItem value={3}>Participante</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={3}>
                                            <TextField
                                                required
                                                type='password'
                                                id="password"
                                                name="email"
                                                label="password"
                                                fullWidth
                                                autoComplete="family-name"
                                                variant="standard"
                                                value={senha}
                                                onChange={e => setSenha(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <Button variant="contained" onClick={handleSubimit} >Update</Button>
                                        </Grid>
                                    </Grid>
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

