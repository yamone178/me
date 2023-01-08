import React from 'react'
import { Navbar } from 'flowbite-react'
import { Avatar } from 'flowbite-react'
import { HiSun } from "react-icons/hi";
import { HiOutlineMoon } from "react-icons/hi";


const NavBar = ({changeDark, dark, iconColor}) => {
  return (
    
<div className=" w-[100%] fixed z-[1000]  backdrop-blur-3xl bg-opacity-50 bg-white dark:bg-dark-bg ">
<Navbar
  className={`${dark} h-[65px] !bg-transparent  text-[16px] w-[80%] mx-auto  px-3  `}
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://flowbite.com/">
  <Avatar
      img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
      rounded={true}
      bordered={true}
      color="purple"
    />
    <span className=" ml-5 self-center whitespace-nowrap text-xl font-semibold text-white">
    
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
     
        <button className='text-icon ' onClick={changeDark}>
            { dark === 'dark' || localStorage.theme === 'dark' ? <HiSun  style={{color: 'white'}}/> : <HiOutlineMoon />}
        </button>
    
   
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
className=" "   href="/navbars"
      active={true}
    >
      Home
    </Navbar.Link>
    <Navbar.Link
    className=""
    href="/navbars">
      About
    </Navbar.Link>
    <Navbar.Link
    className=""
    href="/navbars">
      Skills
    </Navbar.Link>
    <Navbar.Link
    className=""
    href="/navbars">
      Portfolio
    </Navbar.Link>
    <Navbar.Link
    className=""
    href="/navbars">
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
</div>

  )
}

export default NavBar