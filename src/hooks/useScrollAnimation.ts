import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          // Optional: Remove visible class when element goes out of view
          // entry.target.classList.remove('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll animation classes
    const elements = document.querySelectorAll(
      '.fade-in, .fade-in-up, .scroll-fade-in, .product-slide-in, .slide-in-left, .slide-in-right, .scale-in'
    );
    
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};