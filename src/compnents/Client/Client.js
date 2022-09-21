import React from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import IMG1 from './1.jpg'
import IMG2 from './2.jpg'
import IMG3 from './3.jpg'
import IMG4 from './4.jpg'
import './client.css'
import ClinetCard from './ClinetCard'
const Client = () => {
  return (
    <div>
    <div className='mt-50'>
        <h2>Client Always <br />
    <span className='yellow'>GetExpentional Workfrom me...</span></h2>
    </div>
  <Swiper
  spaceBetween={30}
slidesPerView={2}
grabCursor={true}
loop={true}
className='client-swiper'
  >
    <SwiperSlide>
      <ClinetCard IMG={IMG1}  para={`In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.`}/>
    </SwiperSlide>

    <SwiperSlide>
    <ClinetCard IMG={IMG2}  para={`In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.`}/>

    </SwiperSlide>

    <SwiperSlide>
    <ClinetCard IMG={IMG3}  para={`In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.`}/>

    </SwiperSlide>

    <SwiperSlide>
    <ClinetCard IMG={IMG4}  para={`In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.`}/>

    </SwiperSlide>

   
    
  </Swiper>
</div>
  )
}

export default Client
