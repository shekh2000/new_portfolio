import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
                <p className='text-xl mt-20'>
                I am currently pursuing my <span className='font-bold text-blue-500'>Master of Technology (M.Tech)</span > from <span className='font-bold text-blue-500'>IIT Hyderabad</span>, where I delve into the intricate realms of advanced technology and its applications. This academic pursuit not only expands my theoretical understanding but also nurtures my practical skills in areas such as web development, ML etc.Through rigorous coursework and hands-on projects, I am constantly exploring innovative solutions to contemporary challenges in the ever-evolving landscape of technology.</p>
                <br />
                <p className='text-xl'>
                Prior to my M.Tech journey, I completed my <span className='font-bold text-blue-500'>Bachelor of Technology (B.Tech)</span> in Computer Science from <span className='font-bold text-blue-500'>Army Institue of Technology</span>, a foundational chapter that laid the cornerstone of my technical expertise. During my undergraduate years, I immersed myself in a diverse range of subjects, from algorithms and data structures to software engineering principles and computer networks.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About