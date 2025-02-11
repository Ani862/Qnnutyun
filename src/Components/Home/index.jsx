import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { IoMdWifi } from "react-icons/io";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import '..//..//App.css'
import { Link } from 'react-router-dom';
import '../../App.css'

function Home() {
  return (
    <div className='md:flex w-[300px] bg-[black] p-[20px] gap-[25px]  flex-col fixed h-[100%] hidden '>   
        <div className='w-[164px] h-[49px] mb-[25px] text-gray-light cursor-pointer '>
            <img className='hover:text-[#1ed760]'  src='https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png'/>
        </div>
        <div className='none md:text-[#f0f6f2] gap-[10px] '>
          <Link to="/">
          <div className='hover:bg-[#3b3b3b] active:bg-[#3b3b3b] rounded-[6px] p-[10px] w-[255px] h-[45px] flex items-center gap-[10px] cursor-pointer'>
              <FaHome className='w-[24px] h-[25px] text-gray-light'/>
               <p className='w-[51px] h-[25px] text-gray-light  mb-[1px]'>Home</p>
            </div>
          </Link>
                 
            <div className=' hover:bg-[#3b3b3b] active:bg-[#3b3b3b] rounded-[6px] p-[10px] w-[255px] h-[45px] flex items-center gap-[10px] cursor-pointer' >
              <FaSearch  className='w-[24px] h-[25px] text-gray-light'/>
              <p className='w-[51px] h-[25px] text-gray-light list-none decoration-none mb-[1px]'>Search</p>
              </div> 
              
        </div>
        <div className='text-[#f0f6f2] gap-[25px] '>
            <div className='hover:bg-[#3b3b3b] active:bg-[#3b3b3b] rounded-[6px] p-[10px] w-[255px] h-[50px] flex items-center gap-[10px] cursor-pointer '>
              <FaPlusSquare className='w-[30px] h-[30px]' />
              <p className='w-[100px] mb-[1px]'>Create Playlist</p>
            </div>
            <div className='hover:bg-[#3b3b3b] active:bg-[#3b3b3b] rounded-[6px] p-[10px] w-[255px] h-[50px] flex items-center gap-[10px] cursor-pointer'>
              <div className='w-[30px] h-[30px] rounded-[2px] bg-[#906bc2] flex justify-center items-center'>
                 <FaHeart />
              </div>
              <p className='w-[100px] mb-[1px]'>Liked Songs</p>
            </div>
            <div className='hover:bg-[#3b3b3b] active:bg-[#3b3b3b] rounded-[6px] p-[10px] w-[255px] h-[50px] flex items-center gap-[10px] cursor-pointer'>
              <div className='bg-green w-[30px] h-[30px]  flex justify-center items-center rounded-[2px]'>
                <IoMdWifi className=' text-gren text-[18px]'  />
              </div>
              <p className='w-[100px] '>Your Episodes</p>
            </div>
        </div>
        <div className='text-[#f0f6f2] flex flex-col gap-[10px] p-[10px] '>
          <p className='text-[18px] hover:text-[#1ed760]'>FAV</p>
          <p className='text-[18px] hover:text-[#1ed760]'>Daily Mix 1</p>
          <p className='text-[18px] hover:text-[#1ed760]'>Discover Weekly</p>
          <p className='text-[18px] hover:text-[#1ed760]'>Malayalam</p>
          <p className='text-[18px]  hover:text-[#1ed760]'>Dance/Electronix Mix</p>
          <p className='text-[18px] hover:text-[#1ed760]'>EDM/Popular</p>
        </div>
        <div className='text-[#f0f6f2] gap-[25px] p-[10px]  flex cursor-pointer'>
          <FaRegArrowAltCircleDown className='text-[30px]' />
          <p className='text-[18px] hover:text-[#1ed760]'>Install App</p>
        </div>


    </div>
  )
}

export default Home