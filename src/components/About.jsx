import React from 'react';
import AboutImg from '../assets/about.png'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#1B1C1E] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-yellow-300'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4'>
            <div className='sm:text-right text-2xl md:text-3xl lg:text-4xl font-bold'>
              <p>Hi. I'm Sitthipon Sinthuwongpusa, You can call me Fight. nice to meet you!</p>
            </div>
            <img src={AboutImg} alt="" className='rounded-2xl'/>
            <div>
              <p className='lg:text-lg'>I am Software Engineering student, at Thammasat University.
                I love about building software that improves
              the lives of those around me. I can create beautiful and powerful websites 
              and mobile application.
               I learned from my mistakes and constantly developed yourself</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
