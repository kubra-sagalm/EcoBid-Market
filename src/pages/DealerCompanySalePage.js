import React, { useEffect, useState } from 'react';
import { Typography, Card, Button, Row, Col, message } from 'antd';

const { Title, Text } = Typography;

const DealerCompanySalePage = () => {
  const [materials, setMaterials] = useState([]);

  // Satın alınan özet verileri çek
  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:5249/api/Araci/satin-aldiklarim-ozet", {
          headers: { Authorization: `Bearer ${token}` }
        });

        if (!response.ok) throw new Error("Veri alınamadı");

        const data = await response.json();
        setMaterials(data);
      } catch (err) {
        console.error("Veri hatası:", err);
        message.error("❌ Satın alınan malzemeler yüklenemedi.");
      }
    };

    fetchMaterials();
  }, []);

  // Açık artırmaya gönderme işlemi
  const handleSendToAuction = async (item) => {
    try {
      const token = localStorage.getItem("token");

      // SatinAlimId'yi burada alman gerekiyor. Örnek amaçlı 1 yazılmıştır, backend bu alanı istiyor!
      const response = await fetch("http://localhost:5249/api/Araci/acik-artirmaya-gonder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          satinAlimId: item.satinAlimId // Gerçek ID'yi API'den alman gerekir
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      message.success("✅ Açık artırmaya gönderildi.");
    } catch (err) {
      console.error("Gönderme hatası:", err);
      message.error(`❌ ${err.message}`);
    }
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
              <Text strong>{item.turu}</Text><br />
              <Text>{item.toplamKg} kg</Text>
            </div>
            <Button type="primary" onClick={() => handleSendToAuction(item)}>
              Açık Artırmaya Gönder
            </Button>
          </Card>
        ))}
      </Col>
    </Row>
  );
};

export default DealerCompanySalePage;
