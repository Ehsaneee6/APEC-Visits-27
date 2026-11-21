import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '@/components/ui/Button';
import './Navbar.css';

const links = [
  { to: '/nexus', label: 'Timeline' },
  { to: '/choose', label: 'Choose' },
  { to: '/multiverse', label: 'Multiverse' },
  { to: '/results', label: 'Results' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="nav">
      <div className="container nav__row">
        <Link to="/" className="nav__logo" onClick={close}>
          <span className="nav__mark">APEC</span>
          <span className="nav__tag">In charge of change</span>
        </Link>
        <button type="button" className="nav__toggle" aria-expanded={open} aria-controls="nav-menu" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="nav-menu" className={`nav__menu ${open ? 'is-open' : ''}`} aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={close} className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}>{l.label}</NavLink>
          ))}
          <Button to="/apply" onClick={close}>Enter the Nexus</Button>
        </nav>
      </div>
    </header>
  );
}
