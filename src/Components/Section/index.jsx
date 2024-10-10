import React from 'react'
import Home from '../Home';
import Music from '../Music';
import Footer from '../Footer';

function Section() {
  return (
      <div className='flex w-full bg-gray '>
        <Home/>
        <div className=' w-full flex flex-col p-[20px] gap-[30px]  pl-[320px]  '>  
          <Music/>
          <Footer/>
        </div>
      </div>
  )
}

export default Section

