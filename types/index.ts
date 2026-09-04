export interface Service {
  id: string
  name: string
  description: string
  image: string
  imageAlt: string
  tag?: string
}

export interface Testimonial {
  id: string
  name: string
  rating: number
  review: string
  service?: string
}

export interface GalleryItem {
  id: string
  src: string
  alt: string
  category: 'hair' | 'makeup' | 'bridal' | 'skin' | 'styling'
  aspectRatio?: 'portrait' | 'landscape' | 'square'
}

export interface NavItem {
  label: string
  href: string
}

export interface Stat {
  value: string
  label: string
  suffix?: string
}

export interface Feature {
  icon: string
  title: string
  description: string
}
