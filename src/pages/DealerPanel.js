import React from 'react';
import { Typography, Row, Col, Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';


const { Title } = Typography;

const DealerPanel = () => {
    const navigate = useNavigate();

  return (
    <Row
      justify="center"
      align="start"
      style={{ minHeight: '100vh', backgroundColor: '#E8F5E9', padding: '60px 0' }}
    >
      <Col xs={22} sm={18} md={12} lg={8}>
        <Title level={2} style={{ color: '#2e7d32', textAlign: 'center', marginBottom: '40px' }}>
          Aracı Paneli
        </Title>

        <Space direction="vertical" size="large" style={{ width: '100%' }}>
  <Button block style={{ fontWeight: 'bold', height: '60px' }} onClick={() => navigate('/dealer/search')}>
    Malzeme Arama
  </Button>

  <Button block style={{ fontWeight: 'bold', height: '60px' }} onClick={() => navigate('/dealer/blocked-materials')}>
  Bloke Konulan Ürünler
  </Button>

  <Button block style={{ fontWeight: 'bold', height: '60px' }} onClick={() => navigate('/dealer/auctions')}>
  Açık Artırmaya Gönderilen Ürünler
  </Button>

  <Button block style={{ fontWeight: 'bold', height: '60px' }} onClick={() => navigate('/dealer/company-sale')}>
    Firma Satışı
  </Button>

  <Button block style={{ height: '60px', fontWeight: 'bold' }} onClick={() => navigate('/dealer/chip-history')}>
    Çip Bakiyesi ve Geçmişi
  </Button>

  <Button block style={{ height: '60px', fontWeight: 'bold' }} onClick={() => navigate('/dealer/incoming-offers')}>
    Gelen Teklifler
  </Button>
</Space>

      </Col>
    </Row>
  );
};

export default DealerPanel;
