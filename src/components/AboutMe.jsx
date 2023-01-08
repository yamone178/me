import React from 'react'
import pf2 from '../pf4.jpg'
import {BsDashLg} from "react-icons/bs"

const AboutMe = () => {

  const infos = ["Name","Age","Phone","Address", "Email","Github"]
  const values = [
    "Yamone Myat Moe", 
    "20",
    "09751035338",
    "Yangon",
    "yamonemyatmoe1592@gmail.com",
    "https://github.com/yamone178"
  ]

 
  return (
    <div className='mt-20 relative'>

        <div className="grid grid-cols-12">
            <div className="col-span-6 flex flex-col justify-between ">
            <h1 className="text-title  dark:text-white font-bold">GET <span className='text-pink-500'>TO </span>KNOW <span className='text-pink-500'>ME!</span></h1>

               <div className="w-[400px]">
                <p className='mt-5 text-justify dark:text-white'>
                        Hello there! My name is <span className='text-pink-500 font-semibold'>"Yamone Myat Moe"</span> but most people call me <span className='text-pink-500 font-semibold'>"Yamone"</span>. I love creating new things with code. I learned Web Development since 2021 and then I started a mini project. The Feeling of work done gave me energy to choose <span className='text-pink-500 font-semibold'>"Web Development"</span> as my career. Check out some of my project in Projects section. <br /> <br/>
                        <span className=''>
                        Feel free to Connect with me via email or follow me on Linkedin
                        </span>
                 </p>

                
               </div>

               <div className="w-[400px]">
                <div className={`btn-primary btn-shadow flex group w-full`} >
                          <span>Download CV </span>
                  </div> 
               </div>
            </div>
            <div className="col-span-6 ">
              <div className="flex items-center ">
                <BsDashLg className='text-pink-500 text-[30px] mr-5' />
                <h3 className='text-sub-title font-semibold dark:text-white'>Personal Infos</h3>
              </div>

              <ul className=' mt-5 space-y-2 font-semibold'>

                {
                  infos.map((info, index) =>{
                   return (
                      <li className='flex  items-center dark:text-white'>
                      <p className="w-[150px]">{info}</p>
                      <div className={`btn-primary btn-shadow flex group ${info === "Email" || info === "Github" ? "!w-auto px-3": ""}`} >
                        <span>{values[index]}</span>
                      </div>                
                    </li>
                   )
                  })
                }
               
              

                
              </ul>
            </div>


        </div>
    </div>
  )
}

export default AboutMe