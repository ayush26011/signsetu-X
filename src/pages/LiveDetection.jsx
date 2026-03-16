import { motion } from 'framer-motion';
import { Camera, SwitchCamera, StopCircle, RefreshCcw, Volume2, Copy, History } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function LiveDetection() {
  const [isDetecting, setIsDetecting] = useState(true);
  const [sentence, setSentence] = useState('Waiting for signs...');
  const [historyLog, setHistoryLog] = useState([]);
  const [lastWord, setLastWord] = useState('');

  useEffect(() => {
    if (!isDetecting) return;

    const interval = setInterval(() => {
      fetch('/sentence')
        .then((res) => res.json())
        .then((data) => {
          const text = data.sentence || '';
          setSentence(text || 'Waiting for signs...');

          const words = text.split(' ').filter(Boolean);
          const newWord = words[words.length - 1];

          if (newWord && newWord !== lastWord) {
            speakWord(newWord);
            setLastWord(newWord);

            setHistoryLog((prev) => [
              {
                text,
                time: 'Just now'
              },
              ...prev
            ].slice(0, 10));
          }
        })
        .catch((err) => {
          console.error('Sentence fetch error:', err);
        });
    }, 1000);

    return () => clearInterval(interval);
  }, [isDetecting, lastWord]);

  const speakWord = (word) => {
    const speech = new SpeechSynthesisUtterance(word);
    speech.lang = 'en-US';
    window.speechSynthesis.speak(speech);
  };

  const speakSentence = () => {
    const speech = new SpeechSynthesisUtterance(sentence);
    speech.lang = 'en-US';
    window.speechSynthesis.speak(speech);
  };

  const clearSentence = async () => {
    try {
      await fetch('/clear');
      setSentence('Waiting for signs...');
      setLastWord('');
      setHistoryLog([]);
    } catch (err) {
      console.error('Clear error:', err);
    }
  };

  return (
    <div className="detection-page" style={{ height: 'calc(100vh - 120px)', display: 'flex', gap: '1.5rem' }}>
      <motion.div
        className="glass-card"
        style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--glass-border)' }}>
          <h2 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Camera color="var(--color-primary)" /> AI Live Detection
          </h2>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button className="btn btn-secondary" style={{ padding: '0.5rem' }} disabled={!isDetecting}>
              <SwitchCamera size={18} />
            </button>
            <button
              className={`btn ${isDetecting ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setIsDetecting(!isDetecting)}
              style={{ background: isDetecting ? '#FF3B30' : '', borderColor: isDetecting ? '#FF3B30' : '' }}
            >
              {isDetecting ? <><StopCircle size={18} /> Stop</> : <><Camera size={18} /> Start</>}
            </button>
          </div>
        </div>

        <div style={{ flex: 1, background: '#1C1C1E', position: 'relative', overflow: 'hidden', margin: '1.5rem', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {isDetecting && <div className="ai-scanning-line"></div>}

          {isDetecting ? (
            <img
              src="/video"
              alt="Live detection"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '16px'
              }}
            />
          ) : (
            <div style={{ color: 'rgba(255,255,255,0.1)' }}>
              <Camera size={120} />
            </div>
          )}
        </div>

        <div style={{ padding: '0 1.5rem 1.5rem 1.5rem' }}>
          <div style={{ background: 'rgba(79, 62, 52, 0.05)', borderRadius: '12px', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-primary)' }}>
              {sentence}
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="icon-btn" onClick={speakSentence}><Volume2 size={20} /></button>
              <button className="icon-btn" onClick={() => navigator.clipboard.writeText(sentence)}><Copy size={20} /></button>
              <button className="icon-btn" onClick={clearSentence}><RefreshCcw size={20} /></button>
            </div>
          </div>
        </div>
      </motion.div>

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
          {historyLog.length > 0 ? historyLog.map((item, i) => (
            <div key={i} style={{ padding: '0.75rem 1rem', background: '#FFF', borderRadius: '8px', borderLeft: i === 0 ? '4px solid var(--color-secondary)' : '4px solid rgba(79,62,52,0.2)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{item.time}</div>
              <div style={{ fontWeight: 600 }}>{item.text}</div>
            </div>
          )) : (
            <div style={{ color: 'var(--color-text-muted)' }}>No detection history yet.</div>
          )}
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