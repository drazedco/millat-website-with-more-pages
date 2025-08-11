import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, BarChart, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../../components/HeroBanner';
import Card from '../../components/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const LargeScaleProduction = () => {
  useScrollAnimation();

  const capacityStats = [
    {
      metric: '500+',
      unit: 'Tons/Month',
      description: 'Rubber processing capacity',
      icon: <Factory className="h-8 w-8" />
    },
    {
      metric: '50,000+',
      unit: 'Units/Day',
      description: 'Component production capacity',
      icon: <BarChart className="h-8 w-8" />
    },
    {
      metric: '24/7',
      unit: 'Operations',
      description: 'Continuous production capability',
      icon: <Clock className="h-8 w-8" />
    },
    {
      metric: '99.5%',
      unit: 'Quality Rate',
      description: 'Consistent quality at scale',
      icon: <CheckCircle className="h-8 w-8" />
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
        backgroundImage="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&h=1080&fit=crop"
        title="Large-Scale <span class='text-primary'>Production</span>"
        subtitle="High-volume manufacturing capabilities with consistent quality and timely delivery"
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Capability to Meet <span className="text-primary">Large Orders</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Our state-of-the-art manufacturing facility is designed for high-volume production without compromising quality. We have the capacity, systems, and expertise to handle large orders while maintaining the precision and consistency our customers expect.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From automotive OEMs to industrial manufacturers, we serve clients who require reliable, large-scale production capabilities backed by rigorous quality control.
            </p>
          </div>
        </div>
      </section>

      {/* Output Capacity */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Output <span className="text-primary">Capacity</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our production capabilities are designed to meet the demands of high-volume manufacturing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capacityStats.map((stat, index) => (
              <Card
                key={index}
                className={`${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">{stat.metric}</h3>
                <p className="text-xl font-semibold mb-2">{stat.unit}</p>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Management */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Process <span className="text-primary">Management</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Our advanced production management systems ensure efficient scheduling, real-time batch tracking, and comprehensive quality checks throughout the manufacturing process. This systematic approach enables us to maintain consistency even at high volumes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span className="text-lg">Advanced production scheduling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart className="h-6 w-6 text-primary" />
                  <span className="text-lg">Real-time batch tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Factory className="h-6 w-6 text-primary" />
                  <span className="text-lg">Automated quality checkpoints</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-primary" />
                  <span className="text-lg">On-time delivery tracking</span>
                </div>
              </div>
            </div>
            <div className="slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1581092921462-20524563c940?w=800&h=600&fit=crop"
                alt="Process Management"
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
              Learn About Our Supply Chain Capabilities
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how our logistics and supply chain management supports large-scale production.
            </p>
            <Link 
              to="/capabilities/supply-chain-logistics" 
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>Supply Chain & Logistics</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default LargeScaleProduction;