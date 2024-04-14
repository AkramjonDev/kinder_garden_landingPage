"use client"
import React, { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Image from 'next/image';
import img1 from '../../../public/images/png/1400__100_474642038.jpg'
import img2 from '../../../public/images/png/img3.jpeg'
import img3 from '../../../public/images/png/img4.jpeg'

const SplideCarousel = () => {
  useEffect(() => {
    new Splide('#splide', {
      type: 'slide',
      perPage: 1,
      autoplay: true,
      rewind: true,
      pagination: false,
      arrows: true,
    }).mount();
  }, []);

  return (
    <div className=''>
      <div id="splide" className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            <li className="splide__slide">
              <Image className='w-full h-auto rounded-xl' src={img1} alt="Image 1" />
            </li>
            <li className="splide__slide">
              <Image className='w-full h-auto rounded-xl' src={img2} alt="Image 2" />
            </li>
            <li className="splide__slide">
              <Image className='w-full h-auto rounded-xl' src={img3} alt="Image 3" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SplideCarousel;
