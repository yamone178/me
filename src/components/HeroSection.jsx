import React from 'react'
import pf from '../pf.jpg'

const HeroSection = () => {
  return (
   <div className="dark:bg-dark-bg">
     <div className='grid grid-cols-12  my-10 justify-between items-center'>

<div className="col-span-6 ">

  <div className="">
    <div className="md:w-[500px] ">
            <p className=' dark:text-white font-bold text-[40px] mb-3'>I'm Yamone Myat Moe, <br /> A Web Developer</p>
            <p className=' dark:text-[#eee] font-normal text-[20px] '>My main focus is to bring a standard website  to the user</p>
    
        </div>
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