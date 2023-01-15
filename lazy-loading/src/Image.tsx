import "./Image.css";

import React from "react";

interface imagePropsI {
  imgSrc: string;
  altText: string;
}

const Image = ({ imgSrc, altText }: imagePropsI) => {
  return (
    <div className="image-container">
      <img src={imgSrc} alt={altText} className="img" />
    </div>
  );
};

export default Image;
