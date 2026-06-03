import { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import FY27Focus from './components/FY27Focus';
import TransformAutomation from './components/TransformAutomation';
import CWIPIntelligence from './components/CWIPIntelligence';
import CWIPAnalytics from './components/CWIPAnalytics';
import FASection from './components/FASection';

const sectionIds = [
  'hero', 'highlights', 'focus', 'transform',
  'cwip', 'analytics',
  'fa-hero', 'fa-highlights', 'fa-transform', 'fa-focus', 'fa-heatmap',
  'fa-trends', 'fa-risks', 'fa-roadmap', 'fa-takeaway',
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
          <TransformAutomation />
          <CWIPIntelligence />
          <CWIPAnalytics />

          {/* F&A Divider */}
          <div style={{ background: 'linear-gradient(90deg, var(--telkom-blue), var(--cyan), var(--telkom-blue))', height: 4 }} />
          <div style={{ background: 'var(--telkom-blue)', padding: '16px 48px', display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>
              FINANCE & ACCOUNTING
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(255,255,255,0.6)', letterSpacing: 2, textTransform: 'uppercase' }}>
              Executive Business Review · May/June 2026
            </div>
          </div>
          <FASection />

          <footer className="app-footer">
            <div className="footer-left">WNS Global Services (Part of Capgemini) · Telkom Shared Services · Project Accounting & AM EBR · June 2026</div>
            <div className="footer-right">CONFIDENTIAL</div>
          </footer>
        </main>
      </div>
    </div>
  );
}
