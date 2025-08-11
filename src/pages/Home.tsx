import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Globe, CheckCircle, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import TypewriterText from '../components/TypewriterText';
import Card from '../components/Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Home = () => {
  const subtitles = ["Automotive Solutions", "Industrial Solutions", "Construction Solutions"];

  // Use the scroll animation hook
  useScrollAnimation();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <HeroBanner
        videoUrl="/videos/hero-manufacturing.mp4"
        title="Leading Manufacturer of <br />High-Quality <span class='text-primary'>Rubber</span><br /> & <span class='text-primary'>Plastic Components</span>"
        subtitle=""
      >
        <div className="mb-8">
          <TypewriterText texts={subtitles} />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/products" className="btn-primary inline-flex items-center space-x-2">
            <span>Explore Products</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link to="/contact" className="btn-secondary">
            Get In Touch
          </Link>
        </div>
      </HeroBanner>

      {/* Company Overview */}
      <section 
        className="section-padding bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Welcome to <span className="text-primary">Millat Polymer & Rubber</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              MILLAT POLYMER & RUBBER (Pvt) Ltd, founded in 2012, is one of the leading manufacturing organization in Pakistan, has made quantum leaps to achieve excellence in the field of Plastic, Rubber and Rubber to metal bonded Automotive & Industrial Spare Parts. The company, under the visionary leadership of its Chairman Sheikh Abid Ali and a team of dedicated professionals has achieved major land marks and established strong foot holds in the domestic as well as foreign Export markets with a special focus on the Netherlands, UAE, Australia and European applications. Millat is catering to a world-wide client base and has an impressive list of customers both in the OEMs & After Market segments.
            </p>
            <Link to="/about" className="btn-primary inline-flex items-center space-x-2">
              <span>Learn More About Us</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section 
        className="section-padding bg-light"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Why Choose <span className="text-primary">Us?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your reliable partner for quality, expertise, and custom solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card title="Uncompromising Quality" className="slide-in-left lift-hover">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <p className="text-gray-600">
                Our products are manufactured under strict ISO 9001:2015 certified processes.
              </p>
            </Card>

            <Card title="Export Expertise" className="scale-in lift-hover">
              <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-secondary" />
              </div>
              <p className="text-gray-600">
                We have a proven track record of meeting the demands of international markets.
              </p>
            </Card>

            <Card title="Custom Manufacturing" className="slide-in-right lift-hover">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <p className="text-gray-600">
                We partner with you to create custom OEM solutions tailored to your needs.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section 
        className="section-padding bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Product <span className="text-primary">Categories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our main product lines, engineered for performance and durability across multiple industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Automotive Components',
                description: 'High-performance components for vehicles, from engine mounts to seals and hoses.',
                image: '/images/automotive-parts.png',
                link: '/products#automotive-components'
              },
              {
                title: 'Rubber Hoses & Tubing',
                description: 'Durable hoses for fluid, air, and material transfer in demanding environments.',
                image: '/images/air-cleaner-hose.jpg',
                link: '/products#rubber-hoses'
              },
              {
                title: 'EPDM / Silicone Profiles',
                description: 'Custom-extruded profiles and sheets for superior sealing and insulation.',
                image: '/images/epdm-profiles.jpg',
                link: '/products#epdm-silicone-profiles'
              },
              {
                title: 'Plastic Components',
                description: 'Durable and precision-molded plastic parts for various needs.',
                image: '/images/plastic-components.jpeg',
                link: '/products#plastic-components'
              },
              {
                title: 'PVC & Infrastructure Components',
                description: 'Specialized PVC, HDPE, and rubber components for construction and utilities.',
                image: '/images/pvc-pipes.jpg',
                link: '/products#infrastructure-components'
              },
              {
                title: 'Utility & Miscellaneous',
                description: 'Versatile rubber and plastic products for general-purpose applications.',
                image: '/images/rubber-mounting-pads.jpg',
                link: '/products#utility-miscellaneous'
              }
            ].map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className={`${index % 3 === 0 ? 'slide-in-left' : index % 3 === 1 ? 'scale-in' : 'slide-in-right'} group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 scale-hover`}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex items-center text-primary font-medium">
                    <span>View Category</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 fade-in-up">
            <Link to="/products#product-grid" className="btn-primary inline-flex items-center space-x-2">
              <span>View All Products</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section 
        className="section-padding bg-light"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Industries We <span className="text-primary">Serve</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide versatile and reliable polymer solutions for a wide range of sectors, meeting diverse industrial demands with precision and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Automotive', icon: '🚗', description: 'Engine mounts, hoses, seals, gaskets' },
              { name: 'Construction', icon: '🏗️', description: 'Water stoppers, expansion joints, profiles' },
              { name: 'Healthcare', icon: '🏥', description: 'Hot water bottles, medical grade components' },
              { name: 'Electronics', icon: '💻', description: 'Plastic housings, grommets, insulators' },
              { name: 'Agriculture', icon: '🌾', description: 'Irrigation hoses, machinery parts' },
              { name: 'Marine', icon: '⚓', description: 'Corrosion-resistant hoses, marine seals' },
              { name: 'Aerospace', icon: '✈️', description: 'High-performance seals, vibration dampers' },
              { name: 'Energy', icon: '⚡', description: 'Insulation components, power system seals' }
            ].map((industry, index) => (
              <div key={index} className={`${index % 4 === 0 ? 'slide-in-left' : index % 4 === 1 ? 'scale-in' : index % 4 === 2 ? 'slide-in-right' : 'scale-in'} bg-white p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 lift-hover`}>
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="font-semibold text-gray-800">{industry.name}</h3>
                <p className="text-sm text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 fade-in-up">
            <Link to="/industries" className="btn-secondary inline-flex items-center space-x-2">
              <span>Explore All Industries</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
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
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/warehouse-workers.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 container mx-auto px-4 text-white">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Advanced Manufacturing <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Our state-of-the-art facility is equipped for precision, quality, and scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="slide-in-left bg-white/10 backdrop-blur-sm p-6 rounded-xl lift-hover">
              <h3 className="text-xl font-semibold mb-3">In-House Mold & Tooling</h3>
              <p className="opacity-90">Complete tooling capabilities for rapid prototyping and production.</p>
            </div>
            <div className="scale-in bg-white/10 backdrop-blur-sm p-6 rounded-xl lift-hover">
              <h3 className="text-xl font-semibold mb-3">Diverse Material Expertise</h3>
              <p className="opacity-90">Working with EPDM, silicone, NBR, and various thermoplastics.</p>
            </div>
            <div className="slide-in-right bg-white/10 backdrop-blur-sm p-6 rounded-xl lift-hover">
              <h3 className="text-xl font-semibold mb-3">OEM Customization</h3>
              <p className="opacity-90">Tailored solutions meeting exact OEM specifications.</p>
            </div>
          </div>

          <div className="text-center mt-12 fade-in-up">
            <Link to="/manufacturing" className="btn-primary inline-flex items-center space-x-2">
              <span>See Our Process</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Commitment to Quality */}
      <section 
        className="section-padding bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Driven by Precision, <span className="text-primary">Certified by Excellence</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                At Millat Polymer & Rubber, quality isn't just a standard – it's our foundation. Every product undergoes rigorous inspection, adhering to international benchmarks and client-specific tolerances.
              </p>
              <Link to="/certifications" className="btn-primary inline-flex items-center space-x-2">
                <span>View Certifications</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="slide-in-right">
              <img
                src="/images/quality-control.jpg"
                alt="Quality control"
                className="rounded-2xl shadow-2xl w-full h-auto scale-hover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Teaser */}
      <section className="section-padding bg-millat-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="scale-in max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We specialize in custom parts designed to your exact specifications.
            </p>
            <Link to="/contact" className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-colors">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;