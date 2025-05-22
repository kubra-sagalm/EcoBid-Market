import React, { useEffect, useState } from 'react';
import { Typography, Table, Input, Row, Col, message } from 'antd';

const { Title } = Typography;
const { Search } = Input;

const AuctionListPage = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchAuctionData = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch("http://localhost:5249/api/Araci/acik-artirmalarim", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!response.ok) throw new Error("Veri alınamadı");

        const result = await response.json();

        const formatted = result.map((item, index) => ({
          key: item.id || index.toString(),
          name: item.turu,
          amount: `${item.miktarKg} kg`,
          date: new Date(item.baslangicTarihi).toLocaleDateString("tr-TR"),
          status: item.durum?.toUpperCase() || "-"
        }));

        setData(formatted);
      } catch (err) {
        console.error("Açık artırma verisi hatası:", err);
        message.error("❌ Açık artırmalar yüklenemedi.");
      }
    };

    fetchAuctionData();
  }, []);

  const filteredData = data.filter((item) =>
    item.name?.toLowerCase().includes(searchText.toLowerCase())
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
      title: 'Açık Artırmaya Konulduğu Tarih',
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: 'Durum',
      dataIndex: 'status',
      key: 'status',
      render: (text) => <strong style={{ color: text === "İPTAL" ? "red" : "#2e7d32" }}>{text}</strong>
    }
  ];

  return (
    <Row justify="center" style={{ backgroundColor: '#E8F5E9', minHeight: '100vh', padding: '60px 16px' }}>
      <Col xs={24} sm={22} md={20} lg={16}>
        <Title level={2} style={{ color: '#2e7d32', marginBottom: '24px' }}>Açık Artırmaya Gönderilen Ürünler</Title>

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
