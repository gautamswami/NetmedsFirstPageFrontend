import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
const images = [
    {
      photo: "/images/slider1.jpg",
    },
    {
      photo: "/images/slider2.jpg",
    },
    {
      photo: "/images/slider3.jpg",
    },
  ];
  

export default function Swipermod() {
    return (
        <div>
            
        <div className='swiper-div'>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
    >
      {images.map((row) => (
        <SwiperSlide>
          <img className = 'slider-image' src={row.photo}></img>
        </SwiperSlide>
      ))}
    </Swiper></div>


        </div>
    )
}
