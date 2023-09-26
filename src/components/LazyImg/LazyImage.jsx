import React, { useRef, useEffect, useState } from 'react';

const LazyImage = ({ src, alt }) => {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let observer;
    const currentImageRef = imageRef.current;

    const handleIntersection = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(currentImageRef);
      }
    };

    if (currentImageRef) {
      observer = new IntersectionObserver(handleIntersection, {
        rootMargin: '0px 0px 50px 0px', // Adjust as needed
        threshold: 0.1, // Adjust as needed
      });

      observer.observe(currentImageRef);
    }

    return () => {
      if (observer && currentImageRef) {
        observer.unobserve(currentImageRef);
      }
    };
  }, []);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <img
      ref={imageRef}
      src={isVisible ? src : ''}
      alt={alt}
      loading={isLoading ? 'eager' : 'lazy'}
      onLoad={handleImageLoad}
      style={{
        filter: isLoading ? 'blur(20px)' : 'none', // Adjust the blur intensity
        transition: 'filter 1s ease', // Adjust the animation duration
      }}
    />
  );
};

export default LazyImage;
