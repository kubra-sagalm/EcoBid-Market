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
import ChipHistoryPage from './pages/ChipHistoryPage';
import IncomingOffersPage from './pages/IncomingOffersPage';
import CompanyPanel from './pages/CompanyPanel';
import AuctionListPage from './pages/AuctionListPage';
import MaterialSearchPage from './pages/MaterialSearchPage';
import PurchaseDetailPage from './pages/PurchaseDetailPage';
import OfferDetailPage from './pages/OfferDetailPage';
import CompanyAuctionPage from './pages/CompanyAuctionPage';
import GiveOfferPage from './pages/GiveOfferPage';
import DealerCompanySalePage from './pages/DealerCompanySalePage';
import BlockedMaterialsPage from './pages/BlockedMaterialsPage';
import BidHistoryPage from './pages/BidHistoryPage';

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
        <Route path="/dealer/chip-history" element={<ChipHistoryPage />} />
        <Route path="/dealer/incoming-offers" element={<IncomingOffersPage />} />
        <Route path="/company" element={<CompanyPanel />} />
        <Route path="/dealer/search" element={<MaterialSearchPage />} />
        <Route path="/dealer/purchase-detail" element={<PurchaseDetailPage />} />
        <Route path="/dealer/offer-detail" element={<OfferDetailPage />} />
        <Route path="/dealer/auctions" element={<AuctionListPage />} />
        <Route path="/company-auctions" element={<CompanyAuctionPage />} />
        <Route path="/company/give-offer" element={<GiveOfferPage />} />
        <Route path="/dealer/company-sale" element={<DealerCompanySalePage />} />
        <Route path="/dealer/blocked-materials" element={<BlockedMaterialsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/bid-history" element={<BidHistoryPage />} />


      </Routes>
    </Router>
  );
}

export default App;
