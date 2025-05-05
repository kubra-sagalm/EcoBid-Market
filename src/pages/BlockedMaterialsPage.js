import React from 'react';
import { Table, Typography, Button, Row, Col } from 'antd';

const { Title } = Typography;

const data = [
  { key: '1', material: 'Metal', amount: '50 kg', customer: 'Mert Demir', duration: '2 gün' },
  { key: '2', material: 'Kağıt', amount: '200 kg', customer: 'Ayşe Yılmaz', duration: '5 gün' },
  { key: '3', material: 'Plastik', amount: '100 kg', customer: 'Ali Kaya', duration: '1 gün' },
];

const columns = [
  { title: 'Malzeme Türü', dataIndex: 'material', key: 'material' },
  { title: 'Malzeme Miktarı', dataIndex: 'amount', key: 'amount' },
  { title: 'Müşteri Adı Soyadı', dataIndex: 'customer', key: 'customer' },
  { title: 'Bloke Kalma Süresi', dataIndex: 'duration', key: 'duration' },
  {
    title: '',
    key: 'detail',
    render: () => <Button type="primary" style={{ backgroundColor: 'black', borderColor: 'black' }}>Detay</Button>
  }
];

const BlockedMaterialsPage = () => {
  return (
    <Row justify="center" style={{ backgroundColor: '#E8F5E9', minHeight: '100vh', padding: '60px 16px' }}>
      <Col xs={24} sm={22} md={20} lg={16}>
        <Title level={2} style={{ color: '#2e7d32', marginBottom: '24px' }}>Bloke Ürünler</Title>
        <Table dataSource={data} columns={columns} pagination={false} bordered />
      </Col>
    </Row>
  );
};

export default BlockedMaterialsPage;
