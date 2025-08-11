import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Printer, Cog, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../../components/HeroBanner';
import Card from '../../components/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const PrototypeDevelopment = () => {
  useScrollAnimation();

  const tools = [
    {
      name: 'CAD Software',
      description: 'Advanced 3D modeling and simulation capabilities',
      icon: <Cog className="h-8 w-8" />
    },
    {
      name: '3D Printing',
      description: 'Rapid prototyping for concept validation and testing',
      icon: <Printer className="h-8 w-8" />
    },
    {
      name: 'Rapid Molds',
      description: 'Quick-turn tooling for prototype production',
      icon: <Lightbulb className="h-8 w-8" />
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
        title="Prototype <span class='text-primary'>Development</span>"
        subtitle="Rapid prototyping and testing to validate designs before full-scale production"
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Importance of <span className="text-primary">Prototyping</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Prototyping is crucial for reducing risks, validating designs, and optimizing performance before committing to full production. Our rapid prototyping capabilities allow customers to test and refine their concepts quickly and cost-effectively.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              By identifying potential issues early in the development process, we help our customers save time, reduce costs, and ensure their final products meet all performance requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Tools & Methods */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Tools & <span className="text-primary">Methods</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art tools and methodologies for rapid prototype development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <Card
                key={index}
                title={tool.name}
                className={`${index % 3 === 0 ? 'slide-in-left' : index % 3 === 1 ? 'scale-in' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                  {tool.icon}
                </div>
                <p className="text-gray-600 leading-relaxed">{tool.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Case <span className="text-primary">Study</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How prototyping improved a final product design and saved development time.
            </p>
          </div>

          <Card className="scale-in max-w-4xl mx-auto lift-hover">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Automotive Engine Mount Optimization</h3>
                <p className="text-lg text-gray-700 mb-6">
                  A major automotive manufacturer needed a custom engine mount with specific vibration damping characteristics for a new vehicle model.
                </p>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Challenge:</h4>
                    <p className="text-blue-700">The initial design showed excessive vibration transmission during testing, requiring design modifications.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Solution:</h4>
                    <p className="text-green-700">Through rapid prototyping, we tested 3 different compound formulations and geometries, identifying the optimal solution in just 2 weeks.</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-primary/10 w-32 h-32 rounded-2xl flex items-center justify-center text-primary">
                  <TrendingUp className="h-16 w-16" />
                </div>
              </div>
            </div>
            <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">75%</div>
                <div className="text-sm text-gray-600">Faster Development</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">40%</div>
                <div className="text-sm text-gray-600">Cost Reduction</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-gray-600">Performance Improvement</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="scale-in max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Explore Our Innovation Capabilities
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Learn more about our research and development initiatives that drive continuous innovation.
            </p>
            <Link 
              to="/manufacturing" 
              className="bg-white text-secondary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>R&D & Innovation</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default PrototypeDevelopment;