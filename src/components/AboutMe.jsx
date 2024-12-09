import React from 'react'
import {BsDashLg} from "react-icons/bs"
import {motion as m} from 'framer-motion'


const AboutMe = () => {

  const yamone ="https://drive.google.com/file/d/1OskAILm81uyxurJ2Vv0sXac9Yt277rLC/view?usp=sharing"

  const infos = ["Name","Age","Phone","Address", "Email","Github"]
  const values = [
    "Yamone Myat Moe", 
    "22",
    "09751035338",
    "Yangon",
    "yamonemyatmoe1592@gmail.com",
    "https://github.com/yamone178"
  ]

 
  return (
    <m.div 
    initial={{opacity: 0}}
   animate={{opacity: 1}}
   transition={{duration: 2, ease: 'easeOut'}}
    className='relative ' >

        <div className="grid grid-cols-6 lg:grid-cols-12 md:auto lg:h-[70vh] items-center">
            <div className="flex flex-col items-center justify-between col-span-6 my-7 lg:my-0">
            <h1 className=" text-[35px] lg:text-title xl:text-[60px]  dark:text-white font-bold">GET <span className='text-pink-500'>TO </span>KNOW <span className='text-pink-500'>ME!</span></h1>

               <div className=" w-full md:w-[350px] lg:w-[500px] xl:w-[700px]">
                <p className='mt-5 lg:text-[17px] xl:text-[27px] text-justify dark:text-white'>
                        Hello there! My name is <span className='font-semibold text-pink-500'>"Yamone Myat Moe"</span> but most people call me <span className='font-semibold text-pink-500'>"Yamone"</span>. I'm passionate about turning ideas into reality through code. The satisfaction of completing a project gave me energy to choose <span className='font-semibold text-pink-500'>"Web Development"</span> as my career. Check out some of my project in Projects section. <br /> <br/>
                        <span className=''>
                        Feel free to Connect with me via email or follow me on Linkedin
                        </span>
                 </p>

                
               </div>

               <div className=" w-full lg:w-[500px] xl:w-[700px]">
                <a
                 href={yamone} className={`btn-primary btn-shadow flex group w-full lg:h-auto xl:h-[60px] mt-[40px]`} 
                 target='_blank'
                 rel="noopener noreferrer">
                          <span>View My CV </span>
                  </a> 
               </div>
            </div>
            <div className="flex justify-center col-span-6">
              <div className=" w-full md:w-[500px] lg:w-auto">
              <div className="flex items-center ">
                <BsDashLg className='text-pink-500 text-[30px] mr-5' />
                <h3 className='font-semibold text-sub-title dark:text-white'>Personal Infos</h3>
              </div>

              <ul className='mt-5 space-y-2 font-semibold '>

                {
                  infos.map((info, index) =>{
                   return (
                      <li key={index} className='flex flex-col items-center md:flex-row dark:text-white'>
                      <p className="w-[150px] text-center md:text-left lg:text-[] xl:text-[27px]">{info}</p>
                      <div className={`btn-primary btn-shadow flex group w-full lg:h-[50px] lg:w-[300px] 
                      
                      `
                    } 
                      >
                        <span>{values[index]}</span>
                      </div>                
                    </li>
                   )
                  })
                }
               
              

                
              </ul>
              </div>
              
            </div>
            {/* <div className=" h-[140px] w-full col-span-6"></div> */}


        </div>
    </m.div>
  )
}

export default AboutMe