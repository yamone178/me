import React from 'react'
import {VscGithub} from 'react-icons/vsc'
import {IoEyeOutline} from 'react-icons/io5'



const Card = (props) => {
  return (
    <div className='relative cursor-pointer'>


        <div className="card w-[350px]  lg:w-[450px] xl:w-[700px]   m-2 bg-white rounded-lg shadow">
            <div className="top relative h-[200px] lg:h-[250px] xl:h-[350px] group  overflow-hidden">
                <img className='w-full h-[100%] object-cover   group-hover:blur-[1.5px] rounded-lg' src={props.img} alt="" />
                <div className="absolute w-full h-[100%] lg:top-[300px] xl:top-[350px] bg-gradient  opacity-60  group-hover:top-0">

                  <div className=" flex items-center justify-center h-[200px] lg:h-[250px] xl:h-[350px] space-x-3 ">
                    <div className="cursor-pointer w-[50px] h-[50px] bg-gray-50 flex justify-center items-center rounded-2xl">
                     <a href={props.github} target='_blank'><VscGithub  className='text-[25px]'/></a>
                    </div>
                    <div className=" cursor-pointer w-[50px] h-[50px] bg-gray-50 flex justify-center items-center rounded-2xl">
                      <a href={props.demo} target='_blank'><IoEyeOutline  className='text-[25px]'/></a>
                    </div>
                   
                  </div>

                </div>
            </div>
            <div className="bottom flex flex-col p-4  justify-center items-center ">
               
                <div className="title font-semibold">
                        {props.title}
                    </div>
                    
                 </div>
        </div>

    </div>
  )
}

export default Card