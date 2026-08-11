import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import gsap from 'gsap';
import { navigation } from '../../data/navigation';
import { Button } from '../buttons/Button';
import { MobileMenu } from './MobileMenu';
import logoImg from '../../assets/logo/logo.png';
import './Navbar.scss';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Force solid navbar if not on homepage, or if scrolled on homepage
  const shouldBeSolid = !isHomePage || isScrolled;

  useEffect(() => {
    if (navbarRef.current) {
      gsap.to(navbarRef.current, {
        backgroundColor: shouldBeSolid ? 'rgba(253, 251, 247, 0.98)' : 'transparent',
        backdropFilter: shouldBeSolid ? 'blur(10px)' : 'blur(0px)',
        padding: shouldBeSolid ? '1rem 0' : '1.5rem 0',
        boxShadow: shouldBeSolid ? '0 4px 20px rgba(0, 0, 0, 0.05)' : 'none',
        duration: 0.4,
        ease: 'power2.out',
      });
    }
  }, [shouldBeSolid]);

  return (
    <>
      <header className={`navbar ${shouldBeSolid ? 'scrolled' : ''}`} ref={navbarRef}>
        <div className="container navbar-container">
          <Link to="/" className="brand">
            <img src={logoImg} alt="Wingsfly HomeDcor Logo" className="brand-logo" />
          </Link>

          <nav className="nav-links hide-mobile">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav-right">
            <div className="hide-mobile">
              <Button to="/#contact" variant={isScrolled ? "primary" : "outline"} size="sm" className={!isScrolled ? 'nav-cta-light' : ''}>
                Get Consultation
              </Button>
            </div>
            <button
              className="mobile-menu-btn hide-desktop"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
