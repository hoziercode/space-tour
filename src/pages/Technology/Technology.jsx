import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '../../utils/data.json'
import TechnologyCard from './TechnologyCard/TechnologyCard';
import './Technology.css';
import { useState } from 'react';
import 'swiper/swiper-bundle.css';

function Technology() {
  const [swiper, setSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const goToSlide1 = () => {
    if (swiper !== null) {
      swiper.slideTo(0);
      setActiveSlide(0);
    }
  };

  const goToSlide2 = () => {
    if (swiper !== null) {
      swiper.slideTo(1);
      swiper.slideTo(1);
      
    }
  };

  const goToSlide3 = () => {
    if (swiper !== null) {
      swiper.slideTo(2);
      swiper.slideTo(2);
      
    }
  };
  return (
        <div className='innerWidth tech-container' style={{backgroundImage: `url("assets/technology/bg-d.jpg")`}}>
        <div className='rounded-btn'>
        <div onClick={goToSlide1} className={activeSlide === 0 ? 'rounded active' : 'rounded'}>1</div>
        <div onClick={goToSlide2} className={activeSlide === 1 ? 'rounded active' : 'rounded'}>2</div>
        <div onClick={goToSlide3} className={activeSlide === 2 ? 'rounded active' : 'rounded'}>3</div>
          </div>
      <div className='innerWidth me' >
        {
          <Swiper
          onSwiper={setSwiper}
          slidesPerView={1}
          className="fade-swiper"
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
          navigation={false}
          >
            {
               data.technology.map((tech, index) => {
                return (
                  <SwiperSlide key={index}>
                    <TechnologyCard 
                    name={tech.name}
                    image={ window.innerWidth <= 1032 ? (tech.images.landscape) : (tech.images.portrait)}
                    description={tech.description}
                  />
                  </SwiperSlide>
                  
                );
               })
            }
          </Swiper>
        }
      </div>
    </div>
   
  )
}

export default Technology
