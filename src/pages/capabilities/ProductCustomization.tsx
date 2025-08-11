import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Users, Lightbulb, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../../components/HeroBanner';
import Card from '../../components/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ProductCustomization = () => {
  useScrollAnimation();

  const processSteps = [
    {
      step: '1',
      title: 'Consultation',
      description: 'Understanding your specific requirements and application needs',
      icon: <Users className="h-6 w-6" />
    },
    {
      step: '2',
      title: 'Design',
      description: 'Creating detailed specifications and technical drawings',
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      step: '3',
      title: 'Material Selection',
      description: 'Choosing optimal materials for performance and durability',
      icon: <Wrench className="h-6 w-6" />
    },
    {
      step: '4',
      title: 'Production',
      description: 'Manufacturing your custom components to exact specifications',
      icon: <CheckCircle className="h-6 w-6" />
    }
  ];

  const examples = [
    {
      title: 'Custom Engine Mount',
      description: 'Developed specialized vibration-damping mount for heavy-duty industrial equipment',
      challenge: 'Required unique geometry and enhanced vibration isolation',
      solution: 'Custom EPDM compound with optimized durometer and bonding system'
    },
    {
      title: 'Specialized Gasket System',
      description: 'Multi-component sealing solution for high-pressure hydraulic application',
      challenge: 'Complex sealing requirements with multiple fluid compatibility',
      solution: 'Custom NBR formulation with integrated backup rings'
    },
    {
      title: 'Custom Hose Assembly',
      description: 'High-temperature resistant hose for specialized industrial process',
      challenge: 'Extreme temperature cycling and chemical resistance requirements',
      solution: 'Silicone-based compound with reinforced construction'
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
        title="Product <span class='text-primary'>Customization</span>"
        subtitle="Tailored solutions designed to meet your specific requirements and applications"
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Why Customization is Our <span className="text-primary">Competitive Advantage</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Every application is unique, and standard solutions don't always meet specific performance requirements. Our customization capabilities allow us to create products that perfectly match your needs, providing superior performance and value.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From material formulation to complex geometries, we work closely with our customers to develop solutions that solve real-world challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Customization <span className="text-primary">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach that ensures your custom solution meets all requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                className={`${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Custom Project <span className="text-primary">Examples</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world examples of how our customization capabilities solved unique challenges.
            </p>
          </div>

          <div className="space-y-8">
            {examples.map((example, index) => (
              <Card
                key={index}
                className={`${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} lift-hover`}
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">{example.title}</h3>
                    <p className="text-lg text-gray-700 mb-4">{example.description}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-2">Challenge:</h4>
                      <p className="text-red-700">{example.challenge}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Solution:</h4>
                      <p className="text-green-700">{example.solution}</p>
                    </div>
                  </div>
                </div>
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
              Ready to Discuss Your Custom Requirements?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us to start the conversation about your unique application needs.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-secondary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>Contact Us for Custom Orders</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProductCustomization;