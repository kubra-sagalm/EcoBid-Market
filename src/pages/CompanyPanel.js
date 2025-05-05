import React from 'react';
import { Typography, Row, Col, Button, Space } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel } from '@fortawesome/free-solid-svg-icons';

const { Title } = Typography;

const CompanyPanel = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{ minHeight: '100vh', backgroundColor: '#E8F5E9', padding: '60px 0' }}
    >
      <Col xs={22} sm={18} md={12} lg={8}>
        <Title level={2} style={{ color: '#2e7d32', textAlign: 'center', marginBottom: '40px' }}>
          Firma Paneli
        </Title>

        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Button block size="large" icon={<FontAwesomeIcon icon={faGavel} />}>
            Açık Artırma Listesi
          </Button>

          <Button block size="large" icon={<ClockCircleOutlined />}>
            Teklif Geçmişi
          </Button>
        </Space>
      </Col>
    </Row>
  );
};

export default CompanyPanel;
