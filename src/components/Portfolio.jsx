import React from 'react'
import Carousel from './Projects/Carousel'
import {motion as m} from 'framer-motion'


const Portfolio = () => {
  return (
    <m.div 
    initial={{opacity: 0}}
   animate={{opacity: 1}}
   transition={{duration: 2, ease: 'easeOut'}}
    className=''>
         <div className="flex justify-center flex-col items-center">
            <h2 className=' text-center  gradient font-bold text-title '>My Portfolio</h2>
            <div className="w-[50px] h-[3px] bg-gradient"></div>
        </div>

        <div className="mt-5">
          <Carousel />
        </div>
    </m.div>
  )
}

export default Portfolio