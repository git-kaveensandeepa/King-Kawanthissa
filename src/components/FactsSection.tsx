import React from 'react';
import { FACTS_DATA } from '../data/memorialData';

export const FactsSection: React.FC = () => {
  return (
    <section id="facts" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 relative z-10">
      {/* Section Header */}
      <div className="max-w-2xl mb-10">
        <div className="inline-flex items-center gap-3 text-[11px] font-semibold text-emerald-700 uppercase tracking-[5px] mb-3">
          <span className="w-8 h-[1px] bg-emerald-600"></span>
          <span>Key Facts</span>
        </div>
        <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-950 mb-2">
          ඔහුගේ විස්තර
        </h2>
        <p className="font-serif-body italic text-emerald-800/70 text-base">
          කාවන්තිස්ස හස්තිරාජයාගේ මූලික තොරතුරු
        </p>
      </div>

      {/* Facts Table Card */}
      <div className="glass-panel rounded-3xl p-2 sm:p-3 shadow-lg border border-white/80">
        <div className="bg-white/40 rounded-2xl overflow-hidden border border-white/60">
          <table className="w-full border-collapse">
            <tbody>
              {FACTS_DATA.map((fact) => (
                <tr
                  key={fact.id}
                  className="border-b border-emerald-900/10 last:border-b-0 hover:bg-white/50 transition-colors"
                >
                  <th className="py-4 px-5 sm:px-6 w-[34%] text-left align-top font-semibold text-emerald-900 text-xs sm:text-[13px] uppercase tracking-[0.8px] border-r border-emerald-900/10">
                    {fact.label}
                  </th>
                  <td className="py-4 px-5 sm:px-6 text-left align-top text-sm sm:text-[15px] text-emerald-950/85 leading-relaxed">
                    {fact.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
