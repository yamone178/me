import React from 'react'
import pf1 from '../../pf.jpg'



const Card = () => {
  return (
    <div className='relative'>


        <div className="card w-[300px] h-[280px] m-2 bg-white rounded-lg shadow">
            <div className="top">
                <img className='w-[300px] h-[200px]' src={pf1} alt="" />
            </div>
            <div className="bottom flex flex-col p-4  justify-center items-center ">
               
                <div className="title font-semibold">
                        Project Name
                    </div>
                    <div className="category text-xs font-light">
                        Project language
                    </div>
                 </div>
        </div>

    </div>
  )
}

export default Card