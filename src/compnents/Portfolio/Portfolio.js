import React from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import IMG1 from './1.png'
import IMG10 from './10.png'
import IMG2 from './2.png'
import IMG3 from './3.png'
import IMG7 from './7.png'
import IMG8 from './8.png'
import IMG9 from './9.png'
import './portfolio.css'
import IMG11 from './time.png'
const Portfolio = () => {
  return (
    <div>
        <div className='mt-50'>
            <h2>Recent Projcet <br />
        <span className='yellow'>Portfolio</span></h2>
        </div>
      <Swiper
      spaceBetween={30}
    slidesPerView={3}
    grabCursor={true}
    loop={true}
      >
        <SwiperSlide>
            <img src={IMG1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={IMG2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={IMG3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={IMG7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={IMG8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={IMG9} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={IMG10} alt="" />
        </SwiperSlide>

        <SwiperSlide>
            <img src={IMG11} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio
