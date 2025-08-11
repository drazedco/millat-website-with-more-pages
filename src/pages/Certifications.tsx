import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import ImageLightbox from '../components/ImageLightbox';
import Card from '../components/Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Certifications = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use the scroll animation hook
  useScrollAnimation();

  const certifications = [
    {
      title: 'ISO 9001:2015',
      image: '/images/iso-certificate.jpg',
      text: 'Certified for meeting international quality standards in our manufacturing processes and management systems.'
    },
    {
      title: 'Certificate of Incorporation',
      image: '/images/incorporation-certificate.jpg',
      text: 'Officially incorporated, recognizing our legal standing and commitment to corporate governance.'
    },
    {
      title: 'FBR Active Tax Payer',
      image: '/images/fbr-certificate.jpg',
      text: 'Recognized by the Federal Board of Revenue as an active taxpayer, underscoring our financial compliance.'
    },
    {
      title: 'LCCI Membership',
      image: '/images/lcci-membership.jpg',
      text: 'A recognized member of the Lahore Chamber of Commerce & Industry, fostering trade and business excellence.'
    }
  ];

  const lightboxImages = certifications.map(cert => ({
    src: cert.image,
    alt: cert.title
  }));

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="min-h-screen"
    >
      {/* Hero Banner */}
      <HeroBanner
        backgroundImage="/images/quality-control.jpg"
        title="Our <span class='text-primary'>Certifications</span>"
        subtitle="Ensuring international quality, compliance, and professional excellence in every component we deliver."
      >
        <div className="mb-6">
          <Award className="h-16 w-16 text-white mx-auto" />
        </div>
      </HeroBanner>

      {/* Certifications Grid */}
      <section 
        className="section-padding bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} title={cert.title} className={`${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} lift-hover`}>
                <div 
                  className="aspect-video mb-4 cursor-pointer overflow-hidden rounded-lg"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-gray-600">{cert.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section 
        className="section-padding bg-light"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <p className="text-2xl text-gray-700 italic leading-relaxed">
              "At Millat Polymer, our certifications are more than just documents – they're proof of our ongoing commitment to quality, customer satisfaction, and international standards."
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-millat-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="scale-in max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need Certified Industrial Components?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              All our products comply with ISO and industry standards.
            </p>
            <Link to="/contact" className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-colors">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <ImageLightbox
        images={lightboxImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </motion.div>
  );
};

export default Certifications;