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
import vocabNote from '../../vocab-note.png'
import vocabNoteExtension from '../../vocab-note-extension.png'






const Carousel = () => {

    const [activeTab, setActiveTab] = useState('all');
    
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
            title : "Vocabulary Notetaking and Learning System",
            img: vocabNote,
            github: "https://github.com/yamone178/Vocab-Note-New",
            demo: "https://vocab-note.netlify.app/"
        },
        {
            title : "Vocabulary Notetaking Chrome Extension",
            img: vocabNoteExtension,
            github: "",
            demo: "https://chromewebstore.google.com/detail/VocabNote%20Quick%20Save/oocgnffdcpahohpgkfkdioleeadhnnml?utm_source=item-share-cb"
        },
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

    const prioritizedAllProjects = [
        'Vocabulary Notetaking and Learning System',
        'Vocabulary Notetaking Chrome Extension'
    ];

    const allProjects = [...projects, ...backendProjects].slice().sort((firstProject, secondProject) => {
        const firstPriority = prioritizedAllProjects.indexOf(firstProject.title);
        const secondPriority = prioritizedAllProjects.indexOf(secondProject.title);

        if (firstPriority !== -1 || secondPriority !== -1) {
            if (firstPriority === -1) {
                return 1;
            }

            if (secondPriority === -1) {
                return -1;
            }

            return firstPriority - secondPriority;
        }

        return [...projects, ...backendProjects].indexOf(secondProject) - [...projects, ...backendProjects].indexOf(firstProject);
    });

    const displayedProjects =
        activeTab === 'frontend'
            ? projects
            : activeTab === 'fullstack'
                ? backendProjects
                : allProjects;
    
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
              
                <button onClick={() => setActiveTab('all')} className={` ${activeTab === 'all' ? '!bg-[#ea8cd3] !text-white btn-primary' : 'btn-primary'} btn-shadow w-[100px]`}>
                   All
                    </button>
                <button onClick={() => setActiveTab('frontend')} className={` ${activeTab === 'frontend' ? '!bg-[#ea8cd3] !text-white btn-primary' : 'btn-primary'} btn-shadow w-[100px] ml-4`}>
                   Frontend
                    </button>
                <button onClick={() => setActiveTab('fullstack')} className={` ${activeTab === 'fullstack' ? '!bg-[#ea8cd3] !text-white btn-primary' : 'btn-primary'} btn-shadow w-[100px] ml-4`}>
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
                displayedProjects.map((pj,index) =>{
                    return <div key={`${pj.title}-${index}`}>
                                <Card 
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