/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Layout } from 'antd';
import { Header, Sider, Menu } from '../component';
import Router from '../Router';

const { Content } = Layout;

const l = () => {
    var items = [
        { index: 1, subItem: [] },
        { index: 2, subItem: [] },
        { index: 3, subItem: [1, 2, 3] }
    ];

    return (
        <Layout style={{ height: '100vh' }}>
            <Sider>
                <Menu items={items} filterAble="true" />
            </Sider>
            <Layout className="layout">
                <Header />
                <Layout>
                    <Content
                        style={{
                            padding: '0px 5px 5px',
                            margin: 0,
                            overflow: 'auto',
                            overflowX: 'hidden'
                        }}
                    >
                        <Router></Router>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default l;
