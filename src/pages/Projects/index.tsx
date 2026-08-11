import React, { useEffect } from 'react';
import { ProjectsSection } from '../../sections/projects/ProjectsSection';

export const Projects: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects-page" style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: '#FDFBF7' }}>
      <ProjectsSection />
    </div>
  );
};
