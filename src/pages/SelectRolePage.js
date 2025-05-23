import React, { useState } from 'react';
import { Typography, Radio, Row, Col, Card, Button, Alert } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const SelectRolePage = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!selectedRole) {
      setErrorMessage('Lütfen bir rol seçiniz.');
      return;
    }

    setErrorMessage(''); // hata varsa temizle

    if (selectedRole === 'musteri') {
      navigate('/individual');
    } else if (selectedRole === 'araci') {
      navigate('/dealer');
    } else if (selectedRole === 'firma') {
      navigate('/company');
    }
  };

  return (
    <Row
      justify="center"
      align="top"
      style={{ height: '100vh', backgroundColor: '#E8F5E9', paddingTop: '60px' }}
    >
      <Col xs={22} sm={18} md={14} lg={10}>
        <Card bordered={false} style={{ borderRadius: '12px', paddingBottom: '60px', position: 'relative' }}>
          <Title level={2} style={{ color: '#2e7d32' }}>Hoş geldiniz Kübra</Title>
          <Text strong>Hangi rolü kullanmak istersiniz?</Text>

          <Radio.Group
            onChange={(e) => setSelectedRole(e.target.value)}
            value={selectedRole}
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '20px',
              gap: '10px'
            }}
          >
            <Radio value="musteri"><strong>Müşteri</strong></Radio>
            <Radio value="araci"><strong>Aracı</strong></Radio>
            <Radio value="firma"><strong>Firma</strong></Radio>
          </Radio.Group>

          {/* HATA MESAJI GÖSTERİMİ */}
          {errorMessage && (
            <Alert
              message={errorMessage}
              type="error"
              showIcon
              style={{ marginTop: '20px' }}
            />
          )}

          <div style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
            <Button type="primary" onClick={handleContinue}>
              Devam Et
            </Button>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default SelectRolePage;
