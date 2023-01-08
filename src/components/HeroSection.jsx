import React from 'react'


const HeroSection = () => {
  return (
   <div className="dark:bg-dark-bg mt-20">
     <div className='grid grid-cols-12  my-10 justify-between items-center'>

<div className="col-span-6 ">

  <div className="">
    <div className="md:w-[500px] mb-8">
            <p className='dark:text-[#ccc] font-bold tracking-wider text-[15px] mb-3'>Welcome To My World!</p>
            <p className='  gradient font-bold text-[40px] mb-3'>I'm Yamone Myat Moe, <br />  <span className='text-black dark:text-white'>A Web Developer</span></p>
            <p className=' dark:text-[#eee] font-normal text-[20px] '>My main focus is to bring a standard website  to the user</p>
    
    </div>

    <div className="btn-primary btn-shadow flex group">
     <span>More About Me</span>
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