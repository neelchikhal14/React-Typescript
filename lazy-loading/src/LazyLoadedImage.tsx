import "./LazyLoadedImage.css";

import React, { useEffect, useRef } from "react";

interface LLImagePropsI {
  imageSrc: string;
  altText: string;
}

const intersectionObserverConfig = {
  rootMargin: "0px 0px 300px 0px", // 300px before bottom
  threshold: 0.2,
};
const LazyLoadedImage = ({ altText, imageSrc }: LLImagePropsI) => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // create intersection observer
    const observer: IntersectionObserver = new IntersectionObserver(
      (
        entries: IntersectionObserverEntry[],
        self: IntersectionObserver
      ): void => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            const theImage = imageRef.current;
            if (theImage !== null && theImage.src && theImage?.dataset?.src) {
              //load the image
              theImage.src = theImage.dataset.src;
            }
          }
        });
      },
      intersectionObserverConfig
    );
    // stop observation , if observed once and image is loaded
    if (imageRef.current?.src === imageSrc) {
      observer.unobserve(imageRef.current);
    }
    //start the observation
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    return () => {
      // stop observer if component is unmounted
      observer.disconnect();
    };
  }, [imageSrc]);

  return (
    <div className="image-container">
      <img
        src=""
        alt={altText}
        width={1000}
        height={500}
        ref={imageRef}
        data-src={imageSrc}
        className="img"
      />
    </div>
  );
};

export default LazyLoadedImage;
