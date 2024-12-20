import React from 'react'
import { Link } from 'react-router-dom'

const Tab = ({tab, className}) => {

 
  

  return (
    <Link   to={tab.path} className={`text-[25px] ${className}`}>
        {tab.name}
    </Link>
  )
}

export default Tab