import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import Chip from '@mui/material/Chip';

import Title from './title';

// Generate Order Data
function createData(id, data, nomeEvento, nomeInscrito, cpfInscrito,horasACC) {
    return { id, data, nomeEvento, nomeInscrito, cpfInscrito, horasACC };
}

const rows = [
    createData(
        0,
        '16 Mar, 2019',
        'Tecnologia Fugal',
        'Elvis PresleyS',
        '000.000.000-00',
        'Presente',
    ),
    createData(
        1,
        '16 Mar, 2019',
        'Tecnologia Fugal',
        'Diogo Cordeiro',
        '000.000.000-01',
        'Ausente',
    ),
    createData(2, '16 Mar, 2019', 'Tecnologia Fugal', 'Tom Scholz', '000.000.000-02', 'Presente'),
    createData(
        3,
        '16 Mar, 2019',
        'Tecnologia Fugal',
        'Michael Jackson',
        '000.000.000-03',
        'Presente',
    ),
    createData(
        4,
        '15 Mar, 2019',
        'Tecnologia Fugal',
        'Bruce Springsteen',
        '000.000.000-03',
        'Presente',
    ),
];

function preventDefault(event) {
    event.preventDefault();
}

export default function Orders() {
    return (
        <React.Fragment>
            <Title>Relatório de Inscritos</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Dia Evento</TableCell>
                        <TableCell>Nome Evento</TableCell>
                        <TableCell>Nome Participante</TableCell>
                        <TableCell>CPF</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell align="right">Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.data}</TableCell>
                            <TableCell>{row.nomeEvento}</TableCell>
                            <TableCell>{row.nomeInscrito}</TableCell>
                            <TableCell>{row.cpfInscrito}</TableCell>
                            <TableCell>{row.horasACC === 'Presente' ? <Chip label="Presente" color='success' /> : <Chip label="Ausente" color="error" />}</TableCell>
                            <TableCell aligin='right' >
                                <ButtonGroup variant="outlined" aria-label="outlined button group">
                                    <Button color="success">Visualizar Certificado</Button>
                                    <Button color="success">Enviar Certificado</Button>
                                </ButtonGroup>                                                            
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                Continuar visualizando a lista?
            </Link>
        </React.Fragment>
    );
}