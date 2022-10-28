import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './title';

function preventDefault(event) {
    event.preventDefault();
}

export default function Deposits() {
    return (
        <React.Fragment>
            <Title>Participantes</Title>
            <Typography component="p" variant="h4">
                30024
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                on 15 March, 2019
            </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                    Visualizar Participantes
                </Link>
            </div>
        </React.Fragment>
    );
}