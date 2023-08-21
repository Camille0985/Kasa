import React, { useState } from 'react';
import arrowLeft from '../assets/arrow-left.png';
import arrowRight from '../assets/arrow-right.png';
import '../style/Carousel.scss'


const Carousel = ({ img }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const previousImage = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex === 0 ? img.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex === img.length - 1 ? 0 : prevIndex + 1));
  };

  const currentImageIndex = currentImgIndex + 1;

  return (
    <div className='carousel-container'>
      <div className='carousel'>
        <img src={img[currentImgIndex]} alt={`Img ${currentImageIndex}/${img.length}`} className='img-carousel' />
        <div className='btn-carousel-container'>
          <button onClick={previousImage} className='btn-carousel-left'>
            <img src={arrowLeft} alt='Back' className='img-btn-carousel' />
          </button>
          <button onClick={nextImage} className='btn-carousel-right'>
            <img src={arrowRight} alt='Forward' className='img-btn-carousel' />
          </button>
        </div>
        <div className='carousel-counter'>
          <span>{currentImageIndex}/{img.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;