import { Col, Image, Row, Tag, Typography } from "antd"
import styles from "./styles.module.scss"

interface IProps {
    image?: string
    description?: string
    title: string
}

const CardWidget: React.FC<IProps> = ({ image, description, title }) => {

    return (
        <div className={styles.card}>
            <Row justify="space-between" align="middle" >
                <Col span={12} >
                    <Image src={image}></Image>
                </Col>
                <Col span={12}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.description}>{description}</p>
                  <div style={{width : "fit-content" ,backgroundColor: "#EEEEEE" , padding:4 , marginTop:1}}>  <p className={styles.tag}>Informative Widgets</p></div>
                </Col>

            </Row>

        </div>
    );
}

export default CardWidget