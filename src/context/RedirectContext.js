import React from 'react';
import { Ant, Empty } from '../component/program';

const programs = [
    { path: '/1', exact: false, component: <Ant /> },
    { path: '/2', exact: false, component: <Empty /> }
];

export const RedirectContext = React.createContext({
    programs: programs
});
