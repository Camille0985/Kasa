import React from 'react';
import '../style/Banner.scss';
import homeBanner from '../assets/Home-banner.png';
import aboutBanner from '../assets/About-banner.png';

function Banner({ page }) {
    const bannerImage = page === 'home' ? homeBanner : aboutBanner;
    const altText = page === 'home' ? 'Montagnes' : 'Montagnes enneigées';
    const title = page === 'home' ? 'Chez vous,  partout et ailleurs' : '';

    const commaIndex = title.indexOf(',  ');
    const titlePart1 = title.substring(0, commaIndex + 1);
    const titlePart2 = title.substring(commaIndex + 2); 
  
    return (
      <div className="banner-container">
        <div className="banner">
          <div className="image-container">
            <img src={bannerImage} alt={altText} className="banner-img" />
          </div>
        </div>
        <div className='title'>
          <span>{titlePart1}</span>
          <br className='space-mobile-title'/>
          <span>{titlePart2}</span>
        </div>
      </div>
    );
  }

export default Banner;