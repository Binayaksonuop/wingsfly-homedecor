import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Testimonials.scss';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: "Binayak Maharana",
    role: "Homeowner",
    text: "Wingsfly HomeDcor completely transformed our living space. Their attention to detail and ability to merge luxury with functionality is simply unmatched. Highly recommended!",
    rating: 5
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Business Owner",
    text: "Our new office interior is breathtaking. The team delivered exactly what they promised—on time and within budget. Our clients are always impressed when they walk in.",
    rating: 5
  },
  {
    id: 3,
    name: "Raja & Amit",
    role: "Homeowners",
    text: "From concept to execution, the process was seamless. The custom furniture and lighting designs exceeded our expectations. Truly a premium experience.",
    rating: 5
  }
];

export const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (!section || !cards) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="testimonials-section section-padding" ref={sectionRef}>
      <div className="container">
        <div className="section-header text-center">
          <div className="section-eyebrow-container justify-center">
            <span className="section-number">06</span>
            <span className="section-divider">/</span>
            <span className="section-eyebrow-text">CLIENT STORIES</span>
          </div>
          <h2 className="section-heading">What They Say About Us</h2>
        </div>

        <div className="testimonials-grid" ref={cardsRef}>
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div className="stars">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
