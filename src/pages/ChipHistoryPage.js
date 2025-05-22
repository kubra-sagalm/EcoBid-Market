import React, { useEffect, useState } from 'react';
import { Typography, Card, List, Row, Col, message } from 'antd';

const { Title, Text } = Typography;

const ChipHistoryPage = () => {
  const [chipBalance, setChipBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch("http://localhost:5249/api/Araci/satin-alim-gecmisim", {
          headers: { Authorization: `Bearer ${token}` }
        });

        if (!response.ok) throw new Error("Veri alınamadı");

        const data = await response.json();

        // Backend'den chip bakiyesi gelmiyorsa manuel toplam
        const total = data.reduce((acc, curr) => acc + curr.verilenCip, 0);
        setChipBalance(total);

        const formatted = data.map(item => ({
          Tarih: item.tarih,
          CipMiktar: item.verilenCip,
          Malzeme: item.malzemeTuru,
          Miktar: `${item.miktarKg} kg`,
          tip: "kazanım", // hepsi kazanım
          Firma: "Siz" // dilersen müşterinin adı yazılabilir
        }));

        setTransactions(formatted);
      } catch (err) {
        console.error(err);
        message.error("Çip geçmişi yüklenemedi.");
      }
    };

    fetchData();
  }, []);

  return (
    <Row justify="center" style={{ backgroundColor: "#E8F5E9", minHeight: "100vh", padding: "60px 16px" }}>
      <Col xs={24} sm={20} md={14} lg={10}>
        <Title level={2} style={{ color: "#2e7d32", textAlign: "center" }}>
          Çip Bakiyesi ve Geçmişi
        </Title>

        <Card style={{ margin: '24px 0', textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }}>
          {chipBalance} Çip
        </Card>

        <Title level={4}>Geçmiş Satın Alımlar</Title>

        <List
          bordered
          dataSource={transactions}
          renderItem={item => (
            <List.Item style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
              <div>
                <Text strong>{`${item.Malzeme} Kazanımı`}</Text>
                <br />
                <Text type="secondary" style={{ fontSize: 13 }}>{item.Tarih}</Text>
                <div style={{ fontSize: 13, marginTop: 4 }}>
                  <Text>
                    Firma: <strong>{item.Firma}</strong> / Miktar: <strong>{item.Miktar}</strong>
                  </Text>
                </div>
              </div>
              <div>
                <Text style={{ color: "#2e7d32", fontWeight: "bold" }}>
                  +{item.CipMiktar} Çip
                </Text>
              </div>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};

export default ChipHistoryPage;
