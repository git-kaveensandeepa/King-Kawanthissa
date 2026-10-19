import React from 'react';
import { TIMELINE_DATA } from '../data/memorialData';

export const TimelineSection: React.FC = () => {
  return (
    <section id="timeline" className="max-w-4xl mx-auto px-4 sm:px-6 py-16 relative z-10">
      {/* Section Header */}
      <div className="max-w-2xl mb-12">
        <div className="inline-flex items-center gap-3 text-[11px] font-semibold text-emerald-700 uppercase tracking-[5px] mb-3">
          <span className="w-8 h-[1px] bg-emerald-600"></span>
          <span>Timeline</span>
        </div>
        <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-950 mb-2">
          කාලරේඛාව
        </h2>
        <p className="font-serif-body italic text-emerald-800/70 text-base">
          2008 සිට 2026 දක්වා ඔහුගේ ජීවිතයේ ප්‍රධාන සිදුවීම්
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative pl-9 sm:pl-10 space-y-7 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-emerald-400 before:via-emerald-500 before:to-emerald-800/20">
        {TIMELINE_DATA.map((event) => {
          const isDeath = event.isDeath;
          return (
            <div key={event.id} className="relative group">
              {/* Dot marker */}
              <div
                className={`absolute -left-9 sm:-left-10 top-4 w-4 h-4 rounded-full border-[3px] border-white shadow-sm transition-transform duration-300 group-hover:scale-125 z-10 ${
                  isDeath
                    ? 'bg-emerald-900 ring-2 ring-emerald-950/30'
                    : 'bg-emerald-400 ring-2 ring-emerald-300/40'
                }`}
              />

              {/* Event Card */}
              <div
                className={`glass-panel rounded-2xl p-5 sm:p-6 transition-all duration-300 border border-white/80 shadow-sm hover:shadow-md hover:bg-white/70 ${
                  isDeath ? 'border-emerald-800/40 bg-emerald-900/10' : ''
                }`}
              >
                <div
                  className={`text-[11.5px] font-semibold uppercase tracking-[2px] mb-1.5 ${
                    isDeath ? 'text-emerald-950 font-bold' : 'text-emerald-700'
                  }`}
                >
                  {event.date}
                </div>

                <h3 className="font-serif-display text-lg sm:text-xl font-bold text-emerald-950 mb-2 leading-snug">
                  {event.title}
                </h3>

                <p className="text-sm sm:text-[14.5px] text-emerald-950/85 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
