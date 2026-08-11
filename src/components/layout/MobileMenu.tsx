import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import gsap from 'gsap';
import { navigation } from '../../data/navigation';
import { Button } from '../buttons/Button';
import './MobileMenu.scss';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const menu = menuRef.current;
    const links = linksRef.current?.children;

    if (!menu || !links) return;

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.to(menu, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.inOut',
        display: 'flex',
      });

      gsap.fromTo(
        links,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power2.out',
          delay: 0.3,
        }
      );
    } else {
      document.body.style.overflow = '';
      gsap.to(menu, {
        y: '-100%',
        opacity: 0,
        duration: 0.5,
        ease: 'power3.inOut',
        onComplete: () => {
          gsap.set(menu, { display: 'none' });
        },
      });
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div className="mobile-menu" ref={menuRef}>
      <div className="mobile-menu-header">
        <span className="brand-name">Wingsfly</span>
        <button className="close-btn" onClick={onClose} aria-label="Close menu">
          <X size={28} />
        </button>
      </div>
      
      <div className="mobile-menu-content" ref={linksRef}>
        {navigation.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="mobile-nav-link"
            onClick={onClose}
          >
            {item.label}
          </Link>
        ))}
        <div className="mobile-menu-cta">
          <Button to="/#contact" variant="primary" size="lg" onClick={onClose}>
            Get Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};
