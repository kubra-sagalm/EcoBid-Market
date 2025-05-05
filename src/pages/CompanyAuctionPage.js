import React from 'react';
import { Typography, Row, Col, Card, Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { SyncOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const auctionItems = [
  { key: 1, material: 'Plastik', amount: '20 kg', lastBid: '₺200' },
  { key: 2, material: 'Kağıt', amount: '30 kg', buyer: 'Firma B' },
  { key: 3, material: 'Cam', amount: '30 kg', buyer: 'Firma C' },
  { key: 4, material: 'Metal', amount: '10 kg', buyer: 'Firma D' }
];

const CompanyAuctionPage = () => {
  const navigate = useNavigate();

  return (
    <Row justify="center" style={{ backgroundColor: '#E8F5E9', minHeight: '100vh', paddingTop: '60px' }}>
      <Col xs={22} sm={20} md={16} lg={12}>
        <Title level={2} style={{ color: '#2e7d32', marginBottom: '24px' }}>Açık Artırma Listesi</Title>
        
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          {auctionItems.map(item => (
            <Card key={item.key} bordered style={{ borderRadius: '12px' }}>
              <Row justify="space-between" align="middle">
                <Col>
                  <Text strong style={{ fontSize: '16px' }}>{item.material}</Text>
                  <div>{item.amount}</div>
                  {item.lastBid ? (
                    <div>Son Teklif: {item.lastBid}</div>
                  ) : (
                    <div>Alıcı: {item.buyer}</div>
                  )}
                </Col>
                <Col>
                  <Button
                    icon={<SyncOutlined />}
                    onClick={() => navigate('/company/give-offer')}
                  >
                    Teklif Ver
                  </Button>
                </Col>
              </Row>
            </Card>
          ))}
        </Space>
      </Col>
    </Row>
  );
};

export default CompanyAuctionPage;
