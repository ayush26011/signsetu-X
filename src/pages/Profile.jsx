import { motion } from 'framer-motion';
import { Award, BookOpen, Clock, Heart, Edit3, Settings, Shield, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div className="profile-page" style={{ padding: '1rem', maxWidth: '1000px', margin: '0 auto' }}>
      
      {/* Top Banner & Header */}
      <motion.div className="glass-card" style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <img src="https://i.pravatar.cc/150?img=11" alt="Profile" style={{ width: 100, height: 100, borderRadius: '50%', border: '4px solid var(--color-primary)' }} />
          <div>
            <h2 style={{ margin: '0 0 0.5rem 0' }}>Alex Johnson</h2>
            <p style={{ margin: '0 0 1rem 0', color: 'var(--color-text-muted)' }}>Sign language enthusiast from New York. Learning ASL since 2024.</p>
            <div style={{ display: 'inline-block', background: 'var(--color-primary)', color: '#FFF', padding: '4px 12px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 600 }}>
              Level 4 Learner | Intermediate
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <button className="btn btn-secondary glow-effect" style={{ width: '100%' }}><Edit3 size={18}/> Edit Profile</button>
          <Link to="/community" className="btn btn-primary" style={{ width: '100%' }}><Video size={18}/> Quick Video Call</Link>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.2 }}}>
        <StatCard icon={<BookOpen size={24} color="var(--color-primary)" />} label="Courses Completed" value="12" />
        <StatCard icon={<Heart size={24} color="var(--color-primary)" />} label="Signs Learned" value="840" />
        <StatCard icon={<Clock size={24} color="var(--color-primary)" />} label="Hours Practiced" value="45" />
        <StatCard icon={<Award size={24} color="var(--color-primary)" />} label="Achievements" value="8" />
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        
        {/* Learning Progress */}
        <motion.div className="glass-card" style={{ padding: '2rem' }} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0, transition: { delay: 0.3 }}}>
          <h3 style={{ margin: '0 0 1.5rem 0' }}>Learning Progress</h3>
          <ProgressRow title="Beginner Sign Course" percent={100} completed />
          <ProgressRow title="Daily Conversations" percent={65} />
          <ProgressRow title="Emergency Signs" percent={10} />
          <ProgressRow title="Advanced Sentence Structures" percent={0} />
        </motion.div>

        {/* Badges / Achievements */}
        <motion.div className="glass-card" style={{ padding: '2rem' }} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0, transition: { delay: 0.4 }}}>
          <h3 style={{ margin: '0 0 1.5rem 0' }}>Recent Achievements</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <BadgeCard title="100 Signs" icon={<Award size={32} color="#FFA114"/>} />
            <BadgeCard title="First Room!" icon={<Users size={32} color="var(--color-primary)"/>} />
            <BadgeCard title="Daily Streak" icon={<Star size={32} color="#00FF88"/>} />
            <BadgeCard title="Top Learner" icon={<Shield size={32} color="var(--color-secondary)"/>} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }) {
  return (
    <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <div style={{ width: 50, height: 50, background: 'rgba(79,62,52,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>{value}</div>
        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>{label}</div>
      </div>
    </div>
  );
}

function ProgressRow({ title, percent, completed }) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>
        <span>{title}</span>
        <span style={{ color: completed ? '#00D166' : 'var(--color-text-muted)' }}>{completed ? 'Completed' : `${percent}%`}</span>
      </div>
      <div className="progress-bar-container" style={{ marginTop: 0 }}>
        <div className="progress-bar"><div className="progress-fill" style={{ width: `${percent}%`, background: completed ? '#00FF88' : '' }}></div></div>
      </div>
    </div>
  );
}

function BadgeCard({ title, icon }) {
  return (
    <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.4)', borderRadius: '12px', textAlign: 'center', border: '1px solid var(--glass-border)' }}>
      <div style={{ marginBottom: '0.5rem' }}>{icon}</div>
      <div style={{ fontSize: '0.8rem', fontWeight: 600 }}>{title}</div>
    </div>
  );
}

// Stub mock imports since they aren't directly available in this generic file
import { Users, Star } from 'lucide-react';