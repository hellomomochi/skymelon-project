import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from './PLayout'
import Googlelogin from './components/Googlelogin'
import Googlelogout from './components/Googlelogout'
import axios from 'axios'; //เรียกใช้ API

import { gapi } from 'gapi-script' //login google
//ติตตั้ง npm install gapi-script --legacy-peer-deps

import { setUserid, clearUserid } from "./slice/user";
import { useDispatch, useSelector } from 'react-redux'
//Selector : อ่านค่า //Dispatch: เขียนค่า

const clientId = '989711806113-lh64qbra7rv02ut7f6hh8r3dm2f1u60h.apps.googleusercontent.com'; // แทนที่ด้วย Client ID ที่ได้จาก Google Developer Console

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
        window.location.href = '/login'
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
            dispatch(setUserid({ userId: userID ,token: tokenS}));
            // Redirect to the home page after successful registration
            setIsLoggedIn(true) // เปลี่ยนสถานะการ login เป็น true
            window.location.href = '/' //ให้ refesh ทั้งหน้าเพื่อให้ profile

        } catch (error) {
            // แสดงข้อความแจ้งเตือนเมื่อเข้าสู่ระบบไม่สำเร็จ
            setError('Invalid email or password');
            console.error('Login error:', error);
            console.log('isLoggedIn3', isLoggedIn)

        }
    };

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: ""
            })
        }
        gapi.load('client:auth2', start)
    }, []);


    return (

        <div className='flex justify-center'>


                    {/**กรอบกล่องเพิ่มชื่อเพลง */}
                    <div className='mt-[500px] mb-[100px] border-[2px] md:w-[700px] w-[400px] h-[500px] md:rounded-[100px] rounded-[50px] flex flex-col items-center  bg-black bg-opacity-[30%]'>

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
                            <button onClick={handleLogout} className="text-white hover:text-slate-300 border-[2px] border-white rounded-[10px] w-[150px] h-[40px] m-[20px]">ออกจากระบบ</button>
                        )}

                        <div className="my-[10px]">
                            {!isLoggedIn ? (<Googlelogin />) : (
                                <Googlelogout />)}
                        </div>

                        {/**กรอบ ปุ่ม ส่งรายชื่อ */}
                        <div className=' flex flex-row '>

                            {/**ข้างใน ปุ่ม ส่งรายชื่อ */}
                            {!isLoggedIn &&<button type='submit' onClick={handleSubmit}>
                                <div className=' md:w-[250px] w-[260px] h-[110px] flex justify-end'>
                                    {/**กรอบรูปเมฆ */}
                                    <div className='w-[110px] h-[110px] flex justify-center items-center'>
                                        <img className='absolute hover:w-[110px] hover:h-[110px] w-[100px] h-[100px]' src='clouds-svgrepo-com.svg' />
                                        <div className=' mt-[23px] drop-shadow-md hover:text-pink-600'>
                                            Login
                                        </div>

                                    </div>
                                </div>
                            </button>}

                            {!isLoggedIn &&<div className="flex flex-row justify-start w-[170px]">
                                {/**สมัครสมาชิก */}
                                <Link to="/register">
                                    <div className='mt-[75px] md:text-[13px] text-[10px] text-white italic underline decoration-1 hover:text-slate-300'>สมัครสมาชิก</div>
                                </Link>
                                {/**ลืมรหัสผ่าน */}
                                <Link to="/ForgotPassword">
                                    <div className='mt-[75px] mx-[5px] md:text-[13px] text-[10px] text-white italic underline decoration-1 hover:text-slate-300'>ลืมรหัสผ่าน</div>
                                </Link>
                            </div>}
                        </div>


                    </div>

        </div>
    );
}
export default Login;