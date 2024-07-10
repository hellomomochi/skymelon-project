import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Count from './time/Count';
import { FaPlus } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import axios from 'axios'; //เรียกใช้ API
import Inputroom from './components/Inputroom';
import OtherCount from 'C:/Users/ASUS/mochi-frontend/src/time/Count';

function Setting() {
  const user = useSelector((state) => state.user);
  const [checkAdmin, setCheckAdmin] = useState(user.userId);



  return (
    <div className='w-full flex justify-center '>
      <div className='flex flex-col items-center mt-[50px]'>
        {checkAdmin === 1 && (<div className='md:w-[1198px] flex flex-col items-center justify-center '>
          
          <div className='border-[2px] md:w-[1200px] w-[500px] py-[20px]'><Inputroom /></div>
          <div className='my-[20px] border-[2px] md:w-[1200px] w-[500px]'><OtherCount /></div>

        </div>)}
        <div className='bg-[#17468E] md:w-full w-[600px] md:h-[100px] h-[150px] flex flex-col items-center'>
          <div className='text-white text-[16px] mx-[10px] mt-[20px] text-start'> © Sirapassorn On-aun 2024 | Contact Detail |
            Phone : 0838513805 |
            Email : tangmo.conan@gmail.com: |
            Location : 90/275 Bangrakyai,
            Bangbuathong, Nonthburi 11110</div>
          <Link to='/profile'>
            <div className='text-yellow-300 hover:text-green-300 ml-[30px] '>--Review My Profile--</div>
          </Link>
        </div >
      </div>
    </div >
  );
}

export default Setting;
