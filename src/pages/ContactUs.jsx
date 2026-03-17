import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Send, MapPin } from 'lucide-react';

export default function ContactUs() {
  const fadeInRules = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <div className="contact-page" style={{ padding: '2rem', height: '100%', overflowY: 'auto' }}>
      <motion.div initial="hidden" animate="visible" variants={fadeInRules}>
        <h2 style={{ marginBottom: '0.5rem' }}>Contact Us</h2>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '2.5rem' }}>
          We love hearing from our community. Get in touch with us!
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        {/* Contact Info Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <motion.div className="glass-card flex-center tilt-card" style={{ padding: '1.5rem', justifyContent: 'flex-start', gap: '1.5rem' }} initial="hidden" animate="visible" variants={fadeInRules} transition={{ delay: 0.1 }}>
            <div className="icon-wrapper" style={{ padding: '1rem', background: 'rgba(var(--color-primary-rgb), 0.1)', borderRadius: '50%' }}>
              <Phone size={28} color="var(--color-primary)" />
            </div>
            <div>
              <h3 style={{ margin: '0 0 0.25rem 0' }}>Customer Support</h3>
              <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>+1 (800) 123-4567</p>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Available 24/7 for you.</p>
            </div>
          </motion.div>

          <motion.div className="glass-card flex-center tilt-card" style={{ padding: '1.5rem', justifyContent: 'flex-start', gap: '1.5rem' }} initial="hidden" animate="visible" variants={fadeInRules} transition={{ delay: 0.2 }}>
            <div className="icon-wrapper" style={{ padding: '1rem', background: 'rgba(var(--color-primary-rgb), 0.1)', borderRadius: '50%' }}>
              <Mail size={28} color="var(--color-primary)" />
            </div>
            <div>
              <h3 style={{ margin: '0 0 0.25rem 0' }}>Official Email</h3>
              <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>support@signsetu.ai</p>
            </div>
          </motion.div>

          <motion.div className="glass-card flex-center tilt-card" style={{ padding: '1.5rem', justifyContent: 'flex-start', gap: '1.5rem' }} initial="hidden" animate="visible" variants={fadeInRules} transition={{ delay: 0.3 }}>
            <div className="icon-wrapper" style={{ padding: '1rem', background: 'rgba(var(--color-primary-rgb), 0.1)', borderRadius: '50%' }}>
              <Instagram size={28} color="#E1306C" />
            </div>
            <div>
              <h3 style={{ margin: '0 0 0.25rem 0' }}>Instagram</h3>
              <a href="#" style={{ color: 'var(--color-primary)' }}>@SignSetuOfficial</a>
            </div>
          </motion.div>

        </div>

        {/* Contact Form */}
        <motion.div className="glass-card tilt-card" style={{ padding: '2rem' }} initial="hidden" animate="visible" variants={fadeInRules} transition={{ delay: 0.4 }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Send us a message</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
            
            <div className="input-group">
              <label>Your Name</label>
              <input type="text" placeholder="John Doe" required style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.3)', fontSize: '1rem' }} />
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <input type="email" placeholder="you@example.com" required style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.3)', fontSize: '1rem' }} />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea rows="5" placeholder="How can we help you?" required style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.3)', fontSize: '1rem', resize: 'vertical' }}></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100 glow-effect" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
              Send Message <Send size={18} />
            </button>

          </form>
        </motion.div>

      </div>
    </div>
  );
}
