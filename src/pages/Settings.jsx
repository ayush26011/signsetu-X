import { motion } from 'framer-motion';
import { User, Shield, Bell, Lock, Palette, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Settings() {
  const navigate = useNavigate();

  return (
    <div className="settings-page" style={{ padding: '1rem', display: 'flex', gap: '2rem', height: 'calc(100vh - 120px)' }}>
      
      {/* Settings Sidebar */}
      <div className="glass-card" style={{ width: '250px', padding: '1rem' }}>
        <h3 style={{ margin: '0 0 1.5rem 0', paddingLeft: '0.5rem' }}>Settings</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <button className="btn btn-primary" style={{ justifyContent: 'flex-start', padding: '0.75rem 1rem' }}><User size={18}/> Profile Settings</button>
          <button className="btn btn-secondary" style={{ justifyContent: 'flex-start', padding: '0.75rem 1rem', background: 'transparent' }}><Shield size={18}/> Privacy</button>
          <button className="btn btn-secondary" style={{ justifyContent: 'flex-start', padding: '0.75rem 1rem', background: 'transparent' }}><Bell size={18}/> Notifications</button>
          <button className="btn btn-secondary" style={{ justifyContent: 'flex-start', padding: '0.75rem 1rem', background: 'transparent' }}><Lock size={18}/> Security</button>
        </div>
      </div>

      {/* Settings Form Content */}
      <motion.div className="glass-card" style={{ flex: 1, padding: '2rem', overflowY: 'auto' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 style={{ margin: '0 0 2rem 0' }}>Profile Settings</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '600px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <img src="https://i.pravatar.cc/150?img=11" alt="Avatar" style={{ width: 80, height: 80, borderRadius: '50%' }} />
            <div>
              <button className="btn btn-secondary" style={{ marginRight: '1rem' }}>Upload New</button>
              <button className="btn" style={{ color: '#FF3B30', background: 'none' }}>Remove</button>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontWeight: 600 }}>Full Name</label>
            <input type="text" defaultValue="Alex Johnson" style={{ padding: '0.75rem 1rem', border: '1px solid var(--glass-border)', borderRadius: '8px', background: 'rgba(255,255,255,0.5)', fontSize: '1rem' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontWeight: 600 }}>Email Address</label>
            <input type="email" defaultValue="alex.j@example.com" style={{ padding: '0.75rem 1rem', border: '1px solid var(--glass-border)', borderRadius: '8px', background: 'rgba(255,255,255,0.5)', fontSize: '1rem' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontWeight: 600 }}>Bio</label>
            <textarea rows="4" defaultValue="Sign language enthusiast from New York. Learning ASL since 2024." style={{ padding: '0.75rem 1rem', border: '1px solid var(--glass-border)', borderRadius: '8px', background: 'rgba(255,255,255,0.5)', fontSize: '1rem', resize: 'vertical' }}></textarea>
          </div>

          <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '2rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
            <button className="btn btn-secondary">Cancel</button>
            <button className="btn btn-primary glow-effect">Save Changes</button>
          </div>

        </div>

        {/* Phase 6 Theme Block Entry */}
        <div style={{ marginTop: '3rem', maxWidth: '600px' }}>
          <h2 style={{ margin: '0 0 1.5rem 0' }}>Preferences</h2>
          <div 
            className="glass-card" 
            style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', transition: 'transform 0.2s', border: '1px solid var(--glass-border)' }}
            onClick={() => navigate('/settings/theme')}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ padding: '0.75rem', background: 'rgba(79, 62, 52, 0.1)', borderRadius: '12px', color: 'var(--color-primary)' }}>
                <Palette size={24} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1.1rem' }}>Theme Customization</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Personalize the appearance of your SignSetu interface.</p>
              </div>
            </div>
            <button className="btn btn-primary glow-effect" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Customize Theme <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </motion.div>
    </div>
  );
}