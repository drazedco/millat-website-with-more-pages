import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, TrendingUp, Cpu, Monitor, Printer, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import Card from '../components/Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const RDInnovation = () => {
  useScrollAnimation();

  const innovations = [
    {
      title: 'New EPDM Blend',
      description: 'Developed advanced EPDM formulation with 15% higher heat resistance',
      impact: 'Extended service life in high-temperature applications'
    },
    {
      title: 'Automated Quality Inspection',
      description: 'Implemented AI-powered quality inspection system',
      impact: 'Reduced inspection time by 40% while improving accuracy'
    },
    {
      title: 'Eco-Friendly Compounds',
      description: 'Created sustainable rubber compounds using recycled materials',
      impact: '25% reduction in environmental impact'
    }
  ];

  const investments = [
    {
      title: 'CAD & Simulation Software',
      description: 'Advanced design and simulation capabilities',
      icon: <Monitor className="h-8 w-8" />
    },
    {
      title: 'Prototyping Tools',
      description: 'Rapid prototyping and testing equipment',
      icon: <Printer className="h-8 w-8" />
    },
    {
      title: '3D Scanning Equipment',
      description: 'Precision measurement and reverse engineering',
      icon: <Search className="h-8 w-8" />
    },
    {
      title: 'AI & Machine Learning',
      description: 'Smart manufacturing and predictive analytics',
      icon: <Cpu className="h-8 w-8" />
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
        title="Driving Innovation <span class='text-primary'>Forward</span>"
        subtitle="Fostering a culture where ideas become reality through experimentation and refinement"
      />

      {/* Innovation Culture */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Innovation <span className="text-primary">Culture</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              We foster a culture where ideas become reality—encouraging our team to experiment, innovate, and refine. Our commitment to research and development drives continuous improvement in our products, processes, and capabilities, ensuring we stay at the forefront of polymer technology.
            </p>
          </div>
        </div>
      </section>

      {/* Recent Innovations */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Recent <span className="text-primary">Innovations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Examples of how our R&D efforts translate into real-world improvements and solutions.
            </p>
          </div>

          <div className="space-y-8">
            {innovations.map((innovation, index) => (
              <Card
                key={index}
                className={`${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} lift-hover`}
              >
                <div className="grid lg:grid-cols-3 gap-6">
                  <div>
                    <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-primary">
                      <Lightbulb className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-primary">{innovation.title}</h3>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Innovation:</h4>
                    <p className="text-gray-700">{innovation.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Impact:</h4>
                    <p className="text-gray-700">{innovation.impact}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Investments */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Technology <span className="text-primary">Investments</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic investments in cutting-edge technology that enable innovation and efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investments.map((investment, index) => (
              <Card
                key={index}
                title={investment.title}
                className={`${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                  {investment.icon}
                </div>
                <p className="text-gray-600 leading-relaxed">{investment.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Stats */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Innovation <span className="text-primary">Impact</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="slide-in-left text-center lift-hover">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">15+</h3>
              <p className="text-lg font-semibold">R&D Projects</p>
              <p className="text-gray-600 text-sm">Active development</p>
            </Card>

            <Card className="slide-in-right text-center lift-hover">
              <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-secondary">
                <Lightbulb className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-secondary mb-2">25%</h3>
              <p className="text-lg font-semibold">Efficiency Gain</p>
              <p className="text-gray-600 text-sm">Through innovation</p>
            </Card>

            <Card className="slide-in-left text-center lift-hover">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                <Cpu className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">5</h3>
              <p className="text-lg font-semibold">Patents Filed</p>
              <p className="text-gray-600 text-sm">Proprietary technologies</p>
            </Card>

            <Card className="slide-in-right text-center lift-hover">
              <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-secondary">
                <Monitor className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-secondary mb-2">10%</h3>
              <p className="text-lg font-semibold">Revenue in R&D</p>
              <p className="text-gray-600 text-sm">Annual investment</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="scale-in max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              See Our Prototype Development
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how our R&D capabilities translate into rapid prototype development and testing.
            </p>
            <Link 
              to="/capabilities/prototype-development" 
              className="bg-white text-secondary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>See Our Prototype Development</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default RDInnovation;