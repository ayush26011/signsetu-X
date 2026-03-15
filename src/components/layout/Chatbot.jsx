import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Image as ImageIcon, Mic, Minus } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: "Hello! I'm your SignSetu AI assistant. How can I help you today with your sign language journey?" }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    // Add User Message
    const userMsg = { id: Date.now(), sender: 'user', text: inputText };
    setMessages(prev => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    // Mock AI Response
    setTimeout(() => {
      setIsTyping(false);
      const botMsg = { id: Date.now() + 1, sender: 'bot', text: "That's a great question! I can help you practice that gesture. Opening the learning module now..." };
      setMessages(prev => [...prev, botMsg]);
    }, 1500);
  };

  const handleSuggestion = (text) => {
    setInputText(text);
  };

  const preventSubmit = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
           <motion.button
            className="chatbot-fab pulse glow-effect"
            onClick={() => setIsOpen(true)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={28} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-window glass-card"
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
          >
            {/* Header */}
            <div className="chatbot-header">
              <div className="header-info">
                <div className="bot-avatar" style={{ boxShadow: '0 0 10px rgba(79, 62, 52, 0.3)' }}>
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h4 style={{ fontWeight: 600 }}>SignSetu AI Assistant</h4>
                  <span className="status">Online</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button onClick={() => setIsOpen(false)} className="close-btn"><Minus size={20} /></button>
                <button onClick={() => setIsOpen(false)} className="close-btn"><X size={20} /></button>
              </div>
            </div>

            {/* Chat Map Container */}
            <div className="chatbot-messages hide-scrollbar">
              {messages.map((msg) => (
                <motion.div 
                  key={msg.id} 
                  className={`chat-bubble ${msg.sender === 'ai' || msg.sender === 'bot' ? 'bubble-ai' : 'bubble-user'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {msg.text}
                </motion.div>
              ))}

              {isTyping && (
                <motion.div className="chat-bubble bubble-ai" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="typing-indicator">
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {messages.length < 3 && !isTyping && (
              <motion.div className="chatbot-suggestions" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5 }}}>
                <button className="suggestion-chip" onClick={() => handleSuggestion("Learn basic sign language")}>Learn basic sign language</button>
                <button className="suggestion-chip" onClick={() => handleSuggestion("Start live detection")}>Start live detection</button>
                <button className="suggestion-chip" onClick={() => handleSuggestion("Open learning courses")}>Open learning courses</button>
                <button className="suggestion-chip" onClick={() => handleSuggestion("Join community rooms")}>Join community rooms</button>
              </motion.div>
            )}

            {/* Text Input Row */}
            <div className="chatbot-input">
              <div className="input-wrapper">
                <button className="icon-btn hover-lift"><ImageIcon size={18} /></button>
                <input 
                  type="text" 
                  placeholder="Type your message..." 
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={preventSubmit}
                />
                <button className="icon-btn hover-lift"><Mic size={18} /></button>
              </div>
              <button 
                className="send-btn" 
                onClick={handleSend}
                disabled={!inputText.trim()}
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
