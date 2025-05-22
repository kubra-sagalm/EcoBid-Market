import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Typography,
  Row,
  Col,
  Radio,
  Divider,
} from "antd";

const { Title, Text } = Typography;

const RegisterPage = () => {
  const [form] = Form.useForm();
  const [successMessage, setSuccessMessage] = useState("");

  const onFinish = async (values) => {
    try {
      const response = await fetch("http://localhost:5249/api/Auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSuccessMessage("✅ Kayıt başarıyla tamamlandı!");
        form.resetFields();
      } else {
        const errorData = await response.json();
        setSuccessMessage("❌ Kayıt başarısız: " + (errorData.message || ""));
      }
    } catch (error) {
      console.error("Sunucu Hatası:", error);
      setSuccessMessage("❌ Sunucuya bağlanılamadı.");
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Col xs={22} sm={18} md={12} lg={8}>
        <Title level={2} style={{ textAlign: "center", marginBottom: 20 }}>
          Kayıt Ol
        </Title>

        {/* Başarı veya hata mesajı */}
        {successMessage && (
          <Text
            style={{
              display: "block",
              marginBottom: 20,
              textAlign: "center",
              color: successMessage.startsWith("✅") ? "green" : "red",
              fontWeight: "bold",
            }}
          >
            {successMessage}
          </Text>
        )}

        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item
            name="adSoyad"
            label="Ad Soyad"
            rules={[{ required: true, message: "Lütfen ad soyad girin." }]}
          >
            <Input size="large" placeholder="Ad Soyad" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Lütfen e-posta girin." }]}
          >
            <Input size="large" placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="sifre"
            label="Şifre"
            rules={[{ required: true, message: "Lütfen şifre girin." }]}
          >
            <Input.Password size="large" placeholder="Şifre" />
          </Form.Item>

          <Form.Item
            name="telefon"
            label="Telefon"
            rules={[{ required: true, message: "Lütfen telefon girin." }]}
          >
            <Input size="large" placeholder="Telefon" />
          </Form.Item>

          <Form.Item
            name="adres"
            label="Adres"
            rules={[{ required: true, message: "Lütfen adres girin." }]}
          >
            <Input size="large" placeholder="Adres" />
          </Form.Item>

          <Form.Item
            name="rol"
            label="Rol"
            rules={[{ required: true, message: "Lütfen rol seçin." }]}
          >
            <Radio.Group>
              <Radio value="musteri">Müşteri</Radio>
              <Radio value="araci">Aracı</Radio>
              <Radio value="firma">Firma</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item>
            <Button type="primary" size="large" htmlType="submit" block>
              Kayıt Ol
            </Button>
          </Form.Item>

          <Divider />

          <Row justify="center">
            <Text>Hesabınız var mı?</Text>
            <Button type="link">Giriş Yap</Button>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default RegisterPage;
