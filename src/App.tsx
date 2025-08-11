import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import About from './pages/About';
import OurStory from './pages/OurStory';
import VisionMissionValues from './pages/VisionMissionValues';
import LeadershipTeam from './pages/LeadershipTeam';
import CSRInitiatives from './pages/CSRInitiatives';
import AchievementsAwards from './pages/AchievementsAwards';
import Manufacturing from './pages/Manufacturing';
import Certifications from './pages/Certifications';
import Industries from './pages/Industries';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Capabilities from './pages/Capabilities';
import InHouseCompounding from './pages/capabilities/InHouseCompounding';
import TechnicalExpertise from './pages/capabilities/TechnicalExpertise';
import TestingQualityAssurance from './pages/capabilities/TestingQualityAssurance';
import ProductCustomization from './pages/capabilities/ProductCustomization';
import LargeScaleProduction from './pages/capabilities/LargeScaleProduction';
import PrototypeDevelopment from './pages/capabilities/PrototypeDevelopment';
import SupplyChainLogistics from './pages/capabilities/SupplyChainLogistics';
import Compliance from './pages/Compliance';
import QualityManagementSystem from './pages/compliance/QualityManagementSystem';
import EnvironmentalStandards from './pages/compliance/EnvironmentalStandards';
import OccupationalHealthSafety from './pages/compliance/OccupationalHealthSafety';
import MaterialComplianceCertifications from './pages/compliance/MaterialComplianceCertifications';
import SafetyQualityStandards from './pages/compliance/SafetyQualityStandards';
import IndustryApprovals from './pages/compliance/IndustryApprovals';
import ManufacturingFacilities from './pages/ManufacturingFacilities';
import ProductionProcesses from './pages/ProductionProcesses';
import QualityControlTesting from './pages/QualityControlTesting';
import InHouseToolingMoulding from './pages/InHouseToolingMoulding';
import MaterialCompounding from './pages/MaterialCompounding';
import RDInnovation from './pages/RDInnovation';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <AnimatePresence mode="wait">
          <main>
            <Routes>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/our-story" element={<PageTransition><OurStory /></PageTransition>} />
              <Route path="/vision-mission-values" element={<PageTransition><VisionMissionValues /></PageTransition>} />
              <Route path="/leadership-team" element={<PageTransition><LeadershipTeam /></PageTransition>} />
              <Route path="/csr-initiatives" element={<PageTransition><CSRInitiatives /></PageTransition>} />
              <Route path="/achievements-awards" element={<PageTransition><AchievementsAwards /></PageTransition>} />
              <Route path="/manufacturing" element={<PageTransition><Manufacturing /></PageTransition>} />
              <Route path="/certifications" element={<PageTransition><Certifications /></PageTransition>} />
              <Route path="/industries" element={<PageTransition><Industries /></PageTransition>} />
              <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
              <Route path="/products/:productId" element={<PageTransition><ProductDetail /></PageTransition>} />
              <Route path="/capabilities" element={<PageTransition><Capabilities /></PageTransition>} />
              <Route path="/capabilities/in-house-compounding" element={<PageTransition><InHouseCompounding /></PageTransition>} />
              <Route path="/capabilities/technical-expertise" element={<PageTransition><TechnicalExpertise /></PageTransition>} />
              <Route path="/capabilities/testing-quality-assurance" element={<PageTransition><TestingQualityAssurance /></PageTransition>} />
              <Route path="/capabilities/product-customization" element={<PageTransition><ProductCustomization /></PageTransition>} />
              <Route path="/capabilities/large-scale-production" element={<PageTransition><LargeScaleProduction /></PageTransition>} />
              <Route path="/capabilities/prototype-development" element={<PageTransition><PrototypeDevelopment /></PageTransition>} />
              <Route path="/capabilities/supply-chain-logistics" element={<PageTransition><SupplyChainLogistics /></PageTransition>} />
              <Route path="/compliance" element={<PageTransition><Compliance /></PageTransition>} />
              <Route path="/compliance/quality-management-system" element={<PageTransition><QualityManagementSystem /></PageTransition>} />
              <Route path="/compliance/environmental-standards" element={<PageTransition><EnvironmentalStandards /></PageTransition>} />
              <Route path="/compliance/occupational-health-safety" element={<PageTransition><OccupationalHealthSafety /></PageTransition>} />
              <Route path="/compliance/material-compliance-certifications" element={<PageTransition><MaterialComplianceCertifications /></PageTransition>} />
              <Route path="/compliance/safety-quality-standards" element={<PageTransition><SafetyQualityStandards /></PageTransition>} />
              <Route path="/compliance/industry-approvals" element={<PageTransition><IndustryApprovals /></PageTransition>} />
              <Route path="/manufacturing-facilities" element={<PageTransition><ManufacturingFacilities /></PageTransition>} />
              <Route path="/production-processes" element={<PageTransition><ProductionProcesses /></PageTransition>} />
              <Route path="/quality-control-testing" element={<PageTransition><QualityControlTesting /></PageTransition>} />
              <Route path="/in-house-tooling-moulding" element={<PageTransition><InHouseToolingMoulding /></PageTransition>} />
              <Route path="/material-compounding" element={<PageTransition><MaterialCompounding /></PageTransition>} />
              <Route path="/rd-innovation" element={<PageTransition><RDInnovation /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              <Route path="/get-in-touch" element={<PageTransition><Contact /></PageTransition>} />
            </Routes>
          </main>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;