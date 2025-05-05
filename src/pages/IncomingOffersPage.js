import React from 'react';
import { Typography, Table, Button, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const IncomingOffersPage = () => {
  const navigate = useNavigate();

  const dataSource = [
    {
      key: '1',
      material: 'Cam',
      amount: '20 kg',
      date: '24.04.2024',
      company: 'Ekoloji Geri Dönüşüm',
      price: '100 TL'
    },
    {
      key: '2',
      material: 'Plastik',
      amount: '15 kg',
      date: '22.04.2024',
      company: 'Vega Geri Dönüşüm',
      price: '90 TL'
    },
    {
      key: '3',
      material: 'Kağıt',
      amount: '10 kg',
      date: '22.04.2024',
      company: 'Alternatif Geri Dönüşüm',
      price: '60 TL'
    },
    {
      key: '4',
      material: '10 kg',
      amount: '10 kg',
      date: '18.04.2024',
      company: 'Alternatif Geri Dönüşüm',
      price: '10 kg'
    }
  ];

  const columns = [
    {
      title: 'Malzeme Türü',
      dataIndex: 'material',
      key: 'material'
    },
    {
      title: 'Miktar',
      dataIndex: 'amount',
      key: 'amount'
    },
    {
      title: 'Açık Arttırma Tarihi',
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: 'Firma Adı',
      dataIndex: 'company',
      key: 'company'
    },
    {
      title: 'En Yüksek Teklif',
      dataIndex: 'price',
      key: 'price'
    },
    {
      title: '',
      key: 'action',
      render: () => (
        <Button type="default" onClick={() => navigate('/dealer/offer-detail')}>
          Detay
        </Button>
      )
    }
  ];

  return (
    <Row justify="center" style={{ backgroundColor: '#E8F5E9', minHeight: '100vh', padding: '60px 16px' }}>
      <Col xs={24} sm={22} md={20} lg={16}>
        <Title level={2} style={{ color: '#2e7d32', marginBottom: '24px' }}>Gelen Teklifler</Title>
        <Table dataSource={dataSource} columns={columns} pagination={false} bordered />
      </Col>
    </Row>
  );
};

export default IncomingOffersPage;
