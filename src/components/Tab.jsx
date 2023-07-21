import React from 'react'
import { NavLink } from 'react-router-dom'

const Tab = ({tab}) => {

  return (
    <NavLink to={tab.path} className='text-[25px] text-white' key={tab}>
        {tab.name}
    </NavLink>
  )
}

export default Tab