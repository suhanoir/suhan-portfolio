import React from 'react';
import { Mail, ArrowRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundManager } from '../utils/audio';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface HeroProps {
  onExploreProjects: () => void;
  onExploreSkills: () => void;
  onGainXp: (amount: number) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProjects,
  onExploreSkills,
  onGainXp
}) => {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#CBD5E1] pixel-grid-pattern overflow-hidden">
      {/* Decorative ambient pixel corner markers */}
      <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-[#2563EB] hidden sm:block" />
      <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-[#2563EB] hidden sm:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Hero Copy (Left Column) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Player Status Ribbon */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-[#CBD5E1] shadow-[2px_2px_0px_#E2E8F0]">
              <span className="w-2.5 h-2.5 bg-emerald-500 inline-block animate-pulse" />
              <span className="font-['Press_Start_2P'] text-[9px] text-[#2563EB] tracking-wider">
                PLAYER 01
              </span>
              <span className="text-slate-300">|</span>
              <span className="font-mono text-xs font-semibold text-[#0F172A]">
                DEVELOPER PROFILE • LVL 02
              </span>
            </div>

            {/* Main Headline & Identity */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <div className="flex items-center gap-3">
                <span className="text-xl sm:text-2xl font-bold text-[#2563EB] font-mono">
                  {PERSONAL_INFO.role}
                </span>
                <span className="px-2 py-0.5 text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-300 rounded">
                  Open for Internships
                </span>
              </div>
            </div>

            {/* Authentic Supporting Copy */}
            <p className="text-base sm:text-lg text-[#64748B] max-w-2xl leading-relaxed">
              Computer Science student building functional, modern web applications. Focused on 
              turning ideas into robust products using React, Next.js, TypeScript, and Prisma ORM.
            </p>

            {/* Quick Quest Highlights (Daydream & SkillQuest) */}
            <div className="flex flex-wrap gap-2 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-white border border-[#CBD5E1] text-xs font-mono text-[#0F172A]">
                <span className="w-2 h-2 bg-[#2563EB]" />
                <span>Main Quest 1: <strong>Daydream</strong> (Full-Stack Life Hub)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-white border border-[#CBD5E1] text-xs font-mono text-[#0F172A]">
                <span className="w-2 h-2 bg-[#14B8A6]" />
                <span>Main Quest 2: <strong>SkillQuest</strong> (Gemini AI RPG)</span>
              </div>
            </div>

            {/* CTAs & External Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={() => {
                  soundManager.playSelect();
                  onGainXp(25);
                  onExploreProjects();
                }}
                className="pixel-btn-primary px-5 py-3 text-xs sm:text-sm font-mono tracking-wide flex items-center gap-2.5"
              >
                <span>VIEW QUESTS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  soundManager.playBlip(550);
                  onGainXp(15);
                  onExploreSkills();
                }}
                className="pixel-btn-secondary px-4 py-3 text-xs sm:text-sm font-mono"
              >
                <span>EXPLORE SKILL TREE</span>
              </button>
            </div>

            {/* Verified Social Link Badges */}
            <div className="pt-4 flex items-center gap-3 border-t border-slate-200/80">
              <span className="text-xs font-mono text-[#64748B] font-semibold">CONNECT:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playBlip(600)}
                className="p-2 bg-white hover:bg-slate-50 border border-[#CBD5E1] text-[#0F172A] hover:text-[#2563EB] shadow-[1px_1px_0px_#CBD5E1] active:translate-y-0.5 transition-all flex items-center gap-1.5 text-xs font-mono"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="hidden sm:inline">github/suhanoir</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playBlip(600)}
                className="p-2 bg-white hover:bg-slate-50 border border-[#CBD5E1] text-[#0F172A] hover:text-[#2563EB] shadow-[1px_1px_0px_#CBD5E1] active:translate-y-0.5 transition-all flex items-center gap-1.5 text-xs font-mono"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-[#2563EB]" />
                <span className="hidden sm:inline">linkedin/suhanoirr</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                onClick={() => soundManager.playBlip(600)}
                className="p-2 bg-white hover:bg-slate-50 border border-[#CBD5E1] text-[#0F172A] hover:text-[#2563EB] shadow-[1px_1px_0px_#CBD5E1] active:translate-y-0.5 transition-all flex items-center gap-1.5 text-xs font-mono"
                title="Direct Email"
              >
                <Mail className="w-4 h-4 text-[#F59E0B]" />
                <span className="hidden sm:inline">Email Me</span>
              </a>
            </div>

          </div>

          {/* Developer Pixel Character HUD Card (Right Column) */}
          <div className="lg:col-span-5">
            <div className="pixel-card bg-white p-5 sm:p-6 relative border-2 border-[#CBD5E1] shadow-[4px_4px_0px_#CBD5E1]">
              
              {/* Header Tab */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#2563EB]" />
                  <span className="font-['Press_Start_2P'] text-[10px] text-[#0F172A]">
                    PLAYER STATS
                  </span>
                </div>
                <span className="font-mono text-xs px-2 py-0.5 bg-blue-50 text-[#2563EB] border border-blue-200 font-semibold">
                  CLASS: FULL STACK
                </span>
              </div>

              {/* Pixel Art Character Illustration */}
              <div className="bg-[#F1F5F9] border-2 border-[#CBD5E1] p-4 flex flex-col items-center justify-center relative group">
                <div className="relative w-36 h-36 flex items-center justify-center">
                  {/* SVG Pixel Art Developer Character */}
                  <svg
                    viewBox="0 0 64 64"
                    className="w-32 h-32 image-rendering-pixelated drop-shadow-md select-none transform group-hover:scale-105 transition-transform duration-200"
                    shapeRendering="crispEdges"
                  >
                    {/* Shadow */}
                    <ellipse cx="32" cy="58" rx="20" ry="4" fill="#CBD5E1" />

                    {/* Hair (Dark Brown / Black) */}
                    <rect x="24" y="10" width="16" height="4" fill="#1E293B" />
                    <rect x="20" y="14" width="24" height="6" fill="#1E293B" />
                    <rect x="18" y="18" width="6" height="8" fill="#1E293B" />
                    <rect x="40" y="18" width="6" height="8" fill="#1E293B" />

                    {/* Head / Skin */}
                    <rect x="24" y="16" width="16" height="16" fill="#FBBF24" />
                    <rect x="22" y="20" width="20" height="12" fill="#FCD34D" />

                    {/* Pixel Eyes */}
                    <rect x="26" y="22" width="3" height="4" fill="#0F172A" />
                    <rect x="35" y="22" width="3" height="4" fill="#0F172A" />
                    <rect x="27" y="23" width="1" height="1" fill="#FFFFFF" />
                    <rect x="36" y="23" width="1" height="1" fill="#FFFFFF" />

                    {/* Smile */}
                    <rect x="30" y="28" width="4" height="1" fill="#92400E" />

                    {/* Developer Glasses (Pixel Frames) */}
                    <rect x="24" y="21" width="7" height="6" fill="none" stroke="#2563EB" strokeWidth="1" />
                    <rect x="33" y="21" width="7" height="6" fill="none" stroke="#2563EB" strokeWidth="1" />
                    <rect x="31" y="23" width="2" height="1" fill="#2563EB" />

                    {/* Neck */}
                    <rect x="30" y="32" width="4" height="3" fill="#F59E0B" />

                    {/* Blue Developer Hoodie / Shirt */}
                    <rect x="20" y="35" width="24" height="16" fill="#2563EB" />
                    <rect x="24" y="35" width="16" height="3" fill="#1D4ED8" />
                    {/* Inner shirt detail */}
                    <rect x="29" y="35" width="6" height="8" fill="#FFFFFF" />

                    {/* Laptop on desk in front */}
                    <rect x="16" y="47" width="32" height="3" fill="#334155" />
                    <rect x="20" y="42" width="24" height="6" fill="#0F172A" />
                    <rect x="22" y="43" width="20" height="4" fill="#38BDF8" />
                    {/* Code glyph on laptop screen */}
                    <rect x="24" y="44" width="5" height="1" fill="#FFFFFF" />
                    <rect x="26" y="45" width="7" height="1" fill="#34D399" />
                  </svg>
                </div>

                <div className="text-center mt-2">
                  <span className="font-['Press_Start_2P'] text-[9px] text-[#0F172A]">
                    SUHAN.AVATAR
                  </span>
                  <span className="block text-[11px] font-mono text-[#64748B]">
                    Full-Stack Build Mode
                  </span>
                </div>
              </div>

              {/* Character Attributes / Status Table */}
              <div className="mt-4 space-y-2 font-mono text-xs">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-[#64748B]">STATUS</span>
                  <span className="font-semibold text-[#0F172A]">CS Student (Grad 2029)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-[#64748B]">CORE STACK</span>
                  <span className="font-semibold text-[#2563EB]">Next.js • React • TS • Prisma</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-[#64748B]">ACADEMIC CGPA</span>
                  <span className="font-semibold text-emerald-600">Sem 1: 9.5 | Sem 2: 9.0</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-[#64748B]">DEPLOYED APPS</span>
                  <span className="font-semibold text-[#0F172A]">Daydream & SkillQuest</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#64748B]">TARGET</span>
                  <span className="font-semibold text-[#F59E0B]">Internships / Campus Placements</span>
                </div>
              </div>

              {/* Bottom XP Interactive Button */}
              <button
                onClick={() => {
                  soundManager.playXpGain();
                  onGainXp(50);
                }}
                className="mt-4 w-full py-2 bg-slate-50 hover:bg-blue-50 text-[#2563EB] border border-dashed border-[#2563EB] text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>INSPECT DEVELOPER (+50 XP)</span>
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

