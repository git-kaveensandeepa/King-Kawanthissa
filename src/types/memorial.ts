export interface FactItem {
  id: string;
  category?: 'physical' | 'habitat' | 'tragedy' | 'legal';
  label: string;
  value: string;
  englishLabel?: string;
  highlight?: boolean;
}

export interface TimelineEvent {
  id: string;
  date: string;
  englishDate?: string;
  title: string;
  description: string;
  category?: 'life' | 'tragedy' | 'investigation';
  isDeath?: boolean;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  fallbackSrc: string;
  alt: string;
  caption: string;
  location?: string;
}
