import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Beaker, Thermometer, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import Card from '../components/Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const MaterialCompounding = () => {
  useScrollAnimation();

  const materials = [
    {
      name: 'Rubber (Natural, SBR, NBR)',
      description: 'High-quality rubber compounds for various applications',
      properties: ['Excellent elasticity', 'Chemical resistance', 'Temperature stability']
    },
    {
      name: 'EPDM',
      description: 'Weather-resistant sealing solutions',
      properties: ['UV resistance', 'Ozone protection', 'Temperature range: -40°C to +150°C']
    },
    {
      name: 'Silicone',
      description: 'High-temperature performance materials',
      properties: ['Temperature range: -60°C to +200°C', 'Food grade available', 'Excellent flexibility']
    },
    {
      name: 'PVC & Engineering Plastics',
      description: 'Durable, versatile thermoplastic solutions',
      properties: ['Chemical resistance', 'Dimensional stability', 'Cost-effective processing']
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
        backgroundImage="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1920&h=1080&fit=crop"
        title="Material <span class='text-primary'>Compounding</span>"
        subtitle="Consistency, flexibility, and performance from the ground up"
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Controlling Every <span className="text-primary">Batch</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our in-house material compounding ensures consistency, flexibility, and performance. By controlling every batch, we maintain product quality from the ground up, enabling us to create custom formulations that meet specific requirements while ensuring reliable supply and consistent properties.
            </p>
          </div>
        </div>
      </section>

      {/* Materials Used */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Materials <span className="text-primary">Used</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive range of materials enables us to meet diverse application requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {materials.map((material, index) => (
              <Card
                key={index}
                title={material.name}
                className={`${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} lift-hover`}
              >
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-primary">
                  <Beaker className="h-6 w-6" />
                </div>
                <p className="text-gray-600 mb-4">{material.description}</p>
                <ul className="space-y-2">
                  {material.properties.map((property, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      {property}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Formulations */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Custom <span className="text-primary">Formulations</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Tailored blends to meet chemical, thermal, or mechanical requirements. Our experienced chemists work closely with customers to develop specialized compounds that deliver optimal performance for specific applications.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Thermometer className="h-6 w-6 text-primary" />
                  <span className="text-lg">Temperature-specific formulations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <span className="text-lg">Chemical resistance optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="h-6 w-6 text-primary" />
                  <span className="text-lg">Mechanical property enhancement</span>
                </div>
              </div>
            </div>
            <div className="slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1581092921462-20524563c940?w=800&h=600&fit=crop"
                alt="Material Compounding"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-millat-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="scale-in max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Discover In-House Compounding
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Learn more about our comprehensive in-house compounding capabilities and custom formulation services.
            </p>
            <Link 
              to="/capabilities/in-house-compounding" 
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>Discover In-House Compounding</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default MaterialCompounding;