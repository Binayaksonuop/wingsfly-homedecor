import img1 from '../../assets/images/projects/WhatsApp Image 2026-08-10 at 1.10.15 PM.jpeg';
import img2 from '../../assets/images/projects/WhatsApp Image 2026-08-10 at 1.12.11 PM.jpeg';
import img3 from '../../assets/images/projects/WhatsApp Image 2026-08-10 at 1.08.49 PM.jpeg';
import img4 from '../../assets/images/projects/WhatsApp Image 2026-08-10 at 1.13.50 PM (1).jpeg';
import img5 from '../../assets/images/projects/WhatsApp Image 2026-08-10 at 1.07.52 PM.jpeg';
import img6 from '../../assets/images/projects/WhatsApp Image 2026-08-10 at 1.07.52 PM (2).jpeg';
import img7 from '../../assets/images/projects/WhatsApp Image 2026-08-10 at 1.10.46 PM.jpeg';
import img8 from '../../assets/images/projects/WhatsApp Image 2026-08-10 at 1.12.43 PM.jpeg';

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  slug: string;
  image: string;
}

export const projectsData: Project[] = [
  {
    id: 'p1',
    number: '01',
    title: 'Luxury Bedroom',
    category: 'BEDROOM',
    slug: 'luxury-bedroom',
    image: img1
  },
  {
    id: 'p2',
    number: '02',
    title: 'Modern Living Room',
    category: 'LIVING',
    slug: 'modern-living-room',
    image: img2
  },
  {
    id: 'p3',
    number: '03',
    title: 'Modular Kitchen',
    category: 'KITCHEN',
    slug: 'modular-kitchen',
    image: img3
  },
  {
    id: 'p4',
    number: '04',
    title: 'Salon Interior',
    category: 'SALON',
    slug: 'salon-interior',
    image: img4
  },
  {
    id: 'p5',
    number: '05',
    title: 'TV Unit',
    category: 'TV UNIT',
    slug: 'tv-unit',
    image: img5
  },
  {
    id: 'p6',
    number: '06',
    title: 'Trending Wardrobe',
    category: 'WARDROBE',
    slug: 'trending-wardrobe',
    image: img6
  },
  {
    id: 'p7',
    number: '07',
    title: 'Dinning Partition',
    category: 'DINING',
    slug: 'dinning-partition',
    image: img7
  },
  {
    id: 'p8',
    number: '08',
    title: 'Louvers Design',
    category: 'LOUVERS',
    slug: 'louvers-design',
    image: img8
  }
];

export const projectCategories = [
  'ALL',
  'BEDROOM',
  'LIVING',
  'KITCHEN',
  'SALON',
  'TV UNIT',
  'WARDROBE',
  'DINING',
  'LOUVERS'
];
