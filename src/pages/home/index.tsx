import React from 'react';
import { FloatButton } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import CardGeneral from '../../components/general/card';
import BaseLayout from '../../components/general/layout/base-layout';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <BaseLayout>
      <FloatButton
        icon={<EditOutlined />}
        shape="square"
        type="primary"
        style={{ insetInlineEnd: 24 }}
        onClick={() => {navigate('/edit')}}
      />
      <CardGeneral image='image.png' description='nec vel ac elementum urna tincidunt Cras elementum vehicula, Ut ullamcorper amet, vitae non Nunc libero, quam ' title='Donec gravida ' ></CardGeneral>
    </BaseLayout>
  );
};

export default Home;