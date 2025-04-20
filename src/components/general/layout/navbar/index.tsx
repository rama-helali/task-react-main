import { Image } from "antd";
import { Header } from "antd/es/layout/layout";
import styles from "./style.module.scss";
import { useContext } from "react";
import AppContext from "../../../../context/app/context";

const NavBar = () => {
    const { collapsed } = useContext(AppContext);

    return (
        <Header className={styles.header}>
            {collapsed == "close" && <Image className={styles.logo} src="logo.png" preview={false}></Image>}
        </Header>
    );
}


export default NavBar