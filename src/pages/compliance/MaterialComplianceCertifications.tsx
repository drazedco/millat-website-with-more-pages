import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileCheck, TestTube, Shield, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../../components/HeroBanner';
import Card from '../../components/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const MaterialComplianceCertifications = () => {
  useScrollAnimation();

  const certifications = [
    {
      name: 'RoHS Compliant',
      description: 'Restriction of Hazardous Substances directive compliance',
      icon: <Shield className="h-8 w-8" />
    },
    {
      name: 'REACH Compliant',
      description: 'European Chemical Regulation compliance for safe chemical use',
      icon: <FileCheck className="h-8 w-8" />
    },
    {
      name: 'FDA Grade Materials',
      description: 'Food contact safe materials meeting FDA requirements',
      icon: <CheckCircle className="h-8 w-8" />
    }
  ];

  const testingSteps = [
    'Raw material verification and documentation review',
    'Chemical composition analysis and testing',
    'Compliance verification against regulatory standards',
    'Certificate of compliance generation and tracking'
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
        backgroundImage="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1920&h=1080&fit=crop"
        title="Material Compliance <span class='text-primary'>Certifications</span>"
        subtitle="Certified materials meeting international standards including RoHS, REACH, and FDA requirements"
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Importance of <span className="text-primary">Compliant Materials</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Using compliant raw materials is essential for ensuring product safety, regulatory compliance, and market access. Our rigorous material compliance program guarantees that all materials meet or exceed international standards and customer requirements.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We maintain comprehensive documentation and traceability for all materials, providing our customers with the confidence that their products meet global regulatory requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Material <span className="text-primary">Certifications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our materials meet the highest international standards for safety and environmental compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                title={cert.name}
                className={`${index % 3 === 0 ? 'slide-in-left' : index % 3 === 1 ? 'scale-in' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                  {cert.icon}
                </div>
                <p className="text-gray-600 leading-relaxed">{cert.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Process */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Material Testing <span className="text-primary">Process</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Our comprehensive testing process ensures that all materials are thoroughly checked before use in production. We maintain strict protocols for material verification and compliance documentation.
              </p>
              <div className="space-y-4">
                {testingSteps.map((step, index) => (
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
                  <TestTube className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">Testing Statistics</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">100%</div>
                    <div className="text-sm text-gray-600">Materials Tested</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">99.8%</div>
                    <div className="text-sm text-gray-600">Compliance Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">24hrs</div>
                    <div className="text-sm text-gray-600">Testing Turnaround</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">15+</div>
                    <div className="text-sm text-gray-600">Test Parameters</div>
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
              Learn About Our Testing Capabilities
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover our comprehensive testing and quality assurance processes that ensure material compliance.
            </p>
            <Link 
              to="/capabilities/testing-quality-assurance" 
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>Testing & Quality Assurance</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default MaterialComplianceCertifications;