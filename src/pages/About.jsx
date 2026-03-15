import { motion } from 'framer-motion';
import { ArrowRight, Code, Heart, Sparkles, Brain, Cpu, Eye, Users, MonitorPlay, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Animated Counter Hook
function useCounter(end, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);
  return count;
}

export default function About() {
  const usersHelped = useCounter(24500);
  const signsRecognized = useCounter(1200000, 2500);
  const coursesCompleted = useCounter(8540);
  const communityMembers = useCounter(12500);

  return (
    <div className="about-page">
      
      {/* 1. Hero Section (Updated per request) */}
      <section className="section text-center" style={{ background: 'var(--color-primary)', color: '#FFF', padding: '8rem 2rem 6rem 2rem', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle Illustration background */}
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', opacity: 0.05, transform: 'scale(1.5)' }}><Brain size={400} /></div>
        <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', opacity: 0.05, transform: 'scale(1.5)' }}><Cpu size={400} /></div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: '#FFF', marginBottom: '1.5rem', lineHeight: 1.1 }}>Empowering Communication <br/> Through AI</h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.85, maxWidth: '800px', margin: '0 auto 2.5rem auto' }}>
            SignSetu uses advanced artificial intelligence to translate sign language in real-time, helping deaf and mute individuals communicate seamlessly with the world, breaking down barriers one gesture at a time.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link to="/learning" className="btn btn-secondary glow-effect" style={{ background: '#FFF', color: 'var(--color-primary)' }}>Start Learning</Link>
          </div>
        </motion.div>
      </section>

      {/* 2. Mission Section */}
      <section className="section container">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)', gap: '4rem', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once:true }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Mission</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
              We believe that communication is a fundamental human right. Our mission is to ensure that no one is left unheard or misunderstood due to communication barriers.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600 }}><CheckCircle color="var(--color-primary)"/> Accessibility for everyone</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600 }}><CheckCircle color="var(--color-primary)"/> AI-driven communication</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600 }}><CheckCircle color="var(--color-primary)"/> Inclusive technology</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600 }}><CheckCircle color="var(--color-primary)"/> Global learning community</li>
            </ul>
          </motion.div>
          
          <motion.div className="glass-card" style={{ padding: '4rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(200, 180, 160, 0.2), rgba(255,255,255,0.8))' }} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once:true }}>
             <Heart size={80} color="var(--color-primary)" style={{ margin: '0 auto 1.5rem auto' }} />
             <h3 style={{ fontSize: '1.75rem' }}>Building a world that speaks every language, including the unspoken ones.</h3>
          </motion.div>
        </div>
      </section>

      {/* 3. Vision Section */}
      <section className="section bg-alt text-center">
        <div className="container">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} style={{ marginBottom: '1.5rem' }}>The Vision</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:true }} style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '900px', margin: '0 auto' }}>
            To create a future where real-time sign language translation is as ubiquitous and integrated into daily life as spoken language translation. We envision a society where schools, workplaces, and public spaces are natively accessible to the deaf and hard-of-hearing community.
          </motion.p>
        </div>
      </section>

      {/* 4. Our Technology */}
      <section className="section container">
        <h2 className="text-center" style={{ marginBottom: '3rem' }}>Our Technology</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <TechCard icon={<Brain/>} title="Artificial Intelligence" desc="Advanced neural networks powering our entire inference engine." />
          <TechCard icon={<MonitorPlay/>} title="Machine Learning" desc="Continuously improving models parsing diverse gesture dialects." />
          <TechCard icon={<Eye/>} title="Computer Vision" desc="Real-time skeletal tracking directly from your device camera." />
          <TechCard icon={<Sparkles/>} title="Sign Language Recognition" desc="Over 98% accuracy in complex syntactic sign translation." />
        </div>
      </section>

      {/* 5. Impact Statistics */}
      <section className="section" style={{ background: 'var(--color-primary)', color: '#FFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <StatBlock number={usersHelped.toLocaleString()} label="Users Helped" />
            <StatBlock number={signsRecognized.toLocaleString()} label="Signs Recognized" />
            <StatBlock number={coursesCompleted.toLocaleString()} label="Courses Completed" />
            <StatBlock number={communityMembers.toLocaleString()} label="Community Members" />
          </div>
        </div>
      </section>

      {/* 6. Team Section */}
      <section className="section container text-center">
        <h2 style={{ marginBottom: '4rem' }}>Meet The Team</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
          <TeamCard img="https://i.pravatar.cc/300?img=68" name="Elena Rodriguez" role="Founder & CEO" desc="Deaf advocate and AI researcher passionate about accessible tech." />
          <TeamCard img="https://i.pravatar.cc/300?img=11" name="Marcus Chen" role="Head of Machine Learning" desc="Former Google CV engineer leading our gesture detection algorithms." />
          <TeamCard img="https://i.pravatar.cc/300?img=47" name="Sarah Jenkins" role="Community Director" desc="ASL interpreter driving our inclusive platform programs." />
        </div>
      </section>

      {/* 7. Call To Action */}
      <section className="cta-section section text-center" style={{ paddingBottom: '8rem' }}>
        <div className="container">
          <div className="glass-card cta-box" style={{ background: 'var(--color-bg)' }}>
            <h2 style={{ color: 'var(--color-primary)' }}>Start Your Journey Today</h2>
            <p style={{ marginBottom: '2rem', color: 'var(--color-text-muted)' }}>Join thousands breaking down barriers through our interactive platform.</p>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <Link to="/learning" className="btn btn-primary glow-effect">Start Learning</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

function TechCard({ icon, title, desc }) {
  return (
    <motion.div className="glass-card" whileHover={{ y: -10, boxShadow: 'var(--shadow-hover)' }} style={{ padding: '2.5rem 1.5rem', textAlign: 'center' }}>
      <div style={{ width: 60, height: 60, background: 'rgba(79,62,52,0.1)', color: 'var(--color-primary)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
        {icon}
      </div>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{title}</h3>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>{desc}</p>
    </motion.div>
  );
}

function StatBlock({ number, label }) {
  return (
    <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once:true }}>
      <div style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--color-accent)' }}>{number}</div>
      <div style={{ fontSize: '1.1rem', opacity: 0.9 }}>{label}</div>
    </motion.div>
  );
}

function TeamCard({ img, name, role, desc }) {
  return (
    <motion.div className="glass-card" whileHover={{ y: -10 }} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={img} alt={name} style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', border: '4px solid #FFF', boxShadow: 'var(--glass-shadow)', marginBottom: '1.5rem' }} />
      <h3 style={{ margin: '0 0 0.5rem 0' }}>{name}</h3>
      <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem' }}>{role}</div>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', margin: 0 }}>{desc}</p>
    </motion.div>
  );
}