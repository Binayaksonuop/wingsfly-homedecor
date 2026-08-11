import img1 from '../../assets/images/projects/WhatsApp Image 2026-08-10 at 1.13.49 PM.jpeg';
import img2 from '../../assets/images/projects/WhatsApp Image 2026-08-10 at 1.13.50 PM.jpeg';
import img3 from '../../assets/images/projects/WhatsApp Image 2026-08-10 at 1.16.33 PM.jpeg';
import img4 from '../../assets/images/projects/WhatsApp Image 2026-08-10 at 1.16.34 PM.jpeg';
import img5 from '../../assets/images/projects/WhatsApp Image 2026-08-10 at 1.17.20 PM (1).jpeg';
import img6 from '../../assets/images/projects/WhatsApp Image 2026-08-10 at 1.19.00 PM (1).jpeg';
import img7 from '../../assets/images/projects/WhatsApp Image 2026-08-10 at 1.19.01 PM.jpeg';

export interface DesignFeature {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
}

export const featureData: DesignFeature[] = [
  {
    id: 'luxury',
    number: '01',
    title: 'Modern Luxury Designs',
    description: 'Refined interiors balancing elegance, comfort and visual richness.',
    image: img1
  },
  {
    id: 'minimalist',
    number: '02',
    title: 'Minimalist Interiors',
    description: 'Clean compositions focused on clarity, balance and purposeful details.',
    image: img2
  },
  {
    id: 'planning',
    number: '03',
    title: 'Smart Space Planning',
    description: 'Layouts planned around functionality, movement and efficient use of space.',
    image: img3
  },
  {
    id: 'materials',
    number: '04',
    title: 'Premium Material Selection',
    description: 'Carefully considered materials that support the overall design language.',
    image: img4
  },
  {
    id: 'furniture',
    number: '05',
    title: 'Customized Furniture',
    description: 'Furniture solutions designed around the space and lifestyle.',
    image: img5
  },
  {
    id: 'hardware',
    number: '06',
    title: 'Good Quality Hardware & Fittings',
    description: 'Quality details that support everyday functionality and finish.',
    image: img6
  },
  {
    id: 'vastu',
    number: '07',
    title: 'Vastu Planning',
    description: 'Thoughtful planning that considers Vastu principles within the design.',
    image: img7
  }
];
