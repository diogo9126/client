import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMont from '@mui/icons-material/CalendarMonth';
import PeopleIcon from '@mui/icons-material/People';
import CastForEducation from '@mui/icons-material/CastForEducation';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ExitToApp from '@mui/icons-material/ExitToApp';
import Person from '@mui/icons-material/Person';

export const mainListItems = (
    <React.Fragment>
        <ListItemButton button href='/admin' >
            <ListItemIcon >
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <CalendarMont />
            </ListItemIcon>
            <ListItemText primary="Eventos" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Participantes" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <CastForEducation />
            </ListItemIcon>
            <ListItemText primary="Cursos" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Atividades AAC" />
        </ListItemButton>
        <ListItemButton button href="/admin/usuarios/cadastrar">
            <ListItemIcon>
                <Person />
            </ListItemIcon>
            <ListItemText primary="Usuários" />
        </ListItemButton>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Manutenção
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Rel. eventos" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Rel. de participantes" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Sair" />
        </ListItemButton>
    </React.Fragment>
);