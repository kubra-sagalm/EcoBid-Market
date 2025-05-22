import React from "react";
import {
  Form,
  Input,
  Button,
  Typography,
  Row,
  Col,
  Divider,
  message,
} from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const LoginPage = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await fetch("http://localhost:5249/api/Auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          sifre: values.password, // Backend bu alanı bekliyor
        }),
      });

      const data = await response.json();

      console.log("🎯 Backend'den gelen veri:", data);

      if (response.ok) {
        message.success("✅ Giriş başarılı!");

        if (data.token) {
          localStorage.setItem("token", data.token);
        }

        // Gelen rolü yakala
        const role = (data.role || data.rol || "").toLowerCase();
        console.log("🎯 Gelen rol:", role);

        switch (role) {
          case "musteri":
            navigate("/individual");
            break;
          case "araci":
            navigate("/dealer");
            break;
          case "firma":
            navigate("/company");
            break;
          default:
            message.warning("⚠️ Rol bilgisi tanınmadı, ana sayfaya yönlendiriliyorsunuz.");
            navigate("/");
        }
      } else {
        message.error(data.message || "❌ Giriş başarısız.");
      }
    } catch (err) {
      console.error("Sunucu hatası:", err);
      message.error("❌ Sunucuya bağlanılamadı.");
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{ height: "90vh", backgroundColor: "#E8F5E9" }}
    >
      <Col xs={20} sm={12} md={8}>
        <Title
          level={2}
          style={{ textAlign: "center", marginBottom: 30, color: "#2e7d32" }}
        >
          Giriş Yap
        </Title>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Lütfen email girin." }]}
          >
            <Input size="large" placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Lütfen şifre girin." }]}
          >
            <Input.Password size="large" placeholder="Şifre" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" size="large" htmlType="submit" block>
              Giriş Yap
            </Button>
          </Form.Item>

          <Form.Item style={{ textAlign: "center" }}>
            <Text type="secondary">Şifrenizi mi unuttunuz?</Text>
          </Form.Item>

          <Divider />

          <Row justify="center" align="middle">
            <Text style={{ marginRight: 8 }}>Hesabınız yok mu?</Text>
            <Button type="default" onClick={() => navigate("/register")}>
              Kayıt Ol
            </Button>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default LoginPage;
