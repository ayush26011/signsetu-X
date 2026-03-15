import { motion } from 'framer-motion';
import { Camera, BookOpen, Globe, Accessibility, ShieldCheck, Zap, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInRules = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
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
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      {desc && <p>{desc}</p>}
    </motion.div>
  );
}

function CourseCard({ title, level, duration, progress }) {
  return (
    <motion.div className="glass-card course-card-mini" whileHover={{ scale: 1.05 }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRules}>
      <div className="course-thumb"><Play size={24} color="#FFF"/></div>
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