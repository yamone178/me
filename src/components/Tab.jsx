import React from 'react'
import { Link } from 'react-router-dom'

const Tab = ({tab}) => {

  return (
    <Link  to={tab.path} className='text-[25px] text-white'>
        {tab.name}
    </Link>
  )
}

export default Tab