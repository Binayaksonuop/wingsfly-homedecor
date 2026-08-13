import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '../../components/buttons/Button';
import aboutImg from '../../assets/images/general/about-image.jpeg';
import './About.scss';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;

    if (!section || !image || !content) return;

    const ctx = gsap.context(() => {
      // Image reveal animation
      gsap.fromTo(
        image,
        { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)', scale: 1.1 },
        {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          scale: 1,
          duration: 1.5,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
          },
        }
      );

      // Content reveal animation
      const elements = content.children;
      gsap.fromTo(
        elements,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: content,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="about" className="about-section section-padding" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <div className="image-frame"></div>
            <img 
              src={aboutImg} 
              alt="Wingsfly HomeDcor Interior Design" 
              className="about-image" 
              ref={imageRef} 
              loading="eager"
              fetchPriority="high"
            />
            <div className="experience-badge">
              <span className="years">01</span>
              <span className="label">Step into<br />Luxury</span>
            </div>
          </div>
          
          <div className="about-content" ref={contentRef}>
            <p className="section-eyebrow">ABOUT WINGSFLY</p>
            <h2 className="section-heading">
              Designing Spaces That<br className="hide-mobile" /> Feel Like You.
            </h2>
            <div className="about-text">
              <p>
                Wingsfly HomeDcor is a full-service interior design and execution company dedicated to creating inspiring residential and commercial environments.
              </p>
              <p>
                Our mission is to create elegant, functional, and budget-friendly spaces without compromising quality. We work closely with clients to understand their vision and provide thoughtfully planned and professionally executed interiors.
              </p>
              <p>
                We also provide specialized Vastu-based planning to ensure harmony and positivity in your space.
              </p>
            </div>
            
            <div className="process-indicator">
              <div className="process-step">
                <span className="dot"></span>
                <span>Concept</span>
              </div>
              <div className="process-line"></div>
              <div className="process-step">
                <span className="dot"></span>
                <span>Design</span>
              </div>
              <div className="process-line"></div>
              <div className="process-step">
                <span className="dot"></span>
                <span>Execution</span>
              </div>
            </div>
            
            <div className="about-cta">
              <Button to="/#services" variant="primary">Discover Our Approach</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
