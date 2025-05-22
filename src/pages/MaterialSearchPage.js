import React, { useEffect, useState } from 'react';
import {
  Typography, Table, Row, Col, Input, Select,
  Button, Space, message
} from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;
const { Option } = Select;

const MaterialSearchPage = () => {
  const navigate = useNavigate();
  const [type, setType] = useState('');
  const [kg, setKg] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const token = localStorage.getItem('token');

        const response = await fetch("http://localhost:5249/api/Araci/bekleyen-malzeme-listesi", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!response.ok) throw new Error("Veri alınamadı");

        const result = await response.json();

        const formatted = result.map((item, index) => ({
          key: item.id,
          material: capitalize(item.turu),
          kg: item.miktarKg,
          musteriId: item.musteriId,
          adSoyad: item.musteriAdSoyad,
          adres: item.musteriAdres,
          telefon: item.musteriTelefon,
          tarih: new Date(item.tarih).toLocaleDateString('tr-TR'),
          chip: item.miktarKg * 10,
          tl: (item.miktarKg * 10 * 0.25).toFixed(2) + " ₺"
        }));

        setData(formatted);
      } catch (err) {
        console.error("Veri çekme hatası:", err);
        message.error("❌ Malzemeler yüklenemedi.");
      }
    };

    fetchMaterials();
  }, []);

  const handleBlock = async (malzemeId) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:5249/api/Araci/malzeme-bloke-et", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(malzemeId),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "İşlem başarısız.");
      }

      message.success("✅ Malzeme başarıyla bloke edildi.");

      setData(prev => prev.filter(item => item.key !== malzemeId));
    } catch (err) {
      console.error("Bloke etme hatası:", err);
      message.error("❌ " + err.message);
    }
  };

  const filtered = data.filter(
    (item) =>
      (type ? item.material === type : true) &&
      (kg ? item.kg === parseInt(kg) : true)
  );

  const columns = [
    { title: 'Malzeme Türü', dataIndex: 'material', key: 'material' },
    { title: 'Miktar (kg)', dataIndex: 'kg', key: 'kg' },
    { title: 'Çip Ücreti', dataIndex: 'chip', key: 'chip', render: v => `${v} çip` },
    { title: 'TL Karşılığı', dataIndex: 'tl', key: 'tl' },
    { title: 'Kullanıcı Adı', dataIndex: 'adSoyad', key: 'adSoyad' },
    { title: 'Kullanıcı ID', dataIndex: 'musteriId', key: 'musteriId' },
    { title: 'Telefon', dataIndex: 'telefon', key: 'telefon' },
    { title: 'Adres', dataIndex: 'adres', key: 'adres' },
    { title: 'Tarih', dataIndex: 'tarih', key: 'tarih' },
    {
      title: 'İşlem',
      key: 'action',
      render: (_, record) => (
        <Button
          type="primary"
          onClick={() => handleBlock(record.key)}
        >
          Bloke Et
        </Button>
      ),
    },
  ];

  return (
    <Row justify="center" style={{ backgroundColor: '#E8F5E9', minHeight: '100vh', padding: '60px 16px' }}>
      <Col xs={24} sm={22} md={20} lg={18}>
        <Title level={2} style={{ color: '#2e7d32', marginBottom: 24 }}>Malzeme Arama</Title>

        <Space size="middle" style={{ marginBottom: 24 }} wrap>
          <Select
            placeholder="Tür:"
            style={{ width: 180 }}
            value={type || undefined}
            onChange={(value) => setType(value)}
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
            onChange={(e) => setKg(e.target.value)}
            type="number"
          />
        </Space>

        <Table
          dataSource={filtered}
          columns={columns}
          bordered
          pagination={{ pageSize: 8 }}
        />
      </Col>
    </Row>
  );
};

const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default MaterialSearchPage;
