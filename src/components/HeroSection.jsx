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
     <div className='grid  grid-cols-6 lg:grid-cols-12   my-10 justify-between items-center'>

     
   <div className="absolute top-0 bottom-0 -left-[90px] space-y-3">
      {
        socialLinks.map((socialLink)=>{
         return  <SocialIcons link={socialLink.link} icon={socialLink.icon}/>
        })
      }
    
   </div>

  <div className="col-span-6  flex justify-center">


  <div className=" ">
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

<div className="col-span-6 flex justify-center">
  
    <div className=" flex justify-end">
     {/* <img src={pf} alt="" className='h-[450px] w-[450px] object-cover rounded-[50%]'/> */}

        <m.div
        ref={constraintRef}
        >
          <m.div 
          drag
          dragConstraints={constraintRef}
          className="blob w-[350px] h-[350px] lg:w-[450px] lg:h-[450px]  mt-[30px] mb-[30px] lg:mt-0 lg:mb-0 bg-img cursor-move"></m.div>
        </m.div>
        
    </div>
</div>

</div>

   
   </m.div>
  )
}

export default HeroSection