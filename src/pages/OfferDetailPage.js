import React from 'react';
import { Typography, Row, Col, Card, Divider } from 'antd';

const { Title, Text } = Typography;

const OfferDetailPage = () => {
  return (
    <Row justify="center" style={{ backgroundColor: '#E8F5E9', minHeight: '100vh', paddingTop: 60 }}>
      <Col xs={22} sm={20} md={14} lg={10}>
        <Card style={{ borderRadius: 12, padding: 24 }}>
          <Title level={2} style={{ color: '#2e7d32', textAlign: 'center' }}>Teklif Detay</Title>
          <Divider />

          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Text strong>Firma Adı:</Text><br />
              <Text>Alternatif Geri Dönüşüm</Text>
            </Col>
            <Col span={12}>
              <Text strong>Firma Numarası:</Text><br />
              <Text>0500 123 45 67</Text>
            </Col>

            <Col span={24}>
              <Text strong>Firma Adresi:</Text><br />
              <Text>Sarmaşık Sokak No: 12, Ankara</Text>
            </Col>

            <Col span={12}>
              <Text strong>Teklif Tarihi:</Text><br />
              <Text>18.04.2024</Text>
            </Col>
            <Col span={12}>
              <Text strong>Ürün Türü:</Text><br />
              <Text>Kağıt</Text>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default OfferDetailPage;
