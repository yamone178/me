import React, { useState } from 'react'
import Card from './Card'
import {AiOutlineRight} from 'react-icons/ai'
import { AiOutlineLeft } from 'react-icons/ai'
import space from '../../space.png'
import muki from '../../muki.png'
import foodie from '../../foodie.png'
import qr from '../../qrcode.png'
import vocal from '../../vocal.png'
import social from '../../social media.png'
import zodiac from '../../zodiac channel.png'
import retail from '../../retail-campaign.png'






const Carousel = () => {

    const [Frontend, setFrontend] = useState(true);
    
    const projects = [
        {
            title : "Retail Campaign Website",
            img: retail,
            github: "https://github.com/yamone178/camping-retail-sfu",
            demo: "https://rcc-camping-retail.netlify.app/"
        },
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

    const backendProjects = [
        {
            title : "Vocabulary note",
            img: vocal,
            github: "https://github.com/sanneiphyo/vocab_note_react",
            demo: "",
            description: "Vocabulary Note with random quiz, built with react and backend Laravel Api"
        },
        {
            title : "Socail Media Campaign",
            img: social,
            github: "https://github.com/yamone178/social_media_campaign",
            demo: "",
            description: "Full stack web application with pure PHP"
        },
        {
            title : "Zodiac Channel",
            img: zodiac,
            github: "https://github.com/yamone178/zodiac-channel",
            demo: "",
            description: "This is an ongoing project with Laravel and React js"
            
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

        

        <div className="flex justify-between mb-auto xl:mb-[30px] mt-[50px] mr-[30px] md:mt-auto">
             <div className="">
              
                <button onClick={()=>setFrontend(true)} className={` ${Frontend === true ? '!bg-[#ea8cd3] !text-white btn-primary': 'btn-primary'}  btn-shadow w-[100px]`}>
                   Frontend
                    </button>
                <button onClick={()=>setFrontend(false)} className={` ${Frontend === false ? '!bg-[#ea8cd3] !text-white btn-primary': 'btn-primary'}  btn-shadow w-[100px] ml-4`}>
                    Full Stack
                </button>
                
            </div>
            <div className="">
                <button onClick={scrollToRight} className=' btn-primary btn-shadow  w-[60px] p-2 m-2'><AiOutlineLeft className='m-auto'/></button>
                <button onClick={scrollToLeft} className='  btn-primary btn-shadow  w-[60px]'><AiOutlineRight className='m-auto'/></button>
            </div>
        </div>
        <div id='content' className='relative flex items-center justify-start p-4 overflow-x-auto mt-30 scroll-smooth scrollbar-hide'> 
            {
                Frontend ? projects.map((pj,index) =>{
                    return <div>
                                <Card 
                                 key={index}
                                 title={pj.title}
                                 img= {pj.img}
                                 github= {pj.github}
                                 demo= {pj.demo}
                                 />
                            </div>
                }) :

                 backendProjects.map((pj,index) =>{
                    return <div>
                                <Card 
                                 key={index}
                                 title={pj.title}
                                 img= {pj.img}
                                 github= {pj.github}
                                 demo= {pj.demo}
                                 des = {pj.description}
                                 />
                            </div>
                })

               

              
            }


            
            
           
        </div>
    </div>
  )
}

export default Carousel