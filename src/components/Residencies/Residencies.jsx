import React from 'react'
import{Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import './Residencies.css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'
const Residencies = () => {
  return (
    <section className='r-wrapper'>
      <div className='padding innerWidth r-container'>
        <div className='r-head flexColStart'>
          <span className='orangeText'>Best choices</span>
          <span className='primaryText'>Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
        <SlideNextButton />
        {
           data.map((card, i)=>(
            <SwiperSlide key={i}>
             <div className='flexColStart r-card'>
                <img src={card.image} alt= 'home'/>

                <span className='secondaryText r-price'>
                  <span style={{color:'orange'}}>$</span>
                  <span>{card.price}</span>
                </span> 

                <span className='primaryText'>{card.name}</span>
                <span className='seconadaryText'>{card.detail}</span>

                  

             </div>
            </SwiperSlide>
           ))
        }
      </Swiper>
      </div> 

      
    </section>
  )
}

export default Residencies;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};
