import React, { useState } from 'react';
import { Link } from "react-router-dom";

function End() {

    return (

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

    );
}

export default End;
