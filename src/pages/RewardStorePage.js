import React, { useEffect, useState } from 'react';
import { Typography, Row, Col, Button, Divider, List, Space, Tag, message } from 'antd';

const { Title, Text } = Typography;

const RewardStorePage = () => {
  const [rewards, setRewards] = useState([]);
  const [chipBalance, setChipBalance] = useState(0); // örnek: localStorage'dan da çekebilirsin

  useEffect(() => {
    const fetchRewards = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:5249/api/Musteri/odul/listele", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error("Ödüller alınamadı");
        }

        const data = await response.json();
        setRewards(data);
      } catch (err) {
        console.error("Ödüller alınamadı:", err);
        message.error("❌ Ödüller yüklenemedi.");
      }
    };

    fetchRewards();
  }, []);

  const handlePurchase = (item) => {
    console.log(`Satın alındı: ${item.ad}`);
    // Satın alma API'si buraya eklenebilir
  };

  const cipToTL = (cip) => (cip * 0.25).toFixed(2); // örnek: 1 çip = 0.25 TL

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
                  item.gerekliCip <= chipBalance ? (
                    <Button type="primary" onClick={() => handlePurchase(item)}>
                      Satın Al
                    </Button>
                  ) : (
                    <Tag color="default" style={{ padding: '5px 12px' }}>
                      Yetersiz Çip
                    </Tag>
                  )
                ]}
              >
                <List.Item.Meta
                  title={<Text strong>{item.ad}</Text>}
                  description={
                    <>
                      <Text type="secondary">{item.gerekliCip} çip</Text>
                      <br />
                      <Text type="secondary">≈ {cipToTL(item.gerekliCip)} ₺</Text>
                    </>
                  }
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
