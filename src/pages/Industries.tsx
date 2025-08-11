import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import Card from '../components/Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Industries = () => {
  // Use the scroll animation hook
  useScrollAnimation();

  const industries = [
    {
      title: 'Automotive & OEM',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop',
      text: 'Rubber and plastic components for cars, motorcycles, rickshaws, and electric vehicles.',
      icon: '🚗'
    },
    {
      title: 'Agriculture',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop',
      text: 'Hoses, gaskets, and rubber parts for irrigation and machinery.',
      icon: '🌾'
    },
    {
      title: 'Construction & Infrastructure',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
      text: 'Rubber expansion joints, water stoppers, and sealing strips for tunnels and bridges.',
      icon: '🏗️'
    },
    {
      title: 'Water Supply & Drainage',
      image: 'https://cdn.pixabay.com/photo/2019/08/15/17/56/production-4408573_640.jpg',
      text: 'EPDM gaskets, PVC pipes, and utility seals for fluid and sewage control systems.',
      icon: '💧'
    },
    {
      title: 'HVAC & Ducting',
      image: 'https://images.unsplash.com/photo-1629080237728-3d483835771c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'Rubber and plastic parts used in heating, ventilation, and air-conditioning systems.',
      icon: '❄️'
    },
    {
      title: 'Marine & Shipbuilding',
      image: 'https://images.unsplash.com/photo-1594471259556-a71b42315b89?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'Corrosion-resistant rubber hoses and gaskets for marine environments.',
      icon: '⚓'
    },
    {
      title: 'Energy & Power',
      image: 'https://images.unsplash.com/photo-1581092921462-20524563c940?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'Rubber insulation components, seals, and pipe systems used in power generation and renewable energy.',
      icon: '⚡'
    },
    {
      title: 'Electronics & Appliances',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'Plastic housings, grommets, and vibration dampers for appliances and electronics.',
      icon: '💻'
    },
    {
      title: 'Health & Safety',
      image: 'https://images.unsplash.com/photo-1581091217823-ce8a7c494371?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'Rubber hot water bottles, grip pads, and anti-slip safety items.',
      icon: '🏥'
    },
    {
      title: 'Custom Molding & Industrial',
      image: 'https://cdn.pixabay.com/photo/2014/09/13/21/47/tools-444499_640.jpg',
      text: 'Tailored rubber and plastic molded parts for a wide range of industrial machinery.',
      icon: '🔧'
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
        backgroundImage="https://bistaterubber.com/wp-content/uploads/2023/07/Industrial-Rubber-Products-Fueling-Innovation-in-Varied-Industries-1200x675.jpg"
        title="Industries We <span class='text-primary'>Serve</span>"
        subtitle="Driving Excellence Across Sectors with Reliable Polymer & Rubber Solutions."
      />

      {/* Industries Grid */}
      <section 
        className="section-padding bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card
                key={index}
                image={industry.image}
                imageAlt={industry.title}
                className={`${index % 3 === 0 ? 'slide-in-left' : index % 3 === 1 ? 'scale-in' : 'slide-in-right'} group hover:-translate-y-2 lift-hover`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-3xl">{industry.icon}</div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {industry.title}
                  </h3>
                </div>
                <p className="text-gray-600">{industry.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Industries;