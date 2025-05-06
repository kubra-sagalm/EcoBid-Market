import React from 'react';
import { Typography, Row, Col, Input, Button, Card } from 'antd';

const { Title, Text } = Typography;

const PurchaseDetailPage = () => {
  return (
    <Row justify="center" style={{ backgroundColor: '#E8F5E9', minHeight: '100vh', paddingTop: 60 }}>
      <Col xs={22} sm={20} md={16} lg={12}>
        <Card style={{ borderRadius: 12, padding: 24 }}>
          <Row justify="space-between" align="middle">
            <Title level={2} style={{ color: '#2e7d32' }}>Blokeli Ürün Detayı</Title>
          </Row>

          <Title level={4} style={{ marginTop: 32 }}>Ürün Bilgileri</Title>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Input size="large" value="Kağıt" addonBefore="Ürün Türü" disabled />
            </Col>
            <Col xs={24} sm={12}>
              <Input size="large" value="5 ton" addonBefore="Ürün Miktarı" disabled />
            </Col>
          </Row>

          <Title level={4} style={{ marginTop: 32 }}>Müşteri Bilgileri</Title>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Input size="large" value="Ahmet Kaya" addonBefore="Müşteri Adı Soyadı" disabled />
            </Col>
            <Col xs={24} sm={12}>
              <Input size="large" value="0500 987 65 43" addonBefore="Müşteri Numarası" disabled />
            </Col>
            <Col xs={24} sm={12} style={{ marginTop: 16 }}>
              <Input size="large" value="Gülbahar Caddesi No: 7" addonBefore="Müşteri Adresi" disabled />
            </Col>
            <Col xs={24} sm={12} style={{ marginTop: 16 }}>
              <Input size="large" value="Menekşe Mah. No: 18, Bursa" addonBefore="Teslimat Adresi" disabled />
            </Col>
          </Row>

          <Row justify="end" gutter={16} style={{ marginTop: 32 }}>
            <Col>
              <Button danger>İptal Et</Button>
            </Col>
            <Col>
              <Button type="primary">Satın Al</Button>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default PurchaseDetailPage;
