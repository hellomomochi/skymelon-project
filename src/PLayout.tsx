import React from 'react';
import { Link } from "react-router-dom";


function PLayout() {

    return (
        /**container */
        <div className='bg-[#17468E] w-full flex flex-col items-center'>
            {/**กรอบ bg เมฆ */}
            <div className='w-full md:h-[1920px] h-[3200px]'>
                {/*รูปเมฆ*/}
                <img className="w-full md:h-[1920px] h-[3200px]" src="https://cdn.pixabay.com/photo/2023/10/29/01/31/cloud-8348531_1280.png" />
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
            <div className='md:h-[200px] h-[400px]'></div >

        </div >
    );
}
export default PLayout;