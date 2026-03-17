import { motion } from 'framer-motion';
import { Sparkles, Twitter, Instagram, Github, Linkedin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="global-footer" style={{ 
      background: 'rgba(var(--color-bg-rgb), 0.9)', 
      backdropFilter: 'blur(10px)', 
      borderTop: '1px solid var(--glass-border)', 
      padding: '4rem 0 2rem 0',
      marginTop: 'auto'
    }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
        
        {/* Brand */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Link to="/" className="logo" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
            <Sparkles color="var(--color-secondary)" />
            SignSetu AI
          </Link>
          <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', fontSize: '0.95rem' }}>
            Breaking communication barriers globally with state-of-the-art AI sign language detection and interactive learning.
          </p>
        </div>

        {/* Quick Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/learning" className="footer-link">Learning Hub</Link></li>
            <li><Link to="/community" className="footer-link">Community</Link></li>
            <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
          </ul>
        </div>

        {/* Legal & Social */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Connect With Us</h4>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
            <a href="#" className="social-icon-btn glow-effect-hover" aria-label="Twitter"><Twitter size={18} /></a>
            <a href="#" className="social-icon-btn glow-effect-hover" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" className="social-icon-btn glow-effect-hover" aria-label="GitHub"><Github size={18} /></a>
            <a href="#" className="social-icon-btn glow-effect-hover" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="container" style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
        <p style={{ margin: 0 }}>&copy; {currentYear} SignSetu AI. All rights reserved.</p>
        <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          Made with <Heart size={14} color="#E1306C" className="animate-pulse" /> for the community
        </p>
      </div>
    </footer>
  );
}
