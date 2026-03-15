import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, CheckCircle, Award, Play, X, Settings2, SkipBack, SkipForward, Volume2, Maximize, Camera } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Learning() {
  const [activeTab, setActiveTab] = useState('courses');
  const [activeVideo, setActiveVideo] = useState(null);
  const [isPracticing, setIsPracticing] = useState(false);
  const [practiceStatus, setPracticeStatus] = useState('waiting'); // waiting, correct, retry

  // Simulate Practice AI Feedback
  useEffect(() => {
    if (!isPracticing) {
      setPracticeStatus('waiting');
      return;
    }
    const timer1 = setTimeout(() => setPracticeStatus('retry'), 2000);
    const timer2 = setTimeout(() => setPracticeStatus('correct'), 5000);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, [isPracticing]);

  return (
    <div className="learning-page" style={{ padding: '1rem' }}>
      
      {/* Top Banner */}
      <motion.div 
        className="glass-card" 
        style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', background: 'var(--color-primary)', color: '#FFF' }}
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <h2 style={{ color: '#FFF', margin: '0 0 0.5rem 0' }}>Your Learning Journey</h2>
          <p style={{ opacity: 0.8, margin: 0 }}>You are on a 5-day learning streak! 🔥</p>
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <div style={{ textAlign: 'center' }}><div style={{ fontSize: '2rem', fontWeight: 800 }}>12</div><div style={{ fontSize: '0.85rem', opacity: 0.8 }}>Courses Completed</div></div>
          <div style={{ textAlign: 'center' }}><div style={{ fontSize: '2rem', fontWeight: 800 }}>Lvl 4</div><div style={{ fontSize: '0.85rem', opacity: 0.8 }}>Intermediate Player</div></div>
        </div>
      </motion.div>

      <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem', marginBottom: '2rem' }}>
        <button className={`btn ${activeTab === 'courses' ? 'btn-primary' : ''}`} style={{ background: activeTab !== 'courses' ? 'transparent' : '', color: activeTab !== 'courses' ? 'var(--color-text-main)' : '' }} onClick={() => setActiveTab('courses')}>All Courses</button>
        <button className={`btn ${activeTab === 'practice' ? 'btn-primary' : ''}`} style={{ background: activeTab !== 'practice' ? 'transparent' : '', color: activeTab !== 'practice' ? 'var(--color-text-main)' : '' }} onClick={() => setActiveTab('practice')}>Practice Arena</button>
      </div>

      {activeTab === 'courses' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Beginner Signs</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            <CourseCard title="Alphabet Mastery" duration="1h 30m" progress={100} completed onClick={() => setActiveVideo('Alphabet Mastery')} />
            <CourseCard title="Numbers 1-100" duration="45m" progress={60} onClick={() => setActiveVideo('Numbers 1-100')} />
            <CourseCard title="Basic Colors" duration="30m" progress={0} onClick={() => setActiveVideo('Basic Colors')} />
          </div>

          <h3 style={{ marginBottom: '1.5rem' }}>Daily Conversations</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            <CourseCard title="Greetings & Farewells" duration="1h" progress={25} onClick={() => setActiveVideo('Greetings & Farewells')} />
            <CourseCard title="Ordering Food" duration="1h 15m" progress={0} onClick={() => setActiveVideo('Ordering Food')} />
            <CourseCard title="Asking for Directions" duration="50m" progress={0} onClick={() => setActiveVideo('Asking for Directions')} />
          </div>
        </motion.div>
      )}

      {activeTab === 'practice' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', gap: '2rem', height: '500px' }}>
          {/* Lesson Video Split View */}
          <div className="glass-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <div style={{ flex: 1, background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <PlayCircle size={64} color="rgba(255,255,255,0.8)" />
              <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', color: '#FFF', fontWeight: 600 }}>Instructor Demo: "Thank You"</div>
            </div>
          </div>
          
          {/* AI Practice Sandbox View */}
          <div className="glass-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: '1.5rem' }}>
            <h3>Your Turn</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>Replicate the gesture for "Thank You" to pass.</p>
            <div style={{ flex: 1, background: '#1c1c1e', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
               <img src="https://i.pravatar.cc/150?img=11" alt="User Camera Feedback" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5, borderRadius: '12px' }} />
               <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                 <CheckCircle size={48} color="#00FF88" />
                 <span style={{ color: '#00FF88', fontWeight: 'bold', marginTop: '0.5rem', background: 'rgba(0,0,0,0.5)', padding: '4px 12px', borderRadius: '20px' }}>Excellent!</span>
               </div>
            </div>
            <button className="btn btn-primary w-100">Next Gesture</button>
          </div>
        </motion.div>
      )}

      {/* Video Player Modal */}
      <AnimatePresence>
        {activeVideo && (
          <div className="video-modal-overlay" onClick={() => { setActiveVideo(null); setIsPracticing(false); }}>
            <motion.div 
              className="video-modal-content" 
              onClick={e => e.stopPropagation()} 
              initial={{ opacity: 0, y: 30, scale: 0.95 }} 
              animate={{ opacity: 1, y: 0, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1.5rem', borderBottom: '1px solid var(--glass-border)' }}>
                <div>
                  <h3 style={{ margin: '0 0 0.25rem 0' }}>{activeVideo}</h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Lesson 4 of 12 • Instructor Sarah Jenkins</span>
                </div>
                <button onClick={() => { setActiveVideo(null); setIsPracticing(false); }} style={{ background: 'none', cursor: 'pointer', color: 'var(--color-text-main)', border: 'none' }}><X size={24} className="hover-lift"/></button>
              </div>

            <div className="video-viewport">
              {/* Mock Video Feed */}
              <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1000" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
              <PlayCircle size={64} color="#FFF" style={{ position: 'absolute' }} />
              
              <div className="video-controls">
                <div className="scrub-bar">
                   <div className="scrub-fill"><div className="scrub-handle"></div></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <Play size={20} fill="#FFF"/>
                    <SkipBack size={18}/>
                    <SkipForward size={18}/>
                    <Volume2 size={18}/> <span style={{ fontSize: '0.8rem' }}>02:14 / 12:45</span>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <Settings2 size={18} />
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, background: 'rgba(255,255,255,0.2)', padding: '2px 6px', borderRadius: '4px' }}>1x</span>
                    <Maximize size={18}/>
                  </div>
                </div>
              </div>
            </div>

              <div style={{ padding: '2rem', display: 'flex', gap: '2rem' }}>
                <div style={{ flex: 2 }}>
                   <h4 style={{ marginBottom: '0.5rem' }}>Lesson Description</h4>
                   <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>In this module, you will learn the fundamental gestures required for the {activeVideo} course. Pay close attention to the thumb positioning as demonstrated by the instructor. Watch the video fully before attempting the practice.</p>
                </div>
                
                <div style={{ flex: 1.5, background: 'rgba(0,0,0,0.03)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
                   
                   {!isPracticing ? (
                     <>
                       <h4 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Camera size={18}/> Practice Mode</h4>
                       <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                         <li>Ensure your camera has good lighting</li>
                         <li>Center your hands in the frame</li>
                         <li>Mirror the instructor's stroke exactly</li>
                       </ul>
                       <button className="btn btn-primary w-100 glow-effect" onClick={() => setIsPracticing(true)}>Start Practice</button>
                     </>
                   ) : (
                     <div style={{ position: 'relative', width: '100%', height: '180px', background: '#000', borderRadius: '12px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src="https://images.unsplash.com/photo-1543269866-487350d6f11e?auto=format&fit=crop&q=80&w=400" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
                        
                        {/* Simulated AI Feedback Box */}
                        <motion.div 
                          style={{ position: 'absolute', top: '1rem', right: '1rem', padding: '0.5rem 1rem', borderRadius: '50px', fontWeight: 600, fontSize: '0.85rem', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                          animate={{ 
                            background: practiceStatus === 'correct' ? 'rgba(0,255,136,0.2)' : practiceStatus === 'retry' ? 'rgba(255,149,0,0.2)' : 'rgba(255,255,255,0.2)',
                            color: practiceStatus === 'correct' ? '#00FF88' : practiceStatus === 'retry' ? '#FF9500' : '#FFF',
                            border: practiceStatus === 'correct' ? '1px solid #00FF88' : practiceStatus === 'retry' ? '1px solid #FF9500' : '1px solid rgba(255,255,255,0.3)'
                          }}
                        >
                          {practiceStatus === 'correct' && <CheckCircle size={14}/>}
                          {practiceStatus === 'correct' ? 'Perfect Match' : practiceStatus === 'retry' ? 'Adjust Thumb Pos.' : 'Analyzing...'}
                        </motion.div>
                        
                        {/* Mock Scanning Box */}
                        <div style={{ position: 'absolute', width: '120px', height: '120px', border: '2px dashed rgba(255,255,255,0.5)', borderRadius: '12px' }}></div>
                     </div>
                   )}

                </div>
              </div>

              <div style={{ padding: '1.5rem 2rem', borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between' }}>
                <button className="btn btn-secondary"><SkipBack size={16}/> Previous Lesson</button>
                <button className="btn btn-primary">Next Lesson <SkipForward size={16}/></button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

function CourseCard({ title, duration, progress, completed, onClick }) {
  return (
    <div className="glass-card" onClick={onClick} style={{ padding: '1.25rem', cursor: 'pointer', transition: 'transform 0.2s', position: 'relative' }}>
      {completed && <div style={{ position: 'absolute', top: '-10px', right: '-10px', background: '#00FF88', borderRadius: '50%', padding: '4px' }}><CheckCircle color="#000" size={16}/></div>}
      <div style={{ height: '140px', background: 'rgba(0,0,0,0.05)', borderRadius: '12px', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Play size={32} color="var(--color-primary)" opacity={0.5} />
      </div>
      <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1.1rem' }}>{title}</h4>
      <p style={{ margin: '0 0 1rem 0', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{duration} • 12 Lessons</p>
      <div className="progress-bar-container" style={{ marginTop: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '4px' }}>
          <span>{progress}%</span> {completed && <span style={{ color: '#00D166' }}>Completed</span>}
        </div>
        <div className="progress-bar"><div className="progress-fill" style={{ width: `${progress}%`, background: completed ? '#00FF88' : '' }}></div></div>
      </div>
    </div>
  );
}