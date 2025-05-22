import React, { useState } from 'react';
import {
  Typography,
  Select,
  Input,
  Button,
  Form,
  Row,
  Col,
  Card,
  message,
} from 'antd';

const { Title, Text } = Typography;
const { Option } = Select;

const MaterialAddPage = () => {
  const [materialType, setMaterialType] = useState('');
  const [kg, setKg] = useState('');

  const handleSubmit = async () => {
  const payload = {
    turu: materialType,
    miktarKg: parseFloat(kg),
  };

  try {
    const token = localStorage.getItem('token');

    const response = await fetch('http://localhost:5249/api/Musteri', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      // Eğer JSON varsa al, yoksa direkt mesaj ver
      const result = await safeJson(response);
      message.success(result?.message || '✅ Malzeme başarıyla gönderildi!');
      setKg('');
      setMaterialType('');
    } else {
      const error = await safeJson(response);
      message.error(error?.message || '❌ Malzeme eklenemedi.');
    }
  } catch (error) {
    console.error('Sunucu hatası:', error);
    message.error('❌ Sunucuya bağlanılamadı.');
  }
};

// JSON parçalarken boş dönerse hata fırlatmayan yardımcı fonksiyon:
const safeJson = async (response) => {
  try {
    return await response.json();
  } catch {
    return null;
  }
};


  return (
    <Row
      justify="center"
      align="middle"
      style={{ height: '100vh', backgroundColor: '#E8F5E9' }}
    >
      <Col xs={22} sm={16} md={10} lg={8}>
        <Card style={{ borderRadius: 12, padding: 24, marginTop: '-180px' }}>
          <Title level={2} style={{ color: '#2e7d32', marginBottom: 32 }}>
            Geri Dönüşüm Malzemesi Ekle
          </Title>

          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item label="Tür seçimi" required>
              <Select
                placeholder="Tür seçin"
                value={materialType}
                onChange={(value) => setMaterialType(value)}
                size="large"
              >
                <Option value="plastik">Plastik</Option>
                <Option value="cam">Cam</Option>
                <Option value="metal">Metal</Option>
                <Option value="kağıt">Kağıt</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Kg bilgisi girme" required>
              <Input
                type="number"
                size="large"
                placeholder="0"
                value={kg}
                onChange={(e) => setKg(e.target.value)}
              />
            </Form.Item>

            <div style={{ marginBottom: 24 }}>
              <Text strong style={{ fontSize: '18px', color: '#388E3C' }}>
                +10 Çip
              </Text>
            </div>

            <Button type="primary" htmlType="submit" block size="large">
              Sisteme gönder
            </Button>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default MaterialAddPage;
