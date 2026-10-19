/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FactsSection } from './components/FactsSection';
import { LifeStorySection } from './components/LifeStorySection';
import { TimelineSection } from './components/TimelineSection';
import { GallerySection } from './components/GallerySection';
import { LegacySection } from './components/LegacySection';
import { Footer } from './components/Footer';

export default function App() {
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen text-emerald-950 overflow-x-hidden selection:bg-emerald-200 selection:text-emerald-950 font-sans-sinhala">
      {/* Ambient glowing background orbs */}
      <div className="bg-orb bg-orb--1" aria-hidden="true" />
      <div className="bg-orb bg-orb--2" aria-hidden="true" />
      <div className="bg-orb bg-orb--3" aria-hidden="true" />

      {/* Header */}
      <Header />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <FactsSection />
        <LifeStorySection />
        <TimelineSection />
        <GallerySection />
        <LegacySection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        title="Back to top"
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full glass-panel-strong shadow-md hover:shadow-lg hover:bg-emerald-700 hover:text-white transition-all text-emerald-800 border border-white/80 flex items-center justify-center text-lg ${
          showBackTop
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible translate-y-3 pointer-events-none'
        }`}
      >
        ↑
      </button>
    </div>
  );
}
