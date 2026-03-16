import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Palette, CheckCircle, Save, RotateCcw } from 'lucide-react';

export default function ThemeCustomization() {
  const [activeTheme, setActiveTheme] = useState(localStorage.getItem('signsetu-theme') || 'default');
  const [accentColor, setAccentColor] = useState(localStorage.getItem('signsetu-accent') || '#DED1B6');
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const THEMES = [
    { id: 'default', name: 'SignSetu Default', primary: '#4F3E34', bg: '#F5F5DC', accent: '#DED1B6' },
    { id: 'dark', name: 'Dark Mode', primary: '#DED1B6', bg: '#1E1E1E', accent: '#C6AC8F' },
    { id: 'hc', name: 'High Contrast', primary: '#000000', bg: '#F5F5DC', accent: '#FFD700' }
  ];

  const ACCENTS = [
    { id: 'soft-gold', name: 'Soft Gold', color: '#D4AF37' },
    { id: 'warm-beige', name: 'Warm Beige', color: '#D2B48C' },
    { id: 'earth-brown', name: 'Earth Brown', color: '#8B4513' },
    { id: 'light-sand', name: 'Light Sand', color: '#E8DCC4' },
    { id: 'default-accent', name: 'Default', color: '#DED1B6' }
  ];

  const getPreviewStyles = () => {
    const theme = THEMES.find(t => t.id === activeTheme);
    return {
      '--color-primary': theme.primary,
      '--color-bg': theme.bg,
      '--color-accent': accentColor,
      '--glass-bg': activeTheme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.2)',
      '--color-text-main': activeTheme === 'dark' ? '#EAEAEA' : '#2C2A29',
    };
  };

  const handleSave = () => {
    localStorage.setItem('signsetu-theme', activeTheme);
    localStorage.setItem('signsetu-accent', accentColor);
    setHasUnsavedChanges(false);
    
    // Dispatch custom event so App.jsx hears the change immediately without reload
    window.dispatchEvent(new Event('themeChanged'));
  };

  const handleReset = () => {
    setActiveTheme('default');
    setAccentColor('#DED1B6');
    setHasUnsavedChanges(true);
  };

  return (
    <div className="theme-customization-page" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem', height: 'calc(100vh - 80px)', overflowY: 'auto' }}>
      
      {/* Header */}
      <div className="glass-card" style={{ padding: '1.5rem 2rem', flexShrink: 0 }}>
        <h2 style={{ margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Palette color="var(--color-primary)" /> Theme Customization
        </h2>
        <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>Personalize the look and feel of your SignSetu experience. Changes applied here help with comfort and accessibility.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        {/* Left Column: Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Themes */}
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <h3 style={{ margin: '0 0 1.5rem 0' }}>Select Theme</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {THEMES.map(theme => (
                <motion.div 
                  key={theme.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => { setActiveTheme(theme.id); setHasUnsavedChanges(true); }}
                  style={{ 
                    padding: '1rem', borderRadius: '12px', border: `2px solid ${activeTheme === theme.id ? 'var(--color-primary)' : 'var(--glass-border)'}`, 
                    background: 'var(--glass-bg)', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    boxShadow: activeTheme === theme.id ? '0 4px 15px rgba(79, 62, 52, 0.15)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ display: 'flex', borderRadius: '50%', overflow: 'hidden', width: 32, height: 32, border: '1px solid rgba(0,0,0,0.1)' }}>
                      <div style={{ flex: 1, background: theme.bg }}></div>
                      <div style={{ flex: 1, background: theme.primary }}></div>
                    </div>
                    <span style={{ fontWeight: 600 }}>{theme.name}</span>
                  </div>
                  {activeTheme === theme.id && <CheckCircle size={20} color="var(--color-primary)" />}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Accent Colors */}
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <h3 style={{ margin: '0 0 1.5rem 0' }}>Accent Color</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {ACCENTS.map(accent => (
                <motion.div 
                  key={accent.id}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => { setAccentColor(accent.color); setHasUnsavedChanges(true); }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
                >
                  <div style={{ 
                    width: 48, height: 48, borderRadius: '50%', background: accent.color,
                    border: '3px solid #FFF', outline: accentColor === accent.color ? `2px solid var(--color-primary)` : '2px solid transparent',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}></div>
                  <span style={{ fontSize: '0.8rem', fontWeight: accentColor === accent.color ? 600 : 400 }}>{accent.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Live Preview & Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div className="glass-card" style={{ padding: '1.5rem', flex: 1 }}>
            <h3 style={{ margin: '0 0 1.5rem 0' }}>Live Preview</h3>
            
            {/* The actual preview window wrapped in a constrained CSS variable scope */}
            <div style={{ 
              ...getPreviewStyles(), 
              background: 'var(--color-bg)', 
              borderRadius: '16px', 
              padding: '2rem',
              border: '1px solid rgba(0,0,0,0.1)',
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.02)',
              minHeight: '300px',
              transition: 'all 0.3s ease'
            }}>
              
              <div style={{ background: 'var(--glass-bg)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontWeight: 700, color: 'var(--color-primary)' }}>SignSetu</div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <span style={{ color: 'var(--color-text-main)', fontSize: '0.9rem' }}>Dashboard</span>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.9rem' }}>Community</span>
                </div>
              </div>

              <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)' }}>
                <h4 style={{ color: 'var(--color-text-main)', margin: '0 0 0.5rem 0' }}>Sample Card Component</h4>
                <p style={{ color: 'var(--color-text-main)', opacity: 0.7, fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  This is how text and accents will appear across the SignSetu application.
                </p>
                <button style={{ background: 'var(--color-primary)', color: '#FFF', border: 'none', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}>
                  Primary Button
                </button>
                <div style={{ marginTop: '1rem', padding: '0.5rem', background: 'var(--color-accent)', borderRadius: '6px', color: 'var(--color-text-main)', fontSize: '0.85rem' }}>
                  Highlighted Accent Block
                </div>
              </div>

            </div>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
            <button className="btn btn-secondary" onClick={handleReset} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <RotateCcw size={16} /> Reset to Default
            </button>
            <button 
              className={`btn btn-primary ${hasUnsavedChanges ? 'glow-effect' : ''}`} 
              onClick={handleSave} 
              disabled={!hasUnsavedChanges}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: hasUnsavedChanges ? 1 : 0.5 }}
            >
              <Save size={16} /> Save Theme
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
