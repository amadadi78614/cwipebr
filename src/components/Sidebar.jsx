import {
  LayoutDashboard, Star, Target, Zap, GitBranch, Telescope,
  Globe, Map, BarChart2, Clock, Trophy, Users, Bot
} from 'lucide-react';

const navItems = [
  { id: 'hero',       label: 'Executive',       icon: LayoutDashboard },
  { id: 'highlights', label: 'Highlights',       icon: Star },
  { id: 'focus',      label: 'FY27 Focus',       icon: Target },
  { id: 'transform',  label: 'Transformation',   icon: Zap },
  { id: 'automation', label: 'Automation',       icon: GitBranch },
  { id: 'pipeline',   label: 'Future Pipeline',  icon: Telescope },
  { id: 'ai',         label: 'AI Landscape',     icon: Globe },
  { id: 'roadmap',    label: 'Roadmap',          icon: Map },
  { id: 'analytics',  label: 'Analytics',        icon: BarChart2 },
  { id: 'tenyears',   label: 'Ten Years',        icon: Clock },
  { id: 'value',      label: 'Value',            icon: Trophy },
  { id: 'human',      label: 'Human Model',      icon: Users },
  { id: 'agents',     label: 'Agents',           icon: Bot },
];

export default function Sidebar({ active }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="sidebar">
      <div className="nav-section-label" style={{ marginTop: 8 }}>Sections</div>
      {navItems.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          className={`nav-item${active === id ? ' active' : ''}`}
          onClick={() => scrollTo(id)}
        >
          <Icon size={13} />
          {label}
        </button>
      ))}
    </nav>
  );
}
