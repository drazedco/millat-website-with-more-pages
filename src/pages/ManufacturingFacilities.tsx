import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Warehouse, TestTube, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import Card from '../components/Card';
import ImageLightbox from '../components/ImageLightbox';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ManufacturingFacilities = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useScrollAnimation();

  const facilityFeatures = [
    {
      title: 'Production Halls',
      description: 'Multiple dedicated lines for rubber and plastic molding',
      icon: <Factory className="h-8 w-8" />
    },
    {
      title: 'Storage Areas',
      description: 'Climate-controlled raw material and finished goods warehouses',
      icon: <Warehouse className="h-8 w-8" />
    },
    {
      title: 'Testing Labs',
      description: 'Fully equipped quality control and R&D laboratories',
      icon: <TestTube className="h-8 w-8" />
    },
    {
      title: 'Administrative Offices',
      description: 'Modern workspaces for engineering, sales, and management',
      icon: <Building className="h-8 w-8" />
    }
  ];

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop',
      alt: 'Exterior view of facility'
    },
    {
      src: 'https://images.unsplash.com/photo-1581092921462-20524563c940?w=800&h=600&fit=crop',
      alt: 'Production floor close-ups'
    },
    {
      src: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop',
      alt: 'Injection molding machines'
    },
    {
      src: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop',
      alt: 'Rubber compounding area'
    },
    {
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      alt: 'Testing lab'
    },
    {
      src: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=600&fit=crop',
      alt: 'Warehouse & loading dock'
    }
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
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
        videoUrl="https://media.istockphoto.com/id/176748673/video/workers-in-factory-time-lapse.mp4?s=mp4-640x640-is&k=20&c=biybuK1k3tO33wJxS78x6iAWUvJwLtPxkRi62myE1pQ="
        title="World-Class <span class='text-primary'>Manufacturing Facilities</span>"
        subtitle="Precision, Capacity, Excellence."
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Manufacturing <span className="text-primary">Facility</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our state-of-the-art manufacturing facility is located in Lahore, Pakistan, spanning over 50,000 sq. ft. and employing a skilled workforce of 150+ professionals. Designed for efficiency and scalability, the site integrates production, testing, and storage under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Facility Features */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Facility <span className="text-primary">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive facility is designed to support every aspect of polymer manufacturing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilityFeatures.map((feature, index) => (
              <Card
                key={index}
                title={feature.title}
                className={`${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                  {feature.icon}
                </div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Photo <span className="text-primary">Gallery</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a visual tour of our manufacturing facility and capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`${index % 3 === 0 ? 'slide-in-left' : index % 3 === 1 ? 'scale-in' : 'slide-in-right'} aspect-video overflow-hidden rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-millat-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="scale-in max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Explore Our Production Processes
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how our advanced manufacturing processes deliver consistent quality and efficiency.
            </p>
            <Link 
              to="/production-processes" 
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>Explore Our Production Processes</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <ImageLightbox
        images={galleryImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </motion.div>
  );
};

export default ManufacturingFacilities;