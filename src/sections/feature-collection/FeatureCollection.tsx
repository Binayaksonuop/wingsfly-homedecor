import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { featureData } from './featureData';
import './FeatureCollection.scss';

gsap.registerPlugin(ScrollTrigger);

export const FeatureCollection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(featureData[0].id);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const imageContainer = imageRef.current;
    const list = listRef.current;

    if (!section || !header || !imageContainer || !list) return;

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
            trigger: section,
            start: 'top 75%',
          },
        }
      );

      // Image reveal animation
      gsap.fromTo(
        imageContainer,
        { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', opacity: 0 },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          opacity: 1,
          duration: 1.2,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
          },
        }
      );

      // Feature list reveal animation
      gsap.fromTo(
        list.children,
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 65%',
          },
        }
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="features" className="feature-section section-padding" ref={sectionRef}>
      <div className="container">
        
        {/* Full Width Header */}
        <header className="feature-header" ref={headerRef}>
          <div className="section-eyebrow-container">
            <span className="section-number">04</span>
            <span className="section-divider">/</span>
            <span className="section-eyebrow-text">OUR DESIGN APPROACH</span>
          </div>
          
          <h2 className="section-heading">
            Thoughtful Design.<br />
            Refined Living.
          </h2>
          
          <p className="feature-support">
            We focus on combining aesthetics, functionality, premium materials, careful customization and thoughtful Vastu planning to create inspiring environments.
          </p>
        </header>

        <div className="feature-grid">
          
          {/* Left Column: List */}
          <div className="feature-left">
            <ul className="feature-list" ref={listRef} role="tablist">
              {featureData.map((feature) => (
                <li key={feature.id} role="presentation">
                  <button
                    className={`feature-item-btn ${activeFeature === feature.id ? 'active' : ''}`}
                    onMouseEnter={() => setActiveFeature(feature.id)}
                    onClick={() => setActiveFeature(feature.id)}
                    onFocus={() => setActiveFeature(feature.id)}
                    role="tab"
                    aria-selected={activeFeature === feature.id}
                  >
                    <div className="feature-item-header">
                      <span className="feature-number">{feature.number}</span>
                      <h3 className="feature-title">{feature.title}</h3>
                    </div>
                    
                    <div className={`feature-description-wrapper ${activeFeature === feature.id ? 'active' : ''}`}>
                      <p className="feature-description">{feature.description}</p>
                    </div>
                    
                    <div className="feature-line"></div>
                  </button>
                  
                  {/* Inline Mobile Image */}
                  <div className={`feature-mobile-image-wrapper ${activeFeature === feature.id ? 'active' : ''}`}>
                    <img src={feature.image} alt={feature.title} className="feature-mobile-image" loading="lazy" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Right Column: Sticky Image */}
          <div className="feature-right hide-mobile">
            <div className="feature-image-sticky" ref={imageRef}>
              <div className="feature-image-wrapper">
                {featureData.map((feature, index) => (
                  <img
                    key={feature.id}
                    src={feature.image}
                    alt={feature.title}
                    className={`feature-main-image ${activeFeature === feature.id ? 'active' : ''}`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
