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
import FAIntro from './components/FAIntro';
import HROSection from './components/HROSection';

const sectionIds = [
  'hro-intro','hro-highlights','hro-focus','hro-trends','hro-risks','hro-ai','hro-platforms','hro-takeaway',
  'fa-intro','fa-hero','fa-transform','fa-roadmap','fa-heatmap','fa-trends','fa-risks','fa-takeaway',
  'hero','highlights','focus','transform','cwip','analytics',
];

const Divider = ({ label, sub }) => (
  <>
    <div style={{ background:'linear-gradient(90deg,var(--telkom-blue),var(--cyan),var(--telkom-blue))', height:4 }} />
    <div style={{ background:'var(--telkom-blue)', padding:'16px 48px', display:'flex', alignItems:'center', gap:16 }}>
      <div style={{ fontFamily:'var(--font-display)', fontSize:22, fontWeight:700, color:'#fff', letterSpacing:2 }}>{label}</div>
      <div style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'rgba(255,255,255,0.6)', letterSpacing:2, textTransform:'uppercase' }}>{sub}</div>
    </div>
  </>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('hro-intro');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }); },
      { rootMargin:'-20% 0px -70% 0px', threshold:0 }
    );
    sectionIds.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-wrapper">
      <TopBar />
      <div style={{ display:'flex' }}>
        <Sidebar active={activeSection} />
        <main className="main-content">

          {/* ── HRO ── */}
          <Divider label="HUMAN RESOURCES OUTSOURCING" sub="Executive Business Review · May 2026" />
          <HROSection />

          {/* ── F&A ── */}
          <Divider label="FINANCE & ACCOUNTING" sub="Executive Business Review · May/June 2026" />
          <FAIntro />
          <FASection />

          {/* ── PA&AM ── */}
          <Divider label="PROJECT ACCOUNTING & ASSET MANAGEMENT" sub="Executive Business Review · June 2026" />
          <Hero />
          <Highlights />
          <FY27Focus />
          <TransformAutomation />
          <CWIPIntelligence />
          <CWIPAnalytics />

          <footer className="app-footer">
            <div className="footer-left">WNS Global Services (Part of Capgemini) · Telkom Shared Services · EBR · June 2026</div>
            <div className="footer-right">CONFIDENTIAL</div>
          </footer>
        </main>
      </div>
    </div>
  );
}
