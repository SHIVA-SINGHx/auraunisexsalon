import type { GalleryItem } from '@/types'

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    src: '/images/service-makeup.jpg',
    alt: 'Elegant bridal makeup transformation',
    category: 'bridal',
    aspectRatio: 'portrait',
  },
  {
    id: 'g2',
    src: '/images/service-hair-color.jpg',
    alt: 'Beautiful hair coloring result',
    category: 'hair',
    aspectRatio: 'portrait',
  },
  {
    id: 'g3',
    src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80',
    alt: 'Glamorous evening makeup look',
    category: 'makeup',
    aspectRatio: 'landscape',
  },
  {
    id: 'g4',
    src: '/images/service-hair-styling.jpg',
    alt: 'Elegant hair updo styling',
    category: 'styling',
    aspectRatio: 'portrait',
  },
  {
    id: 'g5',
    src: '/images/service-skin-treatment.jpg',
    alt: 'Relaxing skin treatment session',
    category: 'skin',
    aspectRatio: 'landscape',
  },
  {
    id: 'g6',
    src: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&q=80',
    alt: 'Stunning bridal makeup and jewellery',
    category: 'bridal',
    aspectRatio: 'portrait',
  },
  {
    id: 'g7',
    src: '/images/service-haircut.jpg',
    alt: 'Precision haircut at The Aura',
    category: 'hair',
    aspectRatio: 'portrait',
  },
  {
    id: 'g8',
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
    alt: 'Flawless fashion makeup look',
    category: 'makeup',
    aspectRatio: 'square',
  },
]

export const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'hair', label: 'Hair' },
  { id: 'makeup', label: 'Makeup' },
  { id: 'bridal', label: 'Bridal' },
  { id: 'skin', label: 'Skin' },
  { id: 'styling', label: 'Styling' },
] as const
