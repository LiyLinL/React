/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useContext } from 'react';
import { Divider } from 'antd';
import { RedirectContext } from '../../context/RedirectContext';

const h = () => {
    const rContext = useContext(RedirectContext);
    useEffect(() => {
        if (!rContext.enterHome) {
            rContext.setNewHome(true);
        }
        rContext.setNewTitle('React');
    }, []);

    return (
        <div style={{ textAlign: 'center' }}>
            <Divider orientation="left">Look this</Divider>
            I'm Home
            <Divider />
        </div>
    );
};

export default h;
