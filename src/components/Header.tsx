import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? (scrolled / total) * 100 : 0;
      setScrollProgress(progress);
      setIsScrolled(scrolled > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'විස්තර', href: '#facts' },
    { label: 'ජීවිත කතාව', href: '#life' },
    { label: 'කාලරේඛාව', href: '#timeline' },
    { label: 'ඡායාරූප', href: '#gallery' },
    { label: 'උරුමය', href: '#legacy' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-800 z-50 transition-all duration-75 shadow-sm"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Header */}
      <header
        className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-4xl rounded-full transition-all duration-300 ${
          isScrolled
            ? 'glass-panel-strong shadow-lg py-2.5 px-6'
            : 'glass-panel shadow-md py-3 px-7'
        }`}
      >
        <div className="flex items-center justify-between gap-6">
          {/* Brand */}
          <a
            href="#"
            className="flex items-baseline gap-2 font-serif-display font-bold text-lg md:text-xl text-emerald-950 tracking-wide hover:text-emerald-700 transition-colors whitespace-nowrap"
          >
            කාවන්තිස්ස
            <span className="font-sans text-[10px] font-semibold text-emerald-800/60 uppercase tracking-[2.5px]">
              හස්තිරාජයා
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium text-emerald-950/80">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-emerald-950 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-emerald-700 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 text-emerald-950"
            aria-label="Menu"
          >
            <span
              className={`block w-5 h-[1.5px] bg-emerald-950 transition-transform ${
                mobileMenuOpen ? 'translate-y-[6px] rotate-45' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-emerald-950 transition-opacity ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-emerald-950 transition-transform ${
                mobileMenuOpen ? '-translate-y-[6px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-emerald-950/20 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-20 left-4 right-4 glass-panel-strong rounded-2xl p-5 shadow-xl border border-white/70"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col divide-y divide-emerald-900/10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 px-2 text-emerald-950 font-medium text-base hover:text-emerald-700 hover:pl-4 transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
