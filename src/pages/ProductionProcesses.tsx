import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Wrench, Cog, CheckCircle, Package, TestTube, Settings, Cpu, Zap, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import Card from '../components/Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProductionProcesses = () => {
  useScrollAnimation();

  const processSteps = [
    {
      step: '1',
      title: 'Design',
      description: 'CAD design of components',
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      step: '2',
      title: 'Tooling',
      description: 'Custom mold creation in-house',
      icon: <Wrench className="h-6 w-6" />
    },
    {
      step: '3',
      title: 'Molding',
      description: 'Rubber & plastic molding to specifications',
      icon: <Cog className="h-6 w-6" />
    },
    {
      step: '4',
      title: 'Finishing',
      description: 'Trimming, polishing, surface treatments',
      icon: <Settings className="h-6 w-6" />
    },
    {
      step: '5',
      title: 'Testing',
      description: 'Rigorous quality checks',
      icon: <TestTube className="h-6 w-6" />
    },
    {
      step: '6',
      title: 'Packaging',
      description: 'Secure and customized packing',
      icon: <Package className="h-6 w-6" />
    }
  ];

  const technologies = [
    {
      title: 'Automation Systems',
      description: 'Advanced automated production lines',
      icon: <Cpu className="h-8 w-8" />
    },
    {
      title: 'Advanced QC Machines',
      description: 'Precision quality control equipment',
      icon: <CheckCircle className="h-8 w-8" />
    },
    {
      title: 'Material Handling Systems',
      description: 'Efficient material flow and logistics',
      icon: <Truck className="h-8 w-8" />
    },
    {
      title: 'Precision Molding Equipment',
      description: 'High-precision injection and compression molding',
      icon: <Zap className="h-8 w-8" />
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
        title="Advanced <span class='text-primary'>Production Processes</span>"
        subtitle="Efficiency, precision, and flexibility from concept to final product"
      />

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Optimized for Quality and <span className="text-primary">Cost-Effectiveness</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our production processes combine efficiency, precision, and flexibility. From concept to final product, every stage is optimized for quality and cost-effectiveness, ensuring that our customers receive superior products that meet their exact specifications.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Step-by-Step <span className="text-primary">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures consistent quality and efficiency at every stage.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-primary transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid lg:grid-cols-6 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  {/* Step Circle */}
                  <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold relative z-10 shadow-lg">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Used */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Technology <span className="text-primary">Used</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art equipment and systems that enable precision manufacturing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <Card
                key={index}
                title={tech.title}
                className={`${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                  {tech.icon}
                </div>
                <p className="text-gray-600 leading-relaxed">{tech.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="scale-in max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              See Our Quality Control & Testing
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how our rigorous quality control processes ensure every product meets our high standards.
            </p>
            <Link 
              to="/quality-control-testing" 
              className="bg-white text-secondary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>See Our Quality Control & Testing</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProductionProcesses;