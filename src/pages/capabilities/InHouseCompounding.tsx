import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Beaker, Cog, TestTube, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../../components/HeroBanner';
import Card from '../../components/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const InHouseCompounding = () => {
  useScrollAnimation();

  const materials = [
    {
      name: 'EPDM',
      description: 'Excellent weather resistance and ozone protection',
      properties: ['Temperature range: -40°C to +150°C', 'UV resistant', 'Chemical resistant']
    },
    {
      name: 'Silicone',
      description: 'Superior temperature resistance and flexibility',
      properties: ['Temperature range: -60°C to +200°C', 'Food grade available', 'Excellent compression set']
    },
    {
      name: 'PVC',
      description: 'Versatile thermoplastic with excellent durability',
      properties: ['Chemical resistant', 'Flame retardant', 'Cost effective']
    },
    {
      name: 'Engineering Plastics',
      description: 'High-performance polymers for demanding applications',
      properties: ['High strength-to-weight ratio', 'Dimensional stability', 'Chemical resistance']
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
        backgroundImage="https://images.unsplash.com/photo-1581092921462-20524563c940?w=1920&h=1080&fit=crop"
        title="In-House <span class='text-primary'>Compounding</span>"
        subtitle="Complete control over material properties through custom formulations and precision blending"
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Benefits of Controlling <span className="text-primary">Raw Material Properties</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Our in-house compounding facility gives us complete control over material properties, allowing us to create custom formulations that meet exact specifications. This capability ensures consistent quality, reduces lead times, and enables us to optimize materials for specific applications.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              By controlling the entire process from raw materials to finished compounds, we can guarantee the performance characteristics our customers require while maintaining cost-effectiveness and supply chain reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Materials We Process */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Materials We <span className="text-primary">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our compounding expertise covers a wide range of polymer materials, each optimized for specific performance requirements.
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

      {/* Custom Formulation */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Custom <span className="text-primary">Formulation</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Our experienced chemists and engineers work closely with clients to develop specialized blends that meet unique performance requirements. We consider factors such as operating temperature, chemical exposure, mechanical stress, and environmental conditions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <TestTube className="h-6 w-6 text-primary" />
                  <span className="text-lg">Laboratory testing and validation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Cog className="h-6 w-6 text-primary" />
                  <span className="text-lg">Pilot-scale production trials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="h-6 w-6 text-primary" />
                  <span className="text-lg">Performance optimization</span>
                </div>
              </div>
            </div>
            <div className="slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop"
                alt="Custom Formulation"
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
              Learn More About Our Manufacturing Process
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how our material compounding integrates with our complete manufacturing capabilities.
            </p>
            <Link 
              to="/manufacturing" 
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>Explore Manufacturing</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default InHouseCompounding;