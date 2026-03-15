import { motion } from 'framer-motion';
import { Camera, SwitchCamera, StopCircle, RefreshCcw, Volume2, Copy, History } from 'lucide-react';
import { useState } from 'react';

export default function LiveDetection() {
  const [isDetecting, setIsDetecting] = useState(true);

  return (
    <div className="detection-page" style={{ height: 'calc(100vh - 120px)', display: 'flex', gap: '1.5rem' }}>
      
      {/* Main Camera Area */}
      <motion.div 
        className="glass-card"
        style={{ flex: 1, display: 'flex', flexDirection: 'column', p: '1rem', overflow: 'hidden' }}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--glass-border)' }}>
          <h2 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Camera color="var(--color-primary)" /> AI Live Detection
          </h2>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button className="btn btn-secondary" style={{ padding: '0.5rem' }}><SwitchCamera size={18} /></button>
            <button 
              className={`btn ${isDetecting ? 'btn-primary' : 'btn-secondary'}`} 
              onClick={() => setIsDetecting(!isDetecting)}
              style={{ background: isDetecting ? '#FF3B30' : '', borderColor: isDetecting ? '#FF3B30' : '' }}
            >
              {isDetecting ? <><StopCircle size={18}/> Stop</> : <><Camera size={18}/> Start</>}
            </button>
          </div>
        </div>

        {/* Camera Viewport */}
        <div style={{ flex: 1, background: '#1C1C1E', position: 'relative', overflow: 'hidden', margin: '1.5rem', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {isDetecting && <div className="ai-scanning-line"></div>}
          
          <div style={{ color: 'rgba(255,255,255,0.1)' }}>
            <Camera size={120} />
          </div>

          {/* Simulated Detection Box */}
          {isDetecting && (
            <div style={{ position: 'absolute', top: '30%', left: '40%', width: '20%', height: '40%', border: '2px dashed #00FF88', borderRadius: '12px', boxShadow: '0 0 20px rgba(0, 255, 136, 0.2) inset' }}>
              <div style={{ position: 'absolute', top: '-30px', left: 0, background: '#00FF88', color: '#000', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                Hello (98%)
              </div>
            </div>
          )}
        </div>

        {/* Translation Output Bar */}
        <div style={{ padding: '0 1.5rem 1.5rem 1.5rem' }}>
          <div style={{ background: 'rgba(79, 62, 52, 0.05)', borderRadius: '12px', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-primary)' }}>
              "Hello, how are you?"
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="icon-btn"><Volume2 size={20} /></button>
              <button className="icon-btn"><Copy size={20} /></button>
              <button className="icon-btn"><RefreshCcw size={20} /></button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* History Side Panel */}
      <motion.div 
        className="glass-card"
        style={{ width: '320px', display: 'flex', flexDirection: 'column' }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--glass-border)' }}>
          <h3 style={{ margin: 0, fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <History size={20} /> History
          </h3>
        </div>
        <div style={{ padding: '1rem', overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ padding: '0.75rem 1rem', background: '#FFF', borderRadius: '8px', borderLeft: '4px solid var(--color-secondary)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Just now • 98% Conf.</div>
            <div style={{ fontWeight: 600 }}>Hello, how are you?</div>
          </div>
          <div style={{ padding: '0.75rem 1rem', background: '#FFF', borderRadius: '8px', borderLeft: '4px solid rgba(79,62,52,0.2)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>2 mins ago • 95% Conf.</div>
            <div style={{ fontWeight: 600 }}>Thank you</div>
          </div>
          <div style={{ padding: '0.75rem 1rem', background: '#FFF', borderRadius: '8px', borderLeft: '4px solid rgba(79,62,52,0.2)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>5 mins ago • 89% Conf.</div>
            <div style={{ fontWeight: 600 }}>My name is Alex</div>
          </div>
        </div>
      </motion.div>

      <style>{`
        .ai-scanning-line {
          position: absolute; top: 0; left: 0; width: 100%; height: 4px;
          background: linear-gradient(90deg, transparent, #00FF88, transparent);
          box-shadow: 0 0 10px #00FF88;
          animation: scanDown 3s linear infinite; z-index: 10; opacity: 0.8;
        }
        @keyframes scanDown {
          0% { top: 0; opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}