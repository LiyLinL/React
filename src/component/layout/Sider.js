/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Layout } from 'antd';
const { Sider } = Layout;

var s = (props) => {
    var [newCollapsible, collapsible] = useState(false);

    var disable = (param) => {
        collapsible(param);
    };

    return (
        <Sider
            collapsible
            collapsed={newCollapsible}
            onCollapse={disable}
            style={{ height: '100vh', overflow: 'auto' }}
        >
            {props.children}
        </Sider>
    );
};

export default s;
