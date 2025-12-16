"use client";
import Image from "next/image";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

// ⚠️ **هام جداً**: استيراد الأنماط
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Swiper, SwiperSlide } from "swiper/react";
import { Categories } from "@/constants/Categories";
export default function Hero() {
  return (
    <section className="bg-gray-200 p-5 ">
      <Swiper
        className="hero-swiper"
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1.1}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <SwiperSlide key={index}>
            {" "}
            <Image
              src={`/images/slider${index + 1}.jpg`}
              alt={`Slide ${index + 1}`}
              width={1500}
              height={1700}
              className="rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        className="mt-5"
        modules={[Autoplay, Navigation]}
        spaceBetween={12}
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 7,
          },
        }}
        loop={true} // تكرار الكروت بشكل مستمر
        autoplay={{
          delay: 10000, // كل 2 ثانية ينتقل تلقائي
          disableOnInteraction: false, // لو المستخدم سحب الكروت، الاستمرار بالتحريك
        }}
      >
        {Categories.map((item) => (
          <SwiperSlide key={item.id}>
            <article className="w-full min-h-[150px] bg-white p-5 cursor-pointer border border-gray-300">
              <div className="flex justify-center">
                <Image
                  src={item.link}
                  alt={item.title}
                  width={60}
                  height={60}
                />
              </div>
              <h3 className="text-center mt-5 text-md text-gray-700">
                {item.title}
              </h3>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
