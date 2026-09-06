import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundManager } from '../utils/audio';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundManager.playBlip(700);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] text-white py-12 border-t-4 border-[#2563EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          {/* Logo & Role */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#2563EB] text-white flex items-center justify-center border border-blue-400 font-['Press_Start_2P'] text-xs">
              S
            </div>
            <div>
              <span className="font-bold text-sm tracking-wider font-mono block">
                SUHAN RAJ M
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Full Stack Developer • Computer Science Class of 2029
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#38BDF8] transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-slate-400 hover:text-[#F59E0B] transition-colors"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>

            <button
              onClick={scrollToTop}
              title="Return to top"
              className="ml-2 p-2 bg-slate-800 hover:bg-[#2563EB] text-white border border-slate-700 transition-colors flex items-center gap-1.5 text-xs font-mono"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">TOP</span>
            </button>
          </div>

        </div>

        {/* Bottom Credits & Ratio Note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            <span>© {new Date().getFullYear()} Suhan Raj M. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-400 rounded-full" />
            <span>Built with React 19, TypeScript & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

