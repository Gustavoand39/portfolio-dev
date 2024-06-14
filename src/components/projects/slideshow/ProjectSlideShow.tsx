"use client";

import Image from "next/image";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./slideshow.css";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const ProjectSlideShow = ({ images, title, className }: Props) => {
  return (
    <div className={className}>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        spaceBetween={10}
        navigation={true}
        autoplay={{ delay: 5000 }}
        modules={[FreeMode, Navigation, Autoplay]}
        className="mySwiper2"
      >
        {images.map((image) => (
          <SwiperSlide key={image} className="rounded-lg">
            <Image
              width={1500}
              height={1500}
              src={image}
              alt={title}
              className="rounded-xl border border-base-200"
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
