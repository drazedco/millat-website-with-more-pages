import React from 'react';

interface HeroBannerProps {
  backgroundImage?: string;
  videoUrl?: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  className?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  backgroundImage,
  videoUrl,
  title,
  subtitle,
  children,
  className = "h-[70vh] hero-mobile-fix"
}) => {
  return (
    <section className={`relative ${className} flex items-center justify-center overflow-hidden mb-8 md:mb-0`}>
      {/* Background Video or Image */}
      {videoUrl ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      ) : backgroundImage ? (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      ) : null}
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 
          className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
          {subtitle}
        </p>
        {children}
      </div>
    </section>
  );
};

export default HeroBanner;