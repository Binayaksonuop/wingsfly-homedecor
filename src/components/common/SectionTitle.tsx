import React from 'react';
import './SectionTitle.scss';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  return (
    <div className={`section-title text-${align} ${className}`}>
      {subtitle && <span className="subtitle fade-up">{subtitle}</span>}
      <h2 className="title fade-up">{title}</h2>
    </div>
  );
};
