import React from 'react';
import { Typography, Row, Col, Button, Card } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const CompanyPanel = () => {
  const navigate = useNavigate();

  return (
    <Row
      justify="center"
      align="top"
      style={{ minHeight: '100vh', backgroundColor: '#E8F5E9', padding: '60px 0' }}
    >
      <Col xs={22} sm={20} md={16} lg={10}>
        {/* Firma Paneli Başlığı */}
        <Title level={2} style={{ color: '#2e7d32', textAlign: 'center', marginTop: '50px', marginBottom: '40px' }}>
          Firma Paneli
        </Title>

        {/* Kart */}
        <Card
          bordered={false}
          style={{
            padding: '32px 24px',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        >
          <Row gutter={24} justify="center">
            <Col xs={24} sm={12}>
              <Button
                block
                size="large"
                icon={<FontAwesomeIcon icon={faGavel} />}
                onClick={() => navigate('/company-auctions')}
                style={{ height: '60px' }}
              >
                Açık Artırma Listesi
              </Button>
            </Col>

            <Col xs={24} sm={12}>
              <Button
                block
                size="large"
                icon={<ClockCircleOutlined />}
                onClick={() => navigate('/bid-history')}
                style={{ height: '60px' }}
              >
                Teklif Geçmişi
              </Button>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default CompanyPanel;
