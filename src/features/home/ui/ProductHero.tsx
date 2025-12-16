"use client";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// ⚠️ **هام جداً**: استيراد الأنماط
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Swiper, SwiperSlide } from "swiper/react";
import ShoppingMotivation from "./ShoppingMotivation";

export default function ProductHero() {
  return (
    <>
      <Container grid={true} className="grid-cols-3 grid-rows-2 h-130 gap-2">
        <div className=" col-span-3 row-span-2 md:col-span-2 md:row-span-2 w-full h-full relative">
          <Swiper
            className="hero-swiper h-full"
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={1}
            loop
            autoplay={{ delay: 3000 }}
            navigation
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
          >
            <SwiperSlide className="h-full">
              <div className="relative w-full h-full">
                <Image
                  src="/images/sample1.jpg"
                  alt="Hero Image"
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-full">
              <div className="relative w-full h-full">
                <Image
                  src="/images/sample2.jpg"
                  alt="Hero Image"
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="hidden md:block col-span-1 row-span-1 w-full h-full relative">
          <Image src="/images/women.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="hidden md:block col-span-1 row-span-1 w-full h-full relative">
          <Image src="/images/women.jpg" alt="" fill className="object-cover" />
        </div>
      </Container>
      <ShoppingMotivation />
    </>
  );
}
