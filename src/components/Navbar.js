import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 24px',
    backgroundColor: '#ffffff',
    alignItems: 'center'
  };

  const rightMenuStyle = {
    display: 'flex',
    gap: '16px'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#2e7d32',
    fontWeight: 'bold'
  };

  return (
    <nav style={navbarStyle}>
      <div>
        {/* Sol kısım (logo vs.) istersen buraya ekleyebilirsin */}
      </div>
      <div style={rightMenuStyle}>
        <Link to="/login" style={linkStyle}>Giriş</Link>
        <Link to="/about" style={linkStyle}>Hakkımızda</Link>
        <Link to="/contact" style={linkStyle}>İletişim</Link>
      </div>
    </nav>
  );
};

export default Navbar;
