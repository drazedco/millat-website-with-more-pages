import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface EmblaCarouselProps {
  images: string[];
  className?: string;
}

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ images, className = "" }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  return (
    <div className={`embla ${className}`} ref={emblaRef}>
      <div className="embla__container flex">
        {images.map((image, index) => (
          <div key={index} className="embla__slide flex-none w-full">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;