import React from 'react'
import pf from '../pf.jpg'
import {AiOutlineArrowDown} from 'react-icons/ai'

const HeroSection = () => {
  return (
   <div className="dark:bg-dark-bg">
     <div className='grid grid-cols-12  my-10 justify-between items-center'>

<div className="col-span-6 ">

  <div className="">
    <div className="md:w-[500px] mb-8">
            <p className='dark:text-[#ccc] font-bold tracking-wider text-[15px] mb-3'>Welcome To My World!</p>
            <p className=' dark:text-white font-bold text-[40px] mb-3'>I'm Yamone Myat Moe, <br /> A Web Developer</p>
            <p className=' dark:text-[#eee] font-normal text-[20px] '>My main focus is to bring a standard website  to the user</p>
    
    </div>

    <a className="dark:text-white border-2 border-pink-600  p-3 mt-4 flex w-[230px] justify-around items-center rounded-md hover:bg-pink-700 duration-150 hover:text-white group">
     <span>  MORE ABOUT ME </span>
      <span className='bg-pink-600 rounded-full w-[30px] h-[30px] flex items-center font-bold group-hover:bg-white  '><AiOutlineArrowDown className='m-auto text-white group-hover:text-black' /></span>
    </a>
  </div>

</div>

<div className="col-span-6 ">
    <div className=" flex justify-end">
     {/* <img src={pf} alt="" className='h-[450px] w-[450px] object-cover rounded-[50%]'/> */}

        <div className="blob bg-img"></div>
    </div>
</div>

</div>
   </div>
  )
}

export default HeroSection