import React from 'react';
import { Button, Col, Drawer, Flex, Input, Row, Tabs, Tag, Typography } from 'antd';
import { TabsProps } from 'antd/lib';
import styles from "./style.module.scss";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import CardWidget from '../card-widget';

interface IProps {
    open: boolean;
    setOpen: (data: boolean) => void;
}

const DrawerEdit: React.FC<IProps> = ({ open, setOpen }) => {
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Templates',

        },
        {
            key: '2',
            label: 'Drafts',

        },
    ];

    return (
        <>
            <Drawer
                onClose={() => setOpen(false)}
                open={open}
                closable={false}
                width={241}
                placement="right"
                bodyStyle={{ padding: 20 }}
                style={{
                    boxShadow: "-5px 0 15px rgba(0, 0, 0, 0.2)", // Left-side box shadow
                    transition: "box-shadow 0.3s ease-in-out", // Smooth shadow transition
                }}
            >
                <Row justify="space-between">
                    <Typography.Text className={styles.title}>
                        Add  Widget
                    </Typography.Text>
                    <Button type='text' icon={<CloseOutlined />} onClick={() => setOpen(false)}></Button>
                </Row>
                <Row justify="center">
                    <Tabs defaultActiveKey="1" items={items} />
                    <Col span={24}>  <Input prefix={<SearchOutlined style={{ color: " #A6B3D5" }} />} className={styles.inputSearch} placeholder="Search" /></Col>
                </Row>
                <Row style={{ marginTop: 20 }} gutter={[10, 10]} justify="start">
                    <Tag style={{ backgroundColor: "#C6D4EF" }}>All (6)</Tag>
                    <Tag style={{ backgroundColor: "#EEEEEE" }}>Informative Widgets (3)</Tag>
                    <Tag style={{ backgroundColor: "#EEEEEE" }}>Statistics Widgets (3)</Tag>
                </Row>
                <Row>
                    <CardWidget image="imageDrawer1.png" title="Average Age Chart" description="Lorem ipsum is placeholder text commonly used in the graphic...."></CardWidget>
                    <CardWidget image="imageDrawer1.png" title="Average Age Chart" description="Lorem ipsum is placeholder text commonly used in the graphic...."></CardWidget>
                    <CardWidget image="imageDrawer1.png" title="Average Age Chart" description="Lorem ipsum is placeholder text commonly used in the graphic...."></CardWidget>
                    <CardWidget image="imageDrawer1.png" title="Average Age Chart" description="Lorem ipsum is placeholder text commonly used in the graphic...."></CardWidget>
                    <CardWidget image="imageDrawer1.png" title="Average Age Chart" description="Lorem ipsum is placeholder text commonly used in the graphic...."></CardWidget>
                </Row>

            </Drawer>
        </>
    );
};

export default DrawerEdit;
