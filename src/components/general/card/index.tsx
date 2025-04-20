import { Button, Col, Flex, Image, Row, Typography } from "antd"
import styles from "./styles.module.scss"
import { RiDeleteBinFill } from "react-icons/ri";
import { MdFolderCopy } from "react-icons/md";
import EditContext from "../../../context/edit/context";
import { useContext } from "react";
import { useDrag } from "react-dnd";

interface IProps {
    image?: string
    description?: string
    title: string
    id?: number
    x?: number;
    y?: number;
}
const ItemType = {
    CARD: "card",
};

const CardGeneral: React.FC<IProps> = ({ image, description, title, id, x, y }) => {
    const { actions, widghets } = useContext(EditContext);
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemType.CARD,
        item: { id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    const addNew = () => {
        let maxLocation = { x: 0, y: 0 };

        if (widghets?.length > 0) {
            maxLocation = widghets.reduce((max, el) => ({
                x: Math.max(max.x, el.locationX ?? 0),
                y: Math.max(max.y, el.locationY ?? 0)
            }), maxLocation);
        }
        actions.addWidghets({
            id: widghets.length + 1, image: image, title: title, description: description ?? "--",
            locationX: window?.innerWidth < maxLocation.x + 340 ? 0 : maxLocation.x + 340,
            locationY: window?.innerWidth < maxLocation.x + 340 ? maxLocation.y + 400 : maxLocation.y + 240
        })
    }

    return (
        <>
            <div ref={drag} className={id ? styles.card : styles.cardDefault} style={{
                position: "absolute",
                left: x,
                top: y, opacity: isDragging ? 0.8 : 1
            }}>
                <Row justify="space-between">
                    <Col span={12}>
                        <Typography.Text className={styles.title}>{title}</Typography.Text>
                        <br></br><br></br>
                        <Typography.Text className={styles.description}>{description}</Typography.Text>
                    </Col>
                    <Col >
                        <Image src={image} preview={false}></Image>
                    </Col>
                </Row>
                <Row justify="center">
                    <Image src="point.png" preview={false}></Image>
                </Row>
                {id && <Flex vertical  >
                    <Button
                        onClick={() => {
                            addNew()
                        }}
                        icon={<MdFolderCopy />}
                        shape="circle"
                        color="primary" variant="outlined" style={{ left: "330px", top: "-190px" }}
                    ></Button>
                    <Button
                        onClick={() => {
                            actions.deleteWidghets(id)
                        }}
                        icon={<RiDeleteBinFill />}
                        shape="circle" color="danger" variant="outlined" style={{ left: "330px", top: "-180px" }}></Button>
                </Flex>}
            </div>

        </>
    );
}

export default CardGeneral