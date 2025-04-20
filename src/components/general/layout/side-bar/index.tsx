import { useContext } from "react";
import AppContext from "../../../../context/app/context";
import { Button, Layout, Menu } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Sider from "antd/es/layout/Sider";
import styles from "./style.module.scss";
import { Image } from "antd";

interface IProps {
    children: React.ReactNode;
}

const SideBar: React.FC<IProps> = ({ children, }) => {

    const { collapsed, actions } = useContext(AppContext);

    return (
        <Layout>
            <Sider className={styles.sideBar} trigger={null} collapsible collapsed={collapsed == "open" ? false : true}>
               <div  className={styles.componentSideBar}>
               <Button
                    className={styles.buttonSideBar}
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined size={24} /> : <MenuFoldOutlined size={24}/>}
                    onClick={() => actions.changeCollapsed(collapsed == "open" ? "close" : "open")}></Button>
                {collapsed == "open" && <Image src="logo.png" preview={false}></Image>}
               </div>
                
                <div className="demo-logo-vertical" />
                <Menu
                    className={styles.menu}
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'nav 1',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                        },
                    ]}
                />
            </Sider>
            {children}
        </Layout>
    );
}


export default SideBar