import React from 'react'
import { Navbar } from 'flowbite-react'
import { Avatar } from 'flowbite-react'
import { Button } from 'flowbite-react'
import { HiSun } from "react-icons/hi";
import { HiOutlineMoon } from "react-icons/hi";


const NavBar = ({changeDark, dark, iconColor}) => {
  return (
    
<Navbar
  className={dark}
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
    <span className=" ml-5 self-center whitespace-nowrap text-xl font-semibold dark:text-white">
     Yamone
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
      href="/navbars"
      active={true}
      className='!text-primary-dark'
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      About
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Skills
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Portfolio
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>

  )
}

export default NavBar