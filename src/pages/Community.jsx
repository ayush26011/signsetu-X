import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, MessageSquare, Heart, Share2, Video, Users, PhoneCall, Send, Image as ImageIcon, Mic, MicOff, Video as CamOn, VideoOff, MonitorUp, PhoneOff } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Community() {
  const [activeTab, setActiveTab] = useState('feed');
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

  const handleLike = (id) => {
    setPosts(posts.map(p => {
      if(p.id === id) {
        return { ...p, isLiked: !p.isLiked, likes: p.isLiked ? p.likes - 1 : p.likes + 1 };
      }
      return p;
    }));
  };

  const handleCreatePost = () => {
    if(!newPostContent.trim()) return;
    const newPost = {
      id: Date.now(), author: 'Alex Johnson', avatar: 'https://i.pravatar.cc/150?img=11', time: 'Just now',
      content: newPostContent, likes: 0, comments: 0, isLiked: false, hasVideo: false, mockComments: []
    };
    setPosts([newPost, ...posts]);
    setNewPostContent('');
  };

  const handleAddComment = (postId) => {
    if(!newComment.trim()) return;
    setPosts(posts.map(p => {
      if(p.id === postId) {
        return { ...p, comments: p.comments + 1, mockComments: [...p.mockComments, newComment] };
      }
      return p;
    }));
    setNewComment('');
  };

  // Simulate AI Captioning during a call
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
    <div className="community-page" style={{ padding: '1rem', display: 'flex', gap: '2rem', height: 'calc(100vh - 100px)' }}>
      
      {/* Left Sidebar Layout component */}
      <div style={{ width: '250px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div className="glass-card" style={{ padding: '1.25rem' }}>
          <h3 style={{ fontSize: '1.2rem', margin: '0 0 1rem 0' }}>Community</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <button className={`btn ${activeTab === 'feed' ? 'btn-primary' : 'btn-secondary'}`} style={{ justifyContent: 'flex-start', padding: '0.5rem 1rem' }} onClick={() => setActiveTab('feed')}>
              <MessageSquare size={18} /> Social Feed
            </button>
            <button className={`btn ${activeTab === 'rooms' ? 'btn-primary' : 'btn-secondary'}`} style={{ justifyContent: 'flex-start', padding: '0.5rem 1rem' }} onClick={() => setActiveTab('rooms')}>
              <Video size={18} /> Video Rooms
            </button>
            <button className={`btn ${activeTab === 'friends' ? 'btn-primary' : 'btn-secondary'}`} style={{ justifyContent: 'flex-start', padding: '0.5rem 1rem' }} onClick={() => setActiveTab('friends')}>
              <Users size={18} /> Friends
            </button>
          </div>
        </div>

        <div className="glass-card" style={{ padding: '1.25rem', flex: 1 }}>
          <h4 style={{ margin: '0 0 1rem 0' }}>Online Friends</h4>
          {/* Active friend cards */}
          {[1,2,3].map(i => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ position: 'relative' }}>
                <img src={`https://i.pravatar.cc/150?img=${i+4}`} style={{ width: 40, height: 40, borderRadius: '50%' }} />
                <div style={{ position: 'absolute', bottom: 0, right: 0, width: 10, height: 10, background: '#00FF88', borderRadius: '50%', border: '2px solid #FFF' }}></div>
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>User {i}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, overflowY: 'auto', paddingRight: '1rem' }}>
        {/* Top Community Search Header */}
        <div className="glass-card" style={{ padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div className="search-bar" style={{ background: 'rgba(0,0,0,0.05)' }}>
            <Search size={18} color="var(--color-text-muted)" />
            <input type="text" placeholder="Search posts, users, or rooms..." />
          </div>
          <button className="btn btn-primary"><Plus size={18}/> {activeTab === 'rooms' ? 'Create Room' : 'New Post'}</button>
        </div>

        {activeTab === 'feed' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '700px', margin: '0 auto' }}>
            
            {/* Create Post Interface */}
            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
               <img src="https://i.pravatar.cc/150?img=11" alt="Me" style={{ width: 48, height: 48, borderRadius: '50%' }} />
               <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                 <textarea 
                   placeholder="Share your progress or ask a question..." 
                   rows="3"
                   value={newPostContent}
                   onChange={e => setNewPostContent(e.target.value)}
                   style={{ width: '100%', background: 'rgba(255,255,255,0.5)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--glass-border)', fontSize: '1rem', resize: 'vertical' }}
                 ></textarea>
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <button className="icon-btn"><ImageIcon size={20}/></button>
                   <button className="btn btn-primary" onClick={handleCreatePost}>Post <Send size={16}/></button>
                 </div>
               </div>
            </div>

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
                           <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }} onClick={() => handleAddComment(post.id)}><Send size={16}/></button>
                         </div>
                         
                         {/* Existing Mock Comments */}
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

          </motion.div>
        )}

        {activeTab === 'rooms' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="glass-card" style={{ padding: '1.5rem', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'rgba(255,59,48,0.1)', color: '#FF3B30', padding: '4px 10px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: 8, height: 8, background: '#FF3B30', borderRadius: '50%' }}></div> LIVE
                  </div>
                  <div style={{ width: 50, height: 50, background: 'var(--color-primary)', borderRadius: '12px', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                    <Video size={24} />
                  </div>
                  <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>Beginner Sign Practice #{i}</h3>
                  <p style={{ margin: '0 0 1rem 0', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Hosted by <strong>Community</strong></p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem', background: 'rgba(0,0,0,0.03)', borderRadius: '8px', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                      <Users size={16} /> 12 / 20
                    </div>
                    <span style={{ fontSize: '0.8rem' }}>ASL Basics</span>
                  </div>

                  <button className="btn btn-secondary w-100" onClick={() => setActiveCall(`Beginner Sign Practice #${i}`)}><PhoneCall size={18}/> Join Room</button>
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </div>

      {/* Video Call Modal Overlay */}
      <AnimatePresence>
        {activeCall && (
          <motion.div 
            className="video-call-modal"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
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
                 <div className="participant-mute"><MicOff size={16}/></div>
               </div>
               <div className="participant-feed" style={{ border: '2px solid #00FF88' }}>
                 {!isCamOff ? (
                   <img src="https://i.pravatar.cc/600?img=11" />
                 ) : (
                   <div style={{ width: 100, height: 100, borderRadius: '50%', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '2rem' }}>Me</div>
                 )}
                 <div className="participant-name">You</div>
                 {isMuted && <div className="participant-mute"><MicOff size={16}/></div>}
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
                 {isMuted ? <MicOff/> : <Mic/>}
               </button>
               <button className={`call-btn ${isCamOff ? 'danger' : ''}`} onClick={() => setIsCamOff(!isCamOff)}>
                 {isCamOff ? <VideoOff/> : <CamOn/>}
               </button>
               <button className="call-btn"><MonitorUp/></button>
               <button className="call-btn danger" style={{ width: 80, borderRadius: 30 }} onClick={() => setActiveCall(null)}>
                 <PhoneOff/>
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}