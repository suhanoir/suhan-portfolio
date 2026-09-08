import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutProfile } from './components/AboutProfile';
import { QuestLog } from './components/QuestLog';
import { Achievements } from './components/Achievements';
import { ContactQuest } from './components/ContactQuest';
import { Footer } from './components/Footer';
import { soundManager } from './utils/audio';

export function App() {
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const handleToggleMute = () => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A]">
      
      {/* Sticky Header Navigation */}
      <Navbar
        level="LVL 02"
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onExploreProjects={() => scrollToSection('quests')}
        />

        <AboutProfile />

        <QuestLog />

        <Achievements />

        <ContactQuest />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
