import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import MainLayout from './components/layout/MainLayout';
import DashboardLayout from './components/layout/DashboardLayout';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import LiveDetection from './pages/LiveDetection';
import Learning from './pages/Learning';
import Community from './pages/Community';
import Profile from './pages/Profile';
import Friends from './pages/Friends';
import Pricing from './pages/Pricing';
import Settings from './pages/Settings';
import ThemeCustomization from './pages/ThemeCustomization';
import Support from './pages/Support';
import About from './pages/About';
import ContactUs from './pages/ContactUs';

function App() {

  // Global Theme Hydration hook
  useEffect(() => {
    const applyTheme = () => {
      const activeTheme = localStorage.getItem('signsetu-theme') || 'default';
      const accentColor = localStorage.getItem('signsetu-accent') || '#DED1B6';
      
      const root = document.documentElement;
      
      // Map activeTheme ID back to its color schema constraints
      // Default: { primary: '#4F3E34', bg: '#F5F5DC' }
      // Dark: { primary: '#DED1B6', bg: '#1E1E1E' }
      // HC: { primary: '#000000', bg: '#F5F5DC' }
      
      if (activeTheme === 'dark') {
        root.style.setProperty('--color-primary', '#DED1B6');
        root.style.setProperty('--color-bg', '#1E1E1E');
        root.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.05)');
        root.style.setProperty('--color-text-main', '#EAEAEA');
      } else if (activeTheme === 'hc') {
        root.style.setProperty('--color-primary', '#000000');
        root.style.setProperty('--color-bg', '#F5F5DC');
        root.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.4)');
        root.style.setProperty('--color-text-main', '#000000');
      } else {
        // Reset to Default Phase 1 state
        root.style.setProperty('--color-primary', '#4F3E34');
        root.style.setProperty('--color-bg', '#F5F5DC');
        root.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.2)');
        root.style.setProperty('--color-text-main', '#2C2A29');
      }

      root.style.setProperty('--color-accent', accentColor);
    };

    // Apply on Mount
    applyTheme();

    // Re-apply if ThemeCustomization page triggers custom event
    window.addEventListener('themeChanged', applyTheme);

    // --- NEW: Global 3D Card Tilt Effect ---
    // Only apply if user respects motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const handleMouseMove = (e) => {
      if (prefersReducedMotion) return;
      const cards = document.querySelectorAll('.glass-card:not(.no-tilt)');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Calculate rotation based on cursor position relative to center of card
        // Max tilt angle: 5 degrees
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        // Only apply if mouse is inside the card
        if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        } else {
          // Reset smoothly when leaving
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        }
      });
    };

    // --- NEW: Glowing Cursor Trail ---
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-glow-dot';
    document.body.appendChild(cursorDot);

    let outlineX = 0; let outlineY = 0;
    let targetX = 0; let targetY = 0;
    
    // Smooth animation loop for cursor
    let animationFrameId;
    const renderCursor = () => {
      if (prefersReducedMotion) return;
      // Interpolation for smooth delay effect
      outlineX += (targetX - outlineX) * 0.15;
      outlineY += (targetY - outlineY) * 0.15;
      
      cursorDot.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0)`;
      animationFrameId = requestAnimationFrame(renderCursor);
    };

    const handleGlobalMouseMove = (e) => {
      if (prefersReducedMotion) return;
      handleMouseMove(e);
      targetX = e.clientX;
      targetY = e.clientY;
    };

    if (!prefersReducedMotion) {
      window.addEventListener('mousemove', handleGlobalMouseMove);
      renderCursor();
    }

    return () => {
      window.removeEventListener('themeChanged', applyTheme);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (cursorDot.parentNode) cursorDot.parentNode.removeChild(cursorDot);
    };
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public Marketing Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
        </Route>

        {/* Auth Layout (No Navbar/Footer) */}
        <Route path="/login" element={<Login />} />

        {/* Authenticated Dashboard Layout */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/detection" element={<LiveDetection />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/community" element={<Community />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/settings/theme" element={<ThemeCustomization />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
