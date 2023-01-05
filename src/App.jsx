import React from 'react'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import { useState, useEffect } from 'react'

const App = () => {

  const [dark, setDark] = useState('')
  const [iconColor, setIconColor] = useState('black')


  useEffect(()=>{
      if(localStorage.theme === ''){
          setDark('')
          setIconColor('black')
        
      }if(localStorage.theme === 'dark'){
          setDark('dark')
          setIconColor('white')
      
      }
      console.log(iconColor);
  },[dark, iconColor])

  const changeDark = () =>{
      if(dark ===  '' ){
          setDark('dark')
          localStorage.theme = 'dark'
          
      }
      if(dark === 'dark'){
          setDark('')
          localStorage.theme = ''
      }
  }


 

  return (
   <div className={dark}>
     <div className="dark:bg-dark-bg">
      <div className='w-[80%] mx-auto '>
          <div className="circle circle1 blob"></div>
              {/* <div className="circle circle2"></div> */}
              <div className="circle circle3 blob"></div>
        <NavBar changeDark={changeDark} dark={dark} />

        <HeroSection />

        <div className="h-screen"></div>
      </div>
     </div>
   </div>
  )
}

export default App