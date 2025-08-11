import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, CheckCircle, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../../components/HeroBanner';
import Card from '../../components/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const QualityManagementSystem = () => {
  useScrollAnimation();

  const practices = [
    {
      title: 'Regular Auditing',
      description: 'Systematic internal and external audits to ensure compliance',
      icon: <CheckCircle className="h-8 w-8" />
    },
    {
      title: 'Continuous Improvement',
      description: 'Ongoing process optimization and enhancement initiatives',
      icon: <TrendingUp className="h-8 w-8" />
    },
    {
      title: 'Defect Prevention',
      description: 'Proactive measures to prevent quality issues before they occur',
      icon: <Award className="h-8 w-8" />
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
        backgroundImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop"
        title="Quality Management <span class='text-primary'>System</span>"
        subtitle="ISO 9001:2015 certified processes ensuring consistent excellence in all operations"
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Purpose and Benefits of <span className="text-primary">QMS</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Our Quality Management System provides a structured framework for consistently delivering products that meet customer requirements and regulatory standards. It ensures that quality is built into every process, from design and development to production and delivery.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              By implementing ISO 9001:2015 standards, we demonstrate our commitment to quality excellence and continuous improvement, providing our customers with confidence in our products and services.
            </p>
          </div>
        </div>
      </section>

      {/* Practices */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              QMS <span className="text-primary">Practices</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key practices that form the foundation of our quality management approach.
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

      {/* Impact */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Impact on Product <span className="text-primary">Consistency</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Our QMS directly impacts product consistency and client satisfaction by establishing standardized processes, clear quality criteria, and systematic monitoring. This results in predictable outcomes and reliable performance across all our products.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-primary" />
                  <span className="text-lg">Enhanced customer satisfaction</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <span className="text-lg">Reduced defect rates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-primary" />
                  <span className="text-lg">Improved process efficiency</span>
                </div>
              </div>
            </div>
            <div className="slide-in-right">
              <div className="bg-light p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-center">Quality Metrics</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">99.5%</div>
                    <div className="text-sm text-gray-600">Quality Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">98%</div>
                    <div className="text-sm text-gray-600">Customer Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">0.5%</div>
                    <div className="text-sm text-gray-600">Defect Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">100%</div>
                    <div className="text-sm text-gray-600">On-Time Delivery</div>
                  </div>
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
              Learn About Our Safety Standards
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how our safety and quality standards complement our QMS framework.
            </p>
            <Link 
              to="/compliance/safety-quality-standards" 
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>Safety & Quality Standards</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default QualityManagementSystem;