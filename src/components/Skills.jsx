import React from 'react'
import Skill from './Skill'

const Skills = () => {

  const skills = [
    {
      "HTML" : 424,
      "Css" : 200, 
      "Javascript": 200,
      "PHP" : 200,
      "React": 200,
      
    }
  ]

  return (
    <div className='mt-20'>

        

        <div className="flex justify-center flex-col items-center">
            <h2 className=' text-center  gradient font-bold text-title '>SKILLS</h2>
            <div className="w-[50px] h-[3px] bg-gradient"></div>
        </div>

        <div className="flex justify-between mt-16">
        {
          skills.map((object, index) => {
            return (
             Object.keys(object).map((key,index)=>{
              return (
                
                <Skill key={index} title = {key} value = {object[key]} />
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