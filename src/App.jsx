import { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import FY27Focus from './components/FY27Focus';
import Transformation from './components/Transformation';
import AutomationPipeline from './components/AutomationPipeline';
import FuturePipeline from './components/FuturePipeline';
import AILandscape from './components/AILandscape';
import StrategicRoadmap from './components/StrategicRoadmap';
import CWIPAnalytics from './components/CWIPAnalytics';
import TenYears from './components/TenYears';
import DecadeValue from './components/DecadeValue';
import HumanModel from './components/HumanModel';
import AgentWorkforce from './components/AgentWorkforce';

const sectionIds = [
  'hero', 'highlights', 'focus', 'transform', 'automation',
  'pipeline', 'ai', 'roadmap', 'analytics', 'tenyears',
  'value', 'human', 'agents',
];

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-wrapper">
      <TopBar />
      <div style={{ display: 'flex' }}>
        <Sidebar active={activeSection} />
        <main className="main-content">
          <Hero />
          <Highlights />
          <FY27Focus />
          <Transformation />
          <AutomationPipeline />
          <FuturePipeline />
          <AILandscape />
          <StrategicRoadmap />
          <CWIPAnalytics />
          <TenYears />
          <DecadeValue />
          <HumanModel />
          <AgentWorkforce />

          <footer className="app-footer">
            <div className="footer-left">
              WNS Global Services (Part of Capgemini) · Telkom Shared Services · AM & Project Accounting EBR · June 2026
            </div>
            <div className="footer-right">CAPEX INTELLIGENCE COMMAND CENTRE · CONFIDENTIAL</div>
          </footer>
        </main>
      </div>
    </div>
  );
}
