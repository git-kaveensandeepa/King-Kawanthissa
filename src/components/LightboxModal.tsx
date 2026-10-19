import React, { useEffect } from 'react';
import { GalleryPhoto } from '../types/memorial';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxModalProps {
  photos: GalleryPhoto[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSelectIndex: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !photos[currentIndex]) return null;

  const currentPhoto = photos[currentIndex];

  return (
    <div
      className="fixed inset-0 z-[1000] bg-emerald-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in select-none"
      onClick={onClose}
    >
      {/* Pinned Prominent Close Button in Top-Right Corner */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[1010] w-12 h-12 rounded-full bg-white/20 hover:bg-white/35 active:bg-white/50 text-white backdrop-blur-lg border border-white/40 shadow-xl flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
        aria-label="Close"
        title="වසන්න (Close)"
      >
        <X className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Prev Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-[1010] w-12 h-12 rounded-full bg-white/20 hover:bg-white/35 active:bg-white/50 text-white backdrop-blur-lg border border-white/40 shadow-xl flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
        aria-label="Previous"
        title="පෙර ඡායාරූපය"
      >
        <ChevronLeft className="w-7 h-7 stroke-[2.5]" />
      </button>

      {/* Center Image Container */}
      <div
        className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentPhoto.src}
          alt={currentPhoto.alt}
          className="max-w-[90vw] max-h-[75vh] object-contain rounded-xl sm:rounded-2xl shadow-2xl border border-white/25"
        />

        {/* Caption & Counter below image */}
        <div className="mt-3 text-center px-4">
          <p className="text-white text-sm sm:text-base font-medium drop-shadow-md">
            {currentPhoto.caption}
          </p>
          <span className="text-xs text-white/70 font-mono mt-1 inline-block">
            {currentIndex + 1} / {photos.length}
          </span>
        </div>
      </div>

      {/* Next Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-[1010] w-12 h-12 rounded-full bg-white/20 hover:bg-white/35 active:bg-white/50 text-white backdrop-blur-lg border border-white/40 shadow-xl flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
        aria-label="Next"
        title="ඊළඟ ඡායාරූපය"
      >
        <ChevronRight className="w-7 h-7 stroke-[2.5]" />
      </button>
    </div>
  );
};
