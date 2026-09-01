import { useState } from 'react';

const links = [
  { href: '#courses', label: 'Courses' },
  { href: '#admissions', label: 'Admissions' },
  { href: '#placements', label: 'Placements' },
  { href: '#faqs', label: 'FAQs' },
];

function Navbar() {
  const [active, setActive] = useState('Courses');

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand">
          EduQuery Help Desk
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.label ? 'is-active' : undefined}
              onClick={() => setActive(link.label)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <div className="navbar__search">
            <span className="material-symbols-outlined" aria-hidden="true">
              search
            </span>
            <input type="search" placeholder="Search knowledge base..." aria-label="Search knowledge base" />
          </div>
          <button type="button" className="btn btn-primary">
            Student Portal
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
