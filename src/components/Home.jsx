import React from 'react'
import HeroImage from '../assets/heroImage.png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black
    to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col
      items-center justify-center h-full px-4 md:flex-row'>
        <div className='pb-10 sm:p-0 flex flex-col justify-center'>
          <h2 className='text-4xl sm:text-7xl font-bold sm:mt-0 mt-2  text-white'>
            I'm a Full Stack Developer
          </h2>

          <p className='text-gray-500 py-4 max-w-md'>
          I am a computer science graduate with a strong grasp of algorithms and data structures. 
          I love doing web development, where I enjoy exploring 
          various technologies and enhancing my skills.
          </p>

          <div>
            <Link  to='projects' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Projects
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
              </span>
            </Link>
          </div>
        </div>
        <div className='md:mt-0'>
          <img src={HeroImage} alt="my profile"
          className='rounded-2xl md:w-2/3 w-4/5 mx-auto'/>
        </div>
      </div>
    </div>
  )
}

export default Home