import React from 'react'
import './Destination.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import 'swiper/swiper-bundle.css';
import data from '../../utils/data.json'
import Destinationcard from '../../components/DestinationCard/Destinationcard';

function Destination() {
  const [swiper, setSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const goToMars = () => {
    if (swiper !== null) {
      swiper.slideTo(1);
      setActiveSlide(1);
    }
  };

  const goToMoon = () => {
    if (swiper !== null) {
      swiper.slideTo(0);
      setActiveSlide(0);
    }
  };

  const goToEuropa = () => {
    if (swiper !== null) {
      swiper.slideTo(2);
      swiper.slideTo(2);
      
    }
  };

  const goToTitan = () => {
    if (swiper !== null) {
      swiper.slideTo(3);
      swiper.slideTo(3);
      
    }
  };

  return (
    <div className='desti-container innerWidth' style={{backgroundImage: `url("assets/destination/bg-d.jpg")`}}>
      <div className='same'>
        <button onClick={goToMoon} className={activeSlide === 0 ? 'swiper-btn active' : 'swiper-btn'}>MOON</button>
        <button onClick={goToMars} className={activeSlide === 1 ? 'swiper-btn active' : 'swiper-btn'}>MARS</button>
        <button onClick={goToEuropa} className={activeSlide === 2 ? 'swiper-btn active' : 'swiper-btn'}>EUROPA</button>
        <button onClick={goToTitan} className={activeSlide === 3 ? 'swiper-btn active' : 'swiper-btn'}>TITAN</button>
      </div>
      <div className='innerWidth paddings'>
        {
          <Swiper
            onSwiper={setSwiper}
            slidesPerView={1}
            className="fade-swiper"
            onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
            navigation={false}
          >
           {
              data.destinations.map((card, index) => {
                return (
                  <SwiperSlide key={index}>
                     <Destinationcard
                    image={card.images.png}
                    name={card.name}
                    travel={card.travel}
                    description={card.description}
                    kilometer={card.distance}
                    days={card.travel}
                    index={activeSlide + 1}
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

export default Destination
