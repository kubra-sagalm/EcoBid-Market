import React from 'react';
import { Typography, Row, Col, Button, Divider, List, Space, Tag } from 'antd';

const { Title, Text } = Typography;

const RewardStorePage = () => {
  const chipBalance = 0;

  const rewards = [
    { name: 'Hediye Çeki', cost: 100, inStock: true },
    { name: 'Promosyon Ürün', cost: 50, inStock: false },
    { name: 'Çekiliş Hakkı', cost: 25, inStock: true },
    { name: 'Ürün A', cost: 75, inStock: true },
  ];

  const handlePurchase = (item) => {
    console.log(`Satın alındı: ${item.name}`);
    // Buraya satın alma işlemi / API eklenebilir
  };

  return (
    <Row justify="center" style={{ backgroundColor: '#E8F5E9', minHeight: '100vh', paddingTop: '60px' }}>
      <Col xs={22} sm={18} md={12} lg={10}>
        <Space style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 32 }}>
          <Title level={2} style={{ color: '#2e7d32' }}>Ödül Mağazası</Title>
          <Text strong style={{ fontSize: '16px' }}>{chipBalance} Çip</Text>
        </Space>

        <List
          itemLayout="horizontal"
          dataSource={rewards}
          renderItem={(item, index) => (
            <>
              <List.Item
                actions={[
                  item.inStock ? (
                    <Button type="primary" onClick={() => handlePurchase(item)}>
                      Satın Al
                    </Button>
                  ) : (
                    <Tag color="default" style={{ padding: '5px 12px' }}>
                      Stokta yok
                    </Tag>
                  )
                ]}
              >
                <List.Item.Meta
                  title={<Text strong>{item.name}</Text>}
                  description={<Text type="secondary">{item.cost} çip</Text>}
                />
              </List.Item>
              {index !== rewards.length - 1 && <Divider style={{ margin: '8px 0' }} />}
            </>
          )}
        />
      </Col>
    </Row>
  );
};

export default RewardStorePage;
