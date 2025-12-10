"use client";
import Image from "next/image";

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// ⚠️ **هام جداً**: استيراد الأنماط
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Swiper, SwiperSlide } from 'swiper/react';
export default function Hero() {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000 }}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        {" "}
        <Image
          src="/images/slider1.jpg"
          alt="Slide 1"
          width={1500}
          height={1500}
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Image
          src="/images/slider2.jpg"
          alt="Slide 2"
          width={1500}
          height={1500}
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Image
          src="/images/slider3.jpg"
          alt="Slide 3"
          width={1500}
          height={1500}
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Image
          src="/images/slider4.jpg"
          alt="Slide 4"
          width={1500}
          height={1500}
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Image
          src="/images/slider5.jpg"
          alt="Slide 5"
          width={1500}
          height={1500}
        />
      </SwiperSlide>
    </Swiper>
  );
}
