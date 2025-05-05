import React from 'react';
import { Form, Input, Button, Typography, Row, Col, Radio, Divider } from 'antd';

const { Title, Text } = Typography;

const RegisterPage = () => {
  return (
    <Row justify="center" align="middle" style={{ height: '90vh' }}>
      <Col xs={20} sm={12} md={8}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: 30 }}>
          Kayıt Ol
        </Title>

        <Form layout="vertical">
          <Form.Item name="email">
            <Input size="large" placeholder="Email" />
          </Form.Item>

          <Form.Item name="password">
            <Input.Password size="large" placeholder="Şifre" />
          </Form.Item>

          <Form.Item name="role">
            <Radio.Group>
              <Radio value="musteri">Müşteri</Radio>
              <Radio value="araci">Aracı</Radio>
              <Radio value="firma">Firma</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item>
            <Button type="primary" size="large" block>
              Kayıt Ol
            </Button>
          </Form.Item>

          <Divider />

          <Row justify="center" align="middle">
            <Text style={{ marginRight: 8 }}>Zaten bir hesabınız var mı?</Text>
            <Button type="default">Giriş Yap</Button>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default RegisterPage;
