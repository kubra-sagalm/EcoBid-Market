import React, { useEffect, useState } from "react";
import { Typography, Row, Col, Button, Card, Space, message } from "antd";
import { PlusOutlined, GiftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const IndividualPanel = () => {
  const navigate = useNavigate();
  const [chipBalance, setChipBalance] = useState(0);

  // Çip bakiyesini backend'den çek
  useEffect(() => {
    const fetchCipBakiye = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch("http://localhost:5249/api/Admin/cipbakiye", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Çip bakiyesi alınamadı.");

        const data = await response.json();
        setChipBalance(data.cipBakiye || 0); // gelen veri: { cipBakiye: 2290 }
      } catch (err) {
        console.error("Çip bakiyesi hatası:", err);
        message.error("❌ Çip bakiyesi yüklenemedi.");
      }
    };

    fetchCipBakiye();
  }, []);

  return (
    <Row
      justify="center"
      style={{
        backgroundColor: "#E8F5E9",
        minHeight: "100vh",
        paddingTop: "60px",
        paddingBottom: "40px",
      }}
    >
      <Col xs={22} sm={18} md={14} lg={10}>
        <Title level={2} style={{ color: "#2e7d32", marginBottom: "30px" }}>
          Müşteri Paneli
        </Title>

        <Space
          size="large"
          wrap
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "24px",
          }}
        >
          {/* Geri Dönüşüm Malzemesi Ekle */}
          <Card
            style={{
              width: "300px",
              minHeight: "180px",
              textAlign: "center",
              padding: "16px",
            }}
          >
            <Text strong>
              <PlusOutlined /> Geri Dönüşüm Malzemesi Ekle
            </Text>
            <br />
            <Button
              type="primary"
              style={{ marginTop: "20px" }}
              onClick={() => navigate("/material-add")}
            >
              Ekle
            </Button>
          </Card>

          {/* Ödül Mağazası */}
          <Card
            style={{
              width: "300px",
              minHeight: "180px",
              textAlign: "center",
              padding: "16px",
            }}
          >
            <Text strong>
              <GiftOutlined /> Ödül Mağazası
            </Text>
            <br />
            <Button
              type="primary"
              style={{ marginTop: "20px" }}
              onClick={() => navigate("/reward-store")}
            >
              Görüntüle
            </Button>
          </Card>
        </Space>

        {/* Malzeme Geçmişi */}
        <Button
          block
          style={{
            minHeight: "55px",
            marginBottom: "16px",
            fontWeight: "bold",
          }}
          onClick={() => navigate("/material-history")}
        >
          Malzeme Geçmişi
        </Button>

        {/* Çip Bakiyesi */}
        <Card style={{ textAlign: "center" }}>
          <Text strong>
            <PlusOutlined /> Çip Bakiyesi Görüntüleme
          </Text>
          <Title level={3} style={{ marginTop: "10px", color: "#2e7d32" }}>
            {chipBalance} Çip
          </Title>
        </Card>
      </Col>
    </Row>
  );
};

export default IndividualPanel;
