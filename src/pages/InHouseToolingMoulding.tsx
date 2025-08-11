import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Wrench, CheckCircle, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import Card from '../components/Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const InHouseToolingMoulding = () => {
  useScrollAnimation();

  const benefits = [
    {
      title: 'Speed',
      description: 'Reduced lead times through integrated tooling and production',
      icon: <Zap className="h-8 w-8" />
    },
    {
      title: 'Customization',
      description: 'Made-to-spec molds tailored to your exact requirements',
      icon: <Wrench className="h-8 w-8" />
    },
    {
      title: 'Quality Control',
      description: 'Direct oversight of tooling ensures consistent quality',
      icon: <CheckCircle className="h-8 w-8" />
    }
  ];

  const capabilities = [
    'Molds for rubber, plastic, and composite materials',
    'High-precision CNC and EDM machines',
    'Capability for multi-cavity and complex designs',
    'Rapid prototyping and production tooling',
    'Tool maintenance and modification services'
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
        title="Precision Tooling, <span class='text-primary'>Faster Turnaround</span>"
        subtitle="Complete in-house tooling and moulding capabilities for superior control and quality"
      />

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Benefits of In-House <span className="text-primary">Tooling</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our integrated approach to tooling and manufacturing delivers superior results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                title={benefit.title}
                className={`${index % 3 === 0 ? 'slide-in-left' : index % 3 === 1 ? 'scale-in' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                  {benefit.icon}
                </div>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tooling Capabilities */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Tooling <span className="text-primary">Capabilities</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Our comprehensive tooling capabilities enable us to create precision molds and tooling for a wide range of applications, from simple components to complex multi-cavity designs.
              </p>
              <div className="space-y-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1" />
                    <span className="text-lg">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1581092921462-20524563c940?w=800&h=600&fit=crop"
                alt="CNC Tooling Machine"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
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
              Real-world example of how our in-house tooling capabilities deliver results.
            </p>
          </div>

          <Card className="scale-in max-w-4xl mx-auto lift-hover">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Custom Rubber Gasket Tooling</h3>
                <p className="text-lg text-gray-700 mb-6">
                  A major industrial client required custom rubber gaskets with complex geometries and tight tolerances for a critical application.
                </p>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Challenge:</h4>
                    <p className="text-blue-700">Complex multi-cavity mold design with intricate sealing surfaces and precise dimensional requirements.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Solution:</h4>
                    <p className="text-green-700">Our in-house tooling team designed and manufactured a precision mold, reducing production time by 30% compared to outsourced tooling.</p>
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
                <div className="text-2xl font-bold text-primary">30%</div>
                <div className="text-sm text-gray-600">Faster Production</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">25%</div>
                <div className="text-sm text-gray-600">Cost Reduction</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-gray-600">Quality Achievement</div>
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
              Explore Product Customization
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how our tooling capabilities enable complete product customization for your specific needs.
            </p>
            <Link 
              to="/capabilities/product-customization" 
              className="bg-white text-secondary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>Explore Product Customization</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default InHouseToolingMoulding;