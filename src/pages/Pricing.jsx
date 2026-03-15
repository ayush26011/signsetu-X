import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';

export default function Pricing() {
  return (
    <div className="pricing-page" style={{ padding: '2rem' }}>
      <div className="text-center" style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Choose the Perfect Plan</h2>
        <p className="subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>Unlock the full potential of AI-powered sign language detection and connect with thousands of learners globally.</p>
      </div>

      {/* Pricing Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', maxWidth: '1100px', margin: '0 auto 4rem auto' }}>
        
        {/* Basic */}
        <motion.div className="glass-card" style={{ padding: '3rem 2rem', display: 'flex', flexDirection: 'column' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h3 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem 0' }}>Basic</h3>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Essential tools to start signing.</p>
          <div style={{ fontSize: '3rem', fontWeight: 800, margin: '0 0 2rem 0' }}>$0 <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--color-text-muted)' }}>/mo</span></div>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={18} color="var(--color-primary)" /> Limited Live Detection</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={18} color="var(--color-primary)" /> Basic Beginner Lessons</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={18} color="var(--color-primary)" /> Community Access</li>
          </ul>
          <button className="btn btn-secondary w-100">Start Free</button>
        </motion.div>

        {/* Pro (Highlighted) */}
        <motion.div className="glass-card" style={{ padding: '3rem 2rem', display: 'flex', flexDirection: 'column', background: 'var(--color-primary)', color: '#FFF', position: 'relative', transform: 'scale(1.05)' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.1 }}}>
          <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: '#FFA114', color: '#000', padding: '4px 16px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 800 }}>RECOMMENDED</div>
          <h3 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem 0', color: '#FFF' }}>Pro</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>For serious learners and daily users.</p>
          <div style={{ fontSize: '3rem', fontWeight: 800, margin: '0 0 2rem 0' }}>$12 <span style={{ fontSize: '1rem', fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>/mo</span></div>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={18} color="#00FF88" /> Unlimited Live Detection</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={18} color="#00FF88" /> Full Course Access</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={18} color="#00FF88" /> AI Practice Feedback</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={18} color="#00FF88" /> Advanced Analytics</li>
          </ul>
          <button className="btn w-100 glow-effect" style={{ background: '#FFF', color: 'var(--color-primary)' }}>Upgrade to Pro</button>
        </motion.div>

        {/* Premium */}
        <motion.div className="glass-card" style={{ padding: '3rem 2rem', display: 'flex', flexDirection: 'column' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.2 }}}>
          <h3 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem 0' }}>Premium</h3>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Full institutional grade access.</p>
          <div style={{ fontSize: '3rem', fontWeight: 800, margin: '0 0 2rem 0' }}>$29 <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--color-text-muted)' }}>/mo</span></div>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={18} color="var(--color-primary)" /> All Pro Features</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={18} color="var(--color-primary)" /> Private Video Rooms</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={18} color="var(--color-primary)" /> Priority AI Processing</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={18} color="var(--color-primary)" /> Dedicated Support</li>
          </ul>
          <button className="btn btn-secondary w-100">Go Premium</button>
        </motion.div>

      </div>
    </div>
  );
}