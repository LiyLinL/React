/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { Typography, Row, Col, Form, Input, Button, Space, Divider, Table } from 'antd';
import { RedirectContext } from '../../context/RedirectContext';

const { Paragraph, Title } = Typography;

var a = (props) => {
    const rContext = useContext(RedirectContext);
    const col = [{ title: 'Name', dataIndex: 'name', key: 'name' }];
    const data = [];
    for (var i = 0; i < 15; i++) {
        data.push({
            key: i,
            name: 'Test-' + i
        });
    }

    var sizeChange = (current, size) => {
        console.log(current);
    };

    useEffect(() => {
        rContext.setNewTitle('Ant');
    }, []);

    return (
        <div>
            <Row gutter={16} justify="center" align="middle">
                <Col span={8}>
                    <Space>
                        <Button type="default">Retrieve</Button>
                        <Button type="ghost">Clear</Button>
                    </Space>
                </Col>
                <Col span={8} style={{ textAlign: 'center' }}>
                    <Title level={3}>Introduction</Title>
                </Col>
                <Col span={8}></Col>
            </Row>
            {/* 中間 */}
            <Form
                labelCol={{ span: 12 }}
                wrapperCol={{ span: 15 }}
                name="advanced_search"
                className="ant-advanced-search-form"
            >
                <Row gutter={16} align="middle">
                    <Col span={6}>
                        <Form.Item
                            label="Required Mark1"
                            name="requiredMark1"
                            rules={[{ required: true }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="Required Mark2" name="requiredMark2">
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={6}>
                        <Form.Item label="Required Mark3" name="requiredMark3">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="Mark" name="Mark">
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            <Divider />
            {/* 底部 */}
            <Table
                sticky
                columns={col}
                dataSource={data}
                pagination={{ pageSize: 20, onShowSizeChange: sizeChange }}
            ></Table>
        </div>
    );
};
export default a;
