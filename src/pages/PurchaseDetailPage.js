import React, { useEffect, useState } from 'react';
import { Typography, Row, Col, Input, Button, Card, message, Popconfirm } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

const { Title } = Typography;

const PurchaseDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const malzemeId = location.state?.malzemeId;

  const [malzeme, setMalzeme] = useState(null);

  useEffect(() => {
    const fetchMalzemeDetay = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`http://localhost:5249/api/Araci/malzeme-detay/${malzemeId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText);
        }

        const data = await response.json();
        setMalzeme(data);
      } catch (err) {
        console.error("Detay çekme hatası:", err);
        message.error("❌ Malzeme detayları yüklenemedi.");
      }
    };

    if (malzemeId) fetchMalzemeDetay();
    else message.error("Malzeme ID bilgisi bulunamadı.");
  }, [malzemeId]);

  const handleIptal = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5249/api/Araci/malzeme-bloke-iptal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(malzemeId)
      });

      if (!response.ok) throw new Error(await response.text());

      message.success("✅ Malzeme bloke iptal edildi.");
      navigate("/dealer/blocked-materials");
    } catch (err) {
      console.error("İptal hatası:", err);
      message.error("❌ Bloke iptal edilemedi.");
    }
  };

  const handleSatinAl = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5249/api/Araci/malzeme-satin-al", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(malzemeId)
      });

      if (!response.ok) throw new Error(await response.text());

      message.success("✅ Malzeme başarıyla satın alındı.");
      navigate("/dealer/blocked-materials");
    } catch (err) {
      console.error("Satın alma hatası:", err);
      message.error("❌ Satın alma işlemi başarısız.");
    }
  };

  return (
    <Row justify="center" style={{ backgroundColor: '#E8F5E9', minHeight: '100vh', paddingTop: 60 }}>
      <Col xs={22} sm={20} md={16} lg={12}>
        <Card style={{ borderRadius: 12, padding: 24 }}>
          <Row justify="space-between" align="middle">
            <Title level={2} style={{ color: '#2e7d32' }}>Blokeli Ürün Detayı</Title>
          </Row>

          {malzeme ? (
            <>
              <Title level={4} style={{ marginTop: 32 }}>Ürün Bilgileri</Title>
              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Input size="large" value={malzeme.turu} addonBefore="Ürün Türü" disabled />
                </Col>
                <Col xs={24} sm={12}>
                  <Input size="large" value={`${malzeme.miktarKg} kg`} addonBefore="Ürün Miktarı" disabled />
                </Col>
              </Row>

              <Title level={4} style={{ marginTop: 32 }}>Müşteri Bilgileri</Title>
              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Input size="large" value={malzeme.musteri.adSoyad} addonBefore="Ad Soyad" disabled />
                </Col>
                <Col xs={24} sm={12}>
                  <Input size="large" value={malzeme.musteri.telefon} addonBefore="Telefon" disabled />
                </Col>
                <Col xs={24} sm={24} style={{ marginTop: 16 }}>
                  <Input size="large" value={malzeme.musteri.adres} addonBefore="Adres" disabled />
                </Col>
              </Row>

              <Row justify="end" gutter={16} style={{ marginTop: 32 }}>
                <Col>
                  <Popconfirm
                    title="Blokeyi iptal etmek istediğinize emin misiniz?"
                    onConfirm={handleIptal}
                    okText="Evet"
                    cancelText="Hayır"
                  >
                    <Button danger>İptal Et</Button>
                  </Popconfirm>
                </Col>
                <Col>
                  <Button type="primary" onClick={handleSatinAl}>
                    Satın Al
                  </Button>
                </Col>
              </Row>
            </>
          ) : (
            <Title level={4}>Yükleniyor...</Title>
          )}
        </Card>
      </Col>
    </Row>
  );
};

export default PurchaseDetailPage;
