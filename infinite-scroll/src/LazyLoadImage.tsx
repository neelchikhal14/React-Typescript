import React, { useEffect, useRef } from "react";

interface LLImagePropsI {
  author: string;
  url: string;
  isLastImageTile?: boolean;
  nextPage: () => void;
  idx: number;
  downloadUrl: string;
  id: string;
}

const LazyLoadImage = ({
  author,
  downloadUrl,
  url,
  isLastImageTile,
  nextPage,
  idx,
  id,
}: LLImagePropsI) => {
  const imageRef = useRef<HTMLImageElement>(null);

  const intersectionObserverConfig = {
    rootMargin: "0px 0px 300px 0px", // 300px before bottom
    threshold: 0.2,
  };
  useEffect(() => {
    if (isLastImageTile) {
      intersectionObserverConfig.rootMargin = "0px 0px 0px 0px";
      intersectionObserverConfig.threshold = 0;
    }
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

            if (isLastImageTile) {
              nextPage();
            }
          }
        });
      },
      intersectionObserverConfig
    );
    // stop observation , if observed once and image is loaded
    if (imageRef.current?.src === url) {
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
  }, [isLastImageTile]);
  return (
    <>
      <div>
        <img
          src=""
          alt={author}
          data-src={url}
          ref={imageRef}
          width={1000}
          height={500}
        />
      </div>
      <div>
        <p>{author}</p>
      </div>
    </>
  );
};

export default LazyLoadImage;
