import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Beaker, Cog, TestTube, Wrench, Factory, Lightbulb, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import Card from '../components/Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Capabilities = () => {
  useScrollAnimation();

  const capabilities = [
    {
      title: 'In-House Compounding',
      description: 'Complete control over material properties through custom formulations and blending.',
      icon: <Beaker className="h-8 w-8" />,
      link: '/capabilities/in-house-compounding'
    },
    {
      title: 'Technical Expertise',
      description: 'Skilled engineers and technicians with decades of polymer manufacturing experience.',
      icon: <Cog className="h-8 w-8" />,
      link: '/capabilities/technical-expertise'
    },
    {
      title: 'Testing & Quality Assurance',
      description: 'Comprehensive testing capabilities ensuring every product meets stringent quality standards.',
      icon: <TestTube className="h-8 w-8" />,
      link: '/capabilities/testing-quality-assurance'
    },
    {
      title: 'Product Customization',
      description: 'Tailored solutions designed to meet specific client requirements and applications.',
      icon: <Wrench className="h-8 w-8" />,
      link: '/capabilities/product-customization'
    },
    {
      title: 'Large-Scale Production',
      description: 'High-volume manufacturing capabilities with consistent quality and timely delivery.',
      icon: <Factory className="h-8 w-8" />,
      link: '/capabilities/large-scale-production'
    },
    {
      title: 'Prototype Development',
      description: 'Rapid prototyping and testing to validate designs before full-scale production.',
      icon: <Lightbulb className="h-8 w-8" />,
      link: '/capabilities/prototype-development'
    },
    {
      title: 'Supply Chain & Logistics',
      description: 'Efficient global supply chain management and reliable delivery systems.',
      icon: <Truck className="h-8 w-8" />,
      link: '/capabilities/supply-chain-logistics'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Precision Manufacturing',
      description: 'Advanced machinery and skilled craftsmanship ensure dimensional accuracy and consistent quality.',
      icon: <Cog className="h-6 w-6" />
    },
    {
      title: 'Quality Control',
      description: 'Rigorous testing at every stage from raw materials to finished products.',
      icon: <TestTube className="h-6 w-6" />
    },
    {
      title: 'Fast Turnaround',
      description: 'Efficient processes and streamlined operations deliver products on time, every time.',
      icon: <Factory className="h-6 w-6" />
    },
    {
      title: 'Customization',
      description: 'Flexible manufacturing capabilities to meet unique specifications and requirements.',
      icon: <Wrench className="h-6 w-6" />
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
        title="Our <span class='text-primary'>Capabilities</span>"
        subtitle="End-to-end solutions from formulation to delivery"
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Complete Manufacturing <span className="text-primary">Control</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                At Millat Polymer & Rubber, we maintain control over every stage of production – from raw material compounding to final product delivery. This integrated approach ensures consistent quality, faster turnaround times, and the flexibility to meet unique customer requirements.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our comprehensive capabilities enable us to serve as a single-source solution for all your polymer component needs, reducing complexity and improving efficiency for our clients.
              </p>
            </div>
            <div className="slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1581092921462-20524563c940?w=800&h=600&fit=crop"
                alt="Manufacturing Control"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Core <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive manufacturing and technical capabilities that deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Link
                key={index}
                to={capability.link}
                className={`${index % 3 === 0 ? 'slide-in-left' : index % 3 === 1 ? 'scale-in' : 'slide-in-right'} group`}
              >
                <Card className="h-full lift-hover group-hover:shadow-xl transition-all duration-300">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{capability.description}</p>
                  <div className="flex items-center text-primary font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Millat */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Why Choose <span className="text-primary">Millat</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our competitive advantages that set us apart in the polymer manufacturing industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <Card
                key={index}
                title={reason.title}
                className={`${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
                  {reason.icon}
                </div>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="scale-in max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Partner with a manufacturing team that delivers from concept to completion
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Ready to discuss your project requirements? Our team is here to help you find the perfect solution.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-secondary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>Contact Us</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Capabilities;