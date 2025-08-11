import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TestTube, Shield, CheckCircle, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../../components/HeroBanner';
import Card from '../../components/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const TestingQualityAssurance = () => {
  useScrollAnimation();

  const testingTypes = [
    {
      name: 'Tensile Testing',
      description: 'Measuring material strength and elongation properties',
      equipment: 'Universal testing machines with digital data logging'
    },
    {
      name: 'Hardness Testing',
      description: 'Shore A/D durometer testing for rubber and plastic components',
      equipment: 'Digital durometers with automated measurement systems'
    },
    {
      name: 'Chemical Resistance',
      description: 'Testing material compatibility with various chemicals and fluids',
      equipment: 'Environmental chambers and chemical exposure testing'
    },
    {
      name: 'Dimensional Accuracy',
      description: 'Precision measurement and tolerance verification',
      equipment: 'CMM machines and optical measurement systems'
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
        title="Testing & Quality <span class='text-primary'>Assurance</span>"
        subtitle="Comprehensive testing capabilities ensuring every product meets stringent quality standards"
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Millat's <span className="text-primary">Quality-First Philosophy</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Quality is not just a checkpoint in our process – it's embedded in every stage of production. Our comprehensive testing and quality assurance program ensures that every component meets or exceeds customer specifications and industry standards.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From incoming raw materials to finished products, our quality team maintains rigorous standards that have earned us ISO 9001:2015 certification and the trust of customers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Testing Types */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Testing <span className="text-primary">Types</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive testing capabilities cover all critical material and product properties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testingTypes.map((test, index) => (
              <Card
                key={index}
                title={test.name}
                className={`${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} lift-hover`}
              >
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-primary">
                  <TestTube className="h-6 w-6" />
                </div>
                <p className="text-gray-600 mb-4">{test.description}</p>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-500 font-medium">Equipment:</p>
                  <p className="text-sm text-gray-700">{test.equipment}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Used */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Modern Testing <span className="text-primary">Equipment</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Our quality laboratory is equipped with state-of-the-art testing machines and software systems that provide accurate, repeatable results. We continuously invest in the latest technology to maintain our competitive edge.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Settings className="h-6 w-6 text-primary" />
                  <span className="text-lg">Automated testing systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <span className="text-lg">Calibrated measurement tools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span className="text-lg">Digital data logging and analysis</span>
                </div>
              </div>
            </div>
            <div className="slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
                alt="Testing Equipment"
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
              Learn More About Our Quality Control
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover our comprehensive quality control and testing processes in manufacturing.
            </p>
            <Link 
              to="/manufacturing" 
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>Quality Control & Testing</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default TestingQualityAssurance;