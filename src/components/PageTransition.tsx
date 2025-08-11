import React from 'react';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const prevLocationRef = useRef(location.pathname);

  useEffect(() => {
    // Only scroll to top if the pathname has actually changed
    if (prevLocationRef.current !== location.pathname) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      prevLocationRef.current = location.pathname;
    }
  }, [location.pathname]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;