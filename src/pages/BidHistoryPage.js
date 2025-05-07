import React, { useState } from 'react';
import { Typography, Row, Col, List, Tag, Select, Card, Space } from 'antd';

const { Title, Text } = Typography;
const { Option } = Select;

const bidData = [
  {
    id: 1,
    material: 'Cam',
    amount: '10 kg',
    bidAmount: '120 Çip',
    date: '01.05.2024',
    status: 'Kazandı',
    buyerName: 'Ahmet Yılmaz',
    address: 'İstanbul, Kadıköy',
    phone: '0555 123 45 67'
  },
  {
    id: 2,
    material: 'Plastik',
    amount: '5 kg',
    bidAmount: '60 Çip',
    date: '27.04.2024',
    status: 'Kaybetti',
    buyerName: 'Zeynep Demir',
    address: 'Ankara, Çankaya',
    phone: '0532 456 78 90'
  },
  {
    id: 3,
    material: 'Kağıt',
    amount: '15 kg',
    bidAmount: '150 Çip',
    date: '05.05.2024',
    status: 'Devam Ediyor',
    buyerName: 'Murat Acar',
    address: 'İzmir, Bornova',
    phone: '0543 987 65 43'
  }
];

const statusColorMap = {
  'Kazandı': 'green',
  'Kaybetti': 'red',
  'Devam Ediyor': 'blue'
};

const BidHistoryPage = () => {
  const [filterStatus, setFilterStatus] = useState(null);

  const filteredData = filterStatus
    ? bidData.filter(item => item.status === filterStatus)
    : bidData;

  return (
    <Row
      justify="center"
      style={{ backgroundColor: '#E8F5E9', minHeight: '100vh', padding: '60px 16px' }}
    >
      <Col xs={24} sm={20} md={14} lg={12}>
        <Title level={2} style={{ color: '#1976d2', textAlign: 'center' }}>
          Teklif Geçmişi
        </Title>

        <Space style={{ marginBottom: 24 }}>
          <Text>Duruma göre filtrele:</Text>
          <Select
            allowClear
            style={{ width: 200 }}
            placeholder="Tüm Durumlar"
            onChange={(value) => setFilterStatus(value)}
          >
            <Option value="Kazandı">Kazandı</Option>
            <Option value="Kaybetti">Kaybetti</Option>
            <Option value="Devam Ediyor">Devam Ediyor</Option>
          </Select>
        </Space>

        <List
          dataSource={filteredData}
          bordered
          locale={{ emptyText: 'Kayıt bulunamadı' }}
          renderItem={item => (
            <List.Item style={{ padding: '16px' }}>
              <div style={{ width: '100%' }}>
                <Row justify="space-between" align="top">
                  <Col span={16}>
                    <Text strong>{item.material} - {item.amount}</Text>
                    <br />
                    <Text type="secondary" style={{ fontSize: '13px' }}>{item.date}</Text>
                    <div style={{ fontSize: '13px', marginTop: 8 }}>
                      <Text>Alıcı: <strong>{item.buyerName}</strong></Text><br />
                      <Text>Adres: <strong>{item.address}</strong></Text><br />
                      <Text>Telefon: <strong>{item.phone}</strong></Text>
                    </div>
                  </Col>
                  <Col style={{ textAlign: 'right' }}>
                    <Text strong style={{ display: 'block', marginBottom: 6 }}>
                      {item.bidAmount}
                    </Text>
                    <Tag color={statusColorMap[item.status]}>{item.status}</Tag>
                  </Col>
                </Row>
              </div>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};

export default BidHistoryPage;
