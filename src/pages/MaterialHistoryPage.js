import React from 'react';
import { Typography, Button, Table, Row, Col, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const MaterialHistoryPage = () => {
  const navigate = useNavigate();

  const columns = [
    {
      title: 'Malzeme Türü',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Miktar',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Tarih',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Çip',
      dataIndex: 'chip',
      key: 'chip',
    },
    {
      title: 'Durum',
      dataIndex: 'status',
      key: 'status',
      render: (text) => <strong>{text}</strong>,
    },
  ];

  const data = [
    {
      key: '1',
      type: 'Cam',
      amount: '5 kg',
      date: '24.04.2024',
      chip: '+50 çip',
      status: '',
    },
    {
      key: '2',
      type: 'Plastik',
      amount: '10 kg',
      date: '20.04.2024',
      chip: '+100 çip',
      status: '',
    },
    {
      key: '3',
      type: 'Kağıt',
      amount: '3 kg',
      date: '15.04.2024',
      chip: '+30 çip',
      status: ' ',
    },
    {
      key: '4',
      type: 'Cam',
      amount: '8 kg',
      date: '10.04.2024',
      chip: '+80 çip',
      status: 'iptal edildi',
    },
    {
      key: '5',
      type: 'Cam',
      amount: '4 kg',
      date: '10.04.2024',
      chip: '+40 çip',
      status: 'Satıldı',
    },
  ];

  return (
    <div style={{ backgroundColor: '#E8F5E9', minHeight: '100vh', padding: '60px 24px' }}>
      <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
        <Col>
          <Title level={2} style={{ color: '#2e7d32' }}>Malzeme Geçmişi</Title>
        </Col>
        <Col>
          <Button onClick={() => navigate('/material-add')} type="default">
            Geri Dönüşüm Malzemesi Ekle
          </Button>
        </Col>
      </Row>

      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
        style={{ backgroundColor: 'white' }}
      />
    </div>
  );
};

export default MaterialHistoryPage;
