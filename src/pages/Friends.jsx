import { motion } from 'framer-motion';
import { Search, UserCheck, UserPlus, MessageCircle, Video, UserMinus, MoreVertical } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Friends() {
  const [activeTab, setActiveTab] = useState('all');

  // Hardcoded mock data bridging UI requirements
  const friendsList = [
    { id: 1, name: 'Elena Rodriguez', avatar: 'https://i.pravatar.cc/150?img=68', status: 'Online', lastActive: 'Now' },
    { id: 2, name: 'Marcus Chen', avatar: 'https://i.pravatar.cc/150?img=11', status: 'Online', lastActive: 'Now' },
    { id: 3, name: 'Sarah Jenkins', avatar: 'https://i.pravatar.cc/150?img=47', status: 'Offline', lastActive: '2h ago' },
    { id: 4, name: 'David Smith', avatar: 'https://i.pravatar.cc/150?img=33', status: 'Offline', lastActive: '1d ago' },
  ];

  const friendRequests = [
    { id: 10, name: 'Jamie Lannister', avatar: 'https://i.pravatar.cc/150?img=15', mutual: 3 },
    { id: 11, name: 'Arya Stark', avatar: 'https://i.pravatar.cc/150?img=5', mutual: 12 },
  ];

  return (
    <div className="friends-page" style={{ padding: '1rem', height: 'calc(100vh - 100px)', display: 'flex', flexDirection: 'column' }}>
      
      {/* Top Header */}
      <div className="glass-card" style={{ padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 style={{ margin: 0 }}>Friends</h2>
        <div className="search-bar" style={{ background: 'rgba(0,0,0,0.05)', width: '300px' }}>
          <Search size={18} color="var(--color-text-muted)" />
          <input type="text" placeholder="Search friends..." />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '2rem', flex: 1, overflow: 'hidden' }}>
        
        {/* Left Sidebar Layout component */}
        <div style={{ width: '250px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass-card" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <button className={`btn ${activeTab === 'all' ? 'btn-primary' : 'btn-secondary'}`} style={{ justifyContent: 'flex-start', padding: '0.75rem 1rem' }} onClick={() => setActiveTab('all')}>
              <UserCheck size={18} /> All Friends <span style={{ marginLeft: 'auto', background: 'rgba(0,0,0,0.1)', padding: '2px 8px', borderRadius: '50px', fontSize: '0.8rem' }}>{friendsList.length}</span>
            </button>
            <button className={`btn ${activeTab === 'requests' ? 'btn-primary' : 'btn-secondary'}`} style={{ justifyContent: 'flex-start', padding: '0.75rem 1rem' }} onClick={() => setActiveTab('requests')}>
              <UserPlus size={18} /> Requests <span style={{ marginLeft: 'auto', background: '#FF3B30', color: '#FFF', padding: '2px 8px', borderRadius: '50px', fontSize: '0.8rem' }}>{friendRequests.length}</span>
            </button>
            <button className={`btn ${activeTab === 'find' ? 'btn-primary' : 'btn-secondary'}`} style={{ justifyContent: 'flex-start', padding: '0.75rem 1rem' }} onClick={() => setActiveTab('find')}>
              <Search size={18} /> Find Users
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="glass-card" style={{ flex: 1, overflowY: 'auto', padding: '2rem' }}>
          
          {activeTab === 'all' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
                <h3 style={{ margin: 0 }}>Your Friends</h3>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{friendsList.filter(f=>f.status==='Online').length} Online</span>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {friendsList.map(friend => (
                  <div key={friend.id} style={{ padding: '1.5rem', border: '1px solid var(--glass-border)', borderRadius: '12px', background: 'rgba(255,255,255,0.4)', position: 'relative' }}>
                    
                    <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                      <button style={{ background: 'none', color: 'var(--color-text-muted)', cursor: 'pointer' }}><MoreVertical size={20}/></button>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ position: 'relative' }}>
                        <img src={friend.avatar} alt={friend.name} style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', bottom: 2, right: 2, width: 14, height: 14, background: friend.status === 'Online' ? '#00FF88' : '#999', borderRadius: '50%', border: '2px solid #FFF' }}></div>
                      </div>
                      <div>
                        <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1.1rem' }}>{friend.name}</h4>
                        <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{friend.status === 'Online' ? 'Online Mode' : `Last seen ${friend.lastActive}`}</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button className="btn w-100" style={{ background: 'var(--color-primary)', color: '#FFF', flex: 1, padding: '0.5rem', fontSize: '0.9rem' }}><MessageCircle size={16}/> Message</button>
                      
                      {/* 7. Quick Video Call Access point */}
                      <button className="btn btn-secondary" style={{ flex: 1, padding: '0.5rem', fontSize: '0.9rem' }}><Video size={16}/> Video Call</button>
                      
                      <button className="btn btn-secondary" style={{ width: '40px', padding: '0.5rem' }} title="Remove Friend"><UserMinus size={16}/></button>
                    </div>

                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'requests' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h3 style={{ marginBottom: '2rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>Pending Requests ({friendRequests.length})</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {friendRequests.map(req => (
                  <div key={req.id} style={{ padding: '1rem 1.5rem', border: '1px solid var(--glass-border)', borderRadius: '12px', background: 'rgba(255,255,255,0.4)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <img src={req.avatar} alt={req.name} style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover' }} />
                      <div>
                        <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1.1rem' }}>{req.name}</h4>
                        <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{req.mutual} mutual friends</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>Reject</button>
                      <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Accept</button>
                    </div>

                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'find' && (
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--color-text-muted)' }}>
               <Search size={64} style={{ opacity: 0.2, marginBottom: '1rem' }} />
               <h3>Search the Community</h3>
               <p>Use the search bar above to find specific users via email or handle.</p>
             </motion.div>
          )}

        </div>
      </div>
    </div>
  );
}
