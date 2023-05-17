import React from 'react'
import Carousel from './Projects/Carousel'


const Portfolio = () => {
  return (
    <div className='mt-40'>
         <div className="flex justify-center flex-col items-center">
            <h2 className=' text-center  gradient font-bold text-title '>My Portfolio</h2>
            <div className="w-[50px] h-[3px] bg-gradient"></div>
        </div>

        <div className="mt-20">
          <Carousel />
        </div>
    </div>
  )
}

export default Portfolio