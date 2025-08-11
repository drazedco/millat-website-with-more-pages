import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, CheckCircle, Award, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../../components/HeroBanner';
import Card from '../../components/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const SafetyQualityStandards = () => {
  useScrollAnimation();

  const standards = [
    {
      industry: 'Automotive',
      standards: ['ISO/TS 16949', 'IATF 16949', 'PPAP Requirements'],
      icon: <Shield className="h-8 w-8" />
    },
    {
      industry: 'Industrial',
      standards: ['ISO 9001:2015', 'OSHA Compliance', 'CE Marking'],
      icon: <Settings className="h-8 w-8" />
    },
    {
      industry: 'Construction',
      standards: ['ASTM Standards', 'EN Standards', 'Building Codes'],
      icon: <Award className="h-8 w-8" />
    }
  ];

  const inspectionSteps = [
    'In-line quality checks during production',
    'Final product audits and testing',
    'Sample testing and validation',
    'Documentation and traceability'
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
        title="Safety & Quality <span class='text-primary'>Standards</span>"
        subtitle="Rigorous safety protocols and quality standards across all manufacturing processes"
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Safety in Product Design and <span className="text-primary">Manufacturing</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Safety is integrated into every aspect of our product design and manufacturing processes. From initial concept through final delivery, we ensure that all products meet the highest safety standards and regulatory requirements for their intended applications.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our comprehensive approach to safety and quality ensures that our products not only meet specifications but exceed customer expectations for reliability and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Standards Met */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Industry <span className="text-primary">Standards</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We meet and exceed standards across multiple industries, ensuring compliance and safety.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {standards.map((standard, index) => (
              <Card
                key={index}
                title={standard.industry}
                className={`${index % 3 === 0 ? 'slide-in-left' : index % 3 === 1 ? 'scale-in' : 'slide-in-right'} lift-hover`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  {standard.icon}
                </div>
                <ul className="space-y-2">
                  {standard.standards.map((std, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      {std}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection Process */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Inspection <span className="text-primary">Process</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Our multi-stage inspection process ensures that every product meets quality and safety standards before it reaches our customers. We employ both automated and manual inspection methods to guarantee consistency and reliability.
              </p>
              <div className="space-y-4">
                {inspectionSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mt-1">
                      {index + 1}
                    </div>
                    <span className="text-lg">{step}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="slide-in-right">
              <div className="bg-light p-8 rounded-2xl shadow-lg">
                <div className="text-center mb-6">
                  <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">Quality Metrics</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">99.7%</div>
                    <div className="text-sm text-gray-600">Pass Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">100%</div>
                    <div className="text-sm text-gray-600">Inspection Coverage</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">0.3%</div>
                    <div className="text-sm text-gray-600">Defect Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-gray-600">Quality Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="scale-in max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Learn About Our Quality Management System
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how our comprehensive QMS framework supports our safety and quality standards.
            </p>
            <Link 
              to="/compliance/quality-management-system" 
              className="bg-white text-secondary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>Quality Management System</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default SafetyQualityStandards;