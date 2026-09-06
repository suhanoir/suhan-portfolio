import React from 'react';
import { User, GraduationCap, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, ACADEMIC_RECORDS } from '../data/portfolioData';
import { soundManager } from '../utils/audio';

interface AboutProfileProps {
  onGainXp: (amount: number) => void;
}

export const AboutProfile: React.FC<AboutProfileProps> = ({ onGainXp }) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white border-b border-[#CBD5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8FAFC] border border-[#CBD5E1] text-[10px] font-['Press_Start_2P'] text-[#2563EB] mb-3">
            <User className="w-3.5 h-3.5" />
            <span>PLAYER PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Character Profile & Progression
          </h2>
          <p className="mt-3 text-base text-[#64748B]">
            A developer who values clean code, responsive layouts, and disciplined execution.
          </p>
        </div>

        {/* 2-Column Grid: Character Sheet & Academic Progression */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: RPG Character Dossier (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="pixel-card p-6 border-2 border-[#CBD5E1]">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-[#2563EB]" />
                  <span className="font-['Press_Start_2P'] text-xs text-[#0F172A]">
                    DOSSIER // SUHAN RAJ M
                  </span>
                </div>
                <span className="font-mono text-xs text-[#64748B]">
                  VERIFIED IDENTIFIER
                </span>
              </div>

              {/* Bio Narrative */}
              <div className="space-y-4 text-sm text-[#0F172A] leading-relaxed">
                <p>
                  I am a <strong>Computer Science student</strong> (Graduating in <strong>2029</strong>) and 
                  <strong> Full Stack Developer</strong> based in India. I focus on building reliable, modern web applications 
                  that solve practical, everyday workflows.
                </p>
                <p className="text-[#64748B]">
                  My primary focus is full-stack web architecture with <strong>Next.js</strong>, <strong>React 19</strong>, 
                  <strong>TypeScript</strong>, and <strong>Prisma ORM</strong>. I have authored and deployed two major applications: 
                  <strong> Daydream</strong> (a unified personal life hub) and <strong>SkillQuest</strong> (an AI-powered RPG learning journey).
                </p>
              </div>

              {/* Attribute Grid */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3 bg-[#F8FAFC] border border-[#CBD5E1]">
                  <span className="text-[#64748B] block text-[11px]">PRIMARY ROLE</span>
                  <span className="font-bold text-[#0F172A]">Full Stack Developer</span>
                </div>
                <div className="p-3 bg-[#F8FAFC] border border-[#CBD5E1]">
                  <span className="text-[#64748B] block text-[11px]">EXPECTED GRADUATION</span>
                  <span className="font-bold text-[#2563EB]">2029</span>
                </div>
                <div className="p-3 bg-[#F8FAFC] border border-[#CBD5E1]">
                  <span className="text-[#64748B] block text-[11px]">CORE DEGREE</span>
                  <span className="font-bold text-[#0F172A]">B.Tech Computer Science</span>
                </div>
                <div className="p-3 bg-[#F8FAFC] border border-[#CBD5E1]">
                  <span className="text-[#64748B] block text-[11px]">PRIMARY INTERESTS</span>
                  <span className="font-bold text-[#14B8A6]">Web Apps & AI Integration</span>
                </div>
              </div>

              {/* Engineering Principles */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <span className="text-xs font-mono font-bold text-[#0F172A] uppercase tracking-wider block mb-3">
                  Development Philosophy
                </span>
                <ul className="space-y-2 text-xs text-[#64748B]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                    <span><strong>User-First Design:</strong> Fast load times, responsive layouts, and zero unnecessary bloat.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                    <span><strong>Strict Data Integrity:</strong> Type-safe Prisma schemas, isolated server-side queries, and secure session management.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span><strong>Continuous Iteration:</strong> Learning through shipping functional products to real production environments.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Column 2: Academic Progression Panel (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="pixel-card p-6 border-2 border-[#CBD5E1] bg-[#F8FAFC]">
              
              <div className="flex items-center justify-between pb-3 border-b border-[#CBD5E1] mb-4">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#2563EB]" />
                  <span className="font-['Press_Start_2P'] text-[10px] text-[#0F172A]">
                    ACADEMIC LOG
                  </span>
                </div>
                <span className="font-mono text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                  CONSISTENT 9.0+
                </span>
              </div>

              <p className="text-xs text-[#64748B] mb-5">
                Demonstrated strong academic consistency alongside self-directed software development.
              </p>

              {/* Progression Bars */}
              <div className="space-y-4">
                {ACADEMIC_RECORDS.map((record, index) => {
                  let percent = 90;
                  if (record.stage === 'SEM 01') percent = 95;
                  if (record.stage === 'SEM 02') percent = 90;
                  if (record.stage === '12TH GRADE') percent = 86;
                  if (record.stage === '10TH GRADE') percent = 92;

                  return (
                    <div
                      key={record.stage}
                      onClick={() => {
                        soundManager.playBlip(500 + index * 50);
                        onGainXp(10);
                      }}
                      className="bg-white p-3.5 border border-[#CBD5E1] shadow-[2px_2px_0px_#E2E8F0] hover:border-[#2563EB] cursor-pointer transition-all group"
                    >
                      <div className="flex justify-between items-center mb-1.5 font-mono">
                        <span className="font-bold text-xs text-[#0F172A] group-hover:text-[#2563EB]">
                          {record.stage}
                        </span>
                        <span className="font-['Press_Start_2P'] text-[11px] text-[#2563EB]">
                          {record.score}
                        </span>
                      </div>
                      
                      <div className="w-full h-2 bg-slate-100 border border-slate-200 overflow-hidden mb-1.5">
                        <div
                          className="h-full bg-gradient-to-r from-[#2563EB] to-[#14B8A6] transition-all duration-500"
                          style={{ width: `${percent}%` }}
                        />
                      </div>

                      <div className="flex justify-between items-center text-[10px] text-[#64748B]">
                        <span>{record.detail}</span>
                        <span className="text-emerald-600 font-semibold font-mono">VERIFIED</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Target / Goal Callout */}
              <div className="mt-5 p-3.5 bg-blue-50 border border-blue-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-['Press_Start_2P'] text-[#2563EB] block mb-1">
                    CURRENT OBJECTIVE
                  </span>
                  <span className="text-xs font-mono font-semibold text-[#0F172A]">
                    {PERSONAL_INFO.target}
                  </span>
                </div>
                <div className="w-2.5 h-2.5 bg-[#2563EB] animate-ping" />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

