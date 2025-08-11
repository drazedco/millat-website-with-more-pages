import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Truck, Globe, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../../components/HeroBanner';
import Card from '../../components/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const SupplyChainLogistics = () => {
  useScrollAnimation();

  const processSteps = [
    {
      title: 'Packaging',
      description: 'Secure packaging designed for product protection during transit',
      icon: <Package className="h-8 w-8" />
    },
    {
      title: 'Storage',
      description: 'Climate-controlled warehousing with inventory management systems',
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: 'Delivery Tracking',
      description: 'Real-time shipment tracking and delivery confirmation',
      icon: <Truck className="h-8 w-8" />
    },
    {
      title: 'Customs Compliance',
      description: 'Complete documentation and regulatory compliance for international shipping',
      icon: <Globe className="h-8 w-8" />
    }
  ];

  const regions = [
    { name: 'Netherlands', description: 'Primary European market' },
    { name: 'UAE', description: 'Middle East distribution hub' },
    { name: 'Australia', description: 'Asia-Pacific operations' },
    { name: 'Pakistan', description: 'Domestic market leadership' },
    { name: 'Europe', description: 'Expanding European presence' },
    { name: 'Asia', description: 'Growing Asian markets' }
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
        backgroundImage="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1920&h=1080&fit=crop"
        title="Supply Chain & <span class='text-primary'>Logistics</span>"
        subtitle="Efficient global supply chain management and reliable delivery systems"
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Importance of <span className="text-primary">Timely Delivery</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              In today's global marketplace, reliable supply chain management is crucial for business success. Our comprehensive logistics capabilities ensure that products reach customers safely, on time, and in perfect condition, regardless of destination.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We understand that our customers depend on us not just for quality products, but for dependable delivery that keeps their operations running smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Logistics <span className="text-primary">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive approach to packaging, storage, delivery, and compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                title={step.title}
                className={`${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                  {step.icon}
                </div>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Global <span className="text-primary">Reach</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our logistics network spans multiple continents, serving diverse markets with specialized requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <Card
                key={index}
                title={region.name}
                className={`${index % 3 === 0 ? 'slide-in-left' : index % 3 === 1 ? 'scale-in' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
                  <Globe className="h-6 w-6" />
                </div>
                <p className="text-gray-600">{region.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center scale-in">
            <div className="bg-light p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Delivery Statistics</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary">99.2%</div>
                  <div className="text-sm text-gray-600">On-Time Delivery</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">48hrs</div>
                  <div className="text-sm text-gray-600">Average Processing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-millat-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="scale-in max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Discuss Your Logistics Needs?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us to learn more about our supply chain capabilities and delivery options.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
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

export default SupplyChainLogistics;