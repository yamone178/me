import React from 'react'

const Tab = ({tab}) => {

  return (
    <a href={tab.path} className='text-[25px] text-white'>
        {tab.name}
    </a >
  )
}

export default Tab