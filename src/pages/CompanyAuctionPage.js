import React from 'react';
import { Typography, Row, Col, Card, Button, Space } from 'antd';
import { SyncOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const auctionData = [
  {
    id: 1,
    material: 'Plastik',
    amount: '20 kg',
    lastBid: '200 TL'
  },
  {
    id: 2,
    material: 'Kağıt',
    amount: '30 kg',
    buyer: 'Firma B'
  },
  {
    id: 3,
    material: 'Cam',
    amount: '30 kg',
    buyer: 'Firma C'
  },
  {
    id: 4,
    material: 'Metal',
    amount: '10 kg',
    buyer: 'Firma D'
  }
];

const CompanyAuctionPage = () => {
  return (
    <Row justify="center" style={{ backgroundColor: '#E8F5E9', minHeight: '100vh', padding: '60px 16px' }}>
      <Col xs={24} sm={20} md={16} lg={12}>
        <Title level={2} style={{ color: '#2e7d32', marginBottom: '32px' }}>Açık Artırma Listesi</Title>
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          {auctionData.map((item) => (
            <Card key={item.id} style={{ borderRadius: '12px' }}>
              <Row justify="space-between" align="middle">
                <Col>
                  <Text strong style={{ fontSize: '18px' }}>
                    <SyncOutlined style={{ marginRight: '8px' }} />
                    {item.material}
                  </Text>
                  <div>{item.amount}</div>
                  {item.lastBid ? (
                    <div>Son Teklif: {item.lastBid}</div>
                  ) : (
                    <div>Alıcı: {item.buyer}</div>
                  )}
                </Col>
                <Col>
                  <Button type="default">Teklif Ver</Button>
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
