import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Navbar';
import Chatbot from './Chatbot';
import Preloader from './Preloader';
import Footer from './Footer';

export default function MainLayout() {
  const location = useLocation();
  
  return (
    <>
      <Preloader />
      <Navbar />
      <main className="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{ minHeight: 'calc(100vh - 80px)', width: '100%' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Chatbot />
      
      <Footer />
    </>
  );
}
