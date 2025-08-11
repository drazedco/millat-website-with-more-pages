import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Leaf, HardHat, FileCheck, Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import Card from '../components/Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Compliance = () => {
  useScrollAnimation();

  const complianceAreas = [
    {
      title: 'Quality Management System',
      description: 'ISO 9001:2015 certified quality management ensuring consistent excellence in all operations.',
      icon: <Award className="h-8 w-8" />,
      link: '/compliance/quality-management-system'
    },
    {
      title: 'Environmental Standards',
      description: 'Sustainable manufacturing practices and environmental protection initiatives.',
      icon: <Leaf className="h-8 w-8" />,
      link: '/compliance/environmental-standards'
    },
    {
      title: 'Occupational Health & Safety',
      description: 'Comprehensive safety policies protecting our workforce and maintaining safe operations.',
      icon: <HardHat className="h-8 w-8" />,
      link: '/compliance/occupational-health-safety'
    },
    {
      title: 'Material Compliance',
      description: 'Certified materials meeting international standards including RoHS, REACH, and FDA requirements.',
      icon: <FileCheck className="h-8 w-8" />,
      link: '/compliance/material-compliance-certifications'
    },
    {
      title: 'Safety & Quality Standards',
      description: 'Rigorous safety protocols and quality standards across all manufacturing processes.',
      icon: <Shield className="h-8 w-8" />,
      link: '/compliance/safety-quality-standards'
    },
    {
      title: 'Industry Approvals',
      description: 'Recognized approvals from automotive, industrial, and regulatory authorities.',
      icon: <CheckCircle className="h-8 w-8" />,
      link: '/compliance/industry-approvals'
    }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management System' },
    { name: 'RoHS Compliant', description: 'Restriction of Hazardous Substances' },
    { name: 'REACH Compliant', description: 'European Chemical Regulation' },
    { name: 'FDA Grade Materials', description: 'Food Contact Safe Materials' }
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
        title="<span class='text-primary'>Compliance</span>"
        subtitle="Meeting global standards with responsibility"
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Commitment to <span className="text-primary">Excellence</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              At Millat Polymer & Rubber, compliance is not just about meeting requirements – it's about exceeding expectations. Our comprehensive approach to quality, safety, and environmental responsibility ensures that every product we manufacture meets the highest international standards.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are dedicated to maintaining transparency, accountability, and continuous improvement in all aspects of our operations, from raw material sourcing to final product delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Areas Grid */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Compliance <span className="text-primary">Areas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive compliance framework covering all aspects of our operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceAreas.map((area, index) => (
              <Link
                key={index}
                to={area.link}
                className={`${index % 3 === 0 ? 'slide-in-left' : index % 3 === 1 ? 'scale-in' : 'slide-in-right'} group`}
              >
                <Card className="h-full lift-hover group-hover:shadow-xl transition-all duration-300">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{area.description}</p>
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

      {/* Certifications Showcase */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our <span className="text-primary">Certifications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognized certifications that validate our commitment to quality and compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className={`${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Benefits */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Benefits of Our <span className="text-primary">Compliance</span>
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">For Our Customers</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-2" />Guaranteed product quality and consistency</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-2" />Regulatory compliance assurance</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-2" />Reduced risk and liability</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-2" />Access to global markets</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">For Our Operations</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-2" />Continuous improvement culture</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-2" />Enhanced operational efficiency</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-2" />Employee safety and well-being</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-2" />Environmental responsibility</li>
                  </ul>
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
              Need Compliance Documentation?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us for detailed compliance documentation, certificates, and technical specifications.
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

export default Compliance;