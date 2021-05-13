/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MenuContext } from '../../context/MenuContext';

import { Menu } from 'antd';
import { AppstoreOutlined, UserOutlined } from '@ant-design/icons';
import Filter from './Filter';

const { SubMenu } = Menu;

var m = (props) => {
    const self = this,
        { t, i18n } = useTranslation(),
        oriMItem = props.items,
        [newMItems, setNewMItem] = useState(oriMItem);

    var filterAble = props.filterAble === 'true' ? true : false;

    var handleClick = function (e) {
        // console.log('click ', e);
    };

    var items = [];
    newMItems.forEach((el) => {
        var path = '/' + el.index;

        if (el.subItem.length > 0) {
            var subKey = 'sub' + el.index,
                subItem = [];

            el.subItem.forEach((sub) => {
                var itemKey = 'sub' + sub;
                var subItemPath = '/' + itemKey;
                subItem.push(
                    <Menu.Item key={itemKey}>
                        {/* <Link to={subItemPath}> */}
                        {t('sub')} {sub}
                        {/* </Link> */}
                    </Menu.Item>
                );
            });

            items.push(
                <SubMenu key={subKey} icon={<UserOutlined />} title={t('User')}>
                    {subItem}
                </SubMenu>
            );
        } else {
            items.push(
                <Menu.Item key={el.index} icon={<AppstoreOutlined />}>
                    <Link to={path}>
                        {t('item')} {el.index}
                    </Link>
                </Menu.Item>
            );
        }
    });

    var filter = (
        <div className="filter">
            <Filter></Filter>
        </div>
    );

    if (!filterAble) {
        filter = '';
    }

    return (
        <div>
            <MenuContext.Provider value={{ newMItem: oriMItem, setNewItems: setNewMItem }}>
                {filter}
                <Menu mode="inline" onClick={handleClick} selectedKeys={['0']}>
                    {items}
                </Menu>
            </MenuContext.Provider>
        </div>
    );
};

export default m;
