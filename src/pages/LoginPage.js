import React from 'react';
import { Form, Input, Button, Typography, Row, Col, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Her zaman yönlendir, doğrulama yok
    navigate('/select-role');
  };

  return (
    <Row justify="center" align="middle" style={{ height: '90vh', backgroundColor: '#E8F5E9' }}>
      <Col xs={20} sm={12} md={8}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: 30, color: '#2e7d32' }}>
          Giriş Yap
        </Title>

        <Form layout="vertical">
          <Form.Item name="email">
            <Input size="large" placeholder="Email" />
          </Form.Item>

          <Form.Item name="password">
            <Input.Password size="large" placeholder="Şifre" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" size="large" block onClick={handleLogin}>
              Giriş Yap
            </Button>
          </Form.Item>

          <Form.Item style={{ textAlign: 'center' }}>
            <Text type="secondary">Şifrenizi mi unuttunuz?</Text>
          </Form.Item>

          <Divider />

          <Row justify="center" align="middle">
            <Text style={{ marginRight: 8 }}>Hesabınız yok mu?</Text>
            <Button type="default" onClick={() => navigate('/register')}>
              Kayıt Ol
            </Button>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default LoginPage;
