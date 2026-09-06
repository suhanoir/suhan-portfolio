import React, { useState } from 'react';
import { 
  GitBranch, Code2, Globe, FileCode2, Palette, Layout, Server, Cpu, 
  ShieldCheck, Layers, Database, HardDrive, Sparkles, Terminal, 
  Compass, Cloud, ChevronRight
} from 'lucide-react';
import { SKILL_NODES, SKILL_TREE_CATEGORIES, SkillNode } from '../data/portfolioData';
import { soundManager } from '../utils/audio';

interface SkillTreeProps {
  onGainXp: (amount: number) => void;
}

export const SkillTree: React.FC<SkillTreeProps> = ({ onGainXp }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeSkill, setActiveSkill] = useState<SkillNode>(SKILL_NODES[0]);

  const filteredSkills = selectedCategory === 'all' 
    ? SKILL_NODES 
    : SKILL_NODES.filter(s => s.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-[#2563EB]" />;
      case 'Globe': return <Globe className="w-5 h-5 text-[#2563EB]" />;
      case 'FileCode2': return <FileCode2 className="w-5 h-5 text-[#2563EB]" />;
      case 'Palette': return <Palette className="w-5 h-5 text-[#14B8A6]" />;
      case 'Layout': return <Layout className="w-5 h-5 text-[#14B8A6]" />;
      case 'Server': return <Server className="w-5 h-5 text-[#2563EB]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#2563EB]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#F59E0B]" />;
      case 'Database': return <Database className="w-5 h-5 text-[#F59E0B]" />;
      case 'HardDrive': return <HardDrive className="w-5 h-5 text-[#F59E0B]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-purple-600" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-slate-800" />;
      case 'Compass': return <Compass className="w-5 h-5 text-slate-800" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-[#64748B]" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-[#2563EB]" />;
      default: return <Code2 className="w-5 h-5 text-[#2563EB]" />;
    }
  };

  const handleSelectSkill = (skill: SkillNode) => {
    soundManager.playSelect();
    setActiveSkill(skill);
    onGainXp(15);
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-[#F8FAFC] border-b border-[#CBD5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#CBD5E1] text-[10px] font-['Press_Start_2P'] text-[#2563EB] mb-3 shadow-[1px_1px_0px_#CBD5E1]">
            <GitBranch className="w-3.5 h-3.5" />
            <span>ABILITY MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Developer Skill Tree
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#64748B]">
            Authentic, verified technologies implemented across my production projects and coursework.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => {
              soundManager.playBlip(500);
              setSelectedCategory('all');
            }}
            className={`px-3 py-1.5 text-xs font-mono font-semibold border transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#2563EB] text-white border-[#1D4ED8] shadow-[2px_2px_0px_#1E40AF]'
                : 'bg-white text-[#0F172A] border-[#CBD5E1] hover:border-[#2563EB]'
            }`}
          >
            ALL ABILITIES ({SKILL_NODES.length})
          </button>

          {SKILL_TREE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                soundManager.playBlip(550);
                setSelectedCategory(cat.id);
              }}
              className={`px-3 py-1.5 text-xs font-mono font-semibold border transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#0F172A] text-white border-black shadow-[2px_2px_0px_#334155]'
                  : 'bg-white text-[#64748B] hover:text-[#0F172A] border-[#CBD5E1] hover:border-[#0F172A]'
              }`}
            >
              {cat.name.toUpperCase()}
            </button>
          ))}
        </div>

        {/* 2-Column Layout: Skill Tree Matrix + Active Node Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Skill Nodes Grid (8 Cols) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {filteredSkills.map((skill) => {
                const isSelected = activeSkill.id === skill.id;

                return (
                  <div
                    key={skill.id}
                    onClick={() => handleSelectSkill(skill)}
                    className={`pixel-card p-4 cursor-pointer relative transition-all ${
                      isSelected 
                        ? 'border-2 border-[#2563EB] bg-blue-50/40 shadow-[4px_4px_0px_#93C5FD] translate-x-0.5 -translate-y-0.5' 
                        : 'border border-[#CBD5E1] bg-white hover:border-[#2563EB]'
                    }`}
                  >
                    {/* Top Node Meta */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-2 bg-[#F8FAFC] border border-[#CBD5E1] group-hover:scale-105 transition-transform">
                        {getIcon(skill.iconName)}
                      </div>
                      <span className="font-['Press_Start_2P'] text-[8px] px-1.5 py-0.5 bg-slate-100 text-[#2563EB] border border-slate-200">
                        LVL {skill.level}/5
                      </span>
                    </div>

                    {/* Skill Title */}
                    <h3 className="font-bold text-sm text-[#0F172A] mb-1">
                      {skill.name}
                    </h3>

                    {/* Category Label */}
                    <span className="text-[11px] font-mono text-[#64748B] block mb-2 uppercase">
                      {skill.category}
                    </span>

                    {/* Mini Progress Dots */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 flex-1 ${
                            i < skill.level ? 'bg-[#2563EB]' : 'bg-slate-200'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Active Selection Indicator */}
                    {isSelected && (
                      <div className="absolute top-1 right-1 w-2 h-2 bg-[#2563EB]" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active Node Inspector (4 Cols) */}
          <div className="lg:col-span-4">
            <div className="pixel-card p-6 border-2 border-[#2563EB] bg-white shadow-[4px_4px_0px_#93C5FD] sticky top-24">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-blue-50 border border-blue-200">
                    {getIcon(activeSkill.iconName)}
                  </div>
                  <span className="font-['Press_Start_2P'] text-[9px] text-[#2563EB]">
                    ABILITY INSPECTOR
                  </span>
                </div>
                <span className="font-mono text-xs px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                  UNLOCKED
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-bold text-[#0F172A]">
                    {activeSkill.name}
                  </h4>
                  <span className="text-xs font-mono text-[#64748B] uppercase">
                    Category: {activeSkill.category}
                  </span>
                </div>

                <div className="p-3 bg-[#F8FAFC] border border-[#CBD5E1]">
                  <span className="text-[10px] font-['Press_Start_2P'] text-[#64748B] block mb-1">
                    MASTERY RATING
                  </span>
                  <div className="flex items-center justify-between font-mono text-xs font-bold text-[#0F172A] mb-1.5">
                    <span>Proficiency</span>
                    <span>{activeSkill.level * 20}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#2563EB] to-[#14B8A6]"
                      style={{ width: `${activeSkill.level * 20}%` }}
                    />
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono font-bold text-[#0F172A] block mb-1">
                    Technical Scope:
                  </span>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {activeSkill.description}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-mono font-bold text-[#0F172A] block mb-2">
                    Verified In Projects:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeSkill.highlightIn.map((proj) => (
                      <span
                        key={proj}
                        className="px-2 py-0.5 bg-slate-100 border border-[#CBD5E1] text-[11px] font-mono text-[#0F172A]"
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#quests"
                    onClick={() => soundManager.playBlip(600)}
                    className="w-full pixel-btn-primary py-2 text-xs font-mono flex items-center justify-center gap-1.5"
                  >
                    <span>VIEW IN QUEST LOG</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

