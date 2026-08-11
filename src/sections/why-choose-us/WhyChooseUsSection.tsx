import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import whyImg from '../../assets/images/general/why-choose-us.jpeg';
import './WhyChooseUs.scss';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { id: '01', title: 'Customized Interior Solutions' },
  { id: '02', title: 'Budget-Friendly Designs' },
  { id: '03', title: 'Vastu-Based Space Planning' },
  { id: '04', title: 'Good Quality Materials' },
  { id: '05', title: 'On-Time Project Delivery' },
  { id: '06', title: 'Transparent Pricing' },
  { id: '07', title: '3D Design' },
  { id: '08', title: 'Professional Project Management' },
];

export const WhyChooseUsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const grid = gridRef.current;
    const image = imageRef.current;

    if (!section || !header || !grid) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        header.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 80%',
          },
        }
      );

      // Grid animation
      gsap.fromTo(
        grid.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 75%',
          },
        }
      );

      if (image) {
        gsap.fromTo(
          image,
          { scale: 1.1, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: image,
              start: 'top 80%',
            },
          }
        );
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="why-us" className="why-choose-us section-padding" ref={sectionRef}>
      <div className="container">
        <div className="why-grid">
          
          <div className="why-header" ref={headerRef}>
            <p className="section-eyebrow">WHY WINGSFLY</p>
            <h2 className="section-heading">Built Around Your Vision.</h2>
            
            <div className="why-image-container hide-mobile">
              <img src={whyImg} alt="Wingsfly Interior Detail" className="why-image" ref={imageRef} />
            </div>
          </div>
          
          <div className="features-grid" ref={gridRef}>
            {features.map((feature) => (
              <div key={feature.id} className="feature-item">
                <span className="feature-number">{feature.id}</span>
                <h3 className="feature-title">{feature.title}</h3>
                <div className="feature-line"></div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
