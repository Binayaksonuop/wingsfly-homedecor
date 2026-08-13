import bed1 from '../../assets/images/projects/bed-1.jpg';
import bed2 from '../../assets/images/projects/bed-2.jpg';
import bed4 from '../../assets/images/projects/bed-4.jpg';
import kitchen1 from '../../assets/images/projects/kitchen-1.jpg';
import kitchen2 from '../../assets/images/projects/kitchen-2.jpg';
import tv1 from '../../assets/images/projects/tv-1.jpg';
import tv2 from '../../assets/images/projects/tv-2.jpg';
import tv3 from '../../assets/images/projects/tv-3.jpg';
import wardrobe1 from '../../assets/images/projects/wardrobe-1.jpg';
import wardrobe2 from '../../assets/images/projects/wardrobe-2.jpg';
import salon1 from '../../assets/images/projects/salon-1.jpg';
import ceiling1 from '../../assets/images/projects/ceiling-1.jpg';
import ceiling3 from '../../assets/images/projects/ceiling-3.jpg';
import louvers1 from '../../assets/images/projects/louvers-1.jpg';
import dining1 from '../../assets/images/projects/dining-1.jpg';

export interface Service {
  id: string;
  number: string;
  title: string;
  image: string;
}

export const servicesData: Service[] = [
  { id: 'home', number: '01', title: 'Home Interior Design', image: bed1 },
  { id: 'kitchen', number: '02', title: 'Modular Kitchen', image: kitchen1 },
  { id: 'bedroom', number: '03', title: 'Bedroom Design', image: bed2 },
  { id: 'living', number: '04', title: 'Living Room Design', image: tv2 },
  { id: 'wardrobe', number: '05', title: 'Trending Wardrobe', image: wardrobe1 },
  { id: 'entertainment', number: '06', title: 'Entertainment Units', image: tv3 },
  { id: 'salon', number: '07', title: 'Salon Interior', image: salon1 },
  { id: 'ceiling', number: '08', title: 'False Ceiling', image: ceiling1 },
  { id: 'tv', number: '09', title: 'TV Unit', image: tv1 },
  { id: 'paneling', number: '10', title: 'Wall Paneling', image: louvers1 },
  { id: 'dining', number: '11', title: 'Dining Partition', image: dining1 },
  { id: 'space', number: '12', title: 'Space Planning', image: bed4 },
  { id: 'custom-kitchens', number: '13', title: 'Custom Kitchens', image: kitchen2 },
  { id: 'bespoke-wardrobes', number: '14', title: 'Bespoke Wardrobes', image: wardrobe2 },
  { id: 'lighting', number: '15', title: 'Lighting Design', image: ceiling3 },
];
