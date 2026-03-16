import { motion } from 'framer-motion';
import { Sun, Moon, Monitor, Palette } from 'lucide-react';
import { useState } from 'react';

export default function Theme() {
  const [activeTheme, setActiveTheme] = useState('signsetu'); // Options: light, dark, system, signsetu
  const [accentColor, setAccentColor] = useState('brown');

  useEffect(() => {
     document.documentElement.setAttribute('data-theme', activeTheme);
     document.documentElement.setAttribute('data-accent', accentColor);
  }, [activeTheme, accentColor]);

  return (
    <div className="theme-page" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}><Palette /> Theme Customization</h2>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem' }}>Personalize how SignSetu AI looks on your device.</p>

        <h3 style={{ marginBottom: '1.5rem' }}>Appearance</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '4rem' }}>
          
          <ThemeCard 
            icon={<Sun size={32}/>} title="Light" 
            isActive={activeTheme === 'light'} onClick={() => setActiveTheme('light')} 
          />
          <ThemeCard 
            icon={<Moon size={32}/>} title="Dark" 
            isActive={activeTheme === 'dark'} onClick={() => setActiveTheme('dark')} 
          />
          <ThemeCard 
            icon={<Monitor size={32}/>} title="System" 
            isActive={activeTheme === 'system'} onClick={() => setActiveTheme('system')} 
          />
          <ThemeCard 
            icon={<div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(45deg, var(--color-primary), var(--color-secondary))' }}></div>} 
            title="SignSetu (Classic)" 
            isActive={activeTheme === 'signsetu'} onClick={() => setActiveTheme('signsetu')} 
          />
        </div>

        <h3 style={{ marginBottom: '1.5rem' }}>Accent Color</h3>
        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '4rem' }}>
          <ColorSwatch color="#4F3E34" label="Primary Brown" isActive={accentColor === 'brown'} onClick={() => setAccentColor('brown')} />
          <ColorSwatch color="#D4AF37" label="Soft Gold" isActive={accentColor === 'gold'} onClick={() => setAccentColor('gold')} />
          <ColorSwatch color="#D2B48C" label="Warm Beige" isActive={accentColor === 'beige'} onClick={() => setAccentColor('beige')} />
        </div>

        <h3 style={{ marginBottom: '1.5rem' }}>Accessibility & Contrast</h3>
        <div className="glass-card" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div>
              <h4 style={{ margin: '0 0 0.5rem 0' }}>High Contrast Mode</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Increases text contrast for better readability.</p>
            </div>
            <div className="toggle-switch" style={{ width: 50, height: 26, borderRadius: 50, background: 'rgba(0,0,0,0.1)', position: 'relative', cursor: 'pointer' }}>
              <div style={{ position: 'absolute', top: 3, left: 3, width: 20, height: 20, borderRadius: '50%', background: '#FFF', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}></div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h4 style={{ margin: '0 0 0.5rem 0' }}>Reduce Motion</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Disables animations and cinematic effects.</p>
            </div>
            <div className="toggle-switch" style={{ width: 50, height: 26, borderRadius: 50, background: 'var(--color-primary)', position: 'relative', cursor: 'pointer' }}>
              <div style={{ position: 'absolute', top: 3, right: 3, width: 20, height: 20, borderRadius: '50%', background: '#FFF', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}></div>
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
}

function ThemeCard({ icon, title, isActive, onClick }) {
  return (
    <div 
      className="glass-card" 
      onClick={onClick}
      style={{ 
        padding: '2rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', cursor: 'pointer',
        border: isActive ? '2px solid var(--color-primary)' : '1px solid var(--glass-border)',
        transform: isActive ? 'scale(1.05)' : 'scale(1)',
        boxShadow: isActive ? 'var(--shadow-hover)' : 'var(--glass-shadow)',
        transition: 'all 0.2s'
      }}
    >
      <div style={{ color: isActive ? 'var(--color-primary)' : 'var(--color-text-muted)' }}>{icon}</div>
      <div style={{ fontWeight: 600 }}>{title}</div>
    </div>
  );
}

function ColorSwatch({ color, label, isActive, onClick }) {
  return (
    <div onClick={onClick} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
      <div style={{ width: 50, height: 50, borderRadius: '50%', background: color, border: isActive ? '3px solid #FFF' : '3px solid transparent', outline: isActive ? `2px solid ${color}` : 'none', transition: 'all 0.2s' }}></div>
      <span style={{ fontSize: '0.85rem', fontWeight: isActive ? 600 : 400 }}>{label}</span>
    </div>
  );
}