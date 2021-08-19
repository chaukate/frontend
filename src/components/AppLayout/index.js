import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import './index.scss';
import { Layout } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import { AppSideBar } from './AppSideBar';
import { APPLICATION } from '../../utilities/constants'

const { Header, Content, Footer } = Layout;

const AppLayout = ({ children }) => {

    const [isCollapsed, setValue] = useState(false);

    function toggle() {
        setValue(isCollapsed => !isCollapsed);
        console.log(isCollapsed);
    };

    return (
        <Layout className="app-layout">
            <AppSideBar isCollapsed={isCollapsed} />
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                    })}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    {children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>{APPLICATION.FOOTER_COPYRIGHT}</Footer>
            </Layout>
        </Layout >
    )
}

AppLayout.propTypes = {
    children: PropTypes.object
}

export default AppLayout
