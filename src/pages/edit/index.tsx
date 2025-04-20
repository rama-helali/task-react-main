import React, { useState } from 'react';
import BaseLayout from '../../components/general/layout/base-layout';
import { Button, Col, Row } from 'antd';
import { CheckOutlined, MenuFoldOutlined, MenuUnfoldOutlined, RedoOutlined } from '@ant-design/icons';
import BaseBagEdit from '../../components/general/base-bg-edit';
import DrawerEdit from '../../components/general/drawer-edit';

const EditPage: React.FC = () => {
    const [openDrawer, setOpernDrawer] = useState(false)

    return (
        <BaseLayout>
            <Row justify="end" style={{ margin: 10 }}>
                <Button color="danger" variant='text' icon={<RedoOutlined />}>Discard</Button>
                <Button color="blue" variant='text' icon={(<CheckOutlined />)}>Save</Button>
                <Button type='text' size="large" icon={(!openDrawer ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />)} onClick={() => setOpernDrawer(!openDrawer)}></Button>
            </Row>
            <Row  >
                <Col span={24}>
                <BaseBagEdit/>
                </Col>
            </Row>
            <DrawerEdit open ={openDrawer} setOpen={setOpernDrawer}></DrawerEdit>
        </BaseLayout>
    );
};

export default EditPage;