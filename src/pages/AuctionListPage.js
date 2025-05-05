import React, { useState } from 'react';
import { Typography, Table, Input, Row, Col } from 'antd';

const { Title } = Typography;
const { Search } = Input;

const initialData = [
  {
    key: '1',
    name: 'Hurda Plastik',
    amount: '5 kg',
    date: '15.04.2024',
    status: 'İPTAL'
  },
  {
    key: '2',
    name: 'Alüminyum Kutu',
    amount: '3 kg',
    date: '14.04.2024',
    status: 'İPTAL'
  },
  {
    key: '3',
    name: 'Kağıt Atık',
    amount: '10 kg',
    date: '10.04.2024',
    status: 'İPTAL'
  }
];

const AuctionListPage = () => {
  const [searchText, setSearchText] = useState('');

  const filteredData = initialData.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
    {
      title: 'Malzeme Adı',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Malzeme Miktarı',
      dataIndex: 'amount',
      key: 'amount'
    },
    {
      title: 'Açık Arttırmaya Konulduğu Tarih',
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: 'Durum',
      dataIndex: 'status',
      key: 'status',
      render: (text) => <strong style={{ color: 'red' }}>{text}</strong>
    }
  ];

  return (
    <Row justify="center" style={{ backgroundColor: '#E8F5E9', minHeight: '100vh', padding: '60px 16px' }}>
      <Col xs={24} sm={22} md={20} lg={16}>
        <Title level={2} style={{ color: '#2e7d32', marginBottom: '24px' }}>Açık Artırma Listesi</Title>

        <Search
          placeholder="Malzeme Ara"
          enterButton
          onChange={(e) => setSearchText(e.target.value)}
          style={{ marginBottom: 24 }}
        />

        <Table
          dataSource={filteredData}
          columns={columns}
          pagination={false}
          bordered
        />
      </Col>
    </Row>
  );
};

export default AuctionListPage;
