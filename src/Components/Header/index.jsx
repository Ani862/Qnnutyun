import React from 'react'
import { FaHeart } from "react-icons/fa6";


function Header() {
  return (
     <div className='  text-gray-light gap-[20px] px-[20px]'>
        <p className='text-[30px]'>Good morning</p>
         <div className='flex gap-[30px] flex-wrap justify-center  ' >

             <div className='bg-[#3b3b3b] rounded-[7px]  w-[300px] h-[80px] flex items-center gap-[20px] cursor-pointer'>
                <div className='w-[80px] h-[80px] rounded-[7px] bg-[#906bc2] flex justify-center items-center'>
                    <FaHeart />
                </div>
                   <p className='text-[20px]'>Liked Songs</p>
                </div>

                <div className='bg-[#3b3b3b] rounded-[7px]  w-[300px] h-[80px] flex items-center gap-[20px] cursor-pointer'>
                  <div className='w-[80px] h-[80px] rounded-[2px] flex justify-center items-center'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/2048px-Netflix_icon.svg.png'/>
                  </div>
                  <p className='text-[20px]'>Neffex Playlist</p>
                </div>

                <div className='bg-[#3b3b3b] rounded-[7px]  w-[300px] h-[80px] flex items-center gap-[20px] cursor-pointer'>
                  <div className='w-[80px] h-[80px] rounded-[7px] flex justify-center items-center'>
                   <img className='rounded-[7px]' src='https://pbs.twimg.com/profile_images/1321436562043899911/V4_jIT4q_400x400.jpg'/>
                  </div>
                  <p className='text-[20px]'>K/DA</p>
                </div>

                <div className='bg-[#3b3b3b] rounded-[7px]  w-[310px] h-[80px] flex items-center gap-[20px] cursor-pointer'>
                  <div className='w-[80px] h-[80px] rounded-[7px] flex justify-center items-center'>
                    <img className='rounded-[7px]' src='https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da847c367b080d3acfede0402698'/>
                  </div>
                  <p className='text-[20px]'>Dance/Electonic Mix</p>
                </div>
              </div>
            </div> 

  )
}

export default Header