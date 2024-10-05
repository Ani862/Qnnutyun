import React from 'react'
import { TiArrowSortedDown } from "react-icons/ti";
import { FaUserCircle } from "react-icons/fa";
import Home from '../Home';
import { FaHeart } from "react-icons/fa6";
import Search from '../Search'

import Music from '../Music';

function Section() {
  return (
      <div className='flex w-full bg-gray '>
        <Home/>
        <div className=' w-full flex flex-col p-[20px] gap-[30px] '>
            <header className=' w-full flex justify-between  '> 
              <div className='flex'>
                <Search/>
              </div>    
              <div className='flex justify-end '>
                 <button className='bg-[black] w-[145px] h-[45px] rounded-[50px] text-gray-light flex justify-center  items-center gap-[15px]' ><FaUserCircle  className='text-[25px]'/>Angel <TiArrowSortedDown className='text-[20px]' /></button>  
              </div>    
           </header>

           {/* <div className='flex flex-col  text-gray-light gap-[20px]'>
              <p className='text-[30px]'>Good morning</p>
              <div className='flex gap-[30px] flex-wrap'>

                <div className='bg-[#3b3b3b] rounded-[7px]  w-[320px] h-[80px] flex items-center gap-[20px] cursor-pointer'>
                  <div className='w-[80px] h-[80px] rounded-[7px] bg-[#906bc2] flex justify-center items-center'>
                    <FaHeart />
                  </div>
                  <p className='text-[20px]'>Liked Songs</p>
                </div>

                <div className='bg-[#3b3b3b] rounded-[7px]  w-[320px] h-[80px] flex items-center gap-[20px] cursor-pointer'>
                  <div className='w-[80px] h-[80px] rounded-[2px] flex justify-center items-center'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/2048px-Netflix_icon.svg.png'/>
                  </div>
                  <p className='text-[20px]'>Neffex Playlist</p>
                </div>

                <div className='bg-[#3b3b3b] rounded-[7px]  w-[320px] h-[80px] flex items-center gap-[20px] cursor-pointer'>
                  <div className='w-[80px] h-[80px] rounded-[7px] flex justify-center items-center'>
                   <img className='rounded-[7px]' src='https://pbs.twimg.com/profile_images/1321436562043899911/V4_jIT4q_400x400.jpg'/>
                  </div>
                  <p className='text-[20px]'>K/DA</p>
                </div>

                <div className='bg-[#3b3b3b] rounded-[7px]  w-[320px] h-[80px] flex items-center gap-[20px] cursor-pointer'>
                  <div className='w-[80px] h-[80px] rounded-[7px] flex justify-center items-center'>
                    <img className='rounded-[7px]' src='https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da847c367b080d3acfede0402698'/>
                  </div>
                  <p className='text-[20px]'>Dance/Electonic Mix</p>
                </div>
              </div>
            </div> */}

            <div className='text-gray-light'>
              <p className='text-[30px]'>Shows you might like</p>
              <Music/>
            </div>
          </div>

      </div>

  )
}

export default Section