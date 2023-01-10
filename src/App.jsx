import React from 'react'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import { useState, useEffect } from 'react'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'

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
     <div className="dark:bg-dark-bg relative">
     <NavBar changeDark={changeDark} dark={dark} />

      <div className='w-[80%] mx-auto pt-3 sticky top-0'>
          {/* <div className="circle circle1 blob"></div> */}
              {/* <div className="circle circle2"></div> */}
              <div className="circle circle3 blob !w-full"></div>

        <HeroSection />

        <AboutMe />

        <Skills />

        <div className="h-screen"></div>
      </div>
     </div>
   </div>
  )
}

export default App