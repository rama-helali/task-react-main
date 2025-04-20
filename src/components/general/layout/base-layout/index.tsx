import React from 'react';
import Layout, { Content } from 'antd/es/layout/layout';
import SideBar from '../side-bar';
import NavBar from '../navbar';

interface IProps {
    children: React.ReactNode;
}

const BaseLayout: React.FC<IProps> = ({ children }) => {

    return (
        <SideBar>
            <Layout>
                <NavBar></NavBar>
                <Content
                    style={{
                        minHeight: "90vh",
                        overflow: "hidden",
                        backgroundColor: "white"
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </SideBar>

    );
};

export default BaseLayout;