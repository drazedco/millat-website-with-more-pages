import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Lightbulb, Leaf, Award, Users, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import Card from '../components/Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const VisionMissionValues = () => {
  useScrollAnimation();

  const values = [
    {
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices in all our interactions.',
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: 'Innovation',
      description: 'We continuously seek new ways to improve our products, processes, and customer experience.',
      icon: <Lightbulb className="h-8 w-8" />
    },
    {
      title: 'Sustainability',
      description: 'We are committed to environmentally responsible manufacturing and sustainable business practices.',
      icon: <Leaf className="h-8 w-8" />
    },
    {
      title: 'Quality',
      description: 'We maintain the highest standards in everything we do, from raw materials to finished products.',
      icon: <Award className="h-8 w-8" />
    },
    {
      title: 'Teamwork',
      description: 'We believe in the power of collaboration and foster a culture of mutual respect and support.',
      icon: <Users className="h-8 w-8" />
    },
    {
      title: 'Safety',
      description: 'We prioritize the safety and well-being of our employees, customers, and communities.',
      icon: <Heart className="h-8 w-8" />
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
        title="Vision, Mission & <span class='text-primary'>Values</span>"
        subtitle="Our guiding principles that drive excellence, innovation, and sustainable growth in everything we do."
      />

      {/* Vision Statement */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Our <span className="text-primary">Vision</span>
            </h2>
            <div className="bg-light p-12 rounded-2xl shadow-lg">
              <p className="text-2xl lg:text-3xl text-gray-700 leading-relaxed font-light italic">
                "To be a globally recognized leader in the polymer manufacturing industry, renowned for our innovation, quality, and commitment to sustainable practices that benefit our customers, employees, and communities worldwide."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                Our <span className="text-primary">Mission</span>
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  To be the leading manufacturer of molded polymer components for global industry, driving success for our clients through continuous improvement, integrity, and innovation.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We are committed to delivering exceptional value through superior products, outstanding service, and sustainable business practices that create lasting partnerships with our customers and positive impact in our communities.
                </p>
              </div>
            </div>
            <div className="slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1581092921462-20524563c940?w=800&h=600&fit=crop"
                alt="Our Mission"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Core <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide our decisions, shape our culture, and define who we are as an organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                title={value.title}
                className={`${index % 3 === 0 ? 'slide-in-left' : index % 3 === 1 ? 'scale-in' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                  {value.icon}
                </div>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-millat-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="scale-in max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              See Our Values in Action
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Learn about our corporate social responsibility initiatives and community impact programs.
            </p>
            <Link 
              to="/csr-initiatives" 
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>Explore CSR Initiatives</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default VisionMissionValues;