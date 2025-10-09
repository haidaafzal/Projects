import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import ProductCard from "./ProductCard";

export default function FeaturedCarousel({ products }) {
  return (
    <Swiper slidesPerView={1} spaceBetween={10} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
      {products.map(product => (
        <SwiperSlide key={product.id}>
          <ProductCard product={product}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
