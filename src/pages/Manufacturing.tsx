import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import Card from '../components/Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Manufacturing = () => {
  // Use the scroll animation hook
  useScrollAnimation();

  const processCards = [
    {
      title: 'Rubber & Plastic Molding',
      image: 'https://media.istockphoto.com/id/1218547333/photo/a-process-of-flat-surface-grinding-with-a-lot-of-sparks-and-liquid-cooling-indoors-at.jpg?s=612x612&w=0&k=20&c=gIUJJ3baTdD1ayTBiC1ce3qaiIHpizqy5r41qBgb3PM=',
      text: 'Utilizing advanced compression and transfer molding techniques to produce high-precision rubber and plastic components.'
    },
    {
      title: 'Rubber-to-Metal Bonding',
      image: 'https://media.istockphoto.com/id/915454512/photo/repairing-a-bicycle-tube-in-a-tire-bonding-workshop-detek-repair-station-in-the-vulcanization.jpg?s=612x612&w=0&k=20&c=boUwOgZ2mMIOPETV4uJKy0LhYL3DkeSzwLDfdReFiZw=',
      text: 'Our specialized chemical bonding process creates durable, high-integrity bonds between various rubber compounds and metal substrates.'
    },
    {
      title: 'Plastic Injection Molding',
      image: 'https://www.3dsystems.com/cdn-cgi/image/w=640,q=75,f=auto/sites/default/files/2020-04/small3d-systems-cimatron-synergy_0328-15in.jpg',
      text: 'High-speed, automated injection molding for creating complex and detailed plastic parts with exceptional consistency.'
    },
    {
      title: 'In-house Tooling & Die Making',
      image: 'https://www.paragonmedical.com/wp-content/uploads/in-house-production-tooling-manufacturing-400x267.jpg',
      text: 'Our on-site tool and die shop allows for rapid prototyping, custom mold creation, and precise maintenance.'
    },
    {
      title: 'Quality Checkpoints',
      image: 'https://s1-ecp.nextdayflyers.com/sms/images/sms/Static%20Page%20Images/20170402_Quality-Checkpoint-Hero.jpg',
      text: 'Rigorous quality control at every stage, from raw material inspection to final product testing, ensures ISO 9001:2015 compliance.'
    },
    {
      title: 'Expert Team',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop',
      text: 'Our skilled engineers and technicians oversee every step, ensuring that each product meets our exacting standards and your specific requirements.'
    }
  ];

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
        title="Our <span class='text-primary'>Manufacturing</span> Process"
        subtitle="Precision, efficiency, and quality from raw material to finished product."
      />

      {/* Manufacturing Process Grid */}
      <section 
        className="section-padding bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processCards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                image={card.image}
                imageAlt={card.title}
                className={`${index % 3 === 0 ? 'slide-in-left' : index % 3 === 1 ? 'scale-in' : 'slide-in-right'} lift-hover`}
              >
                <p className="text-gray-600">{card.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-millat-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="scale-in max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Explore Our Manufacturing Capabilities
            </h2>
            <p className="text-xl mb-8 opacity-90">
              See how our advanced processes can bring your project to life.
            </p>
            <Link to="/get-in-touch" className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-colors">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Manufacturing;