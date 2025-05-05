import React, { useState } from 'react';
import { Typography, Table, Row, Col, Input, Select, Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';


const { Title } = Typography;
const { Option } = Select;

const data = [
  { key: '1', material: 'Plastik', kg: 5, name: 'Ahmet Yılmaz', no: '1001', date: '20.04.2024' },
  { key: '2', material: 'Cam', kg: 3, name: 'Ayşe Demir Demir', no: '1002', date: '18.04.2024' },
  { key: '3', material: 'Kağıt', kg: 10, name: 'Mehmet Kara', no: '1003', date: '15.04.2024' },
  { key: '4', material: 'Plastik', kg: 2, name: 'Zeynep Çelik', no: '1004', date: '10.04.2024' },
];

const MaterialSearchPage = () => {
    const navigate = useNavigate();
  const [type, setType] = useState('');
  const [kg, setKg] = useState('');

  const filtered = data.filter(item =>
    (type ? item.material === type : true) &&
    (kg ? item.kg === parseInt(kg) : true)
  );

  const columns = [
    { title: 'Malzeme', dataIndex: 'material', key: 'material' },
    { title: 'Miktar (kg)', dataIndex: 'kg', key: 'kg' },
    { title: 'Müşteri Adı', dataIndex: 'name', key: 'name' },
    { title: 'Müşteri No', dataIndex: 'no', key: 'no' },
    { title: 'Tarih', dataIndex: 'date', key: 'date' },
    {
      title: 'Çip Ücreti',
      key: 'action',
      render: () => <Button onClick={() => navigate('/dealer/blocked-materials')}>
      Bloke Et
    </Button>
    },
  ];

  return (
    <Row justify="center" style={{ backgroundColor: '#E8F5E9', minHeight: '100vh', padding: '60px 16px' }}>
      <Col xs={24} sm={22} md={20} lg={16}>
        <Title level={2} style={{ color: '#2e7d32', marginBottom: 24 }}>Malzeme Arama</Title>

        <Space size="middle" style={{ marginBottom: 24 }} wrap>
          <Select
            placeholder="Tür:"
            style={{ width: 180 }}
            value={type || undefined}
            onChange={value => setType(value)}
            allowClear
          >
            <Option value="Plastik">Plastik</Option>
            <Option value="Cam">Cam</Option>
            <Option value="Kağıt">Kağıt</Option>
          </Select>

          <Input
            placeholder="Kg:"
            style={{ width: 120 }}
            value={kg}
            onChange={e => setKg(e.target.value)}
            type="number"
          />
        </Space>

        <Table
          dataSource={filtered}
          columns={columns}
          bordered
          pagination={false}
        />
      </Col>
    </Row>
  );
};

export default MaterialSearchPage;
