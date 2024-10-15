import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <div >
        <div className='text-gray-light flex flex-wrap justify-center p-[20px]  gap-[50px]  lg:justify-between '>
          <div>
            <h4>Компания</h4>
            <p>О нас</p>
            <p>Вакансии</p>
            <p>For the Record</p>
          </div>
          <div>
            <h4>Сообщества</h4>
            <p>Для исполнителей</p>
            <p>Для разработчиков</p>
            <p>Реклама</p>
            <p>Для инвесторов</p>
            <p>Для вендоров</p>
          </div>
          <div>
            <h4>Полезные <br/>ссылки</h4>
            <p>Справка</p>
            <p>Бесплатное <br/> мобильное<br/> приложение</p>
          </div>
          <div>
            <h4>Планы Spotify</h4>
            <p>Индивидуальная</p>
            <p>подписка</p>
            <p>Spotify Premium</p>
            <p>Premium для двоих</p>
            <p>Premium для семьи</p>
            <p>Premium для студентов</p>
            <p>Бесплатная</p>
            <p> версия Spotify</p>
          </div>

          <div className='flex text-[32px] gap-[15px] cursor-pointer'>
            <div className='w-[50px] h-[50px] bg-[#3f3f3f] hover:bg-[#5c5b5b] active:bg-[#5c5b5b] flex justify-center items-center rounded-[50px]'>
               <FaInstagram />
            </div>
            <div className='w-[50px] h-[50px] bg-[#3f3f3f] hover:bg-[#5c5b5b] active:bg-[#5c5b5b] flex justify-center items-center rounded-[50px]'>
               <FaTwitter />
            </div>
            <div className='w-[50px] h-[50px] bg-[#3f3f3f] hover:bg-[#5c5b5b] active:bg-[#5c5b5b] flex justify-center items-center rounded-[50px]'>
               <FaFacebookSquare />
            </div>
          </div>
        </div>

        <hr className='text-gray-light border-3'/>

        <div className= 'text-gray-light flex flex-col gap-[20px]'>
          <div className=' flex flex-wrap justify-center  gap-[30px] md:flex flex-row '>
            <p>Юридическая информация </p>
            <p className='text-center'>Центр безопасности и конфиденциальности</p>
            <p className=''>  © 2024 Spotify AB</p>
          </div>
          <div className='flex flex-wrap justify-center gap-[30px]'>
            <p> Политика конфиденциальности</p>
            <p>Файлы cookie</p>
            <p>О рекламе</p>
            <p>Специальные возможности</p>
          </div>

        </div>
    </div>
  )
}

export default Footer