import {
  LayoutDashboard, Star, Target, Zap, Telescope,
  Globe, Map, BarChart2,
  ChevronDown, ChevronRight, DollarSign, Shield, Sparkles
} from 'lucide-react';
import { useState } from 'react';

const cwipNav = [
  { id: 'hero',       label: 'Overview',        icon: LayoutDashboard },
  { id: 'highlights', label: 'FY26 Highlights',  icon: Star },
  { id: 'focus',      label: 'FY27 Focus',       icon: Target },
  { id: 'transform',  label: 'Auto Engine',      icon: Zap },
  { id: 'cwip',       label: 'CWIP Pipeline',    icon: Telescope },
  { id: 'analytics',  label: 'Analytics',        icon: BarChart2 },
];

const faNav = [
  { id: 'fa-hero',       label: 'Command Centre',  icon: LayoutDashboard },
  { id: 'fa-highlights', label: 'FY26 Snapshot',   icon: Star },
  { id: 'fa-transform',  label: 'FY26 Transform',  icon: Zap },
  { id: 'fa-focus',      label: 'FY27 Priorities', icon: Target },
  { id: 'fa-heatmap',    label: 'AI Heatmap',      icon: BarChart2 },
  { id: 'fa-trends',     label: 'AI Trends',       icon: Globe },
  { id: 'fa-risks',      label: 'Risk & Gov',      icon: Shield },
  { id: 'fa-roadmap',    label: 'Roadmap',         icon: Map },
  { id: 'fa-takeaway',   label: 'Takeaway',        icon: Sparkles },
];

export default function Sidebar({ active }) {
  const [faOpen, setFaOpen] = useState(false);
  const isFaActive = faNav.some(n => n.id === active);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="sidebar">
      <div className="nav-section-label" style={{ marginTop: 8 }}>Project Accounting & AM</div>
      {cwipNav.map(({ id, label, icon: Icon }) => (
        <button key={id} className={`nav-item${active === id ? ' active' : ''}`} onClick={() => scrollTo(id)}>
          <Icon size={13} />{label}
        </button>
      ))}

      <div style={{ borderTop: '1px solid var(--border)', margin: '10px 0 4px' }} />
      <button onClick={() => setFaOpen(o => !o)} style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        width: '100%', padding: '8px 16px',
        background: isFaActive ? 'var(--telkom-light)' : 'none',
        border: 'none', cursor: 'pointer',
        fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 2,
        color: isFaActive ? 'var(--telkom-blue)' : 'var(--text-muted)',
        textTransform: 'uppercase',
      }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <DollarSign size={11} />Finance & Accounting
        </span>
        {(faOpen || isFaActive) ? <ChevronDown size={11} /> : <ChevronRight size={11} />}
      </button>
      {(faOpen || isFaActive) && faNav.map(({ id, label, icon: Icon }) => (
        <button key={id} className={`nav-item${active === id ? ' active' : ''}`}
          onClick={() => scrollTo(id)} style={{ paddingLeft: 24 }}>
          <Icon size={12} />{label}
        </button>
      ))}
    </nav>
  );
}
