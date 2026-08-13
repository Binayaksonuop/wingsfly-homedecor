// img1 has been replaced by the new bed images
import img2 from '../assets/images/projects/WhatsApp Image 2026-08-10 at 1.12.11 PM.jpeg';
// img3 has been replaced by the new kitchen images
// img4 has been replaced by the new salon images
// img5 has been replaced by the new TV images
import img6 from '../assets/images/projects/WhatsApp Image 2026-08-10 at 1.07.52 PM (2).jpeg';
// img7 has been replaced by the new dining image
// img8 has been replaced by the new louvers image

import bed1 from '../assets/images/projects/bed-1.jpg';
import bed2 from '../assets/images/projects/bed-2.jpg';
import bed3 from '../assets/images/projects/bed-3.jpg';
import bed4 from '../assets/images/projects/bed-4.jpg';

import tv1 from '../assets/images/projects/tv-1.jpg';
import tv2 from '../assets/images/projects/tv-2.jpg';
import tv3 from '../assets/images/projects/tv-3.jpg';
import tv4 from '../assets/images/projects/tv-4.jpg';

import kitchen1 from '../assets/images/projects/kitchen-1.jpg';
import kitchen2 from '../assets/images/projects/kitchen-2.jpg';
import kitchen3 from '../assets/images/projects/kitchen-3.jpg';
import kitchen4 from '../assets/images/projects/kitchen-4.jpg';
import kitchen5 from '../assets/images/projects/kitchen-5.jpg';

import wardrobe1 from '../assets/images/projects/wardrobe-1.jpg';
import wardrobe2 from '../assets/images/projects/wardrobe-2.jpg';
import wardrobe3 from '../assets/images/projects/wardrobe-3.jpg';

import office1 from '../assets/images/projects/office-1.jpg';

import dining1 from '../assets/images/projects/dining-1.jpg';

import salon1 from '../assets/images/projects/salon-1.jpg';
import salon2 from '../assets/images/projects/salon-2.jpg';

import louvers1 from '../assets/images/projects/louvers-1.jpg';

import ceiling1 from '../assets/images/projects/ceiling-1.jpg';
import ceiling2 from '../assets/images/projects/ceiling-2.jpg';
import ceiling3 from '../assets/images/projects/ceiling-3.jpg';

export const projectCategories = [
  'ALL',
  'BEDROOM',
  'LIVING',
  'KITCHEN',
  'SALON',
  'TV UNIT',
  'WARDROBE',
  'DINING',
  'LOUVERS',
  'OFFICE',
  'CEILING'
];

// Extend the global Project type or use a consistent one
export interface AppProject {
  id: string;
  number: string;
  title: string;
  category: string;
  slug: string;
  image: string;
  description: string;
  location: string;
  projectSize: string;
  completionTime: string;
  tags: string[];
  gallery: string[];
}

export const projectsData: AppProject[] = [
  {
    id: 'p1',
    number: '01',
    title: 'Luxury Bedroom',
    category: 'BEDROOM',
    slug: 'luxury-bedroom',
    image: bed1,
    description: 'A sophisticated luxury bedroom design focusing on elegant textures, ambient lighting, and custom furniture pieces to create a tranquil sanctuary. Featuring premium upholstered bedframes with integrated backlighting and seamless wardrobe integration.',
    location: 'Bhubaneswar, Odisha',
    projectSize: '450 sq ft',
    completionTime: '4 Weeks',
    tags: ['Luxury', 'Bedroom', 'Interior'],
    gallery: [bed1, bed2, bed3, bed4]
  },
  /*
  {
    id: 'p2',
    number: '02',
    title: 'Modern Living Room',
    category: 'LIVING',
    slug: 'modern-living-room',
    image: img6,
    description: 'A contemporary living space with clean lines, neutral tones, and intelligent space planning designed for both entertaining and relaxation.',
    location: 'Cuttack, Odisha',
    projectSize: '800 sq ft',
    completionTime: '6 Weeks',
    tags: ['Modern', 'Living Room', 'Design'],
    gallery: [img6]
  },
  */
  {
    id: 'p3',
    number: '03',
    title: 'Modular Kitchen',
    category: 'KITCHEN',
    slug: 'modular-kitchen',
    image: kitchen1,
    description: 'A highly functional and aesthetic modular kitchen featuring seamless cabinets, high-end appliances, and optimal workflow ergonomics.',
    location: 'Bhubaneswar, Odisha',
    projectSize: '300 sq ft',
    completionTime: '3 Weeks',
    tags: ['Modular', 'Kitchen', 'Smart Storage'],
    gallery: [kitchen1, kitchen2, kitchen3, kitchen4, kitchen5]
  },
  {
    id: 'p4',
    number: '04',
    title: 'Salon Interior',
    category: 'SALON',
    slug: 'salon-interior',
    image: salon1,
    description: 'A chic and modern salon interior designed to provide a relaxing and luxurious experience for clients, featuring custom styling stations and vibrant lighting.',
    location: 'Bhubaneswar, Odisha',
    projectSize: '1,200 sq ft',
    completionTime: '6 Weeks',
    tags: ['Commercial', 'Salon', 'Modern'],
    gallery: [salon1, salon2]
  },
  {
    id: 'p5',
    number: '05',
    title: 'TV Unit',
    category: 'TV UNIT',
    slug: 'tv-unit',
    image: tv1,
    description: 'A custom-designed TV unit serving as the focal point of the living area, featuring hidden storage, high-gloss finishes, and integrated ambient lighting.',
    location: 'Bhubaneswar, Odisha',
    projectSize: 'Custom',
    completionTime: '2 Weeks',
    tags: ['TV Unit', 'Custom Furniture', 'Living Room'],
    gallery: [tv1, tv2, tv3, tv4, img6]
  },
  {
    id: 'p6',
    number: '06',
    title: 'Trending Wardrobe',
    category: 'WARDROBE',
    slug: 'trending-wardrobe',
    image: wardrobe1,
    description: 'A modern, space-efficient wardrobe design with sliding doors, organized compartments, and elegant finishes.',
    location: 'Cuttack, Odisha',
    projectSize: 'Custom',
    completionTime: '2 Weeks',
    tags: ['Wardrobe', 'Storage', 'Bedroom'],
    gallery: [wardrobe1, img2, wardrobe2, wardrobe3]
  },
  {
    id: 'p7',
    number: '07',
    title: 'Dining Partition',
    category: 'DINING',
    slug: 'dining-partition',
    image: dining1,
    description: 'An elegant dining partition that intelligently separates spaces while maintaining an open-plan feel through intricate design patterns.',
    location: 'Bhubaneswar, Odisha',
    projectSize: 'Custom',
    completionTime: '2 Weeks',
    tags: ['Partition', 'Dining', 'Space Planning'],
    gallery: [dining1]
  },
  {
    id: 'p8',
    number: '08',
    title: 'Louvers Paneling',
    category: 'LOUVERS',
    slug: 'louvers-paneling',
    image: louvers1,
    description: 'A stylish and contemporary louvers paneling installation that adds incredible depth, texture, and a modern aesthetic to the interior space.',
    location: 'Bhubaneswar, Odisha',
    projectSize: 'Custom',
    completionTime: '1 Week',
    tags: ['Louvers', 'Wall Paneling', 'Texture'],
    gallery: [louvers1]
  },
  {
    id: 'p9',
    number: '09',
    title: 'Office Interior',
    category: 'OFFICE',
    slug: 'office-interior',
    image: office1,
    description: 'A professional and inspiring office environment designed for productivity, featuring ergonomic workstations, elegant wood finishes, and optimal lighting.',
    location: 'Bhubaneswar, Odisha',
    projectSize: 'Custom',
    completionTime: '4 Weeks',
    tags: ['Commercial', 'Office', 'Workspace'],
    gallery: [office1]
  },
  {
    id: 'p10',
    number: '10',
    title: 'Ceiling Design',
    category: 'CEILING',
    slug: 'ceiling-design',
    image: ceiling1,
    description: 'A modern false ceiling design with dynamic profile lighting and elegant coves to enhance the ambiance of the space.',
    location: 'Bhubaneswar, Odisha',
    projectSize: 'Custom',
    completionTime: '1 Week',
    tags: ['Ceiling', 'Lighting', 'Modern'],
    gallery: [ceiling1, ceiling2, ceiling3]
  }
];
