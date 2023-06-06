import React from 'react';
import data from '../../utils/data.json'
import {Swiper, SwiperSlide} from 'swiper/react';
import CrewCard from './CrewCard/CrewCard';
import { useState } from 'react';
import 'swiper/swiper-bundle.css';
import './Crew.css'

function Crew() {
  const [swiper, setSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const goToMission = () => {
    if (swiper !== null) {
      swiper.slideTo(1);
      setActiveSlide(1);
    }
  };

  const goToCommander = () => {
    if (swiper !== null) {
      swiper.slideTo(0);
      setActiveSlide(0);
    }
  };

  const goToPilot = () => {
    if (swiper !== null) {
      swiper.slideTo(2);
      swiper.slideTo(2);
      
    }
  };

  const goToFlict = () => {
    if (swiper !== null) {
      swiper.slideTo(3);
      swiper.slideTo(3);
      
    }
  };
  return (
    <div style={{backgroundImage: window.innerWidth <= 768 ? `url("assets/crew/bg-t.jpg")` : window.innerWidth <= 375 ? `url("assets/crew/bg-m.jpg")` :`url("assets/crew/bg-dt.jpg")` }} className='crew'>
      <div className='slider-btn'>
        <div onClick={goToCommander} className={activeSlide === 0 ? 'btn active' : 'btn'}></div>
        <div onClick={goToMission} className={activeSlide === 1 ? 'btn active' : 'btn'}></div>
        <div onClick={goToPilot} className={activeSlide === 2 ? 'btn active' : 'btn'}></div>
        <div onClick={goToFlict} className={activeSlide === 3 ? 'btn active' : 'btn'}></div>
      </div>
      <div className='innerWidth'>
        {
          <Swiper
          onSwiper={setSwiper}
          slidesPerView={1}
          className="fade-swiper"
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
          navigation={false}
          >
            {
              data.crew.map((crew, index) => {
                return(
                  <SwiperSlide key={index}>
                    <CrewCard
                      bio={crew.bio}
                      name={crew.name}
                      role={crew.role}
                      image={crew.images.png}
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

export default Crew
