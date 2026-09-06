import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutProfile } from './components/AboutProfile';
import { SkillTree } from './components/SkillTree';
import { QuestLog } from './components/QuestLog';
import { Achievements } from './components/Achievements';
import { ContactQuest } from './components/ContactQuest';
import { Footer } from './components/Footer';
import { soundManager } from './utils/audio';
import confetti from 'canvas-confetti';
import { Sparkles } from 'lucide-react';

export function App() {
  const [xp, setXp] = useState<number>(180);
  const [level, setLevel] = useState<string>('LVL 02');
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [floatingToast, setFloatingToast] = useState<{ text: string; id: number } | null>(null);

  const maxXp = 1000;

  const handleGainXp = (amount: number) => {
    setXp((prev) => {
      const nextXp = Math.min(maxXp, prev + amount);

      // Trigger toast
      const toastId = Date.now();
      setFloatingToast({ text: `+${amount} EXP`, id: toastId });
      setTimeout(() => {
        setFloatingToast((current) => (current?.id === toastId ? null : current));
      }, 1800);

      // Level up check
      if (prev < 500 && nextXp >= 500) {
        setLevel('LVL 03');
        soundManager.playLevelUp();
        try {
          confetti({
            particleCount: 50,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#2563EB', '#14B8A6', '#F59E0B']
          });
        } catch {
          // Ignore
        }
      }

      return nextXp;
    });
  };

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

  // Scroll milestone XP rewards (once per section visit)
  useEffect(() => {
    const visitedSections = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !visitedSections.has(entry.target.id)) {
            visitedSections.add(entry.target.id);
            handleGainXp(20);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sectionIds = ['about', 'skills', 'quests', 'achievements', 'contact'];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A]">
      
      {/* Floating XP Toast */}
      {floatingToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0F172A] text-white px-3.5 py-2 border-2 border-[#F59E0B] shadow-[3px_3px_0px_#F59E0B] flex items-center gap-2 animate-bounce font-mono text-xs">
          <Sparkles className="w-4 h-4 text-[#F59E0B]" />
          <span className="font-bold text-[#F59E0B]">{floatingToast.text}</span>
          <span className="text-slate-400">Gained!</span>
        </div>
      )}

      {/* Sticky Header Navigation */}
      <Navbar
        xp={xp}
        maxXp={maxXp}
        level={level}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onExploreProjects={() => scrollToSection('quests')}
          onExploreSkills={() => scrollToSection('skills')}
          onGainXp={handleGainXp}
        />

        <AboutProfile onGainXp={handleGainXp} />

        <SkillTree onGainXp={handleGainXp} />

        <QuestLog onGainXp={handleGainXp} />

        <Achievements onGainXp={handleGainXp} />

        <ContactQuest onGainXp={handleGainXp} />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;

