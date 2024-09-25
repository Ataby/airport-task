import React from 'react'
import Travel from "../assets/images/travel.jpg";
import Hotel from "../assets/images/hotel.jpg";
import Baggage from "../assets/images/baggage.jpg";
import Car from "../assets/icons/car.svg";
import HotelIcon from "../assets/icons/hotel.svg";
import Umbrella from "../assets/icons/umbrella.svg";

const Images = () => {

      const images = [
            { img: Travel, icon: Car, text: "CAR RENTALS" },
            { img: Hotel, icon: HotelIcon, text: "HOTELS" },
            { img: Baggage, icon: Umbrella, text: "TRAVEL PACKAGES" },
          ];
        
  return (
      <div className="w-1/4 bg-[#f3f2f6] flex flex-col gap-4 p-4">
      {images.map((item) => {
        return (
          <div key={item.text} className="relative transition-transform duration-300 hover:scale-105">
            <div className="z-10 absolute bottom-4 left-4">
              <img src={item.icon} alt="" />
              <p className="text-white text-lg font-semibold">
                {item.text}
              </p>
            </div>

            <div className="relative">
              <img src={item.img} alt="" className="rounded-lg filter hue-rotate-30" />
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Images