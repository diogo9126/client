import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './title';

// Generate Sales Data
function createData(evento, participante) {
    return { evento, participante };
}

const data = [
    createData('React', 0),
    createData('Angular', 300),
    createData('Ti dev', 600),
    createData('Node', 800),
    createData('Vue', 1500),
    createData('Mongo', 2000),
    createData('Admin BD', 2400),
    createData('Redes', 2400),
    createData('Big Data', undefined),
];

export default function Chart() {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Title>Principais Eventos</Title>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24,
                    }}
                >
                    <XAxis
                        dataKey="evento"
                        stroke={theme.palette.text.secondary}
                        style={theme.typography.body2}
                    />
                    <YAxis
                        stroke={theme.palette.text.secondary}
                        style={theme.typography.body2}
                    >
                        <Label
                            angle={270}
                            position="left"
                            style={{
                                textAnchor: 'middle',
                                fill: theme.palette.text.primary,
                                ...theme.typography.body1,
                            }}
                        >
                            Particpantes
                        </Label>
                    </YAxis>
                    <Line
                        isAnimationActive={false}
                        type="monotone"
                        dataKey="participante"
                        stroke={theme.palette.primary.main}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}