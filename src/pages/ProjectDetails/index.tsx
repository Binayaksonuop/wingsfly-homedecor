import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projectsData } from '../../sections/projects/projectsData';
import './ProjectDetails.scss';

export const ProjectDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find(p => p.slug === slug);

  // Scroll to top when component mounts and update title
  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      document.title = `${project.title} | Wingsfly HomeDecor`;
    } else {
      document.title = `Project Not Found | Wingsfly HomeDecor`;
    }
    
    // Cleanup title when leaving project details
    return () => {
      document.title = 'Wingsfly HomeDecor | Interior Design Studio';
    };
  }, [slug, project]);

  if (!project) {
    return (
      <div className="project-not-found">
        <div className="container">
          <h2>PROJECT NOT FOUND</h2>
          <p>The interior project you are looking for does not exist.</p>
          <Link to="/#projects" className="back-link">
            <ArrowLeft size={20} />
            <span>BACK TO PROJECTS</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <div className="container">
        
        <header className="detail-header">
          <Link to="/#projects" className="back-link">
            <ArrowLeft size={20} />
            <span>BACK TO PROJECTS</span>
          </Link>
          
          <div className="detail-title-wrapper">
            <span className="detail-number">{project.number}</span>
            <h1 className="detail-title">{project.title}</h1>
            <p className="detail-category">{project.category}</p>
          </div>
        </header>
        
        <div className="detail-hero-image">
          <img src={project.image} alt={project.title} />
        </div>
        
        <div className="detail-footer">
          <Link to="/#contact" className="detail-cta">
            GET FREE CONSULTATION
          </Link>
        </div>
        
      </div>
    </div>
  );
};
