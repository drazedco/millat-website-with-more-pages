import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, HardHat, Shield, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../../components/HeroBanner';
import Card from '../../components/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const OccupationalHealthSafety = () => {
  useScrollAnimation();

  const protocols = [
    {
      title: 'Safety Training',
      description: 'Comprehensive training programs for all employees',
      icon: <Users className="h-8 w-8" />
    },
    {
      title: 'PPE Usage',
      description: 'Mandatory personal protective equipment protocols',
      icon: <HardHat className="h-8 w-8" />
    },
    {
      title: 'Safety Audits',
      description: 'Regular safety inspections and compliance audits',
      icon: <Shield className="h-8 w-8" />
    }
  ];

  const achievements = [
    { metric: '0', description: 'Lost Time Accidents', period: '2024' },
    { metric: '100%', description: 'Safety Training Completion', period: 'Annual' },
    { metric: '24/7', description: 'Safety Monitoring', period: 'Continuous' },
    { metric: '5', description: 'Safety Certifications', period: 'Current' }
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
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop"
        title="Occupational Health & <span class='text-primary'>Safety</span>"
        subtitle="Comprehensive safety policies protecting our workforce and maintaining safe operations"
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our <span className="text-primary">Safety-First Approach</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              The safety and well-being of our employees is our top priority. We maintain a comprehensive occupational health and safety program that goes beyond regulatory requirements to create a culture where everyone goes home safely every day.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our proactive approach to safety includes continuous training, hazard identification, risk assessment, and the implementation of best practices across all operations.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Protocols */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Safety <span className="text-primary">Protocols</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive safety measures that protect our workforce and ensure safe operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {protocols.map((protocol, index) => (
              <Card
                key={index}
                title={protocol.title}
                className={`${index % 3 === 0 ? 'slide-in-left' : index % 3 === 1 ? 'scale-in' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                  {protocol.icon}
                </div>
                <p className="text-gray-600 leading-relaxed">{protocol.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Achievements */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Safety <span className="text-primary">Achievements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to safety is reflected in our outstanding safety record and certifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className={`${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">{achievement.metric}</h3>
                <p className="text-lg font-semibold mb-1">{achievement.description}</p>
                <p className="text-gray-600 text-sm">{achievement.period}</p>
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
              Learn About Our Environmental Standards
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how our environmental protection initiatives complement our safety programs.
            </p>
            <Link 
              to="/compliance/environmental-standards" 
              className="bg-white text-secondary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>Environmental Standards</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default OccupationalHealthSafety;