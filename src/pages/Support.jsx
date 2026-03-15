import { motion } from 'framer-motion';
import { HelpCircle, Mail, MessageSquare, Book, FileText } from 'lucide-react';

export default function Support() {
  return (
    <div className="support-page section" style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
      
      <div className="text-center" style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>How can we help?</h2>
        <div className="search-bar" style={{ maxWidth: '600px', margin: '0 auto', background: '#FFF', padding: '0.5rem 1rem' }}>
          <input type="text" placeholder="Search for answers (e.g., 'camera not working')" style={{ fontSize: '1.1rem', padding: '0.5rem' }} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '4rem' }}>
        <SupportCard icon={<Book size={32}/>} title="Getting Started" desc="Learn the basics of SignSetu AI." />
        <SupportCard icon={<Camera size={32}/>} title="Camera Issues" desc="Troubleshoot live detection." />
        <SupportCard icon={<FileText size={32}/>} title="Account & Billing" desc="Manage subscription and profile." />
      </div>

      <h3 style={{ marginBottom: '2rem' }}>Frequently Asked Questions</h3>
      <div className="glass-card" style={{ padding: '2rem', marginBottom: '4rem' }}>
        <FaqItem question="Does the AI need a very fast internet connection?" />
        <FaqItem question="Can I use SignSetu offline?" />
        <FaqItem question="What sign languages does the platform detect?" />
        <FaqItem question="How do I change my subscription plan?" />
      </div>

      <div className="glass-card text-center" style={{ padding: '4rem 2rem', background: 'var(--color-primary)', color: '#FFF' }}>
        <h2 style={{ color: '#FFF', marginBottom: '1rem' }}>Still need help?</h2>
        <p style={{ opacity: 0.8, marginBottom: '2rem' }}>Our support team is available 24/7 to assist you.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button className="btn" style={{ background: '#FFF', color: 'var(--color-primary)' }}><MessageSquare size={18}/> Contact Support</button>
          <button className="btn btn-secondary glow-effect" style={{ background: 'transparent', color: '#FFF', borderColor: '#FFF' }}><Mail size={18}/> Email Us</button>
        </div>
      </div>

    </div>
  );
}

function SupportCard({ icon, title, desc }) {
  return (
    <motion.div className="glass-card" whileHover={{ y: -5 }} style={{ padding: '2rem', textAlign: 'center' }}>
      <div style={{ width: 64, height: 64, background: 'rgba(79,62,52,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', margin: '0 auto 1.5rem auto' }}>
        {icon}
      </div>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{desc}</p>
    </motion.div>
  );
}

function FaqItem({ question }) {
  return (
    <div style={{ padding: '1rem 0', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
      <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 500 }}>{question}</h4>
      <div style={{ color: 'var(--color-primary)' }}>+</div>
    </div>
  );
}

// Stub missing icon
import { Camera } from 'lucide-react';