import { motion } from 'framer-motion';
import { Camera, BookOpen, Globe, Accessibility, ShieldCheck, Zap, ArrowRight, Play, Github, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const fadeInRules = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

export default function Home() {
  useEffect(() => {
    // Handle smooth scrolling for hash links on load or map
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="home-page">
      {/* 2. Hero Section */}
      <section className="hero-section">
        <div className="container center-hero">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeInRules}
            className="text-gradient"
          >
            Breaking Communication Barriers with AI
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeInRules}
            className="hero-subtitle"
          >
            SignSetu uses advanced artificial intelligence to translate sign language in real time, helping deaf and mute individuals communicate, learn, and connect with the world.
          </motion.p>
          <motion.div className="hero-actions" initial="hidden" animate="visible" variants={fadeInRules}>
            <Link to="/detection" className="btn btn-primary glow-effect">
              Start Live Detection
            </Link>
            <Link to="/learning" className="btn btn-glass">
              Explore Learning <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 3. Core Features */}
      <section className="features-section section">
        <div className="container">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeInRules}>
            Core Features
          </motion.h2>
          <div className="features-grid">
            <FeatureCard icon={<Camera />} title="AI Live Detection" desc="Real-time sign language detection using camera and AI." />
            <FeatureCard icon={<BookOpen />} title="Interactive Learning" desc="Learn sign language through guided lessons and AI feedback." />
            <FeatureCard icon={<Globe />} title="Global Community" desc="Connect with users through rooms, chats, and video interactions." />
            <FeatureCard icon={<Accessibility />} title="Accessibility Tools" desc="Tools specially designed for deaf and mute users." />
          </div>
        </div>
      </section>

      {/* NEW: About SignSetu */}
      <section id="about" className="about-section section bg-alt">
        <div className="container">
          <motion.div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }} initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeInRules}>
            <h2>About SignSetu</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
              SignSetu is an AI-powered platform helping deaf and mute individuals communicate using state-of-the-art sign language detection, 
              interactive learning modules, and real-time community interaction. Our mission is to break global communication barriers.
            </p>
          </motion.div>

          <motion.h3 style={{ textAlign: 'center', marginBottom: '3rem' }} initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeInRules}>
            Developers
          </motion.h3>
          
          <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            <DeveloperCard 
              name="Alex Developer" 
              role="AI Developer" 
              img="https://i.pravatar.cc/150?img=11"
            />
            <DeveloperCard 
              name="Sam Frontend" 
              role="Frontend Developer" 
              img="https://i.pravatar.cc/150?img=12"
            />
            <DeveloperCard 
              name="Jordan Backend" 
              role="Backend Developer" 
              img="https://i.pravatar.cc/150?img=13"
            />
            <DeveloperCard 
              name="Taylor Design" 
              role="UI/UX Designer" 
              img="https://i.pravatar.cc/150?img=14"
            />
          </div>
        </div>
      </section>

      {/* 4. Learning Preview (Netflix/Coursera style) */}
      <section className="learning-preview section bg-alt">
        <div className="container">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeInRules}>
            Start Learning
          </motion.h2>
          <div className="horizontal-scroll">
            <CourseCard title="Beginner Sign Language" level="Beginner" duration="2 Hrs" progress={0} />
            <CourseCard title="Daily Communication Signs" level="Intermediate" duration="4 Hrs" progress={20} />
            <CourseCard title="Emergency Signs" level="All Levels" duration="1 Hr" progress={100} />
            <CourseCard title="Advanced Sign Language" level="Advanced" duration="6 Hrs" progress={0} />
          </div>
        </div>
      </section>

      {/* 5. Community Preview */}
      <section className="community-preview section">
        <div className="container">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeInRules}>
            Community Activity
          </motion.h2>
          <div className="community-grid">
            <div className="glass-card feed-card">
              <h4>Trending Rooms</h4>
              <p>Sign Practice • 12 Online</p>
              <button className="btn btn-secondary">Join</button>
            </div>
            <div className="glass-card feed-card">
              <h4>Live Sign Discussions</h4>
              <p>Discussing new ASL updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. AI Technology Section */}
      <section className="ai-tech section bg-primary text-white">
        <div className="container">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeInRules} className="text-white">
            Powered by Next-Gen AI
          </motion.h2>
          <div className="features-grid">
            <FeatureCard dark icon={<Camera />} title="AI Detection" />
            <FeatureCard dark icon={<Zap />} title="Machine Learning" />
            <FeatureCard dark icon={<ShieldCheck />} title="Computer Vision" />
            <FeatureCard dark icon={<Accessibility />} title="Accessibility Innovation" />
          </div>
        </div>
      </section>

      {/* 10. Call To Action */}
      <section className="cta-section section text-center">
        <div className="container">
          <div className="glass-card cta-box">
            <h2>Start Communicating Without Barriers</h2>
            <div className="hero-actions">
              <Link to="/detection" className="btn btn-primary glow-effect">Try Live Detection</Link>
              <Link to="/community" className="btn btn-glass">Join the Community</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, desc, dark }) {
  return (
    <motion.div className={`glass-card feature-card ${dark ? 'dark-card' : ''}`} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInRules}>
      <div className="feature-icon animate-float">{icon}</div>
      <h3>{title}</h3>
      {desc && <p>{desc}</p>}
    </motion.div>
  );
}

function CourseCard({ title, level, duration, progress }) {
  return (
    <motion.div className="glass-card course-card-mini" whileHover={{ scale: 1.05 }} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInRules}>
      <div className="course-thumb"><Play size={24} color="#FFF" className="animate-float" style={{ animationDuration: '4s' }}/></div>
      <h4>{title}</h4>
      <div className="course-meta">
        <span>{level}</span> • <span>{duration}</span>
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar"><div className="progress-fill" style={{width: `${progress}%`}}></div></div>
      </div>
    </motion.div>
  );
}

function DeveloperCard({ name, role, img }) {
  return (
    <motion.div className="glass-card developer-card tilt-card flex-center" style={{ flexDirection: 'column', padding: '2rem 1.5rem', textAlign: 'center' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInRules}>
      <img src={img} alt={name} style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '1rem', border: '3px solid var(--color-primary)', objectFit: 'cover' }} />
      <h4 style={{ margin: '0 0 0.5rem 0' }}>{name}</h4>
      <p style={{ margin: '0 0 1.5rem 0', color: 'var(--color-primary)', fontSize: '0.9rem', fontWeight: 600 }}>{role}</p>
      
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <a href="#" className="social-icon-btn glow-effect-hover"><Instagram size={20} /></a>
        <a href="#" className="social-icon-btn glow-effect-hover"><Github size={20} /></a>
        <a href="#" className="social-icon-btn glow-effect-hover"><Linkedin size={20} /></a>
      </div>
    </motion.div>
  );
}