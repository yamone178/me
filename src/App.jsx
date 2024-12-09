import React from 'react'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import { useState, useEffect } from 'react'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Tab from './components/Tab'
import { AiFillSetting} from 'react-icons/ai'
import { IoHomeSharp } from "react-icons/io5";
import {BsFillPersonFill} from 'react-icons/bs'
import {MdWork} from 'react-icons/md'
import {  Route, Routes, useLocation } from 'react-router-dom'



const App = () => {

 

  const [dark, setDark] = useState('')
  const [iconColor, setIconColor] = useState('black')

 const location = useLocation();
  
  const [path, setPath] = useState('')


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

  // const checkPath = (path) =>{
  //   if (currentPath === path) {
  //     setPath(path)
  //   }
  //    setPath('/home')
  // }

  const tabs= [
    {
      name: <IoHomeSharp /> ,
      path: '/home'
    },
    {
      name: <BsFillPersonFill />,
      path: '/about'
    },
    {
      name: <AiFillSetting />,
      path: '/skills'
    },
    {
      name: <MdWork/>,
      path: '/portfolio'
    },
   
        
  ]


 

  return (
   <div className={dark}>
     <div className="relative dark:bg-dark-bg ">
     <NavBar changeDark={changeDark} dark={dark} />

      <div className='mx-auto pt-3 sticky top-0 p-[30px] h-auto md:h-screen' >
         <div className="">
           {/* <div className="circle circle1 blob"></div> */}
              {/* <div className="circle circle2"></div> */}
              <div className="circle circle3 blob !w-full"></div>

              {/* <RouterProvider router={router}/> */}

              <div className="">
             
                <Routes>
                <Route path='/' element={<HeroSection/>} />
                  <Route path="/home" element={<HeroSection/>} />
                  <Route path="/about" element={<AboutMe />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                </Routes>
            
  
              </div>
        
         </div>

        <div className="w-full h-[100px] md:hidden"> </div>
        
       
      </div>


      <div className="fixed flex w-[290px] xl:w-[500px] h-[60px] xl:h-[80px] bg-gradient items-center  justify-evenly rounded-2xl bottom-5 lg:bottom-5 left-0 right-0 m-auto">
        {
            tabs.map((tab,index)=>{
            return <Tab 
             className={`${
              location.pathname === tab.path ? 'text-white font-bold' : 'text-pink-300  border-white '
            }`}
             tab={tab} key={index} />
            })
        }
        {/* <Tab className={`${currentPath === "/home"? 'text-white': 'text-black'}`}  tab={<IoHomeSharp />} to="/home" />
        <Tab className={`${currentPath === "/about" ? 'text-white': 'text-black'}`}  tab={<BsFillPersonFill />} to="/about" />
        <Tab className={`${currentPath === "/skills" ? 'text-white': 'text-black'}`}  tab={<AiFillSetting />} to="/skills" />
        <Tab className={`${currentPath === "/portfolio" ? 'text-white': 'text-black'}`}  tab={<MdWork/>} to="/portfolio" /> */}

        
        </div>

        <div className=" hidden fixed md:flex justify-center items-center vertical-text  top-0 h-[100%] w-[50px] btn-shadow bg-opacity-100 right-0">
           <p className='gradient font-bold tracking-widest dark:text-white  lg:text-[12px] xl:text-[17px]'> copyright@2024, YamoneMyatMoe</p>
        </div>
     </div>
   </div>
  )
}

export default App
