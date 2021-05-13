/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext.js';

import { Input } from 'antd';
import { FilterOutlined } from '@ant-design/icons';

var i = () => {
    var mContext = useContext(MenuContext),
        oriMItem = mContext.newMItem;

    var pressEnter = function (e) {
        var value = e.target.value,
            newMItem = oriMItem.slice(0);

        if (value) {
            newMItem = newMItem.filter((el) => el.index == value);
        }

        mContext.setNewItems(newMItem);
    };
    return (
        <Input placeholder="Filter" suffix={<FilterOutlined />} onPressEnter={pressEnter}></Input>
    );
};

export default i;
