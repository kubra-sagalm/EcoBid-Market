import React from 'react';
import { Typography, Row, Col, Button, Space } from 'antd';

const { Title } = Typography;

const DealerPanel = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{ minHeight: '100vh', backgroundColor: '#E8F5E9', padding: '60px 0' }}
    >
      <Col xs={22} sm={18} md={12} lg={8}>
        <Title level={2} style={{ color: '#2e7d32', textAlign: 'center', marginBottom: '40px' }}>
          Aracı Paneli
        </Title>

        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Button block size="large">Malzeme Arama</Button>
          <Button block size="large">Satın Alınacak Malzemeler</Button>
          <Button block size="large">Açık Artırma Listesi</Button>
          <Button block size="large">Firma Satışı</Button>
          <Button block size="large">Çip Bakiyesi ve Geçmişi</Button>
          <Button block size="large">Gelen Teklifler</Button>
        </Space>
      </Col>
    </Row>
  );
};

export default DealerPanel;
