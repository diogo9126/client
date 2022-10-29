import * as React from 'react';
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
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

import MainAdmin from '../../../components/appbar';
import Footer from '../../../components/footer-menu';
import Title from '../../../components/title';
import Paper from '@mui/material/Paper';


const mdTheme = createTheme();

export default function UsuarioCadastrar() {
    const [value, setValue] = React.useState(null);       

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <MainAdmin title={'Eventos'} />
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
                                            <Title>Criar novo Evento</Title>
                                        </Grid>
                                        <Grid item xs={12} sm={9}>
                                             <TextField 
                                                required
                                                id="nome"
                                                name="nome"
                                                label="Nome do evento"
                                                fullWidth
                                                autoComplete="nome"
                                                variant="outlined" 
                                             />
                                        </Grid>
                                        <Grid item xs={12} sm={3}>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker
                                                    label="Dia do evento"
                                                    value={value}
                                                    onChange={(newValue) => {
                                                        setValue(newValue);
                                                    }}
                                                    renderInput={(params) => <TextField {...params} />}
                                                />
                                            </LocalizationProvider>
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <TextField
                                                id="descricao"
                                                label="Descricao"
                                                placeholder="Descreva o evento"
                                                multiline
                                                variant="filled"
                                                fullWidth
                                                rows={4}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="categoria"
                                                >
                                                    <MenuItem value={1}>ACC - Interna</MenuItem>
                                                    <MenuItem value={2}>ACC - Externa</MenuItem>
                                                    <MenuItem value={3}>ACC - Organização</MenuItem>
                                                    <MenuItem value={4}>ACC - Social</MenuItem>
                                                    <MenuItem value={5}>ACC - Social</MenuItem>
                                                    <MenuItem value={6}>ACC - EAD -Digital</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <TextField
                                                required
                                                id="horas-acc"
                                                name="horas-acc"
                                                label="Horas Complementares"
                                                autoComplete="Horas"
                                                variant="outlined"
                                                type="number"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={3}>
                                            <FormControl>
                                                <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    defaultValue="Aberto"
                                                    name="radio-buttons-group"
                                                >
                                                    <FormControlLabel value="aberto" control={<Radio />} label="Aberto" />
                                                    <FormControlLabel value="finalizado" control={<Radio />} label="Finalizado" />
                                                </RadioGroup>
                                            </FormControl>
                                            
                                        </Grid>
                                        
                                        <Grid item xs={12} sm={12}>
                                            <Button variant="contained">Salvar</Button>
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



