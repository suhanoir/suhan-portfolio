import React, { useState } from 'react';
import { Volume2, VolumeX, Menu, X, Sparkles } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface NavbarProps {
  xp: number;
  maxXp: number;
  level: string;
  isMuted: boolean;
  onToggleMute: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  xp,
  maxXp,
  level,
  isMuted,
  onToggleMute
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'QUESTS', href: '#quests' },
    { label: 'ACHIEVEMENTS', href: '#achievements' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = () => {
    soundManager.playBlip(600);
    setMobileMenuOpen(false);
  };

  const xpPercent = Math.min(100, Math.round((xp / maxXp) * 100));

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-[#CBD5E1] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Player Identity */}
          <a
            href="#"
            onClick={() => soundManager.playBlip(500)}
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 bg-[#2563EB] text-white flex items-center justify-center border-2 border-[#1D4ED8] shadow-[2px_2px_0px_#1E40AF] group-hover:scale-105 transition-transform">
              <span className="font-['Press_Start_2P'] text-xs font-bold">S</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm tracking-wider text-[#0F172A]">SUHAN RAJ M</span>
                <span className="font-['Press_Start_2P'] text-[9px] px-1.5 py-0.5 bg-blue-50 text-[#2563EB] border border-blue-200">
                  {level}
                </span>
              </div>
              <span className="text-xs text-[#64748B] block -mt-0.5">Full Stack Developer</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleNavClick}
                className="px-3 py-1.5 text-xs font-semibold text-[#0F172A] hover:text-[#2563EB] hover:bg-slate-100 rounded border border-transparent hover:border-slate-200 transition-all font-mono"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* XP Progression HUD & Audio Toggle */}
          <div className="hidden sm:flex items-center gap-3">
            {/* XP Bar Pill */}
            <div className="flex items-center gap-2 bg-[#F8FAFC] border border-[#CBD5E1] px-2.5 py-1 shadow-[1px_1px_0px_#E2E8F0]">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              <div className="flex flex-col">
                <div className="flex justify-between items-center text-[10px] font-mono font-semibold text-[#64748B] gap-3">
                  <span>EXP</span>
                  <span className="text-[#0F172A]">{xp} / {maxXp}</span>
                </div>
                <div className="w-24 h-1.5 bg-[#E2E8F0] overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#2563EB] to-[#14B8A6] transition-all duration-300"
                    style={{ width: `${xpPercent}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Audio Toggle Button */}
            <button
              onClick={onToggleMute}
              title={isMuted ? "Enable 8-bit Sound FX" : "Mute Sound FX"}
              aria-label={isMuted ? "Enable 8-bit Sound FX" : "Mute Sound FX"}
              className="p-1.5 bg-[#FFFFFF] hover:bg-slate-100 border border-[#CBD5E1] text-[#64748B] hover:text-[#0F172A] shadow-[1px_1px_0px_#CBD5E1] active:translate-y-0.5 transition-all"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-slate-400" />
              ) : (
                <Volume2 className="w-4 h-4 text-[#2563EB]" />
              )}
            </button>

            {/* Quick Resume / Quest CTA */}
            <a
              href="#quests"
              onClick={handleNavClick}
              className="pixel-btn-primary px-3 py-1.5 text-xs font-mono"
            >
              QUEST LOG
            </a>
          </div>

          {/* Mobile Menu & Sound Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onToggleMute}
              className="p-1.5 border border-[#CBD5E1] text-[#64748B]"
              aria-label="Toggle Sound"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#2563EB]" />}
            </button>
            <button
              onClick={() => {
                soundManager.playBlip(550);
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 border border-[#CBD5E1] text-[#0F172A]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b-2 border-[#CBD5E1] px-4 pt-3 pb-5 space-y-2 shadow-lg">
          {/* Mobile XP display */}
          <div className="bg-slate-50 border border-slate-200 p-2.5 mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-['Press_Start_2P'] text-[9px] text-[#2563EB]">{level}</span>
              <span className="text-xs font-mono text-[#64748B]">EXP: {xp}/{maxXp}</span>
            </div>
            <div className="w-24 h-2 bg-slate-200">
              <div className="h-full bg-[#2563EB]" style={{ width: `${xpPercent}%` }} />
            </div>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleNavClick}
              className="block px-3 py-2 text-sm font-semibold text-[#0F172A] hover:bg-blue-50 hover:text-[#2563EB] border-l-2 border-transparent hover:border-[#2563EB] transition-all font-mono"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#quests"
              onClick={handleNavClick}
              className="w-full pixel-btn-primary py-2.5 text-xs font-mono block text-center"
            >
              EXPLORE QUESTS
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

