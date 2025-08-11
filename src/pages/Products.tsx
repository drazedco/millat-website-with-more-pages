import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ArrowRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import EmblaCarousel from '../components/EmblaCarousel';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterIndustry, setFilterIndustry] = useState('All Applications');
  const [openAccordions, setOpenAccordions] = useState<string[]>([]);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in-up, .product-slide-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleAccordion = (categoryName: string) => {
    setOpenAccordions(prev => 
      prev.includes(categoryName) 
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  const carouselImages = [
    'https://media.istockphoto.com/id/682707472/video/ld-above-the-warehouse-workers-putting-packages-on-the-conveyor-belt.mp4?s=mp4-640x640-is&k=20&c=Kt1dZUDHTQ1rf1r6jz46_kPg9VCXHAzoaiHPu5n9dLc='
  ];

  const products = [
    // Automotive Components
    {
      name: 'Engine Mounting',
      image: 'https://i.postimg.cc/pdQXJ72K/Whats-App-Image-2025-07-23-at-9-08-23-PM.jpg',
      overview: "Expertly engineered rubber-to-metal bonded components designed to support engine systems while dampening vibration and absorbing shocks. These critical components prevent transmission of engine-induced movement and noise to the vehicle chassis. Crafted using durable elastomers like NR, EPDM, or SBR, ideal for commercial vehicles, motorcycles, and industrial equipment.",
      category: 'Automotive Components',
      industry: 'Automotive'
    },
    {
      name: 'Rickshaw Engine Mounting',
      image: 'https://i.postimg.cc/ZRTY7cR2/Whats-App-Image-2025-07-24-at-1-59-11-PM5.jpg',
      overview: "High-performance engine mountings designed for harsh urban and commercial transport conditions. Engineered to securely hold engines while isolating vibrations and reducing road shock transfer to chassis. Specially crafted for 3-wheelers, rickshaws, and light utility vehicles with exceptional stability and noise reduction.",
      category: 'Automotive Components',
      industry: 'Automotive'
    },
    {
      name: 'Rubber Bushes',
      image: 'https://i.postimg.cc/fTJJZg6m/download_(1).jpg',
      overview: "High-performance rubber bushes designed to absorb shock, reduce vibration, and minimize noise between mechanical parts. These flexible cylindrical components serve as cushions between metal objects, permitting relative motion while isolating vibration. Engineered to maintain structural integrity under dynamic loading and varying environmental conditions.",
      category: 'Automotive Components',
      industry: 'Automotive'
    },
    {
      name: 'Metal to Rubber Bonded Bush',
      image: 'https://i.postimg.cc/3NN87x2Z/Whats-App-Image-2025-07-24-at-1-59-11-PM7.jpg',
      overview: "Premium-quality metal-to-rubber bonded bushes offering superior vibration damping, shock absorption, and alignment control. Consist of durable elastomeric compounds vulcanized to metal sleeves, providing robust yet flexible connections. Engineered to reduce noise, extend suspension system life, and enhance operational stability.",
      category: 'Automotive Components',
      industry: 'Automotive'
    },
    {
      name: 'Vibration Dampers',
      image: 'https://i.postimg.cc/pLBTBb8N/images_(3).jpg',
      overview: "Precision-engineered components that effectively reduce and isolate vibrations in dynamic systems. Built to handle extreme conditions and repetitive motion while safeguarding equipment performance and durability. Absorb energy from mechanical oscillations, improving operational stability and user comfort with high energy dissipation.",
      category: 'Automotive Components',
      industry: 'Industrial'
    },
    {
      name: 'Rubber Gaskets',
      image: 'https://i.postimg.cc/nLYL08Db/download_(3).jpg',
      overview: "Rubber gaskets are precision-cut seals designed to prevent leaks between two joined surfaces under compression. They provide a reliable barrier against fluids, gases, and contaminants.",
      category: 'Automotive Components',
      industry: 'Industrial'
    },
    {
      name: 'Rubber Seals',
      image: 'https://i.postimg.cc/qRtDTjbv/download.jpg',
      overview: "High-performance rubber seals for a variety of applications, providing excellent sealing against fluids and gases. Custom designs available.",
      category: 'Automotive Components',
      industry: 'Automotive'
    },
    {
      name: 'Rubber Dust Covers',
      image: 'https://i.postimg.cc/kgM9qVVZ/images_(18).jpg',
      overview: "Durable rubber dust covers to protect mechanical components from dust, dirt, and moisture, extending their service life.",
      category: 'Automotive Components',
      industry: 'Automotive'
    },
    {
      name: 'Rubber Dust Bellows',
      image: 'https://i.postimg.cc/GpnmYr1c/Whats-App-Image-2025-07-23-at-9-08-24-PM3.jpg',
      overview: "Flexible rubber dust bellows designed to protect moving parts from contaminants while allowing for movement.",
      category: 'Automotive Components',
      industry: 'Automotive'
    },
    {
      name: 'Rubber Bellows',
      image: 'https://i.postimg.cc/661pHfy3/download_(7).jpg',
      overview: "Custom-molded rubber bellows for a variety of industrial applications, providing flexible connections and protection.",
      category: 'Automotive Components',
      industry: 'Automotive'
    },
    {
      name: 'Rubber Grommets',
      image: 'https://i.postimg.cc/PxvT9BL5/images_(12).jpg',
      overview: "Rubber grommets for protecting wires, cables, and hoses passing through panels, preventing abrasion and providing a neat finish.",
      category: 'Automotive Components',
      industry: 'Automotive'
    },
    {
      name: 'Anti-Vibration Parts',
      image: 'https://i.postimg.cc/9FWsq6Ww/rubber-vibration-mounts.webp',
      overview: "A range of anti-vibration parts, including mounts and pads, to reduce noise and vibration in machinery and equipment.",
      category: 'Automotive Components',
      industry: 'Automotive'
    },
    {
      name: 'Custom Molded Rubber',
      image: 'https://i.postimg.cc/brXph3bH/images_(15).jpg',
      overview: "We offer custom molding services for rubber parts to meet your specific requirements. We can produce complex shapes and designs.",
      category: 'Automotive Components',
      industry: 'Automotive'
    },
    {
      name: 'Dust Boots for Suspension',
      image: 'https://i.postimg.cc/rmwqjDTx/download-13.jpg',
      overview: "Suspension dust boots to protect shock absorbers and struts from dust and debris, ensuring optimal performance and longevity.",
      category: 'Automotive Components',
      industry: 'Automotive'
    },
    {
      name: 'Steering Rack Boots',
      image: 'https://i.postimg.cc/ZqcT6rGJ/download_(14).jpg',
      overview: "Durable steering rack boots to protect the steering rack from contaminants, preventing premature wear and failure.",
      category: 'Automotive Components',
      industry: 'Automotive'
    },
    {
      name: 'Pedal Covers',
      image: 'https://i.postimg.cc/V6tPDnTS/images_(21).jpg',
      overview: "High-grip rubber pedal covers for brake, clutch, and accelerator pedals, enhancing safety and providing a comfortable feel.",
      category: 'Automotive Components',
      industry: 'Automotive'
    },
    {
      name: 'Turbocharger System Connectors',
      image: 'https://i.postimg.cc/fkn4GLGH/download_(26).jpg',
      overview: "Molded rubber connectors for turbocharger systems, designed to withstand high temperatures and pressures.",
      category: 'Automotive Components',
      industry: 'Automotive'
    },
    {
      name: 'EV Hoses',
      image: 'https://i.postimg.cc/3NH56W5t/images_(24).jpg',
      overview: "Specialized hoses for electric vehicle battery and component cooling systems, designed for long life and reliability.",
      category: 'Automotive Components',
      industry: 'Automotive'
    },
    {
      name: 'Metal & Plastic Automotive Parts',
      image: 'https://i.postimg.cc/T3vGS7GR/download_(19).jpg',
      overview: "A range of metal and plastic parts for automotive applications, including brackets, clips, and other components.",
      category: 'Automotive Components',
      industry: 'Automotive'
    },
    
    // Rubber Hoses & Tubing
    {
      name: 'Radiator Hoses',
      image: 'https://i.postimg.cc/SQZJBptm/1.jpg',
      overview: "Durable radiator hoses for automotive cooling systems, designed to withstand high temperatures and pressures. Available for a wide range of vehicles.",
      category: 'Rubber Hoses & Tubing',
      industry: 'Automotive'
    },
    {
      name: 'Air Cleaner Hose',
      image: 'https://i.postimg.cc/x1v2rTk4/download.jpg',
      overview: "Flexible air cleaner hoses to connect the air filter box to the engine intake, ensuring a clean air supply.",
      category: 'Rubber Hoses & Tubing',
      industry: 'Automotive'
    },
    {
      name: 'Air Cleaner Hosing',
      image: 'https://i.postimg.cc/25XmG9Lk/download.jpg',
      overview: "Complete hosing solutions for air cleaner systems, providing a reliable path for clean air to the engine.",
      category: 'Rubber Hoses & Tubing',
      industry: 'Automotive'
    },
    {
      name: 'Hand-Fabricated Rubber Hoses',
      image: 'https://i.postimg.cc/PxGVd1Bb/download.jpg',
      overview: "Custom, hand-fabricated rubber hoses for unique applications where standard hoses are not suitable.",
      category: 'Rubber Hoses & Tubing',
      industry: 'Industrial'
    },
    {
      name: 'Intercooler / Turbo Hoses',
      image: 'https://i.postimg.cc/05LbkCx4/download_(27).jpg',
      overview: "High-performance hoses for turbocharger and intercooler systems, designed to handle high pressures and temperatures.",
      category: 'Rubber Hoses & Tubing',
      industry: 'Automotive'
    },
    {
      name: 'Breather & Vacuum Hoses',
      image: 'https://i.postimg.cc/3wQ2R9xw/download.jpg',
      overview: "A range of breather and vacuum hoses for various automotive engine functions, ensuring proper system operation.",
      category: 'Rubber Hoses & Tubing',
      industry: 'Automotive'
    },
    {
      name: 'Heater & Fuel Hoses',
      image: 'https://i.postimg.cc/y8rqKLCg/images_(30).jpg',
      overview: "Durable heater and fuel hoses for automotive applications, designed for safe and reliable fluid transfer.",
      category: 'Rubber Hoses & Tubing',
      industry: 'Automotive'
    },
    {
      name: 'Silicone Rubber Hoses',
      image: 'https://i.postimg.cc/4yRXpBW2/download-2.jpg',
      overview: "High-performance silicone hoses for demanding applications, offering excellent temperature resistance and durability.",
      category: 'Rubber Hoses & Tubing',
      industry: 'Industrial'
    },
    {
      name: 'Flexible Rubber Hoses',
      image: 'https://i.postimg.cc/7ZZw1CN4/download-5.jpg',
      overview: "Versatile and flexible rubber hoses for a wide range of industrial and general-purpose applications.",
      category: 'Rubber Hoses & Tubing',
      industry: 'Industrial'
    },
    {
      name: 'Industrial Rubber Hoses',
      image: 'https://i.postimg.cc/x8nW07xQ/download-17.jpg',
      overview: "Heavy-duty industrial rubber hoses for demanding applications, including material handling, and chemical transfer.",
      category: 'Rubber Hoses & Tubing',
      industry: 'Industrial'
    },
    {
      name: 'Hydraulic Return Hoses',
      image: 'https://i.postimg.cc/nrxtXML6/download-10.jpg',
      overview: "Hydraulic return hoses for low-pressure applications in hydraulic systems, returning fluid to the reservoir.",
      category: 'Rubber Hoses & Tubing',
      industry: 'Industrial'
    },
    {
      name: 'HVAC Duct Hoses',
      image: 'https://i.postimg.cc/zX01fzYc/download-13.jpg',
      overview: "Flexible hoses for HVAC applications, used for air transfer in heating, ventilation, and air conditioning systems.",
      category: 'Rubber Hoses & Tubing',
      industry: 'HVAC'
    },
    {
      name: 'Agricultural Hoses',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYp-tEJcmxfFr1dZ7eY8Rg6s1dn939pSmfCA&s',
      overview: "Durable hoses designed for agricultural applications, including irrigation, spraying, and slurry transfer. Resistant to abrasion and harsh weather conditions.",
      category: 'Rubber Hoses & Tubing',
      industry: 'Agriculture'
    },
    {
      name: 'Marine Rubber Hoses',
      image: 'https://i.postimg.cc/wvKCr3D7/download-19.jpg',
      overview: "Specialized hoses for marine use, including fuel lines, bilge pump hoses, and exhaust systems. Designed to withstand saltwater and harsh marine environments.",
      category: 'Rubber Hoses & Tubing',
      industry: 'Marine'
    },
    
    // EPDM / Silicone Profiles
    {
      name: 'EPDM / Silicone Profiles',
      image: 'https://i.postimg.cc/fTW6pGSj/download-22.jpg',
      overview: "Millat Polymer & Rubber manufactures high-quality EPDM (Ethylene Propylene Diene Monomer) and Silicone extruded profiles for a wide range of industrial sealing and insulation applications. Our profiles are engineered to provide excellent resistance to weathering, ozone, UV radiation, and extreme temperatures. Using advanced extrusion technology, we can produce complex shapes and custom designs to meet precise client specifications. Millat's EPDM and silicone profiles are trusted in industries where durability, flexibility, and long-term performance are critical.",
      category: 'EPDM / Silicone Profiles',
      industry: 'Construction'
    },
    {
      name: 'Rubber Sheets & EPDM Extrusions',
      image: 'https://i.postimg.cc/Kv9d20nX/download-23.jpg',
      overview: "Versatile rubber sheets and EPDM extrusions for gasketing, sealing, and insulation. Available in various thicknesses and custom profiles to suit any application.",
      category: 'EPDM / Silicone Profiles',
      industry: 'Construction'
    },
    {
      name: 'Edge Trims',
      image: 'https://i.postimg.cc/tTtMmkXM/download-28.jpg',
      overview: "Protective edge trims for sharp edges on metal, fiberglass, or plastic. They provide a clean, finished look while enhancing safety.",
      category: 'EPDM / Silicone Profiles',
      industry: 'Construction'
    },
    {
      name: 'Window Channel Seals',
      image: 'https://i.postimg.cc/BbSVWFbQ/download-30.jpg',
      overview: "Window channel seals, also known as glass run channels, provide a secure and weatherproof seal for sliding windows in vehicles and buildings.",
      category: 'EPDM / Silicone Profiles',
      industry: 'Construction'
    },
    {
      name: 'Door Frame Profiles',
      image: 'https://i.postimg.cc/tTtMmkXM/download-28.jpg',
      overview: "Custom-extruded rubber profiles for sealing vehicle and industrial doors. They provide excellent protection against dust, water, and noise.",
      category: 'EPDM / Silicone Profiles',
      industry: 'Construction'
    },
    
    // Plastic Components
    {
      name: 'Injection Molded Parts',
      image: 'https://i.postimg.cc/sgQ0RsjS/download-35.jpg',
      overview: "High-precision plastic injection molded parts for a wide range of applications. We offer custom molding services to produce complex and durable components.",
      category: 'Plastic Components',
      industry: 'Industrial'
    },
    {
      name: 'Plastic Caps & Plugs',
      image: 'https://i.postimg.cc/VvkDZcZJ/download-38.jpg',
      overview: "Protective plastic caps and plugs for tubing, pipes, and threaded connections. They prevent contamination and damage during shipping and storage.",
      category: 'Plastic Components',
      industry: 'Industrial'
    },
    {
      name: 'Plastic Bushes',
      image: 'https://i.postimg.cc/Gh9XkdsN/download-41.jpg',
      overview: "Durable and low-friction plastic bushes for bearing and pivot applications. They provide a cost-effective alternative to metal bushes, requiring no lubrication.",
      category: 'Plastic Components',
      industry: 'Industrial'
    },
    {
      name: 'Plastic Housings & Covers',
      image: 'https://i.postimg.cc/wTP02ZXB/download-43.jpg',
      overview: "Custom-molded plastic housings and covers for electronic devices and mechanical assemblies. They provide protection, insulation, and a finished appearance.",
      category: 'Plastic Components',
      industry: 'Electronics'
    },
    {
      name: 'Plastic Door Handles',
      image: 'https://i.postimg.cc/J0FcTHBF/download-48.jpg',
      overview: "Ergonomic and durable plastic door handles for automotive and industrial applications. They are lightweight, corrosion-resistant, and available in various finishes.",
      category: 'Plastic Components',
      industry: 'Construction'
    },
    {
      name: 'Plastic Window Handles',
      image: 'https://i.postimg.cc/pX9BmCwM/download_(51).jpg',
      overview: "Durable and stylish plastic window handles for residential and commercial buildings. They are designed for smooth operation and long-term reliability.",
      category: 'Plastic Components',
      industry: 'Construction'
    },
    {
      name: 'Plastic Clips and Fasteners',
      image: 'https://i.postimg.cc/t4Wt5TRr/download_(53).jpg',
      overview: "A wide range of plastic clips and fasteners for automotive and industrial assembly. They provide a secure and rattle-free solution for mounting panels and components.",
      category: 'Plastic Components',
      industry: 'Industrial'
    },
    {
      name: 'Plastic Ventilation Duct Parts',
      image: 'https://i.postimg.cc/DZjqZ45z/download_(57).jpg',
      overview: "Durable plastic components for HVAC and ventilation systems, including duct connectors, vents, and grilles. They are lightweight and easy to install.",
      category: 'Plastic Components',
      industry: 'HVAC'
    },
    
    // PVC & Infrastructure Components
    {
      name: 'PVC Water Stoppers',
      image: 'https://i.postimg.cc/Xqr9yNDk/download_(58).jpg',
      overview: "Flexible PVC water stoppers for creating a waterproof seal in concrete construction joints. They prevent water leakage in basements, tunnels, and water retaining structures.",
      category: 'PVC & Infrastructure Components',
      industry: 'Construction'
    },
    {
      name: 'RCC Pipe Gaskets',
      image: 'https://i.postimg.cc/XYS9pbK9/download_(62).jpg',
      overview: "High-quality rubber gaskets for sealing Reinforced Concrete Cement (RCC) pipes. They ensure a watertight seal in drainage and sewage systems.",
      category: 'PVC & Infrastructure Components',
      industry: 'Infrastructure'
    },
    {
      name: 'PVC Pipes',
      image: 'https://i.postimg.cc/bwxknBLW/download_(63).jpg',
      overview: "Durable and lightweight PVC pipes for a wide range of applications, including water supply, drainage, and irrigation. They are corrosion-resistant and easy to install.",
      category: 'PVC & Infrastructure Components',
      industry: 'Infrastructure'
    },
    {
      name: 'HDPE Pipe Systems',
      image: 'https://i.postimg.cc/0N9m00BQ/download_(64).jpg',
      overview: "High-density polyethylene (HDPE) pipe systems for municipal and industrial applications. Known for their flexibility, durability, and chemical resistance.",
      category: 'PVC & Infrastructure Components',
      industry: 'Infrastructure'
    },
    {
      name: 'Customized HDPE Fittings',
      image: 'https://i.postimg.cc/V6nfNB5z/download.jpg',
      overview: "Custom-fabricated HDPE fittings to meet the specific needs of your piping system. We can create complex configurations and sizes.",
      category: 'PVC & Infrastructure Components',
      industry: 'Infrastructure'
    },
    {
      name: 'Sealing Strips for Tunnels and Bridges',
      image: 'https://i.postimg.cc/xjXsm9mZ/download_(70).jpg',
      overview: "Specialized sealing strips for use in tunnel and bridge construction, providing a durable and watertight seal.",
      category: 'PVC & Infrastructure Components',
      industry: 'Construction'
    },
    {
      name: 'Rubber Expansion Joints',
      image: 'https://i.postimg.cc/bNb36L3H/download_(72).jpg',
      overview: "Rubber expansion joints for piping systems to absorb movement, vibration, and noise, protecting the system from stress.",
      category: 'PVC & Infrastructure Components',
      industry: 'Construction'
    },
    
    // Utility & Miscellaneous
    {
      name: 'Hot Water Bottles',
      image: 'https://i.postimg.cc/vm8hZyM3/download_(75).jpg',
      overview: "High-quality rubber hot water bottles for providing warmth and comfort. Made from durable natural rubber.",
      category: 'Utility & Miscellaneous',
      industry: 'All Applications'
    },
    {
      name: 'Rubber Mounting Pads',
      image: 'https://i.postimg.cc/fLJvYvVd/download_(78).jpg',
      overview: "Versatile rubber mounting pads for reducing vibration and noise in a variety of applications, from household appliances to industrial machinery.",
      category: 'Utility & Miscellaneous',
      industry: 'Industrial'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.overview.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = filterIndustry === 'All Applications' || product.industry === filterIndustry;
    return matchesSearch && matchesIndustry;
  });

  const categories = [
    {
      name: 'Automotive Components',
      image: '/images/automotive-parts.png',
      description: 'High-performance components for vehicles',
      products: filteredProducts.filter(p => p.category === 'Automotive Components')
    },
    {
      name: 'Rubber Hoses & Tubing',
      image: '/images/air-cleaner-hose.jpg',
      description: 'Durable hoses for fluid and air transfer',
      products: filteredProducts.filter(p => p.category === 'Rubber Hoses & Tubing')
    },
    {
      name: 'EPDM / Silicone Profiles',
      image: '/images/epdm-profiles.jpg',
      description: 'Custom-extruded profiles for sealing',
      products: filteredProducts.filter(p => p.category === 'EPDM / Silicone Profiles')
    },
    {
      name: 'Plastic Components',
      image: '/images/plastic-components.jpeg',
      description: 'Precision-molded plastic parts',
      products: filteredProducts.filter(p => p.category === 'Plastic Components')
    },
    {
      name: 'PVC & Infrastructure Components',
      image: '/images/pvc-pipes.jpg',
      description: 'Infrastructure and construction solutions',
      products: filteredProducts.filter(p => p.category === 'PVC & Infrastructure Components')
    },
    {
      name: 'Utility & Miscellaneous',
      image: '/images/rubber-mounting-pads.jpg',
      description: 'General-purpose rubber products',
      products: filteredProducts.filter(p => p.category === 'Utility & Miscellaneous')
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen"
    >
      {/* Hero Banner with Carousel */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://media.istockphoto.com/id/682707472/video/ld-above-the-warehouse-workers-putting-packages-on-the-conveyor-belt.mp4?s=mp4-640x640-is&k=20&c=Kt1dZUDHTQ1rf1r6jz46_kPg9VCXHAzoaiHPu5n9dLc=" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Our Industrial <span className="text-primary">Product</span> Range
          </h1>
          <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
            Browse our extensive catalog of engineered components
          </p>
        </motion.div>
      </section>

      {/* Product Grid & Filtering Section */}
      <section 
        className="section-padding relative"
        style={{ 
          backgroundImage: 'url(https://i.postimg.cc/fRX8kC6g/Untitled.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-white/95" />
        <div className="relative z-10 container mx-auto px-4">
          {/* Search and Filter Controls */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:shadow-md"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  value={filterIndustry}
                  onChange={(e) => setFilterIndustry(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white min-w-[200px] transition-all duration-300 hover:shadow-md"
                >
                  <option>All Applications</option>
                  <option>Automotive</option>
                  <option>Industrial</option>
                  <option>Construction</option>
                  <option>Infrastructure</option>
                  <option>HVAC</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Category Accordions */}
          <div className="space-y-6">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: categoryIndex * 0.1 }}
                className="border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(category.name)}
                  className="w-full relative h-32 bg-cover bg-center flex items-center justify-between p-6 text-left hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02]"
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="relative z-10 text-white">
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-lg opacity-90">{category.description}</p>
                    <p className="text-sm opacity-75 mt-1">{category.products.length} products available</p>
                  </div>
                  <ChevronDown 
                    className={`relative z-10 h-6 w-6 text-white transition-transform duration-300 ${
                      openAccordions.includes(category.name) ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <AnimatePresence>
                  {openAccordions.includes(category.name) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="bg-white overflow-hidden"
                    >
                      <div className="p-6 space-y-8">
                        {category.products.map((product, productIndex) => (
                          <motion.div
                            key={productIndex}
                            initial={{ 
                              opacity: 0, 
                              x: productIndex % 2 === 0 ? -50 : 50 
                            }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.6, 
                              ease: "easeOut", 
                              delay: productIndex * 0.1 
                            }}
                            className={`${productIndex % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} flex flex-col lg:flex-row ${
                              productIndex % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                            } items-center gap-8 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                          >
                            <div className="lg:w-1/2">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-64 lg:h-80 object-contain object-center hover:scale-105 transition-transform duration-300 bg-gray-50 rounded-lg"
                              />
                            </div>
                            <div className="lg:w-1/2 p-8">
                              <h3 className="text-2xl font-bold mb-4 text-gray-900 hover:text-primary transition-colors duration-300">
                                {product.name}
                              </h3>
                              <p className="text-gray-600 mb-6 leading-relaxed">
                                {product.overview}
                              </p>
                              <Link
                                to={`/products/${product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                                className="btn-primary inline-flex items-center space-x-2 transform hover:scale-105 transition-all duration-300"
                              >
                                <span>View Details</span>
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                              </Link>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="section-padding bg-millat-teal text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Can't find what you're looking for?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We offer custom parts too. Contact us to discuss your specific needs.
            </p>
            <Link 
              to="/get-in-touch" 
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-block"
            >
              Request Custom Part
            </Link>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Products;