import React from 'react'
import { Navbar } from 'flowbite-react'
import { Avatar } from 'flowbite-react'
import { HiSun } from "react-icons/hi";
import { HiOutlineMoon } from "react-icons/hi";




const NavBar = ({changeDark, dark, iconColor}) => {


  return (


    
<div className=" w-[100%] relative z-[1000]  backdrop-blur-3xl bg-opacity-50 bg-white dark:bg-dark-bg lg:h-auto xl:h-[100px] xl:p-[20px]">
<Navbar
  className={`${dark} h-[65px] !bg-transparent  text-[16px] w-[80%] mx-auto  px-3  `}
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://flowbite.com/">
    <h2> <span className='gradient text-[40px] font-bold'>Y</span><span className='font-bold text-[20px] gradient'>AMONE</span></h2>
  </Navbar.Brand>
  {/* <div className="">
    <h3>My Portfolio</h3>
  </div> */}
  <div className="flex md:order-2">
     
        <button className='text-icon  text-[25px] text-primary-dark' onClick={changeDark}>
            { dark === 'dark' || localStorage.theme === 'dark' ? <HiSun  style={{color: 'white'}}/> : <HiOutlineMoon />}
        </button>
    
   
   
  </div>
  
</Navbar>


</div>

  )
}

export default NavBar