import React from 'react';
import { Button, Typography, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRecycle } from '@fortawesome/free-solid-svg-icons';



const { Title, Paragraph } = Typography;

const HomePage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <Row justify="center" align="middle" style={{ height: '80vh', textAlign: 'center' }}>
      <Col>
        <Title style={{ fontSize: '48px', fontWeight: 'bold' }}>
          Geri Dönüşümle<br />Ödüller Kazanın
        </Title>
        <Paragraph style={{ fontSize: '16px', marginTop: '20px' }}>
  Dönüştür, Kazan, Değerlendir! <br />
  Çevreyi korurken çip kazan, ödüllere ulaş!
</Paragraph>


        <Row justify="center" gutter={[16, 16]} style={{ marginTop: '40px' }}>
          <Col>
            <Button
              type="primary"
              size="large"
              style={{ width: '150px' }}
              onClick={handleLoginClick}
            >
              Giriş Yap
            </Button>
          </Col>
          <Col>
          <Button size="large" style={{ width: '150px' }} onClick={() => navigate('/register')}>
      Kayıt Ol
    </Button>
          </Col>
        </Row>

        <Row justify="center" style={{ marginTop: '40px' }}>
  <FontAwesomeIcon icon={faRecycle} style={{ fontSize: '80px', color: '#4CAF50' }} />
</Row>



      </Col>
    </Row>
  );
};

export default HomePage;
