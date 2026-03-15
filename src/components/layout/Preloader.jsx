import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate preloader completion
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="preloader-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Particles (Simplified CSS simulation, WebGL would require heavy libraries) */}
          <div className="particles-wrapper">
             {/* We rely on CSS animations here for particles */}
          </div>
          
          <motion.div 
            className="logo-formation"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <h1 className="text-gradient">SignSetu AI</h1>
            <p>Breaking Communication Barriers</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
