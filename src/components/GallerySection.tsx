import React, { useState } from 'react';
import { GALLERY_PHOTOS } from '../data/memorialData';
import { LightboxModal } from './LightboxModal';
import { ZoomIn, MapPin } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % GALLERY_PHOTOS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
  };

  return (
    <section id="gallery" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 relative z-10">
      {/* Section Header */}
      <div className="max-w-2xl mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 uppercase tracking-widest mb-3">
          <span className="w-6 h-[1px] bg-emerald-600"></span>
          <span>Gallery</span>
        </div>
        <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-950 mb-2">
          ඡායාරූප
        </h2>
        <p className="font-serif-body italic text-emerald-800/80 text-base">
          කාවන්තිස්ස හස්තිරාජයාගේ ඡායාරූප (විශාල කර බැලීමට ක්ලික් කරන්න)
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {GALLERY_PHOTOS.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => openLightbox(index)}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden glass-panel border border-white/80 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 bg-emerald-950/5"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
              decoding="async"
            />

            {/* Hover overlay with zoom hint */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium line-clamp-1">
                  {photo.caption}
                </span>
                <span className="p-2 rounded-full bg-white/20 backdrop-blur-md">
                  <ZoomIn className="w-4 h-4" />
                </span>
              </div>
              {photo.location && (
                <div className="flex items-center gap-1 text-[11px] text-emerald-300 mt-1">
                  <MapPin className="w-3 h-3" />
                  <span>{photo.location}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        photos={GALLERY_PHOTOS}
        currentIndex={activeIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
        onSelectIndex={(idx) => setActiveIndex(idx)}
      />
    </section>
  );
};
