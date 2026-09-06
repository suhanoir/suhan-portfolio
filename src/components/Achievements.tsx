import React from 'react';
import { Award, CheckCircle, Sparkles, Shield, Rocket, GraduationCap, Cpu } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { soundManager } from '../utils/audio';

interface AchievementsProps {
  onGainXp: (amount: number) => void;
}

export const Achievements: React.FC<AchievementsProps> = ({ onGainXp }) => {
  const getIcon = (code: string) => {
    switch (code) {
      case 'ACH_01': return <Rocket className="w-5 h-5 text-[#2563EB]" />;
      case 'ACH_02': return <GraduationCap className="w-5 h-5 text-emerald-600" />;
      case 'ACH_03': return <Shield className="w-5 h-5 text-[#14B8A6]" />;
      case 'ACH_04': return <Cpu className="w-5 h-5 text-purple-600" />;
      case 'ACH_05': return <Award className="w-5 h-5 text-[#F59E0B]" />;
      default: return <Sparkles className="w-5 h-5 text-[#2563EB]" />;
    }
  };

  return (
    <section id="achievements" className="py-16 md:py-24 bg-[#F8FAFC] border-b border-[#CBD5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#CBD5E1] text-[10px] font-['Press_Start_2P'] text-[#2563EB] mb-3 shadow-[1px_1px_0px_#CBD5E1]">
            <Award className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>PORTFOLIO MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Verified Achievements
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#64748B]">
            Genuine development milestones and academic performance records.
          </p>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ACHIEVEMENTS.map((ach, idx) => (
            <div
              key={ach.id}
              onClick={() => {
                soundManager.playBlip(550 + idx * 50);
                onGainXp(15);
              }}
              className="pixel-card bg-white p-5 border border-[#CBD5E1] hover:border-[#2563EB] cursor-pointer transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge & Code */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                  <div className="p-2 bg-[#F8FAFC] border border-[#CBD5E1] group-hover:scale-105 transition-transform">
                    {getIcon(ach.code)}
                  </div>
                  <span className="font-['Press_Start_2P'] text-[8px] px-2 py-0.5 bg-blue-50 text-[#2563EB] border border-blue-200">
                    {ach.badge}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-1 font-mono text-[11px] text-[#64748B]">
                  <span>{ach.code}</span>
                  <span>•</span>
                  <span>{ach.category}</span>
                </div>

                <h3 className="text-base font-bold text-[#0F172A] mb-2 group-hover:text-[#2563EB] transition-colors">
                  {ach.title}
                </h3>

                <p className="text-xs text-[#64748B] leading-relaxed">
                  {ach.description}
                </p>
              </div>

              {/* Verified Status Tag */}
              <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#64748B]">{ach.date}</span>
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>UNLOCKED</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

