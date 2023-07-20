import React from 'react'
import Card from './Card'
import {AiOutlineRight} from 'react-icons/ai'
import { AiOutlineLeft } from 'react-icons/ai'
import space from '../../space.png'
import muki from '../../muki.png'
import foodie from '../../foodie.png'
import qr from '../../qrcode.png'

const Carousel = () => {
    
    const projects = [
        {
            title : "Space Multi-Purpose",
            img: space,
            github: "https://github.com/yamone178/space",
            demo: "https://space-multiple-purpose.netlify.app/"
        },
        {
            title : "Muki Store",
            img: muki,
            github: "https://github.com/yamone178/Mukistore",
            demo: "https://muki-shop.netlify.app/"
        },
        {
            title : "Foodie",
            img: foodie,
            github: "https://github.com/yamone178/foodie",
            demo: "https://ymm-foodie.netlify.app/"
        },
        {
            title : "QR Code Reader",
            img: qr,
            github: "https://github.com/yamone178/QR-Code-Reader",
            demo: "https://qr-cod-reader.netlify.app/"
        },
    ]
    
    function scrollToRight() {
        console.log('right');
        document.getElementById('content').scrollLeft -=800;

    }

    function scrollToLeft() {
        document.getElementById('content').scrollLeft +=800;
    }

  return (
    <div className='relative h-[80vh]'>

        <div className="flex justify-end mb-auto xl:mb-[30px] mt-[50px] mr-[30px] md:mt-auto">
            <div className="">
                <button onClick={scrollToRight} className=' btn-primary btn-shadow  w-[60px] p-2 m-2'><AiOutlineLeft className='m-auto'/></button>
                <button onClick={scrollToLeft} className='  btn-primary btn-shadow  w-[60px]'><AiOutlineRight className='m-auto'/></button>
            </div>
        </div>
        <div id='content' className='p-4 mt-30 relative flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide'> 
            {
                projects.map((pj,index) =>{
                    return <div>
                                <Card 
                                 key={index}
                                 title={pj.title}
                                 img= {pj.img}
                                 github= {pj.github}
                                 demo= {pj.demo}
                                 />
                            </div>
                })
            }
            
           
        </div>
    </div>
  )
}

export default Carousel