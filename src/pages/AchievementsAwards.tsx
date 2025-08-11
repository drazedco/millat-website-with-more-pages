import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Trophy, Star, Medal, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import Card from '../components/Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AchievementsAwards = () => {
  useScrollAnimation();

  const awards = [
    {
      title: 'ISO 9001:2015 Certification',
      year: '2020',
      description: 'Achieved international quality management system certification, demonstrating our commitment to consistent quality and customer satisfaction.',
      category: 'Quality Excellence'
    },
    {
      title: 'Export Excellence Award',
      year: '2022',
      description: 'Recognized by the Pakistan Export Development Fund for outstanding performance in international markets.',
      category: 'Export Achievement'
    },
    {
      title: 'Best Manufacturing Practices',
      year: '2023',
      description: 'Honored by the Lahore Chamber of Commerce for implementing innovative manufacturing processes and operational excellence.',
      category: 'Manufacturing Excellence'
    },
    {
      title: 'Environmental Stewardship Award',
      year: '2023',
      description: 'Acknowledged for implementing sustainable manufacturing practices and environmental conservation initiatives.',
      category: 'Sustainability'
    },
    {
      title: 'Innovation in Polymer Technology',
      year: '2025',
      description: 'Recognized for developing advanced polymer formulations and innovative manufacturing techniques.',
      category: 'Innovation'
    },
    {
      title: 'Customer Service Excellence',
      year: '2025',
      description: 'Awarded for maintaining exceptional customer satisfaction ratings and building long-term partnerships.',
      category: 'Customer Focus'
    }
  ];

  const milestones = [
    {
      year: '2012',
      achievement: 'Company Establishment',
      description: 'Founded Millat Polymer & Rubber with a vision for excellence'
    },
    {
      year: '2013',
      achievement: 'First International Contract',
      description: 'Secured first major export order to Netherlands'
    },
    {
      year: '2020',
      achievement: 'ISO Certification',
      description: 'Achieved ISO 9001:2015 quality management certification'
    },
    {
      year: '2022',
      achievement: 'Market Expansion',
      description: 'Expanded to 15+ countries across multiple continents'
    },
    {
      year: '2025',
      achievement: 'Production Milestone',
      description: 'Reached 500+ tons monthly production capacity'
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
        backgroundImage="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=1920&h=1080&fit=crop"
        title="Achievements & <span class='text-primary'>Awards</span>"
        subtitle="Celebrating milestones of excellence, innovation, and industry recognition that reflect our commitment to quality and customer satisfaction."
      />

      {/* Recognition Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Industry <span className="text-primary">Recognition</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Our achievements and awards represent more than recognition – they validate our unwavering commitment to excellence, innovation, and customer satisfaction. Each accolade reflects the dedication of our team and the trust our clients place in us.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              These honors motivate us to continue pushing boundaries, setting new standards, and delivering exceptional value to our customers and stakeholders worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Awards Gallery */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Awards <span className="text-primary">Gallery</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition from industry leaders, certification bodies, and trade organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <Card
                key={index}
                className={`${index % 3 === 0 ? 'slide-in-left' : index % 3 === 1 ? 'scale-in' : 'slide-in-right'} lift-hover`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary">
                    <Award className="h-6 w-6" />
                  </div>
                  <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {award.year}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                <p className="text-primary font-semibold text-sm mb-3">{award.category}</p>
                <p className="text-gray-600 leading-relaxed">{award.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestone Achievements Timeline */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Milestone <span className="text-primary">Achievements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that mark our journey of growth, innovation, and success.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-12 gap-6`}
                >
                  <div className="lg:w-1/2 w-full">
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 lift-hover">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="bg-secondary/10 w-12 h-12 rounded-xl flex items-center justify-center text-secondary">
                          <Calendar className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-secondary">{milestone.year}</div>
                          <h3 className="text-xl font-semibold">{milestone.achievement}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden lg:block w-4 h-4 bg-secondary rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="lg:w-1/2 w-full"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Stats */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="slide-in-left text-center lift-hover">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                <Trophy className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">6+</h3>
              <p className="text-lg font-semibold">Awards Won</p>
            </Card>

            <Card className="scale-in text-center lift-hover">
              <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-secondary">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-secondary mb-2">5</h3>
              <p className="text-lg font-semibold">Major Milestones</p>
            </Card>

            <Card className="scale-in text-center lift-hover">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                <Medal className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">3</h3>
              <p className="text-lg font-semibold">Certifications</p>
            </Card>

            <Card className="slide-in-right text-center lift-hover">
              <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-secondary">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-secondary mb-2">4</h3>
              <p className="text-lg font-semibold">13+ Years of Excellence</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-millat-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="scale-in max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Explore Our Certifications
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Learn more about our quality certifications and industry standards that validate our commitment to excellence.
            </p>
            <Link 
              to="/certifications" 
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>View Certifications</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AchievementsAwards;