import { motion } from 'framer-motion';
import { Eye, EyeOff, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/layout/Footer';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login loading and redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <>
      <div className="auth-page">
        <div className="auth-bg-shapes">
        <div className="shape-1"></div>
        <div className="shape-1" style={{ top: 'auto', bottom: '-100px', left: 'auto', right: '-100px', background: 'var(--color-primary)' }}></div>
      </div>

      <motion.div 
        className="glass-card auth-card"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="auth-logo">SignSetu AI</div>
        
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
            {isLogin ? 'Sign in to continue your learning and communication journey.' : 'Join thousands breaking down barriers through AI.'}
          </p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" className="auth-input" placeholder="John Doe" required />
            </div>
          )}
          
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" className="auth-input" placeholder="you@example.com" required />
          </div>
          
          <div className="input-group">
            <label>Password</label>
            <div style={{ position: 'relative' }}>
              <input 
                type={showPassword ? "text" : "password"} 
                className="auth-input" 
                placeholder="••••••••" 
                required 
                style={{ width: '100%' }}
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'none', color: 'var(--color-text-muted)' }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {isLogin && (
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}>
                <input type="checkbox" /> Remember Me
              </label>
              <a href="#" style={{ color: 'var(--color-primary)', fontWeight: '600' }}>Forgot Password?</a>
            </div>
          )}

          <button type="submit" className="btn btn-primary w-100 glow-effect" style={{ marginTop: '0.5rem' }}>
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div style={{ textAlign: 'center', margin: '1.5rem 0', color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>OR CONTINUE WITH</div>

        <div className="social-login">
          <button className="social-btn">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" width="20" alt="Google" />
          </button>
          <button className="social-btn">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" width="20" alt="Apple" />
          </button>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem' }}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button 
            type="button" 
            onClick={() => setIsLogin(!isLogin)}
            style={{ color: 'var(--color-primary)', fontWeight: '700', background: 'none' }}
          >
            {isLogin ? 'Sign Up' : 'Log In'}
          </button>
        </div>
      </motion.div>
    </div>
    <Footer />
  </>
  );
}