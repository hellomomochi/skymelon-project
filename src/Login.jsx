import React from 'react';
import { Link } from "react-router-dom";
import Layout from './PLayout'
import axios from 'axios'; //เรียกใช้ API


function Login() {

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



                    {/**กรอบกล่องเพิ่มชื่อเพลง */}
                    <div className='mt-[60px] border-[2px] md:w-[700px] w-[400px] h-[450px] md:rounded-[100px] rounded-[50px] flex flex-col items-center  bg-black bg-opacity-[30%]'>

                        <div className='mt-[30px] mb-[40px] text-[20px] text-[white]'>กรุณาเข้าสู่ระบบ</div>

                        <div className='text-[17px] text-[white] italic font-thin self-start md:ml-[150px] ml-[60px]'>Email</div>

                        <input className='md:hover:w-[403px] hover:w-[303px] hover:h-[41px] mt-[2px] md:w-[400px] w-[300px] h-[40px] bg-white rounded-[5px] placeholder:italic  py-2 pl-2 pr-2 shadow-sm focus:outline-none  focus:ring-sky-500 focus:ring-1'></input>

                        <div className='mt-[40px] text-[17px] text-[white] italic font-thin self-start md:ml-[150px] ml-[60px]'>Password</div>

                        <input type='password' className='md:hover:w-[403px] hover:w-[303px] hover:h-[41px mt-[2px] md:w-[400px] w-[300px] h-[40px] bg-white rounded-[5px] placeholder:italic  py-2 pl-2 pr-2 shadow-sm focus:outline-none  focus:ring-sky-500 focus:ring-1'></input>

                        {/**กรอบ ปุ่ม ส่งรายชื่อ */}
                        <div className='mt-[20px] flex flex-row'>

                            {/**ข้างใน ปุ่ม ส่งรายชื่อ */}
                            <div className=' w-[110px] h-[110px]  '>
                                {/**กรอบรูปเมฆ */}
                                <div className='w-[110px] h-[110px] flex justify-center items-center'>
                                    <img className='absolute hover:w-[110px] hover:h-[110px] w-[100px] h-[100px]' src='clouds-svgrepo-com.svg' />
                                    <div className=' mt-[23px] drop-shadow-md'>
                                        Login
                                    </div>
                                </div>
                            </div>
                            {/**สมัครสมาชิก */}
                            <Link to="/register">
                                <div className='mt-[75px] text-[13px] text-white italic underline decoration-1'>สมัครสมาชิก</div>
                            </Link>
                        </div>



                    </div>




                </div>
            </div>
        </>
    );
}
export default Login;