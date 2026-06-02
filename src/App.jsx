import { useState, useEffect } from 'react';
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
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
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

        {/* Footer */}
        <footer style={{
          padding: '32px 48px',
          borderTop: '1px solid rgba(0,170,255,0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', letterSpacing: 1 }}>
            WNS Global Services · Telkom Shared Services · AM & Project Accounting EBR · June 2026
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(0,170,255,0.3)', letterSpacing: 1 }}>
            CAPEX INTELLIGENCE COMMAND CENTRE · CONFIDENTIAL
          </div>
        </footer>
      </main>
    </div>
  );
}
