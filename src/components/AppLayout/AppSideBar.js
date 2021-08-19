import React, { useState } from 'react'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css';
import './index.scss';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from "react-router-dom";

import { NavItems } from './NavItems';

const { Sider } = Layout;

export function AppSideBar() {
    const [isCollapsed, setCollapsed] = useState(true);
    const location = useLocation();

    function toggle() {
        setCollapsed(isCollapsed => !isCollapsed);
    };

    return (
        <Sider
            className="app-sidebar"
            collapsible
            breakpoint="lg"
            collapsedWidth="0"
            collapsed={isCollapsed}
            onCollapse={toggle}
        >
            <div className="logo" />
            <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
                {
                    NavItems.items.map(n => {
                        return (
                            <Menu.Item key={n.link} icon={n.icon}>
                                <Link to={n.link}> {n.lable}</Link>
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
        </Sider>
    )
}

AppSideBar.propTypes = {
    isCollapsed: PropTypes.bool
}
