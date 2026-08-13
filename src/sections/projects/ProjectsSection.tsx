import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { projectsData, projectCategories } from '../../data/projects';
import './ProjectsSection.scss';

gsap.registerPlugin(ScrollTrigger);

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  
  const filteredProjects = projectsData.filter(
    project => activeFilter === 'ALL' || project.category === activeFilter
  );

  // Entrance animation
  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    
    if (!section || !header) return;
    
    const ctx = gsap.context(() => {
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
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  // Filter animation
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    
    const ctx = gsap.context(() => {
      // Small fade/scale animation when items change
      gsap.fromTo(
        '.project-card',
        { opacity: 0, scale: 0.98, y: 15 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
        }
      );
    }, gridRef);
    
    return () => ctx.revert();
  }, [activeFilter]);

  return (
    <section id="projects" className="projects-section section-padding" ref={sectionRef}>
      <div className="container">
        
        <header className="projects-header" ref={headerRef}>
          <div className="section-eyebrow-container">
            <span className="section-number">05</span>
            <span className="section-divider">/</span>
            <span className="section-eyebrow-text">SELECTED WORK</span>
          </div>
          
          <h2 className="section-heading">Spaces We've Brought to Life</h2>
          
          <div className="filter-container">
            <ul className="project-filters" role="tablist">
              {projectCategories.map(category => (
                <li key={category} role="presentation">
                  <button
                    className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                    onClick={() => setActiveFilter(category)}
                    role="tab"
                    aria-selected={activeFilter === category}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </header>
        
        <div className={`projects-grid ${activeFilter !== 'ALL' ? 'filtered' : ''}`} ref={gridRef}>
          {filteredProjects.map((project, index) => {
            // Give the very first item (if ALL is selected) a featured class
            const isFeatured = activeFilter === 'ALL' && index === 0;
            
            return (
              <div 
                key={project.id} 
                className={`project-card ${isFeatured ? 'featured' : ''}`}
              >
                <Link to={`/projects/${project.slug}`} className="project-link">
                  <div className="project-image-wrapper">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="project-image"
                      loading={index < 2 ? 'eager' : 'lazy'}
                    />
                    <div className="project-overlay">
                      <div className="project-overlay-content">
                        <span className="project-number">{(index + 1).toString().padStart(2, '0')}</span>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-category">{project.category}</p>
                        
                        <div className="view-project">
                          <span>VIEW PROJECT</span>
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile/Tablet Info Bar (always visible since hover isn't reliable) */}
                  <div className="project-info-mobile">
                    <div className="info-header">
                      <span className="mobile-number">{(index + 1).toString().padStart(2, '0')}</span>
                      <h3 className="mobile-title">{project.title}</h3>
                    </div>
                    <div className="mobile-action">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};
