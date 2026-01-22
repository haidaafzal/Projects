import { FiHeart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

export default function Card({ item }) {
  return (
    <div className="min-w-[180px] cursor-pointer flex-shrink-0">
      
      {/* IMAGE */}
      <div className="relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-[185px] h-[175px] object-cover rounded-xl"
        />

        {/* Badge */}
        <span className="absolute top-3 left-2 bg-gray-100 px-2 py-1 text-xs rounded-full font-medium shadow">
          Guest favorite
        </span>

        {/* Heart Icon */}
        <FiHeart className="absolute  top-3 right-3 text-xl text-white  hover:scale-110 transition-transform duration-200" />
      </div>

      {/* CONTENT */}
      <div className="mt-2 text-sm space-y-1">
        <p className="font-medium truncate">{item.title}</p>

        <div className="flex items-center gap-1 text-gray-500 whitespace-nowrap">
          <span>${item.price}</span>
          <span>for 2 nights ·</span>

          <FaStar className="text-sm text-gray-500" />
          <span>{item.rating}</span>
        </div>
      </div>
    </div>
  );
}
