/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Layout, Row, Col, Button, Dropdown } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { Menu } from '../component';

const { Header } = Layout;

const h = () => {
    var items = [{ index: 'Set', subItem: [] }];

    const menu = () => {
        return <Menu items={items}></Menu>;
    };

    return (
        <Header
            className="head"
            style={{
                padding: 0,
                textAlign: 'center',
                height: '42px',
                lineHeight: '42px'
            }}
        >
            <Row>
                <Col span={8}></Col>
                <Col span={8}>
                    <Link to="/">Home</Link>
                </Col>
                <Col span={7}></Col>
                <Col span={1}>
                    <Dropdown overlay={menu} placement="bottomLeft">
                        <Button icon={<SettingOutlined />}></Button>
                    </Dropdown>
                </Col>
            </Row>
        </Header>
    );
};

export default h;
