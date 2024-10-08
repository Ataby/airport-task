import React from 'react'
import Plane from "../assets/icons/planeFilledWhite.svg"
import TagFilled from "../assets/icons/tagFilled.svg"
import World from "../assets/icons/world.svg"
import Person from "../assets/icons/person.svg"
 

const Header = () => {
  return (
    <div className='flex justify-between p-8  bg-[#f3f2f6]'>
      <div className='flex  items-center '>
<img src={Plane} alt="" className='border rotate-90 bg-purple-700 p-1 rounded-full' />
      <p className='text-2xl text-gray-700 font-semibold'>PLANE SCAPE</p>
      </div>

      <div className='flex gap-4 '>
 
      
      <button className='flex text-gray-700 items-center transition-transform duration-300 hover:scale-110'><img src={TagFilled} alt="" />Deals</button>
      <button className='flex text-gray-700 items-center transition-transform duration-300 hover:scale-110'> <img src={World} alt="" />Discover</button>
      <button className='flex text-gray-700 items-center transition-transform duration-300 hover:scale-110'> <img src={Person} alt="" />Joane Smith</button>
 
      </div>
    </div>
  )
}

export default Header