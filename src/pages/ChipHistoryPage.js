import React from 'react';
import { Typography, Row, Col, Card, List } from 'antd';

const { Title, Text } = Typography;

const data = [
  {
    description: '50 Çip Kullanıldı',
    date: '25.04.2024',
    amount: '-50 Çip',
    type: 'harcama',
    firm: 'Yeşil Market',
    material: 'Bez Çanta',
    quantity: '1 adet'
  },
  {
    description: '10 Çip Kazanıldı',
    date: '25.04.2024',
    amount: '+10 Çip',
    type: 'kazanım',
    firm: 'Yeşil Geri Dönüşüm',
    material: 'Kağıt',
    quantity: '2 kg'
  },
  {
    description: '50 Çip Kazanıldı',
    date: '20.04.2024',
    amount: '+50 Çip',
    type: 'kazanım',
    firm: 'Doğa Geri Kazanım',
    material: 'Cam',
    quantity: '5 kg'
  },
  {
    description: 'Plastik Eklendi',
    date: '20.04.2024',
    amount: '+20 Çip',
    type: 'kazanım',
    firm: 'Plastik Hayat',
    material: 'Plastik',
    quantity: '3 kg'
  },
  {
    description: '30 Çip Kullanıldı',
    date: '19.04.2024',
    amount: '-30 Çip',
    type: 'harcama',
    firm: 'EkoPazar',
    material: 'Geri Dönüşüm Defteri',
    quantity: '1 adet'
  }
];

const ChipHistoryPage = () => {
  const chipBalance = 200;

  return (
    <Row
      justify="center"
      style={{ backgroundColor: '#E8F5E9', minHeight: '100vh', padding: '60px 16px' }}
    >
      <Col xs={24} sm={20} md={14} lg={10}>
        <Title level={2} style={{ color: '#2e7d32', textAlign: 'center' }}>
          Çip Bakiyesi ve Geçmişi
        </Title>

        <Card style={{ margin: '24px 0', textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }}>
          {chipBalance} Çip
        </Card>

        <Title level={4} style={{ marginBottom: 16 }}>Geçmiş İşlemler</Title>

        <List
          dataSource={data}
          bordered
          renderItem={item => (
            <List.Item style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <div>
                <Text strong>{item.description}</Text>
                <br />
                <Text type="secondary" style={{ fontSize: '13px' }}>{item.date}</Text>
                {(item.firm || item.material || item.quantity) && (
                  <div style={{ fontSize: '13px', marginTop: 4 }}>
                    <Text>
                      Firma: <strong>{item.firm}</strong>, Ürün/Malzeme: <strong>{item.material}</strong>, Miktar: <strong>{item.quantity}</strong>
                    </Text>
                  </div>
                )}
              </div>
              <div>
                <Text
                  style={{
                    color: item.type === 'harcama' ? '#d32f2f' : '#2e7d32',
                    fontWeight: 'bold'
                  }}
                >
                  {item.amount}
                </Text>
              </div>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};

export default ChipHistoryPage;
