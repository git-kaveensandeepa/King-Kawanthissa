import React from 'react';
import { HERO_IMAGE } from '../data/memorialData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Text & Badges */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 text-[11px] font-semibold text-emerald-700 uppercase tracking-[5px] mb-4">
            <span className="w-10 h-[1px] bg-emerald-600"></span>
            <span>සිහිකැඳවීම · In Memoriam</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-emerald-950 tracking-tight leading-[1.0] mb-3">
            කාවන්තිස්ස
          </h1>

          {/* Lifespan & Origin */}
          <p className="font-serif-body italic text-base sm:text-lg text-emerald-800/70 mb-6 tracking-wide">
            2008 – 16 October 2026 · Galgamuwa, Sri Lanka
          </p>

          {/* Lede Paragraph */}
          <p className="font-serif-body text-base sm:text-lg leading-relaxed text-emerald-950/85 mb-8 max-w-xl">
            ශ්‍රී ලංකාවේ උසම සහ දැවැන්තම වන අලියා ලෙස සැලකුණු කාවන්තිස්ස හස්තිරාජයා, 2026 ඔක්තෝබර් 16 වනදා සවස 6.18 ට අපෙන් සමුත්තේය. ටොන් 5.5කට වැඩි බරකින් හා අඩි 6කට වැඩි දළ යුගලකින් හෙබි ඔහු, කිසිදා කිසිවෙකුට හිංසාවක් නොකළ ශාන්ත හස්තිරාජයෙකි.
          </p>

          {/* Chips */}
          <div className="flex flex-wrap gap-2.5">
            <span className="glass-panel px-4 py-2 rounded-full text-[12.5px] font-medium text-emerald-900 shadow-sm">
              <strong className="text-emerald-950 font-bold">අඩි 11</strong> උස
            </span>
            <span className="glass-panel px-4 py-2 rounded-full text-[12.5px] font-medium text-emerald-900 shadow-sm">
              <strong className="text-emerald-950 font-bold">ටොන් 5.5+</strong> බර
            </span>
            <span className="glass-panel px-4 py-2 rounded-full text-[12.5px] font-medium text-emerald-900 shadow-sm">
              <strong className="text-emerald-950 font-bold">අඩි 6+</strong> දළ
            </span>
            <span className="glass-panel px-4 py-2 rounded-full text-[12.5px] font-medium text-emerald-900 shadow-sm">
              <strong className="text-emerald-950 font-bold">ගල්ගමුව</strong>
            </span>
          </div>
        </div>

        {/* Right Column: Hero Visual */}
        <div className="lg:col-span-5">
          <div className="relative group mx-auto max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/80 bg-emerald-900/10">
              <img
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-5 left-5">
                <span className="glass-panel-strong px-4 py-2 rounded-full text-[11px] font-bold text-emerald-950 uppercase tracking-[2px] shadow-sm">
                  හස්තිරාජයා
                </span>
              </div>
            </div>
            {/* Soft decorative glow */}
            <div className="absolute -inset-4 bg-emerald-500/15 rounded-3xl blur-2xl -z-10 group-hover:bg-emerald-500/25 transition-all duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
};
