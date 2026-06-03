export default function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-logos">
        <img src="/wns-logo.png" alt="WNS Part of Capgemini" style={{ height: 32, width: 'auto', objectFit: 'contain' }} />
        <div className="topbar-divider" />
        <img src="/telkom-logo.png" alt="Telkom" style={{ height: 28, width: 'auto', objectFit: 'contain' }} />
      </div>
      <div className="topbar-title">Project Accounting & Asset Management</div>
      <div className="topbar-badge">EBR · June 2026</div>
    </header>
  );
}
