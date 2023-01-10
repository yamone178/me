import React from 'react'

const Skills = () => {
  return (
    <div className='mt-20'>

        

        <div className="flex justify-center flex-col items-center">
            <h2 className=' text-center  gradient font-bold text-title '>SKILLS</h2>
            <div className="w-[50px] h-[3px] bg-gradient"></div>
        </div>

        <div className=" skills mt-5 relative w-[160px] h-[160px]">
           <div className="outer w-[160px] h-[160px]     rounded-full p-[18px]">
                <div className="inner w-[120px] h-[120px]   rounded-full flex items-center justify-center">
                    <div id="number" className='flex justify-center items-center dark:text-white'>
                        65%
                    </div>
                </div>
           </div>

           <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
         </defs>
         <circle cx="80" cy="80" r="70" stroke-linecap="round" />
 </svg>
        </div>
    </div>
  )
}

export default Skills