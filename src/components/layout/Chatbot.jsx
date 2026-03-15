import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Image, Mic } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <motion.button
        className="chatbot-fab"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(123, 97, 255, 0.4)' }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={28} color="#fff" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-window glass-card"
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.9 }}
          >
            <div className="chatbot-header">
              <div className="header-info">
                <div className="bot-avatar">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <h4>SignSetu AI Assistant</h4>
                  <span className="status">Online</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="close-btn">
                <X size={20} />
              </button>
            </div>

            <div className="chatbot-messages">
              <div className="message bot-message">
                <p>Hello! I'm your AI assistant. How can I help you today with your sign language journey?</p>
              </div>
            </div>

            <div className="chatbot-suggestions">
              <button>Learn basic signs</button>
              <button>Start live detection</button>
            </div>

            <div className="chatbot-input">
              <div className="input-wrapper">
                <button className="icon-btn"><Image size={18} /></button>
                <input type="text" placeholder="Type a message..." />
                <button className="icon-btn"><Mic size={18} /></button>
              </div>
              <button className="send-btn"><Send size={18} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
