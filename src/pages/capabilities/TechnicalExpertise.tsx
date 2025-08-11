import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Cog, Award, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../../components/HeroBanner';
import Card from '../../components/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const TechnicalExpertise = () => {
  useScrollAnimation();

  const skills = [
    {
      title: 'Mold Design',
      description: 'Advanced CAD/CAM capabilities for complex mold geometries',
      icon: <Cog className="h-8 w-8" />
    },
    {
      title: 'Precision Tooling',
      description: 'In-house tool and die making for exact specifications',
      icon: <Award className="h-8 w-8" />
    },
    {
      title: 'Complex Product Assembly',
      description: 'Multi-component assembly and rubber-to-metal bonding',
      icon: <Users className="h-8 w-8" />
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
        backgroundImage="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&h=1080&fit=crop"
        title="Technical <span class='text-primary'>Expertise</span>"
        subtitle="Decades of specialized knowledge in rubber, plastic, and PVC production"
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Experience in <span className="text-primary">Advanced Manufacturing</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Our team combines decades of hands-on experience with cutting-edge technology to deliver superior polymer solutions. From material science to precision manufacturing, our technical expertise spans every aspect of the production process.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We continuously invest in our people and technology to stay at the forefront of polymer manufacturing innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Showcase */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Skills <span className="text-primary">Showcase</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Core competencies that enable us to tackle the most challenging manufacturing requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card
                key={index}
                title={skill.title}
                className={`${index % 3 === 0 ? 'slide-in-left' : index % 3 === 1 ? 'scale-in' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                  {skill.icon}
                </div>
                <p className="text-gray-600 leading-relaxed">{skill.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Continuous Training */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop"
                alt="Continuous Training"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
            <div className="slide-in-right">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Continuous <span className="text-primary">Training</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                We invest heavily in employee development through comprehensive training programs, skill upgrades, and knowledge sharing initiatives. Our team stays current with the latest manufacturing technologies and industry best practices.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <span className="text-lg">Regular technical workshops</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-primary" />
                  <span className="text-lg">Industry certification programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-primary" />
                  <span className="text-lg">Cross-functional skill development</span>
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
              Explore Our Innovation Capabilities
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Learn about our research and development initiatives that drive continuous improvement.
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

export default TechnicalExpertise;