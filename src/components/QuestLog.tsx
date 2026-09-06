import React, { useState } from 'react';
import { 
  ExternalLink, CheckCircle2, Circle, Sparkles, 
  Calendar, CheckSquare, DollarSign, Play
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { soundManager } from '../utils/audio';
import { GithubIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

interface QuestLogProps {
  onGainXp: (amount: number) => void;
}

export const QuestLog: React.FC<QuestLogProps> = ({ onGainXp }) => {
  const [completedObjectives, setCompletedObjectives] = useState<Record<string, boolean>>({});

  const toggleObjective = (projId: string, index: number) => {
    soundManager.playSelect();
    const key = `${projId}-${index}`;
    const nextState = !completedObjectives[key];
    setCompletedObjectives(prev => ({ ...prev, [key]: nextState }));

    if (nextState) {
      onGainXp(20);
      try {
        confetti({
          particleCount: 25,
          spread: 45,
          origin: { y: 0.8 },
          colors: ['#2563EB', '#14B8A6', '#F59E0B']
        });
      } catch {
        // Ignore if unavailable
      }
    }
  };

  const handleLiveClick = (url: string) => {
    soundManager.playLevelUp();
    onGainXp(30);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="quests" className="py-16 md:py-28 bg-white border-b border-[#CBD5E1] pixel-grid-pattern relative">
      
      {/* Ambient Pixel Accent Markers */}
      <div className="absolute top-6 left-6 w-3 h-3 border-t-2 border-l-2 border-[#2563EB] hidden sm:block" />
      <div className="absolute top-6 right-6 w-3 h-3 border-t-2 border-r-2 border-[#14B8A6] hidden sm:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8FAFC] border-2 border-[#CBD5E1] text-[10px] font-['Press_Start_2P'] text-[#2563EB] mb-3 shadow-[2px_2px_0px_#CBD5E1]">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>PRIMARY QUEST LOG</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Featured Main Quests
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#64748B]">
            Two full-stack production web applications built, verified, and deployed live.
          </p>
        </div>

        {/* Major Featured Project Cards */}
        <div className="space-y-16 lg:space-y-24">
          {FEATURED_PROJECTS.map((project) => {
            const isDaydream = project.id === 'daydream';

            return (
              <div
                key={project.id}
                className="pixel-card bg-white border-2 border-[#CBD5E1] shadow-[6px_6px_0px_#CBD5E1] p-6 sm:p-8 lg:p-10 relative group hover:border-[#2563EB] transition-all"
              >
                {/* Top Quest Header Ribbon */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b-2 border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="font-['Press_Start_2P'] text-xs sm:text-sm text-[#2563EB] bg-blue-50 px-3 py-1 border border-blue-200">
                      {project.questNumber}
                    </span>
                    <span className="font-mono text-xs text-[#64748B] font-semibold uppercase">
                      {project.category}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="font-['Press_Start_2P'] text-[9px] px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-300">
                      ● {project.badgeText}
                    </span>
                  </div>
                </div>

                {/* 2-Column Content: Left Details & Right Interactive Preview Area */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  
                  {/* Left Column: Project Overview & Objectives (7 Cols) */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base font-mono font-semibold text-[#2563EB] mt-1">
                        {project.subtitle}
                      </p>
                      <p className="text-sm text-[#64748B] mt-3 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Verified Quick Stats Bar */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
                      {project.stats.map((st) => (
                        <div key={st.label} className="p-2.5 bg-[#F8FAFC] border border-[#CBD5E1]">
                          <span className="text-[10px] text-[#64748B] block uppercase">{st.label}</span>
                          <span className="font-bold text-[#0F172A] text-xs sm:text-sm">{st.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Core Architectural Features */}
                    <div className="space-y-2">
                      <span className="text-xs font-mono font-bold text-[#0F172A] uppercase tracking-wider block">
                        Key Features & Capabilities:
                      </span>
                      <ul className="space-y-2 text-xs sm:text-sm text-[#0F172A]">
                        {project.coreHighlights.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 bg-[#F8FAFC] p-2.5 border border-slate-200">
                            <span className="w-1.5 h-1.5 bg-[#2563EB] shrink-0 mt-2" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Interactive Objectives Checklist */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-[#0F172A] uppercase tracking-wider">
                          Quest Objectives (Click to test progress):
                        </span>
                        <span className="text-[10px] font-mono text-[#2563EB]">+20 EXP per objective</span>
                      </div>
                      
                      <div className="space-y-2">
                        {project.objectives.map((obj, oIdx) => {
                          const isDone = completedObjectives[`${project.id}-${oIdx}`];

                          return (
                            <div
                              key={oIdx}
                              onClick={() => toggleObjective(project.id, oIdx)}
                              className={`p-3 border transition-all cursor-pointer flex items-start gap-3 ${
                                isDone 
                                  ? 'bg-emerald-50/70 border-emerald-300' 
                                  : 'bg-white border-[#CBD5E1] hover:border-[#2563EB]'
                              }`}
                            >
                              <button
                                aria-label="Toggle Objective"
                                className="mt-0.5 shrink-0 text-slate-400"
                              >
                                {isDone ? (
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                ) : (
                                  <Circle className="w-4 h-4 text-[#CBD5E1]" />
                                )}
                              </button>
                              <div className="text-xs">
                                <span className={`font-mono font-bold block ${isDone ? 'text-emerald-800 line-through' : 'text-[#0F172A]'}`}>
                                  {obj.title}
                                </span>
                                <p className="text-[#64748B] text-[11px] mt-0.5">
                                  {obj.detail}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Tech Stack Badges */}
                    <div>
                      <span className="text-xs font-mono font-bold text-[#0F172A] uppercase tracking-wider block mb-2">
                        Technology Stack:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-white border border-[#CBD5E1] text-xs font-mono font-semibold text-[#0F172A] shadow-[1px_1px_0px_#CBD5E1]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons (Live Link + GitHub) */}
                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => handleLiveClick(project.liveUrl)}
                        className="pixel-btn-primary px-5 py-3 text-xs sm:text-sm font-mono flex items-center gap-2"
                      >
                        <span>LAUNCH LIVE APP</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundManager.playBlip(550)}
                        className="pixel-btn-secondary px-4 py-3 text-xs sm:text-sm font-mono flex items-center gap-2"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>VIEW REPO</span>
                      </a>
                    </div>

                  </div>

                  {/* Right Column: High-Fidelity Interactive Preview Area (5 Cols) */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="pixel-card bg-[#F8FAFC] border-2 border-[#CBD5E1] p-4 relative overflow-hidden">
                      
                      {/* Browser Mockup Chrome Header */}
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 bg-red-400 rounded-full inline-block" />
                          <span className="w-2.5 h-2.5 bg-amber-400 rounded-full inline-block" />
                          <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full inline-block" />
                        </div>
                        <span className="font-mono text-[10px] text-[#64748B] bg-white px-2 py-0.5 border border-slate-200 truncate max-w-[200px]">
                          {project.liveUrl.replace('https://', '')}
                        </span>
                        <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                      </div>

                      {/* Project 1: Daydream UI Mockup Representation */}
                      {isDaydream ? (
                        <div className="bg-white border border-[#CBD5E1] p-4 space-y-4 font-mono text-xs">
                          
                          {/* Mockup Header Tabs */}
                          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                              <span className="w-6 h-6 bg-[#2563EB] text-white flex items-center justify-center font-bold text-[10px]">
                                D
                              </span>
                              <span className="font-bold text-[#0F172A] text-xs">DayDream v2.4</span>
                            </div>
                            <span className="text-[10px] bg-blue-50 text-[#2563EB] px-2 py-0.5 border border-blue-200">
                              Neon PostgreSQL
                            </span>
                          </div>

                          {/* 4 Core Hub Indicators */}
                          <div className="grid grid-cols-2 gap-2 text-[11px]">
                            <div className="p-2 bg-blue-50/60 border border-blue-200">
                              <div className="flex items-center gap-1 font-bold text-[#2563EB] mb-1">
                                <Sparkles className="w-3 h-3" />
                                <span>BucketList</span>
                              </div>
                              <span className="text-[10px] text-slate-600 block">Milestones & Confetti</span>
                            </div>

                            <div className="p-2 bg-teal-50/60 border border-teal-200">
                              <div className="flex items-center gap-1 font-bold text-[#14B8A6] mb-1">
                                <Calendar className="w-3 h-3" />
                                <span>Calendar</span>
                              </div>
                              <span className="text-[10px] text-slate-600 block">Month & Agenda Views</span>
                            </div>

                            <div className="p-2 bg-amber-50/60 border border-amber-200">
                              <div className="flex items-center gap-1 font-bold text-[#F59E0B] mb-1">
                                <CheckSquare className="w-3 h-3" />
                                <span>To-Do List</span>
                              </div>
                              <span className="text-[10px] text-slate-600 block">Strict Date Isolation</span>
                            </div>

                            <div className="p-2 bg-purple-50/60 border border-purple-200">
                              <div className="flex items-center gap-1 font-bold text-purple-600 mb-1">
                                <DollarSign className="w-3 h-3" />
                                <span>Expenses (₹)</span>
                              </div>
                              <span className="text-[10px] text-slate-600 block">Monthly Spend In INR</span>
                            </div>
                          </div>

                          {/* Simulated Live Goal Item */}
                          <div className="p-2.5 bg-slate-50 border border-slate-200 space-y-1">
                            <div className="flex justify-between items-center text-[10px]">
                              <span className="text-slate-500">ACTIVE GOAL</span>
                              <span className="text-[#2563EB] font-bold">IN PROGRESS</span>
                            </div>
                            <span className="font-bold text-[#0F172A] block text-xs">
                              Build and launch production web apps
                            </span>
                            <div className="w-full h-1.5 bg-slate-200 overflow-hidden mt-1">
                              <div className="h-full bg-[#2563EB] w-4/5" />
                            </div>
                          </div>

                          {/* Rupee Expense Stat Mock */}
                          <div className="flex items-center justify-between p-2 bg-slate-50 border border-slate-200 text-[11px]">
                            <span className="text-slate-600">Monthly Budget Tracked:</span>
                            <span className="font-bold text-emerald-700">₹14,500.00 / mo</span>
                          </div>

                        </div>
                      ) : (
                        /* Project 2: SkillQuest UI Mockup Representation */
                        <div className="bg-[#FAF6EE] border border-[#D8CCB5] p-4 space-y-4 font-mono text-xs">
                          
                          {/* Mockup Header */}
                          <div className="flex items-center justify-between pb-2 border-b border-[#D8CCB5]">
                            <div className="flex items-center gap-2">
                              <span className="w-6 h-6 bg-[#3A5A40] text-[#D4A24C] flex items-center justify-center font-bold text-[10px]">
                                ⚔️
                              </span>
                              <span className="font-bold text-[#2B2118] text-xs">SkillQuest RPG</span>
                            </div>
                            <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 border border-emerald-300">
                              Gemini 2.5 Flash
                            </span>
                          </div>

                          {/* 4 RPG Zones Visual Path */}
                          <div className="space-y-2">
                            <span className="text-[10px] font-['Press_Start_2P'] text-[#3A5A40] block">
                              4-ZONE QUEST CHAIN
                            </span>
                            
                            <div className="space-y-1.5 text-[11px]">
                              <div className="p-2 bg-white border border-[#D8CCB5] flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                  <span>🏡</span>
                                  <span className="font-bold text-[#2B2118]">Zone 1: Village of Fundamentals</span>
                                </div>
                                <span className="text-[10px] text-emerald-700 font-bold">COMPLETED ✅</span>
                              </div>

                              <div className="p-2 bg-amber-50 border border-amber-300 flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                  <span>🌲</span>
                                  <span className="font-bold text-[#2B2118]">Zone 2: Forest of Practical App</span>
                                </div>
                                <span className="text-[10px] text-amber-700 font-bold">AVAILABLE ⚔️</span>
                              </div>

                              <div className="p-2 bg-[#F1EADC] border border-[#D8CCB5] flex items-center justify-between opacity-75">
                                <div className="flex items-center gap-1.5">
                                  <span>⛰️</span>
                                  <span className="text-slate-700">Zone 3: Mountain of Mastery</span>
                                </div>
                                <span className="text-[10px] text-slate-500">LOCKED 🔒</span>
                              </div>

                              <div className="p-2 bg-[#F1EADC] border border-[#D8CCB5] flex items-center justify-between opacity-75">
                                <div className="flex items-center gap-1.5">
                                  <span>🏰</span>
                                  <span className="text-slate-700">Zone 4: Citadel & Final Boss</span>
                                </div>
                                <span className="text-[10px] text-slate-500">LOCKED 🔒</span>
                              </div>
                            </div>
                          </div>

                          {/* Loot & XP Feedback */}
                          <div className="p-2 bg-white border border-[#D8CCB5] flex items-center justify-between text-[11px]">
                            <span className="text-slate-600">Educational Loot:</span>
                            <span className="font-bold text-[#D4A24C]">Docs + Guides + XP</span>
                          </div>

                        </div>
                      )}

                      {/* Launch CTA Overlay Button inside preview */}
                      <button
                        onClick={() => handleLiveClick(project.liveUrl)}
                        className="mt-3 w-full py-2 bg-white hover:bg-blue-50 border border-[#CBD5E1] text-[#2563EB] text-xs font-mono font-semibold flex items-center justify-center gap-2 shadow-[1px_1px_0px_#CBD5E1]"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>OPEN LIVE DEMO ({project.title.toUpperCase()})</span>
                      </button>

                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

