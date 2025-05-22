import React, { useEffect, useState } from "react";
import { Typography, Button, Table, Row, Col, Popconfirm, message } from "antd";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs"; // tarih biçimlendirme için

const { Title } = Typography;

const MaterialHistoryPage = () => {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);

  // Backend'den veri çek
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch(
          "http://localhost:5249/api/Musteri/gecmisim",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Veriler alınamadı");
        }

        const data = await response.json();

        // API'den gelen verileri tabloya uygun şekilde dönüştür
const formattedData = data.map((item) => ({
  key: item.id.toString(), // ✅ artık gerçek ID kullanılıyor
  type: capitalizeFirst(item.turu),
  amount: `${item.miktarKg} kg`,
  date: dayjs(item.tarih).format("DD.MM.YYYY"),
  chip: `+${item.kazandigiCip} çip`,
  status: item.durum || "",
}));


        setTableData(formattedData);
      } catch (err) {
        console.error("Veri hatası:", err);
        message.error("❌ Malzeme geçmişi yüklenemedi.");
      }
    };

    fetchData();
  }, []);


  const handleCancel = async (key) => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:5249/api/Musteri/malzeme/iptal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(parseInt(key)),
    });

    if (!response.ok) {
      const text = await response.text();
      let errorMessage = "İptal işlemi başarısız.";

      try {
        const err = JSON.parse(text); // JSON ise yakalar
        errorMessage = err.message || errorMessage;
      } catch {
        errorMessage = text; // düz metinse doğrudan göster
      }

      throw new Error(errorMessage);
    }

    message.success("✅ Malzeme başarıyla iptal edildi.");

    const updatedData = tableData.map((item) =>
      item.key === key ? { ...item, status: "iptal edildi" } : item
    );
    setTableData(updatedData);
  } catch (err) {
    console.error("İptal hatası:", err);
    message.error(err.message || "❌ Malzeme iptal edilemedi.");
  }
};


  const columns = [
    { title: "Malzeme Türü", dataIndex: "type", key: "type" },
    { title: "Miktar", dataIndex: "amount", key: "amount" },
    { title: "Tarih", dataIndex: "date", key: "date" },
    { title: "Çip", dataIndex: "chip", key: "chip" },
    {
      title: "Durum",
      dataIndex: "status",
      key: "status",
      render: (text, record) => {
        const lower = text.trim().toLowerCase();
        const isDisabled =
          lower === "satıldı" ||
          lower === "bloke konuldu" ||
          lower === "iptal edildi";

        return isDisabled ? (
          <strong>{text}</strong>
        ) : (
          <Popconfirm
            title="Bu malzemeyi iptal etmek istediğinizden emin misiniz?"
            onConfirm={() => handleCancel(record.key)}
            okText="Evet"
            cancelText="Hayır"
          >
            <Button danger>İptal Et</Button>
          </Popconfirm>
        );
      },
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#E8F5E9",
        minHeight: "100vh",
        padding: "60px 24px",
      }}
    >
      <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
        <Col>
          <Title level={2} style={{ color: "#2e7d32" }}>
            Malzeme Geçmişi
          </Title>
        </Col>
        <Col>
          <Button onClick={() => navigate("/material-add")} type="default">
            Geri Dönüşüm Malzemesi Ekle
          </Button>
        </Col>
      </Row>

      <Table
        columns={columns}
        dataSource={tableData}
        pagination={false}
        bordered
        style={{ backgroundColor: "white" }}
      />
    </div>
  );
};

// Küçük harfle gelen türü baş harfi büyük yap
const capitalizeFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default MaterialHistoryPage;
