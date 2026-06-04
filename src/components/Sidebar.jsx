import {
  LayoutDashboard, Star, Target, Zap, Telescope,
  Globe, BarChart2, ChevronDown, ChevronRight,
  DollarSign, Shield, Sparkles
} from 'lucide-react';
import { useState } from 'react';

const faNav = [
  { id: 'fa-intro',     label: 'Introduction', icon: LayoutDashboard },
  { id: 'fa-hero',      label: 'Overview',     icon: LayoutDashboard },
  { id: 'fa-transform', label: 'FY27 Focus',   icon: Target },
  { id: 'fa-heatmap',   label: 'Auto Engine',  icon: Zap },
  { id: 'fa-trends',    label: 'AI Trends',    icon: Globe },
  { id: 'fa-roadmap',   label: 'Analytics',    icon: BarChart2 },
  { id: 'fa-risks',     label: 'Risk & Gov',   icon: Shield },
  { id: 'fa-takeaway',  label: 'Takeaway',     icon: Sparkles },
];

const cwipNav = [
  { id: 'hero',       label: 'Overview',       icon: LayoutDashboard },
  { id: 'highlights', label: 'FY26 Highlights', icon: Star },
  { id: 'focus',      label: 'FY27 Focus',      icon: Target },
  { id: 'transform',  label: 'Auto Engine',     icon: Zap },
  { id: 'cwip',       label: 'CWIP Pipeline',   icon: Telescope },
  { id: 'analytics',  label: 'Analytics',       icon: BarChart2 },
];

export default function Sidebar({ active }) {
  const [cwipOpen, setCwipOpen] = useState(false);
  const isCwipActive = cwipNav.some(n => n.id === active);
  const isFaActive   = faNav.some(n => n.id === active);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="sidebar">
      {/* F&A — always expanded at top */}
      <div className="nav-section-label" style={{ marginTop: 8 }}>Finance & Accounting</div>
      {faNav.map(({ id, label, icon: Icon }) => (
        <button key={id} className={`nav-item${active === id ? ' active' : ''}`} onClick={() => scrollTo(id)}>
          <Icon size={13} />{label}
        </button>
      ))}

      {/* CWIP — collapsible below */}
      <div style={{ borderTop: '1px solid var(--border)', margin: '10px 0 4px' }} />
      <button onClick={() => setCwipOpen(o => !o)} style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        width: '100%', padding: '8px 16px',
        background: isCwipActive ? 'var(--telkom-light)' : 'none',
        border: 'none', cursor: 'pointer',
        fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 2,
        color: isCwipActive ? 'var(--telkom-blue)' : 'var(--text-muted)',
        textTransform: 'uppercase',
      }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <DollarSign size={11} />Project Accounting & AM
        </span>
        {(cwipOpen || isCwipActive) ? <ChevronDown size={11} /> : <ChevronRight size={11} />}
      </button>
      {(cwipOpen || isCwipActive) && cwipNav.map(({ id, label, icon: Icon }) => (
        <button key={id} className={`nav-item${active === id ? ' active' : ''}`}
          onClick={() => scrollTo(id)} style={{ paddingLeft: 24 }}>
          <Icon size={12} />{label}
        </button>
      ))}
    </nav>
  );
}
