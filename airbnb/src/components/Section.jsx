import { useRef } from "react";
import Card from "./Card";
import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

export default function Section({ title, data }) {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="ml-5 max-w-7xl mx-auto px-4 mt-11">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">

        {/* TITLE + ARROW */}
        <h2 className="text-xl font-semibold flex items-center gap-2">
          {title}
          <span className="h-7 w-7 flex items-center justify-center rounded-full 
          bg-gray-100 cursor-pointer hover:bg-gray-200 transition">
            <FiArrowRight size={16} />
          </span>
        </h2>

        {/* SCROLL ARROWS */}
        <div className=" flex gap-1">
          <button
            onClick={scrollLeft}
            className="h-8 w-8 flex items-center justify-center rounded-full 
            bg-gray-100 hover:bg-gray-200 transition"
          >
            <FiChevronLeft size={16} />
          </button>

          <button
            onClick={scrollRight}
            className="h-8 w-8 flex items-center justify-center rounded-full 
            bg-gray-100 hover:bg-gray-200 transition"
          >
            <FiChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* CARDS */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide py-2 scroll-smooth"
      >
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>

    </section>
  );
}
