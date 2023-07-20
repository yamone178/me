import React from 'react'

const SocialIcons = ({link,icon}) => {
  return (
    <div className="w-[58px]  h-[58px] bg-gradient relative top-[50%] bottom-0 flex justify-center  rounded-full items-center">
        <a href={link} className=" text-[20px] w-[55px]  h-[55px] dark:bg-bg-dark bg-white  absolute wrap-child  rounded-full flex justify-center items-center  dark:text-black text-font-title  ">
            {icon}
        </a>
    </div>

  )
}

export default SocialIcons