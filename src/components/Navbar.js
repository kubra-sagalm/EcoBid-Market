import React from 'react';
import { Menu } from 'antd';

const Navbar = () => {
  return (
    <Menu
    mode="horizontal"
    style={{
      borderBottom: 'none',
      justifyContent: 'flex-end',
      padding: '20px',
      backgroundColor: '#E8F5E9'
    }}>
      <Menu.Item key="login">Giriş</Menu.Item>
      <Menu.Item key="about">Hakkımızda</Menu.Item>
      <Menu.Item key="contact">İletişim</Menu.Item>
    </Menu>
  );
};

export default Navbar;
