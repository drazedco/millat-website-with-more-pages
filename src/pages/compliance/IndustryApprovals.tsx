import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, CheckCircle, Shield, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../../components/HeroBanner';
import Card from '../../components/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const IndustryApprovals = () => {
  useScrollAnimation();

  const approvals = [
    {
      category: 'Automotive Associations',
      approvals: ['PAAPAM Member', 'IATF Recognition', 'OEM Supplier Status'],
      icon: <Shield className="h-8 w-8" />
    },
    {
      category: 'Industrial Councils',
      approvals: ['LCCI Member', 'FPCCI Recognition', 'Export Council'],
      icon: <Award className="h-8 w-8" />
    },
    {
      category: 'Regulatory Bodies',
      approvals: ['PSQCA Compliance', 'FBR Registration', 'Export License'],
      icon: <CheckCircle className="h-8 w-8" />
    }
  ];

  const benefits = [
    'Enhanced market credibility and customer trust',
    'Access to restricted markets and premium customers',
    'Reduced regulatory barriers for international trade',
    'Improved competitive positioning in tenders'
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
        title="Industry <span class='text-primary'>Approvals</span>"
        subtitle="Recognized approvals from automotive, industrial, and regulatory authorities"
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Role of Approvals in <span className="text-primary">Market Access</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Industry approvals and certifications are essential for accessing global markets and building customer confidence. These recognitions validate our capabilities, quality standards, and commitment to excellence, opening doors to new opportunities and partnerships.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our comprehensive portfolio of industry approvals demonstrates our ability to meet the most stringent requirements across multiple sectors and geographical markets.
            </p>
          </div>
        </div>
      </section>

      {/* Approvals List */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our <span className="text-primary">Approvals</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition from leading industry bodies, associations, and regulatory authorities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {approvals.map((approval, index) => (
              <Card
                key={index}
                title={approval.category}
                className={`${index % 3 === 0 ? 'slide-in-left' : index % 3 === 1 ? 'scale-in' : 'slide-in-right'} lift-hover`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  {approval.icon}
                </div>
                <ul className="space-y-2">
                  {approval.approvals.map((app, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      {app}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Impact on <span className="text-primary">Credibility & Trust</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Industry approvals significantly enhance our credibility and build trust with customers, partners, and stakeholders. These recognitions serve as third-party validation of our capabilities and commitment to quality.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <TrendingUp className="h-6 w-6 text-primary mt-1" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="slide-in-right">
              <div className="bg-light p-8 rounded-2xl shadow-lg">
                <div className="text-center mb-6">
                  <Award className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">Approval Impact</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">15+</div>
                    <div className="text-sm text-gray-600">Industry Approvals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">50+</div>
                    <div className="text-sm text-gray-600">Qualified Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">95%</div>
                    <div className="text-sm text-gray-600">Approval Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">100%</div>
                    <div className="text-sm text-gray-600">Compliance Maintained</div>
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
              Need Documentation for Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us for detailed compliance documentation, certificates, and approval letters.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>Contact Us for Documentation</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default IndustryApprovals;