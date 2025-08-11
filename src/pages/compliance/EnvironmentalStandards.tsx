import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Recycle, Zap, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../../components/HeroBanner';
import Card from '../../components/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const EnvironmentalStandards = () => {
  useScrollAnimation();

  const practices = [
    {
      title: 'Waste Reduction',
      description: 'Systematic waste minimization and recycling programs',
      icon: <Recycle className="h-8 w-8" />
    },
    {
      title: 'Water Recycling',
      description: 'Closed-loop water systems and treatment processes',
      icon: <Droplets className="h-8 w-8" />
    },
    {
      title: 'Renewable Energy',
      description: 'Solar power integration and energy efficiency initiatives',
      icon: <Zap className="h-8 w-8" />
    }
  ];

  const impactStats = [
    { metric: '40%', description: 'Waste Reduction', period: 'Since 2022' },
    { metric: '30%', description: 'Energy Savings', period: 'Annual' },
    { metric: '25%', description: 'Water Conservation', period: 'Yearly' },
    { metric: '2,500', description: 'Trees Planted', period: 'To Date' }
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
        backgroundImage="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&h=1080&fit=crop"
        title="Environmental <span class='text-primary'>Standards</span>"
        subtitle="Sustainable manufacturing practices and environmental protection initiatives"
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Millat's <span className="text-primary">Environmental Responsibility</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              We recognize our responsibility to protect the environment for future generations. Our comprehensive environmental management program focuses on reducing our ecological footprint while maintaining operational excellence and product quality.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Through innovative technologies, sustainable practices, and continuous improvement, we strive to be a leader in environmentally responsible manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Key Practices */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Key Environmental <span className="text-primary">Practices</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to environmental stewardship is demonstrated through concrete actions and measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {practices.map((practice, index) => (
              <Card
                key={index}
                title={practice.title}
                className={`${index % 3 === 0 ? 'slide-in-left' : index % 3 === 1 ? 'scale-in' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                  {practice.icon}
                </div>
                <p className="text-gray-600 leading-relaxed">{practice.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Environmental <span className="text-primary">Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable results from our environmental initiatives and sustainability programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <Card
                key={index}
                className={`${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                  <Leaf className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">{stat.metric}</h3>
                <p className="text-lg font-semibold mb-1">{stat.description}</p>
                <p className="text-gray-600 text-sm">{stat.period}</p>
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
              Learn About Our CSR Initiatives
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how our environmental standards support our broader corporate social responsibility commitments.
            </p>
            <Link 
              to="/csr-initiatives" 
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>CSR Initiatives</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default EnvironmentalStandards;