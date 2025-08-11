import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, Share2, Phone, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import ImageLightbox from '../components/ImageLightbox';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProductDetail = () => {
  const { productId } = useParams();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use the scroll animation hook
  useScrollAnimation();

  // Product data mapping
  const productData: { [key: string]: any } = {
    'engine-mounting': {
      title: 'Engine Mounting',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: true,
      iframe3D: 'https://p3d.in/e/ZMw9y',
      mainImage: 'https://i.postimg.cc/pdQXJ72K/Whats-App-Image-2025-07-23-at-9-08-23-PM.jpg',
      overview: "Millat Polymer & Rubber's Engine Mountings are expertly engineered rubber-to-metal bonded components designed to support the engine system while effectively dampening vibration and absorbing shocks. These critical components prevent the transmission of engine-induced movement and noise to the vehicle chassis, ensuring smoother driving dynamics, enhanced passenger comfort, and increased engine stability. Crafted using durable elastomers like NR, EPDM, or SBR—each customized to the application—our engine mountings are ideal for light commercial vehicles, motorcycles (including rickshaws), industrial generators, and agricultural equipment.",
      keyFeatures: [
        "Vibration & Shock Absorption: Minimizes noise and vibration transfer.",
        "Rubber-to-Metal Bonding: Ensures rigid yet flexible connection.",
        "Custom Hardness Grades: Designed to match OEM tolerances and stress conditions.",
        "Weather & Oil Resistance: Resists heat, oil, and wear in harsh engine environments.",
        "Long-Lasting Performance: Extended service life under continuous dynamic loads."
      ],
      applications: "Automotive, Industrial Engines, Generators",
      materials: "Material: Natural Rubber (NR), EPDM, or SBR\nStandards: ISO 9001:2015, SAE 20R3, ASTM D2000",
      specifications: {
        "Material": "Natural Rubber (NR), EPDM, or SBR",
        "Hardness": "45–70 Shore A (customizable)",
        "Bonding Type": "Metal-to-Rubber Vulcanized Bonding",
        "Tensile Strength": "≥ 12 MPa",
        "Operating Temp.": "-30°C to +120°C",
        "Oil Resistance": "ASTM D471 Compliant"
      },
      galleryImages: [
        'https://i.postimg.cc/CMCW5hVV/s-l400.jpg',
        'https://i.postimg.cc/NMKjYKnY/image_234a9e3c-eb0e-4f2c-87be-ce58c45c9916.webp',
        'https://i.postimg.cc/pdQXJ72K/Whats-App-Image-2025-07-23-at-9-08-23-PM.jpg'
      ]
    },
    'rickshaw-engine-mounting': {
      title: 'Rickshaw Engine Mounting',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: true,
      iframe3D: 'https://p3d.in/e/Ngn0j',
      mainImage: 'https://i.postimg.cc/ZRTY7cR2/Whats-App-Image-2025-07-24-at-1-59-11-PM5.jpg',
      overview: "Millat Polymer & Rubber (Pvt) Ltd proudly manufactures high-performance Rickshaw Engine Mountings designed to withstand the harsh conditions of urban and commercial transport. These mounts are engineered to securely hold the engine while isolating vibrations and reducing the transfer of road shocks to the chassis. Specially crafted for 3-wheelers such as rickshaws, Qingqi, loader rickshaws, and other light utility vehicles, these mountings offer exceptional stability, long service life, and noise reduction. Using a balanced combination of durable rubber elastomers and precision metal inserts, Millat ensures optimal shock absorption, long-term reliability, and perfect fitment for OEM and aftermarket needs.",
      keyFeatures: [
        "Optimized Vibration Damping: Minimizes transmission of engine noise and vibration to the frame.",
        "Durable Rubber-to-Metal Bonding: Withstands high torsional stress and maintains structural integrity.",
        "Oil and Heat Resistant: Designed to perform under engine heat and lubricants.",
        "Perfect Fitment: Compatible with a wide range of rickshaw makes and models.",
        "Heavy-Duty Design: Handles urban stop-start driving and poor road conditions.",
        "Customizable Designs: Offered in various shapes and mounting configurations (e.g., bracketed, bolted, or grommet-style)."
      ],
      applications: "Rickshaw Engine Mounting Systems, Loader Rickshaws & Qingqi Models, Three-Wheeler Auto Assemblies, Rear and Front Engine Support Mounts, Small Utility Vehicle Drivetrain Mounting. These mounts are a critical component in maintaining driver comfort, engine stability, and vehicle integrity in high-vibration environments.",
      materials: "Material: Various high-grade polymers\nStandards: ISO 9001:2015, SAE 20R3, ASTM D2000",
      specifications: {
        "Hardness (Shore A)": "55–75",
        "Static Load Capacity": "Up to 500–800 kg per mount",
        "Dynamic Load Resistance": "Tuned to minimize resonant frequencies",
        "Temperature Resistance": "-30°C to +110°C",
        "Bond Strength": ">6 N/mm (tested)",
        "Lifespan": "30,000 – 50,000 km (typical usage)"
      },
      galleryImages: [
        'https://i.postimg.cc/BZ8jfzWD/download.jpg',
        'https://i.postimg.cc/2yxJKwx5/images.jpg',
        'https://i.postimg.cc/ZRTY7cR2/Whats-App-Image-2025-07-24-at-1-59-11-PM5.jpg'
      ]
    },
    'rubber-bushes': {
      title: 'Rubber Bushes',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/fTJJZg6m/download_(1).jpg',
      overview: "Millat Polymer & Rubber manufactures high-performance Rubber Bushes designed to absorb shock, reduce vibration, and minimize noise between mechanical parts. These flexible cylindrical components are used as cushions between two metal objects, usually to permit relative motion while isolating vibration and noise. Our rubber bushes are engineered to maintain structural integrity under dynamic loading, torsional forces, and varying environmental conditions. With decades of precision molding experience and OEM-grade formulation, Millat's rubber bushes ensure reliable, long-lasting performance in both light-duty and heavy-duty applications.",
      keyFeatures: [
        "High Vibration & Shock Absorption: Dampen noise and vibration across a wide frequency range",
        "Durable Bonding: Rubber-to-metal bonded configurations for extra stability",
        "Weather & Chemical Resistant: Withstands exposure to oil, fuel, ozone, and harsh environments",
        "Customizable Hardness: Shore A hardness from 40 to 90, based on application",
        "Precision Molding: Excellent dimensional tolerance for tight fits",
        "OEM Compatibility: Designed to meet or exceed original equipment standards"
      ],
      applications: "Automotive Suspension Systems (Control Arms, Stabilizer Links, Shock Absorbers), Agricultural and Construction Equipment, Railways and Locomotives, Industrial Machinery & Gear Assemblies, Marine and HVAC Equipment, Small Engine Mounting & Isolators.",
      materials: "Material: NR, EPDM, NBR, SBR, Neoprene, Silicone\nStandards: ISO 9001:2015",
      specifications: {
        "Material Options": "NR, EPDM, NBR, SBR, Neoprene, Silicone",
        "Outer Diameter Range": "10 mm to 250 mm",
        "Inner Bore Range": "5 mm to 150 mm",
        "Wall Thickness": "Customizable from 2 mm upward",
        "Shore Hardness": "40–90 A (application-specific)",
        "Bonding": "Available with inner/outer sleeves, flanged or non-flanged styles"
      },
      galleryImages: [
        'https://i.postimg.cc/bvNvCCHZ/images_(1).jpg',
        'https://i.postimg.cc/KjbwfVBV/images.png',
        'https://i.postimg.cc/fTJJZg6m/download_(1).jpg'
      ]
    },
    'metal-to-rubber-bonded-bush': {
      title: 'Metal to Rubber Bonded Bush',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: true,
      iframe3D: 'https://p3d.in/e/5qLgO',
      mainImage: 'https://i.postimg.cc/3NN87x2Z/Whats-App-Image-2025-07-24-at-1-59-11-PM7.jpg',
      overview: "Millat Polymer & Rubber (Pvt) Ltd specializes in manufacturing premium-quality metal-to-rubber bonded bushes that offer superior performance in vibration damping, shock absorption, and alignment control. These bushes consist of a durable elastomeric compound vulcanized to a metal inner or outer sleeve (or both), providing a robust yet flexible connection between mechanical components...",
      keyFeatures: [
        "High-Strength Vulcanized Bond: Creates an inseparable bond...",
        "Excellent Vibration & Noise Isolation: Effectively dampens oscillations...",
        "Superior Load-Bearing Capacity: Designed to handle high radial, axial, and torsional loads.",
        "Resistant to Environmental Factors: Withstands exposure to oil, heat, ozone, and abrasion.",
        "Precision Tolerances: Ensures perfect fitment...",
        "Customizable Materials: Available in a variety of metals and rubber compounds."
      ],
      applications: "Automotive control arms, suspension systems, and subframe mounts; industrial machinery and equipment linkages; agricultural and construction vehicle pivots; railway bogies and shock absorbers; marine and offshore applications requiring corrosion resistance.",
      materials: "Material: NR, SBR, NBR, EPDM, Silicone\nStandards: ISO 9001:2015",
      specifications: {
        "Metal Types": "Mild Steel, Stainless Steel, Aluminum, Brass",
        "Rubber Compounds": "NR, SBR, NBR, EPDM, Silicone",
        "Hardness Range": "40–85 Shore A",
        "Temperature Range": "-40°C to +150°C (compound-dependent)",
        "Bond Strength": "Exceeds industry standards for tear and shear resistance",
        "Designs": "Cylindrical, flanged, conical, and custom-engineered shapes"
      },
      galleryImages: [
        'https://i.postimg.cc/t4bJPCst/epdm-rubber-bush-500x500.webp',
        'https://i.postimg.cc/FKWH2yDD/images_(2).jpg',
        'https://i.postimg.cc/3NN87x2Z/Whats-App-Image-2025-07-24-at-1-59-11-PM7.jpg'
      ]
    },
    'vibration-dampers': {
      title: 'Vibration Dampers',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/pLBTBb8N/images_(3).jpg',
      overview: "Millat Polymer & Rubber's Vibration Dampers are precision-engineered components that effectively reduce and isolate vibrations in dynamic systems. Whether it's high-speed industrial machinery or the chassis of an automobile, our dampers are built to handle extreme conditions and repetitive motion while safeguarding equipment performance and durability. These dampers absorb energy from mechanical oscillations and environmental impacts, improving operational stability and user comfort. Designed using robust elastomers and customizable geometry, they offer high energy dissipation, low rebound characteristics, and resistance to environmental degradation.",
      keyFeatures: [
        "Superior Vibration Damping: Attenuates mechanical shocks and cyclical motion",
        "High Load Capacity: Supports both static and dynamic weight distributions",
        "Environmental Resilience: Resistant to oil, grease, chemicals, heat, and ozone",
        "Durable Construction: Reinforced bonding with metal cores (optional)",
        "Custom Molded Geometry: Cylindrical, conical, sandwich, and bobbin-type shapes",
        "Noise Reduction: Reduces structure-borne and airborne noise"
      ],
      applications: "Automotive Engines and Transmissions, HVAC Units and Compressors, Power Generators and Alternators, Industrial Fans and Pumps, CNC Machinery and Automation Systems, Elevators, Cranes, and Load-Bearing Platforms, Defense & Aerospace Systems, Precision Equipment Mounts.",
      materials: "Material: NR, EPDM, NBR, Silicone, SBR, Neoprene\nStandards: ISO 9001:2015",
      specifications: {
        "Material Options": "NR, EPDM, NBR, Silicone, SBR, Neoprene",
        "Load Capacity Range": "5 kg to 2000+ kg depending on type",
        "Hardness Range": "45 to 85 Shore A",
        "Temperature Resistance": "-40°C to +120°C",
        "Shapes Available": "Cylindrical, Conical, Square Base, Plate Mount, and Custom",
        "Metal Interface": "Zinc-plated steel or stainless steel bonding (optional)"
      },
      galleryImages: [
        'https://i.postimg.cc/tJPRZLyM/images_(5).jpg',
        'https://i.postimg.cc/rm7Fp864/images_(4).jpg',
        'https://i.postimg.cc/pLBTBb8N/images_(3).jpg'
      ]
    },
    'rubber-gaskets': {
      title: 'Rubber Gaskets',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/nLYL08Db/download_(3).jpg',
      overview: "Rubber gaskets are precision-cut seals designed to prevent leaks between two joined surfaces under compression. They provide a reliable barrier against fluids, gases, and contaminants.",
      keyFeatures: [
        "High elasticity for effective sealing",
        "Resistant to a wide range of chemicals",
        "Excellent temperature stability",
        "Available in various hardness levels"
      ],
      applications: "Engine components, Pipe flanges, Hydraulic systems, HVAC units",
      materials: "Material: EPDM, NBR, Silicone, Neoprene",
      specifications: {
        "Material Composition": "EPDM, NBR, Silicone, Neoprene"
      },
      galleryImages: [
        'https://i.postimg.cc/qRYYh9hK/download.jpg',
        'https://i.postimg.cc/nLYL08Db/download_(3).jpg'
      ]
    },
    'rubber-seals': {
      title: 'Rubber Seals',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/qRtDTjbv/download.jpg',
      overview: "High-performance rubber seals for a variety of applications, providing excellent sealing against fluids and gases. Custom designs available.",
      keyFeatures: [
        "High-performance sealing",
        "Wide temperature range",
        "Excellent chemical resistance",
        "Custom profiles available"
      ],
      applications: "Engine seals, door seals, window seals, and industrial equipment sealing.",
      materials: "Material: Silicone, EPDM, NBR, Viton",
      specifications: {
        "Material": "Silicone, EPDM, NBR, Viton",
        "Hardness": "30-90 Shore A"
      },
      galleryImages: [
        'https://i.postimg.cc/76344HQ6/images.jpg',
        'https://i.postimg.cc/g2xPJqB1/images.jpg',
        'https://i.postimg.cc/qRtDTjbv/download.jpg'
      ]
    },
    'rubber-dust-covers': {
      title: 'Rubber Dust Covers',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/kgM9qVVZ/images_(18).jpg',
      overview: "Durable rubber dust covers to protect mechanical components from dust, dirt, and moisture, extending their service life.",
      keyFeatures: [
        "Protects against environmental contaminants",
        "Flexible and durable construction",
        "Custom sizes and shapes available",
        "Easy installation"
      ],
      applications: "Protective covering for mechanical components, automotive parts, and industrial equipment.",
      materials: "Material: EPDM, Neoprene, Silicone",
      specifications: {
        "Material": "EPDM, Neoprene, Silicone"
      },
      galleryImages: [
        'https://i.postimg.cc/kgM9qVVZ/images_(18).jpg'
      ]
    },
    'rubber-dust-bellows': {
      title: 'Rubber Dust Bellows',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/GpnmYr1c/Whats-App-Image-2025-07-23-at-9-08-24-PM3.jpg',
      overview: "Flexible rubber dust bellows designed to protect moving parts from contaminants while allowing for movement.",
      keyFeatures: [
        "Highly flexible design",
        "Durable and tear-resistant",
        "Protects against dust, water, and oils",
        "Custom sizes available"
      ],
      applications: "Protective covering for shafts, rods, and other moving components.",
      materials: "Material: EPDM, Neoprene, Silicone",
      specifications: {
        "Material": "EPDM, Neoprene, Silicone"
      },
      galleryImages: [
        'https://i.postimg.cc/3x98vj5Y/images_(9).jpg',
        'https://i.postimg.cc/L6t6HKxq/images_(10).jpg',
        'https://i.postimg.cc/GpnmYr1c/Whats-App-Image-2025-07-23-at-9-08-24-PM3.jpg'
      ]
    },
    'rubber-bellows': {
      title: 'Rubber Bellows',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/661pHfy3/download_(7).jpg',
      overview: "Custom-molded rubber bellows for a variety of industrial applications, providing flexible connections and protection.",
      keyFeatures: [
        "Absorbs vibration and movement",
        "Resistant to chemicals and temperature changes",
        "Durable and long-lasting"
      ],
      applications: "Expansion joints, vibration dampeners, flexible connectors.",
      materials: "Material: EPDM, NBR, Silicone",
      specifications: {
        "Material": "EPDM, NBR, Silicone"
      },
      galleryImages: [
        'https://i.postimg.cc/gkXk1LZK/download_(9).jpg',
        'https://i.postimg.cc/zvMDV89W/download_(8).jpg',
        'https://i.postimg.cc/661pHfy3/download_(7).jpg'
      ]
    },
    'rubber-grommets': {
      title: 'Rubber Grommets',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/PxvT9BL5/images_(12).jpg',
      overview: "Rubber grommets for protecting wires, cables, and hoses passing through panels, preventing abrasion and providing a neat finish.",
      keyFeatures: [
        "Protects against sharp edges",
        "Vibration damping",
        "Easy to install",
        "Various sizes and materials available"
      ],
      applications: "Wire management, sealing, and vibration isolation.",
      materials: "Material: SBR, EPDM, Silicone",
      specifications: {
        "Material": "SBR, EPDM, Silicone"
      },
      galleryImages: [
        'https://i.postimg.cc/cCQZ4wBq/images_(13).jpg',
        'https://i.postimg.cc/ncycxVKf/download_(10).jpg',
        'https://i.postimg.cc/PxvT9BL5/images_(12).jpg'
      ]
    },
    'anti-vibration-parts': {
      title: 'Anti-Vibration Parts',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/9FWsq6Ww/rubber-vibration-mounts.webp',
      overview: "A range of anti-vibration parts, including mounts and pads, to reduce noise and vibration in machinery and equipment.",
      keyFeatures: [
        "Effective vibration isolation",
        "Reduces noise levels",
        "Improves machinery lifespan",
        "Rubber-to-metal bonded options"
      ],
      applications: "Engine mounts, machinery feet, shock absorbers.",
      materials: "Material: Natural Rubber, Neoprene, SBR",
      specifications: {
        "Material": "Natural Rubber, Neoprene, SBR"
      },
      galleryImages: [
        'https://i.postimg.cc/pLBTBb8N/images_(3).jpg',
        'https://i.postimg.cc/Qd7CKKNM/download_(2).jpg',
        'https://i.postimg.cc/9FWsq6Ww/rubber-vibration-mounts.webp'
      ]
    },
    'custom-molded-rubber': {
      title: 'Custom Molded Rubber',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/brXph3bH/images_(15).jpg',
      overview: "We offer custom molding services for rubber parts to meet your specific requirements. We can produce complex shapes and designs.",
      keyFeatures: [
        "Parts made to your specifications",
        "Wide range of materials",
        "Prototyping and high-volume production",
        "Compression, transfer, and injection molding"
      ],
      applications: "Custom seals, gaskets, bumpers, and other unique rubber components.",
      materials: "Material: All common elastomers",
      specifications: {
        "Material": "All common elastomers"
      },
      galleryImages: [
        'https://i.postimg.cc/DyTnpp77/images_(16).jpg',
        'https://i.postimg.cc/mrRLcd6d/download_(12).jpg',
        'https://i.postimg.cc/brXph3bH/images_(15).jpg'
      ]
    },
    'dust-boots-for-suspension': {
      title: 'Dust Boots for Suspension',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/rmwqjDTx/download-13.jpg',
      overview: "Suspension dust boots to protect shock absorbers and struts from dust and debris, ensuring optimal performance and longevity.",
      keyFeatures: [
        "Protects suspension components",
        "Durable and flexible",
        "Resistant to road salts and oils"
      ],
      applications: "Shock absorbers, struts, and other suspension components.",
      materials: "Material: EPDM, Neoprene",
      specifications: {
        "Material": "EPDM, Neoprene"
      },
      galleryImages: [
        'https://i.postimg.cc/LsGBzRDm/download.jpg',
        'https://i.postimg.cc/VsMzRPQ7/images_(17).jpg',
        'https://i.postimg.cc/rmwqjDTx/download-13.jpg'
      ]
    },
    'steering-rack-boots': {
      title: 'Steering Rack Boots',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/ZqcT6rGJ/download_(14).jpg',
      overview: "Durable steering rack boots to protect the steering rack from contaminants, preventing premature wear and failure.",
      keyFeatures: [
        "Protects steering system",
        "Resistant to steering fluid and grease",
        "Highly flexible to accommodate steering movement"
      ],
      applications: "Rack and pinion steering systems.",
      materials: "Material: Neoprene, Thermoplastic Elastomer (TPE)",
      specifications: {
        "Material": "Neoprene, Thermoplastic Elastomer (TPE)"
      },
      galleryImages: [
        'https://i.postimg.cc/Y2VtN2sL/download_(15).jpg',
        'https://i.postimg.cc/KzG8W9PK/download_(5).jpg',
        'https://i.postimg.cc/ZqcT6rGJ/download_(14).jpg'
      ]
    },
    'pedal-covers': {
      title: 'Pedal Covers',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/V6tPDnTS/images_(21).jpg',
      overview: "High-grip rubber pedal covers for brake, clutch, and accelerator pedals, enhancing safety and providing a comfortable feel.",
      keyFeatures: [
        "Improved grip and safety",
        "Durable and wear-resistant",
        "Easy to install"
      ],
      applications: "Replacement pedal covers for most vehicle models.",
      materials: "Material: SBR, EPDM",
      specifications: {
        "Material": "SBR, EPDM"
      },
      galleryImages: [
        'https://i.postimg.cc/0ytvQ8DN/images_(20).jpg',
        'https://i.postimg.cc/J09mRKk5/download_(16).jpg',
        'https://i.postimg.cc/V6tPDnTS/images_(21).jpg'
      ]
    },
    'turbocharger-system-connectors': {
      title: 'Turbocharger System Connectors',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/fkn4GLGH/download_(26).jpg',
      overview: "Molded rubber connectors for turbocharger systems, designed to withstand high temperatures and pressures.",
      keyFeatures: [
        "High temperature resistance",
        "Resistant to oil and fuel",
        "Durable and flexible"
      ],
      applications: "Connecting components in turbo systems, such as intercoolers and intake manifolds.",
      materials: "Material: Silicone, Fluoroelastomer (FKM)",
      specifications: {
        "Material": "Silicone, Fluoroelastomer (FKM)"
      },
      galleryImages: [
        'https://i.postimg.cc/vHXr05hq/download.jpg',
        'https://i.postimg.cc/1XBqYZGn/images.jpg',
        'https://i.postimg.cc/fkn4GLGH/download_(26).jpg'
      ]
    },
    'ev-hoses': {
      title: 'EV Hoses',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/3NH56W5t/images_(24).jpg',
      overview: "Specialized hoses for electric vehicle battery and component cooling systems, designed for long life and reliability.",
      keyFeatures: [
        "Resistant to specific EV coolants",
        "Low electrical conductivity",
        "Durable and flexible"
      ],
      applications: "Battery cooling, power electronics cooling, and cabin heating in EVs.",
      materials: "Material: EPDM, Silicone",
      specifications: {
        "Material": "EPDM, Silicone"
      },
      galleryImages: [
        'https://i.postimg.cc/NfNX6BGZ/download.jpg',
        'https://i.postimg.cc/nzYjCtwR/download.jpg',
        'https://i.postimg.cc/3NH56W5t/images_(24).jpg'
      ]
    },
    'metal-plastic-automotive-parts': {
      title: 'Metal & Plastic Automotive Parts',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/T3vGS7GR/download_(19).jpg',
      overview: "A range of metal and plastic parts for automotive applications, including brackets, clips, and other components.",
      keyFeatures: [
        "High-strength materials",
        "Corrosion resistant finishes",
        "Custom manufacturing available"
      ],
      applications: "Brackets, fasteners, and other structural or functional parts.",
      materials: "Material: Steel, Aluminum, Nylon, ABS",
      specifications: {
        "Material": "Steel, Aluminum, Nylon, ABS"
      },
      galleryImages: [
        'https://i.postimg.cc/nLHxVXCg/download_(20).jpg',
        'https://i.postimg.cc/5251MBN8/download_(21).jpg',
        'https://i.postimg.cc/T3vGS7GR/download_(19).jpg'
      ]
    },
    // Rubber Hoses & Tubing products
    'radiator-hoses': {
      title: 'Radiator Hoses',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/SQZJBptm/1.jpg',
      overview: "Durable radiator hoses for automotive cooling systems, designed to withstand high temperatures and pressures. Available for a wide range of vehicles.",
      keyFeatures: [
        "High temperature resistance",
        "Reinforced for durability",
        "Resistant to coolant and ozone",
        "Pre-shaped for easy installation"
      ],
      applications: "Connecting the radiator to the engine for coolant circulation.",
      materials: "Material: EPDM with textile reinforcement",
      specifications: {
        "Material": "EPDM with textile reinforcement",
        "Temperature Range": "-40°C to +125°C"
      },
      galleryImages: [
        'https://i.postimg.cc/tgG4PM6L/download.jpg',
        'https://i.postimg.cc/15Lmhjvf/download.jpg',
        'https://i.postimg.cc/SQZJBptm/1.jpg'
      ]
    },
    'air-cleaner-hose': {
      title: 'Air Cleaner Hose',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/x1v2rTk4/download.jpg',
      overview: "Flexible air cleaner hoses to connect the air filter box to the engine intake, ensuring a clean air supply.",
      keyFeatures: [
        "Flexible and durable",
        "Resistant to oil and engine heat",
        "Ensures a sealed air intake path"
      ],
      applications: "Connecting the air filter housing to the throttle body or turbocharger.",
      materials: "Material: EPDM, Neoprene",
      specifications: {
        "Material": "EPDM, Neoprene"
      },
      galleryImages: [
        'https://i.postimg.cc/KYK68tm9/images_(28).jpg',
        'https://i.postimg.cc/52tcDZTW/images_(29).jpg',
        'https://i.postimg.cc/x1v2rTk4/download.jpg'
      ]
    },
    'air-cleaner-hosing': {
      title: 'Air Cleaner Hosing',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/25XmG9Lk/download.jpg',
      overview: "Complete hosing solutions for air cleaner systems, providing a reliable path for clean air to the engine.",
      keyFeatures: [
        "Complete hosing assemblies",
        "Durable and flexible materials",
        "Resistant to engine bay conditions"
      ],
      applications: "Full hosing for air intake systems in various vehicles.",
      materials: "Material: EPDM, Plastic",
      specifications: {
        "Material": "EPDM, Plastic"
      },
      galleryImages: [
        'https://i.postimg.cc/2SkDDN4j/download.jpg',
        'https://i.postimg.cc/RFHrRSzd/download.jpg',
        'https://i.postimg.cc/25XmG9Lk/download.jpg'
      ]
    },
    'hand-fabricated-rubber-hoses': {
      title: 'Hand-Fabricated Rubber Hoses',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/PxGVd1Bb/download.jpg',
      overview: "Custom, hand-fabricated rubber hoses for unique applications where standard hoses are not suitable.",
      keyFeatures: [
        "Made to your specifications",
        "Complex shapes and sizes",
        "Various materials available"
      ],
      applications: "Custom coolant, air, and fluid transfer hoses.",
      materials: "Material: Various elastomers",
      specifications: {
        "Material": "Various elastomers"
      },
      galleryImages: [
        'https://i.postimg.cc/B6Gpr4KM/download.jpg',
        'https://i.postimg.cc/9FNpWG94/download.jpg',
        'https://i.postimg.cc/PxGVd1Bb/download.jpg'
      ]
    },
    'intercooler-turbo-hoses': {
      title: 'Intercooler / Turbo Hoses',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/05LbkCx4/download_(27).jpg',
      overview: "High-performance hoses for turbocharger and intercooler systems, designed to handle high pressures and temperatures.",
      keyFeatures: [
        "High pressure and temperature resistance",
        "Reinforced for boost applications",
        "Resistant to oil and fuel vapor"
      ],
      applications: "Connecting turbochargers, intercoolers, and intake manifolds.",
      materials: "Material: Silicone with reinforcement layers",
      specifications: {
        "Material": "Silicone with reinforcement layers"
      },
      galleryImages: [
        'https://i.postimg.cc/xCMBKYJM/images_(33).jpg',
        'https://i.postimg.cc/QMRR9Vtj/images_(32).jpg',
        'https://i.postimg.cc/05LbkCx4/download_(27).jpg'
      ]
    },
    'breather-vacuum-hoses': {
      title: 'Breather & Vacuum Hoses',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/3wQ2R9xw/download.jpg',
      overview: "A range of breather and vacuum hoses for various automotive engine functions, ensuring proper system operation.",
      keyFeatures: [
        "Resistant to oil and fuel vapor",
        "Flexible and durable",
        "Maintains vacuum and pressure integrity"
      ],
      applications: "PCV systems, vacuum lines, crankcase ventilation.",
      materials: "Material: NBR, EPDM",
      specifications: {
        "Material": "NBR, EPDM"
      },
      galleryImages: [
        'https://i.postimg.cc/nh4CdxnH/download.jpg',
        'https://i.postimg.cc/7hJLS8Br/download.jpg',
        'https://i.postimg.cc/3wQ2R9xw/download.jpg'
      ]
    },
    'heater-fuel-hoses': {
      title: 'Heater & Fuel Hoses',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/y8rqKLCg/images_(30).jpg',
      overview: "Durable heater and fuel hoses for automotive applications, designed for safe and reliable fluid transfer.",
      keyFeatures: [
        "Resistant to coolant and fuel",
        "High temperature resistance (heater hoses)",
        "Meets fuel line safety standards (fuel hoses)"
      ],
      applications: "Heater cores, fuel lines, and other fluid transfer needs.",
      materials: "Material: EPDM (heater), NBR (fuel)",
      specifications: {
        "Material": "EPDM (heater), NBR (fuel)"
      },
      galleryImages: [
        'https://i.postimg.cc/dQZB14PP/download.jpg',
        'https://i.postimg.cc/XN9jn6vR/download-1.jpg',
        'https://i.postimg.cc/y8rqKLCg/images_(30).jpg'
      ]
    },
    'silicone-rubber-hoses': {
      title: 'Silicone Rubber Hoses',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/4yRXpBW2/download-2.jpg',
      overview: "High-performance silicone hoses for demanding applications, offering excellent temperature resistance and durability.",
      keyFeatures: [
        "Wide operating temperature range",
        "Excellent flexibility",
        "Reinforced options for high pressure",
        "Available in various colors"
      ],
      applications: "Turbo systems, coolant lines, and other high-temperature applications.",
      materials: "Material: Silicone with reinforcement",
      specifications: {
        "Material": "Silicone with reinforcement"
      },
      galleryImages: [
        'https://i.postimg.cc/ZnP4Hpgb/download-4.jpg',
        'https://i.postimg.cc/XN9jn6vR/download-1.jpg',
        'https://i.postimg.cc/4yRXpBW2/download-2.jpg'
      ]
    },
    'flexible-rubber-hoses': {
      title: 'Flexible Rubber Hoses',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/7ZZw1CN4/download-5.jpg',
      overview: "Versatile and flexible rubber hoses for a wide range of industrial and general-purpose applications.",
      keyFeatures: [
        "Highly flexible for easy routing",
        "Durable and abrasion-resistant",
        "Various materials for different fluids"
      ],
      applications: "General industrial, workshops, and fluid transfer.",
      materials: "Material: SBR, NBR, EPDM",
      specifications: {
        "Material": "SBR, NBR, EPDM"
      },
      galleryImages: [
        'https://i.postimg.cc/SNrmzLCV/download-6.jpg',
        'https://i.postimg.cc/N0GmmFRh/download.jpg',
        'https://i.postimg.cc/7ZZw1CN4/download-5.jpg'
      ]
    },
    'industrial-rubber-hoses': {
      title: 'Industrial Rubber Hoses',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/x8nW07xQ/download-17.jpg',
      overview: "Heavy-duty industrial rubber hoses for demanding applications, including material handling, and chemical transfer.",
      keyFeatures: [
        "Heavy-duty construction",
        "High pressure ratings",
        "Resistant to abrasion and chemicals"
      ],
      applications: "Abrasive material transfer, chemical lines, high-pressure water.",
      materials: "Material: Various specialized elastomers",
      specifications: {
        "Material": "Various specialized elastomers"
      },
      galleryImages: [
        'https://i.postimg.cc/brg4dTWt/download-20.jpg',
        'https://i.postimg.cc/wxQCWqMj/download-21.jpg',
        'https://i.postimg.cc/x8nW07xQ/download-17.jpg'
      ]
    },
    'hydraulic-return-hoses': {
      title: 'Hydraulic Return Hoses',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/nrxtXML6/download-10.jpg',
      overview: "Hydraulic return hoses for low-pressure applications in hydraulic systems, returning fluid to the reservoir.",
      keyFeatures: [
        "Designed for low-pressure return lines",
        "Resistant to hydraulic fluids",
        "Flexible and durable"
      ],
      applications: "Return lines in industrial and mobile hydraulic systems.",
      materials: "Material: NBR, Neoprene",
      specifications: {
        "Material": "NBR, Neoprene"
      },
      galleryImages: [
        'https://i.postimg.cc/pTzHVKPf/download-11.jpg',
        'https://i.postimg.cc/brg4dTWt/download-20.jpg',
        'https://i.postimg.cc/nrxtXML6/download-10.jpg'
      ]
    },
    'hvac-duct-hoses': {
      title: 'HVAC Duct Hoses',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/zX01fzYc/download-13.jpg',
      overview: "Flexible hoses for HVAC applications, used for air transfer in heating, ventilation, and air conditioning systems.",
      keyFeatures: [
        "Highly flexible for easy installation",
        "Lightweight and durable",
        "Insulated options available"
      ],
      applications: "Connecting vents, fans, and other HVAC components.",
      materials: "Material: PVC, Aluminum, Fabric",
      specifications: {
        "Material": "PVC, Aluminum, Fabric"
      },
      galleryImages: [
        'https://i.postimg.cc/zDwr9wt5/download-14.jpg',
        'https://i.postimg.cc/jdsbKWmf/download-15.jpg',
        'https://i.postimg.cc/zX01fzYc/download-13.jpg'
      ]
    },
    'agricultural-hoses': {
      title: 'Agricultural Hoses',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYp-tEJcmxfFr1dZ7eY8Rg6s1dn939pSmfCA&s',
      overview: "Durable hoses designed for agricultural applications, including irrigation, spraying, and slurry transfer. Resistant to abrasion and harsh weather conditions.",
      keyFeatures: [
        "Reinforced for high pressure",
        "UV and ozone resistant",
        "Flexible for easy handling"
      ],
      applications: "Crop spraying, Irrigation systems, Slurry transport",
      materials: "Material: PVC, Rubber, Polyurethane",
      specifications: {
        "Material Composition": "PVC, Rubber, Polyurethane"
      },
      galleryImages: [
        'https://i.postimg.cc/FKJtG0dM/download-16.jpg',
        'https://i.postimg.cc/V6jxP1F4/download-18.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYp-tEJcmxfFr1dZ7eY8Rg6s1dn939pSmfCA&s'
      ]
    },
    'marine-rubber-hoses': {
      title: 'Marine Rubber Hoses',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/wvKCr3D7/download-19.jpg',
      overview: "Specialized hoses for marine use, including fuel lines, bilge pump hoses, and exhaust systems. Designed to withstand saltwater and harsh marine environments.",
      keyFeatures: [
        "Resistant to fuel, oil, and saltwater",
        "Flame retardant options available",
        "Highly flexible and durable"
      ],
      applications: "Boat fuel lines, Bilge pump discharge, Marine exhaust systems",
      materials: "Material: Nitrile, Neoprene, Reinforced Rubber",
      specifications: {
        "Material Composition": "Nitrile, Neoprene, Reinforced Rubber"
      },
      galleryImages: [
        'https://i.postimg.cc/RhTxK96q/download-12.jpg',
        'https://i.postimg.cc/wxQCWqMj/download-21.jpg',
        'https://i.postimg.cc/wvKCr3D7/download-19.jpg'
      ]
    },
    // EPDM / Silicone Profiles products
    'epdm-silicone-profiles': {
      title: 'EPDM / Silicone Profiles',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/fTW6pGSj/download-22.jpg',
      overview: "Millat Polymer & Rubber manufactures high-quality EPDM (Ethylene Propylene Diene Monomer) and Silicone extruded profiles for a wide range of industrial sealing and insulation applications. Our profiles are engineered to provide excellent resistance to weathering, ozone, UV radiation, and extreme temperatures. Using advanced extrusion technology, we can produce complex shapes and custom designs to meet precise client specifications. Millat's EPDM and silicone profiles are trusted in industries where durability, flexibility, and long-term performance are critical.",
      keyFeatures: [
        "Excellent Weather & Ozone Resistance: Ideal for outdoor and high-exposure applications.",
        "Wide Temperature Range: Silicone profiles perform from -60°C to +230°C; EPDM from -40°C to +150°C.",
        "High Flexibility: Retains elasticity even at low temperatures.",
        "Superior Sealing Properties: Creates an effective barrier against dust, water, and air.",
        "Customizable Shapes & Sizes: Available in U-channels, D-sections, P-seals, cord, tubing, and custom-designed profiles.",
        "Color Matching Available: Can be produced in a variety of colors to match specific requirements."
      ],
      applications: "Automotive door and window seals, construction and architectural glazing gaskets, electrical enclosure seals, HVAC and appliance seals, industrial machinery and equipment seals, marine hatch seals, and food-grade silicone profiles for the food and beverage industry.",
      materials: "Material: EPDM (70 Shore A standard), Silicone (60 Shore A standard)",
      specifications: {
        "Material": "EPDM (70 Shore A standard), Silicone (60 Shore A standard)",
        "Hardness Range": "40–90 Shore A",
        "Tensile Strength": "EPDM: >10 MPa; Silicone: >7 MPa",
        "Elongation at Break": ">300%",
        "Certifications": "Materials can be supplied to meet industry standards (e.g., FDA, WRAS-approved for specific applications)",
        "Finishes": "Smooth, textured, or with adhesive backing"
      },
      galleryImages: [
        'https://i.postimg.cc/CM2GpDzP/download_(61).jpg',
        'https://i.postimg.cc/VNHqsbKk/images_(5).jpg',
        'https://i.postimg.cc/fTW6pGSj/download-22.jpg'
      ]
    },
    'rubber-sheets-epdm-extrusions': {
      title: 'Rubber Sheets & EPDM Extrusions',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/Kv9d20nX/download-23.jpg',
      overview: "Versatile rubber sheets and EPDM extrusions for gasketing, sealing, and insulation. Available in various thicknesses and custom profiles to suit any application.",
      keyFeatures: [
        "Excellent weather and water resistance",
        "High and low temperature stability",
        "Custom-cut sizes and profiles available"
      ],
      applications: "Weather stripping, Gasketing, Vibration damping, Insulation",
      materials: "Material: EPDM, Neoprene, Silicone, NBR",
      specifications: {
        "Material Composition": "EPDM, Neoprene, Silicone, NBR"
      },
      galleryImages: [
        'https://i.postimg.cc/3xVVyWSn/download-25.jpg',
        'https://i.postimg.cc/YChTqQ3v/download-24.jpg',
        'https://i.postimg.cc/Kv9d20nX/download-23.jpg'
      ]
    },
    'edge-trims': {
      title: 'Edge Trims',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/tTtMmkXM/download-28.jpg',
      overview: "Protective edge trims for sharp edges on metal, fiberglass, or plastic. They provide a clean, finished look while enhancing safety.",
      keyFeatures: [
        "Flexible and easy to install",
        "Durable and weather-resistant",
        "Available with or without metal core"
      ],
      applications: "Vehicle door edges, Machinery guards, Panel edging",
      materials: "Material: PVC, EPDM, with optional steel core",
      specifications: {
        "Material Composition": "PVC, EPDM, with optional steel core"
      },
      galleryImages: [
        'https://i.postimg.cc/gjgBG0Ly/download-31.jpg',
        'https://i.postimg.cc/PqDc1h0h/download-26.jpg',
        'https://i.postimg.cc/tTtMmkXM/download-28.jpg'
      ]
    },
    'window-channel-seals': {
      title: 'Window Channel Seals',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/BbSVWFbQ/download-30.jpg',
      overview: "Window channel seals, also known as glass run channels, provide a secure and weatherproof seal for sliding windows in vehicles and buildings.",
      keyFeatures: [
        "Flocked surface for smooth glass movement",
        "Excellent sealing against water and wind",
        "Durable and long-lasting"
      ],
      applications: "Car windows, Architectural windows, Sliding glass doors",
      materials: "Material: EPDM with flock lining",
      specifications: {
        "Material Composition": "EPDM with flock lining"
      },
      galleryImages: [
        'https://i.postimg.cc/59grBsKH/download-29.jpg',
        'https://i.postimg.cc/yYFyhx8L/download.png',
        'https://i.postimg.cc/BbSVWFbQ/download-30.jpg'
      ]
    },
    'door-frame-profiles': {
      title: 'Door Frame Profiles',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/tTtMmkXM/download-28.jpg',
      overview: "Custom-extruded rubber profiles for sealing vehicle and industrial doors. They provide excellent protection against dust, water, and noise.",
      keyFeatures: [
        "High-compression set resistance",
        "Durable and weather-resistant",
        "Available in various shapes (e.g., D, P, E profiles)"
      ],
      applications: "Car doors, Industrial enclosures, Container seals",
      materials: "Material: EPDM, Silicone, Neoprene",
      specifications: {
        "Material Composition": "EPDM, Silicone, Neoprene"
      },
      galleryImages: [
        'https://i.postimg.cc/dtSSXLYw/download-32.jpg',
        'https://i.postimg.cc/fTbrBY18/download-33.jpg',
        'https://i.postimg.cc/tTtMmkXM/download-28.jpg'
      ]
    },
    // Plastic Components products
    'injection-molded-parts': {
      title: 'Injection Molded Parts',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/sgQ0RsjS/download-35.jpg',
      overview: "High-precision plastic injection molded parts for a wide range of applications. We offer custom molding services to produce complex and durable components.",
      keyFeatures: [
        "High precision and tight tolerances",
        "Wide range of materials and colors",
        "Suitable for high-volume production"
      ],
      applications: "Automotive interior parts, Electronic housings, Consumer product components",
      materials: "Material: ABS, Polypropylene, Nylon, Polycarbonate",
      specifications: {
        "Material Composition": "ABS, Polypropylene, Nylon, Polycarbonate"
      },
      galleryImages: [
        'https://i.postimg.cc/XYR1jmqP/download-34.jpg',
        'https://i.postimg.cc/sXynSWp9/download-36.jpg',
        'https://i.postimg.cc/sgQ0RsjS/download-35.jpg'
      ]
    },
    'plastic-caps-plugs': {
      title: 'Plastic Caps & Plugs',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/VvkDZcZJ/download-38.jpg',
      overview: "Protective plastic caps and plugs for tubing, pipes, and threaded connections. They prevent contamination and damage during shipping and storage.",
      keyFeatures: [
        "Durable and impact-resistant",
        "Available in various sizes and styles",
        "Easy to install and remove"
      ],
      applications: "Pipe end protection, Thread protection, Dust covers",
      materials: "Material: LDPE, HDPE, PVC",
      specifications: {
        "Material Composition": "LDPE, HDPE, PVC"
      },
      galleryImages: [
        'https://i.postimg.cc/fyq56g1B/download-39.jpg',
        'https://i.postimg.cc/XJ8sgvLM/download-37.jpg',
        'https://i.postimg.cc/VvkDZcZJ/download-38.jpg'
      ]
    },
    'plastic-bushes': {
      title: 'Plastic Bushes',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/Gh9XkdsN/download-41.jpg',
      overview: "Durable and low-friction plastic bushes for bearing and pivot applications. They provide a cost-effective alternative to metal bushes, requiring no lubrication.",
      keyFeatures: [
        "Self-lubricating and low friction",
        "High wear and chemical resistance",
        "Lightweight and corrosion-proof"
      ],
      applications: "Hinges, Pivot points, Control linkages, Bearings",
      materials: "Material: Nylon, Acetal (POM), PTFE",
      specifications: {
        "Material Composition": "Nylon, Acetal (POM), PTFE"
      },
      galleryImages: [
        'https://i.postimg.cc/nV3djCMB/download-40.jpg',
        'https://i.postimg.cc/9Q71nbbY/download-42.jpg',
        'https://i.postimg.cc/Gh9XkdsN/download-41.jpg'
      ]
    },
    'plastic-housings-covers': {
      title: 'Plastic Housings & Covers',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/wTP02ZXB/download-43.jpg',
      overview: "Custom-molded plastic housings and covers for electronic devices and mechanical assemblies. They provide protection, insulation, and a finished appearance.",
      keyFeatures: [
        "High impact strength and durability",
        "Custom designs with logos and features",
        "UL flame retardant materials available"
      ],
      applications: "Electronic enclosures, Control panel covers, Device housings",
      materials: "Material: ABS, Polycarbonate, Polystyrene",
      specifications: {
        "Material Composition": "ABS, Polycarbonate, Polystyrene"
      },
      galleryImages: [
        'https://i.postimg.cc/KYhQSTsS/download-44.jpg',
        'https://i.postimg.cc/43vPJ3rK/download-45.jpg',
        'https://i.postimg.cc/wTP02ZXB/download-43.jpg'
      ]
    },
    'plastic-door-handles': {
      title: 'Plastic Door Handles',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/J0FcTHBF/download-48.jpg',
      overview: "Ergonomic and durable plastic door handles for automotive and industrial applications. They are lightweight, corrosion-resistant, and available in various finishes.",
      keyFeatures: [
        "High-strength and impact-resistant",
        "Ergonomic designs for comfortable use",
        "Available in custom colors and textures"
      ],
      applications: "Car door handles, Cabinet handles, Equipment handles",
      materials: "Material: Reinforced Nylon, ABS, Polypropylene",
      specifications: {
        "Material Composition": "Reinforced Nylon, ABS, Polypropylene"
      },
      galleryImages: [
        'https://i.postimg.cc/Hxp2jgg6/download-46.jpg',
        'https://i.postimg.cc/B6MCKVZ4/download-47.jpg',
        'https://i.postimg.cc/J0FcTHBF/download-48.jpg'
      ]
    },
    'plastic-window-handles': {
      title: 'Plastic Window Handles',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/pX9BmCwM/download_(51).jpg',
      overview: "Durable and stylish plastic window handles for residential and commercial buildings. They are designed for smooth operation and long-term reliability.",
      keyFeatures: [
        "UV resistant for color stability",
        "Corrosion-proof and maintenance-free",
        "Locking and non-locking options available"
      ],
      applications: "Casement windows, Awning windows, Tilt-and-turn windows",
      materials: "Material: uPVC, Nylon, ABS",
      specifications: {
        "Material Composition": "uPVC, Nylon, ABS"
      },
      galleryImages: [
        'https://i.postimg.cc/wMMQcQ3J/download-49.jpg',
        'https://i.postimg.cc/v82z8kSv/download_(50).jpg',
        'https://i.postimg.cc/pX9BmCwM/download_(51).jpg'
      ]
    },
    'plastic-clips-and-fasteners': {
      title: 'Plastic Clips and Fasteners',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/t4Wt5TRr/download_(53).jpg',
      overview: "A wide range of plastic clips and fasteners for automotive and industrial assembly. They provide a secure and rattle-free solution for mounting panels and components.",
      keyFeatures: [
        "Lightweight and easy to install",
        "Designed for quick assembly and disassembly",
        "Vibration and corrosion resistant"
      ],
      applications: "Car interior trim, Panel mounting, Wire and cable routing",
      materials: "Material: Nylon, Acetal (POM), Polypropylene",
      specifications: {
        "Material Composition": "Nylon, Acetal (POM), Polypropylene"
      },
      galleryImages: [
        'https://i.postimg.cc/RVjLKfm6/download_(52).jpg',
        'https://i.postimg.cc/PqMWgRwY/download_(54).jpg',
        'https://i.postimg.cc/t4Wt5TRr/download_(53).jpg'
      ]
    },
    'plastic-ventilation-duct-parts': {
      title: 'Plastic Ventilation Duct Parts',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/DZjqZ45z/download_(57).jpg',
      overview: "Durable plastic components for HVAC and ventilation systems, including duct connectors, vents, and grilles. They are lightweight and easy to install.",
      keyFeatures: [
        "Corrosion and moisture resistant",
        "Lightweight for easy handling",
        "Smooth interior for efficient airflow"
      ],
      applications: "Air duct systems, Ventilation outlets, Grilles and diffusers",
      materials: "Material: PVC, Polypropylene, ABS",
      specifications: {
        "Material Composition": "PVC, Polypropylene, ABS"
      },
      galleryImages: [
        'https://i.postimg.cc/gJkVmHV5/download_(56).jpg',
        'https://i.postimg.cc/R0m1bBNv/download_(55).jpg',
        'https://i.postimg.cc/DZjqZ45z/download_(57).jpg'
      ]
    },
    // PVC & Infrastructure Components products
    'pvc-water-stoppers': {
      title: 'PVC Water Stoppers',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/Xqr9yNDk/download_(58).jpg',
      overview: "Flexible PVC water stoppers for creating a waterproof seal in concrete construction joints. They prevent water leakage in basements, tunnels, and water retaining structures.",
      keyFeatures: [
        "High tensile strength and elasticity",
        "Resistant to chemicals and water pressure",
        "Easy to weld and install on-site"
      ],
      applications: "Construction joints, Expansion joints, Water tanks, Tunnels",
      materials: "Material: Polyvinyl Chloride (PVC)",
      specifications: {
        "Material Composition": "Polyvinyl Chloride (PVC)"
      },
      galleryImages: [
        'https://i.postimg.cc/Vv2n9yxQ/download_(59).jpg',
        'https://i.postimg.cc/ncYqjW35/images.png',
        'https://i.postimg.cc/Xqr9yNDk/download_(58).jpg'
      ]
    },
    'rcc-pipe-gaskets': {
      title: 'RCC Pipe Gaskets',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/XYS9pbK9/download_(62).jpg',
      overview: "High-quality rubber gaskets for sealing Reinforced Concrete Cement (RCC) pipes. They ensure a watertight seal in drainage and sewage systems.",
      keyFeatures: [
        "Durable and long-lasting",
        "Excellent resistance to water and chemicals",
        "Flexible to accommodate joint movement"
      ],
      applications: "Sewage pipes, Drainage systems, Water supply lines",
      materials: "Material: EPDM, SBR, Natural Rubber",
      specifications: {
        "Material Composition": "EPDM, SBR, Natural Rubber"
      },
      galleryImages: [
        'https://i.postimg.cc/SNzWSs9y/download_(60).jpg',
        'https://i.postimg.cc/65w3ySdg/download.jpg',
        'https://i.postimg.cc/XYS9pbK9/download_(62).jpg'
      ]
    },
    'pvc-pipes': {
      title: 'PVC Pipes',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/bwxknBLW/download_(63).jpg',
      overview: "Durable and lightweight PVC pipes for a wide range of applications, including water supply, drainage, and irrigation. They are corrosion-resistant and easy to install.",
      keyFeatures: [
        "Corrosion and chemical resistant",
        "Lightweight and easy to handle",
        "Smooth interior for excellent flow"
      ],
      applications: "Water mains, Drainage systems, Irrigation networks",
      materials: "Material: Polyvinyl Chloride (PVC)",
      specifications: {
        "Material Composition": "Polyvinyl Chloride (PVC)"
      },
      galleryImages: [
        'https://i.postimg.cc/sXNhydDQ/download_(67).jpg',
        'https://i.postimg.cc/JnfjZCVw/images_(7).jpg',
        'https://i.postimg.cc/bwxknBLW/download_(63).jpg'
      ]
    },
    'hdpe-pipe-systems': {
      title: 'HDPE Pipe Systems',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/0N9m00BQ/download_(64).jpg',
      overview: "High-density polyethylene (HDPE) pipe systems for municipal and industrial applications. Known for their flexibility, durability, and chemical resistance.",
      keyFeatures: [
        "Flexible and fatigue resistant",
        "High chemical resistance",
        "Leak-free joints through heat fusion"
      ],
      applications: "Potable water systems, natural gas lines, and chemical transport.",
      materials: "Material: High-Density Polyethylene (HDPE)",
      specifications: {
        "Material": "High-Density Polyethylene (HDPE)"
      },
      galleryImages: [
        'https://i.postimg.cc/sXXhtDyC/download_(65).jpg',
        'https://i.postimg.cc/Hkkktyvt/download.jpg',
        'https://i.postimg.cc/0N9m00BQ/download_(64).jpg'
      ]
    },
    'customized-hdpe-fittings': {
      title: 'Customized HDPE Fittings',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/V6nfNB5z/download.jpg',
      overview: "Custom-fabricated HDPE fittings to meet the specific needs of your piping system. We can create complex configurations and sizes.",
      keyFeatures: [
        "Fabricated to your specifications",
        "Ensures a fully compatible system",
        "High-quality heat fusion welding"
      ],
      applications: "Custom tees, elbows, reducers, and other fittings.",
      materials: "Material: High-Density Polyethylene (HDPE)",
      specifications: {
        "Material": "High-Density Polyethylene (HDPE)"
      },
      galleryImages: [
        'https://i.postimg.cc/5tpz7Qhm/download_(66).jpg',
        'https://i.postimg.cc/PJv853P6/download_(68).jpg',
        'https://i.postimg.cc/V6nfNB5z/download.jpg'
      ]
    },
    'sealing-strips-for-tunnels-and-bridges': {
      title: 'Sealing Strips for Tunnels and Bridges',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/xjXsm9mZ/download_(70).jpg',
      overview: "Specialized sealing strips for use in tunnel and bridge construction, providing a durable and watertight seal.",
      keyFeatures: [
        "Excellent weather and ozone resistance",
        "Accommodates movement and expansion",
        "Long-term durability"
      ],
      applications: "Expansion joints in bridges and sealing segments in tunnels.",
      materials: "Material: EPDM, Neoprene",
      specifications: {
        "Material": "EPDM, Neoprene"
      },
      galleryImages: [
        'https://i.postimg.cc/sfbT9b9g/download_(71).jpg',
        'https://i.postimg.cc/qgf6hsKp/download_(69).jpg',
        'https://i.postimg.cc/xjXsm9mZ/download_(70).jpg'
      ]
    },
    'rubber-expansion-joints': {
      title: 'Rubber Expansion Joints',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/bNb36L3H/download_(72).jpg',
      overview: "Rubber expansion joints for piping systems to absorb movement, vibration, and noise, protecting the system from stress.",
      keyFeatures: [
        "Absorbs movement in multiple directions",
        "Reduces noise and vibration",
        "High pressure and temperature ratings"
      ],
      applications: "Connecting pumps, turbines, and other equipment to piping systems.",
      materials: "Material: EPDM, Neoprene, Butyl",
      specifications: {
        "Material": "EPDM, Neoprene, Butyl"
      },
      galleryImages: [
        'https://i.postimg.cc/vZtXyTR4/download_(73).jpg',
        'https://i.postimg.cc/RZBG2fYr/download_(74).jpg',
        'https://i.postimg.cc/bNb36L3H/download_(72).jpg'
      ]
    },
    // Utility & Miscellaneous products
    'hot-water-bottles': {
      title: 'Hot Water Bottles',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/vm8hZyM3/download_(75).jpg',
      overview: "High-quality rubber hot water bottles for providing warmth and comfort. Made from durable natural rubber.",
      keyFeatures: [
        "Provides soothing warmth",
        "Durable and leak-proof",
        "Ribbed surface for gentle heat release"
      ],
      applications: "Personal comfort and therapeutic use",
      materials: "Material: Natural Rubber",
      specifications: {
        "Material": "Natural Rubber"
      },
      galleryImages: [
        'https://i.postimg.cc/3wLByqx7/download_(76).jpg',
        'https://i.postimg.cc/nzgG2QmP/download_(77).jpg',
        'https://i.postimg.cc/vm8hZyM3/download_(75).jpg'
      ]
    },
    'rubber-mounting-pads': {
      title: 'Rubber Mounting Pads',
      subtitle: 'High-performance solutions for industrial applications.',
      has3D: false,
      mainImage: 'https://i.postimg.cc/fLJvYvVd/download_(78).jpg',
      overview: "Versatile rubber mounting pads for reducing vibration and noise in a variety of applications, from household appliances to industrial machinery.",
      keyFeatures: [
        "Effective vibration and noise reduction",
        "Durable and resilient",
        "Can be cut to size"
      ],
      applications: "Placing under washing machines, air conditioners, and other vibrating equipment.",
      materials: "Material: SBR, Neoprene",
      specifications: {
        "Material": "SBR, Neoprene"
      },
      galleryImages: [
        'https://i.postimg.cc/xjmvY8M9/images_(9).jpg',
        'https://i.postimg.cc/3NGCcJCJ/download_(79).jpg',
        'https://i.postimg.cc/fLJvYvVd/download_(78).jpg'
      ]
    }
  };

  // Get current product data
  const currentProduct = productData[productId || ''];

  if (!currentProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const lightboxImages = currentProduct.galleryImages.map((src: string) => ({
    src,
    alt: currentProduct.title
  }));

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="min-h-screen"
    >
      {/* Breadcrumb */}
      <section className="py-4 bg-light">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-primary transition-colors">home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-primary transition-colors">products</Link>
            <span>/</span>
            <span className="text-gray-900">{currentProduct.title}</span>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-4">
        <div className="container mx-auto px-4">
          <Link 
            to="/products" 
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>back to products</span>
          </Link>
        </div>
      </section>

      {/* Hero Banner */}
      <section className="relative bg-gray-100 py-16">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">{currentProduct.title}</h1>
              <p className="text-xl text-gray-600 mb-8">{currentProduct.subtitle}</p>
              <Link
                to="/get-in-touch"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>request quote</span>
              </Link>
            </div>
            
            <div className="fade-in">
              {currentProduct.has3D ? (
                <div className="bg-white rounded-2xl p-4 shadow-lg">
                  <iframe
                    src={currentProduct.iframe3D}
                    width="100%"
                    height="400"
                    frameBorder="0"
                    allowFullScreen
                    className="rounded-lg"
                  />
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <img
                    src={currentProduct.mainImage}
                    alt={currentProduct.title}
                    className="w-full h-80 object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Product Overview */}
              <div className="fade-in">
                <h2 className="text-2xl font-bold mb-4">Product Overview</h2>
                <p className="text-gray-600 leading-relaxed">{currentProduct.overview}</p>
              </div>

              {/* Key Features */}
              <div className="fade-in">
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {currentProduct.keyFeatures.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Common Applications */}
              <div className="fade-in">
                <h2 className="text-2xl font-bold mb-4">Common Applications</h2>
                <p className="text-gray-600 leading-relaxed">{currentProduct.applications}</p>
              </div>

              {/* Materials & Standards */}
              <div className="fade-in">
                <h2 className="text-2xl font-bold mb-4">Materials & Standards</h2>
                <pre className="text-gray-600 whitespace-pre-line font-sans">{currentProduct.materials}</pre>
              </div>
            </div>

            {/* Right Column - Technical Specifications */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-2xl shadow-lg p-6 fade-in">
                <h3 className="text-xl font-bold mb-6">Technical Specifications</h3>
                <div className="space-y-4">
                  {Object.entries(currentProduct.specifications).map(([key, value]) => (
                    <div key={key} className="border-b border-gray-100 pb-3">
                      <dt className="font-medium text-gray-900 mb-1">{key}</dt>
                      <dd className="text-gray-600 text-sm">{value as string}</dd>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold mb-6">Product Gallery</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProduct.galleryImages.map((image: string, index: number) => (
              <div
                key={index}
                className="fade-in bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image}
                  alt={`${currentProduct.title} ${index + 1}`}
                  className="w-full h-64 object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="fade-in max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need a customized version of this product?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's build it together. Contact us today for a quote or to discuss your specific requirements with our experts.
            </p>
            
            {/* Contact Links */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:+923008474507"
                className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+92 (300) 847-4507</span>
              </a>
              <a
                href="mailto:millatpolymer@gmail.com"
                className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>millatpolymer@gmail.com</span>
              </a>
              <a
                href="https://wa.me/923008474507"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>whatsapp</span>
              </a>
            </div>

            <Link 
              to="/get-in-touch" 
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
            >
              get in touch
            </Link>
          </div>
        </div>
      </section>

      <ImageLightbox
        images={lightboxImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </motion.div>
  );
};

export default ProductDetail;