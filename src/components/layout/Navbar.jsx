import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Live Detection', path: '/detection' },
    { name: 'Learning', path: '/learning' },
    { name: 'Community', path: '/community' },
    { name: 'About Us', path: '/#about' },
    { name: 'Dashboard', path: '/dashboard' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <Sparkles color="var(--color-secondary)" />
          SignSetu AI
        </Link>

        {/* Desktop Nav */}
        <ul className="nav-links desktop-only">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.path.startsWith('/#') ? (
                <a 
                  href={link.path}
                  className={location.hash === link.path.replace('/', '') ? 'active' : ''}
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  to={link.path}
                  className={location.pathname === link.path ? 'active' : ''}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="nav-actions desktop-only">
          <Link to="/login" className="btn btn-secondary">Login</Link>
          <Link to="/login" className="btn btn-primary glow-effect">Get Started</Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <motion.div 
        className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: mobileMenuOpen ? 'auto' : 0, opacity: mobileMenuOpen ? 1 : 0 }}
      >
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.path.startsWith('/#') ? (
                <a 
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
          <li><Link to="/login" className="btn btn-secondary w-100 mt-3">Login</Link></li>
        </ul>
      </motion.div>
    </nav>
  );
}
