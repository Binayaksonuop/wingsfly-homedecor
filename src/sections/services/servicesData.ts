import img1 from '../../assets/images/projects/WhatsApp Image 2026-08-10 at 1.07.52 PM (1).jpeg';
import img2 from '../../assets/images/projects/WhatsApp Image 2026-08-10 at 1.07.52 PM (2).jpeg';
import img3 from '../../assets/images/projects/WhatsApp Image 2026-08-10 at 1.07.52 PM.jpeg';
import img4 from '../../assets/images/projects/WhatsApp Image 2026-08-10 at 1.08.48 PM.jpeg';
import img5 from '../../assets/images/projects/WhatsApp Image 2026-08-10 at 1.08.49 PM (2).jpeg';
import img6 from '../../assets/images/projects/WhatsApp Image 2026-08-10 at 1.08.49 PM.jpeg';
import img7 from '../../assets/images/projects/WhatsApp Image 2026-08-10 at 1.10.15 PM (1).jpeg';
import img8 from '../../assets/images/projects/WhatsApp Image 2026-08-10 at 1.10.15 PM (2).jpeg';
import img9 from '../../assets/images/projects/WhatsApp Image 2026-08-10 at 1.10.15 PM.jpeg';
import img10 from '../../assets/images/projects/WhatsApp Image 2026-08-10 at 1.10.46 PM (1).jpeg';
import img11 from '../../assets/images/projects/WhatsApp Image 2026-08-10 at 1.12.11 PM (1).jpeg';
import img12 from '../../assets/images/projects/WhatsApp Image 2026-08-10 at 1.12.11 PM (2).jpeg';
import img13 from '../../assets/images/projects/WhatsApp Image 2026-08-10 at 1.12.11 PM.jpeg';
import img14 from '../../assets/images/projects/WhatsApp Image 2026-08-10 at 1.12.43 PM.jpeg';
import img15 from '../../assets/images/projects/WhatsApp Image 2026-08-10 at 1.12.44 PM.jpeg';

export interface Service {
  id: string;
  number: string;
  title: string;
  image: string;
}

export const servicesData: Service[] = [
  { id: 'home', number: '01', title: 'Home Interior Design', image: img1 },
  { id: 'kitchen', number: '02', title: 'Modular Kitchen', image: img2 },
  { id: 'bedroom', number: '03', title: 'Bedroom Design', image: img3 },
  { id: 'living', number: '04', title: 'Living Room Design', image: img4 },
  { id: 'wardrobe', number: '05', title: 'Trending Wardrobe', image: img5 },
  { id: 'office', number: '06', title: 'Office Interior', image: img6 },
  { id: 'salon', number: '07', title: 'Salon Interior', image: img7 },
  { id: 'ceiling', number: '08', title: 'False Ceiling', image: img8 },
  { id: 'tv', number: '09', title: 'TV Unit', image: img9 },
  { id: 'paneling', number: '10', title: 'Wall Paneling', image: img10 },
  { id: 'furniture', number: '11', title: 'Furniture Design', image: img11 },
  { id: 'space', number: '12', title: 'Space Planning', image: img12 },
  { id: 'renovation', number: '13', title: 'Renovation', image: img13 },
  { id: 'acp', number: '14', title: 'ACP Cladding', image: img14 },
  { id: 'louvers', number: '15', title: 'Louvers Design', image: img15 },
];
