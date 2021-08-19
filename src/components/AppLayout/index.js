import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import './index.scss';
import { Layout } from 'antd';
import { AppSideBar } from './AppSideBar';
import { APPLICATION } from '../../utilities/constants'

const { Content, Footer } = Layout;

const AppLayout = ({ children }) => {
    return (
        <Layout className="app-layout">
            <AppSideBar />
            <Layout className="site-layout">
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
    children: PropTypes.oneOfType([PropTypes.elementType, PropTypes.object, PropTypes.array])
}

export default AppLayout
