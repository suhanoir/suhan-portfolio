import React, { useState } from 'react';
import { Copy, Check, Send, Sparkles, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundManager } from '../utils/audio';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface ContactQuestProps {
  onGainXp: (amount: number) => void;
}

export const ContactQuest: React.FC<ContactQuestProps> = ({ onGainXp }) => {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  const handleCopyEmail = () => {
    soundManager.playSelect();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    onGainXp(20);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendDraft = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playLevelUp();
    onGainXp(40);
    setFormSent(true);

    const subject = encodeURIComponent(`Quest Proposal from ${senderName || 'Recruiter/Developer'}`);
    const body = encodeURIComponent(`Hi Suhan,\n\n${message}\n\nFrom: ${senderName} (${senderEmail})`);
    
    // Open user's default email client
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 md:py-28 bg-white border-b border-[#CBD5E1] pixel-grid-pattern relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8FAFC] border-2 border-[#CBD5E1] text-[10px] font-['Press_Start_2P'] text-[#2563EB] mb-3 shadow-[2px_2px_0px_#CBD5E1]">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>FINAL QUEST</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            START A QUEST WITH ME
          </h2>
          <p className="mt-3 text-base text-[#64748B]">
            Seeking internship opportunities, campus placements, and full-stack software development collaborations.
          </p>
        </div>

        {/* 2-Column Contact Card */}
        <div className="pixel-card bg-white border-2 border-[#CBD5E1] shadow-[6px_6px_0px_#CBD5E1] p-6 sm:p-10">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Direct Communication Channels (5 Cols) */}
            <div className="md:col-span-5 space-y-6">
              <div>
                <span className="font-['Press_Start_2P'] text-[10px] text-[#2563EB] block mb-1">
                  DIRECT CHANNELS
                </span>
                <h3 className="text-xl font-bold text-[#0F172A]">
                  Let's Connect
                </h3>
                <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                  Feel free to reach out directly via email or connect on LinkedIn and GitHub.
                </p>
              </div>

              {/* Email Card with 1-Click Copy */}
              <div className="p-4 bg-[#F8FAFC] border border-[#CBD5E1] space-y-2">
                <span className="text-[10px] font-mono text-[#64748B] font-semibold block uppercase">
                  Primary Email
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-mono text-xs sm:text-sm font-bold text-[#2563EB] hover:underline truncate"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy Email Address"
                    className="p-1.5 bg-white border border-[#CBD5E1] text-[#0F172A] hover:text-[#2563EB] shadow-[1px_1px_0px_#CBD5E1] active:translate-y-0.5 shrink-0"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copied && (
                  <span className="text-[10px] font-mono text-emerald-600 font-bold block">
                    Copied to clipboard! (+20 EXP)
                  </span>
                )}
              </div>

              {/* Verified Profile Links */}
              <div className="space-y-2">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playBlip(600)}
                  className="p-3 bg-white hover:bg-slate-50 border border-[#CBD5E1] hover:border-[#2563EB] flex items-center justify-between shadow-[2px_2px_0px_#E2E8F0] transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-[#2563EB]" />
                    <span className="text-xs font-mono font-bold text-[#0F172A] group-hover:text-[#2563EB]">
                      LinkedIn Profile
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#64748B]">/in/suhanoirr</span>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playBlip(600)}
                  className="p-3 bg-white hover:bg-slate-50 border border-[#CBD5E1] hover:border-[#0F172A] flex items-center justify-between shadow-[2px_2px_0px_#E2E8F0] transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-[#0F172A]" />
                    <span className="text-xs font-mono font-bold text-[#0F172A]">
                      GitHub Repositories
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#64748B]">@suhanoir</span>
                </a>
              </div>

              {/* Availability Notice */}
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-xs font-mono">
                <div className="flex items-center gap-2 text-emerald-800 font-bold mb-1">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                  <span>CURRENT AVAILABILITY</span>
                </div>
                <span className="text-emerald-700 text-[11px]">
                  Ready for summer 2025/2026 internships and software engineering placements.
                </span>
              </div>

            </div>

            {/* Right Column: Quick Message Form (7 Cols) */}
            <div className="md:col-span-7 bg-[#F8FAFC] p-5 sm:p-6 border border-[#CBD5E1]">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#2563EB]" />
                  <span className="font-['Press_Start_2P'] text-[9px] text-[#0F172A]">
                    QUEST DISPATCH
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#64748B]">
                  DIRECT INBOX ROUTING
                </span>
              </div>

              <form onSubmit={handleSendDraft} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-[#0F172A] mb-1">
                    Your Name / Company
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Hiring Manager / Tech Lead"
                    className="w-full px-3 py-2 bg-white border border-[#CBD5E1] text-xs font-mono text-[#0F172A] focus:outline-none focus:border-[#2563EB] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.05)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#0F172A] mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-3 py-2 bg-white border border-[#CBD5E1] text-xs font-mono text-[#0F172A] focus:outline-none focus:border-[#2563EB] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.05)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#0F172A] mb-1">
                    Message / Opportunity Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="We'd like to interview you for an internship / discuss a full-stack project..."
                    className="w-full px-3 py-2 bg-white border border-[#CBD5E1] text-xs font-mono text-[#0F172A] focus:outline-none focus:border-[#2563EB] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.05)]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full pixel-btn-primary py-3 text-xs sm:text-sm font-mono tracking-wider flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>LET'S BUILD SOMETHING</span>
                </button>

                {formSent && (
                  <p className="text-center text-xs font-mono text-emerald-600 font-bold pt-1">
                    Opening your default mail client to dispatch this message!
                  </p>
                )}
              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

