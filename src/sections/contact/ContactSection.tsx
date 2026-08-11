import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, Camera, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import './ContactSection.scss';

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  projectType?: string;
}

export const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const leftCol = leftColRef.current;
    const form = formRef.current;

    if (!section || !leftCol || !form) return;

    const ctx = gsap.context(() => {
      // Left Column Animation
      gsap.fromTo(
        leftCol.children,
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
          }
        }
      );

      // Form Elements Animation
      gsap.fromTo(
        form.children,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
      isValid = false;
    }

    const phoneRegex = /^[0-9+\-\s()]{7,15}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number.';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', phone: '', email: '', projectType: '', message: '' });
        
        // Reset success state after a while
        setTimeout(() => setIsSuccess(false), 8000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="container">
        <div className="contact-grid">
          
          <div className="contact-info-col" ref={leftColRef}>
            <div className="section-eyebrow-container">
              <span className="section-number">01</span>
              <span className="section-divider">/</span>
              <span className="section-eyebrow-text">CONSULTATION</span>
            </div>
            
            <h2 className="contact-heading">Your Space.<br/>Our Expertise.</h2>
            
            <p className="contact-description">
              Have a space in mind? Tell us about your requirements and let's create an interior that feels uniquely yours.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="icon-wrapper">
                  <Phone size={18} />
                </div>
                <div className="item-content">
                  <span className="item-label">Phone</span>
                  <a href="tel:+917008325017" className="item-value">7008325017</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="icon-wrapper">
                  <Mail size={18} />
                </div>
                <div className="item-content">
                  <span className="item-label">Email</span>
                  <a href="mailto:wings.home04@gmail.com" className="item-value">wings.home04@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="icon-wrapper">
                  <Camera size={18} />
                </div>
                <div className="item-content">
                  <span className="item-label">Instagram</span>
                  <a href="https://instagram.com/wingsfly_interior" target="_blank" rel="noopener noreferrer" className="item-value">@wingsfly_interior</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="icon-wrapper">
                  <Clock size={18} />
                </div>
                <div className="item-content">
                  <span className="item-label">Working Hours</span>
                  <span className="item-value">10:00 AM - 7:30 PM</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-col">
            {isSuccess ? (
              <div className="success-state">
                <CheckCircle size={48} className="success-icon" />
                <h3 className="success-title">Thank you.</h3>
                <p className="success-message">
                  We have received your enquiry and will get back to you shortly to discuss your space.
                </p>
                <button className="reset-btn" onClick={() => setIsSuccess(false)}>
                  SEND ANOTHER ENQUIRY
                </button>
              </div>
            ) : (
              <form className="consultation-form" onSubmit={handleSubmit} ref={formRef} noValidate>
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-input ${errors.name ? 'has-error' : ''} ${formData.name ? 'has-value' : ''}`}
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  {errors.name && <span id="name-error" className="error-message">{errors.name}</span>}
                </div>
                
                <div className="form-row">
                  <div className="form-group half">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className={`form-input ${errors.phone ? 'has-error' : ''} ${formData.phone ? 'has-value' : ''}`}
                      value={formData.phone}
                      onChange={handleChange}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                    <label htmlFor="phone" className="form-label">Phone Number *</label>
                    {errors.phone && <span id="phone-error" className="error-message">{errors.phone}</span>}
                  </div>
                  
                  <div className="form-group half">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`form-input ${errors.email ? 'has-error' : ''} ${formData.email ? 'has-value' : ''}`}
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    {errors.email && <span id="email-error" className="error-message">{errors.email}</span>}
                  </div>
                </div>
                
                <div className="form-group">
                  <select
                    id="projectType"
                    name="projectType"
                    className={`form-select ${errors.projectType ? 'has-error' : ''} ${formData.projectType ? 'has-value' : ''}`}
                    value={formData.projectType}
                    onChange={handleChange}
                    aria-invalid={!!errors.projectType}
                    aria-describedby={errors.projectType ? "project-error" : undefined}
                  >
                    <option value="" disabled hidden></option>
                    <option value="Residential Interior">Residential Interior</option>
                    <option value="Commercial Interior">Commercial Interior</option>
                    <option value="Modular Kitchen">Modular Kitchen</option>
                    <option value="Bedroom">Bedroom</option>
                    <option value="Living Room">Living Room</option>
                    <option value="Other">Other</option>
                  </select>
                  <label htmlFor="projectType" className="form-label">Project Type *</label>
                  {errors.projectType && <span id="project-error" className="error-message">{errors.projectType}</span>}
                  <div className="select-arrow"></div>
                </div>
                
                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`form-textarea ${formData.message ? 'has-value' : ''}`}
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <label htmlFor="message" className="form-label">Tell us about your space (Optional)</label>
                </div>
                
                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  <span>{isSubmitting ? 'SUBMITTING...' : 'REQUEST CONSULTATION'}</span>
                  {!isSubmitting && <ArrowRight size={18} className="btn-icon" />}
                </button>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
};
