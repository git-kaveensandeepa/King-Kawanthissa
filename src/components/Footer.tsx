import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-6xl mx-auto px-4 sm:px-6 my-10 relative z-10">
      <div className="glass-panel rounded-3xl p-6 sm:p-9 shadow-sm border border-white/70">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Brand */}
          <div className="font-serif-display font-semibold text-[16px] text-emerald-950 tracking-[0.5px]">
            කාවන්තිස්ස
            <span className="block font-sans text-[10.5px] font-normal text-emerald-800/60 uppercase tracking-[2px] mt-1">
              හස්තිරාජයා · 2008–2026
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center items-center gap-6 text-[12.5px] font-medium text-emerald-900/80">
            <a href="#facts" className="hover:text-emerald-950 transition-colors">විස්තර</a>
            <a href="#life" className="hover:text-emerald-950 transition-colors">ජීවිත කතාව</a>
            <a href="#timeline" className="hover:text-emerald-950 transition-colors">කාලරේඛාව</a>
            <a href="#gallery" className="hover:text-emerald-950 transition-colors">ඡායාරූප</a>
          </nav>

          {/* Copyright & Credit */}
          <div className="text-[11.5px] text-emerald-800/60">
            සාදන ලද්දේ <span className="font-medium text-emerald-950">Kaveen Sandeepa</span> · © {currentYear}
          </div>
        </div>
      </div>
    </footer>
  );
};
