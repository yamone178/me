import React from 'react'
import Skill from './Skill'

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
    <div className='mt-20'>

        

        <div className="flex justify-center flex-col items-center">
            <h2 className=' text-center  gradient font-bold text-title '>SKILLS</h2>
            <div className="w-[50px] h-[3px] bg-gradient"></div>
        </div>

        <div className="grid grid-cols-12 my-9 space-y-5">

        {
          skills.map((object, index) => {
            return (
             Object.keys(object).map((key,index)=>{
              return (

                <div className="col-span-3 flex justify-center items-center"  key={index}>
                   <Skill title = {key} value = {object[key]} />

                </div>
                
              )
             }) 
            )
          })
        }
        
        </div>

       

        
    </div>
  )
}

export default Skills