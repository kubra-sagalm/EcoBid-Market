import React, { useEffect, useState } from 'react';
import { Table, Typography, Button, Row, Col, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const BlockedMaterialsPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchBlockedMaterials = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch("http://localhost:5249/api/Araci/benim-bloke-ettiklerim", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error("🔴 API yanıtı:", errorText);
          throw new Error("Veri alınamadı.");
        }

        const result = await response.json();

        const formatted = result.map((item, index) => ({
          key: item.id || index.toString(),
          material: capitalize(item.turu),
          amount: `${item.miktarKg} kg`,
          customer: item.musteriAdSoyad || "Bilinmiyor",
          status: calculateBlockRemaining(item.blokeEdilmeTarihi)
        }));

        setData(formatted);
      } catch (err) {
        console.error("Veri çekme hatası:", err);
        message.error("❌ Bloke ürünler yüklenemedi.");
      }
    };

    fetchBlockedMaterials();
  }, []);

  const columns = [
    { title: 'Malzeme Türü', dataIndex: 'material', key: 'material' },
    { title: 'Malzeme Miktarı', dataIndex: 'amount', key: 'amount' },
    { title: 'Müşteri Adı Soyadı', dataIndex: 'customer', key: 'customer' },
    {
      title: 'Bloke Kalma Zamanı',
      dataIndex: 'status',
      key: 'status',
      render: (text) => {
        const displayText = text || "Bilinmiyor";
        const isExpired = displayText.toLowerCase().includes("kalktı");
        return (
          <span style={{ color: isExpired ? "red" : "#2e7d32" }}>
            {displayText}
          </span>
        );
      }
    },
    {
      title: '',
      key: 'detail',
      render: (_, record) => (
        <Button
          type="primary"
          style={{ backgroundColor: 'black', borderColor: 'black' }}
          onClick={() => navigate(`/dealer/purchase-detail`, { state: { malzemeId: record.key } })}
        >
          Detay
        </Button>
      )
    }
  ];

  return (
    <Row justify="center" style={{ backgroundColor: '#E8F5E9', minHeight: '100vh', padding: '60px 16px' }}>
      <Col xs={24} sm={22} md={20} lg={16}>
        <Title level={2} style={{ color: '#2e7d32', marginBottom: '24px' }}>
          Bloke Konulan Ürünler
        </Title>

        <Table dataSource={data} columns={columns} pagination={false} bordered />
      </Col>
    </Row>
  );
};

// İlk harfi büyük yap
const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Bloke süresi hesapla
const calculateBlockRemaining = (blokeEdilmeTarihi) => {
  if (!blokeEdilmeTarihi) return "Bloke kalktı";

  const start = new Date(blokeEdilmeTarihi);
  const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);
  const now = new Date();

  const diffMs = end - now;

  if (diffMs <= 0) return "Bloke kalktı";

  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  return `Kalan süre: ${hours} saat ${minutes} dk`;
};

export default BlockedMaterialsPage;
