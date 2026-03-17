import { motion, AnimatePresence } from 'framer-motion';
import { User, Shield, Bell, Lock, Palette, ChevronRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Settings() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');

  // Load toggles from localStorage or default to true
  const [toggles, setToggles] = useState(() => {
    const saved = localStorage.getItem('signsetu-settings-toggles');
    return saved ? JSON.parse(saved) : {
      profileVisibility: true,
      dataSharing: false,
      activityVisibility: true,
      emailNotif: true,
      appNotif: true,
      learningReminders: true,
      loginAlerts: true,
      twoFactorAuth: false
    };
  });

  useEffect(() => {
    localStorage.setItem('signsetu-settings-toggles', JSON.stringify(toggles));
  }, [toggles]);

  const handleToggle = (key) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const menuItems = [
    { id: 'profile', label: 'Profile Settings', icon: User },
    { id: 'privacy', label: 'Privacy', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Lock },
  ];

  return (
    <div className="settings-page" style={{ padding: '1rem', display: 'flex', gap: '2rem', height: 'calc(100vh - 120px)' }}>
      
      {/* Settings Sidebar */}
      <div className="glass-card" style={{ width: '250px', padding: '1rem', display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ margin: '0 0 1.5rem 0', paddingLeft: '0.5rem' }}>Settings</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {menuItems.map(item => (
            <button 
              key={item.id}
              className={`btn ${activeTab === item.id ? 'btn-primary' : 'btn-secondary'}`}
              style={{ justifyContent: 'flex-start', padding: '0.75rem 1rem', background: activeTab === item.id ? '' : 'transparent' }}
              onClick={() => setActiveTab(item.id)}
            >
              <item.icon size={18}/> {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Settings Form Content */}
      <div className="glass-card" style={{ flex: 1, padding: '2rem', overflowY: 'auto', position: 'relative' }}>
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            style={{ width: '100%', maxWidth: '600px' }}
          >
            {activeTab === 'profile' && (
              <>
                <h2 style={{ margin: '0 0 2rem 0' }}>Profile Settings</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <img src="https://i.pravatar.cc/150?img=11" alt="Avatar" style={{ width: 80, height: 80, borderRadius: '50%', border: '2px solid var(--color-primary)' }} />
                    <div>
                      <button className="btn btn-secondary" style={{ marginRight: '1rem' }}>Upload New</button>
                      <button className="btn" style={{ color: '#FF3B30', background: 'none' }}>Remove</button>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontWeight: 600 }}>Full Name</label>
                    <input type="text" defaultValue="Alex Johnson" style={{ padding: '0.75rem 1rem', border: '1px solid var(--glass-border)', borderRadius: '8px', background: 'rgba(255,255,255,0.3)', fontSize: '1rem' }} />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontWeight: 600 }}>Email Address</label>
                    <input type="email" defaultValue="alex.j@example.com" style={{ padding: '0.75rem 1rem', border: '1px solid var(--glass-border)', borderRadius: '8px', background: 'rgba(255,255,255,0.3)', fontSize: '1rem' }} />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontWeight: 600 }}>Bio</label>
                    <textarea rows="4" defaultValue="Sign language enthusiast from New York. Learning ASL since 2024." style={{ padding: '0.75rem 1rem', border: '1px solid var(--glass-border)', borderRadius: '8px', background: 'rgba(255,255,255,0.3)', fontSize: '1rem', resize: 'vertical' }}></textarea>
                  </div>

                  <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '2rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                    <button className="btn btn-secondary">Cancel</button>
                    <button className="btn btn-primary glow-effect">Save Changes</button>
                  </div>

                </div>

                {/* Phase 6 Theme Block Entry */}
                <div style={{ marginTop: '3rem' }}>
                  <h2 style={{ margin: '0 0 1.5rem 0' }}>Preferences</h2>
                  <div 
                    className="glass-card" 
                    style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', transition: 'transform 0.2s', border: '1px solid var(--glass-border)' }}
                    onClick={() => navigate('/settings/theme')}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ padding: '0.75rem', background: 'rgba(var(--color-primary-rgb), 0.1)', borderRadius: '12px', color: 'var(--color-primary)' }}>
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
              </>
            )}

            {activeTab === 'privacy' && (
              <>
                <h2 style={{ margin: '0 0 2rem 0' }}>Privacy Settings</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <ToggleOption title="Profile Visibility" desc="Allow others to see your public profile and learning history." val={toggles.profileVisibility} onToggle={() => handleToggle('profileVisibility')} />
                  <ToggleOption title="Data Sharing" desc="Share anonymous usage data to help AI detection models." val={toggles.dataSharing} onToggle={() => handleToggle('dataSharing')} />
                  <ToggleOption title="Activity Visibility" desc="Let friends see when you are online or in a learning session." val={toggles.activityVisibility} onToggle={() => handleToggle('activityVisibility')} />
                </div>
              </>
            )}

            {activeTab === 'notifications' && (
              <>
                <h2 style={{ margin: '0 0 2rem 0' }}>Notification Settings</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <ToggleOption title="Email Notifications" desc="Receive weekly digests and updates." val={toggles.emailNotif} onToggle={() => handleToggle('emailNotif')} />
                  <ToggleOption title="App Notifications" desc="Get push notifications for global community events." val={toggles.appNotif} onToggle={() => handleToggle('appNotif')} />
                  <ToggleOption title="Learning Reminders" desc="Send daily reminders to continue your sign language courses." val={toggles.learningReminders} onToggle={() => handleToggle('learningReminders')} />
                </div>
              </>
            )}

            {activeTab === 'security' && (
              <>
                <h2 style={{ margin: '0 0 2rem 0' }}>Security Settings</h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
                  <label style={{ fontWeight: 600 }}>Change Password</label>
                  <input type="password" placeholder="Current Password" style={{ padding: '0.75rem 1rem', border: '1px solid var(--glass-border)', borderRadius: '8px', background: 'rgba(255,255,255,0.3)', fontSize: '1rem', width: '100%' }} />
                  <input type="password" placeholder="New Password" style={{ padding: '0.75rem 1rem', border: '1px solid var(--glass-border)', borderRadius: '8px', background: 'rgba(255,255,255,0.3)', fontSize: '1rem', width: '100%', marginTop: '0.5rem' }} />
                  <button className="btn btn-secondary" style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}>Update Password</button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', borderTop: '1px solid var(--glass-border)', paddingTop: '2rem' }}>
                  <ToggleOption title="Two-Factor Authentication (2FA)" desc="Require an extra verification step during login." val={toggles.twoFactorAuth} onToggle={() => handleToggle('twoFactorAuth')} />
                  <ToggleOption title="Login Alerts" desc="Notify me when there is a login from a new device." val={toggles.loginAlerts} onToggle={() => handleToggle('loginAlerts')} />
                </div>
              </>
            )}

          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}

// Reusable Toggle UI
function ToggleOption({ title, desc, val, onToggle }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', border: '1px solid var(--glass-border)', borderRadius: '12px', background: 'rgba(var(--color-bg-rgb), 0.3)' }}>
      <div style={{ paddingRight: '1rem' }}>
        <h4 style={{ margin: '0 0 0.25rem 0' }}>{title}</h4>
        <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{desc}</p>
      </div>
      <button 
        onClick={onToggle}
        style={{
          width: '50px', height: '28px', borderRadius: '14px', border: 'none',
          background: val ? 'var(--color-primary)' : 'var(--glass-border)',
          position: 'relative', cursor: 'pointer', transition: 'background 0.3s'
        }}
        aria-label={`Toggle ${title}`}
      >
        <motion.div 
          layout
          style={{
            width: '22px', height: '22px', borderRadius: '50%', background: '#fff',
            position: 'absolute', top: '3px', left: val ? '25px' : '3px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
          }}
        />
      </button>
    </div>
  );
}