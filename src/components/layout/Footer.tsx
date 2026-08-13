import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ArrowUp } from 'lucide-react';
import { navigation } from '../../data/navigation';
import { services } from '../../data/services';
import './Footer.scss';

gsap.registerPlugin(ScrollTrigger);

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const topSectionRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const ctx = gsap.context(() => {
      // Animate top editorial statement
      if (topSectionRef.current) {
        gsap.fromTo(
          topSectionRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: topSectionRef.current,
              start: 'top 85%',
            }
          }
        );
      }

      // Animate columns
      if (columnsRef.current) {
        gsap.fromTo(
          columnsRef.current.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: columnsRef.current,
              start: 'top 80%',
            }
          }
        );
      }

      // Animate bottom bar
      if (bottomRef.current) {
        gsap.fromTo(
          bottomRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            delay: 0.4,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: bottomRef.current,
              start: 'top 95%',
            }
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Ensure contact link properly routes depending on current page
  const contactLink = pathname === '/' ? '#contact' : '/#contact';

  return (
    <footer className="footer" ref={footerRef}>
      <div className="container">
        
        {/* Editorial Statement */}
        <div className="footer-editorial" ref={topSectionRef}>
          <div className="footer-label">
            <span className="label-number">09</span>
            <span className="label-divider">/</span>
            <span className="label-text">LET'S BUILD SOMETHING BEAUTIFUL</span>
          </div>
          <h2 className="editorial-heading">Let's Create a Space<br/>That Feels Like You.</h2>
          <div className="editorial-cta">
            <p className="editorial-subtext">Start your interior design journey with Wingsfly HomeDcor.</p>
            <Link to={contactLink} className="footer-cta-btn">
              GET FREE CONSULTATION <ArrowRight size={18} className="cta-icon" />
            </Link>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="footer-grid" ref={columnsRef}>
          
          {/* Brand Column */}
          <div className="footer-col brand-col">
            <h3 className="brand-name">WINGSFLY HOMEDCOR</h3>
            <p className="brand-tagline">DESIGNING SPACES, DEFINING LIFESTYLES</p>
            <p className="brand-description">
              A full-service interior design and execution company dedicated to creating inspiring residential and commercial environments.
            </p>
          </div>
          
          {/* Navigation Column */}
          <div className="footer-col nav-col">
            <h4 className="col-title">NAVIGATION</h4>
            <ul className="footer-links">
              {navigation.map((item) => (
                <li key={item.id}>
                  <Link to={item.path} className="footer-link">
                    <span className="link-text">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services Column */}
          <div className="footer-col services-col">
            <h4 className="col-title">SERVICES</h4>
            <ul className="footer-links">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link to={pathname === '/' ? '#services' : '/#services'} className="footer-link">
                    <span className="link-text">{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Column */}
          <div className="footer-col contact-col">
            <h4 className="col-title">CONTACT</h4>
            <ul className="contact-list">
              <li><a href="tel:+917008325017" className="footer-link"><span className="link-text">7008325017</span></a></li>
              <li><a href="mailto:wings.home04@gmail.com" className="footer-link"><span className="link-text">wings.home04@gmail.com</span></a></li>
              <li><a href="https://instagram.com/wingsfly_interior" target="_blank" rel="noopener noreferrer" className="footer-link"><span className="link-text">@wingsfly_interior</span></a></li>
              <li className="timing-text">10:00 AM - 7:30 PM</li>
            </ul>
          </div>
          
        </div>
        
        {/* Legal & Back to Top */}
        <div className="footer-bottom" ref={bottomRef}>
          <p className="copyright">&copy; {new Date().getFullYear()} Wingsfly HomeDcor. All Rights Reserved.</p>
          <button onClick={scrollToTop} className="back-to-top" aria-label="Back to top">
            BACK TO TOP <ArrowUp size={16} className="up-icon" />
          </button>
        </div>
        
      </div>
    </footer>
  );
};
