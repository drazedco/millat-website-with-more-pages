import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Lightbulb, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import Card from '../components/Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const LeadershipTeam = () => {
  useScrollAnimation();

  const leaders = [
    {
      name: 'Sheikh Abid Ali',
      position: 'Chairman & Founder',
      bio: 'Visionary leader with over 25 years of experience in polymer manufacturing. Under his leadership, Millat Polymer has achieved remarkable growth and international recognition since founding the company in 2012.',
      image: '/images/chairman-placeholder.jpg'
    },
    {
      name: 'Muhammad Hassan',
      position: 'Chief Executive Officer',
      bio: 'Strategic business leader with extensive experience in operations management and international trade. Drives operational excellence and market expansion.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Dr. Sarah Ahmed',
      position: 'Chief Technology Officer',
      bio: 'PhD in Materials Science with 12+ years in polymer research and development. Leads innovation initiatives and technical advancement programs.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Ahmad Khan',
      position: 'Head of Manufacturing',
      bio: 'Manufacturing expert with 18 years of experience in production optimization and quality management. Ensures operational efficiency and product excellence.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Fatima Malik',
      position: 'Head of Quality Assurance',
      bio: 'Quality management specialist with expertise in ISO standards and continuous improvement. Maintains our commitment to exceptional product quality.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Usman Tariq',
      position: 'Head of Sales & Marketing',
      bio: 'Business development leader with proven track record in international markets. Drives customer relationships and market expansion strategies.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face'
    }
  ];

  const principles = [
    {
      title: 'Strategic Thinking',
      description: 'Long-term vision combined with tactical execution to drive sustainable growth.',
      icon: <Target className="h-8 w-8" />
    },
    {
      title: 'Customer Focus',
      description: 'Putting customer needs at the center of every decision and business strategy.',
      icon: <Users className="h-8 w-8" />
    },
    {
      title: 'Innovation Drive',
      description: 'Fostering a culture of continuous improvement and technological advancement.',
      icon: <Lightbulb className="h-8 w-8" />
    },
    {
      title: 'Performance Excellence',
      description: 'Setting high standards and consistently delivering exceptional results.',
      icon: <TrendingUp className="h-8 w-8" />
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
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop"
        title="Leadership <span class='text-primary'>Team</span>"
        subtitle="Meet the visionary leaders driving innovation, excellence, and sustainable growth at Millat Polymer & Rubber."
      />

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Leadership <span className="text-primary">Philosophy</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Our leadership team combines decades of industry experience with a shared commitment to excellence, innovation, and sustainable growth. We believe in empowering our people, fostering collaboration, and maintaining the highest standards of integrity in everything we do.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Together, we guide Millat Polymer & Rubber toward a future of continued success, technological advancement, and positive impact on the communities we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Meet Our <span className="text-primary">Leaders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to driving our company's mission and values forward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <Card
                key={index}
                className={`${index % 3 === 0 ? 'slide-in-left' : index % 3 === 1 ? 'scale-in' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="aspect-square w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                <p className="text-primary font-semibold mb-4">{leader.position}</p>
                <p className="text-gray-600 leading-relaxed">{leader.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Principles */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Leadership <span className="text-primary">Principles</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The guiding principles that shape our leadership approach and drive organizational success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <Card
                key={index}
                title={principle.title}
                className={`${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                  {principle.icon}
                </div>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
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
              Ready to Partner with Us?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Connect with our leadership team to discuss your project requirements and explore partnership opportunities.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>Get In Touch</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default LeadershipTeam;