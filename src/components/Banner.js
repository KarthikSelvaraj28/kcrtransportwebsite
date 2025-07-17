import React from 'react';
import './Banner.css'; // Import the CSS file for animation

const Banner = () => {
  return (
    <div className="bannerContainer">
      <img
        src="/images/karbanner.png"
        alt="KCR Transport Banner"
        className="bannerImage"
      />
    </div>
  );
};

export default Banner;
