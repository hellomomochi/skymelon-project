import React from 'react';
import { Link } from "react-router-dom";
import Layout from './PLayout'
import PHome from './PHome'


function Fourth() {

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


                    {/**กรอบแถวสาขา */}
                    <div className='flex flex-row '>

                        {/**กรอบรหัสสาขา */}
                        <div className='w-[300px] h-[300px]'>
                            {/**ข้างในสาขา */}
                            <div className='absolute w-[300px] h-[300px]'>
                                <img className='w-[300px] h-[300px] ' src='yellow-sun-and-snow-with-blue-cloud-16542.svg'></img>
                                <div className='absolute top-[110px] left-[90px] text-[50px] font-semibold '>KM4</div>
                            </div>
                        </div>

                        {/**กรอบชื่อสาขา */}
                        <div className='w-[300px] h-[300px]'>
                            {/**ข้างในชื่อสาขา */}
                            <div className='absolute md:top-[500px] top-[600px] w-[350px] h-[300px]'>
                                <div className='text-[40px]  text-black drop-shadow-[2px_1px_rgba(0,0,0,0.2)]'>
                                เพลงฮิตติดหู</div>
                            </div>
                        </div>
                    </div>

                    {/**กรอบเพิ่มชื่อเพลง */}
                    <div className='mt-[60px] border-[2px] md:w-[700px] md:h-[700px] w-[400px] md:rounded-[100px] rounded-[50px] flex flex-col items-center  bg-black bg-opacity-[15%]'>

                        <div className='mt-[30px] mb-[40px] text-[20px] text-[white]'>ร่วมเสนอชื่อเพลงฮิตติดหูที่คุณคิดถึง</div>

                        <div className='text-[13px] text-[white] italic font-thin self-start md:ml-[150px] ml-[60px]'>กรอกชื่อเพลง</div>

                        <input className='md:hover:w-[403px] hover:w-[303px] hover:h-[41px] mt-[2px] md:w-[400px] w-[300px] h-[40px] bg-white rounded-[5px] placeholder:italic  py-2 pl-2 pr-2 shadow-sm focus:outline-none  focus:ring-sky-500 focus:ring-1'></input>

                        <div className='mt-[40px] text-[13px] text-[white] italic font-thin self-start md:ml-[150px] ml-[60px]'>กรอกชื่อศิลปิน</div>

                        <input className='md:hover:w-[403px] hover:w-[303px] hover:h-[41px] mt-[2px] md:w-[400px] w-[300px] h-[40px] bg-white rounded-[5px] placeholder:italic  py-2 pl-2 pr-2 shadow-sm focus:outline-none  focus:ring-sky-500 focus:ring-1'></input>

                        {/**กรอบ ปุ่ม ส่งรายชื่อ */}
                        <div className='mt-[20px] w-[110px] h-[110px] '>

                            {/**ข้างใน ปุ่ม ส่งรายชื่อ */}
                            <div className='w-[110px] h-[110px]  '>
                                {/**กรอบรูปเมฆ */}
                                <div className='w-[110px] h-[110px] flex justify-center items-center'>
                                    <img className='absolute hover:w-[110px] hover:h-[110px] w-[100px] h-[100px]' src='clouds-svgrepo-com.svg' />
                                    <div className=' mt-[23px] drop-shadow-md'>
                                        ส่งรายชื่อ
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/**กรอบรูปศิลปิน */}
                        <div className='mt-[30px] md:w-[550px] w-[350px] h-[170px] md:h-[250px]'>
                            <div className='md:w-[550px] w-[350px] h-[170px] md:h-[250px]'>
                                <img className='absolute md:w-[550px] w-[350px] h-[170px] md:h-[250px]' src="artist.png"></img>
                            </div>
                        </div>

                    </div>




                </div>
            </div>
        </>
    );
}
export default Fourth;