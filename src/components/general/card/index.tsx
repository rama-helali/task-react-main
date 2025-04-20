import { Col, Image, Row, Typography } from "antd"
import styles from "./styles.module.scss"

interface IProps {
    image?: string
    description?: string
    title: string
}

const CardGeneral: React.FC<IProps> = ({ image, description, title }) => {

    return (
        <div className={styles.card}>
            <Row justify="space-between">
                <Col span={12}>
                    <Typography.Text className={styles.title}>{title}</Typography.Text>
                    <br></br><br></br>
                    <Typography.Text className={styles.description}>{description}</Typography.Text>
                </Col>
                <Col >
                <Image  src={image}></Image>
                </Col>
            </Row>
            <Row justify="center">
                <Image src="point.png" preview={false}></Image>
            </Row>
        </div>
    );
}

export default CardGeneral