import React from 'react';
import { Typography, Row, Col, Form, Input, Button, Card } from 'antd';

const { Title, Text } = Typography;

const GiveOfferPage = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("Teklif verildi:", values);
  };

  return (
    <Row justify="center" style={{ backgroundColor: '#E8F5E9', minHeight: '100vh', paddingTop: '60px' }}>
      <Col xs={22} sm={18} md={14} lg={10}>
        <Title level={2} style={{ color: '#2e7d32', marginBottom: '24px' }}>Teklif Ver</Title>
        <Card bordered={false} style={{ borderRadius: '12px' }}>
          <Form layout="vertical" form={form} onFinish={handleSubmit}>
            <Title level={4} style={{ marginBottom: 16 }}>Alıcı Bilgileri</Title>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item name="firstName" label="Ad">
                  <Input placeholder="Adınızı girin" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="lastName" label="Soyad">
                  <Input placeholder="Soyadınızı girin" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item name="address" label="Adres">
              <Input placeholder="Örn: Karanfil Sokak No: 5" />
            </Form.Item>

            <Form.Item name="delivery" label="Teslimat Adresi">
              <Input placeholder="Örn: Papatya Mah. No: 20, İstanbul" />
            </Form.Item>

            <Text strong style={{ display: 'block', marginTop: 12 }}>Son Teklif: <span style={{ color: '#1b5e20' }}>₺250</span></Text>

            <Form.Item name="offer" style={{ marginTop: 16 }}>
              <Input placeholder="Yeni teklifinizi girin" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Teklif Ver
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default GiveOfferPage;
