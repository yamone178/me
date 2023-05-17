import React from 'react'

const Skill = ({title, value}) => {

    const styles = {
        circle :{
            fill: "none",
            stroke: "URL(#GradientColor)",
            strokeWidth: '20px',
            strokeDasharray: value,
          
    
        }
    }

  return (
    <div className=" skills mt-5 relative w-[160px] h-[160px]">
    <div className="outer w-[160px] h-[160px]     rounded-full p-[18px]">
         <div className="inner w-[120px] h-[120px]   rounded-full flex items-center justify-center">
             <div id="number" className='flex justify-center items-center dark:text-white'>
                {title}
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
  <circle cx="80" cy="80" r="70" stroke-linecap="round" style={styles.circle}/>
</svg>
 </div>
  )
}

export default Skill