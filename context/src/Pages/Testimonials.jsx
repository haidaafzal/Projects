import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const testimonials = [
  { id: 1, name: "John Doe", img: "https://randomuser.me/api/portraits/men/32.jpg", text: "Great service and amazing team!", rating: 5 },
  { id: 2, name: "Jane Smith", img: "https://randomuser.me/api/portraits/women/45.jpg", text: "They built my website perfectly!", rating: 4 },
  { id: 3, name: "Mark Lee", img: "https://randomuser.me/api/portraits/men/64.jpg", text: "Professional and quick delivery.", rating: 5 },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">What Clients Say</h2>

      <Swiper spaceBetween={30} slidesPerView={1} loop autoplay>
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <div data-aos="fade-up" className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">
              <img src={t.img} alt={t.name} className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-blue-500" />
              <p className="italic text-gray-600 mb-4">"{t.text}"</p>
              <h4 className="font-bold text-lg">{t.name}</h4>
              <div className="flex justify-center mt-2">
                {Array(t.rating)
                  .fill()
                  .map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;
