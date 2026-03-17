import { motion } from 'framer-motion';
import { Camera, TrendingUp, Users, BookOpen, Star, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <motion.div 
      className="dashboard-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem' }}
    >
      <div style={{ gridColumn: 'span 12', marginBottom: '1rem' }}>
        <h2>Welcome back, Alex! 👋</h2>
        <p style={{ color: 'var(--color-text-muted)' }}>You've learned 14 new signs this week. Keep up the great progress.</p>
      </div>

      {/* Card 1: Quick Start Detection */}
      <motion.div className="glass-card" variants={itemVariants} style={{ gridColumn: 'span 8', padding: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'linear-gradient(135deg, var(--color-primary), #362922)', color: '#FFF' }}>
        <div>
          <h3 style={{ color: '#FFF', fontSize: '1.75rem', marginBottom: '0.5rem' }}>Live Detection Ready</h3>
          <p style={{ opacity: 0.8, marginBottom: '1.5rem', maxWidth: '400px' }}>Start your camera to translate real-world sign language or practice your own gestures with AI feedback.</p>
          <Link to="/detection" className="btn" style={{ background: '#FFF', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <Camera size={20} /> Start Camera Detection
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="animate-float" style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', animationDuration: '5s' }}>
            <Camera size={48} color="var(--color-secondary)" />
          </div>
        </div>
      </motion.div>

      {/* Card 2: Learning Progress */}
      <motion.div className="glass-card" variants={itemVariants} style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <TrendingUp color="var(--color-primary)" /> Learning Progress
        </h3>
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>
            <span>Weekly Goal</span>
            <span>4/5 Days</span>
          </div>
          <div className="progress-bar-container" style={{ marginTop: 0 }}>
            <div className="progress-bar"><div className="progress-fill" style={{ width: '80%' }}></div></div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ flex: 1, padding: '1rem', background: 'var(--color-bg)', borderRadius: '12px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)' }}>24</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Signs Learned</div>
          </div>
          <div style={{ flex: 1, padding: '1rem', background: 'var(--color-bg)', borderRadius: '12px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)' }}>2</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Certificates</div>
          </div>
        </div>
      </motion.div>

      {/* Card 3: Daily Learning Suggestions */}
      <motion.div className="glass-card" variants={itemVariants} style={{ gridColumn: 'span 8' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <BookOpen color="var(--color-primary)" /> Daily Learning Suggestions
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '1rem', padding: '1rem', border: '1px solid var(--glass-border)', borderRadius: '12px', alignItems: 'center', cursor: 'pointer' }}>
            <div style={{ width: '60px', height: '60px', background: 'rgba(79,62,52,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <PlayCircle color="var(--color-primary)" />
            </div>
            <div>
              <h4 style={{ margin: 0 }}>Common Greetings</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0 }}>12 mins • Intermediate</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', padding: '1rem', border: '1px solid var(--glass-border)', borderRadius: '12px', alignItems: 'center', cursor: 'pointer' }}>
            <div style={{ width: '60px', height: '60px', background: 'rgba(79,62,52,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Star color="var(--color-primary)" />
            </div>
            <div>
              <h4 style={{ margin: 0 }}>Emergency Phrases</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0 }}>8 mins • Essential</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Card 4: Community Activity */}
      <motion.div className="glass-card" variants={itemVariants} style={{ gridColumn: 'span 4' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Users color="var(--color-primary)" /> Community Activity
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: '1px solid var(--glass-border)' }}>
            <div>
              <h4 style={{ margin: 0, fontSize: '1rem' }}>ASL Beginners Room</h4>
              <p style={{ margin: 0, fontSize: '0.8rem', color: '#00D166' }}>● Live Now</p>
            </div>
            <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>12 Online</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h4 style={{ margin: 0, fontSize: '1rem' }}>Deaf Tech Innovators</h4>
              <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Discussion Forum</p>
            </div>
            <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>45 Posts</span>
          </div>
          <Link to="/community" className="btn btn-secondary w-100" style={{ marginTop: '0.5rem', fontSize: '0.9rem', padding: '0.5rem' }}>
            View All Rooms
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}