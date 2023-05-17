import React from 'react'
import Card from './Card'
import {AiOutlineRight} from 'react-icons/ai'
import {AiOutlineLeft} from 'react-icons/ai'

const Carousel = () => {
    
    function scrollToRight() {
        console.log('right');
        document.getElementById('content').scrollLeft -=800;

    }

    function scrollToLeft() {
        document.getElementById('content').scrollLeft +=800;
    }

  return (
    <div className='relative'>

        <div className=" ">
            <button onClick={scrollToRight} className=' bg-black  dark:bg-white w-[90px] p-2 m-2'><AiOutlineRight/></button>
            <button onClick={scrollToLeft} className=' bg-black  dark:bg-white w-[90px]'><AiOutlineRight/></button>
        </div>
        <div id='content' className='p-4 mt-25 relative flex items-center justify-start overflow-x-auto scroll-smooth'> 
            <div>
                <Card />
            </div>
            <div>
                <Card />
            </div>
            <div>
                <Card />
            </div>
            <div>
                <Card />
            </div>

        </div>
    </div>
  )
}

export default Carousel