import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import Card from '../components/Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  // Use the scroll animation hook
  useScrollAnimation();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="min-h-screen"
    >
      {/* Hero Banner */}
      <HeroBanner
        videoUrl="/videos/about-hero.mp4"
        title="About <span class='text-primary'>Millat Polymer</span> Industries"
        subtitle="Founded in 2021, we are a leading manufacturer and exporter of high-quality polymer products, driven by a mission to deliver excellence and innovation in every component we produce."
      />

      {/* A Message from Our Chairman */}
      <section 
        className="section-padding bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                A Message from Our <span className="text-primary">Chairman</span>
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Welcome to Millat Polymer Industries. Since our inception in 2012, we have been committed to a singular goal: to establish a benchmark of quality and trust in the polymer industry. Our journey is fueled by a passion for innovation and a dedication to our clients' success.
                </p>
                <p>
                  We believe in building lasting partnerships, and that begins with delivering products that you can rely on. Thank you for considering Millat Polymer as your trusted manufacturing partner.
                </p>
                <div className="mt-8">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl text-center shadow-lg lift-hover">
                    <p className="text-gray-600">Chairman & Founder, Millat Polymer Industries</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-in-right">
              <img
                src="/images/chairman-placeholder.jpg"
                alt="Chairman Sheikh Abid Ali"
                className="rounded-2xl shadow-lg w-full h-auto scale-hover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section 
        className="section-padding bg-light"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card title="Our Vision" className="slide-in-left lift-hover">
              <p className="text-gray-600 leading-relaxed">
                To be a globally recognized leader in the polymer manufacturing industry, renowned for our innovation, quality, and commitment to sustainable practices.
              </p>
            </Card>

            <Card title="Our Mission" className="slide-in-right lift-hover">
              <p className="text-gray-600 leading-relaxed">
                To be the leading manufacturer of molded polymer components for global industry, driving success for our clients through continuous improvement, integrity, and innovation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="relative section-padding overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/factory-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/warehouse-workers.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/80" />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Manufacturing <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our state-of-the-art facility is equipped to handle large-scale production while maintaining the highest quality standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'ISO 9001:2015 Certified',
              'Large Production Capacity',
              'OEM & Custom Solutions',
              'Advanced Quality Control',
              'Global Export Logistics',
              'Skilled Engineering Team'
            ].map((tag, index) => (
              <div key={index} className="fade-in-up bg-white/90 backdrop-blur-sm p-4 rounded-xl text-center shadow-lg lift-hover">
                <p className="font-semibold text-gray-800">{tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section 
        className="section-padding bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Why Choose <span className="text-primary">Us?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your reliable partner for quality, expertise, and custom solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card title="Uncompromising Quality" className="slide-in-left lift-hover">
              <p className="text-gray-600">
                Our products are manufactured under strict ISO 9001:2015 certified processes.
              </p>
            </Card>

            <Card title="Export Expertise" className="scale-in lift-hover">
              <p className="text-gray-600">
                We have a proven track record of meeting the demands of international markets.
              </p>
            </Card>

            <Card title="Custom Manufacturing" className="slide-in-right lift-hover">
              <p className="text-gray-600">
                We partner with you to create custom OEM solutions tailored to your needs.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="section-padding bg-light"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="scale-in max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to build the future together?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Explore our products or contact us to discuss your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products" className="btn-primary inline-flex items-center space-x-2">
                <span>Our Products</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;