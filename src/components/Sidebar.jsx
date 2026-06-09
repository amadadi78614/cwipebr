import {
  LayoutDashboard, Star, Target, Zap, Telescope,
  Globe, BarChart2, ChevronDown, ChevronRight,
  DollarSign, Shield, Sparkles, Users
} from 'lucide-react';
import { useState } from 'react';

const hroNav = [
  { id:'hro-intro',     label:'Introduction',  icon:LayoutDashboard },
  { id:'hro-highlights',label:'FY26 Highlights',icon:Star },
  { id:'hro-focus',     label:'FY27 Focus',    icon:Target },
  { id:'hro-trends',    label:'AI Trends',     icon:Globe },
  { id:'hro-risks',     label:'Risks',         icon:Shield },
  { id:'hro-ai',        label:'AI Applications',icon:Zap },
  { id:'hro-platforms', label:'Platforms',     icon:BarChart2 },
  { id:'hro-takeaway',  label:'Takeaways',     icon:Sparkles },
];

const faNav = [
  { id:'fa-intro',      label:'Introduction',  icon:LayoutDashboard },
  { id:'fa-hero',       label:'Overview',      icon:LayoutDashboard },
  { id:'fa-transform',  label:'FY27 Focus',    icon:Target },
  { id:'fa-roadmap',    label:'Analytics',     icon:BarChart2 },
  { id:'fa-heatmap',    label:'Auto Engine',   icon:Zap },
  { id:'fa-trends',     label:'AI Trends',     icon:Globe },
  { id:'fa-risks',      label:'Risk & Gov',    icon:Shield },
  { id:'fa-takeaway',   label:'Takeaway',      icon:Sparkles },
];

const cwipNav = [
  { id:'hero',       label:'Overview',        icon:LayoutDashboard },
  { id:'highlights', label:'FY26 Highlights', icon:Star },
  { id:'focus',      label:'FY27 Focus',      icon:Target },
  { id:'transform',  label:'Auto Engine',     icon:Zap },
  { id:'cwip',       label:'CWIP Pipeline',   icon:Telescope },
  { id:'analytics',  label:'Analytics',       icon:BarChart2 },
];

function CollapsibleSection({ label, icon: Icon, items, active, color = 'var(--telkom-blue)' }) {
  const isActive = items.some(n => n.id === active);
  const [open, setOpen] = useState(false);
  const scrollTo = id => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior:'smooth', block:'start' }); };

  return (
    <>
      <button onClick={() => setOpen(o => !o)} style={{
        display:'flex', alignItems:'center', justifyContent:'space-between',
        width:'100%', padding:'8px 16px',
        background: isActive ? 'var(--telkom-light)' : 'none',
        border:'none', cursor:'pointer',
        fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:2,
        color: isActive ? color : 'var(--text-muted)', textTransform:'uppercase',
      }}>
        <span style={{ display:'flex', alignItems:'center', gap:6 }}>
          <Icon size={11} />{label}
        </span>
        {(open || isActive) ? <ChevronDown size={11} /> : <ChevronRight size={11} />}
      </button>
      {(open || isActive) && items.map(({ id, label: lbl, icon: IIcon }) => (
        <button key={id} className={`nav-item${active === id ? ' active' : ''}`}
          onClick={() => scrollTo(id)} style={{ paddingLeft:24 }}>
          <IIcon size={12} />{lbl}
        </button>
      ))}
    </>
  );
}

export default function Sidebar({ active }) {
  const scrollTo = id => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior:'smooth', block:'start' }); };

  return (
    <nav className="sidebar">
      {/* HRO — always visible */}
      <div className="nav-section-label" style={{ marginTop:8 }}>HRO</div>
      {hroNav.map(({ id, label, icon: Icon }) => (
        <button key={id} className={`nav-item${active === id ? ' active' : ''}`} onClick={() => scrollTo(id)}>
          <Icon size={13} />{label}
        </button>
      ))}

      <div style={{ borderTop:'1px solid var(--border)', margin:'10px 0 4px' }} />
      <CollapsibleSection label="Finance & Accounting" icon={DollarSign} items={faNav} active={active} />

      <div style={{ borderTop:'1px solid var(--border)', margin:'4px 0' }} />
      <CollapsibleSection label="Project Accounting & AM" icon={Users} items={cwipNav} active={active} />
    </nav>
  );
}
