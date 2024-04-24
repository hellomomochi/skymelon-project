import { Link } from "react-router-dom";
import Layout from './PLayout'
import { useParams, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

function Vote() {

    //ตั้งตัวแปรโดยใช้ useLocation เพื่อในการใส่ข้อความที่ช่อง Input ศิลปิน
    const { state } = useLocation(); // Access artist name from state passed using useNavigate
    const artistName = state?.artistName;

    //ใช้ useState เพื่อกำหนดการเลือกของจำนวนโหวต
    const [voteCount, setVoteCount] = useState(1); // Initialize voteCount state with 1

    const handleVoteChange = (event) => {
        const newVoteCount = parseInt(event.target.value);
        if (newVoteCount >= 1) {
            setVoteCount(newVoteCount);
        }
    };

    return (

        <>
            <div className='absolute'>
                <Layout />
            </div>
            {/*กรอบงานทั้งหมด*/}
            <div className='absolute w-full md:h-[1820px] h-[2900px]'>
                <div className='flex flex-col items-center'>

                    {/**กรอบ home/login */}
                    <div className='flex flex-row self-start'>

                        {/**กรอบ Home */}
                        <div className='md:mt-[300px] mt-[400px] self-start w-[200px] h-[30px]'>
                            <Link to="/">
                                <button className='w-[250px] h-[70px] bg-[#2267D1] shadow-md text-white text-[30px] hover:translate-x-[20px]'>HOME</button>
                            </Link>
                        </div>

                        {/*กรอบ login*/}
                        <Link to="/login">
                            <button className='md:mt-[340px] mt-[440px] ml-[100px] w-[100px] h-[30px] bg-white shadow-[4px_4px_rgba(0,0,0,0.6)] hover:duration-100 hover:animate-bounce'>เข้าสู่ระบบ</button>
                        </Link>

                    </div>

                    {/**กรอบส่งคะแนนโหวต */}
                    <div className='mt-[100px] bg-[#ff5b56] h-[500px] md:w-[550px] w-[470] md:rounded-[30px] rounded-[20px] shadow-[4px_4px_rgba(0,0,0,0.6)] flex flex-col items-center bg-opacity-[80%]'>
                        <div className='mt-[10px] md:text-[18px] text-[15px] mx-[70px]'>ร่วมส่งคะแนนโหวตศิลปินในสาขาที่คุณชื่นชอบ</div>
                        <div className='mt-[30px] text-white self-start md:ml-[200px] ml-[130px] italic'>สาขา</div>
                        <input value='คู่จิ้นชายยอดนิยม' className='mt-[3px] w-[200px] h-[40px] bg-white outline-none px-[15px] hover:outline-[#6B201E] rounded-[20px] shadow-[3px_4px_rgba(0,0,0,0.5)]'></input>
                        <div className='mt-[30px] text-white self-start md:ml-[200px]  ml-[130px] italic'>ศิลปิน</div>

                        <input className='mt-[3px] w-[200px] h-[40px] bg-white outline-none px-[15px] hover:outline-[#6B201E] rounded-[20px] shadow-[3px_4px_rgba(0,0,0,0.5)]'
                            value={artistName || ''} />


                        <div className='mt-[30px] text-white self-start md:ml-[240px] ml-[170px] italic'>จำนวน</div>

                        {/**กำหนด min ของ type number ให้เริ่มต้นที่ 1 ส่วน value ให้อ่านค่าในอีเว้น*/}
                        <input type='number' min="1" value={voteCount} 
                        onChange={handleVoteChange} 
                        className='mt-[3px] w-[100px] h-[40px] bg-white outline-none hover:outline-[#6B201E] px-[15px] rounded-[20px] shadow-[3px_4px_rgba(0,0,0,0.5)]'></input>
                       
                        <div className='w-[210px] h-[70px] flex justify-center items-center'>
                            <button className='mt-[80px] w-[200px] h-[60px] hover:w-[210px] hover:h-[70px] hover:text-black bg-[#7D2D2A] border-black rounded-[50px] text-white shadow-[3px_4px_rgba(0,0,0,0.5)] drop-shadow-[3px_4px_rgba(0,0,0,0.5)] text-[20px] hover:text-[25px]'>VOTE</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Vote;