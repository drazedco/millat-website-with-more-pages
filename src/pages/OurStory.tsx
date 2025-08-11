import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Award, Globe, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import Card from '../components/Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const OurStory = () => {
  useScrollAnimation();

  const milestones = [
    {
      year: '2012',
      title: 'Company Founded',
      description: 'Millat Polymer & Rubber established with a vision for excellence',
      icon: <Factory className="h-6 w-6" />
    },
    {
      year: '2013',
      title: 'First Major Contract',
      description: 'Secured first major export order to Netherlands',
      icon: <Award className="h-6 w-6" />
    },
    {
      year: '2020',
      title: 'ISO Certification',
      description: 'Achieved ISO 9001:2015 quality management certification',
      icon: <Award className="h-6 w-6" />
    },
    {
      year: '2022',
      title: 'Market Expansion',
      description: 'Expanded to 15+ countries across multiple continents',
      icon: <Globe className="h-6 w-6" />
    },
    {
      year: '2025',
      achievement: 'Production Milestone',
      description: 'Reached 500+ tons monthly production capacity',
      icon: <TrendingUp className="h-6 w-6" />
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
        title="Our <span class='text-primary'>Story</span>"
        subtitle="From humble beginnings to industry leadership - discover the journey that shaped Millat Polymer & Rubber into the trusted manufacturing partner we are today."
      />

      {/* Company Origins */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <img
                src="https://images.unsplash.com/photo-1581092921462-20524563c940?w=800&h=600&fit=crop"
                alt="Company Origins"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
            <div className="slide-in-right">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Where It All <span className="text-primary">Began</span>
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Founded in 2012, Millat Polymer & Rubber emerged from a vision to bridge the gap between quality manufacturing and customer-centric service in Pakistan's polymer industry. Our founder, Sheikh Abid Ali, recognized the growing demand for high-quality rubber and plastic components in both domestic and international markets.
                </p>
                <p>
                  Starting with a small facility and a dedicated team of skilled professionals, we faced the early challenges of establishing credibility in a competitive market. Through unwavering commitment to quality and innovation, we gradually built trust with our first clients and began our journey toward becoming a leading manufacturer.
                </p>
                <p>
                  Our early focus on precision manufacturing and customer satisfaction laid the foundation for the growth and success we enjoy today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Timeline */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Growth <span className="text-primary">Timeline</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that have shaped our journey from startup to industry leader.
            </p>
          </div>

          <div className="relative">
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
                        <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary">
                          {milestone.icon}
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">{milestone.year}</div>
                          <h3 className="text-xl font-semibold">{milestone.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden lg:block w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="lg:w-1/2 w-full"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Today's Presence */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Today's <span className="text-primary">Presence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our current capabilities and market reach demonstrate our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="slide-in-left text-center lift-hover">
              <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Factory className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">500+</h3>
              <p className="text-xl font-semibold mb-2">Tons/Month</p>
              <p className="text-gray-600">Production Capacity</p>
            </Card>

            <Card className="scale-in text-center lift-hover">
              <div className="bg-secondary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-3xl font-bold text-secondary mb-2">100+</h3>
              <p className="text-xl font-semibold mb-2">Product Lines</p>
              <p className="text-gray-600">Diverse Portfolio</p>
            </Card>

            <Card className="slide-in-right text-center lift-hover">
              <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">15+</h3>
              <p className="text-xl font-semibold mb-2">Countries</p>
              <p className="text-gray-600">Global Reach</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-millat-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="scale-in max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Explore Our Capabilities
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how our advanced manufacturing capabilities can bring your projects to life.
            </p>
            <Link 
              to="/capabilities" 
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>Explore Our Capabilities</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default OurStory;