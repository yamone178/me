import React from 'react'
import Skill from './Skill'
import {motion as m} from 'framer-motion'

const Skills = () => {

  const skills = [
    {
      "HTML" : 350,
      "Css" : 300, 
      "Javascript": 260,
      "React": 220,
      "PHP" : 280,
      "Laravel": 300,
      "Tailwind" : 280,
      "Bootstrap": 300

      
    }
  ]

  return (
    <m.div
    initial={{opacity: 0}}
   animate={{opacity: 1}}
   transition={{duration: 2, ease: 'easeOut'}}
     className=' '>

        

        <div className="flex justify-center flex-col items-center ">
            <h2 className=' text-center  gradient font-bold text-title '>SKILLS</h2>
            <div className="w-[50px] h-[3px] bg-gradient"></div>
        </div>

        <div className="grid grid-cols-12  space-y-5 h-auto xl:h-[70vh]">

        {
          skills.map((object, index) => {
            return (
             Object.keys(object).map((key,index)=>{
              return (

                <div className=" col-span-12 md:col-span-6 lg:col-span-3 flex justify-center items-center"  key={index}>
                   <Skill title = {key} value = {object[key]} />

                </div>
                
              )
             }) 
            )
          })
        }
        
        </div>

       

        
    </m.div>
  )
}

export default Skills