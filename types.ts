export enum PhotoCategory {
  ALL = 'All Photos',
  CEREMONY = 'Ceremony',
  PORTRAITS = 'Portraits',
  RECEPTION = 'Reception'
}

export interface Photo {
  id: number;
  src: string;
  category: PhotoCategory;
  alt: string;
  widthClass?: string; // For masonry layout hints
}

export interface ScheduleEvent {
  time: string;
  title: string;
  description: string;
  icon?: string;
}

export interface StoryItem {
  year: string;
  title: string;
  description: string;
  imageSrc: string;
}