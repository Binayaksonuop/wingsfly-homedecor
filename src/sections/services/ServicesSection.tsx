import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { servicesData } from './servicesData';
import './ServicesSection.scss';

gsap.registerPlugin(ScrollTrigger);

export const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState(servicesData[0].id);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const list = listRef.current;
    const preview = previewRef.current;

    if (!section || !header || !list || !preview) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        header.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
          },
        }
      );

      // List animation
      gsap.fromTo(
        list.children,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
          },
        }
      );

      // Preview reveal
      gsap.fromTo(
        preview,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
          },
        }
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="services" className="services-section section-padding" ref={sectionRef}>
      <div className="container">
        <div className="services-grid">
          
          <div className="services-content">
            <div className="services-header" ref={headerRef}>
              <div className="section-eyebrow-container">
                <span className="section-number">03</span>
                <span className="section-divider">/</span>
                <span className="section-eyebrow-text">SERVICES</span>
              </div>
              
              <h2 className="section-heading">
                Designed Around<br />
                The Way You Live.
              </h2>
              
              <p className="services-support">
                We provide comprehensive interior design solutions across residential and commercial spaces, focusing on craftsmanship, detail, and your unique lifestyle.
              </p>
            </div>
            
            <div className="services-list" ref={listRef} role="tablist">
              {servicesData.map((service) => (
                <div key={service.id} className="service-item-wrapper">
                  <button
                    className={`service-item ${activeService === service.id ? 'active' : ''}`}
                    onMouseEnter={() => setActiveService(service.id)}
                    onClick={() => setActiveService(service.id)}
                    onFocus={() => setActiveService(service.id)}
                    role="tab"
                    aria-selected={activeService === service.id}
                  >
                    <span className="service-number">{service.number}</span>
                    <span className="service-title">{service.title}</span>
                    <ArrowRight className="service-icon" size={20} />
                    <div className="service-border"></div>
                  </button>
                  <div className={`service-mobile-image-wrapper ${activeService === service.id ? 'active' : ''}`}>
                    <img src={service.image} alt={service.title} className="service-mobile-image" loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="services-preview-container hide-mobile" ref={previewRef}>
            <div className="services-preview-sticky">
              {servicesData.map((service, index) => (
                <img
                  key={service.id}
                  src={service.image}
                  alt={service.title}
                  className={`preview-image ${activeService === service.id ? 'active' : ''}`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              ))}
              <div className="preview-overlay"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
