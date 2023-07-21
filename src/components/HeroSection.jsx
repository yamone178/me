import React, { useRef } from 'react'
import {motion as m} from 'framer-motion'
import SocialIcons from './SocialIcons'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub} from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const HeroSection = () => {

  const constraintRef= useRef(null)



  const socialLinks = [
    {
    'link': 'https://www.facebook.com/yamone.m.moe/',
    'icon': <FaFacebookF />
    },
    {
      'link': 'https://github.com/yamone178',
      'icon': <FaGithub />
    },
    {
      'link': 'https://www.linkedin.com/in/yamone-myat-moe-9099a6242/',
      'icon': <FaLinkedinIn />
    }
   
    
  ]

  return (
   <m.div
   initial={{opacity: 0}}
   animate={{opacity: 1}}
   transition={{duration: 2, ease: 'easeOut'}}
    className="dark:bg-dark-bg ">
     <div className='grid  grid-cols-6 lg:grid-cols-12 h-auto md:h-[70vh]  my-10 justify-between items-center'>

     
   

  <div className="col-span-6  flex justify-center sm:order-last order-1">


  <div className="flex  flex-col justify-center items-center md:items-start">
    <div className="md:w-[500px] lg:w-[550px] xl:w-[800px] mr-[20px] mb-8 text-center md:text-start">
            <p className='dark:text-[#ccc] font-bold tracking-wider lg:text-[15px] xl:text-[30px] mb-3'>Welcome To My World!</p>
            <p className='  gradient font-bold text-[26px] md:text-[40px] lg:text-[35px] xl:text-[50px] mb-3 '>I'm Yamone Myat Moe, <br />  <span className='text-black dark:text-white'>A Web Developer</span></p>
            <p className=' dark:text-[#eee] font-normal md:text-[20px] lg:[20px] xl:text-[33px] '>My main focus is to bring a standard website  to the user</p>
    
    </div>

    <div className="btn-primary btn-shadow flex group lg:h-auto xl:h-[70px] xl:text-[20px] ">
     <span>More About Me</span>
    </div>

    <div className="flex w-[200px] justify-between mt-0 ">
      {
        socialLinks.map((socialLink, index)=>{
         return  <SocialIcons link={socialLink.link} icon={socialLink.icon} key={index}/>
        })
      }
    

    </div>

  
  </div>

</div>

<div className="col-span-6 flex justify-center ">
  
    <div className=" flex justify-end">
     {/* <img src={pf} alt="" className='h-[450px] w-[450px] object-cover rounded-[50%]'/> */}

        <m.div
        ref={constraintRef}
        >
          <m.div 
          drag
          dragConstraints={constraintRef}
          className="blob w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[650px] xl:h-[650px]  mt-[30px] mb-[30px] lg:mt-0 lg:mb-0 bg-img cursor-move"></m.div>
        </m.div>
        
    </div>
</div>

</div>

   
   </m.div>
  )
}

export default HeroSection