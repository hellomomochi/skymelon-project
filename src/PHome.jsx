/**rsce คีย์ลัดหัวฟอร์ม */
import React from 'react';
import { Link } from "react-router-dom";
import Layout from './PLayout'


function PHome() {

    return (

        <>
            <div className='absolute'>
                <Layout />
            </div>
            {/*กรอบงานทั้งหมด*/}
            <div className='absolute w-full h-[1820px]'>
                <div className='flex flex-col'>

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

                    {/**กรอบ ก้อนเมฆ แถว 1*/}
                    <div className='mt-[50px] flex md:flex-row md:justify-center flex-col items-center'>

                        {/**กรอบ ก้อนเมฆอันที่ 1 กับ ปุ่มที่ 1*/}
                        <div className='flex flex-col items-center'>

                            {/**กรอบ ก้อนเมฆอันที่ 1*/}
                            <div className='w-[500px] h-[400px]'>
                                {/**ข้างใน ก้อนเมฆอันที่ 1*/}
                                <div className='absolute w-[500px] h-[450px] hover:animate-bounce'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" className="w-[500px] h-[450px]">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                                    </svg>


                                    {/**โลโก้ */}
                                    <div className='absolute top-[120px] left-[140px] w-[170px] h-[170px]'>
                                        <img className='w-[170px] h-[170px] rounded-[100%]' src='vecteezy_two-friends-laughing-together-icon-simple-vector-illustration_34956034.jpg'></img>
                                    </div>

                                    <div className='absolute top-[285px] left-[100px] text-[30px]  text-black tracking-wider'>สาขาคู่จิ้นชายยอดนิยม</div>
                                </div>
                            </div>

                            {/**ปุ่มที่ 1*/}
                            <Link to='/km1'>
                                <button className="tracking-wider not-italic w-[190px] h-[90px] py-2.5 px-5 text-[35px] font-medium text-gray-900 focus:outline-none bg-white rounded-[50%] border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">KM1</button>
                            </Link>

                        </div>

                        {/**กรอบ ก้อนเมฆอันที่ 2 กับ ปุ่มที่ 2*/}
                        <div className='flex flex-col items-center'>

                            {/**กรอบ ก้อนเมฆอันที่ 2*/}
                            <div className='w-[500px] h-[400px]'>
                                {/**ข้างใน ก้อนเมฆอันที่ 2*/}
                                <div className='absolute w-[500px] h-[450px] hover:animate-bounce'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" className="w-[500px] h-[450px]">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                                    </svg>


                                    {/**โลโก้ */}
                                    <div className='absolute top-[120px] left-[140px] w-[170px] h-[170px]'>
                                        <img className='w-[170px] h-[170px] rounded-[100%]' src='vecteezy_best-friend-icon-simple-vector-illustration_34956081.jpg'></img>
                                    </div>

                                    <div className='absolute top-[285px] left-[100px] text-[30px]  text-black tracking-wider'>สาขาคู่จิ้นหญิงยอดนิยม</div>
                                </div>
                            </div>

                            {/**ปุ่มที่ 2*/}
                            <Link to='/km2'>
                                <button className="not-italic w-[190px] h-[90px] py-2.5 px-5 text-[35px] font-medium text-gray-900 focus:outline-none bg-white rounded-[50%] border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">KM2</button>
                            </Link>

                        </div>


                    </div>

                    {/**กรอบ ก้อนเมฆ แถว 2*/}
                    <div className='flex md:flex-row md:justify-center flex-col items-center mt-[40px]  '>

                        {/**กรอบ ก้อนเมฆอันที่ 3 กับ ปุ่มที่ 3*/}
                        <div className='flex flex-col items-center'>

                            {/**กรอบ ก้อนเมฆอันที่ 3*/}
                            <div className='w-[500px] h-[400px]'>
                                {/**ข้างใน ก้อนเมฆอันที่ 3*/}
                                <div className='absolute w-[500px] h-[450px] hover:animate-bounce'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" className="w-[500px] h-[450px]">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                                    </svg>


                                    {/**โลโก้ */}
                                    <div className='absolute top-[120px] left-[130px] w-[170px] h-[170px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[179px] h-[170px]">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
                                        </svg>

                                    </div>

                                    <div className='absolute top-[280px] left-[95px] text-[30px]  text-black tracking-wider'>สาขาภาพยนตร์ยอดนิยม</div>
                                </div>
                            </div>

                            {/**ปุ่มที่ 3*/}
                            <Link to= '/km3'>
                                <button className="tracking-wider not-italic w-[190px] h-[90px] py-2.5 px-5 text-[35px] font-medium text-gray-900 focus:outline-none bg-white rounded-[50%] border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">KM3</button>
                            </Link>
                        </div>


                        {/**กรอบ ก้อนเมฆอันที่ 4 กับ ปุ่มที่ 4*/}
                        <div className='flex flex-col items-center'>

                            {/**กรอบ ก้อนเมฆอันที่ 4*/}
                            <div className='w-[500px] h-[400px]'>
                                {/**ข้างใน ก้อนเมฆอันที่ 4*/}
                                <div className='absolute w-[500px] h-[450px] hover:animate-bounce'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" className="w-[500px] h-[450px]">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                                    </svg>


                                    {/**โลโก้ */}
                                    <div className='absolute top-[120px] left-[130px] w-[170px] h-[170px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[179px] h-[170px] ">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
                                        </svg>
                                    </div>

                                    <div className='absolute top-[280px] left-[130px] text-[30px]  text-black tracking-wider'>สาขาเพลงฮิตติดหู</div>
                                </div>
                            </div>

                            {/**ปุ่มที่ 4*/}
                            <Link to='/km4'>
                                <button className="not-italic w-[190px] h-[90px] py-2.5 px-5 text-[35px] font-medium text-gray-900 focus:outline-none bg-white rounded-[50%] border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">KM4</button>
                            </Link>
                            
                        </div>

                    </div>
                </div>
            </div>


        </>
    );
}
export default PHome;