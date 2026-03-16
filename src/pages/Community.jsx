import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, MessageSquare, Heart, Share2, Video, Users, PhoneCall, Send, Image as ImageIcon, Mic, MicOff, Video as CamOn, VideoOff, MonitorUp, PhoneOff, Hash, Compass, Bookmark, TrendingUp, PlayCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

// Reusing Animated Counter for the Stats Bar
function useCounter(end, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);
  return count;
}

export default function Community() {
  const [activeCall, setActiveCall] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isCamOff, setIsCamOff] = useState(false);
  const [aiCaption, setAiCaption] = useState("");
  const [activeComments, setActiveComments] = useState(null);

  const [posts, setPosts] = useState([
    {
      id: 1, author: 'Sarah Jenkins', avatar: 'https://i.pravatar.cc/150?img=32', time: '2 hours ago',
      content: "Just mastered the alphabet! 🎉 The AI tracking makes practicing so much easier. Here's a quick video of my progress!",
      likes: 124, comments: 18, isLiked: false, hasVideo: true, mockComments: ["Amazing progress!", "Keep it up!"]
    },
    {
      id: 2, author: 'Marcus Chen', avatar: 'https://i.pravatar.cc/150?img=11', time: '5 hours ago',
      content: "Does anyone want to join my practice room later tonight? Focusing on advanced medical vocabulary out of the Coursera extension.",
      likes: 45, comments: 6, isLiked: true, hasVideo: false, mockComments: ["I'm in!", "What time?"]
    }
  ]);
  const [newPostContent, setNewPostContent] = useState('');
  const [newComment, setNewComment] = useState('');
  const [isPostBoxExpanded, setIsPostBoxExpanded] = useState(false);

  const activeMembersCount = useCounter(1245);
  const liveRoomsCount = useCounter(42);
  const postsCount = useCounter(890);

  const handleLike = (id) => {
    setPosts(posts.map(p => {
      if (p.id === id) {
        return { ...p, isLiked: !p.isLiked, likes: p.isLiked ? p.likes - 1 : p.likes + 1 };
      }
      return p;
    }));
  };

  const handleCreatePost = () => {
    if (!newPostContent.trim()) return;
    const newPost = {
      id: Date.now(), author: 'Alex Johnson', avatar: 'https://i.pravatar.cc/150?img=11', time: 'Just now',
      content: newPostContent, likes: 0, comments: 0, isLiked: false, hasVideo: false, mockComments: []
    };
    setPosts([newPost, ...posts]);
    setNewPostContent('');
    setIsPostBoxExpanded(false);
  };

  const handleAddComment = (postId) => {
    if (!newComment.trim()) return;
    setPosts(posts.map(p => {
      if (p.id === postId) {
        return { ...p, comments: p.comments + 1, mockComments: [...p.mockComments, newComment] };
      }
      return p;
    }));
    setNewComment('');
  };

  // Simulate AI Captioning
  useEffect(() => {
    if (!activeCall) return;
    const captions = ["Hello everyone", "I am practicing ASL", "Can you see my screen?", "Thank you", "Goodbye"];
    let i = 0;
    const interval = setInterval(() => {
      setAiCaption(captions[i]);
      i = (i + 1) % captions.length;
    }, 4000);
    return () => clearInterval(interval);
  }, [activeCall]);

  return (
    <div className="community-page" style={{ padding: '2rem 1rem', display: 'flex', flexDirection: 'column', gap: '2rem', height: 'calc(100vh - 80px)' }}>

      {/* 1. Community Header Section */}
      <div className="glass-card" style={{ padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
        <div>
          <h2 style={{ margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Users color="var(--color-primary)" /> SignSetu Community</h2>
          <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Connect, Learn, and Communicate with others using sign language.</p>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <div className="search-bar" style={{ background: 'rgba(0,0,0,0.05)', width: '350px' }}>
            <Search size={18} color="var(--color-text-muted)" />
            <input type="text" placeholder="Search users, rooms, or posts..." />
          </div>
          <button className="btn btn-primary glow-effect"><Plus size={18} /> Create Post</button>
        </div>
      </div>

      {/* 2. Community Statistics Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', flexShrink: 0 }}>
        <StatCard value={activeMembersCount} label="Active Members" icon={<Users size={20} />} />
        <StatCard value={liveRoomsCount} label="Live Rooms" icon={<Video size={20} />} accent />
        <StatCard value={postsCount} label="Posts Today" icon={<MessageSquare size={20} />} />
      </div>

      {/* 3. Main Three-Column Layout */}
      <div style={{ display: 'flex', gap: '2rem', flex: 1, overflow: 'hidden' }}>

        {/* Left Sidebar Navigation */}
        <div className="glass-card" style={{ width: '250px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', overflowY: 'auto' }}>
          <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-text-muted)', marginBottom: '0.5rem', paddingLeft: '0.5rem' }}>Menu</h4>
          <NavButton icon={<Compass />} label="Community Feed" active />
          <NavButton icon={<Video />} label="Live Video Rooms" />
          <NavButton icon={<Users />} label="Friends" badge="3" />
          <NavButton icon={<MessageSquare />} label="Messages" />

          <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-text-muted)', marginTop: '1.5rem', marginBottom: '0.5rem', paddingLeft: '0.5rem' }}>Trending Topics</h4>
          <NavButton icon={<Hash />} label="#ASLBasics" />
          <NavButton icon={<Hash />} label="#DeafAwareness" />
          <NavButton icon={<Hash />} label="#SignSetuMeetup" />
        </div>

        {/* Main Community Feed (Center) */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem', overflowY: 'auto', paddingRight: '0.5rem' }} className="hide-scrollbar">

          {/* Create Post Interface */}
          <motion.div className="glass-card" animate={{ height: isPostBoxExpanded ? 'auto' : '150px' }} style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start', overflow: 'hidden' }}>
            <img src="https://i.pravatar.cc/150?img=11" alt="Me" style={{ width: 48, height: 48, borderRadius: '50%' }} />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <textarea
                placeholder="Share your progress or ask a question..."
                rows={isPostBoxExpanded ? 4 : 2}
                value={newPostContent}
                onChange={e => setNewPostContent(e.target.value)}
                onFocus={() => setIsPostBoxExpanded(true)}
                style={{ width: '100%', background: 'rgba(255,255,255,0.5)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--glass-border)', fontSize: '1rem', resize: 'none', transition: 'all 0.3s' }}
              ></textarea>

              <AnimatePresence>
                {isPostBoxExpanded && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button className="icon-btn hover-lift"><ImageIcon size={20} /></button>
                      <button className="icon-btn hover-lift"><Video size={20} /></button>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }} onClick={() => setIsPostBoxExpanded(false)}>Cancel</button>
                      <button className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }} onClick={handleCreatePost}>Post <Send size={16} /></button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Dynamic Post Feed */}
          <AnimatePresence initial={false}>
            {posts.map(post => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card post-card"
                style={{ padding: '1.5rem', overflow: 'hidden' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <img src={post.avatar} style={{ width: 48, height: 48, borderRadius: '50%' }} />
                  <div><h4 style={{ margin: 0 }}>{post.author}</h4><span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{post.time}</span></div>
                </div>
                <p style={{ fontSize: '1.05rem', margin: '0 0 1rem 0' }}>{post.content}</p>

                {post.hasVideo && (
                  <div style={{ height: '300px', background: '#E0D8C8', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <PlayCircle size={48} color="var(--color-primary)" opacity={0.6} className="hover-lift" cursor="pointer" />
                  </div>
                )}

                <div style={{ display: 'flex', gap: '1.5rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '1rem' }}>
                  <motion.button
                    whileTap={{ scale: 0.8 }}
                    onClick={() => handleLike(post.id)}
                    style={{ background: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', border: 'none', color: post.isLiked ? '#FF3B30' : 'var(--color-text-muted)', transition: 'color 0.2s' }}
                  >
                    <Heart size={20} fill={post.isLiked ? "#FF3B30" : "none"} /> {post.likes}
                  </motion.button>
                  <button onClick={() => setActiveComments(activeComments === post.id ? null : post.id)} style={{ background: 'none', display: 'flex', alignItems: 'center', cursor: 'pointer', border: 'none', gap: '0.5rem', color: 'var(--color-text-muted)' }}><MessageSquare size={20} /> {post.comments}</button>
                  <button style={{ background: 'none', display: 'flex', alignItems: 'center', cursor: 'pointer', border: 'none', gap: '0.5rem', color: 'var(--color-text-muted)' }}><Share2 size={20} /> Share</button>
                </div>

                {/* Expandable Comments Section */}
                <AnimatePresence>
                  {activeComments === post.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      style={{ marginTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '1rem' }}
                    >
                      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                        <input
                          type="text"
                          placeholder="Write a comment..."
                          value={newComment}
                          onChange={e => setNewComment(e.target.value)}
                          style={{ flex: 1, padding: '0.5rem 1rem', borderRadius: '50px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.5)' }}
                          onKeyDown={(e) => e.key === 'Enter' && handleAddComment(post.id)}
                        />
                        <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }} onClick={() => handleAddComment(post.id)}><Send size={16} /></button>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {post.mockComments.map((comment, index) => (
                          <div key={index} style={{ background: 'rgba(0,0,0,0.03)', padding: '0.75rem 1rem', borderRadius: '12px', fontSize: '0.9rem' }}>
                            <span style={{ fontWeight: 600, marginRight: '0.5rem', color: 'var(--color-primary)' }}>User •</span>
                            {comment}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>

        </div>

        {/* Right Panel (Rooms & Friends) */}
        <div style={{ width: '320px', display: 'flex', flexDirection: 'column', gap: '1.5rem', overflowY: 'auto', paddingRight: '0.5rem' }} className="hide-scrollbar">

          {/* Live Rooms Section */}
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <h3 style={{ margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Video size={18} color="var(--color-primary)" /> Live Rooms</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <RoomCard title="Beginner Sign Practice" topic="ASL Basics" participants={12} onClick={() => setActiveCall('Beginner Sign Practice')} />
              <RoomCard title="Daily Conversations" topic="Everyday Vocab" participants={8} onClick={() => setActiveCall('Daily Conversations')} />
              <RoomCard title="Emergency Training" topic="Medical/Urgent" participants={24} onClick={() => setActiveCall('Emergency Training')} />
            </div>
          </div>

          {/* Friends Panel */}
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Users size={18} color="var(--color-primary)" /> Friends</h3>
              <Search size={16} color="var(--color-text-muted)" style={{ cursor: 'pointer' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <FriendRow name="Elena Rodriguez" status="Online" avatar="https://i.pravatar.cc/150?img=68" />
              <FriendRow name="Sarah Jenkins" status="Online" avatar="https://i.pravatar.cc/150?img=47" />
              <FriendRow name="David Smith" status="Offline" avatar="https://i.pravatar.cc/150?img=33" />
            </div>
          </div>

        </div>

      </div>

      {/* Video Call Modal Overlay (Unchanged functionally, preserved inside AnimatePresence) */}
      <AnimatePresence>
        {activeCall && (
          <motion.div
            className="video-call-modal"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            style={{ position: 'fixed', zIndex: 9999 }}
          >
            {/* Header */}
            <div style={{ padding: '1rem 2rem', background: '#000', color: '#FFF', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: 10, height: 10, background: '#FF3B30', borderRadius: '50%', boxShadow: '0 0 10px #FF3B30' }}></div>
                <h3 style={{ margin: 0 }}>{activeCall}</h3>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 12px', borderRadius: '50px', fontSize: '0.85rem' }}>00:14:32</div>
            </div>

            {/* Video Grids */}
            <div className="call-grid">
              <div className="participant-feed">
                <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600" />
                <div className="participant-name">Instructor Sarah</div>
              </div>
              <div className="participant-feed">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" />
                <div className="participant-name">Alex M.</div>
                <div className="participant-mute"><MicOff size={16} /></div>
              </div>
              <div className="participant-feed" style={{ border: '2px solid #00FF88' }}>
                {!isCamOff ? (
                  <img src="https://i.pravatar.cc/600?img=11" />
                ) : (
                  <div style={{ width: 100, height: 100, borderRadius: '50%', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '2rem' }}>Me</div>
                )}
                <div className="participant-name">You</div>
                {isMuted && <div className="participant-mute"><MicOff size={16} /></div>}
              </div>

              {/* Simulated AI Subtitles */}
              <motion.div
                className="ai-caption-overlay"
                key={aiCaption}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              >
                {aiCaption}
              </motion.div>
            </div>

            {/* Bottom Controls */}
            <div className="call-controls">
              <button className={`call-btn ${isMuted ? 'danger' : ''}`} onClick={() => setIsMuted(!isMuted)}>
                {isMuted ? <MicOff /> : <Mic />}
              </button>
              <button className={`call-btn ${isCamOff ? 'danger' : ''}`} onClick={() => setIsCamOff(!isCamOff)}>
                {isCamOff ? <VideoOff /> : <CamOn />}
              </button>
              <button className="call-btn"><MonitorUp /></button>
              <button className="call-btn danger" style={{ width: 80, borderRadius: 30 }} onClick={() => setActiveCall(null)}>
                <PhoneOff />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

// Subcomponents for cleaner mapping

function StatCard({ value, label, icon, accent }) {
  return (
    <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', background: accent ? 'var(--color-primary)' : 'var(--glass-bg)', color: accent ? '#FFF' : 'inherit' }}>
      <div style={{ backgroundColor: accent ? 'rgba(255,255,255,0.1)' : 'rgba(79, 62, 52, 0.1)', color: accent ? '#FFF' : 'var(--color-primary)', padding: '1rem', borderRadius: '12px' }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1 }}>{value}</div>
        <div style={{ fontSize: '0.9rem', color: accent ? 'rgba(255,255,255,0.8)' : 'var(--color-text-muted)', marginTop: '0.25rem' }}>{label}</div>
      </div>
    </div>
  );
}

function NavButton({ icon, label, active, badge }) {
  return (
    <button style={{
      display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem',
      border: 'none', background: active ? 'var(--color-primary)' : 'transparent',
      color: active ? '#FFF' : 'var(--color-text-main)',
      borderRadius: '8px', cursor: 'pointer', transition: 'all 0.2s', fontWeight: active ? 600 : 500,
      textAlign: 'left'
    }} className={!active ? "nav-btn-hover" : ""}>
      {icon}
      <span style={{ flex: 1 }}>{label}</span>
      {badge && <span style={{ background: '#FF3B30', color: '#FFF', padding: '2px 6px', borderRadius: '50px', fontSize: '0.75rem' }}>{badge}</span>}
    </button>
  );
}

function RoomCard({ title, topic, participants, onClick }) {
  return (
    <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.4)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
        <h4 style={{ margin: 0, fontSize: '0.95rem' }}>{title}</h4>
        <div style={{ width: 8, height: 8, background: '#FF3B30', borderRadius: '50%', boxShadow: '0 0 8px #FF3B30' }}></div>
      </div>
      <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>{topic}</div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Users size={14} /> {participants}</span>
        <button className="btn btn-secondary glow-effect" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }} onClick={onClick}>Join</button>
      </div>
    </div>
  );
}

function FriendRow({ name, status, avatar }) {
  const isOnline = status === 'Online';
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{ position: 'relative' }}>
          <img src={avatar} style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', bottom: 0, right: 0, width: 10, height: 10, background: isOnline ? '#00FF88' : '#ccc', borderRadius: '50%', border: '2px solid #FFF' }}></div>
        </div>
        <div>
          <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{name}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{status}</div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button className="icon-btn hover-lift" style={{ transform: 'scale(0.8)' }}><MessageSquare size={16} /></button>
        <button className="icon-btn hover-lift" style={{ transform: 'scale(0.8)' }}><Video size={16} /></button>
      </div>
    </div>
  );
}