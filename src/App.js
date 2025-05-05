import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import 'antd/dist/reset.css';
import RegisterPage from './pages/RegisterPage';
import './styles/theme.css';
import SelectRolePage from './pages/SelectRolePage';
import IndividualPanel from './pages/IndividualPanel';
import MaterialAddPage from './pages/MaterialAddPage';
import RewardStorePage from './pages/RewardStorePage';
import MaterialHistoryPage from './pages/MaterialHistoryPage';
import DealerPanel from './pages/DealerPanel';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/select-role" element={<SelectRolePage />} /> {/* Yeni route */}
        <Route path="/individual" element={<IndividualPanel />} />
        <Route path="/material-add" element={<MaterialAddPage />} />
        <Route path="/reward-store" element={<RewardStorePage />} />
        <Route path="/material-history" element={<MaterialHistoryPage />} />
        <Route path="/dealer" element={<DealerPanel />} />

      </Routes>
    </Router>
  );
}

export default App;
