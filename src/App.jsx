import React from 'react'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import { useState, useEffect } from 'react'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Tab from './components/Tab'
import {AiTwotoneHome, AiFillSetting} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {MdWork} from 'react-icons/md'
import {RiMessage2Fill} from 'react-icons/ri'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


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

  const tabs= [
    {
      name: <AiTwotoneHome /> ,
      path: '/home'
    },
    {
      name: <AiFillSetting />,
      path: '/about'
    },
    {
      name: <BsFillPersonFill />,
      path: 'skills'
    },
    {
      name: <MdWork/>,
      path: 'portfolio'
    },
    {
      name: <RiMessage2Fill />,
      path: '/contact'
    }
        
  ]


 

  return (
   <div className={dark}>
     <div className="dark:bg-dark-bg relative h-auto lg:h-screen overflow-hidden">
     <NavBar changeDark={changeDark} dark={dark} />

      <div className='w-[80%] mx-auto pt-3 sticky top-0'>
          {/* <div className="circle circle1 blob"></div> */}
              {/* <div className="circle circle2"></div> */}
              <div className="circle circle3 blob !w-full"></div>

              {/* <RouterProvider router={router}/> */}

              <div className="">
              <BrowserRouter>
                <Routes>
                  <Route index element={<HeroSection/>} />
                  <Route path="/home" element={<HeroSection/>} />
                  <Route path="/about" element={<AboutMe />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                </Routes>
              </BrowserRouter>
  
              </div>
        

        
       
      </div>


      <div className="fixed flex w-[290px] h-[60px] bg-gradient items-center  justify-evenly rounded-2xl bottom-5 lg:bottom-5 left-0 right-0 m-auto">
        {
            tabs.map((tab,index)=>{
            return <Tab  tab={tab} key={index} />
            })
        }
        
        </div>

        <div className=" hidden md:flex justify-center items-center vertical-text  absolute top-0 h-screen w-[40px] btn-shadow bg-opacity-100 right-0">
           <p className='gradient font-bold tracking-widest dark:text-white text-[12px]'> copyright@2023, YamoneMyatMoe</p>
        </div>
     </div>
   </div>
  )
}

export default App
