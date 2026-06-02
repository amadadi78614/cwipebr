export default function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-logos">
        <img src="/logos.png" alt="WNS | Telkom" style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
      </div>
      <div className="topbar-title">Capex Intelligence Command Centre</div>
      <div className="topbar-badge">EBR · June 2026</div>
    </header>
  );
}
