import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from './PLayout'
import axios from 'axios'; //เรียกใช้ API

import { setUserid, clearUserid } from "./slice/user";
import { useDispatch, useSelector } from 'react-redux'
//Selector : อ่านค่า //Dispatch: เขียนค่า

function Login() {
    //สร้างก่อน useSate
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user) //สำหรับเรียกใช้ค่า ในหน้านี้จะเช็ค userId ว่ามีมั้ยถ้าไม่มีให้ login

    const [isLoggedIn, setIsLoggedIn] = useState(!!user.userId); // กำหนดค่าเริ่มต้นของ isLoggedIn จาก user

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    // console.log('password', password)

    const handleLogout = () => {
        // ทำการออกจากระบบ โดยรีเซ็ตค่าการเข้าสู่ระบบเป็น false
        setIsLoggedIn(false);
        setEmail('');
        setPassword('');
        dispatch(clearUserid())
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/auth/login', {
                email,
                password
            }, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            });

            const data = response.data;

            setError('');
            // เก็บ token ใน local storage
            // ส่วนของการเข้าสู่ระบบสำเร็จ
            console.log('Login successful');
            const tokenS = data.token
            console.log('TokenK:', tokenS);

            // Set Authorization header for subsequent requests
            axios.defaults.headers.common['Authorization'] = tokenS;

            const response2 = await axios.get('http://localhost:5000/user/profile', {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": tokenS // เพิ่ม Authorization header ด้วย Token
                }
            });

            const data2 = response2.data;
            console.log('TokenB:', data2.token);
            console.log('User ID:', data2.id);
            const userID = data2.id

            // dispatch action เพื่อบันทึก userID ลงใน state
            dispatch(setUserid({ userId: userID }));
            // Redirect to the home page after successful registration
            setIsLoggedIn(true) // เปลี่ยนสถานะการ login เป็น true
            //navigate("/");

        } catch (error) {
            // แสดงข้อความแจ้งเตือนเมื่อเข้าสู่ระบบไม่สำเร็จ
            setError('Invalid email or password');
            console.error('Login error:', error);
            console.log('isLoggedIn3', isLoggedIn)

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



                    {/**กรอบกล่องเพิ่มชื่อเพลง */}
                    <div className='mt-[60px] border-[2px] md:w-[700px] w-[400px] h-[450px] md:rounded-[100px] rounded-[50px] flex flex-col items-center  bg-black bg-opacity-[30%]'>

                        {/*<div className='mt-[30px] text-[20px] text-[white]'>กรุณาเข้าสู่ระบบ</div>*/}

                        <div className='mt-[20px] mb-[10px] text-[24px]'>{isLoggedIn ? <div className="text-green-600 underline underline-offset-1">Login Success</div> : 'Please Login'}</div>
                        {isLoggedIn && <div className="text-black md:text-[32px] text-[22px] mt-[60px]">Welcome! All you can VOTE !!!!</div>}
                        {error && <div className="m-[0px] text-[18px]" style={{ color: 'red' }}>{error}</div>}
                        {!isLoggedIn ? (
                            <form action='#' onSubmit={handleSubmit} >
                                <div className='text-[17px] text-[white] italic font-thin self-start md:ml-[0px] ml-[0px]'>Email</div>

                                <input type='email' key="email" placeholder={"email"} value={email} onChange={handleEmailChange} required className='md:hover:w-[403px] hover:w-[303px] hover:h-[41px] mt-[2px] md:w-[400px] w-[300px] h-[40px] bg-white rounded-[5px] placeholder:italic  py-2 pl-2 pr-2 shadow-sm focus:outline-none  focus:ring-sky-500 focus:ring-1'></input>

                                <div className='mt-[30px] text-[17px] text-[white] italic font-thin self-start md:ml-[0px] ml-[0px]'>Password</div>

                                <input placeholder={"password"} key="password" type='password' value={password} onChange={handlePasswordChange} required className='md:hover:w-[403px] hover:w-[303px] hover:h-[41px mt-[2px] md:w-[400px] w-[300px] h-[40px] bg-white rounded-[5px] placeholder:italic  py-2 pl-2 pr-2 shadow-sm focus:outline-none  focus:ring-sky-500 focus:ring-1'></input>
                            </form>


                        ) : (
                            <button onClick={handleLogout} className="text-white hover:text-slate-300 mb-[40px] border-[2px] border-white rounded-[10px] w-[150px] h-[40px] m-[20px]">ออกจากระบบ</button>
                        )}

                        {/**กรอบ ปุ่ม ส่งรายชื่อ */}
                        <div className='mt-[20px] flex flex-row'>

                            {/**ข้างใน ปุ่ม ส่งรายชื่อ */}
                            <button type='submit' onClick={handleSubmit}>
                                <div className=' w-[110px] h-[110px] '>
                                    {/**กรอบรูปเมฆ */}
                                    <div className='w-[110px] h-[110px] flex justify-center items-center'>
                                        <img className='absolute hover:w-[110px] hover:h-[110px] w-[100px] h-[100px]' src='clouds-svgrepo-com.svg' />
                                        <div className=' mt-[23px] drop-shadow-md hover:text-pink-600'>
                                            Login
                                        </div>

                                    </div>
                                </div>
                            </button>

                            {/**สมัครสมาชิก */}
                            <Link to="/register">
                                <div className='mt-[75px] text-[13px] text-white italic underline decoration-1 hover:text-slate-300'>สมัครสมาชิก</div>
                            </Link>
                        </div>



                    </div>




                </div>
            </div >
        </>
    );
}
export default Login;