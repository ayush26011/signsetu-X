import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Theme from './pages/Theme';
import Support from './pages/Support';
import About from './pages/About';

function App() {
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
          <Route path="/theme" element={<Theme />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
