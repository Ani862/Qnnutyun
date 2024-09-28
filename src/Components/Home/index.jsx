import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";

function Home() {
  return (
    <div className='w-[300px] h-screen bg-[black] p-[25px]'>
        <div className='w-[164px] h-[49px] mb-[25px] text-gray-light'>
            <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png'/>
        </div>
        <div className='text-[#f0f6f2] gap-[25px] '>
            <div className='hover:bg-[#3b3b3b] active:bg-[#3b3b3b] rounded-[6px] p-[10px] w-[281] h-[50px] flex items-center gap-[10px] cursor-pointer'>
              <FaHome className='w-[24px] h-[25px]'/>
               <p className='w-[51px] h-[25px]'>Home</p>
            </div>
            <div className=' hover:bg-[#3b3b3b] active:bg-[#3b3b3b] rounded-[6px] p-[10px] w-[281] h-[50px] flex items-center gap-[10px] cursor-pointer' >
               <FaSearch  className='w-[24px] h-[25px]'/>
               <p className='w-[51px] h-[25px]'>Search</p>
            </div>     
        </div>
        <div className='text-[#f0f6f2] gap-[25px] '>
            <div>
              <FaPlusSquare className='w-[30px] h-[30px]' />
              <p>Create Playlist</p>
            </div>
            
            <div></div>
            <div></div>
        </div>


    </div>
  )
}

export default Home