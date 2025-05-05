import React from 'react';
import { Typography, Card, Button, Row, Col } from 'antd';

const { Title, Text } = Typography;

const materials = [
  { type: 'Cam', amount: '10 kg', date: '20.04.2024' },
  { type: 'Plastik', amount: '5 kg', date: '18.04.2024' },
  { type: 'Kağıt', amount: '20 kg', date: '10.04.2024' },
];

const DealerCompanySalePage = () => {
  const handleSendToAuction = (item) => {
    console.log(`Açık artırmaya gönderildi: ${item.type}`);
    // API veya state yönetimi eklenebilir
  };

  return (
    <Row justify="center" style={{ backgroundColor: '#E8F5E9', minHeight: '100vh', padding: '60px 16px' }}>
      <Col xs={24} sm={20} md={16} lg={12}>
        <Title level={2} style={{ color: '#2e7d32', marginBottom: '8px' }}>Firma Satışı</Title>
        <Text type="secondary">Satın alınan malzemeleri açık artırmaya gönderin</Text>

        {materials.map((item, index) => (
          <Card
            key={index}
            style={{ marginTop: 20, borderRadius: 8 }}
            bodyStyle={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <div>
              <Text strong>{item.type}</Text><br />
              <Text>{item.amount}</Text><br />
              <Text type="secondary">{item.date}</Text>
            </div>
            <Button onClick={() => handleSendToAuction(item)}>
              Açık Artırmaya Gönder
            </Button>
          </Card>
        ))}
      </Col>
    </Row>
  );
};

export default DealerCompanySalePage;
