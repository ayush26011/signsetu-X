import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Chatbot from './Chatbot';
import Preloader from './Preloader';

export default function MainLayout() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Chatbot />
      
      {/* Footer to be replaced fully later */}
      <footer className="footer minimal-footer">
        <div className="container">
          <p>&copy; 2026 SignSetu AI. Breaking Communication Barriers.</p>
        </div>
      </footer>
    </>
  );
}
