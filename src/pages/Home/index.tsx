import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from '../../components/buttons/Button';
import { AboutSection } from '../../sections/about/AboutSection';
import { WhyChooseUsSection } from '../../sections/why-choose-us/WhyChooseUsSection';
import { ServicesSection } from '../../sections/services/ServicesSection';
import { FeatureCollection } from '../../sections/feature-collection/FeatureCollection';
import { ProjectsSection } from '../../sections/projects/ProjectsSection';
import { TestimonialsSection } from '../../sections/testimonials/TestimonialsSection';
import { ContactSection } from '../../sections/contact/ContactSection';
import heroImg from '../../assets/images/hero/premium-hero.png';
import './Home.scss';

export const Home: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  
  // Create refs for multiple heading lines
  const headingLine1Ref = useRef<HTMLSpanElement>(null);
  const headingLine2Ref = useRef<HTMLSpanElement>(null);
  
  const supportRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const editorialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial states
    gsap.set(overlayRef.current, { scaleY: 1, transformOrigin: 'bottom' });
    gsap.set(imageRef.current, { scale: 1.05 });
    
    // Split heading initial states (using clip path for smooth reveal)
    const textElements = [
      eyebrowRef.current,
      headingLine1Ref.current,
      headingLine2Ref.current,
      supportRef.current,
      ctaRef.current,
      editorialRef.current,
      scrollRef.current
    ];
    
    gsap.set(textElements, { 
      y: 40, 
      opacity: 0,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'
    });

    // Animation sequence
    tl.delay(0.2)
      // Hero Image Reveal
      .to(overlayRef.current, { scaleY: 0, duration: 1.6, ease: 'power4.inOut' })
      .to(imageRef.current, { scale: 1, duration: 2.5, ease: 'power3.out' }, '-=1.6')
      
      // Text reveals (staggered)
      .to(eyebrowRef.current, { 
        y: 0, 
        opacity: 1, 
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 0.8, 
        ease: 'power3.out' 
      }, '-=1.0')
      .to([headingLine1Ref.current, headingLine2Ref.current], { 
        y: 0, 
        opacity: 1, 
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 1, 
        stagger: 0.15,
        ease: 'power4.out' 
      }, '-=0.6')
      .to(supportRef.current, { 
        y: 0, 
        opacity: 1, 
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 0.8, 
        ease: 'power3.out' 
      }, '-=0.7')
      .to(ctaRef.current, { 
        y: 0, 
        opacity: 1, 
        clipPath: 'polygon(0% -20%, 100% -20%, 100% 120%, 0% 120%)', // Prevent clipping shadows
        duration: 0.8, 
        ease: 'power3.out' 
      }, '-=0.6')
      .to(editorialRef.current, {
        y: 0, 
        opacity: 1, 
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 0.8, 
        ease: 'power3.out' 
      }, '-=0.6')
      .to(scrollRef.current, { 
        y: 0, 
        opacity: 1, 
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 0.8, 
        ease: 'power3.out' 
      }, '-=0.6');

    // Desktop Mouse Parallax Effect
    const handleMouseMove = (e: MouseEvent) => {
      // Disable parallax on mobile
      if (window.innerWidth <= 768) return;
      
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 15; // Max 7.5px movement
      const yPos = (clientY / window.innerHeight - 0.5) * 15;
      
      gsap.to(imageRef.current, {
        x: xPos,
        y: yPos,
        duration: 1.5,
        ease: 'power2.out'
      });
    };

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (heroRef.current && !prefersReducedMotion) {
      heroRef.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      tl.kill();
      if (heroRef.current) {
        heroRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="home-page">
      <section className="hero" ref={heroRef}>
        <div className="hero-bg">
          <div className="hero-bg-overlay-reveal" ref={overlayRef}></div>
          <img 
            src={heroImg} 
            alt="Luxury Interior Design Architecture" 
            className="hero-bg-img" 
            ref={imageRef} 
            loading="eager"
          />
          <div className="hero-bg-darken"></div>
        </div>
        
        <div className="container hero-container">
          <div className="hero-content">
            <p className="hero-eyebrow" ref={eyebrowRef}>
              <span className="eyebrow-line"></span>
              WINGSFLY HOMEDCOR
            </p>
            <h1 className="hero-heading">
              <span className="heading-line-wrap">
                <span className="heading-line" ref={headingLine1Ref}>Transforming Spaces</span>
              </span>
              <span className="heading-line-wrap">
                <span className="heading-line" ref={headingLine2Ref}>Into Timeless Experiences</span>
              </span>
            </h1>
            <p className="hero-support" ref={supportRef}>
              RESIDENTIAL & COMMERCIAL INTERIORS
            </p>
            <div className="hero-cta" ref={ctaRef}>
              <Button to="/#contact" variant="primary" size="lg" className="hero-btn-primary">
                Get Free Consultation
              </Button>
              <Button to="/projects" variant="outline" size="lg" className="hero-btn-outline">
                View Our Projects
              </Button>
            </div>
          </div>
          
          <div className="hero-editorial" ref={editorialRef}>
            <span className="editorial-number">01 / 08</span>
            <span className="editorial-text">SELECTED INTERIORS</span>
          </div>
          
          <div className="hero-scroll" ref={scrollRef}>
            <span className="hero-scroll-text">SCROLL TO EXPLORE</span>
            <div className="hero-scroll-indicator">
              <div className="scroll-dot"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <AboutSection />
      
      {/* Why Choose Us Section */}
      <WhyChooseUsSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Feature Collection / Design Philosophy */}
      <FeatureCollection />
      
      {/* Projects Section */}
      <ProjectsSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      <ContactSection />
    </div>
  );
};
