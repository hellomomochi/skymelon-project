import React from 'react';
import { Link } from "react-router-dom";


function PLayout() {

    return (
        /**container */
        <div className='bg-[#17468E] w-full flex flex-col items-center'>
            {/**กรอบ bg เมฆ */}
            <div className='w-full md:h-[2120px] h-[3200px]'>
                {/*รูปเมฆ*/}
                <img className="w-full md:h-[2120px] h-[3200px]" src="https://cdn.pixabay.com/photo/2023/10/29/01/31/cloud-8348531_1280.png" />
                <div className="wm top-[120px] right-[20px] drop-shadow-md">
                    {/**เม็ดแตงโม */}
                    <div className="wmStone">
                        <div className="wmStone__item"></div>
                        <div className="wmStone__item"></div>
                        <div className="wmStone__item"></div>
                        <div className="wmStone__item"></div>
                        <div className="wmStone__item"></div>
                        <div className="wmStone__item"></div>
                        <div className="wmStone__item"></div>
                        <div className="wmStone__item"></div>
                        <div className="wmStone__item"></div>
                    </div>
                </div>
                {/**sky melon 1st award */}
                <Link to="/1">
                    <div className="absolute top-[30px] right-[80px] text-[130px] text-[white]
            drop-shadow-[10px_10px_30px_rgb(229,242,5)] hover:drop-shadow-[10px_10px_rgba(0,0,0,0.2)] font-bold sans-serif">SKY MELON</div>
                    <div className="absolute top-[180px] right-[50px] text-[60px] text-[white] font-bold sans-serif drop-shadow-[4px_4px_1px_rgba(0,0,0,0.4)] ">1st AWARD</div>
                </Link>
            </div>

            {/**แท็บ contract */}
            <div className='md:h-[100px] h-[200px] flex flex-col items-center'>

                <div className='text-white text-[16px] mx-[10px] mt-[20px] text-start'> © Sirapassorn On-aun 2024 | Contact Detail |
                    Phone : 0838513805 |
                    Email : tangmo.conan@gmail.com: |
                    Location : 90/275 Bangrakyai,
                    Bangbuathong, Nonthburi 11110</div>
                <Link to='/profile'>
                    <div className='text-yellow-300 hover:text-green-300 ml-[30px] '>--Review My Profile--</div>
                </Link>
            </div >

        </div >
    );
}
export default PLayout;