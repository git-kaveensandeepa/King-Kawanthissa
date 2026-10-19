import React from 'react';

export const LegacySection: React.FC = () => {
  return (
    <section id="legacy" className="max-w-4xl mx-auto px-4 sm:px-6 py-16 relative z-10">
      <div className="glass-panel-strong rounded-3xl p-8 sm:p-14 shadow-lg border border-white/80 text-center hover:shadow-xl transition-all duration-300">
        <p className="font-serif-display italic text-lg sm:text-2xl md:text-[23px] font-normal text-emerald-950 mb-5 leading-relaxed max-w-2xl mx-auto">
          &ldquo;කාවන්තිස්ස අපෙන් සමුගත්තත්, ඔහුගේ මතකය අපගේ හදවත්වල සදා රැඳී පවතිනු ඇත. ඔහු අපට උගන්වා ගිය ආදරය, කරුණාව සහ නිහතමානීකම අපගේ ජීවිතයට ආලෝකයක් එකතු කළේය. ඔහුගේ මරණය නිශ්ඵල නොවී, අනාගත වන සතුන් ආරක්ෂා කිරීමට හේතුවක් වේවා.&rdquo;
        </p>

        <p className="font-sans text-[11.5px] font-semibold text-emerald-800/60 uppercase tracking-[3px]">
          — කාවන්තිස්ස සිහිකරමින් —
        </p>
      </div>
    </section>
  );
};
