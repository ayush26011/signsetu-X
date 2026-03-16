import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Camera, BookOpen, Users, User, Settings, Bell, Search, Sparkles, Network } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Chatbot from './Chatbot';

export default function DashboardLayout() {
  const location = useLocation();
  
  const sidebarLinks = [
    { icon: <LayoutDashboard size={20}/>, label: 'Dashboard', path: '/dashboard' },
    { icon: <Camera size={20}/>, label: 'Live Detection', path: '/detection' },
    { icon: <BookOpen size={20}/>, label: 'Learning', path: '/learning' },
    { icon: <Users size={20}/>, label: 'Community', path: '/community' },
    { icon: <Network size={20}/>, label: 'Friends', path: '/friends' },
    { icon: <User size={20}/>, label: 'My Profile', path: '/profile' },
    { icon: <Settings size={20}/>, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="dashboard-sidebar glass-card">
        <div className="sidebar-logo">
          <Sparkles color="var(--color-secondary)" />
          <span>SignSetu AI</span>
        </div>
        
        <nav className="sidebar-nav">
          {sidebarLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`sidebar-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      <div className="dashboard-main">
        {/* Topbar */}
        <header className="dashboard-topbar glass-card">
          <div className="search-bar">
            <Search size={18} color="var(--color-text-muted)" />
            <input type="text" placeholder="Search courses, users, rooms..." />
          </div>
          
          <div className="topbar-actions">
            <button className="icon-btn"><Bell size={20} /></button>
            <div className="user-avatar">
              <img src="https://i.pravatar.cc/150?img=11" alt="User" />
            </div>
            <button className="btn btn-primary">Quick Start</button>
          </div>
        </header>

        {/* Content Area */}
        <div className="dashboard-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{ height: '100%', width: '100%' }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      <Chatbot />
    </div>
  );
}
